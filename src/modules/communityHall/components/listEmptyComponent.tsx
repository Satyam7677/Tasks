import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

import {colors} from '../../../utils/constants/colors';
import {LocalImages} from '../../../utils/constants/localImages';
import {vh, vw} from '../../../utils/constants/dimensions';
import {Strings} from '../../../utils/constants/strings';
import {Fonts} from '../../../utils/constants/fonts';

export default function ListEmptyComponent() {
  return (
    <View style={styles.safeAreaStyle}>
      <Image source={LocalImages.noFollowRequest} style={styles.imageStyle} />
      <Text numberOfLines={2} style={styles.textStyle}>
        {Strings.noLiveEvent}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    height: vh(812),

    justifyContent: 'center',
  },
  imageStyle: {
    height: vh(120.3),
    width: vw(127.92),
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: vh(8.57),
    resizeMode: 'contain',
  },
  textStyle: {
    color: colors.midBlackText,
    width: vw(129),
    height: vh(40),
    textAlign: 'center',
    marginLeft: vw(123.28),
    fontSize: vh(16),
    fontFamily: Fonts.proximaNovaSemiBold,
  },
});
