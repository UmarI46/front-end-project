import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { sortByContext } from "../contexts/SortByProvider";
import { orderByContext } from "../contexts/OrderByProvider";

export default function Header() {
  /* const {setPickSort}= useContext(sortByContext)
    const {pickSort}= useContext(sortByContext)
    const {setPickOrder}= useContext(orderByContext)
    const {pickOrder}= useContext(orderByContext)
  setPickOrder("DESC")
  setPickSort("created_at")
  useEffect(()=>{},[pickOrder,pickSort]) */
  return (
      <>
        <h1>NC News</h1>
        <nav>
            <Link to= "/">Home</Link>
            <Link to= "/topics">Topics</Link>
            <Link to= "/sign-in">Sign-In</Link>
        </nav>
      </>
  )
}
