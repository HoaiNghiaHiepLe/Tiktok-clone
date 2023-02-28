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
  z-index: 998;
  padding-right: 8px;
`;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
  padding: 20px 0 26px 8px;
`;
