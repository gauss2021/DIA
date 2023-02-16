import React from 'react';

import {Pressable, Text} from 'react-native';

const ButtonComponent = ({
  color,
  onpress,
  margintop,
  textButton,
  policeColor,
}: {
  color: string;
  onpress: Function;
  margintop: number;
  textButton: string;
  policeColor: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        onpress();
      }}
      style={{
        backgroundColor: color,
        padding: 15,
        borderRadius: 15,
        marginTop: margintop,
        elevation: 5,
      }}
      android_ripple={{color: '#fff'}}>
      <Text style={{textAlign: 'center', color: policeColor}}>
        {textButton}
      </Text>
    </Pressable>
  );
};

export default ButtonComponent;
