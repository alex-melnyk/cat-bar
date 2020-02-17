import React, { ReactElement, useEffect, useMemo, useRef } from 'react';
import { Animated, Image, SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './Styles';
import { SideBarSection } from '../SideBarSection';
import { SideBarSectionLabel } from '../SideBarSectionLabel';

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
  headerComponent,
  footerComponent,
  onSelect
}) => {
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

  const ContentSection = useMemo(() => {
    const section = data.find((section, idx) => selected === idx);

    if (section && section.content) {
      return section.content;
    }

    return (
      <View style={styles.noContentContainer}>
        <Text style={styles.noContentLabel}>
          NO CONTENT
        </Text>
      </View>
    );
  }, [data, selected]);

  const topTranslate = animated.interpolate(interpolateConfig);

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={[styles.sectionContainer, {
          width: barSize
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
            <Image
              style={styles.selectionBg}
              source={require('../../../assets/selected-bg.png')}
            />
          </Animated.View>
        </View>
        {footerComponent}
      </SafeAreaView>
      <View style={styles.contentContainer}>
        {ContentSection}
      </View>
    </View>
  );
};
