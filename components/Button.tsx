import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography } from './Typography';
import { Radius, Spacing } from '@/constants/DesignTokens';
import { useTheme } from '@/context/ThemeContext';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tonal';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  disabled,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const isDisabled = disabled || loading;

  const getContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          color={variant === 'primary' ? colors.white : colors.primary}
        />
      );
    }
    return (
      <Typography
        variant="titleMd"
        color={variant === 'primary' ? colors.white : colors.primary}
      >
        {title}
      </Typography>
    );
  };

  const getVariantStyle = () => {
    switch (variant) {
      case 'outline':
        return {
          borderWidth: 1.5,
          borderColor: colors.outlineVariant,
        };
      case 'secondary':
      case 'tonal':
        return {
          backgroundColor: colors.surfaceVariant,
        };
      default:
        return {};
    }
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={isDisabled}
        style={[styles.container, style]}
        {...props}
      >
        <LinearGradient
          colors={[colors.primary, colors.primaryContainer]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {getContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isDisabled}
      style={[
        styles.container,
        getVariantStyle(),
        style,
      ]}
      {...props}
    >
      <View style={styles.baseContent}>{getContent()}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.xl,
    overflow: 'hidden',
    height: 56,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  baseContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
});
