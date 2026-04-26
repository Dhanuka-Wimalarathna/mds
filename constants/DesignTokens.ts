export const Colors = {
  primary: '#0040a1',
  primaryContainer: '#0056d2',
  secondary: '#2a6b2c', // Safety/Success
  background: '#f8f9fa',
  surface: '#f8f9fa',
  surfaceLow: '#f3f4f5',
  surfaceLowest: '#ffffff',
  onSurface: '#191c1d',
  onSurfaceVariant: '#424654',
  outline: '#737785',
  outlineVariant: '#c3c6d6',
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  glass: 'rgba(248, 249, 250, 0.8)', // for Glassmorphism
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  giant: 64,
};

export const Typography = {
  display: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 56,
    lineHeight: 64,
    letterSpacing: -0.02,
  },
  headline: {
    lg: {
      fontFamily: 'Manrope-Bold',
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: -0.01,
    },
    md: {
      fontFamily: 'Manrope-Bold',
      fontSize: 28,
      lineHeight: 36,
    },
    sm: {
      fontFamily: 'Manrope-Bold',
      fontSize: 24,
      lineHeight: 32,
    },
  },
  title: {
    lg: {
      fontFamily: 'Manrope-SemiBold',
      fontSize: 22,
      lineHeight: 28,
    },
    md: {
      fontFamily: 'Manrope-SemiBold',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    sm: {
      fontFamily: 'Manrope-SemiBold',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
  },
  body: {
    lg: {
      fontFamily: 'Manrope-Regular',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    md: {
      fontFamily: 'Manrope-Regular',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    sm: {
      fontFamily: 'Manrope-Regular',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
    },
  },
  label: {
    lg: {
      fontFamily: 'Manrope-Medium',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    md: {
      fontFamily: 'Manrope-Medium',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    sm: {
      fontFamily: 'Manrope-Medium',
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
  },
};

export const Radius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Shadows = {
  ambient: {
    shadowColor: Colors.onSurface,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 2,
  },
};
