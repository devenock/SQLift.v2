export default async function Header() {
  const user: boolean = false;
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <a href={"/"} className="flex items-center space-x-2">
        <img src="/logo.svg" alt="SQLMaster Logo" width={32} height={32} />
        <span className="text-2xl font-bold">SQLift</span>
      </a>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <a
              href="/playground"
              className="hover:text-blue-400 transition-colors"
            >
              Playground
            </a>
          </li>
          <li>
            <a
              href="/challenges"
              className="hover:text-blue-400 transition-colors"
            >
              Challenges
            </a>
          </li>
          {user && (
            <li>
              <a
                href="/profile"
                className="hover:text-blue-400 transition-colors"
              >
                Profile
              </a>
            </li>
          )}
          {!user ? (
            <li>
              <a
                href="/auth/login"
                className="bg-meta-3 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
              >
                Login
              </a>
            </li>
          ) : (
            <li>
              <form>
                <button
                  type="submit"
                  className="bg-bodydark2 hover:bg-meta-1 hover:bg-blue-600 px-4 py-1 rounded transition-colors"
                >
                  Logout
                </button>
              </form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
