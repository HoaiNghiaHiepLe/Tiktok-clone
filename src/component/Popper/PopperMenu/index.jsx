import React from "react";
import Tippy from "@tippyjs/react/headless";

import MenuItems from "./MenuItems";
import { PopperWrapper } from "~/component/Popper";
import * as S from "./styles";

const PopperMenu = ({ children }) => {
  return (
    <S.PopperMenu>
      <Tippy
        delay={(0, 700)}
        placement="bottom-end"
        interactive
        render={(attrs) => (
          <div className="popper_menu" tabIndex="-1" {...attrs}>
            <PopperWrapper className="wrapper_menu">
              <MenuItems />
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </S.PopperMenu>
  );
};

export default PopperMenu;
