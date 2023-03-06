import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

import { MENU_ITEMS, userMenu } from "~/component/Popper/Menu/constants";
import Button from "~/component/Button";
import { PopperMenu } from "~/component/Popper";
import images from "~/assets/images";
import Image from "../../../component/Image";
import Search from "../../../component/Search";
import {
  EllipsisVerticalIcon,
  InboxIcon,
  MessageIcon,
  UploadIcon,
} from "../../../component/Icons";

import * as S from "./styles";
const Header = ({ className }) => {
  const handleOnChange = (menuItem) => {
    console.log(menuItem);
  };
  const currentUser = true;
  return (
    <S.HeaderContainer>
      <S.HeaderContent className={className}>
        <Link className="header_logo" to="/">
          <img src={images.logo.default} alt="Tiktok" />
        </Link>
        <Search />
        <div className="header_action">
          {currentUser ? (
            <>
              <Button prefixIcon={<UploadIcon className="icon" />} text>
                Upload
              </Button>
              <Tippy delay={[100, 200]} content="Message" placement="bottom">
                <Button
                  to="/message"
                  iconbtn="true"
                  prefixIcon={<MessageIcon className="icon" />}
                  badge={1}
                />
              </Tippy>
              <Tippy delay={[100, 200]} content="Mailbox" placement="bottom">
                <Button
                  iconbtn="true"
                  prefixIcon={<InboxIcon className="icon" />}
                />
              </Tippy>
            </>
          ) : (
            <>
              <Button prefixIcon={<UploadIcon className="icon" />} text>
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
              <Image
                fallback="https://www.strivemindz.com/images/ReactJS-Developers.png"
                src="https://i.pravatar.cc/300"
                alt="userAvatar"
                className="user_avatar"
              />
            ) : (
              <button className="more_button">
                <EllipsisVerticalIcon className="more_icon" />
              </button>
            )}
          </PopperMenu>
        </div>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;