import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";

import {
  AiFillCloseCircle,
  AiOutlineSearch,
  AiOutlinePlus,
} from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

import Button from "~/component/Button";
import { PopperWrapper } from "~/component/Popper";
import { PopperMenu } from "~/component/Popper";
import images from "~/assets/images";
import * as S from "./styles";
const Header = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <S.HeaderContainer>
      <img src={images.logo.default} alt="Tiktok" />
      <div>
        <Tippy
          interactive
          visible={searchResult.length > 0 ? true : false}
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className="search_title">Account</div>
              </PopperWrapper>
            </div>
          )}
        >
          <div className="header_search">
            <input
              placeholder="search accounts and videos"
              spellCheck={false}
              type="text"
            />
            <button className="clear_btn">
              <AiFillCloseCircle className="clear_icon" />
            </button>
            <CgSpinner className="loading_icon" />

            <button className="search_btn">
              <AiOutlineSearch className="search_icon" />
            </button>
          </div>
        </Tippy>
      </div>
      <div className="header_action">
        <Button prefixIcon={<AiOutlinePlus className="icon" />} text>
          Upload
        </Button>
        <Button primary>Log in</Button>
        <PopperMenu>
          <button className="more_button">
            <IoEllipsisVerticalSharp className="more_icon" />
          </button>
        </PopperMenu>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
