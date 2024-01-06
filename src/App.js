import React, { useState, useEffect } from 'react';
import SearchBar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';
import { ChakraProvider, Flex, Input, Box, VStack, HStack, Text } from '@chakra-ui/react';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('CUTEST Puppies');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <ChakraProvider>
       <Flex direction="column" align="center" p={4}>
          {/* Search Bar */}

          <SearchBar onFormSubmit={search} />

          <Flex width="100%" flexGrow={1}>

            {/* Video Details */}
            <Box flex="2" p={4}>
              <Box h="0" pb="56.25%" position="relative">
                <VideoDetail video={selectedVideo} />
              </Box>
            </Box>

            {/* Video List */}
            <Box flex="1" p={4} >
              <VStack spacing={4}>
                <HStack align="flex-start">
                  <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                </HStack>
              </VStack>
            </Box>
          </Flex>

          {/* Footer */}
          <Box mt={8}>
            <Text fontSize="sm" color="gray.500">
              © 2024 Qiugu He. Powered by React and Youtube API
            </Text>
          </Box>
      </Flex>
    </ChakraProvider>

  );
};

export default App;
