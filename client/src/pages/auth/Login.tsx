export default function LoginPage() {
  const confirmed = true;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-graydark p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h1>
        {confirmed && (
          <div className="bg-green-500 text-white p-2 rounded mb-4">
            Email confirmed successfully. Please log in.
          </div>
        )}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border focus:shadow-xl focus:shadow-primary border-gray-600 rounded-md text-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 focus:shadow-xl focus:shadow-primary border border-gray-600 rounded-md text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-primary flex justify-center items-center w-full mx-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-primary hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
