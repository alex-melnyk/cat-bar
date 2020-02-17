import { SafeAreaView, Text } from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

export const EmptyScreen: React.FC<Props> = ({ title }) => {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500'
        }}
      >
        {title}
      </Text>
    </SafeAreaView>
  );
};
