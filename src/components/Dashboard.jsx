import { useState } from 'react';
import CitizensTable from './CitizensTable';
import CitizenCard from './CitizenCard';

const Dashboard = () => {
  const [selectedCitizen, setSelectedCitizen] = useState(null);

  const handleSelectCitizen = (citizen) => {
    setSelectedCitizen(citizen);
  };

  return (
    <div className="flex">
      <div className="">
        <CitizensTable onSelectCitizen={handleSelectCitizen} />
      </div>
      <div className="w-1/2">
        <CitizenCard citizen={selectedCitizen} />
      </div>
    </div>
  );
};

export default Dashboard;
