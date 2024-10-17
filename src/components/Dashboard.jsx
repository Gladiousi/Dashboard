import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Dashboard = ({ citizens }) => {
  // Пример данных для графиков
  const ageData = citizens.map((citizen) => {
    const birthYear = new Date(citizen.birthDate).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    return age;
  });

  // столбчатая диаграмма возрастов
  const barData = {
    labels: ["18-30", "31-40", "41-50", "51-60", "61+"],
    datasets: [
      {
        label: "Количество граждан по возрастным группам",
        data: [
          ageData.filter((age) => age >= 18 && age <= 30).length,
          ageData.filter((age) => age >= 31 && age <= 40).length,
          ageData.filter((age) => age >= 41 && age <= 50).length,
          ageData.filter((age) => age >= 51 && age <= 60).length,
          ageData.filter((age) => age >= 61).length,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // круговая диаграмма
  const cityData = {
    labels: [...new Set(citizens.map((citizen) => citizen.city))],
    datasets: [
      {
        data: [...new Set(citizens.map((citizen) => citizen.city))].map(
          (city) => citizens.filter((citizen) => citizen.city === city).length
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // линейный график
  const lineData = {
    labels: ["18", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70"],
    datasets: [
      {
        label: "Количество граждан по возрасту",
        data: ageData.sort(),
        fill: false,
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="p-4 lg:m-14 overflow-hidden">
      <h1 className="text-2xl mb-4 text-center">Dashboard с показателями</h1>
      {/* Столбчатая диаграмма (возраст) */}
      <div className="mb-6 mt-12">
        <h2 className="text-xl mb-2 text-center">
          Распределение граждан по возрастным группам
        </h2>
        <Bar data={barData} />
      </div>
      {/* Круговая диаграмма (города) */}
      <h2 className="text-xl mb-4 mt-12 text-center">
        Распределение граждан по городам
      </h2>
      <div className="mb-6 flex text-wrap justify-center">
        <div className="w-[100%] h-fit lg:w-[50%]">
          <Pie data={cityData} />
        </div>
      </div>
      {/* Линейный график (изменение количества людей по возрасту) */}
      <div className="mb-6 mt-12">
        <h2 className="text-xl mb-2 text-center">
          Изменение количества граждан по возрастам
        </h2>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Dashboard;
