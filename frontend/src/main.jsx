import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Homescreens from './screens/homescreens.jsx';
import LoginScreen from './screens/loginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import ProfileScreen from './screens/profileScreen.jsx';
import PrivateRoute from './components/privateRoute.jsx';
import AdminLogin from './adminScreens/adminLogin.jsx';
import AdminHome from './adminScreens/adminHome.jsx';


const router=createBrowserRouter(createRoutesFromElements(
  
  <Route path='/' element={<App/>}> 
 
  <Route index={true}path='/' element={<Homescreens/>}/>
  <Route path='/login' element={<LoginScreen/>}/>
  <Route path='/register' element={<RegisterScreen/>}/>
  <Route path='/admin' element={<AdminLogin/>}/>
  <Route path='/adminhome' element={<AdminHome/>}/>

      {/* private Routes */}
  <Route path='' element={<PrivateRoute/>}>
  <Route path='/profile' element={<ProfileScreen/>}/>
  </Route>
  

  </Route>
))




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <React.StrictMode>
  <RouterProvider router={router}  />   
  </React.StrictMode>

  </Provider>
)
