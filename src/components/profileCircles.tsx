import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/constants/dimensions';
import {colors} from '../utils/constants/colors';

export default function ProfileCircles({
  img,
  style,
  name,
  appericiation,
  txt,
  positionStyle,
}) {
  return (
    <View style={[styles.mainView, style]}>
      <Image source={img} style={[style, styles.imageStyle]} />
      <Text style={styles.textStyle}>{name}</Text>
      <Text numberOfLines={1} style={styles.appreciationTextStyle}>
        {`${appericiation} Appericiations`}
      </Text>
      <View style={[styles.positionStyle, positionStyle]}>
        <Text>{txt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderRadius: vw(100),
    borderColor: colors.white,
    borderWidth: 2,
  },
  imageStyle: {
    resizeMode: 'cover',
    marginVertical: vh(4),
  },
  textStyle: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: vw(12),
  },
  appreciationTextStyle: {
    // alignSelf: 'center',
    color: colors.white,
    fontSize: vw(11),
    flexWrap: 'wrap',
  },
  positionStyle: {
    height: vh(20),
    width: vh(20),
    borderRadius: vh(20),
    position: 'absolute',
    bottom: -10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
