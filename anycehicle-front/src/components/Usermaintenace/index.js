import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setmaintenance } from "../../redux/reducers/Maintenance"
import {Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import("./style.css");




const Usermaintenaces = () => {

    const dispatch = useDispatch();
    const { token, maintenance } = useSelector((state) => {
        return {
            token: state.auth.token,
            maintenance: state.maintenance.maintenance
        };
    });



    const userrequset = () => {
        axios.get("http://localhost:5000/mainten", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((result) => {
            dispatch(setmaintenance(result.data.result))
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        userrequset()
    }, [])
    return (<>
        <div className="sercies">
            {maintenance && maintenance.map((ele, index) => {
                return (<div key={ele.index}>
                    <div>
                        <Table striped bordered hover variant="dark">
                            <thead >
                                <tr>
                                    <th>carmodel</th>
                                    <th>cartype</th>
                                    <th>ruinedparts</th>
                                    <th>note</th>
                                    <th>req_status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ele.carmodel}</td>
                                    <td>{ele.cartype}</td>
                                    <td>{ele.ruinedparts}</td>
                                    <td>{ele.note}</td>
                                    <td>{ele.req_status}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>)
            })}
        </div>


    </>)

}

export default Usermaintenaces


