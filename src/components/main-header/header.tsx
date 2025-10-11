"use client";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="flex justify-start items-center">
      <Link href={"/"}>
        <h3 className="m-3 ml-5 p-2 text-xl w-max">Pracownia Opowieści</h3>
      </Link>
    </div>
  );
}
