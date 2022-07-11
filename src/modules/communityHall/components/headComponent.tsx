import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../utils/constants/colors';

import {vh, vw} from '../../../utils/constants/dimensions';

import {Fonts} from '../../../utils/constants/fonts';

import {LocalImages} from '../../../utils/constants/localImages';

import {Strings} from '../../../utils/constants/strings';

export default function HeadComponent({item}: any) {
  return (
    <View style={styles.headView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{item.header}</Text>
        <TouchableOpacity style={styles.optionsButtonTouchView}>
          <Image source={LocalImages.options} style={styles.optionsImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.liveButtonTimeView}>
        <LinearGradient
          colors={[colors.darkRed, colors.lightRed]}
          style={styles.liveButtonView}>
          <TouchableOpacity style={styles.liveButtonView}>
            <Image
              source={LocalImages.nonAudio}
              style={styles.nonAudioImageStyle}
            />
            <Text style={styles.liveTextStyle}>{Strings.live}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.liveOnText}>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headView: {
    height: vh(112),
    width: vw(343),
    backgroundColor: colors.transparentWhite,
    paddingLeft: vw(20),
    paddingTop: vh(16.35),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: vw(18),
    width: vw(262),
    lineHeight: vh(24),
    color: colors.white,
    fontFamily: Fonts.proximaNovaBold,
    textAlign: 'left',
    marginRight: vw(20.5),
  },
  optionsButtonTouchView: {
    height: vh(28),
    width: vh(28),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: vw(12.5),
  },
  liveButtonTimeView: {
    height: vh(23),
    width: vw(127),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh(10.65),
  },
  liveButtonView: {
    width: vw(60),
    borderRadius: vw(5),
    height: vh(23),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: vw(8),
    paddingLeft: vw(4),
  },
  nonAudioImageStyle: {
    height: vh(11.1),
    width: vw(11.79),
  },

  liveTextStyle: {
    color: colors.white,
    textTransform: 'uppercase',
    fontFamily: Fonts.proximaNovaBold,
  },
  liveOnText: {
    fontSize: vw(14),
    fontFamily: Fonts.proximaNovaSemiBold,
    color: colors.white,
  },
  optionsImage: {
    height: '65%',
    width: '10%',
  },
});
