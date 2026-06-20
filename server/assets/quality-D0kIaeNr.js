import { n as PageHero, t as CTASection } from "./blocks-D4ASEEJW.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, FlaskConical, ShieldCheck } from "lucide-react";
//#region src/routes/quality.tsx?tsr-split=component
var steps = [
	{
		n: "01",
		title: "Husk Selection",
		body: "Sourced from Sri Lanka's coconut triangle and graded by hand."
	},
	{
		n: "02",
		title: "Processing",
		body: "Mechanical de-fibring and sieving produces clean peat and chips."
	},
	{
		n: "03",
		title: "Drying",
		body: "No-composting, ultra-lightweight drying method uniform moisture, no odour."
	},
	{
		n: "04",
		title: "QC Testing",
		body: "In-house lab tests EC, pH, moisture and physical properties."
	},
	{
		n: "05",
		title: "Packing",
		body: "Compressed into blocks, briquettes or bags to client specification."
	},
	{
		n: "06",
		title: "Export",
		body: "Loaded at our own bay, trucked to Colombo Port, shipped FCL worldwide."
	}
];
function QualityPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Quality & Process",
			title: "A consistent product, by design.",
			description: "Every block that leaves our factory has been through six controlled stages and tested in our own lab. That's the only way we know how to do this."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-wide grid lg:grid-cols-3 gap-6",
				children: [
					{
						icon: FlaskConical,
						title: "In-house QC lab",
						body: "Chartered chemists run EC, pH, moisture, and density tests on every batch."
					},
					{
						icon: Award,
						title: "Chartered chemists",
						body: "Our QC team holds professional chartered qualifications not just lab technicians."
					},
					{
						icon: ShieldCheck,
						title: "BOI-approved",
						body: "Registered with the Board of Investment of Sri Lanka for direct export."
					}
				].map((f) => /* @__PURE__ */ jsxs("div", {
					className: "p-7 rounded-2xl bg-card border border-border",
					children: [
						/* @__PURE__ */ jsx(f.icon, { className: "h-9 w-9 text-accent" }),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-serif text-xl",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.body
						})
					]
				}, f.title))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-card border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mb-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Process"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "From husk to export six stages."
					})]
				}), /* @__PURE__ */ jsx("ol", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: steps.map((s) => /* @__PURE__ */ jsxs("li", {
						className: "relative p-7 rounded-2xl bg-background border border-border",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-serif text-5xl text-accent/30",
								children: s.n
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-2 font-serif text-xl",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.body
							})
						]
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Certifications"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-4xl",
						children: "Trusted & certified"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto",
						children: [
							"BOI Sri Lanka",
							"ISO 9001 (pending)",
							"Coir Council Member",
							"EDB Sri Lanka"
						].map((c) => /* @__PURE__ */ jsx("div", {
							className: "aspect-video grid place-items-center rounded-xl bg-card border border-border p-4 text-sm font-medium text-muted-foreground",
							children: c
						}, c))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Want a sample or test report?",
			description: "We're happy to send a physical sample and a recent QC report so your agronomy team can verify our specifications first-hand.",
			primaryLabel: "Request a Sample",
			primaryTo: "/contact"
		})
	] });
}
//#endregion
export { QualityPage as component };
