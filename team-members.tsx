"use client"
import Image from "next/image"

// Define the new team members
const NEW_TEAM_MEMBERS = [
  {
    id: 1,
    name: "KESHAV",
    role: "Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "KUNAL",
    role: "Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "UMAR",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "MADHAV",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function TeamMembers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEW_TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}'s profile picture`}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
