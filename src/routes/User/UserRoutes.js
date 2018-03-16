import express from 'express'
import {createUser, readUser, updateUser, deleteUser} from '../../controllers/UserController'

const router = express.Router()

router.post('/create', (req, res) => {
  createUser(req, res)
})

router.post('/read', (req, res) => {
  readUser(req, res)
})

router.patch('/update', (req, res) => {
  updateUser(req, res)
})

router.delete('/delete', (req, res) => {
  deleteUser(req, res)
})

router.get('/', (req, res) => {
   res.json({message:'user routes'})
})

export default router