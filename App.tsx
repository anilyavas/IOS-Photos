import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { photos } from './data';
import Carousel from './Carousel';

export default function App() {
  const { height, width } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: height / 2 }}>
        <FlatList
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          inverted
          numColumns={4}
          data={photos}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.photo} />
          )}
        />
      </View>
      <Carousel photos={photos.slice(0, 3)} title='Albums' />
      <Carousel photos={photos.slice(3, 6)} title='People' />
      <Carousel photos={photos.slice(6, 9)} title='Featured' />

      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photo: {
    width: `${100 / 4}%`,
    aspectRatio: 1,
  },
});
