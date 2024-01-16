import { useState } from "react";

const FacultyCard = (props) => {

    const [confirmEmail, setConfirmEmaill] = useState('')


    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await fetch('deleteFaculty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ confirmEmail })
        })

        const data = await res.json()

        if (res.status !== 200 || !data) {
            window.alert("Failed to DELETE")
            console.log("FAILED to DELETE")
        } else {
            window.alert("SUCCESSFULLY DELETED")
            console.log("SUCCESSFULLY DELETED")
            setConfirmEmaill('')
        }
    }

    return (
        <>
            <tr>
                <td className="col table-data">{props.name}</td>
                <td className="col table-data">{props.email}</td>
                <td className="col table-data">{props.branch}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-outline-danger me-2" data-bs-toggle="modal" data-bs-target="#deleteFaculty">
                        Delete
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-info" >
                        Update
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="deleteFaculty" tabIndex="-1" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" >Confirm</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Enter email to confirm deletion
                                    <form>
                                        <input type="text" name="email" placeholder="Email" value={confirmEmail} onChange={e => setConfirmEmaill(e.target.value)} />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-danger" onClick={handleDelete}>Delete</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

        </>

    )
}

export default FacultyCard
