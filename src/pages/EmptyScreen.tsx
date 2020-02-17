import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';

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
            color:  item.active
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
    </SafeAreaView>
  );
};
