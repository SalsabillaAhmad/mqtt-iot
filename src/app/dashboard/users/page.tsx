"use client";

import NavbarUser from "@/component/NavbarUser/page";
import React from "react";


export default function UsersDashboard() {
  
  return (
    <div className="min-h-screen bg-amber-50">
      <NavbarUser />
      <main className="p-6">
        <div className="space-x-4 mb-4">
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-green-500"
            onClick={()=>alert("ini tombol add subscriber sudah ditekan")}
          >
            Add Subscriber
          </button>
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-green-500"
            onClick={()=>alert("ini tombol add publisher sudah ditekan")}
          >
            Add Publisher
          </button>
        </div>
      </main>
    </div>
  );
}
