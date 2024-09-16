import { css } from '@emotion/react';
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import theme from '@/styles/theme';

interface NavItemProps {
  to: string;
  Icon: LucideIcon;
}

const NavItem: React.FC<NavItemProps> = ({ to, Icon }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      color: isActive ? theme.colors.primary : 'inherit',
    })}
    className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
    css={linkStyle}
  >
    <Icon css={iconStyle} />
  </NavLink>
);

export default NavItem;

const linkStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.pending {
    opacity: 0.7;
  }
`;

const iconStyle = css`
  color: #adadad;
  cursor: pointer;
`;
