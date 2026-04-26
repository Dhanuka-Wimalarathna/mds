import { StyleSheet, View, ScrollView } from 'react-native';
import { Typography } from '@/components/Typography';
import { Surface } from '@/components/Surface';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';

export default function ExamsScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      contentContainerStyle={styles.content}
    >
      <Typography variant="headlineSm" style={styles.title}>Exams</Typography>
      
      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="assignment" size={32} color={colors.primary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">Practice Test</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            Take a mock exam to test your knowledge.
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="history" size={32} color={colors.secondary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">Exam History</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            Review your previous exam results and progress.
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={[styles.iconContainer, { backgroundColor: colors.surfaceVariant }]}>
          <MaterialIcons name="analytics" size={32} color={colors.tertiary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLg">Weak Areas</Typography>
          <Typography variant="bodyMd" color={colors.onSurfaceVariant}>
            See which topics you need to focus on more.
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
