import { css } from '@emotion/react';

import Sidebar from '@/Layouts/Sidebar';

const ContainerLayout: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Sidebar />
    </div>
  );
};

const layoutStyle = css`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #171515;
`;

export default ContainerLayout;
