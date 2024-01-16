import FeaturesCard from "./FeaturesCard"

const Features = () => {
    return (
        <>
            <div className="text-center features-conatiner">
                <h5 className="mb-2">Features</h5>
                <h1 className="mb-3">Manage Your Faculties with Ease</h1>
                <p>Discover the powerful features that our faculty management system offers</p>
                <div className="container-fluid all-features">
                    <div className="row">
                        <div className="col">
                            <FeaturesCard
                                head="Faculty Management"
                                desc="Efficiently manage all faculty members in one place"
                            />
                        </div>
                        <div className="col">
                            <FeaturesCard
                                head="Course Assignments"
                                desc="Assign courses to faculty members with ease"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <FeaturesCard
                                head="Timetable Management"
                                desc="Create and manage timetables for faculty schedules"
                            />
                        </div>
                        <div className="col">
                            <FeaturesCard
                                head="Leave Management"
                                desc="Streamline the process of managing faculty leaves"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Features
