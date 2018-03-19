import { createUserCommand } from '../commands/user/CreateUserCommand'
import { readUserByIdCommand } from '../commands/user/ReadUserByIdCommand'
import { updateUserByIdCommand } from '../commands/user/UpdateUserByIdCommand'
import { deleteUserByIdCommand } from '../commands/user/DeleteUserByIdCommand'

const sanitizationChecksOfInputs = (values) => {
  if(values.id) {
    const re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    const validId = re.test(String(values.id))
    if (!validId) {
      return null
    }
  }
  if (values.email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = re.test(String(values.email).toLowerCase())
    if (!validEmail) {
      return null
    }
  }
  if (values.forename) {
    const re = /[a-zA-Z ]/
    const validForename = re.test(String(values.forename).toLowerCase())
    if (!validForename) {
      return null
    }
  }
  if (values.surname) {
    const re = /[a-zA-Z \']/
    const validSurname = re.test(String(values.surname).toLowerCase())
    if (!validSurname) {
      return null
    }
  }
  return values
}

export const createNewUser = (payload) => createUserCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    throw e
  })

export const readUserById = (payload) => readUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    throw e
  })

export const updateUserById = (payload) => updateUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    throw e
  })


export const deleteUserById = (payload) => deleteUserByIdCommand(sanitizationChecksOfInputs(payload))
  .then((result) => {
    return result
  })
  .catch(e => {
    throw e
  })
