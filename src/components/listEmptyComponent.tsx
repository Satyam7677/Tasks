import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants/colors';
import {LocalImages} from '../utils/constants/localImages';
import {vh, vw} from '../utils/constants/dimensions';
import {Strings} from '../utils/constants/strings';

export default function ListEmptyComponent() {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Image source={LocalImages.noFollowRequest} style={styles.imageStyle} />
      <Text numberOfLines={2} style={styles.textStyle}>
        {Strings.noLiveEvent}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: colors.greyTheme,
  },
  imageStyle: {
    height: vh(120.3),
    width: vw(127.92),
    marginTop: vh(176.06),
    marginLeft: vw(123.28),
  },
  textStyle: {
    color: colors.midBlackText,
    width: vw(129),
    height: vh(40),
    textAlign: 'center',
    marginLeft: vw(123.28),
    fontSize: vh(16),
  },
});
