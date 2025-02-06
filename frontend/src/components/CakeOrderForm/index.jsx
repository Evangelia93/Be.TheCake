import React, { useState, useEffect } from "react";
import "../CakeOrderForm/cakeorderform.css"

function CakeOrderForm() {
  const [size, setSize] = useState("");
  const [filling1, setFilling1] = useState("");
  const [filling2, setFilling2] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [cakeDetails, setCakeDetails] = useState("");
  const [cakeName, setCakeName] = useState("");
  const [age, setAge] = useState("");
  const [allergies, setAllergies] = useState("");
  const [isReturningCustomer, setIsReturningCustomer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const sizePrices = {
    "10": [100, 130],
    "15": [140, 170],
    "20": [170, 200],
    "25": [200, 230],
    "30": [220, 260],
  };

  const estimatedPrice = size ? sizePrices[size] : [0, 0];

  const fillings = [
    "Vanilla Cream",
    "Chocolate Cream",
    "Mousse Strawberry",
    "Mousse Forest Fruits",
    "Mousse Framboise",
    "Mousse Oreo",
    "Speculoos Cream",
    "Nutella Cream",
    "Cream Cheese Buttercream",
  ];

  // Υπολογισμός της πρώτης διαθέσιμης ημερομηνίας (10 μέρες μετά)
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 10); // Προσθέτει 10 ημέρες
    return today.toISOString().split("T")[0];
  };

  // **Έλεγχος αν ο πελάτης είναι παλιός** (απαιτεί backend API)
  useEffect(() => {
    if (email) {
      fetch(`https://api.example.com/check-customer?email=${email}`)
        .then((res) => res.json())
        .then((data) => setIsReturningCustomer(data.exists))
        .catch((err) => console.error("Error checking customer:", err));
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="cake-order-form">
      <h2>Order Your Custom Cake</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Pickup Date:</label>
        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required min={getMinDate()} />

        <label>Choose Cake Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)} required>
          <option value="">Select</option>
          <option value="10">10 people</option>
          <option value="15">15 people</option>
          <option value="20">20 people</option>
          <option value="25">25 people</option>
          <option value="30">30 people</option>
        </select>

        <label>Choose First Filling:</label>
        <select value={filling1} onChange={(e) => setFilling1(e.target.value)} required>
          <option value="">Select</option>
          {fillings.map((filling, index) => (
            <option key={index} value={filling}>{filling}</option>
          ))}
        </select>

        <label>Choose Second Filling (Optional):</label>
        <select value={filling2} onChange={(e) => setFilling2(e.target.value)}>
          <option value="">None</option>
          {fillings.map((filling, index) => (
            <option key={index} value={filling}>{filling}</option>
          ))}
        </select>

        <label>Would you like a name on the cake?</label>
        <input type="text" value={cakeName} onChange={(e) => setCakeName(e.target.value)} placeholder="Enter name (Optional)" />

        <label>Would you like an age on the cake?</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age (Optional)" />

        <label>Any allergies we should be aware of?</label>
        <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="List allergies (Optional)" />

        <label>Additional Details:</label>
        <textarea value={cakeDetails} onChange={(e) => setCakeDetails(e.target.value)} placeholder="Describe your cake design, theme, colors, etc." />

        {size && (
          <p className="price-range">
            Estimated Price: <strong>{estimatedPrice[0]}€ - {estimatedPrice[1]}€</strong>
          </p>
        )}

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Thank you for your order!</h3>
            <p>
              Your estimated price is <strong>{estimatedPrice[0]}€ - {estimatedPrice[1]}€</strong>.
              You will receive an email with the final price and delivery details soon.
            </p>
            <p>Order Details:</p>
            <ul>
              <li><strong>Name:</strong> {customerName}</li>
              <li><strong>Email:</strong> {email}</li>
              <li><strong>Phone:</strong> {phone}</li>
              <li><strong>Pickup Date:</strong> {pickupDate}</li>
              <li><strong>Returning Customer:</strong> {isReturningCustomer ? "Yes" : "No"}</li>
            </ul>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CakeOrderForm;