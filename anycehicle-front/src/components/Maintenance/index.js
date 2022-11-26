import React, {  useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addmaintenance } from "../../redux/reducers/Maintenance"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import("./style.css");

const Maintenance = () => {
    const dispatch = useDispatch();

    const { token } = useSelector((state) => {
        return { token: state.auth.token };
    });

    const [cartype, setCartype] = useState("");
    const [carmodel, setCarmodel] = useState("");
    const [note, setNote] = useState("");
    const [ruinedparts, setRuinedparts] = useState("");
    const [test, Settest] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        let cartype = data.cartype
        let carmodel = data.carmodel
        let note = data.note
        let ruinedparts = data.ruinedparts.join(",")
        maintenanceing({ cartype: cartype, carmodel: carmodel, note: note, ruinedparts: ruinedparts })
    };

    const maintenanceing = (data) => {
        console.log(test);
        axios.post("http://localhost:5000/mainten/create",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((result) => {
                dispatch(addmaintenance(data))
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* cartype */}
                <Form.Group className="mb-3" controlId="cartype">
                    <Form.Label>Select cartype</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Oil"
                        value="oil"
                        {...register("cartype", {
                            required: "Please select your cartype"
                        })}
                    />
                    <Form.Check
                        type="radio"
                        label="hyprid"
                        value="hyprid"
                        {...register("cartype")}
                    />
                    <Form.Check
                        type="radio"
                        label="dizeel"
                        value="dizeel"
                        {...register("cartype")}
                    />
                    {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
                </Form.Group>

                {/* carmodel */}
                <Form.Group className="mb-3" controlId="carmodel">
                    <Form.Label>Select carmodel</Form.Label>
                    <Form.Check
                        type="radio"
                        label="toyta"
                        value="toyta"
                        {...register("carmodel", {
                            required: "Please select your carmodel"
                        })}
                    />
                    <Form.Check
                        type="radio"
                        label="bmw"
                        value="bmw"
                        {...register("carmodel")}
                    />
                    <Form.Check
                        type="radio"
                        label="mazda"
                        value="mazda"
                        {...register("carmodel")}
                    />
                    {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
                </Form.Group>

                {/* ruinedparts */}
                <Form.Group className="mb-3" controlId="ruinedparts">
                    <Form.Label>Select Your ruinedparts</Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="gier"
                        value="gier"
                        {...register("ruinedparts", {
                            required: "Please select at-least one ruinedparts"
                        })}
                    />
                    <Form.Check
                        type="checkbox"
                        label="well"
                        value="well"
                        {...register("ruinedparts")}
                    />
                    <Form.Check
                        type="checkbox"
                        label="sterng"
                        value="sterng"
                        {...register("ruinedparts")}
                    />
                    <Form.Check
                        type="checkbox"
                        label="ligth"
                        value="ligth"
                        {...register("ruinedparts")}
                    />
                    {errors.ruinedparts && <p className="errorMsg">{errors.ruinedparts.message}</p>}
                </Form.Group>

                {/* note */}
                <Form.Group className="mb-3" controlId="note">
                    <Form.Label>note</Form.Label>
                    <Form.Control as="textarea"
                        type="text"
                        placeholder="note"
                        {...register("note", {
                            pattern: {
                                value: "note",
                            }
                        })}
                    />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                </Form.Group>

                <label></label>
                <Button className="buttonlogin3" type="submit" >
                    Submit
                </Button>
            </form>
        </div>
    );

}
export default Maintenance;