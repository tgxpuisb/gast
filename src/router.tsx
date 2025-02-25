import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom'
import Index from './pages/Index'
import ThinkTank from './pages/ThinkTank'
import POS from './pages/POS'
import POS_ID from './pages/POS_Id'
import IntelligentEnterprise from './pages/IntelligentEnterprise'
import SciencePolicy from './pages/Policy'

const RouteConfig: RouteObject[] = [
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/think_tank',
    element: <ThinkTank/>
  },
  {
    path: '/science_policy',
    element: <SciencePolicy/>
  },
  {
    path: '/popularization_of_science',
    element: <POS/>
  },
  {
    path: '/popularization_of_science/:id',
    element: <POS_ID/>
  },
  {
    path: '/intelligent_enterprise',
    element: <IntelligentEnterprise/>
  }
]

const router = createBrowserRouter(RouteConfig)

export default function Router() {
  return <RouterProvider router={router} />
}
