import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Available", value: 12, color: "#22c55e" },
  { name: "Rented", value: 3, color: "#3b82f6" },
  { name: "Maintenance", value: 2, color: "#f59e0b" },
  { name: "Inactive", value: 1, color: "#ef4444" },
]

export function VehicleStatus() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} vehicles`, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-center gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

