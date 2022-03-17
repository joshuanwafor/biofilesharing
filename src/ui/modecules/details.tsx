import { AppTypographyBody1 } from "../atoms/typography";
import React from "react";
import { View } from "react-native";

export function AppDetailsKeyValuePair({
    label,
    value,
  }: {
    label: string;
    value?: React.ReactNode;
  }) {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
          }}>
          <AppTypographyBody1>{label}</AppTypographyBody1>
          {value}
        </View>
      </React.Fragment>
    );
  }