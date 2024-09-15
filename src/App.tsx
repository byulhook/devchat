import { css, SerializedStyles } from '@emotion/react';
import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom';

import { PATH } from '@/routes/path';
import theme from '@/styles/theme';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
}
// 루트 레이아웃: 네비바가 없는 레이아웃 컴포넌트
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
// 네비게이션바
// 하단이 아닌 왼쪽 사이드에 위치해 있어야함.
const Navbar = () => <div>네비게이션바</div>;

// 컨테이너 레이아웃: 네비바가 있는 레이아웃 컴포넌트
const ContainerLayout = () => {
  return (
    <>
      <RootLayout
        customStyle={css`
          padding-bottom: 86px;
          min-height: calc(100vh - 86px);
        `}
      />
      <Navbar />
    </>
  );
};

// NotFoundPage
const NotFoundPage = () => (
  <>
    <div>페이지를 찾을수 없습니다.</div>
    <Link to={PATH.HOME}>
      <h5>홈으로 이동</h5>
    </Link>
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: PATH.SIGN_IN,
        element: <div>로그인</div>,
      },
    ],
  },
  {
    path: PATH.HOME,
    element: <ContainerLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: PATH.MESSAGING,
        element: <div>메시지 작성</div>,
      },
      {
        path: PATH.FRIENDS,
        element: <div>친구 목록</div>,
      },
      {
        path: PATH.PROFILE,
        element: <div>프로필 페이지</div>,
      },
      {
        path: PATH.SETTINGS,
        element: <div>앱 설정 페이지</div>,
      },
    ],
  },
  {
    path: '*',
    element: <ContainerLayout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
