import express from 'express'
import {createUser, readUser, updateUser, deleteUser} from '../../controllers/UserController'

const router = express.Router()

router.post('/create', (req, res) => {
  createUser(req, res)
})

router.post('/read/:id', (req, res) => {
  readUser(req, res)
})

router.post('/update', (req, res) => {
  updateUser(req, res)
})

router.post('/delete', (req, res) => {
  deleteUser(req, res)
})

router.get('/', (req, res) => {
   res.json({message:'user routes'})
})

export default router