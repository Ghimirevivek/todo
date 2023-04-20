import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, completed } from './store/TodoSlice'
import Todoitem from './Todoitem'
function App() {
  const [todo, setTodo] = useState('')

  const dispatch = useDispatch()

  const todoS = useSelector((state) => state.TODO)
  // console.log(todoS)
  const addtodo = () => {
    dispatch(add(todo))
    setTodo('')
  }
  const removetodo = (item) => {
    dispatch(completed(item))
    setTimeout(() => {
      dispatch(remove(item))
    }, 500)
  }

  return (
    <>
      <Box m={10}>
        <Heading>Todo:-</Heading>
        <Flex align={'center'}>
          <Input
            w={'25rem'}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button m={4} onClick={addtodo}>
            Add todo
          </Button>
        </Flex>
        {todoS.length !== 0 ? (
          <Box border={'1px solid black'} borderRadius={'md'}>
            <Todoitem todoList={todoS} remove={removetodo} />
          </Box>
        ) : (
          <Text>Add items</Text>
        )}
      </Box>
    </>
  )
}

export default App
