import { ReactElement } from "react";
import producsService from "@/services/productsService";
import Image from "next/image";

type Props = {
  params: {
    id: string
  }
}

export const ProductItemPage = async ({ params }: Props): Promise<ReactElement> => {

  const { loadProduct } = producsService(); 

  const product = await loadProduct(params.id as string)

  console.log(product);

  return (
    <main>
      <Image height={450} width={450} alt="test" src={product!.images[0]}/>
      {Array.from({ length: Number(product!.rating)}).map((v, index) => (
        <span key={index}>⭐</span>
      ))}
      <h1>{product?.title}</h1>
      <span>{product?.price}</span>
      <p>{product?.description}</p>
    </main>
  );
};

export default ProductItemPage;
