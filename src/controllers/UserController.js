import { createNewUser, readUserById, loginUser, logoutUser, getUserProfile, updateUserProfile } from '../service.objects/UserServiceObject'

export const createUser = async (req, res) => await createNewUser(req.body)
  .then(result => {
    res.json(result)
  })
  .catch(e => {
    res.json(e.toString())
  })

export const readUser = async (req, res) => await readUserById(req.body)
  .then((result) => {
    res.json(result)
  })
  .catch(e => {
    res.json(e.toString())
  })

export const updateUser = async (req, res) => await updateUserById(req.body)
  .then((result) => {
    res.json(result)
  })
  .catch(e => {
    res.json(e.toString())
  })

export const deleteUser = async (req, res) => await deleteUserById(req.body)
  .then((result) => {
    res.json(result)
  })
  .catch(e => {
    res.json(e.toString())
  })
