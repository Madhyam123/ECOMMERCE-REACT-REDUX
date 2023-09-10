import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";
const Admin = () => {
    const [state,setState] = useState({
          options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
        },
        colors:["#12AF83","#B80934"]
      },
      series: [
        {
          name: "Between Age(15-40)",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "Betweeen Age(40-75)",
            data: [3, 40, 47, 34, 32, 68, 73, 98]
          }
      ],
    })
  return (
    <div>
        <h1 className='flex items-center justify-center text-purple-500 text-4xl'>ADMIN DASHBOARD</h1>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}
    >
        <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
             <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
            
    </div>
    </div>
  )
}

export default Admin