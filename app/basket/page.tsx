import { ShoppingCartIcon } from "lucide-react";

function BasketPage() {
  return (
    <div>
      <div>
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>
      <p>Review the items in your cart and checkout when ready</p>
    </div>
  );
}

export default BasketPage;
