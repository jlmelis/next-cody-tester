import React from 'react';
import { PersonInterface } from '../interfaces/Person';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const Person: React.FC<PersonInterface> = ({ name, email, id }) => {
  const router = useRouter(); // Use the useRouter hook to get the router instance

  // Define a function to handle the click event
  const handleClick = () => {
    router.push(`/persons/${id}`);
  };

  return (
    <div
      className="card bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default Person;
