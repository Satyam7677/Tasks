import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopTab1 from '../../../routes/topTab/topTab1';

export default function CollapsedScreen() {
  return (
    <View style={styles.mainViewStyle}>
      <TopTab1 />
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {flex: 1},
});
