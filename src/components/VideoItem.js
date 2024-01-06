// VideoItem.jsx
import React from 'react';
import { Box, HStack, Image, VStack, Text } from '@chakra-ui/react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Box
      onClick={() => onVideoSelect(video)}
      cursor="pointer"
      _hover={{ bg: 'gray.100' }}
      p={2}
      borderRadius="md"
      boxShadow="md"
      w="100%"
    >
      <HStack spacing={4}>
        <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} boxSize="100px" objectFit="cover" borderRadius="md" />
        <VStack align="flex-start" w="100%">
          <Text fontWeight="bold">{video.snippet.title}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default VideoItem;