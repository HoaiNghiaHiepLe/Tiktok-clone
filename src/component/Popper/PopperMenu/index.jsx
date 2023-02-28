import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";

import MENU_ITEMS from "~/component/Popper/PopperMenu/constants";
import MenuItems from "./MenuItems";
import { PopperWrapper } from "~/component/Popper";
import HeaderMenu from "./HeaderMenu";
import * as S from "./styles";

const defaultFn = () => {};

const PopperMenu = ({ children, onChange = defaultFn }) => {
  const [menu, setMenu] = useState([{ data: MENU_ITEMS }]);
  console.log(menu, menu.length);
  const currentMenu = menu[menu.length - 1];

  const renderMenuItems = () => {
    return currentMenu?.data?.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setMenu((prev) => {
                console.log(prev, prev.length);
                return [...prev, item.children];
              });
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <S.PopperMenuWrapper>
      <Tippy
        visible
        delay={(0, 700)}
        placement="bottom-end"
        interactive
        render={(attrs) => (
          <div className="popper_menu" tabIndex="-1" {...attrs}>
            <PopperWrapper className="wrapper_menu">
              {menu.length > 1 && (
                <HeaderMenu
                  title="language"
                  onBack={() => {
                    setMenu((prev) => {
                      console.log(prev, prev.length);
                      return prev.slice(0, prev.length - 1);
                    });
                  }}
                />
              )}
              {renderMenuItems()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </S.PopperMenuWrapper>
  );
};

export default PopperMenu;
