import { StyleSheet, Text, View } from 'react-native';

export default function PlanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Plan</Text>
      <Text style={styles.body}>Your plans will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 16 },
});
