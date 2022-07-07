import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants/colors';
import {LocalImages} from '../utils/constants/localImages';
import {vh, vw} from '../utils/constants/dimensions';
import ProfileCircles from './profileCircles';

export default function SliderComponentCard({data}: {data: any}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.topHeaderTextStyle}>{data?.topHeader}</Text>
        <Text style={[styles.topHeaderTextStyle, styles.headerStyle]}>
          {data?.header}
        </Text>
      </View>

      <View style={styles.profileStyle}>
        <ProfileCircles
          img={data?.img}
          style={styles.profileImageStyle}
          name={data?.nameArray[0]}
          appericiation={data?.appreciationArray[0]}
          txt={2}
        />
        <ProfileCircles
          img={data?.img}
          style={styles.profileBigImageStyle}
          name={data?.nameArray[1]}
          appericiation={data?.appreciationArray[1]}
          txt={1}
          positionStyle={{backgroundColor: colors.yellow}}
        />
        <ProfileCircles
          img={data?.img}
          style={styles.profileImageStyle}
          name={data?.nameArray[2]}
          appericiation={data?.appreciationArray[2]}
          txt={3}
        />
      </View>

      <View style={styles.shareView}>
        <Text style={styles.shareTextStyle}>{'Share'}</Text>
        <Image source={LocalImages.whatsapp} style={styles.iconLogo} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topHeaderTextStyle: {
    textTransform: 'uppercase',
    color: colors.white,
    alignSelf: 'center',
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerView: {
    marginVertical: 10,
  },
  shareView: {
    backgroundColor: colors.themeGreen,
    height: vh(25),
    width: vw(60),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    borderBottomLeftRadius: vw(10),
    flexDirection: 'row',
  },
  iconLogo: {
    height: vh(13),
    width: vw(13),
  },
  shareTextStyle: {
    color: colors.white,
    marginHorizontal: vh(3),
    fontSize: vw(12),
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh(20),
  },
  profileImageStyle: {
    height: vh(80),
    width: vh(80),
    marginHorizontal: vw(20),
  },
  profileBigImageStyle: {
    height: vh(100),
    width: vh(100),
    borderColor: colors.yellow,
    marginHorizontal: vw(20),
  },
});
