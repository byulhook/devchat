import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ContainerLayout from '@/Layouts/ContainerLayout';
import RootLayout from '@/Layouts/RootLayout';
import NotFoundPage from '@/pages/NotFoundPage';
import { PATH } from '@/routes/path';

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
