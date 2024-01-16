import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/home/Navbar'
import Home from './components/Home'
import Register from './components/admin/Register'
// import Login from './components/admin/Login'
import TimeTable from './components/timetable/table'
import Dashboard from './components/adminsPanel/Dashboard'
import Faculties from './components/adminsPanel/Faculties'


function App() {

    return (
        <>
            <Navbar />
            <Routes >
                <Route path='/' element={<Home />}></Route>
                <Route path='/register' element={<Register />}></Route>
                {/* <Route path='/login' element={<Login />}></Route> */}
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/faculties' element={<Faculties />}></Route>
                <Route path='/timetable' element={<TimeTable />}></Route>
            </Routes>
        </>
    )
}

export default App
