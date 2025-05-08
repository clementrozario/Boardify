import Link from "next/link"

export default function Home() {
  return(
    <div>
      <h1>Welcome to Taskforge</h1>
      <p>A simple task mangement board</p>
      <div>
        <Link href="/login" className="underline">Login</Link>
        <Link href="/signup" className="underline">Sign Up</Link>
      </div>
    </div>
  )
}