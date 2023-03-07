import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .popper_menu {
    width: 224px;
    padding-bottom: 8px;
    .wrapper_menu {
      padding-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
    .menu_scroll {
      overflow-y: auto;
    }
    .menu_items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 1.8rem;
      border-radius: 0;
      padding: 10px 8px 12px 16px;
      width: 100%;
      border: none;
      margin: 0;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      &:hover {
        background-color: rgba(22, 24, 35, 0.03);
      }
      .title {
        text-align: start;
      }
    }
    .separate {
      border-top: 1px solid rgba(22, 24, 35, 0.12);
    }
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  flex-shrink: 0;
  -webkit-box-align: center;
  margin-top: -8px;
  align-items: center;
  position: relative;
  height: 50px;
  .back_btn {
    height: 100%;
    width: 50px;
    background-color: transparent;
    cursor: pointer;
  }
  .header_title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
