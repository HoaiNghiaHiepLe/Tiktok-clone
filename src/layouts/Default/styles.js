import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  .header_default {
    max-width: var(--default-layout-width);
    padding: 0px var(--default-layout-padding);
  }
  .sidebar_default {
    width: 356px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  margin-top: 60px;
  width: var(--default-layout-width);
  margin: 60px auto 0;
  font-size: 2.5rem;
`;
