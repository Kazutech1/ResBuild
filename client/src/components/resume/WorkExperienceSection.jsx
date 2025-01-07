import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const WorkExperienceSection = ({ data, onSave }) => {
  const [experiences, setExperiences] = useState(data);
  
  // Use refs to store the initial render and previous experiences
  const initialRender = useRef(true);
  const prevExperiences = useRef(experiences);


  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: '', // Ensure default value
        company: '', // Ensure default value
        startDate: '', // Ensure default value
        endDate: '', // Ensure default value
        currentJob: false, // Default to false for checkbox
        description: '', // Ensure default value
      },
    ]);
  };
  
  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [name]: type === 'checkbox' ? checked : value } : exp
    );
    setExperiences(updatedExperiences);
  };
  
  useEffect(() => {
    // Only call onSave if experiences have changed and it's not the initial render
    if (!initialRender.current) {
      // Compare previous and current experiences to avoid unnecessary calls
      if (JSON.stringify(prevExperiences.current) !== JSON.stringify(experiences)) {
        onSave(experiences); // Call onSave when experiences are updated
      }
    } else {
      initialRender.current = false; // Set initial render to false after first render
    }
  
    // Update previous experiences after the render
    prevExperiences.current = experiences;
  }, [experiences, onSave]);
  
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Work Experience</h2>
      <p className="text-gray-600 text-sm mt-1">Add your previous work experiences</p>

      {/* Add Experience Button */}
      <div className="mt-4 mb-6">
        <button
          onClick={addExperience}
          className="inline-flex items-center px-4 py-2 rounded-md bg-blue-50 text-blue-600 
            hover:bg-blue-100 font-medium text-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </button>
      </div>

      {/* Experience Entries */}
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-medium text-gray-900">Experience #{index + 1}</h3>
              <button
                onClick={() => deleteExperience(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete experience"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Job Title and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id={`title-${index}`}
                  name="title"
                  value={experience.title}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>

              <div>
                <label htmlFor={`company-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  placeholder="e.g. Google"
                />
              </div>
            </div>

            {/* Start Date, End Date, and Current Job Checkbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="month"
                  id={`startDate-${index}`}
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="month"
                  id={`endDate-${index}`}
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  disabled={experience.currentJob}
                />
              </div>
            </div>

            {/* Current Job Checkbox */}
            <div className="flex items-center space-x-4 mt-4">
              <input
                type="checkbox"
                id={`currentJob-${index}`}
                name="currentJob"
                checked={experience.currentJob}
                onChange={(e) => handleChange(index, e)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`currentJob-${index}`} className="text-sm text-gray-700">
                Current Job
              </label>
            </div>

            {/* Job Description */}
            <div className="mt-6">
              <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={experience.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                className="w-full p-2 border rounded-md"
                placeholder="Describe your key responsibilities, achievements, and skills used in this role..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-2">
                Write 3-5 bullet points about your key achievements and responsibilities
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Tips for writing great work experience:</h4>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>Use action verbs to start your bullet points (e.g., "Developed," "Led," "Managed")</li>
          <li>Include specific achievements and metrics where possible</li>
          <li>Focus on relevant experience for the job you're applying to</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
