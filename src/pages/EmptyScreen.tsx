import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { MealItem } from '../components';
// @ts-ignore
import Meal1 from '../../assets/dishes/meal_1.png';
// @ts-ignore
import Meal2 from '../../assets/dishes/meal_2.png';
// @ts-ignore
import Meal3 from '../../assets/dishes/meal_3.png';

type Props = {
  title: string;
};

export const EmptyScreen: React.FC<Props> = ({ title }) => {
  const [selected, setSelected] = useState(0);

  const categories = useMemo<Array<{
    name: string;
    icon: string;
    active?: boolean;
  }>>(() => [
    { name: 'All', icon: 'food' },
    { name: 'Daily', icon: 'food' },
    { name: 'Italian', icon: 'food' },
    { name: 'Asian', icon: 'food' },
    { name: 'Medical', icon: 'food' },
  ].map((item, idx) => ({
    ...item,
    active: (selected === idx)
  })), [selected]);

  const handleMealPress = useCallback(() => {
    // HANDLE MEAL PRESS
  }, []);

  const renderItem = ({ item, index }) => {
    const handlePress = () => setSelected(index);

    return (
      <TouchableOpacity
        style={{
          marginRight: 30,
          alignItems: 'center'
        }}
        onPress={handlePress}
      >
        <View
          style={{
            marginBottom: 10,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: item.active
              ? '#F08E6F'
              : '#FBF3ED'
          }}
        >
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: item.active
              ? '#F08E6F'
              : '#9CA0AF'
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
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
      <View
        style={{
          marginTop: 50,
          height: 80
        }}
      >
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 30,
            flexGrow: 1
          }}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(v, idx) => `item_${idx}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginHorizontal: 20,
            marginVertical: 50,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        >
          <MealItem
            name="Rogue"
            extra="with chicken"
            image={Meal1}
            calories={1020}
            onPress={handleMealPress}
          />
          <MealItem
            name="Meat"
            extra="with spinach"
            image={Meal2}
            calories={910}
            onPress={handleMealPress}
          />
          <MealItem
            name="Stake"
            extra="with broccoli"
            image={Meal3}
            calories={1690}
            onPress={handleMealPress}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
