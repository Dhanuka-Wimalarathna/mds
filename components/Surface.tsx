import { Colors, Radius, Shadows } from "@/constants/DesignTokens";
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
  const getBackgroundColor = () => {
    switch (tier) {
      case "base":
        return Colors.surface;
      case "low":
        return Colors.surfaceLow;
      case "lowest":
        return Colors.surfaceLowest;
      default:
        return Colors.surface;
    }
  };

  return (
    <View
      style={[
        {
          backgroundColor: getBackgroundColor(),
          borderRadius: Radius[rounded],
        },
        elevated && Shadows.ambient,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
