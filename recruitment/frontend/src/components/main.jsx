import Nav from "./nav";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Outlet />
    </div>
  );
}
