import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Box, HStack, useTheme} from 'native-base';
import React from 'react';
import Template from '../../templates/space-room';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographyBody1} from '../../atoms/typography';
import ParsedText from 'react-native-parsed-text';
import {StyleSheet} from 'react-native';

let tab = createMaterialTopTabNavigator();

export default function () {
  let theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  function handleUrlPress(url: any, matchIndex: any) {
    //  LinkingIOS.openURL(url);
  }

  function handlePhonePress(phone: any, matchIndex: any) {
    // AlertIOS.alert(`${phone} has been pressed!`);
  }

  function handleNamePress(name: any, matchIndex: any) {
    //  AlertIOS.alert(`Hello ${name}`);
  }

  function handleEmailPress(email: any, matchIndex: any) {
    //AlertIOS.alert(`send email to ${email}`);
  }

  function renderText(matchingString: any, matches: any) {
    // matches => ["[@michel:5455345]", "@michel", "5455345"]
    let pattern = /\[(@[^:]+):([^\]]+)\]/i;
    let match = matchingString.match(pattern);
    return `^^${match[1]}^^`;
  }

  return (
    <Template
      title="View Resource"
      show_back={true}
      right_icons={
        <Box>
          <HStack space="2">
            <Ionicons
              name="document-attach-outline"
              size={24}
              onPress={() => {}}
              style={{
                padding: 8,
                backgroundColor: theme.colors.gray[100],
                borderRadius: 50,
                color: theme.colors.rose[900],
              }}
            />
          </HStack>
        </Box>
      }>
      <Box p="12px" bg="white">
        <ParsedText
          style={styles.text}
          parse={[
            {type: 'url', style: styles.url, onPress: handleUrlPress},
            {type: 'phone', style: styles.phone, onPress: handlePhonePress},
            {type: 'email', style: styles.email, onPress: handleEmailPress},
            {
              pattern: /Bob|David/,
              style: styles.name,
              onPress: handleNamePress,
            },
            {
              pattern: /\[(@[^:]+):([^\]]+)\]/i,
              style: styles.username,
              onPress: handleNamePress,
              renderText: renderText,
            },
            {pattern: /42/, style: styles.magicNumber},
            {pattern: /#(\w+)/, style: styles.hashTag},
          ]}
          childrenProps={{allowFontScaling: false}}>
          Hello this is an example of the ParsedText, links like
          http://www.google.com or http://www.facebook.com are clickable and
          phone number 444-555-6666 can call too. But you can also do more with
          this package, for example Bob will change style and David too.
          foo@gmail.com And the magic number is 42! #react #react-native
        </ParsedText>
        <AppTypographyBody1 style={{color: 'black', fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          earum commodi! Sit, sed. Eum praesentium porro maiores qui mollitia ad
          expedita ea amet odio nesciunt dolorum illum alias, consequuntur
          facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto, earum commodi! Sit, sed. Eum praesentium porro maiores qui
          mollitia ad expedita ea amet odio nesciunt dolorum illum alias,
          consequuntur facilis.
        </AppTypographyBody1>
        <AppTypographyBody1 style={{color: 'black', fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          earum commodi! Sit, sed. Eum praesentium porro maiores qui mollitia ad
          expedita ea amet odio nesciunt dolorum illum alias, consequuntur
          facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto, earum commodi! Sit, sed. Eum praesentium porro maiores qui
          mollitia ad expedita ea amet odio nesciunt dolorum illum alias,
          consequuntur facilis.
        </AppTypographyBody1>
        <AppTypographyBody1 style={{color: 'black', fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          earum commodi! Sit, sed. Eum praesentium porro maiores qui mollitia ad
          expedita ea amet odio nesciunt dolorum illum alias, consequuntur
          facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto, earum commodi! Sit, sed. Eum praesentium porro maiores qui
          mollitia ad expedita ea amet odio nesciunt dolorum illum alias,
          consequuntur facilis.
        </AppTypographyBody1>
      </Box>
    </Template>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
    fontFamily:'AvenirNext-Medium',
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold',
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },
});
