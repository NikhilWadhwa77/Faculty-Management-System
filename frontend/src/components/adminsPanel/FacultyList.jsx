import { useState, useEffect } from "react"
import FacultyCard from "./FacultyCard"
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import girlImage from '../../images/reshab.jpg'
// import './FacultyList.css'

const FacultyList = () => {

    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const token = cookies.token;
    const decoded = jwtDecode(token);

    const id = decoded._id

    const [list, setList] = useState([])

    const createFacultyCard = obj => {
        return <FacultyCard
            key={obj.email}
            name={obj.name}
            email={obj.email}
            branch={obj.branch}
        />
    }

    const loadFaculty = async () => {
        const res = await fetch('/getFaculty', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ id })
        })
        // console.log(res)
        const data = await res.json()
        console.log(data)
        setList(data)
    }

    useEffect(() => {
        loadFaculty();
    }, [])


    // add
    const [addData, setAddData] = useState({ name: '', email: '', branch: '', adminid: '' })

    const handleAddDataChange = (e) => {
        const { name, value } = e.target
        setAddData({
            ...addData,
            [name]: value
        })
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        addData.adminid = decoded._id
        const { name, email, branch, adminid } = addData

        const res = await fetch('/addFaculty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, branch, adminid })
        })

        const data = await res.json()

        if (res.status !== 200 || !data) {
            window.alert("Failed to ADD")
            console.log("FAILED to ADD")
        } else {
            window.alert("SUCCESSFULLY Added")
            console.log("SUCCESSFULLY Added")
            setAddData({ name: '', email: '', branch: '', adminid: '' })
            loadFaculty()
        }
    }

    return (
        <>

            {/* <!-- Button trigger modal Add faculty--> */}
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col nopadding">
                        <div className="faculty-list-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="h4 table-head">Name</th>
                                        <th className="h4 table-head">email</th>
                                        <th className="h4 table-head">Branch</th>
                                        <th className="h4 table-head">
                                            <button type="button" className="btn btn-sm btn-outline-success add-faculty-button" data-bs-toggle="modal" data-bs-target="#addFaculty">
                                                Add Faculty
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map(createFacultyCard)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-4 nopadding side-bg-image">
                        <img src={girlImage} alt="" />
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="addFaculty" tabIndex="-1" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" >Add Faculty</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="add-faculty-form">
                                <form method="post">
                                    <input type="text" placeholder="Name" value={addData.name} name="name" onChange={handleAddDataChange} /><br />
                                    <input type="text" placeholder="Email" value={addData.email} name="email" onChange={handleAddDataChange} /><br />
                                    <input type="text" placeholder="Branch" value={addData.branch} name="branch" onChange={handleAddDataChange} />
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={handleAddSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacultyList
