import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {vh, vw} from '../../../utils/constants/dimensions';
import {LocalImages} from '../../../utils/constants/localImages';
import {Strings} from '../../../utils/constants/strings';
import {Fonts} from '../../../utils/constants/fonts';
import {colors} from '../../../utils/constants/colors';

export default function LoveComponent() {
  return (
    <View style={styles.loveCommentButtonView}>
      <TouchableOpacity style={styles.loveButton}>
        <Image source={LocalImages.heart} style={styles.loveImage} />
        <Text style={styles.loveText}>{Strings.loved}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loveButton}>
        <Image source={LocalImages.chat} style={styles.loveImage} />
        <Text style={styles.commentText}>{Strings.comment}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loveButton}>
        <Image source={LocalImages.share} style={styles.loveImage} />
        <Text style={styles.shareText}>{Strings.share}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loveCommentButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(33.56),
    height: vh(40.96),
    alignItems: 'center',
  },
  loveButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loveText: {
    fontFamily: Fonts.proximaNovaSemiBold,
    color: colors.brightRed,
  },
  commentText: {
    fontFamily: Fonts.proximaNovaSemiBold,
    color: colors.darkGrey,
  },
  shareText: {
    fontFamily: Fonts.proximaNovaSemiBold,
    color: colors.brightGreen,
  },
  loveImage: {
    height: vh(14.1),
    width: vh(14.1),
    marginRight: vh(3.34),
  },
});
