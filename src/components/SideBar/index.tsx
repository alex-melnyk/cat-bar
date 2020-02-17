import React, { ReactElement, useMemo } from 'react';
import { SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './Styles';
import { SideBarSection } from '../SideBarSection';
import { SideBarSectionLabel } from '../SideBarSectionLabel';

const BAR_SIZE = 80;
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
        active={active}
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

  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.sectionContainer, {
        width: barSize
      }, barStyle]}>
        {headerComponent}
        <View>
          {sectionsList}
        </View>
        {footerComponent}
      </SafeAreaView>
      <View style={styles.contentContainer}>
        {ContentSection}
      </View>
    </View>
  );
};
