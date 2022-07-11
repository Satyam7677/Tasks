import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

import {vh, vw} from '../../../utils/constants/dimensions';
import {colors} from '../../../utils/constants/colors';
import {LocalImages} from '../../../utils/constants/localImages';

export default function OverlappingComponent() {
  return (
    <React.Fragment>
      <View style={styles.overlappingView}>
        <Image
          source={LocalImages.noFollowRequest}
          style={[styles.overlappingImage]}
        />
        <Image
          source={LocalImages.noFollowRequest}
          style={[styles.overlappingImage, styles.secondImage]}
        />
        <Image
          source={LocalImages.noFollowRequest}
          style={[styles.overlappingImage, styles.thirdImage]}
        />
        <Image
          source={LocalImages.noFollowRequest}
          style={[styles.overlappingImage, styles.fourthImage]}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  overlappingView: {width: vw(61.8), height: vh(24.72)},
  overlappingImage: {
    height: vh(24.5),
    width: vh(24.5),
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 50,
  },
  secondImage: {marginLeft: 10},
  thirdImage: {marginLeft: 20},
  fourthImage: {marginLeft: 30},
});
