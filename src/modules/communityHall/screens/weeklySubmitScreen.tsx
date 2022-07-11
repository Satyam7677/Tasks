import React from 'react';

import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../../utils/constants/colors';
import {vh, vw} from '../../../utils/constants/dimensions';
import {Strings} from '../../../utils/constants/strings';

import {Fonts} from '../../../utils/constants/fonts';

import {data} from '../../../utils/constants/weeklyData';

import AttendingComponent from '../components/attendingComponent';
import HeadComponent from '../components/headComponent';
import InnerFlatList from '../components/innerFlatList';
import LoveComponent from '../components/loveComponent';
import ProfileComponent from '../components/profileComponent';
import ReactionComment from '../components/reactionComment';
import ListEmptyComponent from '../components/listEmptyComponent';
import CustomButton from '../../../reusableComponents/customButton';

interface props {
  item: {
    header: String;
    date: String;
    name: String;
    designation: String;
    attending: Number;
  };
}

export default function WeeklySubmit() {
  const renderItem = ({item}: props) => {
    return (
      <React.Fragment>
        <View style={styles.renderView}>
          <LinearGradient
            colors={[colors.darkBlue, colors.midBlue]}
            style={styles.linearGradientStyle}>
            <View style={styles.infoScreen}>
              {/* ********************** Head part***************************** */}
              <HeadComponent item={item} />
              {/* ************************************************************** */}

              {/* ***********Profile Component**************************** */}

              <ProfileComponent item={item} />
              {/* ****************************************************** */}

              <View style={styles.lineStyle} />

              <Text style={styles.ourSpeakerText}>{Strings.ourSpeakers}</Text>

              {/* ********************Inner FlatList ****************************************/}

              <View style={styles.innerFlatlistView}>
                <InnerFlatList />
              </View>
              {/* ************************************************************************** */}

              <CustomButton
                style={styles.startNowView}
                txt={Strings.startLiveNow}
                txtStyle={styles.startLiveText}
              />
            </View>
          </LinearGradient>

          {/* **************Attending View ********************* */}
          <AttendingComponent item={item} />
          {/* ***************************************************** */}

          {/* ********Reaction and Comment View */}
          <ReactionComment />
          {/* ******************************** */}
        </View>
        <View style={styles.lineSeparator} />

        {/* ****************Love Comment Share View ********************** */}
        <LoveComponent />
        {/* ************************************************* */}
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
}

const ItemSeparatorComponent = () => {
  return <View style={styles.itemSeparatorView} />;
};

const styles = StyleSheet.create({
  itemSeparatorView: {
    backgroundColor: colors.textGrey,
    height: vh(15),
  },
  renderView: {
    height: vh(547.04),
    paddingVertical: vh(20.76),
    paddingHorizontal: vw(16),
  },
  infoScreen: {
    height: vh(441),
    width: vw(343),
  },

  linearGradientStyle: {borderRadius: vh(10), marginBottom: vh(12)},

  buttonTimeView: {
    flexDirection: 'row',
    height: vh(20),
  },

  lineStyle: {
    borderWidth: 0.5,
    opacity: 0.2,
    width: vw(302),
    alignSelf: 'center',
    borderColor: colors.white,
    marginBottom: vh(16),
  },
  ourSpeakerText: {
    color: colors.white,
    fontSize: vw(12),
    fontFamily: Fonts.proximaNovaSemiBold,
    marginLeft: vw(20),
    lineHeight: vh(15),
    letterSpacing: vw(1.08),
    marginBottom: vh(12),
  },

  startNowView: {
    marginHorizontal: vw(20),
    width: vw(303),
    height: vh(40),
    backgroundColor: colors.transparentWhite,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerFlatlistView: {
    marginBottom: vh(16),
  },
  startLiveText: {
    color: colors.white,
    fontSize: vw(14),
    fontFamily: Fonts.proximaNovaBold,
    lineHeight: vh(17),
    letterSpacing: vw(1.26),
  },

  headTextView: {
    height: vh(46),
    width: vw(262),
  },

  lineSeparator: {
    borderWidth: vw(0.5),
    borderColor: colors.lineSeparatorGrey,
  },
});
