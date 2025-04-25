// /app/api/requests/route.ts
import { NextRequest, NextResponse } from 'next/server'

const requests = [
  {
    id: '1',
    userId: 'u1',
    destinationId: '1',
    details: 'Looking for a budget trip to Paris in June.',
    status: 'pending'
  }
]

// GET all requests
export async function GET() {
  return NextResponse.json(requests)
}

// Create a new request
export async function POST(req: NextRequest) {
  const body = await req.json()

  const newRequest = {
    id: (requests.length + 1).toString(),
    ...body,
    status: 'pending'
  }

  requests.push(newRequest)
  return NextResponse.json(newRequest, { status: 201 })
}
