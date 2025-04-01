import { useState } from 'react';
import { Search, ChevronRight, BookOpen, X } from 'lucide-react';

interface Program {
  level: string;
  name: string;
  faculty: string;
}

const programs: Program[] = [
  // Science Engineering and Health
  { level: "Diploma", name: "Diploma in Information Communication Technology", faculty: "Science Engineering and Health" },
  { level: "Undergraduate", name: "Bachelor of Science in Applied Computer Science", faculty: "Science Engineering and Health" },
  { level: "Undergraduate", name: "Bachelor of Science in Environmental Health", faculty: "Science Engineering and Health" },
  { level: "Undergraduate", name: "Bachelor of Science in Acturial Science", faculty: "Science Engineering and Health" },
  { level: "Undergraduate", name: "Bachelor of Science in Biomedical Science", faculty: "Science Engineering and Health" },
  
  // ODeL
  { level: "Masters", name: "Master of Education in Leadership and Policy Studies", faculty: "ODeL" },
  { level: "Masters", name: "Master of Science in Research Methodology (Coming Soon)", faculty: "ODeL" },
  { level: "Masters", name: "Master of Public Health (Coming Soon)", faculty: "ODeL" },
  { level: "Masters", name: "Master of Laws (LL.M) - (Coming Soon)", faculty: "ODeL" },
  
  // Nursing
  { level: "Undergraduate", name: "Bachelor of Science (Bsc) Nursing", faculty: "Nursing" },
  { level: "Masters", name: "MSc. Nursing Education", faculty: "Nursing" },
  
  // Law
  { level: "Undergraduate", name: "Bachelor of Law (LL.B)", faculty: "Law" },
  
  // DLPDI
  { level: "Certificate", name: "Certificate in Information and Communication Technology", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Peace and International Relations", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Counseling and Psychology", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Media Studies", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Business Management", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Music", faculty: "DLPDI" },
  { level: "Certificate", name: "Certificate in Community Development (CCD)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Association of Chartered Certified Accountants (ACCA)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Chartered Institute of Procurement & Supply (CIPS)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Certified Public Accountants (CPA)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Certified Investment & Financial Analysts (CIFA)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Certified Secretaries(CS)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Certificate in Accounting & Management Skills (CAMS)", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Accounting Technicians Diploma (ATD)", faculty: "DLPDI" },
  { level: "Short Courses", name: "Christian Ministries and Training (DLPDI-CMT)", faculty: "DLPDI" },
  { level: "Short Courses", name: "DLPDI-Executive Education (DLPDI-exEDU)", faculty: "DLPDI" },
  { level: "Diploma(DIDS)", name: "Diploma in Disability Studies", faculty: "DLPDI" },
  { level: "Certificate(DIDS)", name: "Practitioners Certificate in Disability Studies", faculty: "DLPDI" },
  { level: "Professional Courses", name: "Chartered Institute of Marketing (CIM)", faculty: "DLPDI" },
  
  // Communication
  { level: "Diploma", name: "Music, Communication", faculty: "Communication" },
  { level: "Undergraduate", name: "Barchelor of Arts", faculty: "Communication" },
  { level: "Masters", name: "M.A Communication", faculty: "Communication" },
  { level: "PhD", name: "PhD Communication", faculty: "Communication" },
  
  // Business & Economics
  { level: "Diploma", name: "Entrepreneurship", faculty: "Buisiness & Economics" },
  { level: "Diploma", name: "Marketing", faculty: "Buisiness & Economics" },
  { level: "Diploma", name: "Purchasing and Business Logistics", faculty: "Buisiness & Economics" },
  { level: "Diploma", name: "Human Resource Management", faculty: "Buisiness & Economics" },
  { level: "Diploma", name: "Business Administration & Management", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "B.A Accounting", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "B.A Marketing", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "B.A Purchasing and Business Logistics", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "B.A Management Information Systems", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "B.A Business Administration & Management", faculty: "Buisiness & Economics" },
  { level: "Undergraduate", name: "Bachelor of Science in Economics", faculty: "Buisiness & Economics" },
  { level: "Masters", name: "Master of Business Administration (MBA)", faculty: "Buisiness & Economics" },
  { level: "Masters", name: "MSc. Economics", faculty: "Buisiness & Economics" },
  { level: "PhD", name: "PhD in Business Administration & Management", faculty: "Buisiness & Economics" },
  
  // Arts & Social Sciences
  { level: "Diploma", name: "Diploma in International Relations", faculty: "Arts & Social Sciences" },
  { level: "Diploma", name: "Diploma in Theology", faculty: "Arts & Social Sciences" },
  { level: "Diploma", name: "Diploma in Peace and Conflict Transformation", faculty: "Arts & Social Sciences" },
  { level: "Undergraduate", name: "Bachelor of Theology", faculty: "Arts & Social Sciences" },
  { level: "Undergraduate", name: "Bachelor of Education (B.Ed Sciences)", faculty: "Arts & Social Sciences" },
  { level: "Undergraduate", name: "Bachelor of Education (B.Ed Arts)", faculty: "Arts & Social Sciences" },
  { level: "Undergraduate", name: "Bachelor of Arts in Peace & Conﬂict Transformation", faculty: "Arts & Social Sciences" },
  { level: "Masters", name: "Master of Arts Christian Ministries", faculty: "Arts & Social Sciences" },
  { level: "Masters", name: "Master of Arts in Diplomacy, Development and International Security", faculty: "Arts & Social Sciences" },
  { level: "PhD", name: "Post-Graduate Diploma in Education – PGDE", faculty: "Arts & Social Sciences" },
  
  // Applied Human Sciences
  { level: "Diploma", name: "Diploma in Counselling", faculty: "Applied Human Sciences" },
  { level: "Diploma", name: "Diploma in Community Development", faculty: "Applied Human Sciences" },
  { level: "Diploma", name: "Diploma in Agriculture", faculty: "Applied Human Sciences" },
  { level: "Undergraduate", name: "Bachelor of Arts (BA) - Psychology and Counselling", faculty: "Applied Human Sciences" },
  { level: "Undergraduate", name: "Bachelor of Arts Social Work", faculty: "Applied Human Sciences" },
  { level: "Undergraduate", name: "Bachelor of Arts Monitoring and Evaluation", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Masters of Arts in Counselling Psychology", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Master of Arts in Monitoring and Evaluation", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Masters of Arts in Child Development", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Masters in Clinical Psychology", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Master of Arts in Community Development", faculty: "Applied Human Sciences" },
  { level: "Masters", name: "Postgraduate Diploma in Child Development (PGDCD)", faculty: "Applied Human Sciences" },
  { level: "PhD", name: "PhD in Clinical Psychology", faculty: "Applied Human Sciences" },
  { level: "PhD", name: "PhD in Development Studies", faculty: "Applied Human Sciences" }
];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedFaculty, setSelectedFaculty] = useState('All');
  const [modalProgram, setModalProgram] = useState<Program | null>(null);

  const levels = ['All', ...Array.from(new Set(programs.map(p => p.level)))];
  const faculties = ['All', ...Array.from(new Set(programs.map(p => p.faculty)))];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.faculty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
    const matchesFaculty = selectedFaculty === 'All' || program.faculty === selectedFaculty;
    return matchesSearch && matchesLevel && matchesFaculty;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
        <p className="text-xl text-gray-600">Discover your path to excellence with our diverse range of academic programs</p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm rounded-md"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm rounded-md"
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
          >
            {faculties.map(faculty => (
              <option key={faculty} value={faculty}>{faculty}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {program.level}
                </span>
                <span className="text-sm text-gray-500">{program.faculty}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
              <button
                onClick={() => setModalProgram(program)}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Details <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{modalProgram.name}</h2>
                <p className="text-gray-600">{modalProgram.faculty}</p>
              </div>
              <button
                onClick={() => setModalProgram(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">{modalProgram.level}</span>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Program Overview</h3>
                <p className="text-gray-600">
                  This program offers comprehensive education in {modalProgram.name.toLowerCase()}, 
                  preparing students for successful careers in their chosen field.
                </p>
              </div>
              <div className="border-t pt-4">
                <button
                  onClick={() => {
                    setModalProgram(null);
                    // Add application logic here
                  }}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
