import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Addtodo = (addTodo) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(content);
  }
  const [content, setContent] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Input here"
          value={content}
          onClick={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default Addtodo;
