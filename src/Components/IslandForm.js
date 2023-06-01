import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleBook() {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={handleName} />
      <input
        placeholder="Type Phone Number"
        type="tel"
        onChange={handlePhone}
      />
      <button className="book" onClick={handleBook}>
        Book for today!
      </button>
    </div>
  );
}
