import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts'

const CustomBarChart = ({ data }) => {

    const getBarColor = (entry) => {
        switch (entry?.priority) {
            case "Low":
                return '#00BC7D'
            case "Medium":
                return '#FE9900'
            case "High":
                return '#FF1F57'

            default:
                return '#00BC7D'

        }
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray -300'>
                    <p className='text-xs font-semibold text-purple-800 mb-1'>
                        {payload[0].payload.priority}
                    </p>
                    <p className='text-sm text-gray-600'>
                        Count:{" "}
                        <span
                            className='text-sm font-medium text-gray-900'>
                            {payload[0].payload.count}
                        </span>
                    </p>
                </div>
            )
        }
        return null;
    }


    return (
        <div className=''>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid stroke='none' />
<<<<<<< HEAD
                    <XAxis dataKey={data[0]?.name ? "name" : "priority"}
=======
                    <XAxis dataKey="priority"
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
                        tick={{ fontSize: 12, fill: "#555" }}
                        stroke='none'
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#555" }}
                        stroke='none'
                    />

                    <Tooltip content={CustomTooltip} curso={{ file: 'trasparent' }} />
<<<<<<< HEAD
                    <Bar dataKey={data[0]?.value ? "value" : "count"} >
=======
                    <Bar dataKey="count">
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(entry)} />
                        )
                        )}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart