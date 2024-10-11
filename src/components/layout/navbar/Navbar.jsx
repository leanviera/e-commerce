import "./navbar.css";
import { CardWidget } from "../../common/cardWidget/CardWidget.jsx";
export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dlheiqvxj/image/upload/v1728591597/3566722_wxabgj.png"
          alt=""
          className="logo"
        />
        <ul>
          <li>Productos</li>
          <li>Mujer</li>
          <li>Hombre</li>
        </ul>
        <CardWidget />
      </div>
    </>
  );
};
