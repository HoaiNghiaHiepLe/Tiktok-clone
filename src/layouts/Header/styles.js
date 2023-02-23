import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  --search-border-radius: 92px;
  --search-height: 46px;
  --search-top-spacer: 9px;
  --search-btn-width: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  font-size: 2.5rem;
  font-weight: 700;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  background: rgba(255, 255, 255, 1);
  color: rgba(22, 24, 35, 1);
  .header_search {
    border: 1.5px solid transparent;
    display: flex;
    position: relative;
    width: 361px;
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
        font-size: 2.5rem;
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
    }
  }
`;
