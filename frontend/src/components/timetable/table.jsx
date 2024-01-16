// import React from 'react';
import './table.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//Without props fix timetable

function TimeTable() {
    return (
        <>
            <div className="container mt-5">
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase"><u>Time</u><br></br>Day</th>
                                <th className="text-uppercase">09:00AM - 10:00AM</th>
                                <th className="text-uppercase">10:00AM - 11:00AM</th>
                                <th className="text-uppercase">11:00AM - 12:00PM</th>
                                <th className="text-uppercase">12:00PM - 01:00PM</th>
                                <th className="text-uppercase">01:00PM - 02:00PM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">Monday</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G1-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G2-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G3-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Tuesday</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G1-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G2-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G3-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Wednesday</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G1-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G2-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G3-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Thursday</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G1-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G2-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G3-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Friday</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G1-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G2-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">G3-ADI</span>

                                    <div className="font-size13 text-white">.</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Break</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TimeTable;