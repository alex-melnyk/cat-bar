import React from 'react';
import { StyleProp, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { styles } from './Styles';

type Props = {
  barSize: number;
  sectionSize: number;
  style?: StyleProp<ViewStyle>;
  active?: boolean;
  onPress: () => void;
};

export const SideBarSection: React.FC<Props> = ({
  children,
  barSize,
  sectionSize,
  style,
  active,
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
        {active && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: sectionSize / 2 - barSize / 2,
              bottom: -(barSize / 4),
              width: barSize,
              height: barSize,
              // borderRadius: (barSize / 2),
              // backgroundColor: '#FBF0E4'
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#F08E6F'
              }}
            />
          </View>
        )}
        {children}
      </View>
    </View>
  </TouchableWithoutFeedback>
);
