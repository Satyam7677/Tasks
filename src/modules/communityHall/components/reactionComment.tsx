import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Strings} from '../../../utils/constants/strings';
import {vh, vw} from '../../../utils/constants/dimensions';
import {colors} from '../../../utils/constants/colors';
import {Fonts} from '../../../utils/constants/fonts';
import {LocalImages} from '../../../utils/constants/localImages';

export default function ReactionComment() {
  return (
    <View style={styles.reactionCommentView}>
      <View style={styles.reactionView}>
        <Text
          style={
            styles.reactionText
          }>{`${Strings.reactions} ${Strings.reactionText}`}</Text>
      </View>
      <View style={styles.commentView}>
        <Image source={LocalImages.chat} style={styles.chatImageStyle} />
        <Text
          style={
            styles.commentText
          }>{`${Strings.comments} ${Strings.commentText}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reactionCommentView: {
    height: vh(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(12),
  },
  reactionView: {},

  reactionText: {
    fontSize: vw(13),
    fontFamily: Fonts.proximaNovaRegular,
    color: colors.textBlack,
    lineHeight: vh(16),
    textAlign: 'left',
  },
  commentText: {
    fontSize: vw(13),
    fontFamily: Fonts.proximaNovaRegular,
    color: colors.textBlack,
    lineHeight: vh(16),
    textAlign: 'right',
  },
  commentView: {flexDirection: 'row', alignItems: 'center'},
  chatImageStyle: {
    height: vh(9.68),
    width: vh(9.68),
    marginRight: vw(4.26),
  },
});
