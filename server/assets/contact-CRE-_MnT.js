import { n as PageHero } from "./blocks-D4ASEEJW.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	const [sent, setSent] = useState(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Contact",
			title: "Get a quote, or just say hello.",
			description: "Tell us a little about what you need product, volume, destination and our team will respond within one business day."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide grid lg:grid-cols-5 gap-10",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border",
					children: sent ? /* @__PURE__ */ jsxs("div", {
						className: "text-center py-16",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid place-items-center h-16 w-16 mx-auto rounded-full bg-accent/15 text-accent",
								children: /* @__PURE__ */ jsx(Send, { className: "h-7 w-7" })
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-serif text-2xl",
								children: "Thanks we'll be in touch"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Your inquiry has been received. Our sales team typically responds within one business day."
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit,
						className: "grid gap-5",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "font-serif text-2xl",
								children: "Quote Request"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Name",
									name: "name",
									required: true
								}), /* @__PURE__ */ jsx(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Company",
									name: "company"
								}), /* @__PURE__ */ jsx(Field, {
									label: "Country",
									name: "country"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Product Interest",
									name: "product",
									placeholder: "e.g. 5kg blocks"
								}), /* @__PURE__ */ jsx(Field, {
									label: "Quantity / FCL",
									name: "quantity",
									placeholder: "e.g. 1x40' HC"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium",
									children: "Message"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 5,
									className: "rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none",
									placeholder: "Anything else we should know specs, destination port, timeline…"
								})]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "justify-self-start inline-flex items-center gap-2 rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition shadow-sm",
								children: ["Send Inquiry ", /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })]
							})
						]
					})
				}), /* @__PURE__ */ jsxs("aside", {
					className: "lg:col-span-2 space-y-5",
					children: [
						/* @__PURE__ */ jsx(InfoCard, {
							icon: MapPin,
							title: "Head Office (Colombo)",
							body: /* @__PURE__ */ jsxs(Fragment, { children: [
								"410/99, Bullers Road,",
								/* @__PURE__ */ jsx("br", {}),
								"Colombo 07, Sri Lanka"
							] })
						}),
						/* @__PURE__ */ jsx(InfoCard, {
							icon: MapPin,
							title: "Factory (Kurunegala)",
							body: /* @__PURE__ */ jsxs(Fragment, { children: [
								"Dangaspitiya Industrial Park,",
								/* @__PURE__ */ jsx("br", {}),
								"Kohilagedara, Kurunegala"
							] })
						}),
						/* @__PURE__ */ jsx(InfoCard, {
							icon: Phone,
							title: "Phone",
							body: /* @__PURE__ */ jsxs(Fragment, { children: [
								"+94-11-2698867",
								/* @__PURE__ */ jsx("br", {}),
								"+94-11-2685135"
							] })
						}),
						/* @__PURE__ */ jsx(InfoCard, {
							icon: Mail,
							title: "Email",
							body: "info@cobapeatlanka.com"
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/94112698867",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white hover:brightness-110 transition",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-semibold",
								children: "Chat on WhatsApp"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs opacity-90",
								children: "Typical reply within minutes"
							})] })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "pb-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-wide",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-2xl overflow-hidden border border-border h-[420px]",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "Coba Peat Lanka Colombo office",
						src: "https://www.google.com/maps?q=Bullers+Road+Colombo+07&output=embed",
						width: "100%",
						height: "420",
						loading: "lazy",
						className: "border-0",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			})
		})
	] });
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ jsxs("span", {
			className: "text-sm font-medium",
			children: [label, required && /* @__PURE__ */ jsx("span", {
				className: "text-destructive",
				children: " *"
			})]
		}), /* @__PURE__ */ jsx("input", {
			type,
			name,
			required,
			placeholder,
			className: "rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
		})]
	});
}
function InfoCard({ icon: Icon, title, body }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4 p-5 rounded-2xl bg-card border border-border",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid place-items-center h-11 w-11 shrink-0 rounded-lg bg-primary/10 text-primary",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-semibold text-sm",
				children: title
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-1 text-sm text-muted-foreground",
				children: body
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
