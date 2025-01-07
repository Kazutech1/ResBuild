import React, { useState, useEffect, useRef } from 'react';

const PersonalDetailsSection = ({ onSave }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    address: '',
  });

  const isFirstRender = useRef(true); // Ref to track the first render
  const prevFormData = useRef(formData); // Ref to store previous formData

  useEffect(() => {
    // Skip onSave call during the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Check if formData has changed before calling onSave
    if (JSON.stringify(formData) !== JSON.stringify(prevFormData.current)) {
      onSave(formData);
      prevFormData.current = formData; // Update previous formData
    }
  }, [formData, onSave]); // Dependencies: onSave and formData

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Personal Details</h2>
      <p className="text-gray-600 text-sm mt-1">Start with your basic information</p>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="linkedin.com/in/johndoe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="2"
            placeholder="Your address"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
