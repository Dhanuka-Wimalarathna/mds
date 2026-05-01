import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Typography as TypographyTokens } from '@/constants/DesignTokens';
import { useTheme } from '@/context/ThemeContext';

type Variant = 'display' | 'headlineLg' | 'headlineMd' | 'headlineSm' | 'titleLg' | 'titleMd' | 'titleSm' | 'bodyLg' | 'bodyMd' | 'bodySm' | 'labelLg' | 'labelMd' | 'labelSm';

interface TypographyProps extends TextProps {
  variant?: Variant;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyMd',
  color,
  align = 'auto',
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();
  
  const getVariantStyle = () => {
    switch (variant) {
      case 'display': return TypographyTokens.display;
      case 'headlineLg': return TypographyTokens.headline.lg;
      case 'headlineMd': return TypographyTokens.headline.md;
      case 'headlineSm': return TypographyTokens.headline.sm;
      case 'titleLg': return TypographyTokens.title.lg;
      case 'titleMd': return TypographyTokens.title.md;
      case 'titleSm': return TypographyTokens.title.sm;
      case 'bodyLg': return TypographyTokens.body.lg;
      case 'bodyMd': return TypographyTokens.body.md;
      case 'bodySm': return TypographyTokens.body.sm;
      case 'labelLg': return TypographyTokens.label.lg;
      case 'labelMd': return TypographyTokens.label.md;
      case 'labelSm': return TypographyTokens.label.sm;
      default: return TypographyTokens.body.md;
    }
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        { color: color || colors.onSurface, textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
