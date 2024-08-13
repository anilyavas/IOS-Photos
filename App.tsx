import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { photos } from './data';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <Image source={item.image} />}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
