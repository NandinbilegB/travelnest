// /app/api/destinations/route.ts
import { NextResponse } from 'next/server'

const destinations = [
  { id: '1', name: 'Paris', country: 'France' },
  { id: '2', name: 'Tokyo', country: 'Japan' }
]

// GET all destinations
export async function GET() {
  return NextResponse.json(destinations)
}

// Create a new destination
export async function POST(req: Request) {
  const body = await req.json()
  const newDestination = {
    id: (destinations.length + 1).toString(),
    ...body
  }
  destinations.push(newDestination)
  return NextResponse.json(newDestination, { status: 201 })
}
