import { StyleSheet, Text, View } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History</Text>
      <Text style={styles.body}>Your history will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 16 },
});
