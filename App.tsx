import React, { useEffect, useRef } from 'react';
import { School, Book, Users, Calendar, Bell, ChevronRight, Phone, Mail, MapPin, Trophy, GraduationCap, Image, Activity } from 'lucide-react';

function useIntersectionObserver(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

function App() {
  const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef);

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Navigation */}
      <nav className="bg-green-700 text-white sticky top-0 z-50 transition-all duration-300 hover:bg-green-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <School className="h-8 w-8 animate-[spin_3s_linear_infinite]" />
            <div>
              <h1 className="text-xl font-bold">MTSN 1</h1>
              <p className="text-sm">Unggul dalam Pendidikan Islam</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            {['Beranda', 'Tentang', 'Akademik', 'Pendaftaran', 'Kontak'].map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className="relative hover:text-green-200 transition-colors duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] group">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
          alt="Gedung Sekolah"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-[fadeInDown_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
              Selamat Datang di MTSN 1
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-[fadeInUp_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
              Membentuk Generasi Berilmu, Berakhlak, dan Berprestasi
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transform hover:translate-x-2 transition-all duration-300 animate-[fadeIn_1s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
              Pelajari Lebih Lanjut <ChevronRight className="ml-2 animate-[bounceRight_1s_infinite]" />
            </button>
          </div>
        </div>
      </div>

      {/* Keunggulan */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">Keunggulan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Book className="h-12 w-12 text-green-600 mb-4" />,
                title: "Pendidikan Berkualitas",
                description: "Kurikulum komprehensif yang mengintegrasikan nilai-nilai Islam dengan pendidikan modern"
              },
              {
                icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
                title: "Guru Berpengalaman",
                description: "Tim pengajar profesional yang berdedikasi untuk kesuksesan siswa"
              },
              {
                icon: <Calendar className="h-12 w-12 text-green-600 mb-4" />,
                title: "Fasilitas Modern",
                description: "Ruang kelas dan sumber belajar berteknologi tinggi"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prestasi */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Prestasi Terkini
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-12 w-12 text-yellow-500" />,
                title: "Juara Umum",
                description: "Olimpiade Sains Tingkat Provinsi 2024"
              },
              {
                icon: <GraduationCap className="h-12 w-12 text-blue-500" />,
                title: "100% Kelulusan",
                description: "dengan 80% siswa diterima di SMA/MA Favorit"
              },
              {
                icon: <Image className="h-12 w-12 text-purple-500" />,
                title: "Juara I",
                description: "Festival Seni Islam Nasional 2024"
              },
              {
                icon: <Activity className="h-12 w-12 text-red-500" />,
                title: "Prestasi Olahraga",
                description: "Juara Futsal & Badminton Tingkat Kota"
              }
            ].map((achievement, index) => (
              <div 
                key={achievement.title}
                className="bg-gray-50 p-6 rounded-lg text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pengumuman */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8 transform hover:translate-x-2 transition-transform duration-300">
            <Bell className="h-6 w-6 text-green-600 mr-2 animate-[ring_4s_ease-in-out_infinite]" />
            <h2 className="text-3xl font-bold">Pengumuman Terbaru</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pendaftaran Tahun Ajaran 2024/2025",
                content: "Pendaftaran siswa baru untuk tahun ajaran 2024/2025 telah dibuka",
                date: "15 Maret 2024"
              },
              {
                title: "Pameran Sains 2024",
                content: "Pameran proyek sains tahunan siswa MTSN 1",
                date: "5 April 2024"
              },
              {
                title: "Pekan Olahraga",
                content: "Kompetisi olahraga antar kelas akan dimulai bulan depan",
                date: "20 Maret 2024"
              },
              {
                title: "Workshop Robotika",
                content: "Workshop pengenalan robotika untuk siswa kelas 7-9",
                date: "12 April 2024"
              }
            ].map((announcement, index) => (
              <div 
                key={announcement.title}
                className="border-l-4 border-green-600 pl-4 hover:border-green-800 transition-colors duration-300 transform hover:translate-x-2 hover:bg-green-50 p-4 rounded-r-lg animate-on-scroll opacity-0 translate-x-8"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="font-semibold mb-2">{announcement.title}</h3>
                <p className="text-gray-600">{announcement.content}</p>
                <p className="text-sm text-gray-500 mt-2">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
              <div className="space-y-2">
                {[
                  { icon: <Phone className="h-4 w-4 mr-2" />, text: "+62 123 456 789" },
                  { icon: <Mail className="h-4 w-4 mr-2" />, text: "info@mtsn1.sch.id" },
                  { icon: <MapPin className="h-4 w-4 mr-2" />, text: "Jl. Pendidikan No. 1" }
                ].map((contact) => (
                  <p key={contact.text} className="flex items-center hover:text-green-200 transition-colors duration-300">
                    {contact.icon} {contact.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                {[
                  "Kalender Akademik",
                  "Portal Siswa",
                  "Portal Orang Tua",
                  "Perpustakaan Digital",
                  "Galeri Kegiatan"
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-green-200 transition-colors duration-300 flex items-center">
                      <ChevronRight className="h-4 w-4 mr-1" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
              <p className="text-sm mb-4">Tetap terhubung dengan kami untuk mendapatkan informasi terbaru.</p>
              <p className="text-sm">Jam Operasional:<br />Senin - Jumat: 07:00 - 15:00<br />Sabtu: 07:00 - 12:00</p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="hover:text-green-200 transition-colors duration-300">
              &copy; 2024 MTSN 1. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;