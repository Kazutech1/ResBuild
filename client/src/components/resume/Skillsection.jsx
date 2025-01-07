import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Lightbulb } from 'lucide-react';

const SkillsSection = ({ onSave }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  // Ref to store the previous value of skills
  const prevSkills = useRef(skills);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  useEffect(() => {
    // Only call onSave if skills have changed and it's not the initial render
    if (JSON.stringify(prevSkills.current) !== JSON.stringify(skills)) {
      if (onSave && skills.length > 0) {
        onSave(skills); // Call onSave only if skills have changed
      }
    }

    // Update previous skills after render
    prevSkills.current = skills;
  }, [skills, onSave]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        </div>
      </div>

      {/* Add Skill Form */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-lg font-medium text-gray-900">Add Skills</h3>
        </div>

        <form onSubmit={handleAddSkill} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2 space-y-1">
              <label
                htmlFor="skill-input"
                className="block text-sm font-medium text-gray-700"
              >
                Skill Name
              </label>
              <input
                id="skill-input"
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 
                  focus:border-blue-500 text-sm"
                placeholder="e.g., JavaScript, React, Figma"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md 
                  bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </button>
            </div>
          </div>
        </form>

        {/* Skills List */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Current Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 
                  text-sm text-gray-700 group"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={`Remove ${skill}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {skills.length === 0 && (
              <p className="text-sm text-gray-500">No skills added yet. Add your first skill above.</p>
            )}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Tips for skills section:</h4>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>Include both technical and soft skills relevant to the position</li>
          <li>Use industry-standard terminology for better ATS matching</li>
          <li>Order skills by relevance to the job you're applying for</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
