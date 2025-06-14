import { Link } from "react-router";

function Button({ children, to, type, onClick, disabled }) {
  const base =
    "inline-block cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-2 md:px-6 md:py-4",
    small: base + " px-3 py-1 md:px-4 md:py-2 text-sm",
    secondary:
      "inline-block border-2 border-stone-300 px-4 py-2 md:px-6 md:py-4 rounded-full font-semibold tracking-wide cursor-pointer text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:ring focus:ring-stone-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed",
    round: base + " px-3 py-1",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
