// app/api/register/route.ts

import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json()

    console.log("🔍 Received:", { name, email, role })

    // Basic validation
    if (!name || !email || !password || !role) {
      console.warn("⚠️ Missing fields in request")
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      console.warn("🚫 Email already registered:", email)
      return NextResponse.json(
        { message: "Email is already registered." },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    })

    console.log("✅ User created:", { id: user.id, email: user.email, role: user.role })

    return NextResponse.json(
      { message: "Account created successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Server error during registration:", error)
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
