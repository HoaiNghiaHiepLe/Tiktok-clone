import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";

import MenuItems from "./MenuItems";
import { PopperWrapper } from "~/component/Popper";
import HeaderMenu from "./HeaderMenu";
import * as S from "./styles";

const defaultFn = () => {};

const Menu = ({ item, children, onChange = defaultFn }) => {
  const [menu, setMenu] = useState([{ data: item }]);
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
    <S.MenuWrapper>
      <Tippy
        delay={[0, 700]}
        placement="bottom-end"
        offset={[10, 10]}
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
        onHide={() => setMenu((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </S.MenuWrapper>
  );
};

export default Menu;
