import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  country: z.string().trim().max(200).optional().or(z.literal("")),
  product: z.string().trim().max(200).optional().or(z.literal("")),
  quantity: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const { env } = getCloudflareContext();
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return NextResponse.json(
      {
        error: "The contact form isn't configured yet. Please reach out by phone or email instead.",
      },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check your input and try again." },
      { status: 400 },
    );
  }

  const { name, email, company, country, product, quantity, message } = parsed.data;

  const rows: Array<[string, string | undefined]> = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Country", country],
    ["Product Interest", product],
    ["Quantity / FCL", quantity],
  ];

  const html = `
    <h2>New Quote Request</h2>
    <table>
      ${rows
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td><strong>${label}:</strong></td><td>${escapeHtml(value!)}</td></tr>`,
        )
        .join("")}
    </table>
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Quote Request from ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
