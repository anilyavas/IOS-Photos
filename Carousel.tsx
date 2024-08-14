import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

type Carousel = {
  title: string;
  photos: any[];
};

export default function Carousel({ title, photos }: Carousel) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.images}
        snapToAlignment='start'
        snapToInterval={265}
        decelerationRate='fast'
      >
        {photos.map((photo) => (
          <Image key={photo.id} source={photo.image} style={styles.image} />
        ))}
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
    gap: 15,
    paddingHorizontal: 20,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 15,
  },
});
