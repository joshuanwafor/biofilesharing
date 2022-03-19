import React from 'react';
import {TextInputProps, View} from 'react-native';
import Template from '../../templates/standardPage';
import {VSpacer} from '../../../ui/atoms/shacer';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../atoms/buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Button, ScrollView, TextArea, VStack} from 'native-base';

const Screen: React.FC = () => {
  const divider = (
    <View style={{height: 1, backgroundColor: 'rgba(200,200,200,.5)'}} />
  );

  return (
    <Template
      title="Create Space"
      show_back
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Publish
        </Button>
      }>
      <ScrollView>
        <VStack style={{padding: 24}}>
          <Box
            style={{aspectRatio: 1 / 1, borderStyle: 'dashed', width: '60%'}}
            borderWidth={1}
            rounded="lg"
            mb="16px">
            <VStack h="100%" w="100%">
              <Box w="md" p="12px">
                <Ionicons name="image-outline" size={24} />
              </Box>
            </VStack>
          </Box>

          <AppInputDefault label="Name your Space" />

          <VSpacer />
          <AppInputDefault label="Price" keyboardType="number-pad" />
          <VSpacer />
          <TextArea
            bg="gray.100"
            placeholder="Describe Space here"
            borderColor={'red.100'}
            _focus={{borderColor: 'rose.900', borderWidth: 0}}
            _hover={{borderColor: 'rose.900'}}
            style={{borderColor: 'red', borderWidth: 0, fontSize: 16}}
            fontSize="16px"
            variant="unstyled"
          />
        </VStack>
      </ScrollView>
    </Template>
  );
};
export default Screen;
