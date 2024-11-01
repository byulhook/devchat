import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {
  customStyle?: SerializedStyles;
}

const RootLayout: React.FC<RootLayoutProps> = ({ customStyle }) => {
  return (
    <>
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #171515;
`;
export default RootLayout;
