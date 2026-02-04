import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Briefcase,
  Users,
  Trophy,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
} from "lucide-react";

const Index = () => {
  // Skills data
  const technicalSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "Docker",
    "REST APIs",
    "Tailwind CSS",
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Adaptability",
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2023 - 2027",
      description:
        "Focused on web development, data structures, and software engineering principles.",
    },
    {
      degree: "High School Diploma",
      school: "Modern High School",
      year: "2019 - 2023",
      description:
        "Specialized in STEM subjects with outstanding performance in computer science.",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Task Management App",
      description:
        "A full-stack task management application with real-time updates and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing projects and skills with modern design patterns.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      link: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts and interactive visualizations.",
      technologies: ["React", "API Integration", "Chart.js"],
      link: "#",
      featured: false,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Express", "PostgreSQL", "Stripe"],
      link: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-200">
                Welcome to My Portfolio
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm a{" "}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                Developer & Designer
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              I create beautiful, functional web experiences. Currently exploring full-stack
              development and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                I'm a first-year student passionate about building meaningful digital experiences.
                With a strong foundation in web development, I'm constantly learning and improving
                my craft.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I believe in clean code, user-centered design, and the power of technology to solve
                real-world problems. When I'm not coding, you can find me exploring new frameworks,
                contributing to open source, or working on personal projects.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} /> GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-600 to-indigo-600 rounded-2xl h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <Code2 size={80} className="mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-sky-600 rounded-lg p-3">
                  <Code2 size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-sky-100 text-sky-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 rounded-lg p-3">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-sky-600 rounded-lg p-3 flex-shrink-0">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                    <p className="text-sky-600 font-semibold mb-1">{edu.school}</p>
                    <p className="text-sm text-slate-600 mb-3">{edu.year}</p>
                    <p className="text-slate-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
                  project.featured
                    ? "md:col-span-1 bg-gradient-to-br from-sky-50 to-indigo-50 border-sky-200"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    {project.featured && <Star size={20} className="text-sky-600 flex-shrink-0 mt-1" />}
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a href={project.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 group hover:bg-sky-600 hover:text-white hover:border-sky-600"
                    >
                      View Project <ExternalLink size={16} />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <a href="mailto:hello@example.com">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
                <Mail size={32} className="text-sky-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 text-sm">hello@example.com</p>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
                <Linkedin size={32} className="text-sky-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
                <p className="text-slate-600 text-sm">Connect with me</p>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
                <Github size={32} className="text-sky-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
                <p className="text-slate-600 text-sm">View my repositories</p>
              </div>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-white"
            onClick={() => window.location.href = "mailto:hello@example.com"}
          >
            Send me an Email
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
