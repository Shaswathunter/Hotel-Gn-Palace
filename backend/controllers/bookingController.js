import bookings from "../data/bookings.js";

export const createBooking = (req, res) => {
  const { name, phone, checkin } = req.body;

  // validation (frontend ke form ke according)
  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and phone required",
    });
  }

  const newBooking = {
    id: Date.now(),
    name,
    phone,
    checkin,
    amount: 350,
    hotel: "GN Palace",
    status: "pending",
    createdAt: new Date(),
  };

  bookings.push(newBooking);

  // IMPORTANT: frontend ko clean response
  res.json({
    success: true,
    message: "Booking successful",
    booking: newBooking,
  });
};