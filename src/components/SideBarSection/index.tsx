import React from 'react';
import { StyleProp, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { styles } from './Styles';

type Props = {
  barSize: number;
  sectionSize: number;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const SideBarSection: React.FC<Props> = ({
  children,
  barSize,
  sectionSize,
  style,
  onPress
}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
  >
    <View
      style={[styles.sectionItem, {
        width: barSize,
        height: sectionSize
      }, style]}
    >
      <View
        style={[{
          width: sectionSize,
          height: barSize,
          transform: [
            { rotate: '270deg' }
          ]
        }]}
      >
        {children}
      </View>
    </View>
  </TouchableWithoutFeedback>
);
