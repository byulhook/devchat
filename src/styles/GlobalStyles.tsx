import { css, Global } from '@emotion/react';

import theme from '@/styles/theme';

const GlobalStyles = () => {
  return <Global styles={baseStyles} />;
};

const baseStyles = css`
  /* reset */
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    line-height: 140%;
    font-size: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  body,
  input,
  textarea,
  button {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: ${theme.colors.black};
  }

  body {
    font-size: ${theme.fontSizes.base};
    background-color: ${theme.colors.bgGray};
  }

  input,
  textarea {
    width: 100%;
    font-size: ${theme.fontSizes.base};
    border: 0;
    outline: none;

    &::placeholder {
      color: ${theme.colors.darkGray};
      opacity: 1; /* Firefox */
    }
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyles;
