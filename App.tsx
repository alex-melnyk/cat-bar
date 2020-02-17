import React, { useCallback, useState } from 'react';
import { SideBar, SideBarActions } from './src/components';
import { EmptyScreen } from './src/pages';

export default function App() {
  const [selectedSection, setSelectedSection] = useState(0);

  const categories = [
    {
      label: 'Bakery',
      // icon: 'food-croissant',
      content: <EmptyScreen title="Bakery"/>
    },
    {
      label: 'Food',
      // icon: 'food',
      content: <EmptyScreen title="Food"/>
    },
    {
      label: 'Drinks',
      // icon: 'cup-water',
      content: <EmptyScreen title="Drinks"/>
    },
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
