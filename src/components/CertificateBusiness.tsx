import { ChevronRight, CheckCircle2, BarChart3, Briefcase, Target, LineChart, PieChart, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const assessmentDetails = [
  {
    type: 'Skill-based Courses',
    breakdown: [
      { name: 'Practical Work', percentage: 75 },
      { name: 'Theoretical Assignments', percentage: 25 }
    ]
  },
  {
    type: 'Conceptual & Skills Courses',
    breakdown: [
      { name: 'Continuous Assessment', percentage: 60 },
      { name: 'Final Examination', percentage: 40 }
    ]
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to high-quality business education'
  },
  {
    title: 'Transformation',
    description: 'Developing future business leaders'
  },
  {
    title: 'Servant Leadership',
    description: 'Creating ethical business professionals'
  }
];

const programHighlights = [
  {
    icon: BarChart3,
    title: 'Business Fundamentals',
    description: 'Core principles of business management'
  },
  {
    icon: Target,
    title: 'Strategic Thinking',
    description: 'Develop analytical and decision-making skills'
  },
  {
    icon: Briefcase,
    title: 'Practical Application',
    description: 'Real-world business scenarios and cases'
  }
];

const CertificateBusiness = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80"
            alt="Business Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certificate in Business Management
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Start your journey to business excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Course</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  There are a number of high school graduates who do not meet the entry requirements to join diploma programs. This certificate program is meant to provide an avenue through which such students can start their academic journey.
                </p>
                <p className="text-gray-600">
                  The program focuses on developing fundamental business management skills and knowledge, preparing students for further studies in business-related fields.
                </p>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                <p className="text-gray-600">
                  In addition to the University requirements for admission, the applicant must fulfil the minimum entry requirement for this program which is a D+ (Plus) in KCSE or its equivalent.
                </p>
              </div>
            </div>

            {/* Assessment */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Structure</h2>
              <div className="space-y-6">
                {assessmentDetails.map((detail, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">{detail.type}</h3>
                    <div className="space-y-3">
                      {detail.breakdown.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-600">{item.name}</span>
                          <div className="flex items-center">
                            <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                              <div
                                className="h-2 bg-[#00BFFF] rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                            <span className="text-[#00BFFF] font-semibold">{item.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Program Benefits */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <LineChart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Business Skills</h4>
                    <p className="text-sm text-gray-600">Develop essential management capabilities</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <PieChart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Practical Learning</h4>
                    <p className="text-sm text-gray-600">Hands-on business experience</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Path to advanced business studies</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                      <ChevronRight className="w-4 h-4 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey in Business Management at Daystar University.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateBusiness;
