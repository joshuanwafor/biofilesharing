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

  async function pickImage() {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets != undefined) {
        if (result.assets.length >= 1) {
          let nlist = [...files, result.assets[0]];
          setFiles(nlist);
        }
      }
    } catch (error) {}
  }

  function removeImage(index: number) {
    let nlist = files.filter((v, index) => index !== index);
    setFiles(nlist);
  }

  const MediaAttachment = (
    <HStack alignItems={'center'}>
      <Box flex={1} minH={'50px'}>
        <FlatList
          horizontal
          data={files}
          renderItem={v => {
            return (
              <Box
                marginLeft={'12px'}
                style={{aspectRatio: 1 / 1, width: 80}}
                bg="red.400"
                overflow={'hidden'}
                rounded={'md'}>
                <FastImage
                  style={{height: '100%', width: '100%'}}
                  source={{uri: v.item.uri}}
                />
                <Button
                  top={'8px'}
                  right={'8px'}
                  size={'6'}
                  style={{position: 'absolute'}}
                  variant={'ghost'}
                  bg="white"
                  rounded={'full'}
                  onPress={async () => {
                    removeImage(v.index);
                  }}>
                  <Ionicons name="close-outline" size={11} color="black" />
                </Button>
              </Box>
            );
          }}
        />
      </Box>
      <VStack
        style={{position: 'absolute', height: '100%', right: 0}}
        alignContent={'center'}
        justifyContent={'center'}>
        <Button
          variant={'ghost'}
          bg="white"
          rounded={'full'}
          shadow={1}
          onPress={pickImage}>
          <Ionicons name="images-outline" size={20} />
        </Button>
      </VStack>
    </HStack>
  );
  return (
    <Template
      title="New resource"
      show_back
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          onPress={() => {
            spaceRoomManager
              .publishResource(body ?? 'My body goes here', files, space.id)
              .then(() => {
                navigation.goBack();
              });
          }}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Publish
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
      <Box
        w="100%"
        mb={'12px'}
        borderTopWidth={1}
        borderColor="gray.300"
        pt="12px">
        {MediaAttachment}
      </Box>
    </Template>
  );
};

export default observer(Screen);