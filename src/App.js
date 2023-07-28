import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import Home from './Componets/Home';
import Camisas from './Componets/Camisas';
import Vestidos from './Componets/Vestidos';
import Zapatos from './Componets/Zapatos';
import Faldas from './Componets/Faldas';
import Pantalones from './Componets/Pantalones';
import Carritocamisas from './Componets/Carritocamisas';
import Carritozapatos from './Componets/Carritozapatos';
import Carritofaldas from './Componets/Carritofaldas';
import Carritovestidos from './Componets/Carritovestidos';
import CarritoPantalones from './Componets/CarritoPantalones';
import {Context2Provider} from './Contexts/Context2';
import Usuario from './Componets/Usuario';
import './App.css';
import Navbar from './Componets/Navbar';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Navbar/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Home/>
        }]
    },
    {
      path:'/Camisas',
      element:<Navbar/>,
      errorElement:<Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Camisas/>
        },
        {
          path:'/Camisas:camisasId/Articulo',
          element:<Carritocamisas/>
        }
      ]
    },
    {
      path: '/Zapatos',
      element:<Navbar/>,
      errorElement:<Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Zapatos/>
        },
        {
          path:'/Zapatos:ZapatosId/Articulo',
          element:<Carritozapatos/>
        }
      ]
    },
    {
      path:'/Faldas',
      element:<Navbar/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Faldas/>
        },
        {
          path:'/Faldas:FaldasId/Articulo',
          element:<Carritofaldas/>
        }
      ]
    },
    {
      path:'/Vestidos',
      element:<Navbar/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Vestidos/>
        },
        {
          path:'/Vestidos:VestidosId/Articulo',
          element:<Carritovestidos/>
        }
      ]
    },
    {
      path:'/Pantalones',
      element:<Navbar/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Pantalones/>
        },
        {
          path:'/Pantalones:PantalonesId/Articulo',
          element:<CarritoPantalones/>
        }
      ]
    }
  ])
  return (
    <Context2Provider>
    <RouterProvider router={router}/>
    </Context2Provider>
  )
}

export default App
