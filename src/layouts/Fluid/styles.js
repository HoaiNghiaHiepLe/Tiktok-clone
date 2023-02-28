import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  .header_fluid {
    padding: 0px var(--default-layout-padding);
  }
  .sidebar_fluid {
    width: 240px;
  }
`;

export const MainContent = styled.div`
  margin-top: 60px;
  width: 100%;
  font-size: 2.5rem;
`;
