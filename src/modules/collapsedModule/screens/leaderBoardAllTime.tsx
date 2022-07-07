import {FlatList, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from './topTab1LeaderBoard';

export default function LeaderBoardAllTime() {
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const post = useContext(MyContext);

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderViewStyle}>
        <Text>{item}</Text>
      </View>
    );
  };
  const animationFunction = event => {
    Animated.timing(post, {
      toValue: event.nativeEvent.contentOffset.y,
      duration: 2,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.mainViewStyle}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={renderItem}
        onScroll={event => animationFunction(event)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  renderViewStyle: {height: 100, alignSelf: 'center'},
  mainViewStyle: {
    flex: 1,
  },
});
