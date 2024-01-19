import { PersonInterface } from '@/app/interfaces/Person';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params["id"];

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const person: PersonInterface = await response.json();

    return NextResponse.json(person, {status: 200});

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, {status: 500});
  }
}
