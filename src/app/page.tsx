"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Page() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);
const [activeProject, setActiveProject] = useState<any>(null);

  const pink1 = "#FFD1DC";
  const pink2 = "#FFB6C1";
  const gold = "#f9d394ff";
const projects = [
  // ================= FULL STACK =================
  {
    id: "pos-premium",
    title: "POS Premium – Smart Retail Billing System",
    type: "Full Stack",
    desc:
      "Mobile-based POS system with inventory, billing, analytics, Razorpay payments, WhatsApp invoicing and client branding.",
    features: [
      "Mobile POS with app notifications",
      "Dashboard with daily & monthly sales",
      "Sales graphs (daily & monthly)",
      "Total products counter & availability pie chart",
      "Workers / staff management",
      "Inventory: add, edit, update, soft delete",
      "Auto barcode generation",
      "Separate barcode print page",
      "Billing via product search, barcode & mobile scanner",
      "Cash & Razorpay (UPI / QR) payments",
      "WhatsApp bill sharing",
      "Reports: date & month filters",
      "Download all bills",
      "Refund option",
      "Client register with brand logo, name & theme color",
    ],
    tech: ["React", "Node.js", "Express", "MySQL"],
    live: "https://gramam-pos.vercel.app",
  },
 {
  id: "cafepay",
  title: "CafePay – Food Ordering & Partner Platform",
  type: "Full Stack",
  desc:
    "Enterprise-ready multi-vendor food ordering and partner management platform with advanced admin controls, analytics, compliance workflows and automated settlements.",
  features: [
    // Customer Side
    "Customer food ordering with real-time order tracking",
    "Search & filter restaurants, categories and products",
    "Cart, checkout & order history",
    "Order status notifications (placed, preparing, delivered)",

    // Vendor Side
    "Vendor onboarding & approval workflow",
    "Vendor dashboard with daily & monthly sales insights",
    "Menu, category & product management",
    "Stock availability & price control",
    "Vendor-wise order tracking",

    // Admin Panel
    "Centralized admin panel for full platform control",
    "Total users, vendors & orders overview",
    "Top-performing vendors analytics",
    "Recent orders & live order monitoring",
    "Vendor performance comparison reports",

    // Payments & Partnerships
    "Commission-based partnership system",
    "Automated payout & settlement calculations",
    "Payment tracking & reconciliation",
    "Partner-wise revenue reports",

    // Reports & Analytics
    "Daily, weekly & monthly sales reports",
    "Revenue growth & platform performance analytics",
    "Vendor-wise & product-wise sales analysis",
    "Downloadable reports for business review",

    // Quality & Compliance
    "Quality control workflows",
    "QMS (Quality Management System) integration",
    "Food safety & compliance tracking",
    "Audit-ready compliance records",

    // Security & Scalability
    "Role-based access control (Admin / Vendor)",
    "Secure authentication & authorization",
    "Scalable backend architecture",
    "API-ready for future mobile app integration",
  ],
  tech: ["React", "Node.js", "Express", "MySQL"],
  live: "https://mycafe.exaatto.in",
}
,
  {
    id: "pixelcare",
    title: "PixelCare – Computer Service Platform",
    type: "Full Stack",
    desc:
      "Computer service & accessories website with instant WhatsApp enquiry and clean SEO-friendly UI.",
    features: [
  "Computer & laptop service listings",
  "Accessories & spare parts showcase",
  "Instant WhatsApp enquiry for services & products",
  "Service request with issue description",
  "Responsive design for mobile, tablet & desktop",
  "SEO-friendly static pages",
  "Location-based service availability",
  "Quick call & WhatsApp CTA buttons",
  "Service highlights & pricing info",
  "Customer trust sections (why choose us)",
  "Fast-loading performance optimized UI",
  "Clean modern UI with minimal navigation",
],
    tech: ["Next.js"],
       live: "https://pixelcare.vercel.app",
  },
];


  return (
    <main
      className={`min-h-screen relative font-sans ${
        dark ? "bg-[#1a1a1a] text-white" : "text-[#402B2B]"
      }`}
      style={{
        background: dark
          ? "#1a1a1a"
          : `linear-gradient(120deg, ${pink1} 60%, ${pink2} 40%)`,
      }}
    >
      {/* ===== Background glow / shimmer ===== */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.5), transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 animate-shimmer opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>
{/* ===== Navbar (Upgraded Pink Glass UI) ===== */}
<header
  className="fixed top-0 left-0 right-0 z-50 border-b border-pink-200/60 backdrop-blur-lg bg-white/30"
>
  <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    {/* Logo / Name */}
    <span
      className="font-extrabold text-xl tracking-wide bg-gradient-to-r from-[#ff99c8] via-[#ff66a3] to-[#ff3385] bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff8fab]"
    >
      Aiswariya V
    </span>

    {/* Nav Links */}
    <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
      {[
        "About",
        "Skills",
        "Projects",
        "Internships",
        "Certifications",
        "Tools",
        "Contact",
      ].map((x) => (
        <a
          key={x}
          href={`#${x.toLowerCase()}`}
          className="relative group text-[#402B2B]/90 hover:text-[#ff3385] transition"
        >
          {x}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#ffb6c1] to-[#ff69b4] transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}

      {/* Theme Toggle */}
      <button
        onClick={toggle}
        className="px-3 py-1 rounded-md border border-pink-300/60 text-xs text-[#402B2B] hover:bg-pink-100/40 hover:shadow-[0_0_8px_#ffb6c1] transition"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  </nav>

  {/* Subtle glowing line under navbar */}
  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ffb6c1]/70 to-transparent animate-shine" />
</header>

{/* ===== HERO (Unified Soft Pastel Version) ===== */}
<section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[linear-gradient(120deg,#fff0f6_65%,#ffd0dc_35%)]">
  {/* Soft blur light orbs for depth */}
  <div
    className="absolute w-[28rem] h-[28rem] rounded-full blur-3xl top-10 left-10 opacity-25"
    style={{ background: "radial-gradient(circle,#fff,#ffd6e8,transparent)" }}
  />
  <div
    className="absolute w-[26rem] h-[26rem] rounded-full blur-3xl bottom-10 right-10 opacity-25"
    style={{ background: "radial-gradient(circle,#fff,#ffbfd2,transparent)" }}
  />

  {/* Center content */}
  <div className="relative z-10 text-center px-6">
<h1
  className="font-black uppercase leading-[0.9] tracking-tight text-[#ec9ab5] select-none"
  style={{
    fontSize: "clamp(70px, 16vw, 230px)",
    textShadow: `
      0 0 20px rgba(255, 182, 193, 0.4),
      0 0 40px rgba(255, 192, 203, 0.25)
    `,
  }}
>
  DEVELOPER
</h1>

<p className="mt-6 text-lg sm:text-xl font-medium tracking-wide text-[#b23a6f] opacity-95">
  Full Stack Developer focused on building reliable, user-friendly web applications
</p>


   {/* Buttons — Soft Pastel Harmony */}  
<div className="mt-10 flex flex-wrap justify-center gap-5">
  {/* Projects */}
  <a
    href="#projects"
    className="px-8 py-2.5 rounded-lg font-semibold text-[#fff0f4] bg-[#e46b99] hover:bg-[#d85a8b] shadow-[0_4px_15px_rgba(228,107,153,0.3)] hover:shadow-[0_6px_18px_rgba(228,107,153,0.45)] hover:-translate-y-1 transition-all duration-300"
  >
    View Projects
  </a>

  {/* About */}
  <a
    href="#about"
    className="px-8 py-2.5 rounded-lg font-semibold text-[#e46b99] bg-white hover:bg-[#fff5f8] border border-[#e46b99]/50 shadow-[0_4px_12px_rgba(228,107,153,0.2)] hover:shadow-[0_6px_16px_rgba(228,107,153,0.3)] hover:-translate-y-1 transition-all duration-300"
  >
    About Me
  </a>

  {/* Resume */}
 <a
  href="/AiswariyaFullstackDeveloper.pdf"
  download
  className="px-8 py-2.5 rounded-lg font-semibold text-white bg-[#d85a8b]
             hover:bg-[#c74d7c] shadow-[0_4px_15px_rgba(216,90,139,0.35)]
             hover:shadow-[0_6px_18px_rgba(216,90,139,0.45)]
             hover:-translate-y-1 transition-all duration-300"
>
   Resume
</a>

</div>

  </div>
</section>

{/* ===== ABOUT SECTION ===== */}
<Section id="about" title="" color={pink2}>
  <div className="max-w-5xl mx-auto px-6 md:px-12 text-[#4b0e2e] space-y-12 animate-fade-in">

    {/* ===== INTRO ===== */}
    <div className="text-center space-y-4">
      <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#d63384] via-[#ff7bac] to-[#ffb6d5] bg-clip-text text-transparent">
        Building with Code, Design & Purpose
      </h3>
      <p className="text-base opacity-90 max-w-3xl mx-auto leading-relaxed">
        I’m <strong>Aiswariya</strong>, a Full Stack Developer who enjoys building
        clean, reliable, and user-friendly web applications.
        I focus on writing maintainable code and creating practical solutions
        that work well in real-world scenarios.
      </p>
    </div>

    {/* ===== FOUR EQUAL CARDS ===== */}
    <div className="grid md:grid-cols-2 gap-8">

      {/*  Education */}
      <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_20px_rgba(255,182,193,0.25)] hover:shadow-[0_0_22px_#ffb6d5aa] transition">
        <h4 className="text-lg font-semibold text-[#b12b6f] mb-2">
           Education
        </h4>
        <p className="text-sm opacity-90 leading-relaxed">
          Graduated in <strong>2024</strong> from
          <strong> Indra Ganesan College of Engineering</strong>.
          Built strong fundamentals in programming, data handling,
          and full stack development concepts.
        </p>
      </div>

      {/*  MERN Certification */}
      <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_20px_rgba(255,182,193,0.25)] hover:shadow-[0_0_22px_#ffb6d5aa] transition">
        <h4 className="text-lg font-semibold text-[#b12b6f] mb-2">
           MERN Stack Certification
        </h4>
        <p className="text-sm opacity-90 leading-relaxed">
          Completed a <strong>MERN Stack Development program</strong> and earned a
          <strong> NASSCOM Certification</strong> with
          <strong> Gold Category (79%)</strong>.
          Gained hands-on experience in React, Node.js, Express,
          MongoDB, and REST API integration.
        </p>
      </div>

      {/*  Kriyatec Internship */}
      <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_20px_rgba(255,182,193,0.25)] hover:shadow-[0_0_22px_#ffb6d5aa] transition">
        <h4 className="text-lg font-semibold text-[#b12b6f] mb-2">
           Internship — Kriyatec IT Systems
        </h4>
        <p className="text-sm opacity-90 leading-relaxed">
          Worked with modern frameworks like <strong>Angular</strong>,
          <strong> Node.js</strong>, <strong>Fastify</strong>,
          and <strong>NestJS</strong>.
          Focused on API development, modular architecture,
          MongoDB integration, and Swagger documentation.
        </p>
      </div>

      {/* Logic Technologies */}
      <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_20px_rgba(255,182,193,0.25)] hover:shadow-[0_0_22px_#ffb6d5aa] transition">
        <h4 className="text-lg font-semibold text-[#b12b6f] mb-2">
           Logic Technologies Pvt. Ltd.
        </h4>
        <p className="text-sm opacity-90 leading-relaxed">
          Currently working as a <strong>Full Stack Developer</strong>
          using <strong>React</strong>, <strong>Node.js</strong>,
          <strong> Express</strong>, and <strong>MySQL</strong>.
          Involved in dashboard development, backend integration,
          feature implementation, and performance optimization.
        </p>
      </div>

    </div>

    {/* ===== CLOSING LINE ===== */}
    <div className="text-center pt-6">
      <p className="text-base opacity-90 max-w-3xl mx-auto">
        I’m actively seeking a <strong>full-time development role</strong>
        where I can contribute, learn, and build meaningful products
        alongside a collaborative team.
      </p>
    </div>

  </div>
</Section>


{/* ===== SKILLS & TOOLS SECTION ===== */}
<Section id="skills-tools" title="Skills & Tools" color={pink2}>
  <div className="max-w-6xl mx-auto px-6 space-y-10">

    {/* ===== SKILLS SLIDER ===== */}
    <div>
      <h3 className="text-lg font-semibold text-[#b12b6f] mb-4 text-center">
         Development Skills
      </h3>
      <div className="flex gap-6 animate-slide-left overflow-hidden">
        {[
          "HTML5",
          "CSS3",
          "Bootstrap",
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Next.js",
          "Node.js",
          "Express.js",
          "Nest.js",
          "Fastify",
          "MySQL",
          "Swagger",
          "Nodemon",
          "Git",
        ].map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 border border-white/40 rounded-xl bg-white/30 backdrop-blur-sm text-sm font-medium shadow-[0_0_15px_rgba(255,182,193,0.25)] hover:shadow-[0_0_20px_#ffb6d5] transition"
          >
            {skill}
          </div>
        ))}
        {/* duplicate for seamless loop */}
        {[
          "HTML5",
          "CSS3",
          "Bootstrap",
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Next.js",
          "Node.js",
          "Express.js",
          "Nest.js",
          "Fastify",
          "MySQL",
          "Swagger",
          "Nodemon",
          "Git",
        ].map((skill, i) => (
          <div
            key={`${skill}-2-${i}`}
            className="px-6 py-3 border border-white/40 rounded-xl bg-white/30 backdrop-blur-sm text-sm font-medium shadow-[0_0_15px_rgba(255,182,193,0.25)]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* ===== TOOLS SLIDER ===== */}
    <div>
      <h3 className="text-lg font-semibold text-[#b12b6f] mb-4 text-center">
         Tools & Platforms
      </h3>
      <div className="flex gap-6 animate-slide-right overflow-hidden">
        {[
          "VS Code",
          "Postman",
          "Figma",
          "Canva",
          "Railway",
          "Render",
          "Hostinger",
          "Vercel",
        ].map((tool) => (
          <div
            key={tool}
            className="px-6 py-3 border border-white/40 rounded-xl bg-white/30 backdrop-blur-sm text-sm font-medium shadow-[0_0_15px_rgba(255,182,193,0.25)] hover:shadow-[0_0_20px_#ffb6d5] transition"
          >
            {tool}
          </div>
        ))}
        {[
          "VS Code",
          "Postman",
          "Figma",
          "Canva",
          "Railway",
          "Render",
          "Hostinger",
          "Vercel",
        ].map((tool, i) => (
          <div
            key={`${tool}-2-${i}`}
            className="px-6 py-3 border border-white/40 rounded-xl bg-white/30 backdrop-blur-sm text-sm font-medium shadow-[0_0_15px_rgba(255,182,193,0.25)]"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  </div>

  
</Section>


 <Section id="projects" title="Projects" color={pink2}>
  <div className="space-y-14">

    {/* ================= FULL STACK ================= */}
    <div>
      <h3 className="text-xl font-semibold text-[#d63384] mb-6">
        Full Stack Projects
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter(p => p.type === "Full Stack")
          .map(p => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.04 }}
              className="
                p-6 rounded-2xl border border-white/40 
                bg-white/30 backdrop-blur-lg 
                flex flex-col h-[450px]
              "
            >
              {/* TITLE */}
              <h3 className="font-semibold text-[#d63384] text-lg">
                {p.title}
              </h3>

              {/* DESC */}
              <p className="text-sm mt-2 opacity-80">
                {p.desc}
              </p>

              {/* SCROLLABLE CONTENT */}
              <div className="mt-3 flex-1 overflow-y-auto pr-2 custom-scroll">
                <ul className="text-xs space-y-1 list-disc list-inside opacity-80">
                  {p.features.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] rounded-full bg-pink-100 text-pink-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON (FIXED BOTTOM) */}
              <a
                href={p.live}
                target="_blank"
                className="mt-4 inline-block text-center text-sm font-medium px-4 py-2 rounded-lg bg-pink-600 text-white"
              >
                Live Demo ↗
              </a>
            </motion.div>
          ))}
      </div>
    </div>

   
    </div>
</Section>



     <Section id="internships" title="Course & Internships" color={pink2}>
  <div className="grid md:grid-cols-2 gap-6">

    {/* ================= COURSE ================= */}
    <div className="p-6 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md">
      <h3 className="font-semibold text-[#d63384] text-lg">
        MERN Stack Development Course — Singar Skill Development Program
      </h3>

      <p className="text-sm mt-2 opacity-80">
        Completed an intensive MERN stack training program focusing on
        full stack web application development with real-world use cases.
      </p>

      <ul className="mt-3 text-xs list-disc list-inside space-y-1 opacity-80">
        <li>React fundamentals & component-based architecture</li>
        <li>Node.js & Express REST API development</li>
        <li>MongoDB schema design & CRUD operations</li>
        <li>Authentication & basic authorization flows</li>
        <li>Frontend–backend integration</li>
      </ul>

      <span className="text-xs opacity-60 mt-2 block">
        MERN Stack Training
      </span>
    </div>

    {/* ================= INTERNSHIP 1 ================= */}
    <div className="p-6 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md">
      <h3 className="font-semibold text-[#d63384] text-lg">
        Software Developer Intern — Kriyatec IT Systems Pvt. Ltd.
      </h3>

      <p className="text-sm mt-2 opacity-80">
        Worked on modern frontend and backend technologies while building
        scalable APIs and web modules.
      </p>

      <ul className="mt-3 text-xs list-disc list-inside space-y-1 opacity-80">
        <li>Angular frontend development</li>
        <li>Backend APIs using Node.js & Fastify</li>
        <li>NestJS architecture & modular design</li>
        <li>MongoDB database integration</li>
        <li>API documentation using Swagger</li>
      </ul>

      <span className="text-xs opacity-60 mt-2 block">
        Dec 2024 – Apr 2025
      </span>
    </div>

    {/* ================= INTERNSHIP 2 ================= */}
    <div className="p-6 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md md:col-span-2">
      <h3 className="font-semibold text-[#d63384] text-lg">
        Full Stack Developer Intern — Logic Technologies Pvt. Ltd.
      </h3>

      <p className="text-sm mt-2 opacity-80">
        Contributed to real-time production projects by developing
        frontend interfaces and backend services.
      </p>

      <ul className="mt-3 text-xs list-disc list-inside space-y-1 opacity-80">
        <li>React-based dashboards & UI components</li>
        <li>Backend development with Node.js & Express</li>
        <li>MySQL database integration</li>
        <li>PHP-based modules & legacy system support</li>
        <li>End-to-end feature development & testing</li>
      </ul>

      <span className="text-xs opacity-60 mt-2 block">
        Jun 2025 – Sep 2025
      </span>
    </div>

  </div>
</Section>


<Section id="certifications" title="Certifications" color={pink2}>
  <div className="p-6 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md max-w-3xl mx-auto">
    
    <h3 className="font-semibold text-[#d63384] text-lg">
      NASSCOM – MERN Stack Development Certification
    </h3>

    <p className="text-sm mt-2 opacity-85">
      During my MERN Stack Development course, I was selected for the 
      <strong> NASSCOM Skill Certification assessment</strong>, where I
      demonstrated strong practical and technical understanding of
      full stack web development concepts.
    </p>

    <ul className="mt-3 text-xs list-disc list-inside space-y-1 opacity-80">
      <li>React component architecture & state management</li>
      <li>Node.js & Express RESTful API development</li>
      <li>MongoDB data modeling & CRUD operations</li>
      <li>Frontend–backend integration & API consumption</li>
      <li>Basic authentication & deployment concepts</li>
    </ul>

    <div className="mt-4 text-sm font-medium text-[#6b2bb1]">
      Score: <strong>79%</strong> — <strong>Gold Category</strong>
    </div>

    <div className="text-xs opacity-60 mt-1">
      Year: 2024
    </div>

  </div>
</Section>

     

  <Section id="contact" title="Contact" color={pink2}>
  <div className="max-w-6xl mx-auto">

    {/* SIMPLE TAGLINE */}
    <p className="text-center text-base mb-8 text-[#7a2948]">
      I enjoy honest work, simple ideas, and working with people who care.
    </p>

    {/* CONTACT GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
      <ContactLink
        href="tel:7904998159"
        label="Phone"
        value="7904998159"
      />
      <ContactLink
        href="https://wa.me/917904998159"
        label="WhatsApp"
        value="Message"
      />
      <ContactLink
        href="mailto:aishusai4754@gmail.com"
        label="Email"
        value="aishusai4754@gmail.com"
      />
      <ContactLink
        href="https://linkedin.com/in/aiswariya-v-02136324b/"
        label="LinkedIn"
        value="Profile"
      />
      <ContactLink
        href="https://github.com/aiswariya2002"
        label="GitHub"
        value="Projects"
      />
    </div>

    {/* AVAILABILITY */}
    <p className="mt-10 text-center text-xs text-[#7a2948]/60">
      Open to full-time roles.
    </p>

  </div>
</Section>

<footer className="mt-20 py-10 border-t border-pink-200/40 bg-white/10 backdrop-blur-md">
  <div className="max-w-6xl mx-auto text-center space-y-2">

    <p className="text-xs text-[#7a2948]/80">
      © {new Date().getFullYear()} Aiswariya V
    </p>

    <p className="text-xs text-[#7a2948]/60">
      Full Stack Developer | UI-Focused Engineer
    </p>

    <p className="text-[11px] text-[#7a2948]/50">
      Building scalable, maintainable and user-centric web applications
    </p>

  </div>
</footer>
    
      {activeProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-lg overflow-y-auto"
  >
    <div className="min-h-screen flex justify-center items-start px-6 py-16">
      <motion.div
        initial={{ y: 40, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        className="max-w-5xl w-full bg-white rounded-3xl p-8 relative"
      >
        {/* CLOSE */}
        <button
          onClick={() => setActiveProject(null)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-pink-600">
          {activeProject.title}
        </h2>

        <p className="text-sm opacity-70 mt-1">
          {activeProject.type}
        </p>

        <p className="mt-4">{activeProject.desc}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {activeProject.tech.map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700"
            >
              {t}
            </span>
          ))}
        </div>

    

        <a
          href={activeProject.live}
          target="_blank"
          className="inline-block mt-6 px-6 py-2 rounded-lg bg-pink-600 text-white"
        >
          Live Demo ↗
        </a>
      </motion.div>
    </div>
  </motion.div>
)}

    </main>
  );
}

/* ========== Reusable Components ========== */

function Section({
  id,
  title,
  children,
  color,
}: {
  id: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className="relative px-6 py-24 text-center"
      style={{
        transform: inView ? "none" : "translateY(40px)",
        opacity: inView ? 1 : 0,
        transition: "all 1s cubic-bezier(.23,1,.32,1)",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#d63384" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-white/40 bg-white/30 backdrop-blur-md px-4 py-3 hover:shadow-[0_0_20px_#ffb6c1]"
    >
      <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
        {label}
      </div>
      <div className="text-sm mt-0.5 group-hover:text-[#d63384]">{value}</div>
    </a>
  );
} 