"use client"
import Link from "next/link";
import { useGetUsersQuery } from "../redux/userSlice/userSlice";

export default function User() {
  const { data, isLoading, error } = useGetUsersQuery();
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>



  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-2 py-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <div className="text-center">
        <h2 className="font-bold text-xl mb-3">User list</h2>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>

          ))}
        </ul>
      </div>
    </div>
  );
}
