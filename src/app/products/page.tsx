import { IProductListItem } from "@/types/product";
import Image from "next/image";
import productsService from "@/services/productsService";
import Link from "next/link";

export const ProductsListPage = async () => {
  const { loadProducts } = productsService();

  const products = await loadProducts();

  return (
    <main
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
        {products.map((product: IProductListItem) => {
          return (
            <Link
              className="
                flex flex-col gap-[16]
                justify-center-safe items-center
                h-auto w-100 p-[16]
                border border-indigo-600 rounded-md
              "
              key={product.id}
              href={`products/${product.id}`}
            >
              <Image src={product.images[0]} width={250} height={250} alt="" />
              <h3 className="font-bold">{product.title}</h3>
              <p className="line-clamp-2">{product.description}</p>
              <span className="font-bold">{product.price}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ProductsListPage;
