'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User } from "lucide-react"

export default function LoginPage() {
  const [role, setRole] = useState("customer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (res.ok) {
      alert("Login Successful!")
      window.location.href = "/marketplace"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-emerald-100 to-white px-4">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-lg p-10 space-y-8 border border-emerald-100">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-emerald-700 flex justify-center items-center gap-2">
            <User className="w-7 h-7" /> Log In
          </h2>
          <p className="text-sm text-gray-600">Access your Farmily account</p>
        </div>

        <div className="flex justify-center gap-4 text-sm">
          <button onClick={() => setRole("customer")} className={`px-4 py-2 rounded-full transition border ${role === "customer" ? "bg-emerald-600 text-white" : "border-emerald-300 text-emerald-600 hover:bg-emerald-50"}`}>Customer</button>
          <button onClick={() => setRole("farmer")} className={`px-4 py-2 rounded-full transition border ${role === "farmer" ? "bg-emerald-600 text-white" : "border-emerald-300 text-emerald-600 hover:bg-emerald-50"}`}>Farmer</button>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="text-right text-sm">
            <a href="#" className="text-emerald-600 hover:underline">Forgot password?</a>
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-md font-semibold py-3 rounded-xl">
            Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/join" className="text-emerald-700 font-semibold hover:underline">Join Now</Link>
        </div>
      </div>
    </div>
  )
}
