import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 w-screen bg-[#52c41a] text-white flex justify-between text-center">
      <div>
        <h1 className="p-1 text-xl font-semibold text-center">Dark Magic</h1>
      </div>
      <div>
        <ul className="list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="create-books">Create-books</Link>
          </li>
        </ul>
      </div>
      <div className="auth flex justify-bewtween items-center gap-x-2">
        <span>Register</span>
        <span className="w-[1px] h-[60%] bg-gray-300"></span>
        <span>Login</span>
      </div>
    </div>
  );
}
