import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addmaintenance } from "../../redux/reducers/Maintenance"
import("./style.css");


const Maintenance = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [cartype, setCartype] = useState("");
    const [carmodel, setCarmodel] = useState("");
    const [note, setNote] = useState("");
    const [ruinedparts, setruinedparts] = useState("");

    const maintenanceing = () => {
        axios.post("http://localhost:5000/mainten/create", {
            cartype,
            carmodel,
            note,
            ruinedparts
        }).then((result) => {
            console.log(result);
            dispatch(addmaintenance(result.data))
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        maintenanceing()
    }, [])
    
    return 

}
export default Maintenance;