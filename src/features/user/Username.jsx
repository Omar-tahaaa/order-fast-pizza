import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;

  return <div className="hidden md:block">{userName}</div>;
}

export default Username;
