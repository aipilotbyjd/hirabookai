export const COLORS = {
  primary: '#fc8019',
  secondary: '#282c3f',
  gray: {
    100: '#f2f2f2',
    200: '#e6e6e6',
    300: '#cccccc',
    400: '#7a7e8e',
    500: '#595959',
    600: '#3d4152',
    700: '#262626',
  },
  success: '#48c479',
  error: '#ff3838',
  warning: '#ffa700',
  info: '#3498db',
  white: '#ffffff',
  black: '#000000',
  background: {
    primary: '#ffffff',
    secondary: '#f8f8f8',
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  tabBarHeight: {
    ios: 90,
    android: 64,
  },
  tabBarPadding: {
    ios: 30,
    android: 5,
  },
  screenPadding: 16,
  sectionPadding: 24,
} as const;

export const SIZES = {
  // Typography
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 18,
  body: 16,
  caption: 14,
  small: 12,
  
  // UI Elements
  tabIcon: 20,
  tabLabel: 12,
  buttonHeight: 48,
  inputHeight: 44,
  borderRadius: 8,
  iconSize: {
    small: 16,
    medium: 24,
    large: 32,
  },
} as const;

export const FONTS = {
  regular: 'System',
  medium: 'System-Medium',
  bold: 'System-Bold',
} as const;

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
} as const;
