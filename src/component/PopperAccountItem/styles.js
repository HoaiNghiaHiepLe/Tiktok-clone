import styled, { css } from "styled-components";

export const AccountItemWrapper = styled.li`
  padding: 9px 16px;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  &:hover {
    background-color: rgba(22, 24, 35, 0.03);
  }
  .avatar_wrapper {
    width: 40px;
    height: 40px;
    display: inline-block;
    box-sizing: border-box;
    margin: 0px 12px 0px 0px;
    padding: 0px;
    font-feature-settings: "tnum";
    position: relative;
    overflow: hidden;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;
    background-color: rgba(136, 136, 136, 0.5);
    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    flex: 0 1 auto;
    min-width: 0px;
    .username {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .check_icon {
        font-size: 1.4rem;
        margin-left: 4px;
        color: rgb(32, 213, 236);
      }
    }
    .nickname {
      font-size: 1.4rem;
      line-height: 2rem;
      color: rgba(22, 24, 35, 0.5);
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
