import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeFromCart } from "./CartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeFromCart(id))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
