import { useParams, Link } from 'react-router-dom';

const CitizenCard = ({ citizens }) => {
  const { id } = useParams(); 
  const citizen = citizens.find((citizen) => citizen.id === parseInt(id));

  if (!citizen) return <p>Данные не найдены</p>;

  return (
    <div className="p-4 min-h-screen">
      <Link
        to="/citizens"
        className="mb-4 inline-block px-4 py-2 bg-[#245851e4] text-white rounded hover:bg-[#3c7f769c] duration-300"
      >
        Назад к картотеке
      </Link>
      <h2 className="text-3xl font-bold mb-4">{citizen.name}</h2>
      <table className="flex bg-[#3f9d915a] border">
        <tbody className='w-full'>
          <tr className='flex justify-between'>
            <td className="py-2 px-4 font-bold">Дата рождения:</td>
            <td className="py-2 px-4">{citizen.birthDate}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold">Статус:</td>
            <td className="py-2 px-4">{citizen.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CitizenCard;
