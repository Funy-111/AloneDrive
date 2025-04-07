export default function Home() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold">AloneDrive</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Simpan file dan akunmu dengan aman.</p>
        <a href="/login" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Login</a>
      </main>
    )
  }
  