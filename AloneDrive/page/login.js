import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (email === 'aloneadmin@admin.admin' && password === 'AloneDrive123') {
      router.push('/dashboard')
    } else {
      alert('Login gagal. Email atau password salah.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login AloneDrive</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 rounded bg-gray-200 dark:bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}
