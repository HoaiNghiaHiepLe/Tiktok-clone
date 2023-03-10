import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";

import MenuItems from "./MenuItems";
import { PopperWrapper } from "~/component/Popper";
import HeaderMenu from "./HeaderMenu";
import * as S from "./styles";

const defaultFn = () => {};

const Menu = ({
  item = [],
  children,
  onChange = defaultFn,
  hideOnClick = false,
}) => {
  const [menu, setMenu] = useState([{ data: item }]);
  const currentMenu = menu[menu.length - 1];

  const renderMenuItems = () => {
    return currentMenu?.data?.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          className="menu_items"
          onClick={() => {
            if (isParent) {
              setMenu((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleOnBackMenu = () => {
    setMenu((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className="popper_menu" tabIndex="-1" {...attrs}>
      <PopperWrapper className="wrapper_menu">
        {menu.length > 1 && (
          <HeaderMenu
            title={currentMenu.title}
            onBack={() => handleOnBackMenu()}
          />
        )}
        <div className="menu_scroll">{renderMenuItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleResetMenu = () => {
    setMenu((prev) => prev.slice(0, 1));
  };

  return (
    <S.MenuWrapper>
      <Tippy
        hideOnClick={hideOnClick}
        delay={[0, 700]}
        placement="bottom-end"
        offset={[10, 10]}
        interactive
        render={renderResult}
        onHide={() => handleResetMenu()}
      >
        {children}
      </Tippy>
    </S.MenuWrapper>
  );
};
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};
export default Menu;
