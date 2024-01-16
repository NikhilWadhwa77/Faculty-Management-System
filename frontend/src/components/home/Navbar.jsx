import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'


const Navbar = () => {

    const navigate = useNavigate()
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const [isLoggedin, setIsLoggedin] = useState(false)

    const logout = () => {
        removeCookie('token')
        setIsLoggedin(false)
        navigate('/')
    }

    useEffect(() => {
        if (cookies.token) {
            setIsLoggedin(true)
        }
    }, [setIsLoggedin, cookies])

    return (
        <>
            {/* fixed-top */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 button-link" to="/">FACULTY<span className="manager">MANAGER</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            {isLoggedin &&
                                <>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link" to="/dashboard">DashBoard</Link>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link" to="/faculties">My Faculties</Link>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link" to="/timetable">Time Table</Link>
                                    </li>
                                </>
                            }
                            {/* <li className="nav-item ms-3">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                        </ul>
                        {/* <button className="me-3 btn btn-outline-warning">
                            <Link className='button-link' to="/login">Log In</Link>
                        </button> */}
                        {!isLoggedin &&
                            <button className="me-5 btn btn-warning ">
                                <Link className='button-link' to="/register">Register</Link>
                            </button>
                        }
                        {isLoggedin &&
                            <button className="me-5 btn btn-warning" onClick={logout}>
                                Log Out
                            </button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
