import UserRoutes from './User/UserRoutes'

const routes = (app) => {
  app.use('/user', UserRoutes)

  app.route('/')
    .get((req, res) => {
      res.json('api root')
    })
}

export default routes