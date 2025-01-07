
import React from 'react';
import { Download, Save, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import html2pdf from 'html2pdf.js'; // Import html2pdf.js

const ResumePreview = ({ resumeData }) => {

  // Function to download the resume as a PDF
  const downloadPDF = () => {
    const element = document.getElementById('resume-preview'); // Get the div that holds the resume content
    html2pdf().from(element).save('resume.pdf'); // Convert the content to PDF and trigger download
  };

  return (
    <>
      {/* Desktop Version - Fixed */}
      <div className="hidden lg:block fixed top-4 right-4 bottom-4 w-[calc(50%-32px)]">
        <div className="h-full flex flex-col">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex-1 flex flex-col">
            {/* Desktop Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Resume Preview</h2>
              <div className="flex gap-2">
                <button
                  onClick={downloadPDF} // Add the downloadPDF function on click
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium 
                  rounded-lg hover:bg-blue-700 shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4 mr-2 hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg" />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="flex-1 overflow-y-auto">
              <PreviewContent resumeData={resumeData} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Full Width */}
      <div className="lg:hidden w-full mt-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Mobile Header */}
          <div className="bg-gray-50 p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Resume Preview</h2>
            </div>
            <button
              onClick={downloadPDF} // Add the downloadPDF function on click
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium 
              rounded-lg  hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2 " />
              Download PDF
            </button>
          </div>

          {/* Mobile Content */}
          <div className="p-4">
            <PreviewContent resumeData={resumeData} />
          </div>
        </div>
      </div>
    </>
  );
};

const PreviewContent = ({ resumeData }) => {
  return (
    <div className="p-8 space-y-10" id="resume-preview"> {/* Set an ID to the content container */}
      {/* Personal Details */}
      <div className="space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 border-b border-gray-200 pb-4">
          {resumeData.personal.fullName || 'John Doe'}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
            <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-medium">{resumeData.personal.email || 'john@example.com'}</span>
          </div>
          <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
            <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-medium">{resumeData.personal.phone || '+1 (555) 000-0000'}</span>
          </div>
          <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-medium">{resumeData.personal.linkedin || 'linkedin.com/in/johndoe'}</span>
          </div>
          <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
            <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-medium">{resumeData.personal.address || '123 Main St, City'}</span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
          Education
        </h2>
        {resumeData.education && resumeData.education.length > 0 ? (
          <div className="space-y-6">
            {resumeData.education.map((entry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {/* Degree, Institution, Graduation Year, Status, and Field of Study in a Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Degree Section */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">College Degree</h3>
                      <p className="text-xl font-bold text-gray-900">{entry.degree}</p>
                    </div>

                    {/* Institution Section */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Institution</h3>
                      <p className="text-lg font-semibold text-blue-600 mt-1">{entry.institution}</p>
                    </div>

                    {/* Graduation Year Section */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Graduation Year</h3>
                      <p className="text-base font-semibold text-gray-600">{entry.graduationYear}</p>
                    </div>

                    {/* Status Section */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Status</h3>
                      {entry.inProgress ? (
                        <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                          In Progress
                        </span>
                      ) : (
                        <p className="text-base font-semibold text-gray-600">Completed</p>
                      )}
                    </div>

                    {/* Field of Study Section */}
                    <div className="col-span-2">
                      <h3 className="text-lg font-medium text-gray-800">Field of Study</h3>
                      <p className="font-semibold text-gray-700 mt-2">{entry.fieldOfStudy}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic mt-4">No education details provided.</p>
        )}
      </div>

      {/* Work Experience Section */}
<div>
  <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
    Work Experience
  </h2>
  {resumeData.work && resumeData.work.length > 0 ? (
    <div className="space-y-4">
      {resumeData.work.map((job, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{job.title}</h3>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Employment Period</label>
              <span className="text-sm text-gray-600 mt-1">{job.startDate} - {job.endDate || 'Present'}</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <p className="text-sm font-medium text-gray-700">{job.company}</p>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <p className="text-sm text-gray-600">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 mt-4">No work experience provided.</p>
  )}
</div>

      </div>
  );
};

export default ResumePreview;
