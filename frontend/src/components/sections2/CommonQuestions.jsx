import './cQues.css'

const CommonQuestions = () => {
    return (
        <>

            <div className="container-fluid questions-container">
                <h1 className='mb-5'>
                    Commonly Asked Questions
                </h1>
                <div className="row pt-3">
                    <div className="col-2">
                        <div className="questions-title">
                            <h4>Here are some of the most common questions that we get.</h4>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="qanda-list">
                            <ul type="none">
                                <li className="question">
                                    How can I add a new faculty member?
                                </li>
                                <li className="answer">
                                    To add a new faculty member, go to the Faculty Management section and click on the Add Faculty button. Fill in the required information and click `Save` to add the faculty member.
                                </li>
                                <li className="question">
                                    How can I update the contact details of a faculty member?
                                </li>
                                <li className="answer">
                                    To update the contact details of a faculty member, navigate to the Faculty Management section and search for the specific faculty member. Click on the Edit button next to their name, update the contact details, and click Save to apply the changes.
                                </li>
                                <li className="question">
                                    How can I remove a faculty member from the system?
                                </li>
                                <li className="answer">
                                    To remove a faculty member from the system, go to the Faculty Management section and search for the specific faculty member. Click on the Delete button next to their name and confirm the deletion when prompted.
                                </li>
                                <li className="question">
                                    Is it possible to view the teaching schedule of a faculty member?
                                </li>
                                <li className="answer">
                                    Yes, you can view the teaching schedule of a faculty member. Simply go to the Faculty Management section, search for the desired faculty member, and click on their name. The teaching schedule will be displayed along with other details.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CommonQuestions;