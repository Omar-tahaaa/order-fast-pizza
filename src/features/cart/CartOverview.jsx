import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getCart, getCartTotalPrice, getCartTotalQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getCartTotalPrice);
  const totalQuantity = useSelector(getCartTotalQuantity);

  if (!cart.length) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 font-semibold text-stone-300 uppercase sm:px-8">
      <p className="space-x-4">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
