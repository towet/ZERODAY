import { useState } from 'react';
import { Search, ChevronRight, BookOpen, X, GraduationCap, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navigate = useNavigate();

  const levels = ['All', ...Array.from(new Set(programs.map(p => p.level)))];
  const faculties = ['All', ...Array.from(new Set(programs.map(p => p.faculty)))];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.faculty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
    const matchesFaculty = selectedFaculty === 'All' || program.faculty === selectedFaculty;
    return matchesSearch && matchesLevel && matchesFaculty;
  });

  const handleProgramClick = (program: Program) => {
    if (program.name === "Bachelor of Law (LL.B)") {
      navigate('/law-program');
    } else if (program.name === "Bachelor of Science in Applied Computer Science") {
      navigate('/computer-science');
    } else {
      setModalProgram(program);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Academic Programs</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Discover your path to excellence with our comprehensive range of academic programs designed to shape future leaders
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="stats bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-lg w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm md:text-base">{programs.length}+ Programs</span>
                </div>
              </div>
              <div className="stats bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-lg w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm md:text-base">Expert Faculty</span>
                </div>
              </div>
              <div className="stats bg-white/10 backdrop-blur-lg p-3 md:p-4 rounded-lg w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm md:text-base">Flexible Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#00BFFF]" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] text-sm md:text-base"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              className="md:hidden bg-gray-100 px-4 py-2 rounded-lg text-[#00BFFF] hover:bg-gray-200 transition-colors"
            >
              Filters {isFilterVisible ? '↑' : '↓'}
            </button>
            <div className={`flex-col md:flex-row gap-4 ${isFilterVisible ? 'flex' : 'hidden md:flex'}`}>
              <select
                className="block w-full md:w-48 pl-3 pr-10 py-2 text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-[#00BFFF] focus:border-[#00BFFF] rounded-lg"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <select
                className="block w-full md:w-48 pl-3 pr-10 py-2 text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-[#00BFFF] focus:border-[#00BFFF] rounded-lg"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                {faculties.map(faculty => (
                  <option key={faculty} value={faculty}>{faculty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-[#00BFFF] text-sm md:text-base">
          Showing {filteredPrograms.length} programs
          {selectedLevel !== 'All' && ` in ${selectedLevel}`}
          {selectedFaculty !== 'All' && ` from ${selectedFaculty}`}
        </div>

        {/* Programs Grid */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {filteredPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-[#00BFFF] text-white">
                    {program.level}
                  </span>
                  <span className="text-xs md:text-sm text-[#00BFFF]">{program.faculty}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#00BFFF] mb-4 line-clamp-2 min-h-[48px] md:min-h-[56px]">{program.name}</h3>
                <button
                  onClick={() => handleProgramClick(program)}
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-[#00BFFF] rounded-lg text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  View Details <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-4 md:p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalProgram(null)}
              className="absolute top-4 right-4 text-[#00BFFF] hover:text-[#0099CC] focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-[#00BFFF] text-white mb-2">
                {modalProgram.level}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#00BFFF] mb-2">{modalProgram.name}</h2>
              <p className="text-[#00BFFF] text-sm md:text-base">{modalProgram.faculty}</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[#00BFFF]">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm md:text-base">Duration: 3-4 years (Full-time)</span>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold text-[#00BFFF] mb-2 text-base md:text-lg">Program Overview</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  This program offers comprehensive education in {modalProgram.name.toLowerCase()}, 
                  preparing students for successful careers in their chosen field. Our experienced faculty
                  and state-of-the-art facilities ensure a high-quality learning experience.
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold text-[#00BFFF] mb-2 text-base md:text-lg">Career Opportunities</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Graduates of this program have excellent career prospects in various sectors, including
                  research, industry, academia, and consultancy.
                </p>
              </div>
              <div className="border-t pt-4">
                <button
                  onClick={() => {
                    setModalProgram(null);
                    // Add application logic here
                  }}
                  className="w-full bg-[#00BFFF] text-white py-3 px-4 rounded-lg hover:bg-[#0099CC] transition-colors duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  Apply Now <ChevronRight className="h-4 w-4 ml-1" />
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
