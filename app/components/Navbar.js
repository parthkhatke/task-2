import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar shadow-md bg-base-100 ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost"> Parth Khatke</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" >About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
