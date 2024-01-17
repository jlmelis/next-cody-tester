// pages/persons.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Person from './person';

interface Person {
    id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const PersonsPage: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../api/persons');
        const data: Person[] = await response.json();
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
