import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Typography } from '@/components/Typography';
import { Colors } from '@/constants/DesignTokens';
import { Surface } from '@/components/Surface';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '@/components/Button';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="displaySmall" style={styles.title}>Profile</Typography>
      
      <Surface style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <MaterialIcons name="account-circle" size={80} color={Colors.primary} />
        </View>
        <Typography variant="headlineSmall" style={styles.userName}>John Doe</Typography>
        <Typography variant="bodyLarge" color={Colors.onSurfaceVariant}>Student ID: 12345</Typography>
      </Surface>

      <Typography variant="titleMedium" style={styles.sectionTitle}>Account Settings</Typography>
      
      <Surface style={styles.menuCard}>
        <View style={styles.menuItem}>
          <MaterialIcons name="person-outline" size={24} color={Colors.onSurface} />
          <Typography variant="bodyLarge" style={styles.menuText}>Personal Information</Typography>
          <MaterialIcons name="chevron-right" size={24} color={Colors.onSurfaceVariant} />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuItem}>
          <MaterialIcons name="notifications-none" size={24} color={Colors.onSurface} />
          <Typography variant="bodyLarge" style={styles.menuText}>Notifications</Typography>
          <MaterialIcons name="chevron-right" size={24} color={Colors.onSurfaceVariant} />
        </View>
        <View style={styles.divider} />
        <View style={styles.menuItem}>
          <MaterialIcons name="security" size={24} color={Colors.onSurface} />
          <Typography variant="bodyLarge" style={styles.menuText}>Security</Typography>
          <MaterialIcons name="chevron-right" size={24} color={Colors.onSurfaceVariant} />
        </View>
      </Surface>

      <Button 
        variant="tonal" 
        onPress={() => {}} 
        style={styles.logoutButton}
      >
        Log Out
      </Button>
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
    backgroundColor: Colors.outlineVariant,
    marginHorizontal: 16,
  },
  logoutButton: {
    marginTop: 8,
  },
});
