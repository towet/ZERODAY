import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Search, Globe, ChevronDown, Play, Download, MessageCircle, GraduationCap, BookOpen, ScrollText, Award, AlignCenterVertical as Certificate, ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Programs from './components/Programs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const [activePostIndex, setActivePostIndex] = useState(0);

  const navigationItems = ['Programs', 'Admissions', 'Campus Life', 'About'];
  const programCategories = ['PhD', 'Masters', 'Bachelors', 'Diploma', 'Certificate'];
  
  const featuredPosts = [
    {
      id: 1,
      title: "Vice Chancellor meets with Congolese students following conflict in DRC",
      date: "FEB 10, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Daystar University poised to develop a new Strategic Plan 2025-2030",
      date: "FEB 3, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Internal Quality Auditors receive certificates as Daystar University prepares for ISO 9001:2015 certification",
      date: "JAN 23, 2025",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const academicPrograms = [
    {
      name: 'PhD Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Masters Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Bachelor Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: ScrollText,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Diploma Courses',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Certificate Programs',
      description: 'Discover our wide range of programs designed to meet your academic goals.',
      icon: Certificate,
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handlePrevPost = () => {
    setActivePostIndex((prev) => (prev > 0 ? prev - 1 : featuredPosts.length - 1));
  };

  const handleNextPost = () => {
    setActivePostIndex((prev) => (prev < featuredPosts.length - 1 ? prev + 1 : 0));
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Sticky Navigation */}
        <nav className="fixed w-full bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-[#00BFFF]">Daystar</Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link 
                    key={item} 
                    to={item.toLowerCase()} 
                    className="text-gray-700 hover:text-[#00BFFF] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <button className="bg-[#00BFFF] text-white px-6 py-2 rounded-full hover:bg-[#0099CC] transition-colors">
                  Apply Now
                </button>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-[#00BFFF]">
                    <Search size={20} />
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-[#00BFFF]">
                    <Globe size={20} />
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
            <div className="px-4 py-2 space-y-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item} 
                  to={item.toLowerCase()} 
                  className="block text-gray-700 hover:text-[#00BFFF]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="w-full bg-[#00BFFF] text-white px-6 py-2 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/programs" element={<Programs />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="pt-16">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="h-[600px]"
                >
                  {[
                    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
                    'https://images.unsplash.com/photo-1562774053-701939374585',
                    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
                  ].map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                              Shape Your Future at Daystar University
                            </h1>
                            <p className="text-xl md:text-2xl mb-8">May 2025 Intake Now Open</p>
                            <button className="bg-[#00BFFF] text-white px-8 py-3 rounded-full text-lg hover:bg-[#0099CC] transform hover:scale-105 transition-all">
                              Start Application
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
                  <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                    {programCategories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* About Us Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                        alt="Daystar University Campus"
                        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-[#00BFFF] opacity-10 rounded-lg"></div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-6">About Daystar University</h2>
                      <p className="text-lg text-gray-600 mb-8">
                        Daystar University is a Christ-centred non-denominational institution of higher learning which exists to equip Christian servant leaders for the transformation of church and society. Founded in Bulawayo, Zimbabwe, as Daystar Publications in 1964, the institution was moved to Kenya in 1971 and registered as Daystar Communications, a non-profit organization in 1973 offering a five-week International Institute for Christian Communication (IICC) course.
                      </p>
                      <button className="bg-[#00BFFF] text-white px-6 py-3 rounded-full hover:bg-[#0099CC] transition-colors">
                        Learn More About Us
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features Section */}
              <section className="py-20 bg-white" ref={statsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                      { value: 30, label: 'Nationalities' },
                      { value: 7000, label: 'Enrolled Students' },
                      { value: 8, label: 'Academic Schools' },
                      { value: 500, label: 'International Students' },
                    ].map((stat, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-[#00BFFF] mb-2">
                          {statsInView && (
                            <CountUp end={stat.value} suffix={stat.value === 30 ? '+' : '+'} duration={2.5} />
                          )}
                        </div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Academic Programs */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center mb-12">Academic Programmes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {academicPrograms.map((program) => (
                      <div key={program.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-48">
                          <img
                            src={program.image}
                            alt={program.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                          <program.icon className="absolute top-4 right-4 w-8 h-8 text-white" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                          <p className="text-gray-600 mb-6">{program.description}</p>
                          <a href="#" className="text-[#00BFFF] font-semibold hover:text-[#0099CC] transition-colors inline-flex items-center">
                            Learn more <ChevronDown className="ml-2 w-4 h-4 transform rotate-[-90deg]" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Featured Posts Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-[#00BFFF]">Featured Posts</h2>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={handlePrevPost}
                        className="p-2 rounded-full border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors"
                      >
                        <ArrowLeft size={24} />
                      </button>
                      <button 
                        onClick={handleNextPost}
                        className="p-2 rounded-full border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors"
                      >
                        <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative group">
                      <img
                        src={featuredPosts[activePostIndex].image}
                        alt={featuredPosts[activePostIndex].title}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center space-x-2 text-white mb-2">
                          <Calendar size={16} />
                          <span className="text-sm">{featuredPosts[activePostIndex].date}</span>
                          <span className="px-2 py-1 bg-[#00BFFF] rounded-full text-xs">
                            {featuredPosts[activePostIndex].category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {featuredPosts[activePostIndex].title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {featuredPosts.map((post, index) => (
                        <div
                          key={post.id}
                          className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                            index === activePostIndex
                              ? 'bg-[#00BFFF] text-white shadow-lg transform scale-105'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                          onClick={() => setActivePostIndex(index)}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar size={16} />
                            <span className="text-sm">{post.date}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              index === activePostIndex ? 'bg-white text-[#00BFFF]' : 'bg-[#00BFFF] text-white'
                            }`}>
                              {post.category}
                            </span>
                          </div>
                          <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <a
                      href="#"
                      className="inline-flex items-center text-[#00BFFF] font-semibold hover:text-[#0099CC] transition-colors"
                    >
                      Read More Stories
                      <ArrowRight className="ml-2" size={20} />
                    </a>
                  </div>
                </div>
              </section>

              {/* Call-to-Action */}
              <section className="py-20 bg-[#00BFFF] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold mb-8">Begin Your Journey at Daystar</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                      <Play size={20} className="mr-2" /> Virtual Tour
                    </button>
                    <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                      <Download size={20} className="mr-2" /> Download Prospectus
                    </button>
                    <button className="bg-white text-[#00BFFF] px-6 py-3 rounded-full flex items-center">
                      <MessageCircle size={20} className="mr-2" /> Book Consultation
                    </button>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                      <p>Nairobi Campus</p>
                      <p>P.O. Box 44400-00100</p>
                      <p>Nairobi, Kenya</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                        {navigationItems.map((item) => (
                          <li key={item}>
                            <a href="#" className="hover:text-[#00BFFF] transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Connect</h3>
                      <div className="flex space-x-4">
                        {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                          <a
                            key={social}
                            href="#"
                            className="hover:text-[#00BFFF] transition-colors"
                          >
                            {social}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                      <form className="space-y-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 rounded-full text-gray-900"
                        />
                        <button className="bg-[#00BFFF] text-white px-6 py-2 rounded-full w-full hover:bg-[#0099CC] transition-colors">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} Daystar University. All rights reserved.</p>
                  </div>
                </div>
              </footer>

              {/* Chat Bot */}
              <button className="fixed bottom-6 right-6 bg-[#00BFFF] text-white p-4 rounded-full shadow-lg hover:bg-[#0099CC] transition-colors">
                <MessageCircle size={24} />
              </button>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;