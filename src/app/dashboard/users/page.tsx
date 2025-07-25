"use client";


import { useDeviceManager } from "@/app/hooks/useDeviceManager";
import NavbarUser from "@/component/NavbarUser/page";
import React from "react";
import AddButtons from "@/component/ui/AddButtons";
import ButtonSubscriber from "@/component/ui/ButtonsSubscriber";
import ButtonPublisher from "@/component/ui/ButtonPublisher";


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
        <ButtonPublisher setSelectedPublisher = {setSelectedPublisher} setView={setView}/>
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
