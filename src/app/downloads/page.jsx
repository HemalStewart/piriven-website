'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainNavigation } from '@/components/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu';
import { Download, FileText, Calendar, Users, Folder } from 'lucide-react';
import Link from 'next/link';

// --- Helper function for dynamic card backgrounds ---
// This function generates a consistent, professional gradient class based on a string.
// It ensures that the same document name will always have the same background.
const getGradientClass = (name) => {
  const gradients = [
    'from-red-100 to-yellow-100',
    'from-blue-100 to-purple-100',
    'from-green-100 to-lime-100',
    'from-purple-100 to-indigo-100',
    'from-orange-100 to-yellow-100',
    'from-cyan-100 to-blue-100',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
};

const DownloadsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('Policies');

  // Enhanced data structure with government-style metadata
  const pdfs = {
    Policies: [
      {
        name: 'National Education Policy Framework',
        url: '/pdfs/National_Education_Policy_Framework_Sri_Lanka.pdf',
        size: '1.2MB',
        date: 'March 2024',
        department: 'Policy Division',
        classification: 'Public Document'
      },
      {
        name: 'National Policy And A Comprehensive Framework Of Actions',
        url: '/pdfs/National_Policy_And_A_Comprehensive_Framework_Of_Actions.pdf',
        size: '718.7KB',
        date: 'February 2024',
        department: 'Planning Division',
        classification: 'Public Document'
      },
      {
        name: 'ICT Services Policy of the Ministry of Education – 2011',
        url: '/pdfs/ICT_Services_Policy_of_the_Ministry_of_Education_2011.pdf',
        size: '248.8KB',
        date: 'December 2011',
        department: 'ICT Division',
        classification: 'Public Document'
      },
    ],
    'Planning and Regulation': [
      {
        name: 'Urban Planning Guidelines for School Zones',
        url: '/pdfs/urban_planning_guidelines.pdf',
        size: '950KB',
        date: 'January 2024',
        department: 'Planning Division',
        classification: 'Guidelines'
      },
      {
        name: 'School Construction and Safety Regulations',
        url: '/pdfs/school_safety_regulations.pdf',
        size: '512KB',
        date: 'November 2023',
        department: 'Infrastructure Division',
        classification: 'Regulations'
      },
      {
        name: 'Zonal Education Office Handbook',
        url: '/pdfs/zonal_handbook.pdf',
        size: '1.1MB',
        date: 'October 2023',
        department: 'Administration Division',
        classification: 'Handbook'
      },
    ],
    'Research': [
      {
        name: 'Impact of Digital Learning on Student Performance',
        url: '/pdfs/digital_learning_research.pdf',
        size: '2.4MB',
        date: 'March 2024',
        department: 'Research Division',
        classification: 'Research Report'
      },
      {
        name: 'Report on Teacher Training Effectiveness',
        url: '/pdfs/teacher_training_report.pdf',
        size: '890KB',
        date: 'February 2024',
        department: 'Teacher Education',
        classification: 'Research Report'
      },
    ],
    'Codes of Guidelines and Instructions': [
      {
        name: 'Code of Conduct for School Principals',
        url: '/pdfs/principal_code_of_conduct.pdf',
        size: '480KB',
        date: 'January 2024',
        department: 'HR Division',
        classification: 'Code of Conduct'
      },
      {
        name: 'Financial Instructions for Educational Institutions',
        url: '/pdfs/financial_instructions.pdf',
        size: '775KB',
        date: 'December 2023',
        department: 'Finance Division',
        classification: 'Instructions'
      },
    ],
    'Annual Reports': [
      {
        name: 'Ministry of Education Annual Report 2024',
        url: '/pdfs/annual_report_2024.pdf',
        size: '3.5MB',
        date: 'April 2024',
        department: 'Secretary Office',
        classification: 'Annual Report'
      },
      {
        name: 'Performance Review 2023',
        url: '/pdfs/performance_review_2023.pdf',
        size: '2.1MB',
        date: 'March 2024',
        department: 'Performance Division',
        classification: 'Review Report'
      },
    ],
    'Education Reforms': [
      {
        name: 'Curriculum Reforms 2023-2025',
        url: '/pdfs/curriculum_reforms.pdf',
        size: '1.8MB',
        date: 'February 2024',
        department: 'Curriculum Development',
        classification: 'Reform Document'
      },
      {
        name: 'Higher Education Sector Reforms',
        url: '/pdfs/higher_ed_reforms.pdf',
        size: '990KB',
        date: 'January 2024',
        department: 'Higher Education',
        classification: 'Reform Document'
      },
    ],
    'Right to Information': [
      {
        name: 'Right to Information Act Guidelines',
        url: '/pdfs/rti_act_guidelines.pdf',
        size: '320KB',
        date: 'March 2024',
        department: 'Legal Division',
        classification: 'Guidelines'
      },
      {
        name: 'RTI Request Form & Procedure',
        url: '/pdfs/rti_request_form.pdf',
        size: '150KB',
        date: 'March 2024',
        department: 'Legal Division',
        classification: 'Form'
      },
    ],
  };

  const documents = Object.keys(pdfs);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <MainNavigation />

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-12 flex-grow flex flex-col md:flex-row gap-8">
        {/* Left Side Menu (for larger screens) */}
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Folder className="w-6 h-6 mr-2 text-red-600" />
              Documents
            </h2>
            <nav className="flex flex-col space-y-2">
              {documents.map((doc) => (
                <button
                  key={doc}
                  onClick={() => setSelectedDoc(doc)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedDoc === doc
                      ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-red-700'
                  }`}
                >
                  <span className="flex-grow text-left">{doc}</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    selectedDoc === doc 
                      ? 'bg-red-800 text-yellow-200' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {pdfs[doc]?.length || 0}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Documents Grid Area */}
        <div className="flex-grow">
          {/* Section Header */}
          <div className="text-center md:text-left mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full mb-6">
              <Download className="w-8 h-8 text-red-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedDoc}</h1>
            
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-1 text-red-600" />
                {pdfs[selectedDoc]?.length || 0} Documents
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-red-600" />
                Updated Monthly
              </div>
            </div>
          </div>
          
          {/* Documents Grid */}
          {pdfs[selectedDoc] && pdfs[selectedDoc].length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pdfs[selectedDoc].map((pdf, index) => (
                <div key={pdf.name} className="group bg-white rounded-lg shadow-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-3 border border-gray-200 hover:border-red-200 overflow-hidden">
                  {/* Document Preview - Now using dynamic gradients and an SVG icon */}
                  <div className={`relative h-48 bg-gradient-to-br ${getGradientClass(pdf.name)} flex items-center justify-center overflow-hidden`}>
                    <FileText className="w-24 h-24 text-red-500/50 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      PDF
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {pdf.size}
                    </div>
                  </div>
  
                  {/* Document Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-gray-800 leading-tight group-hover:text-red-700 transition-colors duration-300 text-lg">
                      {pdf.name}
                    </h3>
                    
                    {/* Metadata */}
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                        <span>{pdf.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                        <span>{pdf.department}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gradient-to-r from-red-50 to-yellow-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold border border-red-200">
                          {pdf.classification}
                        </span>
                      </div>
                    </div>
  
                    {/* Download Button */}
                    <Link
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group/btn mt-6"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                      Download PDF
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <FileText className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Documents Available</h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Documents for this category are being prepared. Please check back later for updates.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadsPage;