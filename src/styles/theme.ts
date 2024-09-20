const colors = {
  primaryGradient: 'linear-gradient(62deg, #8E2DE2 8.16%, #4F46E5 91.84%)',
  primary: '#4F46E5',
  black: '#1E293B',
  darkestBlack: '#1d1b1b',
  white: '#FFFFFF',
  red: '#F65063',
  alertRed: '#E54646',
  darkestGray: '#475569',
  darkGray: '#94A3B8',
  gray: '#CBD5E1',
  lightGray: '#E2E8F0',
  lightestGray: '#F1F5F9',
  bgGray: '#F8FAFC',
  gray700: '#4B5563',
  gray600: '#6B7280',
  gray500: '#9CA3AF',
  gray400: '#D1D5DB',
  gray300: '#E5E7EB',
  gray200: '#F4F5F7',
  gray100: '#F9FAFB',
};

const fontSizes = {
  micro: '12px',
  small: '14px',
  base: '16px',
  medium: '18px',
  large: '20px',
  titleLarge: '42px',
};

const width = {
  max: '600px',
  large: '500px',
  siderbarWidth: '64px',
};

const zIndex = {
  base: 1,
  videoPlayer: 10,
  header: 100,
  modal: 1000,
  toast: 10000,
};

export type ColorsType = typeof colors;
export type FontSizeType = typeof fontSizes;
export type WidthType = typeof width;
export type ZIndexType = typeof zIndex;

interface Theme {
  colors: ColorsType;
  fontSizes: FontSizeType;
  width: WidthType;
  zIndex: ZIndexType;
}

const theme: Theme = {
  colors,
  fontSizes,
  width,
  zIndex,
};

export default theme;
