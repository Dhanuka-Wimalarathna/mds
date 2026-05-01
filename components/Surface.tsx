import { Radius, Shadows } from "@/constants/DesignTokens";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { View, ViewProps } from "react-native";

type Tier = "base" | "low" | "lowest" | "high";

interface SurfaceProps extends ViewProps {
  tier?: Tier;
  rounded?: keyof typeof Radius;
  elevated?: boolean;
}

export const Surface: React.FC<SurfaceProps> = ({
  tier = "base",
  rounded = "md",
  elevated = false,
  style,
  children,
  ...props
}) => {
  const { colors, isDark } = useTheme();

  const getBackgroundColor = () => {
    switch (tier) {
      case "base":
        return colors.surface;
      case "low":
        return colors.surfaceLow;
      case "lowest":
        return colors.surfaceLowest;
      default:
        return colors.surface;
    }
  };

  return (
    <View
      style={[
        {
          backgroundColor: getBackgroundColor(),
          borderRadius: Radius[rounded],
        },
        elevated && {
          ...Shadows.ambient,
          shadowColor: isDark ? "#000" : Shadows.ambient.shadowColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
