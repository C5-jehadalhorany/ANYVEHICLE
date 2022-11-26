import React from "react";
import axios from "axios";
import "./style.css";
import { setmaintenance } from "../../redux/reducers/Maintenance"
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setchartAction } from "../../redux/reducers/chart"
import Chart from 'chart.js/auto';

export const Charts = () => {
  const { token, chart } = useSelector((state) => {
    return {
      token: state.auth.token,
      chart: state.chart.chart
    };
  });

  const dispatch = useDispatch();

  const getAllmainten = () => {
    axios.get(`http://localhost:5000/mainten`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((result) => {
      dispatch(setmaintenance(result.data.result))
      let accepted = result.data.result.filter((ele, index) => {
        return ele.req_status == "accepted"
      })
      let dismissed = result.data.result.filter((ele, index) => {
        return ele.req_status == "dismissed"
      })
      let pindening = result.data.result.filter((ele, index) => {
        return ele.req_status == "pindening"
      })
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
  
  useEffect(() => {
    getAllmainten()
  }, []);

  return (<div className="all-the-chart">
    <Bar data={userData} />
  </div>
  );
};

export default Charts