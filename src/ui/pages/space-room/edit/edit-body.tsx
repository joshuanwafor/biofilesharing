import React from 'react';
import {StyleSheet, View} from 'react-native';
import Template from '../../../templates/standardPage';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  Avatar,
  Box,
  Button,
  FlatList,
  HStack,
  Input,
  VStack,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary, Asset} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {CloudinaryuploadRoomImages} from '../../../../services/cloudinary';
import {observer} from 'mobx-react';
import {spaceRoomManager} from '../../../../store/room';
import {MainAppNavigationRoutes} from '../../../../interface/navigation';

const Screen: React.FC = () => {
  let [body, setBody] = React.useState<string>();
  let [files, setFiles] = React.useState<Asset[]>([]);

  const {
    params: {space},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'newResource'>>();

  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template
      title="Update Note"
      show_back
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          onPress={() => {
            spaceRoomManager
              .updateResource(body ?? 'My body goes here', 'files', space.id)
              .then(() => {
                navigation.goBack();
              });
          }}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Update
        </Button>
      }>
      <Box flex={1}>
        <HStack p="12px">
          <Avatar size={10} />
          <Input
            flex={1}
            fontSize={16}
            fontFamily="AvenirNext-Medium"
            placeholder="What do you have on your mind?!!!"
            outline={'none'}
            borderWidth={0}
            multiline
            value={body}
            onChangeText={text => {
              setBody(text);
            }}
          />
        </HStack>
      </Box>
    </Template>
  );
};

export default observer(Screen);
