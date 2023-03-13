import styled from "styled-components";

export const AccountPreviewWrapper = styled.div`
  position: relative;
  width: 320px;
  box-sizing: border-box;
  padding: 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
  border-radius: 8px;
  .header {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .follow_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 28px;
    min-width: 106px;
    padding: 6px 8px;
    .title {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
  .avatar_wrapper {
    width: 44px;
    height: 44px;
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
      justify-content: flex-start;
      align-items: center;
      font-size: 1.8rem;
      line-height: 2.2rem;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--text-color);
      span {
        line-height: 2.2rem;
      }
      .check_icon {
        font-size: 1.4rem;
        line-height: 2rem;
        margin-left: 4px;
        color: rgb(32, 213, 236);
      }
    }
    .nickname {
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 600;
      color: rgb(22, 24, 35);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .analysis {
    margin-top: 8px;
    .analysis_value {
      color: var(--text-color);
      font-weight: 700;
      margin-right: 6px;
      font-size: 1.7rem;
      line-height: 2rem;
      display: inline-block;
    }
    .analysis_value ~ .analysis_value {
      margin-left: 12px;
    }
    .analysis_label {
      font-weight: 400;
      color: rgba(22, 24, 35, 0.75);
      font-size: 1.7rem;
      line-height: 2rem;
      display: inline-block;
    }
  }
`;
