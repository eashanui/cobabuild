import blocks from "@/assets/product-blocks.jpg";
import husk from "@/assets/product-husk.jpg";
import fibre from "@/assets/product-fibre.jpg";
import growbag from "@/assets/product-growbag.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "coco-peat-blocks",
    name: "Coco Peat Blocks",
    category: "Coco Peat",
    tagline: "High EC & Low EC compressed blocks for horticulture",
    image: blocks,
    description:
      "Premium washed and unwashed coco peat compressed into convenient blocks. Available in multiple grades and weights for nurseries, greenhouses and hydroponic systems. Excellent water retention with a stable, near-neutral pH.",
    specs: [
      { label: "Weights", value: "4.5kg, 5kg, 6kg, 25kg" },
      { label: "Grades", value: "High EC, Low EC, Buffered" },
      { label: "EC", value: "< 0.5 mS/cm (washed)" },
      { label: "pH", value: "5.5 – 6.5" },
      { label: "Moisture", value: "< 18%" },
      { label: "Packaging", value: "Shrink-wrapped, 20'/40' FCL" },
    ],
  },
  {
    slug: "coco-peat-briquettes",
    name: "Coco Peat Briquettes",
    category: "Coco Peat",
    tagline: "Compact briquettes for retail and small-scale growers",
    image: blocks,
    description:
      "Convenient, hand-friendly briquettes that expand up to 8x in water. Ideal for home gardening, retail packaging and propagation.",
    specs: [
      { label: "Weights", value: "650g, 330g" },
      { label: "Expansion", value: "Up to 8 litres / 650g" },
      { label: "EC", value: "< 0.5 mS/cm" },
      { label: "pH", value: "5.5 – 6.5" },
      { label: "Packaging", value: "Individual or bulk" },
    ],
  },
  {
    slug: "grow-bags",
    name: "Grow Bags & Nature Grow Bags",
    category: "Growing Solutions",
    tagline: "Open-top grow bags for tomatoes, cucumbers and soft fruits",
    image: growbag,
    description:
      "Ready-to-plant coco peat grow bags engineered for commercial greenhouse production. Our Nature Grow Bags use a low-impact, biodegradable outer sleeve.",
    specs: [
      { label: "Standard sizes", value: "100x20x15cm, 100x18x10cm" },
      { label: "Mix", value: "70/30, 50/50, 30/70 (peat/chips)" },
      { label: "Drainage", value: "Pre-cut drainage slits" },
      { label: "Variants", value: "Standard & Nature Grow Bags" },
    ],
  },
  {
    slug: "husk-chips",
    name: "Husk Chips & Mulch",
    category: "Mulch & Substrate",
    tagline: "Coco fibre chip bales for orchids, mulch and substrate mixes",
    image: husk,
    description:
      "Coarse coconut husk chips for excellent aeration and drainage. Suitable for orchids, anthuriums, and ornamental landscaping.",
    specs: [
      { label: "Chip size", value: "10–25mm" },
      { label: "Bale weight", value: "5kg compressed" },
      { label: "EC", value: "< 0.5 mS/cm" },
      { label: "Moisture", value: "< 18%" },
    ],
  },
  {
    slug: "png-mix-blocks",
    name: "PNG Mix Blocks",
    category: "Coco Peat",
    tagline: "Premium custom-blended substrate blocks",
    image: blocks,
    description:
      "Custom-blended coco peat and chip mix engineered to client specifications. Popular with Pacific market growers.",
    specs: [
      { label: "Mix ratio", value: "Custom 70/30, 60/40, 50/50" },
      { label: "Block size", value: "5kg standard" },
      { label: "Treatment", value: "Washed / buffered options" },
    ],
  },
  {
    slug: "coir-pots",
    name: "Coir Pots & Hanging Baskets",
    category: "Coir Crafts",
    tagline: "Biodegradable plant pots and liners",
    image: fibre,
    description:
      "Handcrafted coir pots and hanging basket liners. Fully biodegradable, ideal for nursery transplants and decorative landscaping.",
    specs: [
      { label: "Sizes", value: "4\", 6\", 8\", 10\", 12\", 14\"" },
      { label: "Material", value: "100% natural coir fibre" },
      { label: "Lifespan", value: "12–24 months outdoor" },
    ],
  },
  {
    slug: "coir-discs",
    name: "Coir Discs",
    category: "Coir Crafts",
    tagline: "Compressed seed-starting and propagation discs",
    image: husk,
    description:
      "Compressed coir discs expand into convenient growing plugs. Perfect for propagation trays and seed-starting kits.",
    specs: [
      { label: "Diameters", value: "30mm, 35mm, 42mm, 50mm" },
      { label: "Expansion", value: "5–6x original height" },
      { label: "Mesh wrap", value: "Biodegradable or netted" },
    ],
  },
  {
    slug: "geotextiles",
    name: "Geotextiles & Geo Logs",
    category: "Erosion Control",
    tagline: "Erosion-control textiles for slopes and shorelines",
    image: fibre,
    description:
      "Woven coir geotextiles and biologs provide sustainable erosion control for slopes, riverbanks, and restoration projects.",
    specs: [
      { label: "Weights", value: "400 / 700 / 900 gsm" },
      { label: "Roll size", value: "1m / 2m / 4m widths" },
      { label: "Geo Log diameter", value: "200mm, 300mm, 400mm" },
    ],
  },
  {
    slug: "living-dolls",
    name: "Coba Living Dolls",
    category: "Coir Crafts",
    tagline: "Decorative fibre figures that sprout grass",
    image: fibre,
    description:
      "Charming handmade coir-fibre figures with embedded seeds. A playful retail product that brings nature into the home.",
    specs: [
      { label: "Sizes", value: "Mini, Standard, Large" },
      { label: "Material", value: "Coir fibre, seed paper" },
      { label: "Shelf life", value: "12 months packaged" },
    ],
  },
  {
    slug: "activated-carbon",
    name: "Activated Carbon & Charcoal",
    category: "Industrial",
    tagline: "Coconut-shell activated carbon for filtration",
    image: husk,
    description:
      "High-grade activated carbon and charcoal derived from coconut shells. Used in water treatment, air filtration, and industrial purification.",
    specs: [
      { label: "Iodine value", value: "900 – 1100 mg/g" },
      { label: "Mesh sizes", value: "4x8, 6x12, 8x30, 12x40" },
      { label: "Moisture", value: "< 5%" },
    ],
  },
];

export const productCategoryGrid = [
  {
    title: "Coco Peat Blocks & Briquettes",
    description: "Compressed blocks, briquettes and PNG mix in multiple grades.",
    image: blocks,
    slug: "coco-peat-blocks",
  },
  {
    title: "Grow Bags & Planters",
    description: "Open-top and Nature Grow Bags for commercial greenhouses.",
    image: growbag,
    slug: "grow-bags",
  },
  {
    title: "Husk Chips & Mulch",
    description: "Coarse husk chips and fibre chip bales for aeration.",
    image: husk,
    slug: "husk-chips",
  },
  {
    title: "Fibre & Coir Crafts",
    description: "Coir pots, discs, geotextiles and living dolls.",
    image: fibre,
    slug: "coir-pots",
  },
];
