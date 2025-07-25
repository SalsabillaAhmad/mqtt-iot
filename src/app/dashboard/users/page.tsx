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
        {!view && <AddButtons setView={setView} />}
        {view === "subscriber" && !selectedSubscriber && (
          <ButtonSubscriber
            setSelectedSubscriber={setSelectedSubscriber}
            setView={setView}
          />
        )}
        {view === "publisher" && !selectedPublisher && (
          <ButtonPublisher
            setSelectedPublisher={setSelectedPublisher}
            setView={setView}
          />
        )}
        {selectedSubscriber === "Subscriber Web" && (
          <div>ini Komponen Subscriber web</div>
        )}
        {selectedSubscriber === "Subscriber Device IoT" && (
          <div>ini Komponen Subscriber Device IoT</div>
        )}
        {selectedPublisher === "Text" && 
        <div>ini Komponen Publisher Text</div>}
        {selectedPublisher === "Button" && (
          <div>ini Komponen Publisher Button</div>
        )}
        {selectedPublisher === "Switch" && (
          <div>ini Komponen Publisher Switch</div>
        )}
        {selectedPublisher === "Seek Bar" && (
          <div>ini Komponen Publisher Seek bar </div>
        )}
        {selectedPublisher === "Combo Box" && (
          <div>ini Komponen Publisher Combo Box </div>
        )}
        {selectedPublisher === "Color Picker" && (
          <div>ini Komponen Publisher Color Picker </div>
        )}
        {selectedPublisher === "Time Picker" && (
          <div>ini Komponen Publisher Time Picker </div>
        )}
        {selectedPublisher === "Light" && (
          <div>ini Komponen Publisher Light </div>
        )}
        {selectedPublisher === "Fan" && (
          <div>ini Komponen Publisher Fan </div>
        )}
        {selectedPublisher === "Motor" && (
          <div>ini Komponen Publisher Motor </div>
        )}
        {selectedPublisher === "Publisher Device IoT" && (
          <div>ini Komponen Publisher PUblisher Device IoT </div>
        )}
        <div className="bg-purple-400">
          <p>ini selectedSubscriber: {selectedSubscriber}</p>
          <p>ini selectedPublisher: {selectedPublisher}</p>
        </div>
      </main>
    </div>
  );
}
