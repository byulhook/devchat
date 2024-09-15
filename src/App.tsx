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
import Siginin from '@/pages/Siginin';
import { PATH } from '@/routes/path';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: PATH.SIGN_IN,
        element: <Siginin />,
      },
    ],
  },
  {
    path: PATH.HOME,
    element: <ContainerLayout />,
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
