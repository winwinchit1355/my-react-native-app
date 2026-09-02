import { StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <Text style={styles.body}>Settings and options go here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  body: { fontSize: 16 },
});
