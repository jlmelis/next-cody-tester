// app/persons/[id].tsx
"use client";
import { useParams  } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { PersonInterface } from '../../interfaces/Person';

const PersonDetailsPage: React.FC = () => {
  const [person, setPerson] = useState<PersonInterface | null>(null);

  const params = useParams();

  const id = params['id'];

  useEffect(() => {
    const fetchPerson = async () => {
      if (!id) return;
      try {
        const response = await fetch(`../api/persons/${id}`);
        const data: PersonInterface = await response.json();
        setPerson(data);
      } catch (error) {
        console.error("Error fetching person details:", error);
      }
    };

    fetchPerson();
  }, [params]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (

<div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-primary-color">
          {person.name}
        </h1>

        <div className="flex">
          <div className="mr-10">
            <h3 className="font-bold mb-2 text-secondary-color">Contact</h3>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>
            <p>Website: {person.website}</p>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-secondary-color">Address</h3>
            <p>{person.address.street}</p>
            <p>{person.address.suite}</p>
            <p>{person.address.city}</p>
            <p>{person.address.zipcode}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-bold mb-2 text-secondary-color">Company</h3>
          <p>{person.company.name}</p>
          <p>CatchPhrase: {person.company.catchPhrase}</p>
          <p>BS: {person.company.bs}</p>
        </div>
      </div>
      <a href="/persons" className="text-blue-500 underline">
        Back to Persons
      </a>
    </div>
  );
};


export default PersonDetailsPage;
