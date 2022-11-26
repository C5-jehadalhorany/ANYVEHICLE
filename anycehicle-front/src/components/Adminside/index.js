import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setmaintenance, updatemaintenance } from "../../redux/reducers/Maintenance"
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from "react-bootstrap";
import("./style.css")


const AdminSide = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const [id, setId] = useState("");
    const dispatch = useDispatch();

    const { token, maintenance } = useSelector((state) => {
        return {
            token: state.auth.token,
            maintenance: state.maintenance.maintenance
        };
    });

    const adminforcontoler = () => {
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

    const onSubmit = (data) => {
        let req_status = data.req_status
        updatmaintenanceingforadmin({ req_status: req_status })
    };

    const updatmaintenanceingforadmin = (data) => {
        axios.put(`http://localhost:5000/mainten/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((result) => {
            console.log(result);
            dispatch(updatemaintenance(id))
            adminforcontoler()
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        return adminforcontoler()
    }, [])

    return (<>
        <div className="adminSide">
            {maintenance && maintenance.map((ele, index) => {
                return (<div key={ele.index}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>carmodel</th>
                                <th>cartype</th>
                                <th>ruinedparts</th>
                                <th>note</th>
                                <th>req_status</th>
                                <th>Select req_status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ele.carmodel}</td>
                                <td>{ele.cartype}</td>
                                <td>{ele.ruinedparts}</td>
                                <td>{ele.note}</td>
                                <td>{ele.req_status}</td>
                                <td>    <form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-6" controlId="req_status">
                                        {/* <Form.Label>Select req_status</Form.Label> */}
                                        <Form.Check className="mb-7"
                                            type="radio"
                                            label="accepted"
                                            value="accepted"
                                            {...register("req_status", {
                                                required: "Please select your req_status"
                                            })}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="dismissed"
                                            value="dismissed"
                                            {...register("req_status")}
                                        />
                                    </Form.Group>
                                    <label></label>
                                    <div onClick={() => setId(ele.id)}>
                                        <Button className="buttonlogin4" type="submit" >
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            })}
        </div>
    </>)
}

export default AdminSide