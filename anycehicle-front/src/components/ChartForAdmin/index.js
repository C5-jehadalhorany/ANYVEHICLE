import React from "react";
import axios from "axios";
import "./style.css";
import { setmaintenance, updatemaintenance } from "../../redux/reducers/Maintenance"
import { login, role } from "../../redux/reducers/auth/index"
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setchartAction, reducechartAction } from "../../redux/reducers/chart"




export const Charts = () => {


  const [accepteds, setAccepted] = useState([]);
  const [dismisseds, setDismissed] = useState([]);
  const [pindenings, setPindening] = useState([]);

  const { token, maintenance, roles, isLoggedIn, chart } = useSelector((state) => {
    return {
      token: state.auth.token,
      maintenance: state.maintenance.maintenance,
      roles: state.auth.roles,
      isLoggedIn: state.auth.isLoggedIn,
      chart: state.chart.chart

    };
  });



  const dispatch = useDispatch();


  const getAllmainten = () => {
    axios.get(`http://localhost:5000/mainten`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((result) => {
        dispatch(setmaintenance(result.data.result))

        let accepted = result.data.result.filter((ele, index) => {
          return ele.req_status == "accepted"
        })
        setAccepted(accepted.length)

        let dismissed = result.data.result.filter((ele, index) => {
          return ele.req_status == "dismissed"
        })
        setDismissed(dismissed.length)

        let pindening = result.data.result.filter((ele, index) => {
          return ele.req_status == "pindening"
        })
        setPindening(pindening.length)

        dispatch(setchartAction([accepted.length, dismissed.length, pindening.length]))

      }).catch((err) => {
        console.log(err);
      });
  };


  


  let y = [chart[0], chart[1], chart[2]]
  const x = ["accepted", "dismissed", "pindening"]

  const [userData, setUserData] = useState({
    labels: x.map((data) => data),
    datasets: [
      {
        label: "req",
        data: y
        ,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  console.log(y);
  useEffect(() => {
    getAllmainten()
  }, []);

  return (<div className="all-the-chart">

    <Bar data={userData} />
  </div>
  );
};
