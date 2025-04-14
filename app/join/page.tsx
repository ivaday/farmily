'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function JoinPage() {
  const { toast } = useToast()
  const [role, setRole] = useState("customer")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitting registration...");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role })
      });
      const data = await res.json();
      console.log("API response:", data);
  
      if (res.ok) {
        toast({
          title: "Success 🎉",
          description: "Account created! Redirecting to login...",
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        toast({
          title: "Something went wrong",
          description: data?.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-emerald-100 to-white px-4">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-lg p-10 space-y-8 border border-green-100">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-emerald-700 flex justify-center items-center gap-2">
            <UserPlus className="w-7 h-7" /> Join Farmily
          </h2>
          <p className="text-sm text-gray-600">Create your account and grow with the community</p>
        </div>

        <div className="flex justify-center gap-4 text-sm">
          <button onClick={() => setRole("customer")} className={`px-4 py-2 rounded-full transition border ${role === "customer" ? "bg-emerald-600 text-white" : "border-emerald-300 text-emerald-600 hover:bg-emerald-50"}`}>Customer</button>
          <button onClick={() => setRole("farmer")} className={`px-4 py-2 rounded-full transition border ${role === "farmer" ? "bg-emerald-600 text-white" : "border-emerald-300 text-emerald-600 hover:bg-emerald-50"}`}>Farmer</button>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-md font-semibold py-3 rounded-xl">
            Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-emerald-700 font-semibold hover:underline">Log In</Link>
        </div>
      </div>
    </div>
  )
}
