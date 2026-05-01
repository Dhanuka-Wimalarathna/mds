import { StyleSheet, View, ScrollView } from 'react-native';
import { Typography } from '@/components/Typography';
import { Surface } from '@/components/Surface';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function ExamsScreen() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      contentContainerStyle={styles.content}
    >
      <Typography variant="headlineSm" style={styles.title}>{t('exams.title')}</Typography>
      
      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="assignment" size={32} color={colors.primary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">{t('exams.mandatorySigns')}</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            {t('exams.mandatorySignsDesc')}
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="history" size={32} color={colors.secondary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">{t('exams.warningSigns')}</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            {t('exams.warningSignsDesc')}
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="analytics" size={32} color={colors.tertiary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">{t('exams.mockTheory')}</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            {t('exams.mockTheoryDesc')}
          </Typography>
        </View>
      </Surface>
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
  card: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
});
