// app/api/persons.ts
import { NextResponse, NextRequest } from 'next/server';
import { PersonInterface } from '../../interfaces/Person';

export async function GET(
  req: NextRequest
) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const persons: PersonInterface[] = await response.json();

    return NextResponse.json(persons, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}


