import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '@/constants/DesignTokens';
import { Typography } from './Typography';

interface ProgressOrbitProps {
  progress: number; // 0 to 1
  total: number;
  completed: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressOrbit: React.FC<ProgressOrbitProps> = ({
  progress,
  total,
  completed,
  size = 120,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        {/* Background Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={Colors.surfaceLow}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Stroke */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={Colors.secondary}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.content}>
          <Typography variant="headlineSm" color={Colors.onSurface}>
            {completed}
          </Typography>
          <Typography variant="labelSm" color={Colors.onSurfaceVariant}>
            /{total}
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
