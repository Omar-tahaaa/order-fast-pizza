import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, getCurrItemQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currQuantity = useSelector(getCurrItemQuantity(id));
  const isInCart = currQuantity > 0;

  return (
    <li className="flex gap-4 p-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold tracking-wide text-stone-700">{name}</p>
        <p className="text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between font-semibold text-stone-600">
          {!soldOut ? (
            <p className="mt-auto tracking-wider">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="mt-auto text-stone-500 uppercase">Sold out</p>
          )}
          {!soldOut &&
            (isInCart ? (
              <div className="flex items-center gap-4">
                <UpdateItemQuantity quantity={currQuantity} id={id} />
                <DeleteItem id={id} />
              </div>
            ) : (
              <Button
                type="small"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...pizza,
                      pizzaId: id,
                      quantity: 1,
                      totalPrice: unitPrice * 1,
                    }),
                  )
                }
              >
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
