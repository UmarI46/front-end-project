import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { sortByContext } from "../contexts/SortByProvider";
import { orderByContext } from "../contexts/OrderByProvider";

export default function Header() {
  return (
      <>
        <h1>NC News</h1>
        <nav id="navBar">
            <Link className="navLink" to= "/">Home</Link>
            <Link className="navLink" to= "/topics">Topics</Link>
            <Link className="navLink" to= "/sign-in">Sign-In</Link>
        </nav>
      </>
  )
}
