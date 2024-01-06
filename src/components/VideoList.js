// VideoList.jsx
import React from 'react';
import VideoItem from './VideoItem';
import { VStack, Text } from '@chakra-ui/react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <VStack spacing={4} align="flex-start" w="100%">
      <Text fontWeight="bold" fontSize="lg" mb={2}>Recommended Videos</Text>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      ))}
    </VStack>
  );
};

export default VideoList;