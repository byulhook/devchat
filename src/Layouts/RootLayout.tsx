import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import theme from '@/styles/theme';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
}

const RootLayout: React.FC<ContainerLayoutProps> = ({ customStyle }) => {
  return (
    <>
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  width: 100%;
  max-width: ${theme.width.max};
  height: 100%;
  min-height: 100vh;
  padding: 76px 16px 0;
  margin: 0 auto;
  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.width.max}) {
    border-left: 1px solid ${theme.colors.lightGray};
    border-right: 1px solid ${theme.colors.lightGray};
  }
`;
export default RootLayout;
