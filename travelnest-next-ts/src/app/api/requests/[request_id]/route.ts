// /app/api/requests/[request_id]/route.ts
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

// GET specific request
export async function GET(
  req: NextRequest,
  { params }: { params: { request_id: string } }
) {
  const request = requests.find(r => r.id === params.request_id)

  if (!request) {
    return NextResponse.json({ error: 'Request not found' }, { status: 404 })
  }

  return NextResponse.json(request)
}

// UPDATE request
export async function PUT(
  req: NextRequest,
  { params }: { params: { request_id: string } }
) {
  const index = requests.findIndex(r => r.id === params.request_id)
  if (index === -1) {
    return NextResponse.json({ error: 'Request not found' }, { status: 404 })
  }

  const updatedData = await req.json()
  requests[index] = { ...requests[index], ...updatedData }

  return NextResponse.json(requests[index])
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { request_id: string } }
) {
  const index = requests.findIndex(r => r.id === params.request_id)
  if (index === -1) {
    return NextResponse.json({ error: 'Request not found' }, { status: 404 })
  }

  const deleted = requests.splice(index, 1)
  return NextResponse.json({ deleted })
}
