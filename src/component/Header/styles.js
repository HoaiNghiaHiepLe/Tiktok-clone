import styled, { css } from "styled-components";
import Button from "~/component/Button";

export const HeaderContainer = styled.div`
  --search-border-radius: 92px;
  --search-height: 46px;
  --search-top-spacer: 9px;
  --search-btn-width: 52px;
  --search-input-width: 361px;
  position: fixed;
  width: 100%;
  height: 60px;
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
  .header_search,
  .search_result {
    width: var(--search-input-width);
  }
  .search_result {
    font-size: 1.6rem;
    font-weight: 500;
  }
  .header_search {
    border: 1.5px solid transparent;
    display: flex;
    position: relative;
    height: var(--search-height);
    background-color: rgba(22, 24, 35, 0.06);
    border-radius: var(--search-border-radius);
    padding-left: 16px;
    input {
      flex: 1;
      color: var(--black);
      height: 100%;
      font-size: 1.6rem;
      color: var(--text-gray);
      background-color: transparent;
      caret-color: var(--primary);
      &:not(:placeholder-shown) ~ .search_btn .search_icon {
        color: rgba(22, 24, 35, 0.75);
      }
    }
    &:focus-within {
      border-color: rgba(22, 24, 35, 0.2);
    }
    &::after {
      content: "";
      position: absolute;
      right: var(--search-btn-width);
      top: var(--search-top-spacer);
      height: calc(var(--search-height) - var(--search-top-spacer) * 2);
      width: 1px;
      background-color: rgba(22, 24, 35, 0.12);
    }
    .search_btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--search-btn-width);
      height: 100%;
      font-size: 16px;
      border-top-right-radius: var(--search-border-radius);
      border-bottom-right-radius: var(--search-border-radius);
      &:active {
        background-color: rgba(22, 24, 35, 0.06);
      }
      &:hover {
        background-color: rgba(22, 24, 35, 0.03);
      }
      .search_icon {
        color: var(--text-gray);
      }
    }
    .clear_icon,
    .loading_icon {
      position: absolute;
      right: calc(var(--search-btn-width) + 10px);
      top: 50%;
      transform: translateY(-50%);
      color: rgba(22, 24, 35, 0.34);
      font-size: 2.5rem;
      margin: 0px 12px;
    }
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
