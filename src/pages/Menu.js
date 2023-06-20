import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h2 className="menuTitle">Life is more beautiful when you have the ability to relive it through images.</h2>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              text={menuItem.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
