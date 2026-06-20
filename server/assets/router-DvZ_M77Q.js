import { n as products } from "./products-vQN18fm1.js";
import { t as posts } from "./posts-CzvWsTdY.js";
import { t as Route$14 } from "./products._slug-U2xYueoR.js";
import { t as Route$15 } from "./blog._slug-vpTNpCw9.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChevronDown, Facebook, Instagram, Leaf, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/cobabuild/assets/styles-LPMR_EuS.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site/Header.tsx
var homenav = [{
	label: "Home",
	to: "/"
}];
var productCategories = [
	{
		name: "Coco Peat Blocks",
		slug: "coco-peat-blocks"
	},
	{
		name: "Coco Peat Briquettes",
		slug: "coco-peat-briquettes"
	},
	{
		name: "Grow Bags",
		slug: "grow-bags"
	},
	{
		name: "Husk Chips & Mulch",
		slug: "husk-chips"
	},
	{
		name: "PNG Mix Blocks",
		slug: "png-mix-blocks"
	},
	{
		name: "Coir Pots & Hanging Baskets",
		slug: "coir-pots"
	},
	{
		name: "Coir Discs",
		slug: "coir-discs"
	},
	{
		name: "Geotextiles & Geo Logs",
		slug: "geotextiles"
	},
	{
		name: "Coba Living Dolls",
		slug: "living-dolls"
	},
	{
		name: "Activated Carbon & Charcoal",
		slug: "activated-carbon"
	}
];
var nav = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Quality",
		to: "/quality"
	},
	{
		label: "Why Coco Peat",
		to: "/why-coco-peat"
	},
	{
		label: "Export",
		to: "/export"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Blog",
		to: "/blog"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/60 backdrop-blur"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-wide flex items-center justify-between h-18 py-3",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ jsx(Leaf, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("span", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-serif text-lg font-semibold tracking-tight",
							children: "Coba Peat Lanka"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Est. 1993"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden lg:flex items-center gap-7 text-sm",
					children: [
						/* @__PURE__ */ jsx("div", { children: homenav.map((n) => /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: "text-foreground/85 hover:text-primary transition-colors",
							activeProps: { className: "text-primary font-medium" },
							children: n.label
						}, n.to)) }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							onMouseEnter: () => setProductsOpen(true),
							onMouseLeave: () => setProductsOpen(false),
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/products",
								className: "flex items-center gap-1 text-foreground/85 hover:text-primary transition-colors py-2",
								children: ["Products ", /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })]
							}), productsOpen && /* @__PURE__ */ jsx("div", {
								className: "absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[28rem]",
								children: /* @__PURE__ */ jsx("div", {
									className: "bg-card border border-border rounded-xl shadow-xl p-3 grid grid-cols-2 gap-1",
									children: productCategories.map((c) => /* @__PURE__ */ jsx(Link, {
										to: "/products/$slug",
										params: { slug: c.slug },
										className: "px-3 py-2 rounded-md text-sm text-foreground/85 hover:bg-muted hover:text-primary transition-colors",
										children: c.name
									}, c.slug))
								})
							})]
						}),
						nav.map((n) => /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: "text-foreground/85 hover:text-primary transition-colors",
							activeProps: { className: "text-primary font-medium" },
							children: n.label
						}, n.to))
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:flex items-center gap-3",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground hover:brightness-105 px-4 py-2.5 text-sm font-semibold shadow-sm transition",
						children: "Get a Quote"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden grid place-items-center h-10 w-10 rounded-md hover:bg-muted",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide py-4 flex flex-col gap-1",
				children: [
					homenav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "px-3 py-2.5 rounded-md hover:bg-muted",
						activeProps: { className: "text-primary font-medium" },
						children: n.label
					}, n.to)),
					/* @__PURE__ */ jsx(Link, {
						to: "/products",
						onClick: () => setOpen(false),
						className: "px-3 py-2.5 rounded-md hover:bg-muted font-medium",
						children: "All Products"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pl-4 mb-2 grid grid-cols-1 gap-0.5",
						children: productCategories.slice(0, 6).map((c) => /* @__PURE__ */ jsx(Link, {
							to: "/products/$slug",
							params: { slug: c.slug },
							onClick: () => setOpen(false),
							className: "px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-muted",
							children: c.name
						}, c.slug))
					}),
					nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "px-3 py-2.5 rounded-md hover:bg-muted",
						children: n.label
					}, n.to)),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-3 inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-4 py-3 text-sm font-semibold",
						children: "Get a Quote"
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-foreground text-background/85 mt-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-wide py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid place-items-center h-10 w-10 rounded-full bg-accent text-accent-foreground",
							children: /* @__PURE__ */ jsx(Leaf, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-serif text-lg text-background",
								children: "Coba Peat Lanka"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-[0.18em] text-background/60",
								children: "(Pvt) Ltd · Since 1993"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-sm text-background/70 max-w-xs",
						children: "Nurturing Soil, Growing Futures. BOI-approved direct exporter of premium coco peat and coir products from Sri Lanka."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex gap-3",
						children: [
							Facebook,
							Linkedin,
							Instagram
						].map((Icon, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							"aria-label": "social",
							className: "grid place-items-center h-9 w-9 rounded-full bg-background/10 hover:bg-accent transition-colors",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-background font-serif text-base mb-4",
					children: "Explore"
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-2.5 text-sm",
					children: [
						{
							to: "/about",
							label: "About Us"
						},
						{
							to: "/products",
							label: "Products"
						},
						{
							to: "/quality",
							label: "Quality & Process"
						},
						{
							to: "/why-coco-peat",
							label: "Why Coco Peat"
						},
						{
							to: "/export",
							label: "Export Markets"
						},
						{
							to: "/gallery",
							label: "Gallery"
						},
						{
							to: "/blog",
							label: "Blog & News"
						},
						{
							to: "/downloads",
							label: "Downloads"
						}
					].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "hover:text-accent transition-colors",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-background font-serif text-base mb-4",
					children: "Head Office"
				}), /* @__PURE__ */ jsxs("address", {
					className: "not-italic text-sm space-y-3 text-background/75",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "flex gap-2.5",
							children: [
								/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5 text-accent" }),
								"410/99, Bullers Road,",
								/* @__PURE__ */ jsx("br", {}),
								"Colombo 07, Sri Lanka"
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "flex gap-2.5",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0 mt-0.5 text-accent" }), "+94-11-2698867 / +94-11-2685135"]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "flex gap-2.5",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0 mt-0.5 text-accent" }), "info@cobapeatlanka.com"]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h4", {
						className: "text-background font-serif text-base mb-4",
						children: "Factory"
					}),
					/* @__PURE__ */ jsx("address", {
						className: "not-italic text-sm space-y-3 text-background/75",
						children: /* @__PURE__ */ jsxs("p", {
							className: "flex gap-2.5",
							children: [
								/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5 text-accent" }),
								"Dangaspitiya Industrial Park,",
								/* @__PURE__ */ jsx("br", {}),
								"Kohilagedara, Kurunegala"
							]
						})
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-4 py-2.5 text-sm font-semibold hover:brightness-105 transition",
						children: "Request a Quote"
					})
				] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-background/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/55",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Coba Peat Lanka (Pvt) Ltd. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "BOI-approved · Exporting worldwide since 1993" })]
			})
		})]
	});
}
//#endregion
//#region src/components/site/WhatsAppButton.tsx
function WhatsAppButton() {
	return /* @__PURE__ */ jsxs("a", {
		href: "https://wa.me/94112698867",
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform",
		children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" }), /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full ring-2 ring-background animate-pulse" })]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-7xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-serif text-2xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-2xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Coba Peat Lanka (Pvt) Ltd Coco Peat & Coir Exporter, Sri Lanka" },
			{
				name: "description",
				content: "BOI-approved Sri Lankan manufacturer and direct exporter of premium coco peat blocks, grow bags, husk chips and coir products. Established 1993. Nurturing Soil, Growing Futures."
			},
			{
				name: "author",
				content: "Coba Peat Lanka (Pvt) Ltd"
			},
			{
				property: "og:site_name",
				content: "Coba Peat Lanka"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "Coba Peat Lanka (Pvt) Ltd Coco Peat & Coir Exporter, Sri Lanka"
			},
			{
				name: "twitter:title",
				content: "Coba Peat Lanka (Pvt) Ltd Coco Peat & Coir Exporter, Sri Lanka"
			},
			{
				name: "description",
				content: "A corporate website for a Sri Lankan coco peat and coir exporter, showcasing products and company information."
			},
			{
				property: "og:description",
				content: "A corporate website for a Sri Lankan coco peat and coir exporter, showcasing products and company information."
			},
			{
				name: "twitter:description",
				content: "A corporate website for a Sri Lankan coco peat and coir exporter, showcasing products and company information."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240e9ce8-1443-4e3d-b239-602db588eec4/id-preview-8292c08c--9c76c557-afec-448e-85b4-2fcac7420304.lovable.app-1781850098717.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240e9ce8-1443-4e3d-b239-602db588eec4/id-preview-8292c08c--9c76c557-afec-448e-85b4-2fcac7420304.lovable.app-1781850098717.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(WhatsAppButton, {})
			]
		})
	});
}
//#endregion
//#region src/routes/why-coco-peat.tsx
var $$splitComponentImporter$11 = () => import("./why-coco-peat-C5mbJ8Bi.js");
var Route$12 = createFileRoute("/why-coco-peat")({
	head: () => ({
		meta: [
			{ title: "Why Coco Peat Benefits & Applications | Coba Peat Lanka" },
			{
				name: "description",
				content: "Coco peat is a renewable, peat-moss-free growing medium with superior water retention, aeration and pH stability. Learn how horticulture, greenhouse and erosion-control sectors use it."
			},
			{
				property: "og:url",
				content: "/why-coco-peat"
			}
		],
		links: [{
			rel: "canonical",
			href: "/why-coco-peat"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$11 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		"/",
		"/about",
		"/products",
		"/quality",
		"/why-coco-peat",
		"/export",
		"/gallery",
		"/blog",
		"/contact",
		"/downloads"
	];
	const productPaths = products.map((p) => `/products/${p.slug}`);
	const postPaths = posts.map((p) => `/blog/${p.slug}`);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		...staticPaths,
		...productPaths,
		...postPaths
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/quality.tsx
var $$splitComponentImporter$10 = () => import("./quality-D0kIaeNr.js");
var Route$10 = createFileRoute("/quality")({
	head: () => ({
		meta: [
			{ title: "Quality & Process Coba Peat Lanka" },
			{
				name: "description",
				content: "In-house QC laboratory, chartered chemists, no-composting ultra-lightweight production process. BOI-approved Sri Lankan coco peat manufacturer."
			},
			{
				property: "og:title",
				content: "Quality & Process Coba Peat Lanka"
			},
			{
				property: "og:url",
				content: "/quality"
			}
		],
		links: [{
			rel: "canonical",
			href: "/quality"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/products.tsx
var $$splitComponentImporter$9 = () => import("./products-C7F03LXy.js");
var Route$9 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$8 = () => import("./gallery-DKrSd66m.js");
var Route$8 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery Factory, Products & Shipments | Coba Peat Lanka" },
			{
				name: "description",
				content: "Visual tour of our factory, drying yard, QC lab, products and shipments."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/export.tsx
var $$splitComponentImporter$7 = () => import("./export-uQabR0ZZ.js");
var Route$7 = createFileRoute("/export")({
	head: () => ({
		meta: [
			{ title: "Export to Australia & Worldwide Coba Peat Lanka" },
			{
				name: "description",
				content: "Direct coco peat exports from Sri Lanka to Australia, Japan, UK, USA and France. FCL 20'/40' shipments, fortnightly Australia sailings, AQIS-compliant."
			},
			{
				property: "og:url",
				content: "/export"
			}
		],
		links: [{
			rel: "canonical",
			href: "/export"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/downloads.tsx
var $$splitComponentImporter$6 = () => import("./downloads-DZSteuXq.js");
var Route$6 = createFileRoute("/downloads")({
	head: () => ({
		meta: [
			{ title: "Downloads Company Profile & Product Catalogue | Coba Peat Lanka" },
			{
				name: "description",
				content: "Download our company profile PDF and full product catalogue."
			},
			{
				property: "og:url",
				content: "/downloads"
			}
		],
		links: [{
			rel: "canonical",
			href: "/downloads"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$5 = () => import("./contact-CRE-_MnT.js");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Get a Quote Coba Peat Lanka" },
			{
				name: "description",
				content: "Request a quote for coco peat blocks, grow bags or coir products. Sri Lanka head office: 410/99 Bullers Road, Colombo 07. Phone: +94-11-2698867."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$4 = () => import("./blog-GHsbigBI.js");
var Route$4 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-BT10MEan.js");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Coba Peat Lanka | 30+ Years of Coir Exporting" },
			{
				name: "description",
				content: "Founded in 1993, Coba Peat Lanka is a BOI-approved Sri Lankan manufacturer of coco peat and coir products with in-house QC, engineering and exporting capabilities."
			},
			{
				property: "og:title",
				content: "About Coba Peat Lanka"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$2 = () => import("./routes-CaL6KXsY.js");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Coba Peat Lanka Coco Peat & Coir Exporter from Sri Lanka" },
			{
				name: "description",
				content: "Since 1993, Coba Peat Lanka has been a trusted BOI-approved exporter of coco peat, grow bags, husk chips and coir products to Australia, Japan, UK, USA and France."
			},
			{
				property: "og:title",
				content: "Coba Peat Lanka Nurturing Soil, Growing Futures"
			},
			{
				property: "og:description",
				content: "30+ years of premium coco peat and coir products from Sri Lanka. BOI-approved direct exporter."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/products.index.tsx
var $$splitComponentImporter$1 = () => import("./products.index-CO5XhVls.js");
var Route$1 = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title: "Products Coco Peat, Grow Bags & Coir | Coba Peat Lanka" },
			{
				name: "description",
				content: "Browse our full range of coco peat blocks, briquettes, grow bags, husk chips, coir pots, geotextiles and more all manufactured in Sri Lanka and exported worldwide."
			},
			{
				property: "og:title",
				content: "Products Coba Peat Lanka"
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/blog.index.tsx
var $$splitComponentImporter = () => import("./blog.index-k47fZK25.js");
var Route = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Blog & News Coba Peat Lanka" },
			{
				name: "description",
				content: "Insights, market updates and growing tips from a 30-year coco peat exporter."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var WhyCocoPeatRoute = Route$12.update({
	id: "/why-coco-peat",
	path: "/why-coco-peat",
	getParentRoute: () => Route$13
});
var SitemapDotxmlRoute = Route$11.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$13
});
var QualityRoute = Route$10.update({
	id: "/quality",
	path: "/quality",
	getParentRoute: () => Route$13
});
var ProductsRoute = Route$9.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$13
});
var GalleryRoute = Route$8.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$13
});
var ExportRoute = Route$7.update({
	id: "/export",
	path: "/export",
	getParentRoute: () => Route$13
});
var DownloadsRoute = Route$6.update({
	id: "/downloads",
	path: "/downloads",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var BlogRoute = Route$4.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var ProductsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var BlogIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var ProductsSlugRoute = Route$14.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
});
var BlogRouteChildren = {
	BlogSlugRoute: Route$15.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogRoute
	}),
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var ProductsRouteChildren = {
	ProductsSlugRoute,
	ProductsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	ContactRoute,
	DownloadsRoute,
	ExportRoute,
	GalleryRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	QualityRoute,
	SitemapDotxmlRoute,
	WhyCocoPeatRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
