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
    path: '/gast',
    element: <Index/>
  },
  {
    path: '/gast/think_tank',
    element: <ThinkTank/>
  },
  {
    path: '/gast/science_policy',
    element: <SciencePolicy/>
  },
  {
    path: '/gast/popularization_of_science',
    element: <POS/>
  },
  {
    path: '/gast/popularization_of_science/:id',
    element: <POS_ID/>
  },
  {
    path: '/gast/intelligent_enterprise',
    element: <IntelligentEnterprise/>
  }
]

const router = createBrowserRouter(RouteConfig)

export default function Router() {
  return <RouterProvider router={router} />
}
