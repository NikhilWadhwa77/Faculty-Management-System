import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {

    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const token = cookies.token;
    const decoded = jwtDecode(token);

    return (
        <>
            <div className="welcome">
                <div className="user-icon">
                    <i className="fa-solid fa-user-tie"></i>
                </div>
                <h1>Welcome {decoded.name}</h1>
                <p>How are You today?</p>
            </div>
        </>
    )
}

export default Dashboard
