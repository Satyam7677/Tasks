import {StyleSheet, View, Animated} from 'react-native';
import React from 'react';

import MyKarmaTopTab2 from '../../../routes/topTab/myKarmaTopTab2';

export const OtherContext = React.createContext();

export default function TopTab1MyKarma() {
  const otherContextPost = new Animated.Value(0);
  return (
    <View style={styles.mainViewStyle}>
      <Animated.View
        style={{
          height: otherContextPost.interpolate({
            inputRange: [0, 50],
            outputRange: [200, 0],
            extrapolate: 'clamp',
          }),
        }}
      />
      <OtherContext.Provider value={otherContextPost}>
        <MyKarmaTopTab2 />
      </OtherContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {flex: 1},
});
