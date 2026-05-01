import { StyleSheet, View, ScrollView, Switch } from 'react-native';
import { Typography } from '@/components/Typography';
import { Surface } from '@/components/Surface';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';

export default function ProfileScreen() {
  const { theme, toggleTheme, isDark, colors } = useTheme();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'si' : 'en';
    setLanguage(nextLang);
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      contentContainerStyle={styles.content}
    >
      <Typography variant="headlineSm" style={styles.title}>{t('profile.title')}</Typography>
      
      <Surface style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <MaterialIcons name="account-circle" size={80} color={colors.primary} />
        </View>
        <Typography variant="headlineSm" style={styles.userName}>John Doe</Typography>
        <Typography variant="bodyLg" color={colors.onSurfaceVariant}>{t('profile.studentId', { id: '12345' })}</Typography>
      </Surface>

      <Typography variant="titleMd" style={styles.sectionTitle}>{t('profile.appSettings')}</Typography>
      
      <Surface style={styles.menuCard}>
        <View style={styles.menuItem}>
          <MaterialIcons name={isDark ? "dark-mode" : "light-mode"} size={24} color={colors.onSurface} />
          <Typography variant="bodyLg" style={styles.menuText}>{t('profile.darkMode')}</Typography>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.outlineVariant, true: colors.primaryContainer }}
            thumbColor={isDark ? colors.primary : colors.white}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuItem}>
          <MaterialIcons name="language" size={24} color={colors.onSurface} />
          <Typography variant="bodyLg" style={styles.menuText}>{t('profile.language')}</Typography>
          <Button 
            variant="tonal"
            title={language === 'en' ? 'English' : 'සිංහල'}
            onPress={toggleLanguage}
            style={{ paddingHorizontal: 12, height: 32 }}
          />
        </View>
      </Surface>

      <Typography variant="titleMd" style={styles.sectionTitle}>{t('profile.accountSettings')}</Typography>
      
      <Surface style={styles.menuCard}>
        <View style={styles.menuItem}>
          <MaterialIcons name="person-outline" size={24} color={colors.onSurface} />
          <Typography variant="bodyLg" style={styles.menuText}>{t('profile.personalInfo')}</Typography>
          <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuItem}>
          <MaterialIcons name="notifications-none" size={24} color={colors.onSurface} />
          <Typography variant="bodyLg" style={styles.menuText}>{t('profile.notifications')}</Typography>
          <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuItem}>
          <MaterialIcons name="security" size={24} color={colors.onSurface} />
          <Typography variant="bodyLg" style={styles.menuText}>{t('profile.security')}</Typography>
          <MaterialIcons name="chevron-right" size={24} color={colors.onSurfaceVariant} />
        </View>
      </Surface>

      <Button 
        variant="tonal" 
        title={t('common.logout')}
        onPress={() => {}} 
        style={styles.logoutButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    marginBottom: 24,
    fontWeight: 'bold',
  },
  profileCard: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 24,
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 16,
    marginLeft: 4,
    fontWeight: '600',
  },
  menuCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)', // Subtle divider
    marginHorizontal: 16,
  },
  logoutButton: {
    marginTop: 8,
  },
});
