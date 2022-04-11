import {Box, Button, HStack} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ExploreFilter = () => {
  return (
    <Box>
      <HStack p="12px" space={'12px'}>
        <Button
          bg="gray.200"
          rounded={'lg'}
          rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
          colorScheme="rose">
          Free
        </Button>
        <Button
          bg="gray.200"
          rounded={'lg'}
          rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
          colorScheme="rose">
          Recent
        </Button>
        <Button
          bg="gray.200"
          rounded={'lg'}
          rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
          colorScheme="rose">
          Topic
        </Button>
      </HStack>
    </Box>
  );
};
