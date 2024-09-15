import { css } from '@emotion/react';

import Navbar from '@/Layouts/Navbar';
import RootLayout from '@/Layouts/RootLayout';

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

export default ContainerLayout;
