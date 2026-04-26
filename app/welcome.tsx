import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Colors, Spacing } from '@/constants/DesignTokens';
import { MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.surface, Colors.surfaceLow]}
        style={StyleSheet.absoluteFill}
      />
      
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="directions-car" size={80} color={Colors.primary} />
          </View>
          
          <Typography variant="display" align="center" style={styles.title}>
            Madushani{'\n'}Driving School
          </Typography>
          
          <Typography 
            variant="bodyLg" 
            align="center" 
            color={Colors.onSurfaceVariant}
            style={styles.subtitle}
          >
            Learn to Drive with Confidence. Your journey to independence starts here.
          </Typography>
        </View>

        <View style={styles.footer}>
          <Button 
            title="Get Started" 
            onPress={handleGetStarted}
          />
          <Typography 
            variant="labelMd" 
            align="center" 
            color={Colors.onSurfaceVariant}
            style={styles.footerText}
          >
            Trusted by 5,000+ Students
          </Typography>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: Spacing.xxl,
  },
  title: {
    marginBottom: Spacing.lg,
  },
  subtitle: {
    paddingHorizontal: Spacing.xl,
  },
  footer: {
    paddingBottom: Spacing.huge,
  },
  footerText: {
    marginTop: Spacing.lg,
  },
});
