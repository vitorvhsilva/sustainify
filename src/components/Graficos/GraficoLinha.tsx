// components/BarChart.tsx
import { XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DataGraficoLinha {
  data: {mes: string, emissao: number}[];
}

const GraficoLinha: React.FC<DataGraficoLinha> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400} className="mx-auto my-10">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="emissao" fill="#60A5FA" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoLinha;
