import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

export const Landing = () => {
  // const result = useLoaderData() as ProductsResponse;
  // console.log(data);

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
