import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

import { MENU_ITEMS, userMenu } from "~/component/Popper/Menu/constants";
import Button from "~/component/Button";
import { PopperMenu } from "~/component/Popper";
import images from "~/assets/images";
import Image from "../Image";
import Search from "../Search";
import {
  EllipsisVerticalIcon,
  InboxIcon,
  MessageIcon,
  UploadIcon,
} from "../Icons";

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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628~c5_300x300.webp?x-expires=1677672000&x-signature=mmXT2od3OsLROhQ4cn4A2XtHpL4%3D"
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
