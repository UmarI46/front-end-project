import { Link } from "react-router-dom";

export default function Header() {
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
