import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p className="space-y-1">
          <span className="font-bold">{quantity}&times;</span> {name}
          <span className="block text-sm text-stone-500 italic">
            {isLoadingIngredients ? "loading ingredients..." : ingredients}
          </span>
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
