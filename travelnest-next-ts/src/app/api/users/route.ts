// /app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

const users = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date().toISOString()
  }
]

// GET all users
export async function GET(req: NextRequest) {
  return NextResponse.json(users)
}

// POST create new user
export async function POST(req: NextRequest) {
  const body = await req.json()

  const newUser = {
    id: `u${users.length + 1}`,
    ...body,
    createdAt: new Date().toISOString()
  }

  users.push(newUser)
  return NextResponse.json(newUser, { status: 201 })
}
