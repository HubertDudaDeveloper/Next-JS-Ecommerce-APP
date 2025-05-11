import { EDummyJSON, IProduct, IProductQuery } from "@/types/ProductTypes";
import Image from "next/image";

export const ProductsList = async () => {
  let products: IProduct[] = [];

  try {
    const loadProducts: Promise<IProductQuery> = (await (
      await fetch(`${EDummyJSON.URL}${EDummyJSON.PRODUCTS}`)
    ).json()) as unknown as Promise<IProductQuery>;
    products = (await loadProducts).products as IProduct[];
  } catch (e) {
    console.log(e);
  } finally {
  }

  return (
    <div
      className="
        flex flex-col gap-[24]
        justify-center-safe items-center
        p-[24]  w-[100%]
      "
    >
      <h1 className="text-4xl font-bold">Products list</h1>
      <div
        className="
          flex flex-row flex-wrap gap-[24]
          justify-center-safe items-stretch
          w-[100%] max-w-[1366]
        "
      >
        {products.map((product: IProduct) => {
          return (
            <div
              className="
                flex flex-col gap-[16]
                justify-center-safe items-center
                h-auto w-100 p-[16]
                border border-indigo-600 rounded-md
              "
              key={product.id}
            >
              <Image src={product.images[0]} width={250} height={250} alt="" />
              <h3 className="font-bold">{product.title}</h3>
              <p className="line-clamp-2">{product.description}</p>
              <span className="font-bold">{product.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
