import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoList = ({ todos, deleteTodos }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="blue" p={4} m={4} borderRadius="full">
        Welcome Add A New Todo
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="3px"
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      p={4}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            onClick={() => deleteTodos(todo.id)}
            isRound={true}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
