"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Pesan, setPesan] = useState("");

  const HandlerSubmit = (event: any) => {
    event.preventDefault();
    kirimPesan()
  };
  const kirimPesan = () => {
    const nomorTelepon = "089669623289";
    const pesanClient = `hello saya ${Name}. ${Pesan}`;
    // url ke whatsaap saya
    const whatsAppUrl = `https://wa.me/${nomorTelepon}?text=${encodeURIComponent(
      pesanClient
    )}`;
    // mengarahkan client ke whtasapp saya
    window.location.href = whatsAppUrl;
  }
  const keyPress = (e: any) => {
    if (e.key === 'Enter') {
        kirimPesan()
    }
  }
  return (
    <div className="mt-12 bg-slate-800 inline-block">
      <form onSubmit={HandlerSubmit} className="flex flex-col gap-4 p-5">
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={keyPress}
          placeholder="Name..."
          className="w-44 h-8 rounded-lg placeholder:p-2 placeholder:text-sm text-black p-3"
        />
        <textarea
          value={Pesan}
          onChange={(e) => setPesan(e.target.value)}
          onKeyDown={keyPress}
          placeholder="Massage...."
          className="w-96 placeholder:p-4 placeholder:text-sm text-black p-4 rounded-3xl"
        ></textarea>
        <button type="submit" className="text-start">Kirim</button>
      </form>
    </div>
  );
};

export default ContactForm;
