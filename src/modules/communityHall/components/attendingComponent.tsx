import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Strings} from '../../../utils/constants/strings';

import {vw, vh} from '../../../utils/constants/dimensions';
import {colors} from '../../../utils/constants/colors';
import {Fonts} from '../../../utils/constants/fonts';
import OverlappingComponent from './overlappingComponent';
import CustomButton from '../../../reusableComponents/customButton';

export default function AttendingComponent({item}: any) {
  return (
    <View style={styles.attendingView}>
      <OverlappingComponent />

      <Text style={styles.attendingText}>
        <Text style={styles.numberAttending}>{`${item.attending} `}</Text>
        {Strings.attending}
      </Text>

      <CustomButton
        style={styles.viewEventButton}
        txt={Strings.viewEvent}
        txtStyle={styles.viewEventButtonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  attendingView: {
    height: vh(39),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vh(12),
  },
  attendingText: {
    fontSize: vw(14),
    lineHeight: vh(19),
    fontFamily: Fonts.proximaNovaRegular,
  },
  numberAttending: {
    color: colors.textBlue,
    fontFamily: Fonts.proximaNovaBold,
  },
  viewEventButton: {
    width: vw(146.58),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textBlue,
    marginLeft: 'auto',
    borderRadius: vw(10),
  },

  viewEventButtonText: {
    color: colors.white,
    fontFamily: Fonts.proximaNovaBold,
    lineHeight: vh(18),
    fontSize: vw(14),
  },
});
