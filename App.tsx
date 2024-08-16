import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  useWindowDimensions,
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { photos } from './data';
import Carousel from './Carousel';
import { useState } from 'react';

export default function App() {
  const { height, width } = useWindowDimensions();
  const [headerCarouselPage, setHeaderCarouselPage] = useState(0);

  const onHeaderCarouselScroll = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const currentPage = Math.max(0, e.nativeEvent.contentOffset.x / width);
    if (currentPage != headerCarouselPage) {
      setHeaderCarouselPage(currentPage);
    }
  };

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <ScrollView
        style={{ height: height / 2 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment='start'
        decelerationRate={'fast'}
        onScroll={onHeaderCarouselScroll}
      >
        <FlatList
          style={{ width }}
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
        <Image
          source={photos[0].image}
          style={{ width, height: '100%', resizeMode: 'cover' }}
        />
        <Image
          source={photos[10].image}
          style={{ width, height: '100%', resizeMode: 'cover' }}
        />
      </ScrollView>
      <View style={styles.dotContainer}>
        {Array(3)
          .fill(0)
          .map(({ item, index }) => (
            <View
              style={{
                width: index === headerCarouselPage ? 10 : 8,
                aspectRatio: 1,
                backgroundColor:
                  index === headerCarouselPage ? 'black' : 'grey',
                borderRadius: 5,
                alignItems: 'center',
              }}
            />
          ))}
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
  dotContainer: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
});
