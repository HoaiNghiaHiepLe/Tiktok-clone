import styled from "styled-components";

export const PopperMenu = styled.div`
  .wrapper_menu {
    padding-bottom: 8px;
  }
  .popper_menu {
    width: 224px;
    padding-bottom: 8px;
    .menu_items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 0;
      padding: 10px 8px 12px 16px;
      width: 100%;
      border: none;
      margin: 0;
      &:hover {
        background-color: rgba(22, 24, 35, 0.03);
      }
    }
  }
`;
