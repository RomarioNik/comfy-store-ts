import { type LoaderFunction } from "react-router-dom";
import { Filters } from "@/components/Filters";
import { ProductsContainer } from "@/components/ProductsContainer";
import { PaginationContainer } from "@/components/PaginationContainer";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const result = await customFetch<ProductsResponse>(url);

  return { ...result.data };
};

export const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
