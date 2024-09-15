import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

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
        <div css={loginButtonContiner}>
          <Button image={githubLogo} text="Log in with Github!" customStyle={githubButtonStyle} />
          <div css={dividerStyle}>
            <hr />
            <span>or</span>
            <hr />
          </div>
          <Button text="Try Demo Mode!" onClick={() => {}} customStyle={demoButtonStyle} />
        </div>
        <div css={additionalLinksContainer}>
          <Link to="#">Learn more about DevChat</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
      </section>
    </div>
  );
};

export default Siginin;

const siginPageWrapper = css`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const imageContainer = css`
  width: 50%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const signinPageContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.darkestBlack};
  width: 50%;
  padding: 48px;
`;

const signinTitleContainer = css`
  text-align: center;
  margin-bottom: 48px;
`;

const titleStyle = css`
  font-size: 48px;
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 16px;
`;

const subtitleStyle = css`
  font-size: 20px;
  font-weight: 400;
  color: ${theme.colors.gray300};
`;

const loginButtonContiner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const githubButtonStyle = css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-weight: 600;
  border-radius: 24px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.gray300};
  }
`;

const demoButtonStyle = css`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: 600;
  border-radius: 24px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.black};
  }
`;

const dividerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 340px;
  margin: 24px 0;

  hr {
    flex-grow: 1;
    border: none;
    border-top: 1px solid ${theme.colors.gray700};
    margin: 0 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.gray300};
  }
`;

const additionalLinksContainer = css`
  display: flex;
  justify-content: center;
  gap: 24px;

  a {
    color: ${theme.colors.gray400};
    font-size: ${theme.fontSizes.small};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.gray100};
    }
  }
`;
