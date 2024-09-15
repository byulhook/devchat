import { css, SerializedStyles } from '@emotion/react';

import RootLayout from '@/components/Layouts/RootLayout';
import Sidebar from '@/components/Layouts/Sidebar';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle }: ContainerLayoutProps) => {
  return (
    <div css={[containerStyle, customStyle]}>
      <RootLayout
        customStyle={css`
          padding-left: 64px;
        `}
      />
      <Sidebar />
    </div>
  );
};

const containerStyle = css`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export default ContainerLayout;
