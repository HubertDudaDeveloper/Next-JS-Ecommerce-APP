import { EDummyJSON, IProduct, IProductListItem, IProductQuery } from "@/types/product";

export const producsService =  () => {
  
  const loadProducts = async (): Promise<IProductListItem[]> => {
    let products: IProductListItem[] = [];

    try {
      const getProducts: Promise<IProductQuery> = await(
        await fetch(`${EDummyJSON.URL}${EDummyJSON.PRODUCTS}`)
      ).json() as unknown as Promise<IProductQuery>;
      products = (await getProducts).products as IProductListItem[];
    } catch (e) {
      console.log(e);
    } finally {
    }

    return products;
  };


  const loadProduct = async (id: string): Promise<IProduct | null> => {
    let product: IProduct | null = null;

    try {
      const getProducts: Promise<IProduct> = await(
        await fetch(`${EDummyJSON.URL}${EDummyJSON.PRODUCT}/${id}`)
      ).json() as unknown as Promise<IProduct>;
      product = await getProducts as IProduct;
    } catch (e) {
      console.log(e);
    } finally {
    }

    return product;
  };


  return { loadProducts, loadProduct };
};

export default producsService;