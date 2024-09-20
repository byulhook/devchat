import { css } from '@emotion/react';

import githubLogo from '@/assets/github.png';
import loginBackground from '@/assets/logo.png';
import Button from '@/components/Button';
import { useGithubSignIn } from '@/hooks/useGithubSignIn';
import theme from '@/styles/theme';

const SiginIn = () => {
  const { signIn } = useGithubSignIn();
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
          <Button
            image={githubLogo}
            text="Log in with Github!"
            customStyle={githubButtonStyle}
            onClick={() => signIn()}
          />
        </div>
      </section>
    </div>
  );
};

export default SiginIn;

const siginPageWrapper = css`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const imageContainer = css`
  width: 60%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 665px;
    height: 665px;
    object-fit: cover;
  }
`;

const signinPageContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.darkestBlack};
  width: 40%;
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
  margin-top: 100px;
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
