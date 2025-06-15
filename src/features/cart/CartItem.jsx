import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrItemQuantity } from "./CartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currQuantity = useSelector(getCurrItemQuantity(pizzaId));
  return (
    <li className="px flex justify-between py-3">
      <p className="tracking-wider text-stone-800">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold tracking-wide text-stone-800">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity quantity={currQuantity} id={pizzaId} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
