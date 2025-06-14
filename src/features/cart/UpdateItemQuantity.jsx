import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";
import Button from "../../ui/Button";

function UpdateItemQuantity({ quantity, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span>{quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </>
  );
}

export default UpdateItemQuantity;
