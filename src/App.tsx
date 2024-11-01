import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ContainerLayout from '@/components/Layouts/ContainerLayout';
import RootLayout from '@/components/Layouts/RootLayout';
import Friends from '@/pages/Friends';
import Home from '@/pages/Home';
import Messages from '@/pages/Messages';
import NewChat from '@/pages/NewChat';
import NotFoundPage from '@/pages/NotFoundPage';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import SiginIn from '@/pages/SiginIn';
import { PATH } from '@/routes/path';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import PublicRoute from '@/routes/PublicRoute';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: PATH.SIGN_IN,
        element: <PublicRoute />,
        children: [{ index: true, element: <SiginIn /> }],
      },
    ],
  },
  {
    path: PATH.HOME,
    element: <ContainerLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Home /> },
          {
            path: PATH.NEW_CHAT,
            element: <NewChat />,
          },
          {
            path: PATH.MESSAGES,
            element: <Messages />,
          },
          {
            path: PATH.FRIENDS,
            element: <Friends />,
          },
          {
            path: PATH.PROFILE,
            element: <Profile />,
          },
          {
            path: PATH.SETTINGS,
            element: <Settings />,
          },
        ],
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
