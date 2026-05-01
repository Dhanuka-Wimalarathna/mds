import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Colors, Spacing } from '@/constants/DesignTokens';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

export default function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

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
            <MaterialIcons name="traffic" size={80} color={Colors.primary} />
          </View>
          
          <Typography variant="display" align="center" style={styles.title}>
            {t('welcome.title')}
          </Typography>
          
          <Typography 
            variant="bodyLg" 
            align="center" 
            color={Colors.onSurfaceVariant}
            style={styles.subtitle}
          >
            {t('welcome.subtitle')}
          </Typography>
        </View>

        <View style={styles.footer}>
          <Button 
            title={t('common.getStarted')} 
            onPress={handleGetStarted}
          />
          <Typography 
            variant="labelMd" 
            align="center" 
            color={Colors.onSurfaceVariant}
            style={styles.footerText}
          >
            {t('welcome.trusted')}
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
