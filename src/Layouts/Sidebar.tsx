import { useState } from 'react';

import { css } from '@emotion/react';
import { MessageSquare, PenSquare, Users, Settings, Moon, Sun } from 'lucide-react';

import theme from '@/styles/theme';

const Sidebar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div css={sidebarStyle}>
      <div css={logoStyle}>
        <MessageSquare size={24} color="#FFF" />
      </div>
      <div css={iconGroupStyle}>
        <PenSquare css={iconStyle} />
        <Users css={iconStyle} />
        <MessageSquare css={iconStyle} />
        <Settings css={iconStyle} />
      </div>
      <div
        css={css`
          ${iconGroupStyle} gap: 16px;
        `}
      >
        <button
          onClick={toggleDarkMode}
          css={css`
            background: none;
            border: none;
          `}
        >
          {isDarkMode ? <Sun css={iconStyle} /> : <Moon css={iconStyle} />}
        </button>
        <div css={profileImageStyle} />
      </div>
    </div>
  );
};

export default Sidebar;

const logoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
`;

const sidebarStyle = css`
  width: 64px;
  height: 100vh;
  background-color: ${theme.colors.darkestBlack};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-right: 1px solid #3d3d3d;
`;

const iconGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const iconStyle = css`
  color: ${theme.colors.darkGray};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.lightGray};
  }
`;

const profileImageStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #9ca3af;
`;
