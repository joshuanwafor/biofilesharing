import React from 'react';
import {ScrollView, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {AppTypography, AppTypographyCaption} from '../atoms/typography';
import Octicons from 'react-native-vector-icons/Octicons';
import {HSpacer, VSpacer} from '../atoms/shacer';
import {getAppColors, theme} from '../../style/theme';
import Template from '../templates/standardPage';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getBuildNumber, getDeviceName} from 'react-native-device-info';
import {Box, Button, useTheme} from 'native-base';

const ActionArea: React.FC<{
  label: string;
  action: () => void;
  icon?: string;
}> = ({label, icon, action}) => {
  const theme = useTheme();
  return (
    <Ripple
      onPress={action}
      style={{
        paddingVertical: 20,
        display: 'flex',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'white',
        marginBottom: 12,
        borderRadius: 4,
      }}>
      <Box
        w={'32px'}
        h={'32px'}
        alignItems={'center'}
        justifyContent="center"
        rounded="md">
        <Octicons
          name={icon ?? 'notifications-outline'}
          size={20}
          color={theme.colors.rose[900]}
        />
      </Box>
      <HSpacer />
      <View style={{flex: 1, paddingRight: 12}}>
        <AppTypography style={{color: getAppColors.charcoalGrey, flex: 1}}>
          {label}
        </AppTypography>
        <AppTypographyCaption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          maiores error a
        </AppTypographyCaption>
      </View>
      <Octicons name="chevron-right" size={16} />
    </Ripple>
  );
};

const Screen: React.FC<{}> = () => {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  const [deviceName, setDeviceName] = React.useState('');
  React.useLayoutEffect(() => {
    getDeviceName().then(name => {
      setDeviceName(name);
    });
  }, []);

  const theme = useTheme();
  return (
    <Template title="Settings">
      <ScrollView
        style={{
          backgroundColor: theme.colors.gray[100],
          padding: 12,
          paddingBottom: 24,
        }}>
        <AppTypography style={{color: 'gray', paddingVertical: 12}}>
          Primary
        </AppTypography>
        <ActionArea
          label={'Account'}
          action={() => {
            navigation.navigate('account');
          }}
          icon="person"
        />
        <ActionArea
          label={'Bank Account'}
          action={() => {
            navigation.navigate('bankAccount');
          }}
          icon="credit-card"
        />
        <ActionArea
          label={'My Courses'}
          action={() => {
            navigation.navigate('bankAccount');
          }}
          icon="ruby"
        />

        <ActionArea label={'Notifications'} action={() => {}} icon="bell" />
        <AppTypography style={{color: 'gray', paddingVertical: 12}}>
          More
        </AppTypography>

        <ActionArea label={'About'} action={() => {}} icon="briefcase" />
        <ActionArea
          label={'Help & Support'}
          action={() => {}}
          icon="question"
        />
        <ActionArea label={'Legal'} action={() => {}} icon="law" />
        <ActionArea label={'Share'} action={() => {}} icon="link" />
        <VSpacer />

        <View>
          <AppTypography
            style={{
              textAlign: 'center',
            }}>{`Version: ${getBuildNumber()}`}</AppTypography>
          <AppTypography
            style={{
              textAlign: 'center',
            }}>{`Device name: ${deviceName}`}</AppTypography>
        </View>
        <VSpacer />
        <View
          style={{
            flex: 1,
            width: '100%',
            height: 42,
            paddingHorizontal: 0,
          }}>
          <Button
            size={'lg'}
            rounded="full"
            variant={'subtle'}
            colorScheme="rose">
            Logout
          </Button>
        </View>
        <VSpacer />
        <VSpacer />
        <VSpacer />
      </ScrollView>
    </Template>
  );
};

export default Screen;
