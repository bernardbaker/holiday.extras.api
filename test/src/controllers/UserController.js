import { createNewUser, readUserById, updateUserById, deleteUserById } from '../service.objects/UserServiceObject'

export const createUser = async (req, res) => await createNewUser(req.body)
  .then(result => {
    res.json(result)
  })
  .catch(e => {
    res.status(e).end()
  })

export const readUser = async (req, res) => await readUserById(req.body)
  .then((result) => {
    res.json(result)
  })
  .catch(e => {
    res.status(e).end()
  })

export const updateUser = async (req, res) => await updateUserById(req.body)
  .then((result) => {
    res.json(result)
  })
  .catch(e => {
    res.status(e).end()
  })

export const deleteUser = async (req, res) => await deleteUserById(req.body)
  .then((result) => {
    res.status(result).end()
  })
  .catch(e => {
    res.status(e).end()
  })
