import { useRef, useState } from "react";

import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import images from "~/assets/images";
import * as S from "./styles";
const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={images.logo.default} alt="Tiktok" />
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
      <div className="header_action"></div>
    </S.HeaderContainer>
  );
};

export default Header;
