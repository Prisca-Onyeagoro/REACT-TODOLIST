import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import Addtodo from './components/Addtodo';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

// import Home from './Routes/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddProduct from './components/AddProduct';

function App() {
  const Currentodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ];
  const [todos, setTodos] = useState(Currentodos);
  function deleteTodos(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
      ></IconButton>
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo list Application
      </Heading>
      <TodoList todos={todos} deleteTodos={deleteTodos} />
      <Addtodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
