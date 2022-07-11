import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface props {
  style: Object;
  onPressFun?: any;
  txt?: String;
  txtStyle?: Object;
}

export default function CustomButton({
  style,
  onPressFun,
  txt,
  txtStyle,
}: props) {
  return (
    <TouchableOpacity style={style} onPress={onPressFun}>
      <Text style={txtStyle}>{txt}</Text>
    </TouchableOpacity>
  );
}
