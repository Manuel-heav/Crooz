
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignIn from "./_auth/forms/SignIn"
import Signup from "./_auth/forms/Signup"
import Home from './_root/pages/Home'
import RootLayout from './_root/RootLayout'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<SignIn />} path="/sign-up-as-a-parent"/>
        <Route element={<Signup />} path="/sign-up-as-a-driver"/>
      </Route>

      <Route element={<RootLayout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
