import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CitizensTable = ({ citizens }) => {
  const [search, setSearch] = useState("");
  const [sortOrderName, setSortOrderName] = useState("asc"); // Состояние для сортировки по имени (ФИО)
  const [sortOrderDate, setSortOrderDate] = useState(null); // Состояние для сортировки по дате
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/citizen/${id}`);
  };

  // Функция для сортировки по ФИО
  const sortByName = (citizensList) => {
    return citizensList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrderName === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  };

  // Функция для сортировки по дате рождения
  const sortByDate = (citizensList) => {
    return citizensList.sort((a, b) => {
      const dateA = new Date(a.birthDate);
      const dateB = new Date(b.birthDate);

      if (sortOrderDate === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  // Обработчик клика для сортировки по ФИО
  const handleSortNameClick = () => {
    setSortOrderName(sortOrderName === "asc" ? "desc" : "asc");
    setSortOrderDate(null);
  };

  // Обработчик клика для сортировки по дате рождения
  const handleSortDateClick = () => {
    setSortOrderDate(sortOrderDate === "asc" ? "desc" : "asc");
    setSortOrderName(null);
  };

  // Применяем сортировку в зависимости от выбранного критерия
  const sortedCitizens = () => {
    let sortedList = [...citizens].filter((citizen) =>
      citizen.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrderDate) {
      return sortByDate(sortedList);
    } else {
      return sortByName(sortedList);
    }
  };

  return (
    <div className="p-4 min-h-screen z-0">

      <input
        type="text"
        placeholder="Поиск по имени"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 mb-4 bg-white text-black"
      />
      <table className="min-w-full bg-[#3f9d915a] border">
        <thead>
          <tr>
            <th
              className="text-left py-4 px-4 cursor-pointer"
              onClick={handleSortNameClick}
            >
              ФИО {sortOrderName === "asc" ? "▲" : "▼"}
            </th>
            <th className="text-left py-4 px-4">Номер телефона</th>
            <th
              className="text-left py-4 px-4 cursor-pointer"
              onClick={handleSortDateClick}
            >
              Дата рождения {sortOrderDate === "asc" ? "▲" : "▼"}
            </th>
            <th className="text-left py-4 px-4">Город</th>
          </tr>
        </thead>
        <tbody>
          {sortedCitizens().map((citizen) => (
            <tr
              key={citizen.id}
              className="cursor-pointer hover:bg-gray-700 hover:text-slate-300 hover:duration-500 duration-300 border-t"
              onClick={() => handleRowClick(citizen.id)}
            >
              <td className="py-4 px-4">{citizen.name}</td>
              <td className="py-4 px-4">{citizen.telephonNumber}</td>
              <td className="py-4 px-4">{citizen.birthDate}</td>
              <td className="py-4 px-4">{citizen.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitizensTable;
