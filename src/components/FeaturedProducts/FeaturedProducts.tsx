import { SectionTitle } from "@/components/SectionTitle";
import { ProductsGrid } from "@/components/ProductsGrid";

export const FeaturedProducts = () => {
  return (
    <section className="pt-24 ">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};
