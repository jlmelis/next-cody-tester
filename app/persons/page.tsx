// app/persons/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Person from './person';
import { PersonInterface } from '../interfaces/Person';


const PersonsPage: React.FC = () => {
  const [persons, setPersons] = useState<PersonInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../api/persons');
        const data: PersonInterface[] = await response.json();
        setPersons(data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search persons..."
        className="mb-4 w-full p-2 border rounded-lg"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPersons.map((person) => (
          <Person key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};

export default PersonsPage;
