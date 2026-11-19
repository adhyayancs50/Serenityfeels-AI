import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "@/context/user";
import { collection, doc, setDoc } from 'firebase/firestore'; // Ensure these are imported
import { db } from '@/firbase/initFirebase';
import Link from 'next/link';
const BookingForm = ({ psychiatrist }) => {
  const { user } = useUser();
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    sessionMode: 'VIDEO',
    sessionType: 'Individual',
    date: today,
    timeSlot: '',
    numSessions: '1',
    agreeToTerms: false,
  });

  // Example time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      timeSlot: timeSlot,
    }));
  };
  console.log(psychiatrist)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      psychiatrist: psychiatrist.title,
      userEmail: user.email,
      userName: user.name,
    };

    try {
      const docRef = doc(collection(db, "bookings"));
      await setDoc(docRef, dataToSend);

      toast.success("Request successfully sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Reset the form here if necessary
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
    <div className='h-full  bg-[#ECF5FF] flex items-center  rounded-md border-2 border-black'>
    <form onSubmit={handleSubmit} className="w-full   p-4 space-y-4">
      {/* Session Mode */}
      <div>
        <label className="text-black font-semibold">Session Mode</label>
        <div className="mt-2">
          <span className="text-black">VIDEO</span>
        </div>
      </div>

      {/* Session Type */}
      <div>
        <label className="text-black font-semibold">Session Type</label>
        <select
          name="sessionType"
          onChange={handleInputChange}
          value={formData.sessionType}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Individual</option>
          {/* Other session types */}
        </select>
      </div>
      <div>
          <label className="text-black font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={today} // Ensure users can't select past dates
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
      {/* Time Slots */}
      {/* For simplicity, let's assume time slots are buttons */}
      <div>
          <label className="text-black font-semibold">Time Slots</label>
          <div className="mt-2 grid grid-cols-4 gap-2 overflow-y-auto max-h-48 scrollbar-thin">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                type="button"
                name="timeSlot"
                value={slot}
                onClick={() => handleTimeSlotSelection(slot)}
                className={`py-2 px-4 text-base rounded-md ${formData.timeSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

      {/* Number of Sessions */}
      <div>
        <label className="text-black font-semibold">No. of Sessions</label>
        <select
          name="numSessions"
          onChange={handleInputChange}
          value={formData.numSessions}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="1">(1 session) {psychiatrist.price}/-</option>
          {/* <option value="2">(2 sessions) 1500/-</option>
          <option value="4">(4 sessions) 2200/-</option> */}
        </select>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="form-checkbox"
          />
          <span className="ml-2">I agree to the <a href="/T&C.pdf" className='underline' target="_blank" rel="noopener noreferrer" alt="alt text">
  Terms and Conditions
</a>
</span>
        </label>


      </div>
      

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={!formData.agreeToTerms}
          className={`w-full text-white font-semibold py-2 px-4 rounded ${formData.agreeToTerms ? "bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] transition duration-300 ease-in-out hover:bg-[#021221] hover:text-[#021221] hover:border-[#003128]" : "bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] opacity-50"}`}
          
        >
          Book Session
        </button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
