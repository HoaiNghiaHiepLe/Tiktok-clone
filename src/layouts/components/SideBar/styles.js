import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  perspective: 1px;
  transform-style: preserve-3d;
  padding-right: 12px;
  perspective-origin: right top;
  top: 60px;
  bottom: 0;
  width: 356px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  z-index: 99;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 1071px) {
    & {
      padding: 0 8px;
      width: 72px;
      -webkit-flex: 0 0 72px;
      -ms-flex: 0 0 72px;
      flex: 0 0 72px;
      border-right: 1px solid rgba(22, 24, 35, 0.12);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    }
  }
`;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
  padding: 20px 0 26px 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  min-height: 100%;
  @media screen and (max-width: 1071px) {
    & {
      padding: 12px 0 26px;
    }
  }
`;
