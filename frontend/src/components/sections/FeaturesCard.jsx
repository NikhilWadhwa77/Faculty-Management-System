/* eslint-disable react/prop-types */

const FeaturesCard = (props) => {
    return (
        <>
            <div className="features-card-container container-fluid mb-4">
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-font-awesome mt-2"></i>
                    </div>
                    <div className="col">
                        <h2>{props.head}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default FeaturesCard
