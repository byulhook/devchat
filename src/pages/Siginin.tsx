import { css } from '@emotion/react';

import githubLogo from '@/assets/github.png';
import loginBackground from '@/assets/login-background.png';
import Button from '@/components/Button';
import theme from '@/styles/theme';

const Siginin = () => {
  return (
    <div css={siginPageWrapper}>
      <section css={imageContainer}>
        <img src={loginBackground} alt="login-background" />
      </section>
      <section css={signinPageContainer}>
        <div css={signinTitleContainer}>
          <h1 css={titleStyle}>Hello, World!</h1>
          <p css={subtitleStyle}>Welcome to DevChat</p>
        </div>
        <div css={loginButtonSection}>
          <div css={dividerStyle}>
            <hr />
            <span>or</span>
            <hr />
          </div>
          <Button
            backgroundColor={theme.colors.white}
            fontColor={theme.colors.black}
            image={githubLogo}
            text="Log in with Github"
          />
        </div>
      </section>
    </div>
  );
};

export default Siginin;

const siginPageWrapper = css`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const signinPageContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.darkestBlack};
  min-width: 50vw;
  height: 100%;
`;

const signinTitleContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const titleStyle = css`
  font-size: ${theme.fontSizes.titleLarge};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 8px;
`;

const subtitleStyle = css`
  font-size: ${theme.fontSizes.large};
  font-weight: 500;
  color: ${theme.colors.white};
`;

const loginButtonSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const imageContainer = css`
  width: 50vw;
  height: 100%;
  overflow: hidden;
  img {
    width: 50vw;
    height: 100%;
    object-fit: cover;
  }
`;
const dividerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  margin: 24px 0;
  hr {
    flex-grow: 1;
    border: none;
    border-top: 2px solid #e2e2e2;
    margin: 0 10px;
  }
  span {
    font-weight: 500;
    font-size: 14px;
    color: #a5a5a5;
  }
`;
