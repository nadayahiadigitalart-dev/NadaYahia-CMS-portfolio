import { NavLink } from "react-router-dom";

const Nav = ({ img, title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
    >
      <img src={img} alt={title} />
      <span>{title}</span>
    </NavLink>
  );
};

export default Nav;
