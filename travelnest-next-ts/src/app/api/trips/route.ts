// /app/api/trips/route.ts
import { NextRequest, NextResponse } from 'next/server'

const trips = [
  {
    id: '1',
    userId: 'u1',
    destinationId: '1',
    startDate: '2025-07-01',
    endDate: '2025-07-10',
    price: 1200,
    status: 'confirmed'
  }
]

// GET all trips
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')

  let filtered = trips
  if (userId) {
    filtered = trips.filter(t => t.userId === userId)
  }

  return NextResponse.json(filtered)
}

// POST new trip
export async function POST(req: NextRequest) {
  const body = await req.json()

  const newTrip = {
    id: (trips.length + 1).toString(),
    ...body,
    status: 'confirmed' // default
  }

  trips.push(newTrip)
  return NextResponse.json(newTrip, { status: 201 })
}
