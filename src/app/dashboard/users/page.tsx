"use client";

import { useDeviceManager } from "@/app/hooks/useDeviceManager";
import NavbarUser from "@/component/NavbarUser/page";
import React from "react";
import AddButtons from "@/component/ui/AddButtons";
import ButtonSubscriber from "@/component/ui/ButtonsSubscriber";
import ButtonPublisher from "@/component/ui/ButtonPublisher";
import SubscriberWeb from "@/component/cardFormConfiguration/SubscriberWeb";
import SubscriberDeviceIoT from "@/component/cardFormConfiguration/SubscriberDeviceIoT";
import Text from "@/component/cardFormConfiguration/Text";
import Button from "@/component/cardFormConfiguration/Button";
import Switch from "@/component/cardFormConfiguration/Switch";
import SeekBar from "@/component/cardFormConfiguration/SeekBar";
import ComboBox from "@/component/cardFormConfiguration/ComboBox";
import ColorPicker from "@/component/cardFormConfiguration/ColorPicker";
import TimePicker from "@/component/cardFormConfiguration/TimePicker";
import Light from "@/component/cardFormConfiguration/ColorPicker";
import Fan from "@/component/cardFormConfiguration/Fan";
import Motor from "@/component/cardFormConfiguration/Motor";
import PublisherDeviceIoT from "@/component/cardFormConfiguration/PublisherDeviceIoT";


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
          // <div className="bg-white p-4 rounded shadow mb-4 max-w-d">
          //   <h2>Tambah{selectedSubscriber}</h2>
          // </div>
          <SubscriberWeb />
        )}
        {selectedSubscriber === "Subscriber Device IoT" && (
          // <div>ini Komponen Subscriber Device IoT</div>
          <SubscriberDeviceIoT />
        )}
        {selectedPublisher === "Text" && (
          // <div>ini Komponen Publisher Text</div>
          <Text />
        )}
        {selectedPublisher === "Button" && (
          // <div>ini Komponen Publisher Button</div>
          <Button />
        )}
        {selectedPublisher === "Switch" && (
          // <div>ini Komponen Publisher Switch</div>
          <Switch />
        )}
        {selectedPublisher === "Seek Bar" && (
        //  src/component/cardFormConfiguration/Text.tsx
           <SeekBar />
        )}
        {selectedPublisher === "Combo Box" && (
          // src/component/cardFormConfiguration/Text.tsx
            <ComboBox />
        )}
        {selectedPublisher === "Color Picker" && (
          // <div>ini Komponen Publisher Color Picker </div>
          <ColorPicker />
        )}
        {selectedPublisher === "Time Picker" && (
          // <div>ini Komponen Publisher Time Picker </div>
          <TimePicker />
        )}
        {selectedPublisher === "Light" && (
          // <div>ini Komponen Publisher Light </div>
          <Light />
        )}
        {selectedPublisher === "Fan" && (
        // <div>ini Komponen Publisher Fan </div>
        <Fan />
        )}
        
        {selectedPublisher === "Motor" && (
          // <div>ini Komponen Publisher Motor </div>
          <Motor />
        )}
        {selectedPublisher === "Publisher Device IoT" && (
          // <div>ini Komponen Publisher PUblisher Device IoT </div>
          <PublisherDeviceIoT />
        )}
        <div className="bg-purple-400">
          <p>ini selectedSubscriber: {selectedSubscriber}</p>
          <p>ini selectedPublisher: {selectedPublisher}</p>
        </div>
      </main>
    </div>
  );
}
