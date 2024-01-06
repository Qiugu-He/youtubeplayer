import React, { useState } from 'react';
import { ChakraProvider, FormControl, Input, Flex, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <ChakraProvider>
      <div align="center" justify="center" p={4} bg="white" boxShadow="md" style={{ width: '80%' }}>
        {/* Search Form */}
        <form onSubmit={onSubmit} style={{ width: '60%' }}>
            <Flex>
                <FormControl align="center">
                    <Input
                    align="center"
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Search videos..."
                    size="lg"
                    borderRadius="full"
                    py={2}
                    px={4}
                    onChange={(event) => setTerm(event.target.value)}
                    />
                    {/* Search Button */}
                    <IconButton
                        icon={<FaSearch />}
                        size="lg"
                        colorScheme="gray"
                        variant="outline"
                        borderRadius="full"
                        position="absolute"
                        right="1px"
                        top="50%"
                        transform="translateY(-50%)"
                    />
                </FormControl>
            </Flex>
        </form>
      </div>
    </ChakraProvider>
  );
};
export default SearchBar;