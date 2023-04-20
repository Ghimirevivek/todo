import { Button, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { EditItem } from './editItem'
import { editable } from './store/TodoSlice'
const Todoitem = ({ todoList, remove }) => {
  const dispatch = useDispatch()
  const edit = (val) => {
    dispatch(editable(val))
  }

  return (
    <>
      {todoList.map((list, index) => (
        <Box key={index} m={2}>
          <Flex
            align={'center'}
            justifyContent={'space-between'}
            px={4}
            py={2}
            bg="#332323"
            borderRadius={'md'}
          >
            {list.isEditable ? (
              <EditItem value={list.todo} />
            ) : (
              <Text
                color="white"
                fontSize={'1.5rem'}
                textDecoration={list.isCompleted && 'line-through'}
                textDecorationColor={list.isCompleted && 'white'}
                textDecorationThickness={list.isCompleted && '4px'}
              >
                {list.todo}
              </Text>
            )}
            <Flex>
              {!list.isEditable && (
                <>
                  <Button
                    color="white"
                    bg="#C25906"
                    h={8}
                    w={8}
                    onClick={() => edit(todoList[index].todo)}
                    mx={2}
                  >
                    &#9999;
                  </Button>
                  <Button
                    color="white"
                    bg="#C25906"
                    h={8}
                    onClick={() => remove(todoList[index].todo)}
                    mx={2}
                  >
                    X
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  )
}
export default Todoitem
