import { useParams, Link } from 'react-router-dom';

const CitizenCard = ({ citizens }) => {
  const { id } = useParams(); // Получаем id из URL
  const citizen = citizens.find((citizen) => citizen.id === parseInt(id));

  if (!citizen) return <p>Данные не найдены</p>;

  return (
    <div className="p-4 border">
      <Link
        to="/citizens"
        className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Назад к картотеке
      </Link>
      <h2 className="text-lg font-bold mb-4">{citizen.name}</h2>
      <table className="min-w-full bg-gray border">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-bold">Дата рождения:</td>
            <td className="py-2 px-4">{citizen.birthDate}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold">Статус:</td>
            <td className="py-2 px-4">{citizen.status}</td>
          </tr>
          {/* Другие данные */}
        </tbody>
      </table>
    </div>
  );
};

export default CitizenCard;
