import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.6rem;
  min-width: 100px;
  padding: 9px 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  user-select: none;
  .title + .icon,
  .icon + .title {
    margin-left: 8px;
  }
  .icon {
    display: inline-block;
    width: 24px;
    text-align: left;
  }
  &:not(:first-child) {
    margin-left: 16px;
  }

  &.text {
    border: 1px solid rgba(22, 24, 35, 0.12);
    &:hover {
      background: rgba(22, 24, 35, 0.03);
    }
  }
  &.iconbtn {
    cursor: pointer;
    font-size: 2.6rem;
    color: rgba(22, 24, 35, 1);
    height: 32px;
    width: 32px;
    min-width: 0;
    padding: 4px;
    .icon {
      height: 26px;
      width: 26px;
    }
  }
  &.rounded {
    border-radius: 999px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 6%);
    border-color: rgba(22, 24, 35, 0.12);
    &:hover {
      border-color: rgba(22, 24, 35, 0.2);
      background-color: rgba(255, 255, 255, 1);
    }
  }
  &.outline {
    color: var(--primary) !important;
    border: solid 1px var(--primary);
    &:hover {
      background: rgba(254, 44, 85, 0.06);
      border-color: var(--primary);
    }
  }
  &.primary {
    background-color: var(--primary);
    color: #fff !important;
    border-color: var(--primary);
    &:hover {
      border-color: var(--primary);
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.06),
          rgba(0, 0, 0, 0.06)
        ),
        #fe2c55;
    }
  }
  &.disable {
    pointer-events: none;
    opacity: 0.5;
    border: 1px solid rgba(22, 24, 35, 0.12);
    &:hover {
      background: rgba(22, 24, 35, 0.03);
    }
  }
  /* button size */
  &.small {
    min-width: 88px;
    padding: 4px 16px;
  }
  &.large {
    padding: 14px 16px;
    min-width: 168px;
    min-height: 48px;
  }
`;

const buttonAttrs = (props) => ({
  className: `
    ${props.primary ? "primary" : ""} 
    ${props.outline ? "outline" : ""} 
    ${props.text ? "text" : ""}
    ${props.rounded ? "rounded" : ""}
    ${props.disable ? "disable" : ""}
    ${props.small ? "small" : ""}
    ${props.large ? "large" : ""}
    ${props.iconbtn ? "iconbtn" : ""}
    ${props.$separate ? "separate" : ""}
    ${props.className ? props.className : ""}
  `.trim(),
});

export const Button = styled.button.attrs(buttonAttrs)`
  ${buttonStyles}
`;

export const LinkButton = styled(Link).attrs(buttonAttrs)`
  ${buttonStyles}
`;

export const AButton = styled.a.attrs(buttonAttrs)`
  ${buttonStyles}
`;
