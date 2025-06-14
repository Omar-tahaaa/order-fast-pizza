import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./CartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-3 px-4">
      <LinkButton
        to="/menu"
        className="text-blue-600 hover:text-blue-400 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-6 text-xl font-semibold tracking-wide text-stone-700">
        Your cart, {userName}
      </h2>
      <ul className="mt-6 divide-y-2 divide-stone-300 border-b-2 border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
