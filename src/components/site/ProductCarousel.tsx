"use client";

import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/site/blocks";

type CarouselCard = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export function ProductCarousel({
  items,
  itemClassName = "sm:basis-1/2 lg:basis-1/3",
}: {
  items: CarouselCard[];
  itemClassName?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.slug} className={itemClassName}>
            <ProductCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2">
        <CarouselPrevious className="static translate-y-0 left-auto right-auto top-auto h-9 w-9" />
        <CarouselNext className="static translate-y-0 left-auto right-auto top-auto h-9 w-9" />
      </div>
    </Carousel>
  );
}
