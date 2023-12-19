import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './components/login/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />}></Route>
          </Route>
          <Route path='user'></Route>
          <Route path=''></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App