import React from "react";

import Button from "~/component/Button";
import MENU_ITEMS from "~/component/Popper/PopperMenu/constants";
import * as S from "./styles";

const MenuItems = () => {
  const renderMenuItems = () => {
    return MENU_ITEMS?.map((item, index) => {
      return (
        <Button
          className="menu_items"
          prefixIcon={item.icon}
          key={index}
          to={item.to}
        >
          {item.title}
        </Button>
      );
    });
  };

  return <>{renderMenuItems()}</>;
};

export default MenuItems;
