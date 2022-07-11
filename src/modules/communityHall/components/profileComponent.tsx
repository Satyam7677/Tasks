import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {vw, vh} from '../../../utils/constants/dimensions';
import {colors} from '../../../utils/constants/colors';
import {Strings} from '../../../utils/constants/strings';
import {Fonts} from '../../../utils/constants/fonts';

export default function ProfileComponent({item}: any) {
  return (
    <View style={styles.profileDetailView}>
      <View style={styles.profileImageView}>
        <View style={styles.profileImage} />
      </View>

      <View style={styles.profileDetailTextView}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.designationText}>{item.designation}</Text>
        <View style={styles.eventHost}>
          <Text style={styles.eventHostText}>{Strings.eventHost}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileDetailView: {
    marginTop: vh(16),
    flexDirection: 'row',
    height: vh(52),
    paddingLeft: vw(20),
    marginBottom: vh(17),
  },
  profileImageView: {
    width: vw(32),
    marginRight: vw(6),
  },
  profileImage: {
    height: vw(32),
    width: vw(32),
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  profileDetailTextView: {
    height: vh(51),
  },
  nameText: {
    color: colors.white,
    fontSize: vw(12),
    fontFamily: Fonts.proximaNovaBold,
  },
  designationText: {
    color: colors.white,
    fontSize: vw(12),
    fontFamily: Fonts.proximaNovaRegular,
  },
  eventHost: {
    height: vh(18),
    width: vw(83),
    backgroundColor: colors.transparentWhite,
    alignItems: 'center',
    borderRadius: vw(3),
    justifyContent: 'center',
    marginTop: vh(6),
  },
  eventHostText: {
    color: colors.white,
    fontSize: vw(11),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
