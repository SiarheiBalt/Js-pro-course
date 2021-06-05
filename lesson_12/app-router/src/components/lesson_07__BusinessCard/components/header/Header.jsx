import { Link, NavLink } from "react-router-dom";
import cl from "./Header.module.css";
import { Name } from "./name/Name";

const Header = (props) => {
  return (
    <div className={cl.header}>
      <Name fullName={props.fullName} />
      <div className={cl.item}>
        <NavLink to="/Main" activeClassName={cl.activ}>
          Характеристика
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/Education" activeClassName={cl.activ}>
          Образование
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/UsedWorks" activeClassName={cl.activ}>
          Опыт работы
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
