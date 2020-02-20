import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import React from 'react';
import { styles } from './Styles';

type Props = {
  image: ImageSourcePropType;
  name: string;
  extra: string;
  calories: number;
  onPress: () => void;
};

export const MealItem: React.FC<Props> = ({
  image,
  name,
  extra,
  calories,
  onPress
}) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.extra}>
        {extra}
      </Text>
      <View style={styles.content}>
        <View style={styles.bottomLine}>
          <View style={styles.caloriesWrapper}>
            <Text style={styles.caloriesValue}>
              {calories}
            </Text>
            <Text style={styles.caloriesLabel}>
              kcal
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bookmark}
            onPress={onPress}
          >
            <Icon
              name="bookmark"
              style={{
                fontSize: 16,
                color: '#F08E6F'
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <Image
      source={image}
      style={styles.image}
    />
  </View>
);
