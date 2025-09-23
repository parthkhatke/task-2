import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar shadow-md bg-base-100 ">
      <div className="flex-1">
        <Link href="https://www.linkedin.com/in/parthkhatke/" className="btn btn-ghost text-xl"> Parth Khatke</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-xl">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-xl">About</Link>
          </li>
          <li>
            <Link href="/project" className="text-xl   ">Projects</Link>
          </li>
          <li>
            <Link href="https://drive.google.com/file/d/1Gnhbe6iz2IFZmp4PCU6p7C098VuWzq1Y/view?usp=drivesdk" className="text-xl">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
