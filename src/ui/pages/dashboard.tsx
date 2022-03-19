import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {HSpacer, VSpacer} from '../atoms/shacer';
import StandardPageTemplate from '../templates/dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SpaceActivityCard} from '../organisms/space/activity-card';

const Screen: React.FC<{}> = () => {
  const RightIcons = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Ionicons
        name="notifications-outline"
        size={20}
        style={{padding: 12, color: 'white'}}
      />
      <HSpacer />
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: 'red',
        }}
      />
    </View>
  );

  return (
    <StandardPageTemplate
      right_icons={RightIcons}
      title="Dashboard"
      show_back={false}>
      <View style={{paddingHorizontal: 16}}>
        <VSpacer space={24} />
      </View>

      {[1, 2].map(v => {
        return (
          <View style={{marginBottom: 12}}>
            <SpaceActivityCard />
          </View>
        );
      })}
    </StandardPageTemplate>
  );
};

export default Screen;
