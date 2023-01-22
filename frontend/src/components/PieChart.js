import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {DATA} from '../graphData'

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {

  function findOcc(arr, key){
    let arr2 = [];
    arr.forEach((x)=>{

       if(arr2.some((val)=>{ return val[key] == x[key] })){
           
         arr2.forEach((k)=>{
           if(k[key] === x[key]){ 
             k["occurrence"]++
           }
        })
           
       }else{
         let a = {}
         a[key] = x[key]
         a["occurrence"] = 1
         arr2.push(a);
       }
    })
    return arr2
  }
  let occ = findOcc(DATA, "category_id")
  let labels = []
  let graphData = []
  occ.forEach(a => labels.push(a['category_id']))
  occ.forEach(a => graphData.push(a['occurrence']))

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Transaction',
        data: graphData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <Pie data={data} />
  )
}
