"use client";
// components/Person.tsx
import React from 'react';

interface PersonProps {
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

const Person: React.FC<PersonProps> = ({ name, email }) => {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      {/* Render other person details here */}
    </div>
  );
};

export default Person;
