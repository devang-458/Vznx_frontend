import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts"
import CustomTooltip from './CustomTooltip'
import CustomLegend from './CustomLegend'

const CustomPieChart = ({ data, colors }) => {
    return (
        <ResponsiveContainer width="100%" height={325}>
            <PieChart>
                <Pie
                    data={data}
<<<<<<< HEAD
                    dataKey={data[0]?.value ? "value" : "count"}
                    nameKey={data[0]?.name ? "name" : "status"}
=======
                    dataKey="count"
                    nameKey="status"
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >{data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieChart