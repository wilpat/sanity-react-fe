import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { client } from '../client'
import { User } from '../utils/interfaces'

export const Login = () => {
  const navigate = useNavigate()

  const createOrGetUser = (response: any) => {
    const decoded:  { name: string, picture: string, sub: string, email: string } = jwt_decode(response.credential)
 

    const { name, picture, sub, email } = decoded
    const user: User = {
      _id: sub,
      _type: 'user',
      userName: name,
      email,
      image: picture
    }

    client.createIfNotExists(user).then(() => {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/', { replace: true })
    })
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <video
        src={shareVideo}
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
      />
      <div className='absolute  flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
        <div className='p-5'>
          <img src={logo} alt="logo" height="130px" />
        </div>
        <div className='shadow-2xl'>
          <GoogleLogin
            onSuccess={credentialResponse => createOrGetUser(credentialResponse)}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>

      </div>
    </div>
  )
}
