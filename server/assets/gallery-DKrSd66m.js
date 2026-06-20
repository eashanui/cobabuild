import { t as product_blocks_default } from "./product-blocks-DZ6Nm4c3.js";
import { n as product_fibre_default, r as product_husk_default, t as product_growbag_default } from "./product-growbag-DaguLDTX.js";
import { t as factory_default } from "./factory-D79cOz93.js";
import { t as grow_bags_default } from "./grow-bags-BnZNmkSb.js";
import { n as PageHero } from "./blocks-D4ASEEJW.js";
import { t as hero_cocopeat_default } from "./hero-cocopeat-d5up0MWt.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
var items = [
	{
		src: hero_cocopeat_default,
		caption: "Raw coco peat & fibre",
		h: "tall"
	},
	{
		src: factory_default,
		caption: "Block storage at our Kurunegala factory"
	},
	{
		src: grow_bags_default,
		caption: "Greenhouse trials in our grow bags",
		h: "tall"
	},
	{
		src: product_blocks_default,
		caption: "5kg compressed block"
	},
	{
		src: product_husk_default,
		caption: "Husk chips ready for baling"
	},
	{
		src: product_fibre_default,
		caption: "Coir craft and fibre products",
		h: "tall"
	},
	{
		src: product_growbag_default,
		caption: "Tomato production in Nature Grow Bags"
	}
];
function GalleryPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Gallery",
		title: "Inside our facility.",
		description: "A glimpse into our factory, drying yards, QC lab, products and shipments around the world."
	}), /* @__PURE__ */ jsx("section", {
		className: "section-y",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide",
			children: /* @__PURE__ */ jsx("div", {
				className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
				children: items.map((it, i) => /* @__PURE__ */ jsxs("figure", {
					className: "mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-card border border-border group",
					children: [/* @__PURE__ */ jsx("img", {
						src: it.src,
						alt: it.caption,
						loading: "lazy",
						className: `w-full object-cover ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} group-hover:scale-105 transition duration-500`
					}), /* @__PURE__ */ jsx("figcaption", {
						className: "p-4 text-sm text-muted-foreground",
						children: it.caption
					})]
				}, i))
			})
		})
	})] });
}
//#endregion
export { GalleryPage as component };
