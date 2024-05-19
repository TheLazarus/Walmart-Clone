import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

function Product({ product }: { product: Organic }) {
  return (
    <Link
      href={{ pathname: "/product", query: { url: product.url } }}
      className="flex flex-col border relative rounded-md h-full p-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        {product.price.currency} {product.price.price}
      </p>

      {product.badge ? (
        <Badge className="absolute top-2 right-2">{product.badge}</Badge>
      ) : null}

      {product.rating ? (
        <p className="text-yellow-500 text-sm">
          {product.rating.rating}*
          <span className="text-gray-400 ml-2">{product.rating.count}</span>
        </p>
      ) : null}
    </Link>
  );
}

export default Product;
