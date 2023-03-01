import { useEffect, forwardRef, useState, useRef } from "react";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import {
  AiFillCloseCircle,
  AiOutlineSearch,
  AiOutlinePlus,
} from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { BiMessageAltMinus } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { MENU_ITEMS, userMenu } from "~/component/Popper/Menu/constants";
import Button from "~/component/Button";
import { PopperWrapper } from "~/component/Popper";
import PopperAccountItem from "../PopperAccountItem";
import { PopperMenu } from "~/component/Popper";
import images from "~/assets/images";
import * as S from "./styles";
const Header = ({ className }) => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  const handleOnChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = true;
  const userImage =
    "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628~c5_300x300.webp?x-expires=1677672000&x-signature=mmXT2od3OsLROhQ4cn4A2XtHpL4%3D";
  return (
    <S.HeaderContainer>
      <S.HeaderContent className={className} userImage={userImage}>
        <Link className="header_logo" to="/">
          <img src={images.logo.default} alt="Tiktok" />
        </Link>
        <div>
          <HeadlessTippy
            interactive
            visible={searchResult.length > 0 ? true : false}
            render={(attrs) => (
              <div className="search_result" tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className="search_title">Account</div>
                  <PopperAccountItem />
                  <PopperAccountItem />
                  <PopperAccountItem />
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
          </HeadlessTippy>
        </div>
        <div className="header_action">
          {currentUser ? (
            <>
              <Button prefixIcon={<AiOutlinePlus className="icon" />} text>
                Upload
              </Button>
              <Tippy delay={[100, 200]} content="Message" placement="bottom">
                <Button
                  to="/message"
                  iconbtn="true"
                  prefixIcon={<IoPaperPlaneOutline className="icon" />}
                />
              </Tippy>
              <Tippy delay={[100, 200]} content="Mailbox" placement="bottom">
                <Button
                  iconbtn="true"
                  prefixIcon={<BiMessageAltMinus className="icon" />}
                />
              </Tippy>
            </>
          ) : (
            <>
              <Button prefixIcon={<AiOutlinePlus className="icon" />} text>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          <PopperMenu
            item={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleOnChange}
          >
            {currentUser ? (
              <div className="user_avatar" />
            ) : (
              <button className="more_button">
                <IoEllipsisVerticalSharp className="more_icon" />
              </button>
            )}
          </PopperMenu>
        </div>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
