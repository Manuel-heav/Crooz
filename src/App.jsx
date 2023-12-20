
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignIn from "./_auth/forms/SignIn"
import Signup from "./_auth/forms/Signup"
import Home from './_root/pages/Home'
import RootLayout from './_root/RootLayout'
import OverallLayout from './_admin/OverallLayout'
import Parents from './_admin/pages/Parents'
import Drivers from './_admin/pages/Drivers'

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

      <Route element={<OverallLayout />}>
        <Route element={<Parents />} path="/admin-parents-review"/>
        <Route element={<Drivers />} path="/admin-drivers-review"/>
      </Route>
    </Routes>
  )
}

export default App
