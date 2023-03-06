import styled, { css } from "styled-components";
import Header from "~/layouts/components/Header";

export const FluidHeader = styled(Header)`
  padding: 0px var(--default-layout-padding);
`;

export const MainContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-self: center;
  flex: 1 1 auto;
  width: 100vw;
  max-width: var(--default-layout-width);
  font-size: 2.5rem;
  margin-top: 60px;
  .sidebar_fluid {
    width: var(--fluid-sidebar-width);
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 32px 24px;
  box-sizing: content-box;
  min-height: calc(100vh - 59px);
  max-width: 1104px;
`;
