// pages/api/persons.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the person object based on the expected structure from JSONPlaceholder
type Person = {
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
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Person[] | { error: string }>
) {
  try {
    // Fetch the person objects from JSONPlaceholder
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const persons: Person[] = await response.json();

    return new Response(JSON.stringify(persons), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Return the person objects in the response
  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
