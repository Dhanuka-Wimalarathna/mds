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
import { Colors, Radius, Spacing } from '@/constants/DesignTokens';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  const isDisabled = disabled || loading;

  const getContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          color={variant === 'primary' ? Colors.white : Colors.primary}
        />
      );
    }
    return (
      <Typography
        variant="titleMd"
        color={variant === 'primary' ? Colors.white : Colors.primary}
      >
        {title}
      </Typography>
    );
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
          colors={[Colors.primary, Colors.primaryContainer]}
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
        variant === 'outline' && styles.outline,
        variant === 'secondary' && styles.secondary,
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
  outline: {
    borderWidth: 1.5,
    borderColor: Colors.outlineVariant,
  },
  secondary: {
    backgroundColor: Colors.surfaceLow,
  },
});
