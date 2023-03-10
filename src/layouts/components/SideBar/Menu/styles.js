import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 3.2rem;
  width: 100%;
  transition: background-color ease-in-out 200ms;
  &.active {
    .active_icon,
    .title {
      color: var(--primary);
    }
    .icon {
      display: none;
    }
    .active_icon {
      display: flex;
    }
  }
  .active_icon {
    display: none;
  }
  &:hover {
    background-color: rgba(22, 24, 35, 0.03);
  }
  .title {
    margin-left: 8px;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: rgba(22, 24, 35, 1);
  }
  .icon {
    width: 32px;
    height: 32px;
  }
`;
