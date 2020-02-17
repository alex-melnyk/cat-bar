import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

type Props = {
  icons: string[];
  onPress: (index: number) => void;
};

export const SideBarActions: React.FC<Props> = ({ icons, onPress }) => {
  const iconsList = useMemo(() => icons.map((icon, idx) => {
    const handlePress = () => onPress(idx);

    return (
      <TouchableOpacity
        key={`icon_${idx}`}
        onPress={handlePress}
      >
        <Icon
          name={icon}
          style={{
            marginBottom: 20,
            fontSize: 28,
            color: '#9CA0AF'
          }}
        />
      </TouchableOpacity>
    )
  }), [icons]);

  return (
    <View style={{
      width: '100%',
      alignItems: 'center'
    }}>
      {iconsList}
    </View>
  );
};
