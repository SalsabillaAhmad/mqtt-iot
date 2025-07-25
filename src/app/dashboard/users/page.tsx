"use client";

import { publisherOptions } from "@/app/hooks/publisherOptions";
import { useDeviceManager } from "@/app/hooks/useDeviceManager";
import NavbarUser from "@/component/NavbarUser/page";
import React from "react";
import AddButtons from "@/component/ui/AddButtons";
import ButtonSubscriber from "@/component/ui/ButtonsSubscriber";


export default function UsersDashboard() {
  const {
    view,
    setView,
    selectedSubscriber,
    setSelectedSubscriber,
    selectedPublisher,
    setSelectedPublisher,
  } = useDeviceManager();
  return (
    <div className="min-h-screen bg-amber-50">
      <NavbarUser />
      <main className="p-6">
        {!view && (
      <AddButtons setView={setView}/>
        )}
        {view === "subscriber" && (
        <ButtonSubscriber setSelectedSubscriber ={setSelectedSubscriber} setView={setView}/>
        )}
        {view === "publisher" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {publisherOptions.map((option) => (
              <button
                key={option}
                className="px-4 bg-green-400 text-white rounded hover:bg-green-600"
                onClick={() => setSelectedPublisher(option)}
              >
                {option}
              </button>
            ))}
            <button
              className="px-4 py-2 border border-gray-400 hover:border-gray-200 col-span-full"
              onClick={() => setView(null)}
            >
              Kembali
            </button>
          </div>
        )}
        <div
        className="bg-purple-400">
          <p>ini selectedSubscriber: {selectedSubscriber}</p>
          <p>ini selectedPublisher: {selectedPublisher}</p>
        </div>
      </main>
    </div>
  );
}
