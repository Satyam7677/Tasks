import {Animated, View} from 'react-native';
import React from 'react';

// interface props {
//   data: any;
//   renderItem: any;
//   listHeader?: any;
//   bounces?: Boolean;
//   onScroll?: any;
//   style?: any;
//   throttle?: Number;
// }

export default function CustomFlatList({
  data,
  renderItem,
  listHeader,
  bounces,
  onScroll,
  style,
  throttle,
}: any) {
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
