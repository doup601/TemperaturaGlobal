import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Graficos from './routes/Graficos/Graficos.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Login from './routes/Login/Login.jsx'
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import Sair from './routes/Sair/Sair.jsx'
import AdicionarGrafico from './routes/AdicionarGrafico/AdicionarGrafico.jsx'

const router=createBrowserRouter([{
  path:'/', element:<App/>,
  errorElement:<Error/>,
  
  children:[
    {path:'/',element:<Home/>},
    {path:'/graficos',element:<Graficos/>},
    {path:'/sobre',element:<Sobre/>},
    {path:'/login',element:<Login/>},
    {path:'/cadastro',element:<Cadastro/>},
    {path:'/sair',element:<Sair/>},
    {path:'/adicionar-grafico',element:<AdicionarGrafico/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
