import { createUserCommand } from '../commands/user/CreateUserCommand'
import { readUserByIdCommand } from '../commands/user/ReadUserByIdCommand'
import { updateUserByIdCommand } from '../commands/user/UpdateUserByIdCommand'
import { deleteUserByIdCommand } from '../commands/user/DeleteUserByIdCommand'

const sanitizationChecksOfInputs = (values) => {
  if(values.id) {
    console.log(values.id)
  }
  if (values.email) {
    console.log(values.email)
  }
  if (values.forename) {
    console.log(values.forename)
  }
  if (values.surname) {
    console.log(values.surname)
  }
  return values
}

export const createNewUser = (payload) => createUserCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    return e
  })

export const readUserById = (payload) => readUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    return e
  })

export const updateUserById = (payload) => updateUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    return e
  })


export const deleteUserById = (payload) => deleteUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    return e
  })
