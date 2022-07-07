import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';

export default function CustomFlatList({
  data,
  renderItem,
  listHeader,
  bounces,
  onScroll,
  style,

  throttle,
}) {
  return (
    <View>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        bounces={bounces}
        onScroll={onScroll}
        contentContainerStyle={style}
        scrollEventThrottle={throttle}
      />
    </View>
  );
}
