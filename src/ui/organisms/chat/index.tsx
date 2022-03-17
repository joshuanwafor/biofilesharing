import {AppTypographyBody1} from '../../atoms/typography';
import styles from '@mapbox/mapbox-sdk/services/styles';
import {observer} from 'mobx-react';
import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PubNubChatStore} from '../../../store/pubnub-chat';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HSpacer} from '../../atoms/shacer';
export const ChatScreen: React.FC = observer(() => {
  let [message, updateMessage] = React.useState('');
  let {messages, sendMessage, init} = PubNubChatStore;

  React.useEffect(() => {
    init();
  }, []);
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={Platform.select({
          ios: 78,
          android: 0,
        })}
        style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 1, padding: 12}}>
            {messages.map((message, i) => (
              <View key={i}>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: 'ghostwhite',
                    borderRadius: 10,
                    marginVertical: 12,
                    width: '75%',
                    alignSelf: i % 2 == 0 ? 'flex-end' : 'flex-start',
                    elevation: 1,
                  }}>
                  <View>
                    <AppTypographyBody1 style={{fontWeight: 'bold'}}>
                      Author
                    </AppTypographyBody1>
                  </View>
                  <AppTypographyBody1 style={{color: 'black'}}>
                    {message.content}
                  </AppTypographyBody1>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            elevation: 10,
            backgroundColor: 'white',
            borderTopWidth: 0.5,
            borderColor: 'rgba(200,200,200,.5)',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}>
          <TextInput
            //    style={styles.textInput}
            style={{
              flex: 1,
              backgroundColor: 'rgba(200,200,200,.3)',
              borderRadius: 30,
              paddingHorizontal: 12,
            }}
            multiline
            value={message}
            onChangeText={updateMessage}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Type your message here..."
          />
          <HSpacer />
          <Ionicons
            name="send-outline"
            color={'black'}
            size={18}
            style={{padding: 12}}
            onPress={() => {
              sendMessage(message);
              console.log(message);
              updateMessage('');
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
});
