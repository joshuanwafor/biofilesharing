import { AppTypographySubHeading } from "../../atoms/typography";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function UserInfoSlides() {
    let labels: {icon: string; label: string; color: string; value: string}[] = [
      {
        label: 'Your Revenue',
        icon: 'cash-outline',
        color: 'black',
        value: '₦00.00',
      },
      {
        label: 'Your ratings',
        icon: 'trending-up-outline',
        color: '#3a86ff',
        value: '4.0',
      },
      {
        label: 'Jobs Completed',
        icon: 'thumbs-up-outline',
        color: '#1C6F47',
        value: '100+',
      },
      {
        label: 'Your badge',
        icon: 'documents-outline',
        color: '#5a189a',
        value: 'Bronze',
      },
    ];
    return (
      <View style={{marginVertical: 18}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces
          alwaysBounceHorizontal>
          {labels.map((v, i) => {
            return (
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.3,
                  aspectRatio: 1 / 0.5,
                  backgroundColor: v.color,
                  marginLeft: 24,
                  marginRight: i + 1 == labels.length ? 24 : 0,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 18,
                }}>
                <View>
                  <Ionicons
                    name={v.icon}
                    size={24}
                    color={'white'}
                    style={{padding: 12}}
                  />
                </View>
                {/* <HSpacer /> */}
                <View style={{flex: 1}}>
                  <AppTypographySubHeading
                    style={{color: 'white', fontWeight: '500', fontSize: 18}}>
                    {v.label}
                  </AppTypographySubHeading>
                  <AppTypographySubHeading
                    style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
                    {v.value}
                  </AppTypographySubHeading>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  