import { StyleSheet, View, ScrollView } from 'react-native';
import { Typography } from '@/components/Typography';
import { Colors } from '@/constants/DesignTokens';
import { Surface } from '@/components/Surface';
import { MaterialIcons } from '@expo/vector-icons';

export default function ExamsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="displaySmall" style={styles.title}>Exams</Typography>
      
      <Surface style={styles.card}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="assignment" size={32} color={Colors.primary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLarge">Practice Test</Typography>
          <Typography variant="bodyMedium" color={Colors.onSurfaceVariant}>
            Take a mock exam to test your knowledge.
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="history" size={32} color={Colors.secondary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLarge">Exam History</Typography>
          <Typography variant="bodyMedium" color={Colors.onSurfaceVariant}>
            Review your previous exam results and progress.
          </Typography>
        </View>
      </Surface>

      <Surface style={styles.card}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="analytics" size={32} color={Colors.tertiary} />
        </View>
        <View style={styles.cardContent}>
          <Typography variant="titleLarge">Weak Areas</Typography>
          <Typography variant="bodyMedium" color={Colors.onSurfaceVariant}>
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
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
});
