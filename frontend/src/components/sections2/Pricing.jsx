import './pricing.css'

const Pricing = () => {
    return (
        <>
            <div className='pricing-heading mt-5'>
                <h1 className='display-1'>Pricing</h1>
            </div>
            <div className="pricing-container">

                <div className="pricing-card">
                    <h2 className='mb-4'>Free Plan</h2>

                    <h4>Manage Faculties for </h4>

                    <h1 className='mb-4'>₹ 0/Month</h1>

                    <ul type="disc">
                        <li>Create and edit faculty profiles</li>
                        <li>View and manage faculty profiles</li>
                        <li>Assign courses and classes to faculties</li>
                    </ul>

                    <button className="btn btn-warning">Continue with Free</button>
                </div>




                <div className="pricing-card">
                    <h2 className='mb-4'>Basic Plan</h2>

                    <h4>Manage Faculties for </h4>

                    <h1 className='mb-4'>₹ 199/Month</h1>

                    <ul type="disc">
                        <li>All features of FREE plan</li>

                        <li>Automated scheduling of faculty assignments</li>
                        <li>Email notifications for faculty updates</li>
                    </ul>

                    <button className="btn btn-warning">Try the basic plan</button>
                </div>

                <div className="pricing-card">
                    <h2 className='mb-4'>Pro Plan</h2>

                    <h4>Manage Faculties for </h4>

                    <h1 className='mb-4'>₹ 499/month</h1>

                    <ul type="disc">
                        <li>All features of BASIC plan</li>
                        <li>Customizable faculty evaluation forms</li>
                        <li>Analytics and insights on faculty performance</li>
                    </ul>

                    <button className="btn btn-warning">Try the Pro plan</button>
                </div>
            </div>
        </>
    );
}
export default Pricing;