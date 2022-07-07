import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {OtherContext} from './topTab1MyKarma';

interface Props {
  post: number;
}

export default function MyKarmaAllTime(props: Props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const otherContextPost = useContext(OtherContext);

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderViewStyle}>
        <Text>{item}</Text>
      </View>
    );
  };

  const animatedFunction = event => {
    Animated.timing(otherContextPost, {
      toValue: event.nativeEvent.contentOffset.y,
      duration: 2,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.mainViewStyle}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={renderItem}
        onScroll={event => animatedFunction(event)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  renderViewStyle: {height: 80, alignSelf: 'center'},
  mainViewStyle: {
    flex: 1,
  },
});
