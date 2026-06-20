import { n as PageHero } from "./blocks-D4ASEEJW.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Download, FileText } from "lucide-react";
//#region src/routes/downloads.tsx?tsr-split=component
var docs = [
	{
		title: "Company Profile",
		desc: "Our story, certifications, facilities, references and contact details.",
		size: "4.2 MB",
		file: "#"
	},
	{
		title: "Product Catalogue 2026",
		desc: "Full product range with technical specs, packaging and shipping options.",
		size: "8.7 MB",
		file: "#"
	},
	{
		title: "QC Report Sample",
		desc: "Example batch QC report for our 5kg High EC coco peat block.",
		size: "0.6 MB",
		file: "#"
	},
	{
		title: "Australia Buyer's Guide",
		desc: "AQIS compliance, sailing schedules and Incoterms reference for Australian buyers.",
		size: "1.8 MB",
		file: "#"
	}
];
function DownloadsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Downloads",
		title: "Everything procurement needs, in one place.",
		description: "Company profile, product catalogue, sample QC reports and market-specific buying guides."
	}), /* @__PURE__ */ jsx("section", {
		className: "section-y",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide grid sm:grid-cols-2 gap-6",
			children: docs.map((d) => /* @__PURE__ */ jsxs("a", {
				href: d.file,
				className: "group flex gap-5 p-7 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-accent transition",
				children: [/* @__PURE__ */ jsx("span", {
					className: "grid place-items-center h-14 w-14 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition",
					children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-xl",
							children: d.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: d.desc
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "text-xs text-muted-foreground uppercase tracking-wider",
								children: ["PDF · ", d.size]
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 text-sm font-semibold text-accent",
								children: ["Download ", /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })]
							})]
						})
					]
				})]
			}, d.title))
		})
	})] });
}
//#endregion
export { DownloadsPage as component };
