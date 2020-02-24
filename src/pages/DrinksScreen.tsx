import { Dimensions, ScrollView, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { MealItem } from '../components';
// @ts-ignore
import Meal1 from '../../assets/img/drink_1.png';
// @ts-ignore
import Meal2 from '../../assets/img/drink_2.png';
// @ts-ignore
import Meal3 from '../../assets/img/drink_3.png';

const {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('screen');

const DISH_ITEM_WIDTH = screenWidth - 80;
const DISH_ITEM_HEIGHT = screenHeight / 1.75;

type Props = {
  title: string;
};

export const DrinksScreen: React.FC<Props> = ({ title }) => {
  const handleMealPress = useCallback(() => {
    // HANDLE MEAL PRESS
  }, []);

  return (
    <View
      style={{
        paddingTop: 50,
        flex: 1,
      }}
    >
      <Text
        style={{
          marginLeft: 30,
          fontSize: 30,
          fontWeight: '600'
        }}
      >
        Simple way to find
      </Text>
      <Text
        style={{
          marginLeft: 30,
          fontSize: 30,
          fontWeight: '600',
          color: '#F08E6F'
        }}
      >
        tasty recipes
      </Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingRight: 20,
          marginTop: 25,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        pagingEnabled={true}
        snapToAlignment="start"
        snapToInterval={DISH_ITEM_WIDTH}
      >
        <MealItem
          width={DISH_ITEM_WIDTH}
          height={DISH_ITEM_HEIGHT}
          name="Tea"
          extra="with sugar"
          image={Meal1}
          calories={100}
          onPress={handleMealPress}
        />
        <MealItem
          width={DISH_ITEM_WIDTH}
          height={DISH_ITEM_HEIGHT}
          name="Coffee"
          extra="with milk"
          image={Meal2}
          calories={210}
          onPress={handleMealPress}
        />
        <MealItem
          width={DISH_ITEM_WIDTH}
          height={DISH_ITEM_HEIGHT}
          name="Juice"
          extra="with assortment"
          image={Meal3}
          calories={180}
          onPress={handleMealPress}
        />
      </ScrollView>
    </View>
  );
};
