import React, { useState } from 'react';
import { Save, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import PersonalDetailsSection from '../components/resume/PersonalDetailsSection';
import WorkExperienceSection from '../components/resume/WorkExperienceSection';
import EducationSection from '../components/resume/EducationSection';
import SkillsSection from '../components/resume/Skillsection';
import ResumePreview from '../components/resume/ResumePreview';

const ResumeBuilder = () => {
  const [currentSection, setCurrentSection] = useState('personal');
  const [generatedResume, setGeneratedResume] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      address: '',
    },
    education: [],
    skills: [],
    work: [],
  });

  // Update data in parent state
  const handleSave = (section, data) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
    console.log(resumeData);
    
  };

  const handleNextSection = () => {
    if (currentSection === 'personal') {
      setCurrentSection('education');
    } else if (currentSection === 'education') {
      setCurrentSection('skills');
    } else if (currentSection === 'skills') {
      setCurrentSection('work');
    }
  };

  const handlePreviousSection = () => {
    if (currentSection === 'work') {
      setCurrentSection('skills');
    } else if (currentSection === 'skills') {
      setCurrentSection('education');
    } else if (currentSection === 'education') {
      setCurrentSection('personal');
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Resume Builder</div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {currentSection === 'personal' && (
                <PersonalDetailsSection
                  data={resumeData.personal}
                  onSave={(data) => handleSave('personal', data)}
                />
              )}
              {currentSection === 'education' && (
                <EducationSection
                  data={resumeData.education}
                  onSave={(data) => handleSave('education', data)}
                />
              )}
              {currentSection === 'skills' && (
                <SkillsSection
                  data={resumeData.skills}
                  onSave={(data) => handleSave('skills', data)}
                />
              )}
              {currentSection === 'work' && (
                <WorkExperienceSection
                  data={resumeData.work}
                  onSave={(data) => handleSave('work', data)}
                />
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousSection}
                  disabled={currentSection === 'personal'}
                  className={`flex items-center px-4 py-2 ${currentSection !== 'personal' ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>
                <button
    onClick={handleNextSection}
    className={`flex items-center px-4 py-2 ${
      currentSection === 'work' ? ' text-blue-600 ' : 'text-blue-600'
    }`}
  >
    {currentSection === 'work' ? 'Done' : 'Next'}
    <ChevronRight className="w-4 h-4 ml-2" />
  </button>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Preview & Customization */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-4 space-y-4">
        

{/* Preview Section */}
  <ResumePreview resumeData={resumeData} />
</div>
</div>
   </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;

