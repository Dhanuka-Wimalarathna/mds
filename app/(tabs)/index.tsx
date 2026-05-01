import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@/components/Typography';
import { Surface } from '@/components/Surface';
import { ProgressOrbit } from '@/components/ProgressOrbit';
import { Spacing, Radius } from '@/constants/DesignTokens';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { colors, isDark } = useTheme();
  const { t } = useTranslation();

  const ACTIONS = [
    {
      id: 'mandatory',
      title: t('home.mandatory'),
      description: t('home.mandatoryDesc'),
      icon: 'error',
    },
    {
      id: 'warning',
      title: t('home.warning'),
      description: t('home.warningDesc'),
      icon: 'warning',
    },
    {
      id: 'informatory',
      title: t('home.informatory'),
      description: t('home.informatoryDesc'),
      icon: 'info',
    },
    {
      id: 'quiz',
      title: t('home.quickQuiz'),
      description: t('home.quickQuizDesc'),
      icon: 'bolt',
    },
  ];

  const SUCCESS_STORIES = [
    {
      name: 'Sarah Jenkins',
      quote: t('home.successStory1', { defaultValue: 'I passed my theory test with a perfect score! The road sign identification games were a life saver.' }),
    },
    {
      name: 'David Chen',
      quote: t('home.successStory2', { defaultValue: 'The categorization of signs makes it so much easier to memorize. Highly recommended for beginners!' }),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Typography variant="headlineLg">{t('home.greeting')}</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            {t('home.subGreeting')}
          </Typography>
        </View>

        {/* Progress Card */}
        <Surface tier="lowest" elevated style={styles.progressCard}>
          <View style={styles.progressTop}>
            <View>
              <Typography variant="titleLg">{t('home.masteryLevel')}</Typography>
              <Typography variant="bodySm" color={colors.onSurfaceVariant}>
                {t('home.signsMastered', { count: 45, total: 150 })}
              </Typography>
            </View>
            <View style={[styles.badge, { backgroundColor: isDark ? 'rgba(146, 215, 147, 0.2)' : 'rgba(42, 107, 44, 0.1)' }]}>
              <Typography variant="labelSm" color={colors.secondary}>
                {t('home.advanced')}
              </Typography>
            </View>
          </View>
          <View style={styles.orbitContainer}>
            <ProgressOrbit 
              progress={0.3} 
              total={150} 
              completed={45} 
              size={140}
            />
            <View style={styles.nextLesson}>
              <Typography variant="labelLg">{t('home.nextModule')}</Typography>
              <Typography variant="titleMd">{t('home.prioritySigns')}</Typography>
              <Typography variant="bodySm" color={colors.onSurfaceVariant}>
                {t('home.timeToComplete')}
              </Typography>
            </View>
          </View>
        </Surface>

        {/* Action Grid */}
        <View style={styles.sectionHeader}>
          <Typography variant="titleLg">{t('home.whatsNext')}</Typography>
        </View>
        
        <View style={styles.grid}>
          {ACTIONS.map((action) => (
            <TouchableOpacity key={action.id} activeOpacity={0.8} style={styles.gridItem}>
              <Surface tier="low" style={styles.actionCard}>
                <View style={[styles.actionIcon, { backgroundColor: isDark ? colors.surfaceVariant : colors.white }]}>
                  <MaterialIcons name={action.icon as any} size={24} color={colors.primary} />
                </View>
                <Typography variant="titleMd" style={styles.actionTitle}>
                  {action.title}
                </Typography>
                <Typography variant="bodySm" color={colors.onSurfaceVariant}>
                  {action.description}
                </Typography>
              </Surface>
            </TouchableOpacity>
          ))}
        </View>

        {/* Success Stories */}
        <View style={styles.sectionHeader}>
          <Typography variant="titleLg">{t('home.successStories')}</Typography>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {SUCCESS_STORIES.map((story, i) => (
            <Surface key={i} tier="lowest" style={styles.storyCard}>
              <Typography variant="bodyMd" style={styles.quote}>
                "{story.quote}"
              </Typography>
              <View style={styles.storyFooter}>
                <View style={[styles.avatarPlaceholder, { backgroundColor: colors.surfaceVariant }]} />
                <Typography variant="labelLg">{story.name}</Typography>
              </View>
            </Surface>
          ))}
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Typography variant="labelMd" color={colors.onSurfaceVariant}>
            {t('welcome.title').replace('\n', ' ')}
          </Typography>
          <Typography variant="bodySm" color={colors.onSurfaceVariant}>
            {t('footer.subtitle', { defaultValue: 'Your Complete Road Sign Guide' })}
          </Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.xl,
    paddingBottom: 100, // Space for tab bar
  },
  header: {
    marginBottom: Spacing.xxl,
  },
  progressCard: {
    padding: Spacing.xl,
    marginBottom: Spacing.xxl,
  },
  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  orbitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xl,
  },
  nextLesson: {
    flex: 1,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.xs,
    marginBottom: Spacing.xxl,
  },
  gridItem: {
    width: '50%',
    padding: Spacing.xs,
  },
  actionCard: {
    padding: Spacing.lg,
    height: 160,
    justifyContent: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  actionTitle: {
    marginBottom: 4,
  },
  carousel: {
    marginHorizontal: -Spacing.xl,
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xxl,
  },
  storyCard: {
    width: 280,
    padding: Spacing.xl,
    marginRight: Spacing.lg,
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: Spacing.lg,
    lineHeight: 22,
  },
  storyFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
});
