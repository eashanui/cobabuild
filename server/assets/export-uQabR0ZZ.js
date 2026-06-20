import { n as PageHero, t as CTASection } from "./blocks-D4ASEEJW.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CalendarDays, FileText, Globe2, Ship } from "lucide-react";
//#region src/routes/export.tsx?tsr-split=component
function ExportPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Export",
			title: "Direct shipments to Australia & beyond.",
			description: "Australia is our largest market and has been since the 1990s. Today we also ship regularly to Japan, the UK, the USA and France."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-wide",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-16 relative",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-2 gap-10 items-start",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-bold uppercase tracking-wider",
								children: "Primary Market"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-4 font-serif text-3xl md:text-5xl leading-tight text-primary-foreground",
								children: "Shipping to Australia"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 text-primary-foreground/80 text-lg",
								children: "Decades of AQIS-compliant shipments, predictable lead times, and full documentation. We know what Australian biosecurity needs to see because we've been sending it since 1993."
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-4",
							children: [
								{
									icon: Ship,
									label: "Sailings",
									value: "Fortnightly to Melbourne, Sydney, Brisbane, Fremantle"
								},
								{
									icon: CalendarDays,
									label: "Lead time",
									value: "21–28 days port-to-port"
								},
								{
									icon: FileText,
									label: "Incoterms",
									value: "FOB, CIF, CFR"
								},
								{
									icon: Globe2,
									label: "Container",
									value: "20' FCL & 40' HC"
								}
							].map((d) => /* @__PURE__ */ jsxs("div", {
								className: "p-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15",
								children: [
									/* @__PURE__ */ jsx(d.icon, { className: "h-5 w-5 text-gold" }),
									/* @__PURE__ */ jsx("div", {
										className: "mt-2 text-xs uppercase tracking-wider text-primary-foreground/60",
										children: d.label
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1 text-sm font-medium",
										children: d.value
									})
								]
							}, d.label))
						})]
					})
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-card border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mb-10",
					children: [/* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Secondary Markets"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-serif text-3xl md:text-5xl leading-tight",
						children: "Regular shipments across the globe."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: [
						{
							country: "Japan",
							note: "High-spec grow bags and fine peat blocks for greenhouse."
						},
						{
							country: "United Kingdom",
							note: "Retail-pack briquettes and horticulture mixes."
						},
						{
							country: "United States",
							note: "Containers for ornamental nurseries and erosion control."
						},
						{
							country: "France",
							note: "Organic-grade coco peat for vineyards and ornamentals."
						}
					].map((m) => /* @__PURE__ */ jsxs("div", {
						className: "p-6 rounded-2xl bg-background border border-border",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-xl",
							children: m.country
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: m.note
						})]
					}, m.country))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {
			title: "Have an export inquiry?",
			description: "Tell us your destination port, container type and volume. We'll come back with a quote, sailing schedule and references from your region.",
			primaryLabel: "Export Inquiry",
			primaryTo: "/contact"
		})
	] });
}
//#endregion
export { ExportPage as component };
