import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CitizensTable = ({ citizens }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/citizen/${id}`); // Переход на карточку гражданина
  };

  const filteredCitizens = citizens.filter((citizen) =>
    citizen.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Поиск по имени"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />
      <table className="min-w-full bg-gray border">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">ФИО</th>
            <th className="text-left py-2 px-4">Дата рождения</th>
            <th className="text-left py-2 px-4">Статус</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen) => (
            <tr
              key={citizen.id}
              className="cursor-pointer hover:bg-gray-100 border-t"
              onClick={() => handleRowClick(citizen.id)}
            >
              <td className="py-2 px-4">{citizen.name}</td>
              <td className="py-2 px-4">{citizen.birthDate}</td>
              <td className="py-2 px-4">{citizen.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitizensTable;
