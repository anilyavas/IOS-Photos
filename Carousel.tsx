import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { photos } from './data';
export default function Carousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.images}
      >
        <Image source={photos[0].image} style={styles.image} />
        <Image source={photos[1].image} style={styles.image} />
        <Image source={photos[2].image} style={styles.image} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    padding: 15,
    fontWeight: '700',
    fontSize: 20,
  },
  images: {
    gap: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 15,
  },
});
