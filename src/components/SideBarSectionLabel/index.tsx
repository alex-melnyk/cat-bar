import React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { styles } from './Styles';

type Props = {
  label: string;
  active?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  activeColor?: string;
  inactiveColor?: string;
};

export const SideBarSectionLabel: React.FC<Props> = ({
  label,
  active,
  icon,
  style,
  labelStyle,
  iconStyle,
  inactiveColor = '#9CA0AF',
  activeColor = '#020D35',
}) => {
  const highlightColor = active
    ? activeColor
    : inactiveColor;

  return (
    <View style={[styles.container, style]}>
      {icon && (
        <Icon
          name={icon}
          style={[styles.icon, {
            color: highlightColor
          }, iconStyle]}
        />
      )}
      <Text style={[styles.label, {
        color: highlightColor
      }, labelStyle]}>
        {label}
      </Text>
    </View>
  );
}
