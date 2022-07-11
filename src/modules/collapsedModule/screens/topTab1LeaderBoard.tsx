import {Animated, StyleSheet, View} from 'react-native';
import React, {createContext} from 'react';

import LeaderBoardTopTab2 from '../../../routes/topTab/leaderBoardTopTab2';
import {colors} from '../../../utils/constants/colors';
import SliderComponentCard from '../../../reusableComponents/sliderComponentCard';
import {dummyData} from '../../../utils/constants/dummyData';

import {vh, vw} from '../../../utils/constants/dimensions';

export const MyContext = createContext('');
export default function TopTab1LeaderBoard() {
  const post: any = new Animated.Value(1);

  return (
    <View style={styles.mainView}>
      <Animated.View
        style={[
          styles.animatedViewStyle,

          {
            height: post.interpolate({
              inputRange: [0, 10, 30, 100],
              outputRange: [300, 200, 100, 0],
              extrapolate: 'extend',
            }),
          },
        ]}>
        <SliderComponentCard data={dummyData} />
      </Animated.View>

      <MyContext.Provider value={post}>
        <Animated.View style={styles.topTab2style}>
          <LeaderBoardTopTab2 />
        </Animated.View>
      </MyContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  subView: {
    height: 10,
    backgroundColor: 'red',
  },
  animatedViewStyle: {
    backgroundColor: colors.themeBlue,
  },
  descriptionView: {
    backgroundColor: '#FEDB6B',
    height: vh(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderView: {
    flexDirection: 'row',
    height: vh(50),
    paddingHorizontal: vw(20),
    alignItems: 'center',
  },
  rankView: {
    width: vw(50),
    alignItems: 'center',
    marginRight: vw(20),
  },
  communityView: {
    width: vw(120),
  },
  karmaPointsView: {
    left: vw(58),
    width: vw(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listHeaderText: {
    fontSize: vw(12),
    fontWeight: '400',
    color: colors.textGrey,
  },
  rankText: {
    fontSize: vw(12),
    fontWeight: '500',
    color: colors.textGrey,
  },
  memberText: {
    color: colors.textBlack,
  },
  karmaText: {
    color: colors.textBlack,
    fontSize: vw(15),
    fontWeight: '700',
  },
  flatListStyle: {
    backgroundColor: colors.white,
    minHeight: vh(500),
  },
  buttonStyle: {
    width: vw(150),
    padding: vh(20),
  },
  topTab2style: {
    flex: 1,
  },
});
