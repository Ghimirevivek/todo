import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editDone, update } from './store/TodoSlice'

export const EditItem = ({ value }) => {
  const [updatedTodo, setUpadatedTodo] = useState('')
  //   const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const updated = (val) => {
    dispatch(editDone(val))
    dispatch(update({ oldValue: val, newValue: updatedTodo }))
    setUpadatedTodo('')
  }
  return (
    <Flex justifyContent="space-between" w="100%">
      <Input
        w={{ base: '70%', sm: '50%' }}
        placeholder={value}
        color="white"
        // _placeholder={{ color: 'white' }}
        value={updatedTodo}
        onChange={(e) => setUpadatedTodo(e.target.value)}
      />
      <Button
        color="white"
        bg="green.500"
        h={8}
        onClick={() => updated(value)}
        mx={2}
      >
        Done
      </Button>
    </Flex>
  )
}
