// /app/api/destinations/[destination_id]/route.ts
import { NextRequest, NextResponse } from 'next/server'

const destinations = [
  { id: '1', name: 'Paris', country: 'France' },
  { id: '2', name: 'Tokyo', country: 'Japan' }
]

export async function GET(
  req: NextRequest,
  { params }: { params: { destination_id: string } }
) {
  const destination = destinations.find(d => d.id === params.destination_id)
  if (!destination) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(destination)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { destination_id: string } }
) {
  const index = destinations.findIndex(d => d.id === params.destination_id)
  if (index === -1) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const body = await req.json()
  destinations[index] = { ...destinations[index], ...body }

  return NextResponse.json(destinations[index])
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { destination_id: string } }
) {
  const index = destinations.findIndex(d => d.id === params.destination_id)
  if (index === -1) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const deleted = destinations.splice(index, 1)
  return NextResponse.json({ deleted })
}
