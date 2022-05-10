import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink
        exact={true}
        activeClassName="activePage"
        to="/"
        className="new_customer"
      >
        <div></div>
        <span>New Customer</span>
      </NavLink>
      <NavLink activeClassName="activePage" to="/customers">
        <div></div>
        <span>Customers</span>
      </NavLink>
    </header>
  );
};

export default Header;
