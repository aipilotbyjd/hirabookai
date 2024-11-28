export const COLORS = {
  primary: '#fc8019',
  secondary: '#282c3f',
  gray: {
    100: '#f2f2f2',
    400: '#7a7e8e',
    600: '#3d4152',
  },
  white: '#ffffff',
  black: '#000000',
} as const;

export const SPACING = {
  tabBarHeight: {
    ios: 90,
    android: 70,
  },
  tabBarPadding: {
    ios: 30,
    android: 10,
  },
} as const;

export const SIZES = {
  tabIcon: 20,
  tabLabel: 12,
} as const;
