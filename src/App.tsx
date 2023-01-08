import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './components/Login'
import { Home } from './containers/Home'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const App = () => {
   return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='/*' element={<Home />}></Route>
      </Routes>
    </GoogleOAuthProvider>
   )
 }
 