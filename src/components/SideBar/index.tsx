import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
import { SideBarSection } from '../SideBarSection';
import { SideBarSectionLabel } from '../SideBarSectionLabel';
import { SideBarSelector } from '../SvgImage';
import { styles } from './Styles';

const {
  height: screenHeight
} = Dimensions.get('screen');

const BAR_SIZE = 60;
const SECTION_SIZE = 160;

export type ISection = {
  label: string | ReactElement;
  icon?: string;
  content: ReactElement;
};

type Props = {
  data: ISection[];
  selected: number;
  barSize?: number;
  sectionSize?: number;
  barStyle?: StyleProp<ViewStyle>;
  sectionStyle?: StyleProp<ViewStyle>;
  barColor?: string;
  headerComponent?: ReactElement;
  footerComponent?: ReactElement;
  onSelect: (index: number) => void;
};

export const SideBar: React.FC<Props> = ({
  data,
  selected,
  barSize = BAR_SIZE,
  sectionSize = SECTION_SIZE,
  barStyle,
  sectionStyle,
  barColor = '#FF0000',
  headerComponent,
  footerComponent,
  onSelect
}) => {
  const [scrollValue, setScrollValue] = useState(0);
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animated, {
      toValue: selected
    }).start();
  }, [animated, selected]);

  const interpolateConfig = useMemo(() => ({
    inputRange: data.map((v, idx) => idx),
    outputRange: data.map((v, idx) => idx * sectionSize)
  }), [data, sectionSize]);

  const sectionsList = useMemo(() => data.map((section, idx) => {
    const handlePress = () => onSelect(idx);
    const active = (selected === idx);

    const sectionLabel = (typeof section.label === 'string') ? (
      <SideBarSectionLabel
        label={section.label}
        icon={section.icon}
        active={active}
      />
    ) : section.label;

    return (
      <SideBarSection
        key={`section_${idx}`}
        barSize={barSize}
        sectionSize={sectionSize}
        style={sectionStyle}
        onPress={handlePress}
      >
        {sectionLabel}
      </SideBarSection>
    );
  }), [data, selected, barSize, sectionSize, sectionStyle, onSelect]);

  const contentList = useMemo(() => data.map((item, idx) => (
    <View
      style={{
        height: screenHeight,
        alignItems: 'flex-end'
      }}
    >
      {item.content}
    </View>
  )), [data]);

  const handleContentScroll = useCallback(({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    // setScrollValue(nativeEvent.contentOffset.y);
    const offset = nativeEvent.contentOffset.y;
    animated.setValue(offset / screenHeight);
  }, [animated]);

  const topTranslate = animated.interpolate(interpolateConfig);

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, {
        paddingLeft: barSize,
      }]}>
        <FlatList
          data={contentList}
          keyExtractor={(v, idx) => `content_${idx}`}
          renderItem={({ item }) => item}
          decelerationRate="fast"
          pagingEnabled={true}
          snapToAlignment="start"
          snapToInterval={screenHeight}
          onScroll={handleContentScroll}
          scrollEventThrottle={16}
        />
      </View>
      <SafeAreaView
        style={[styles.sectionContainer, {
          width: barSize,
          backgroundColor: barColor
        }, barStyle]}
      >
        {headerComponent}
        <View style={styles.selectionContainer}>
          {sectionsList}
          <Animated.View
            style={[styles.selectionWrapper, {
              top: topTranslate,
              width: barSize,
              height: sectionSize
            }]}
          >
            <View style={styles.selectionDot}/>
            <SideBarSelector
              color={barColor}
            />
          </Animated.View>
        </View>
        {footerComponent}
      </SafeAreaView>
    </View>
  );
};
