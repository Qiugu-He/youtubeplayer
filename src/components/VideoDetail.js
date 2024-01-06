import React from 'react';
import { ChakraProvider, Box, Text, AspectRatio } from '@chakra-ui/react';


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(video);
  return (
    <ChakraProvider>
      <Box maxW="800px" mx="auto" mt={8}>
        {/* Video Player Area */}
        <Box boxShadow="md">
          <AspectRatio ratio={16 / 9}>
            {/* You can replace the iframe with your own video player component */}
            <iframe
              title="Youtube Video Player"
              width="100%"
              height="100%"
              src={videoSrc}
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Box>

        {/* Video Details */}
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold">
          {video.snippet.title}
          </Text>
        </Box>

        {/* Video Description */}
        <Box mt={4}>
          <Text>
          {video.snippet.description}
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default VideoDetail;