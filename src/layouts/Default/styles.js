import styled, { css } from "styled-components";
import Header from "~/layouts/components/Header/Header";

export const DefaultHeader = styled(Header)`
  max-width: var(--default-layout-width);
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
  margin-top: var(--default-header-height);
  .default_siderbar {
    position: relative;
    width: var(--default-sidebar-width);
    -webkit-flex: 0 0 356px;
    -ms-flex: 0 0 356px;
    flex: 0 0 356px;
    @media screen and (max-width: 767px) {
      & {
        z-index: 99;
      }
    }
    @media screen and (max-width: 1071px) {
      & {
        width: 72px;
        -webkit-flex: 0 0 72px;
        -ms-flex: 0 0 72px;
        flex: 0 0 72px;
      }
    }
  }
`;

export const MainContent = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  width: 692px;
  max-width: 692px;
  padding: 24px 0px;
  position: relative;
`;
