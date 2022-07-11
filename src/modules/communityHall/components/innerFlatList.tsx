import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Strings} from '../../../utils/constants/strings';
import {LocalImages} from '../../../utils/constants/localImages';
import {vh, vw, normalize} from '../../../utils/constants/dimensions';
import {colors} from '../../../utils/constants/colors';
import {Fonts} from '../../../utils/constants/fonts';

interface props {
  item: {
    name: string;
    designation: string;
  };
}

export default function InnerFlatList() {
  const inFlatListData = [
    {
      name: Strings.aanchal,
      designation: Strings.anchalDesignation,
    },
    {name: Strings.akansha, designation: Strings.akanshaDesignation},
    {
      name: Strings.krishna,
      designation: Strings.krishnaDesignation,
    },
  ];

  const innerRenderItem = ({item}: props) => {
    return (
      <TouchableOpacity style={styles.innerRenderView}>
        <Image
          source={LocalImages.noFollowRequest}
          style={styles.innerFlatListImage}
        />
        <Text numberOfLines={1} style={styles.inFlatlistName}>
          {item.name}
        </Text>
        <Text numberOfLines={2} style={styles.inFlatListDesignation}>
          {item.designation}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <React.Fragment>
      <FlatList
        data={inFlatListData}
        renderItem={innerRenderItem}
        contentContainerStyle={{paddingHorizontal: vw(20)}}
        horizontal
        ItemSeparatorComponent={NewItemSeparatorComponent}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </React.Fragment>
  );
}

const NewItemSeparatorComponent = () => {
  return <View style={{width: vw(8)}} />;
};

const styles = StyleSheet.create({
  innerRenderView: {
    height: vh(125),
    width: vw(122),
    backgroundColor: colors.white,
    borderRadius: vw(10),
    paddingHorizontal: vw(16),
    paddingVertical: vh(17),
  },
  innerFlatListImage: {
    height: vw(40),
    width: vw(40),
    resizeMode: 'contain',
    borderRadius: vw(50),
    marginHorizontal: vw(25),
    marginBottom: vh(8),
  },
  inFlatlistName: {
    fontFamily: Fonts.proximaNovaSemiBold,
    fontSize: vw(12),
    lineHeight: vh(15),
    textAlign: 'center',
    color: colors.black,
    marginBottom: vh(2),
  },
  inFlatListDesignation: {
    fontFamily: Fonts.proximaNovaRegular,

    fontSize: normalize(10.7),
    color: colors.skyBlue,
    lineHeight: vh(13),
    letterSpacing: vw(-0.22),
    textAlign: 'center',
  },
});
