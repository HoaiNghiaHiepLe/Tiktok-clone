import styled, { css } from "styled-components";

export const PopperWrapper = styled.ul`
  width: 100%;
  max-height: min((100vh - 96px) - 60px, 734px);
  min-height: 100px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  border-radius: 8px;
  margin-top: 8px;
  padding-top: 8px;
  list-style-type: none;
  .search_title {
    height: 30px;
    padding: 5px 12px;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    color: rgba(22, 24, 35, 0.5);
  }
`;
