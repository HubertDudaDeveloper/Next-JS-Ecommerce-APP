import { EDummyJSON, IProduct, IProductQuery } from "@/types/product";

export const producsService =  () => {
  const loadProducts = async (): Promise<IProduct[]> => {
    let products: IProduct[] = [];

    try {
      const getProducts: Promise<IProductQuery> = await(
        await fetch(`${EDummyJSON.URL}${EDummyJSON.PRODUCTS}`)
      ).json() as unknown as Promise<IProductQuery>;
      products = (await getProducts).products as IProduct[];
    } catch (e) {
      console.log(e);
    } finally {
    }

    return products;
  };

  return { loadProducts };
};

export default producsService;