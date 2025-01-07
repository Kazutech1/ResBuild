import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, GraduationCap } from 'lucide-react';

const EducationSection = ({ onSave }) => {
  const [educationList, setEducationList] = useState([
    {
      degree: '',
      fieldOfStudy: '',
      institution: '',
      graduationYear: '',
      inProgress: false,
    },
  ]);

  const prevEducationListRef = useRef();

  // Add a new education entry
  const addEducationEntry = () => {
    setEducationList([
      ...educationList,
      { degree: '', fieldOfStudy: '', institution: '', graduationYear: '', inProgress: false },
    ]);
  };

  // Remove an education entry
  const removeEducationEntry = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedList = educationList.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEducationList(updatedList);
  };

  // Compare previous and current education list
  useEffect(() => {
    if (prevEducationListRef.current && JSON.stringify(prevEducationListRef.current) !== JSON.stringify(educationList)) {
      onSave(educationList);
    }
    prevEducationListRef.current = educationList;
  }, [educationList, onSave]);

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        </div>
        <button
          onClick={addEducationEntry}
          className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-600 
            hover:bg-blue-100 font-medium text-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </button>
      </div>

      {/* Render Education Entries */}
      <div className="space-y-6">
        {educationList.map((entry, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Education #{index + 1}
              </h3>
              <button
                onClick={() => removeEducationEntry(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete education"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Degree */}
              <div className="space-y-1">
                <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700">
                  Degree
                </label>
                <select
                  id={`degree-${index}`}
                  name="degree"
                  value={entry.degree}
                  onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                  className="w-full h-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"

                >
                  <option value="">Select a degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                  <option value="associate">Associate Degree</option>
                  <option value="diploma">Diploma</option>
                  <option value="certificate">Certificate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Field of Study */}
              <div className="space-y-1">
                <label htmlFor={`fieldOfStudy-${index}`} className="block text-sm font-medium text-gray-700">
                  Field of Study
                </label>
                <input
                  type="text"
                  id={`fieldOfStudy-${index}`}
                  value={entry.fieldOfStudy}
                  onChange={(e) => handleInputChange(index, 'fieldOfStudy', e.target.value)}
                  className="w-full h-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"

                  placeholder="e.g., Computer Science"
                />
              </div>

              {/* Institution */}
              <div className="space-y-1">
                <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700">
                  Institution
                </label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  value={entry.institution}
                  onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                  className="w-full h-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"

                  placeholder="e.g., University Name"
                />
              </div>

              {/* Graduation Year */}
              <div className="space-y-1">
                <label htmlFor={`graduationYear-${index}`} className="block text-sm font-medium text-gray-700">
                  Graduation Year
                </label>
                <input
                  type="number"
                  id={`graduationYear-${index}`}
                  value={entry.graduationYear}
                  onChange={(e) => handleInputChange(index, 'graduationYear', e.target.value)}
                  className="w-full h-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"

                  placeholder="e.g., 2025"
                />
              </div>

              {/* In Progress */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`inProgress-${index}`}
                  checked={entry.inProgress}
                  onChange={(e) => handleInputChange(index, 'inProgress', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`inProgress-${index}`} className="text-sm font-medium text-gray-700">
                  In Progress
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Tips for education section:</h4>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>List your most recent education first</li>
          <li>Include relevant coursework if it's applicable to the job</li>
          <li>Add honors or awards to highlight academic achievements</li>
        </ul>
      </div>
    </div>
  );
};

export default EducationSection;
