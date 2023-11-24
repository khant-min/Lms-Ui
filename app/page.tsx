import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-books">Create Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
