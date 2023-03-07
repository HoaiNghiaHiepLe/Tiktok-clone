import styled, { css } from "styled-components";
import Button from "~/component/Button";

export const HeaderContainer = styled.div`
  --search-border-radius: 92px;
  --search-height: 46px;
  --search-top-spacer: 9px;
  --search-btn-width: 52px;
  --search-input-width: 361px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--default-header-height);
  font-size: 2.5rem;
  font-weight: 700;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  background: rgba(255, 255, 255, 1);
  color: rgba(22, 24, 35, 1);
  z-index: 999;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 100%;
  .header_logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    min-width: 300px;
  }

  .header_action {
    display: flex;
    justify-content: center;
    align-items: center;
    .more_button {
      background: transparent;
      margin-left: 16px;
      padding: 6px 8px;
      position: relative;
      cursor: pointer;
      font-style: normal;
      padding: 0 4px;
      .more_icon {
        width: 20px;
        height: 20px;
        display: block;
      }
    }
    .user_avatar {
      margin-left: 24px;
      position: relative;
      width: 32px;
      height: 32px;
      background: center no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
