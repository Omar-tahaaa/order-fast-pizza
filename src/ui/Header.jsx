import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Username from "../features/user/Username";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <div className="font-pizza flex items-center justify-between bg-yellow-400 px-4 py-3 uppercase sm:px-8">
      <Link to="/" className="tracking-widest">
        Fast react pizza co.
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm tracking-wide transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-80"
        />
      </form>
      <Username />
    </div>
  );
}

export default Header;
