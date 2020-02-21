import React, { useCallback, useState } from 'react';
import { SideBar, SideBarActions } from './src/components';
import { BakeryScreen, DrinksScreen, FoodScreen } from './src/pages';

export default function App() {
  const [selectedSection, setSelectedSection] = useState(0);

  const categories = [
    {
      label: 'Bakery',
      // icon: 'food-croissant',
      content: <BakeryScreen title="Bakery"/>
    },
    {
      label: 'Food',
      // icon: 'food',
      content: <FoodScreen title="Food"/>
    },
    {
      label: 'Drinks',
      // icon: 'cup-water',
      content: <DrinksScreen title="Drinks"/>
    }
  ];

  const handleSelect = useCallback((index) => {
    setSelectedSection(index);
  }, []);

  const handleActionPress = useCallback((index) => {
    // setSelectedSection(index);
  }, []);

  return (
    <SideBar
      data={categories}
      selected={selectedSection}
      barStyle={{
        justifyContent: 'space-between'
      }}
      barColor="#FBF0E4"
      headerComponent={(
        <SideBarActions
          icons={['apps', 'search']}
          onPress={handleActionPress}
        />
      )}
      footerComponent={(
        <SideBarActions
          icons={['settings']}
          onPress={handleActionPress}
        />
      )}
      onSelect={handleSelect}
    />
  );
}
