import { useState } from 'react';

import { css } from '@emotion/react';
import { MessageSquare, PenSquare, Users, Settings, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo.png';
import NavItem from '@/components/Layouts/NavItem';
import ProfileImage from '@/components/ProfileImage';
import { PATH } from '@/routes/path';
import theme from '@/styles/theme';

const navItems = [
  { to: PATH.NEW_CHAT, Icon: PenSquare },
  { to: PATH.FRIENDS, Icon: Users },
  { to: PATH.MESSAGES, Icon: MessageSquare },
  { to: PATH.SETTINGS, Icon: Settings },
];

const Sidebar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav css={sidebarStyle}>
      <div className="logo" css={logoStyle}>
        <img src={logo} alt="logo" css={logoImageStyle} />
      </div>
      <div css={iconGroupStyle}>
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>
      <div
        css={css`
          ${iconGroupStyle}
        `}
      >
        <button onClick={toggleDarkMode} css={buttonStyle}>
          {isDarkMode ? <Sun css={iconStyle} /> : <Moon css={iconStyle} />}
        </button>
        <Link to={PATH.PROFILE}>
          <ProfileImage />
        </Link>
      </div>
    </nav>
  );
};

const iconStyle = css`
  color: ${theme.colors.darkGray};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.lightGray};
  }
`;

export default Sidebar;

const buttonStyle = css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const logoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoImageStyle = css`
  width: 42px;
  height: 42px;
`;

const sidebarStyle = css`
  position: fixed;
  width: ${theme.width.siderbarWidth};
  height: 100vh;
  background-color: ${theme.colors.darkestBlack};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-right: 1px solid #3d3d3d;
  z-index: 100;
`;

const iconGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
