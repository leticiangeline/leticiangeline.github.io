import { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, ExternalLink, Mail, Check, Copy, 
  Code2, Cpu, Sparkles, CornerDownRight,
  Briefcase, GraduationCap, Globe, Shield, Layers,
  MapPin, BookOpen, Heart, Send, Phone, Award, Play, Gamepad2
} from 'lucide-react';
import './App.css';

// Clean Minimal GitHub SVG Icon
function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Verified Engineering & Creative Projects
const PROJECTS = [
  {
    id: 'wearhouse',
    index: '01',
    title: 'Wearhouse',
    subtitle: 'Digital Lookbook Mobile Application',
    period: 'May 2026 – June 2026',
    category: 'mobile',
    domainTag: 'Mobile Development',
    metrics: 'UAT SUS: 89.75 • Precision: 0.76',
    tech: ['Flutter', 'Dart', 'Google ML Kit', 'CNN Segmentation', 'UAT Validation'],
    summary: 'Flutter wardrobe management app with on-device CNN background removal and heuristic outfit matching. Achieved a SUS score of 89.75.',
    details: [
      'Built wardrobe digitization with CNN-based background removal via Google ML Kit — zero cloud latency.',
      'Custom heuristic matching algorithm for outfit recommendations (precision: 0.76).',
      'Led UAT validation, achieving SUS score of 89.75 across usability tests.'
    ],
    images: [
      { src: '/wearhouse/wearhouse_login_branding.jpg', label: 'Wearhouse Authentication & Lookbook UI' },
      { src: '/wearhouse/wearhouse_closet_grid.jpg', label: 'Digital Closet & Wardrobe Organization' },
      { src: '/wearhouse/wearhouse_ai_segmentation.jpg', label: 'On-Device CNN Background Removal (Google ML Kit)' },
      { src: '/wearhouse/wearhouse_manual_carousel.jpg', label: 'Interactive Outfit Canvas & Category Carousels' },
      { src: '/wearhouse/wearhouse_ai_stylist_recommendations.jpg', label: 'AI Outfit Stylist & Multi-Tag Match Suggestions' },
      { src: '/wearhouse/wearhouse_saved_outfits_scoring.jpg', label: 'Saved Looks Library & Neural Cohesiveness Match Scores' },
      { src: '/wearhouse/wearhouse_laundry_tracker.jpg', label: 'Item Details & Laundry Status Cycle Tracker' },
      { src: '/wearhouse/wearhouse_wishlist_tracker.jpg', label: 'Wishlist & Shopping Tracker' },
      { src: '/wearhouse/wearhouse_profile_analytics.jpg', label: 'Profile Dashboard & Wardrobe Category Statistics' }
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1RamXWbxRJxbInQSNpTe5CP6vOnk69qHt/preview',
    videoLink: 'https://drive.google.com/file/d/1RamXWbxRJxbInQSNpTe5CP6vOnk69qHt/view?usp=drive_link',
    videoTitle: 'Mobile Application Video Demo'
  },
  {
    id: 'safari-pal',
    index: '02',
    title: 'Safari Pal',
    subtitle: 'Gamified Subject-Based Learning Mobile Application',
    period: 'June 2026',
    category: 'mobile',
    domainTag: 'Mobile Development',
    metrics: 'SQLite CRUD • RBAC Portals • Gamified Quizzes',
    tech: ['Android Studio', 'Java / Kotlin', 'SQLite Database', 'RBAC (Student/Teacher/Parent)', 'Custom Vector UI', 'Quiz Engine'],
    summary: 'Android Studio learning app for junior high school students, aligned with the Indonesian curriculum. Features gamified quizzes, SQLite CRUD, and three role-based portals.',
    details: [
      'Subject-based learning environment aligned with the Indonesian junior high school curriculum.',
      'SQLite database with full CRUD for user accounts, lessons, notes, and quiz scores.',
      'RBAC with three portals: Student (quizzes & notes), Teacher (class & lesson management), Parent (progress monitoring).',
      'Custom-designed lion mascot, app logo, and star-to-title achievement system.'
    ],
    images: [
      { src: '/safari_pal/safari_pal_logo.png', label: 'Safari Pal Official Application Logo' },
      { src: '/safari_pal/safari_pal_lion_mascot.png', label: 'Custom Illustrated Safari Pal Lion Mascot' },
      { src: '/safari_pal/safari_pal_login.png', label: 'User Login & Authentication Screen' },
      { src: '/safari_pal/safari_pal_auth_roles.png', label: 'Multi-Role Registration (Student, Teacher, Parent)' },
      { src: '/safari_pal/safari_pal_student_lessons.jpg', label: 'Student Portal: Subject Lessons & Study Reminders' },
      { src: '/safari_pal/safari_pal_quiz_interactive.jpg', label: 'Gamified Interactive Quiz System & Dynamic Logic' },
      { src: '/safari_pal/safari_pal_quiz_completion.jpg', label: 'Quiz Completion & Star-to-Title Reward System' },
      { src: '/safari_pal/safari_pal_student_profile.jpg', label: 'Student Profile with Achievement Titles & Stars' },
      { src: '/safari_pal/safari_pal_teacher_portal.png', label: 'Teacher Portal: Lesson & Class Management' },
      { src: '/safari_pal/safari_pal_parent_dashboard.png', label: 'Parent Dashboard: Student Linkage & Score Tracking' }
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1tjqcslT9vOPHxiwFvz0R4IJ3Pz-Hley9/preview',
    videoLink: 'https://drive.google.com/file/d/1tjqcslT9vOPHxiwFvz0R4IJ3Pz-Hley9/view?usp=drive_link',
    videoTitle: 'Mobile Application Video Demo'
  },
  {
    id: 'runeblade',
    index: '03',
    title: 'Runeblade',
    subtitle: '2D RPG Platformer & Character Pixel Art',
    period: 'June 2025 – July 2025',
    category: 'game',
    domainTag: 'Game & Animation',
    metrics: 'Pixel Art • Sprite Sheets • RPG Combat',
    tech: ['Pixel Art', 'Sprite Animation', 'Game Design', 'Combat & Movement Cycles', 'Asset Pipeline'],
    summary: '2D RPG platformer featuring light combat, puzzle-solving, and exploration. Player is chosen to confront a mysterious curse in Greenwild Village.',
    details: [
      'Hand-crafted pixel art character sprites with walk, crawl, jump, climb, and combat animation cycles.',
      'Light combat, puzzle-solving, and exploration gameplay set in Greenwild Village.',
      'Complete sprite asset pipeline optimized for fluid 2D platformer physics.'
    ],
    images: [
      { src: '/runeblade_screenshots/runeblade_title_menu.png', label: 'Title & Main Menu Screen' },
      { src: '/runeblade_screenshots/runeblade_gameplay_level.png', label: '2D Platformer Level & Puzzle Layout' }
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1UrlPLxS9GYYJJikFfFA5FZ2eiBg3les4/preview',
    videoLink: 'https://drive.google.com/file/d/1UrlPLxS9GYYJJikFfFA5FZ2eiBg3les4/view?usp=drive_link',
    actionUrl: 'https://drive.google.com/file/d/1z4UwYiMT2PJPNVgJviwQ2qe-jAuLAjsL/view?usp=drive_link',
    actionLabel: 'Try the game!',
    sprites: [
      '/runeblade_sprites/runeblade_run_jump.png',
      '/runeblade_sprites/runeblade_damage.png',
      '/runeblade_sprites/runeblade_combatant_walk.png',
      '/runeblade_sprites/runeblade_combatant_hit.png',
      '/runeblade_sprites/runeblade_crawl_fall.png'
    ]
  },
  {
    id: 'agentic-ai-attrition',
    index: '04',
    title: 'Agentic AI Student Attrition Predictor',
    subtitle: 'Predictive Analytics & Automated Intervention',
    period: 'June 2026',
    category: 'ai',
    domainTag: 'AI & Automation',
    metrics: 'Random Forest: 0.76 • Render Cloud',
    tech: ['Streamlit', 'FastAPI', 'Random Forest', 'n8n Workflows', 'Gemini 3.1 Flash Lite', 'Twilio SMS', 'Gmail API'],
    summary: 'Predictive analytics dashboard with Random Forest model and autonomous n8n agentic workflow for student retention risk assessment and automated interventions.',
    details: [
      'Full-stack dashboard (Streamlit + FastAPI) with Random Forest model (accuracy: 0.76) deployed on Render.',
      'Autonomous n8n workflow with Gemini 3.1 Flash Lite agent for dynamic risk processing via webhooks.',
      'Conditional routing for automated interventions via Twilio SMS, Gmail API, and Google Sheets logging.'
    ],
    images: [
      { src: '/agentic_ai/agentic_n8n_workflow_canvas.png', label: 'Autonomous n8n Agentic Workflow Canvas & Gemini AI Agent' },
      { src: '/agentic_ai/agentic_streamlit_dashboard.png', label: 'Streamlit Predictive Analytics Dashboard & Input UI' },
      { src: '/agentic_ai/agentic_ai_intervention_strategy.png', label: 'Gemini AI Agent Generated Intervention Strategy' },
      { src: '/agentic_ai/agentic_prediction_donut_chart.png', label: 'Classification Probability & Risk Distribution Chart' },
      { src: '/agentic_ai/agentic_data_table_metrics.png', label: 'Interactive Student Data Auditing Table' },
      { src: '/agentic_ai/agentic_scholarship_email.jpg', label: 'Condition A: Automated Scholarship Extension Email' },
      { src: '/agentic_ai/agentic_google_sheets_sync.png', label: 'Condition B: Automated Google Sheets Audit Sync' },
      { src: '/agentic_ai/agentic_twilio_sms_alert.jpg', label: 'Condition C: Urgent Counselor SMS Alert (Twilio API)' },
      { src: '/agentic_ai/agentic_at_risk_intervention_email.png', label: 'Condition D: Academic At-Risk Guidance Email' }
    ],
    actionUrl: 'https://leticiangeline.app.n8n.cloud',
    actionLabel: 'Open in n8n',
    hideGithub: true
  },
  {
    id: 'smart-iot-parcel',
    index: '05',
    title: 'Smart Anti-Theft IoT Parcel Box',
    subtitle: 'Automated Secure Drop-Box Hardware System',
    period: 'May 2026 – June 2026',
    category: 'hardware',
    domainTag: 'IoT',
    metrics: 'Event-Driven C++ • Web Telemetry',
    tech: ['Arduino UNO', 'ESP8266 (WeMos D1 Mini)', 'C++ Firmware', 'Solenoid Lock', 'Ultrasonic Sensors', 'Web Server'],
    summary: 'Automated anti-theft parcel drop-box using Arduino UNO, ESP8266, solenoid lock, and ultrasonic sensors with real-time web monitoring.',
    details: [
      'Arduino UNO + ESP8266 Wi-Fi module with solenoid lock and ultrasonic proximity sensors.',
      'Event-driven firmware logic for auto-locking, audible alerts, and real-time Wi-Fi notifications.',
      'Web-based UI for live monitoring, manual lock control, and automated event logs.'
    ],
    images: [
      { src: '/smart_parcel_box/smart_parcel_box_prototype.jpg', label: 'Smart Anti-Theft Parcel Box Prototype' },
      { src: '/smart_parcel_box/smart_parcel_internal_circuitry.jpg', label: 'Internal Circuitry & Sensor Wiring (Arduino & ESP8266)' },
      { src: '/smart_parcel_box/smart_locker_open_ui.png', label: 'Smart Locker Web UI (Door Opened)' },
      { src: '/smart_parcel_box/smart_locker_locked_ui.png', label: 'Smart Locker Web UI (Door Locked)' }
    ],
    videoEmbedUrl: 'https://drive.google.com/file/d/1VEHbV2pi3KeCLXixVUyg122yw4Q2_ork/preview',
    videoLink: 'https://drive.google.com/file/d/1VEHbV2pi3KeCLXixVUyg122yw4Q2_ork/view?usp=drive_link',
    videoTitle: 'Hardware & System Video Demo',
    hideGithub: true
  },
  {
    id: 'hackerspace',
    index: '06',
    title: 'Hackerspace',
    subtitle: 'Cyber-Retro Software Project Management Platform',
    period: 'December 2025 – January 2026',
    category: 'web',
    domainTag: 'Web Development',
    metrics: 'ASP.NET Core • EF Core • Granular RBAC',
    tech: ['React', 'Vite', 'Three.js / Shaders', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'Granular RBAC'],
    summary: 'Cyber-retro software project management platform built with React, Three.js shaders, ASP.NET Core, and SQL Server, featuring multi-project Kanban boards and granular role permissions.',
    details: [
      'Multi-project Kanban boards with task breakdown, sub-routine checklists, and real-time developer communication logs.',
      'ASP.NET Core Web API backend with SQL Server & EF Core handling data persistence and event-driven notification triggers.',
      'Granular Role-Based Access Control (RBAC) bound to project memberships for Architects, Developers, and QA Testers.',
      'Cyber-retro terminal frontend with custom Three.js glitch shaders, interactive calendar (.exe), and velocity analytics charts.'
    ],
    images: [
      { src: '/hackerspace/hackerspace_main_dashboard.png', label: 'Operator Main Dashboard & Enrolled Projects Directory' },
      { src: '/hackerspace/hackerspace_kanban_project_board.png', label: 'Project Dashboard: Multi-Column Kanban Board & Directives' },
      { src: '/hackerspace/hackerspace_task_details_subroutines.png', label: 'Task Details Viewer: Mission Parameters, Sub-Routines & Comment Logs' },
      { src: '/hackerspace/hackerspace_calendar_schedule.png', label: 'Interactive Project & Personal Calendar Schedule' },
      { src: '/hackerspace/hackerspace_login_terminal.png', label: 'Retro Terminal User Authentication & Login Screen' },
      { src: '/hackerspace/hackerspace_registration_terminal.png', label: 'Operator Identity Registration & Terminal Onboarding' }
    ]
  },
  {
    id: 'dough-district',
    index: '07',
    title: 'Dough District',
    subtitle: 'Mobile Ordering Application',
    period: 'December 2025 – January 2026',
    category: 'mobile',
    domainTag: 'Mobile Development',
    metrics: 'Offline SQLite • Asynchronous CRUD',
    tech: ['Flutter', 'Dart', 'SQLite Database', 'State Management', 'Relational Schemas'],
    summary: 'Flutter mobile ordering app with offline-first SQLite database, dynamic menu filtering, and persistent cart management.',
    details: [
      'Dynamic menu browsing and order management with SQLite-backed persistence.',
      'Custom relational schemas with async CRUD for profiles, catalog, and cart items.',
      'Clean state management for responsive navigation and fluid cart handling.'
    ],
    images: [
      { src: '/dough_district/dough_district_home.jpg', label: 'Dough District Home Dashboard & Carousel' },
      { src: '/dough_district/dough_district_catalogue.jpg', label: 'Interactive Cookie Catalogue & Search Filtering' },
      { src: '/dough_district/dough_district_cookie_detail.jpg', label: 'Detailed Product View & Cart Addition' },
      { src: '/dough_district/dough_district_cart_orders.jpg', label: 'Live Shopping Cart & Order Summary' },
      { src: '/dough_district/dough_district_checkout_card.jpg', label: 'Checkout & Credit Card Payment Validation' },
      { src: '/dough_district/dough_district_checkout_qr.jpg', label: 'Checkout & QR Code Payment Flow' },
      { src: '/dough_district/dough_district_daily_stamp_rewards.jpg', label: 'Daily Loyalty Stamp & Engagement Rewards' },
      { src: '/dough_district/dough_district_store_map.jpg', label: 'Interactive Store Location Map (Flutter Map)' },
      { src: '/dough_district/dough_district_profile.jpg', label: 'Profile Dashboard & Delivery Address Management' },
      { src: '/dough_district/dough_district_login.jpg', label: 'User Authentication & Registration Screen' }
    ]
  }
];

// Work Experience Strictly from Resume
const WORK_EXPERIENCES = [
  {
    role: 'Character Actor & Digital Content Creator',
    company: 'miHoYo',
    period: 'January 2026 – February 2026',
    categoryTag: 'Official Roadshow Event',
    menuCode: 'ROLE 01',
    points: [
      'Partnered with organizers to create and publish pre-event promotional video for the Genshin Impact Moon Invitation roadshow event and other contents to drive event awareness and attendance.',
      'Guided visitors through key event activities, providing real-time assistance and maintaining a welcoming, high-energy environment over the two-day roadshow event.',
      'Captured and published live event documentation, including real-time social stories and photography, to maintain high audience reach.',
      'Curated and published post-event recap content to summarize the experience and maintain audience engagement.'
    ]
  }
];

// Volunteering & Campus Leadership Strictly from Resume + Popfest Medan 2024
const VOLUNTEER_EXPERIENCES = [
  {
    role: 'Volunteer Booth Assistant & Sales Coordinator',
    company: 'Popfest Medan',
    period: '2024 (3-Day Event)',
    categoryTag: 'Pop Culture Exhibition',
    menuCode: 'VOL 01',
    points: [
      'Facilitated high-traffic booth operations during the 3-day Popfest exhibition in Medan, managing crowd flow and visitor inquiries with active engagement.',
      'Assisted artist and creator friends with product promotion and live marketing, effectively driving merchandise sales and audience enthusiasm.',
      'Coordinated point-of-sale customer purchases, inventory organization, and payment handling under fast-paced festival floor conditions.'
    ]
  },
  {
    role: 'Lead Secretary',
    company: 'Cyber Guardians',
    period: 'October 2023 – December 2023',
    categoryTag: 'Community Service Project',
    menuCode: 'VOL 02',
    points: [
      'Directed a 3-person administrative team, delegating microtasks and managing project timelines to deliver comprehensive proposals and final executive reports.',
      'Tracked project milestones by continuously syncing with Design, Finance, and Logistics departments to ensure cohesive project execution.',
      'Executed public-facing event operations by guiding booth visitors through interactive cybersecurity safety activities.'
    ]
  },
  {
    role: 'Creative & Event Operations Member',
    company: 'XMUM ACG Research Club',
    period: 'April 2023 – December 2025',
    categoryTag: 'University Activities',
    menuCode: 'VOL 03',
    points: [
      'Actively attended team meetings and contributed creative inputs toward event planning, activity design, and logistics.',
      'Designed digital marketing assets, promotional banners, and visual media to support annual club recruitment and event campaigns.',
      'Represented the club as an interactive promotional ambassador in cosplay during campus drives to maximize student reach and engagement.',
      'Executed front-of-house hospitality operations and customer experience for two consecutive annual flagship Maid Café events.'
    ]
  }
];

// Technical Skills Matrix Strictly from Resume
const SKILLS_CATEGORIES = [
  {
    category: 'Programming Languages',
    items: ['Kotlin', 'Dart', 'C/C++', 'C#', 'JavaScript', 'Python', 'HTML/CSS', 'Java']
  },
  {
    category: 'Frameworks & Tech',
    items: ['ASP.NET Core', 'Entity Framework Core', 'Flutter', 'Vite JS', 'Tailwind CSS', 'FastAPI']
  },
  {
    category: 'Data & Automation',
    items: ['Streamlit', 'n8n', 'Pandas', 'Matplotlib']
  },
  {
    category: 'Cloud & Databases',
    items: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Cloud Firestore', 'SQLite']
  },
  {
    category: 'Tools & Methods',
    items: ['Android Studio', 'VS Code', 'Visual Studio', 'Jupyter Notebooks', 'Tinkercad', 'Git / GitHub', 'RESTful Web APIs', 'Selenium', 'Postman', 'Figma', 'UI/UX Design', 'Arduino']
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullImageViewer, setFullImageViewer] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, startPanX: 0, startPanY: 0 });

  // Lock background page scroll when modal or image lightbox is active
  useEffect(() => {
    if (selectedProject || fullImageViewer) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow || '';
        document.body.style.paddingRight = originalPaddingRight || '';
      };
    }
  }, [selectedProject, fullImageViewer]);

  // Smooth scroll reveal animations observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const openImageViewer = (imgObj) => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setFullImageViewer(imgObj);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startPanX: pan.x,
      startPanY: pan.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.startPanX + dx,
      y: dragStartRef.current.startPanY + dy
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (activeTab === 'mobile') return p.category === 'mobile';
        if (activeTab === 'ai') return p.category === 'ai';
        if (activeTab === 'web') return p.category === 'web';
        if (activeTab === 'hardware') return p.category === 'hardware';
        if (activeTab === 'game') return p.category === 'game';
        return true;
      });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('leticiangeline@proton.me');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="impeccable-portfolio-shell">
      {/* Subtle Atmospheric Backdrop */}
      <div className="ambient-park-backdrop"></div>

      {/* Top Stripe Details */}
      <div className="storybook-ribbon-stripe"></div>

      {/* ==================== CLEAN MINIMAL MASTHEAD ==================== */}
      <header className="journal-masthead">
        <div className="masthead-inner">
          <nav className="masthead-nav-bar">
            <a href="#about" className="nav-item-link">Overview</a>
            <a href="#projects" className="nav-item-link">Projects</a>
            <a href="#experience" className="nav-item-link">Experience</a>
            <a href="#education" className="nav-item-link">Academics</a>
            <a href="#skills" className="nav-item-link">Skills</a>
            <a href="#contact" className="nav-item-link">Contact</a>
          </nav>

          <div className="masthead-action-pill">
            <button onClick={handleCopyEmail} className="btn-copy-pill" title="Copy Email">
              {copiedEmail ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
              <span className="font-mono">{copiedEmail ? 'Copied' : 'leticiangeline@proton.me'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="journal-main-flow">
        {/* ==================== HERO OVERVIEW SPREAD ==================== */}
        <section id="about" className="journal-hero-section">
          <div className="hero-journal-grid">
            {/* Left: Bio & Diary Card */}
            <div className="hero-diary-box reveal-on-scroll">
              <div className="status-badge-ribbon font-mono">
                <span className="status-live-dot"></span>
                <span>Open for Internships (September 2026)</span>
              </div>

              <div className="hero-whimsical-title-wrap">
                <h1 className="hero-name-title">Leticia Angeline's Portfolio</h1>
              </div>

              <p className="hero-paragraph-prose">
                I am a Software Engineering undergraduate at <strong>Xiamen University Malaysia</strong> (GPA: 3.64 / 4.0, Dean's List). I can do both frontend and backend, and usually I build full-stack applications.
              </p>

              <div className="hero-cta-cluster">
                <a href="#projects" className="btn-craft-primary">
                  <span>Explore Projects</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="mailto:leticiangeline@proton.me" className="btn-craft-secondary">
                  <Mail size={14} />
                  <span>Get in Touch</span>
                </a>
                <a href="https://github.com/leticiangeline" target="_blank" rel="noreferrer" className="btn-craft-ghost">
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Right: Summarized Details Sticky Note */}
            <div className="hero-sticky-note reveal-on-scroll">
              <div className="sticky-tape-strip"></div>
              <div className="sticky-note-top font-mono">
                <span className="sticky-heading-tag">SUMMARIZED DETAILS</span>
              </div>

              <div className="sticky-note-body">
                <div className="sticky-gpa-box">
                  <div className="sticky-field-lbl font-mono">GPA</div>
                  <span className="sticky-gpa-val font-mono highlight-green">3.64 / 4.0</span>
                  <span className="sticky-gpa-sub font-mono">Dean's List: April 2024, Sept 2025</span>
                </div>

                <div className="sticky-languages-box">
                  <span className="sticky-field-lbl font-mono">LANGUAGES SPOKEN</span>
                  <div className="sticky-lang-tags">
                    <span className="sticky-lang-pill">Indonesian (Native)</span>
                    <span className="sticky-lang-pill">English (IELTS Band 7.0)</span>
                    <span className="sticky-lang-pill">Bahasa Melayu (Advanced)</span>
                    <span className="sticky-lang-pill">Chinese (Intermediate HSK 4)</span>
                  </div>
                </div>

                <div className="sticky-contact-stack font-mono">
                  <div className="sticky-contact-line">
                    <Mail size={14} className="sticky-icon" />
                    <a href="mailto:leticiangeline@proton.me" className="sticky-link">leticiangeline@proton.me</a>
                  </div>
                  <div className="sticky-contact-line">
                    <Phone size={14} className="sticky-icon" />
                    <span>+60 1117553653</span>
                  </div>
                  <div className="sticky-contact-line">
                    <MapPin size={14} className="sticky-icon" />
                    <span>Sepang, Selangor, Malaysia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SELECTED ENGINEERING PROJECTS ==================== */}
        <section id="projects" className="journal-content-section">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <h2 className="section-main-heading">Featured Projects</h2>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs-cluster">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`filter-pill ${activeTab === 'all' ? 'active' : ''}`}
              >
                All ({PROJECTS.length})
              </button>
              <button 
                onClick={() => setActiveTab('mobile')} 
                className={`filter-pill ${activeTab === 'mobile' ? 'active' : ''}`}
              >
                Mobile Development ({PROJECTS.filter(p => p.category === 'mobile').length})
              </button>
              <button 
                onClick={() => setActiveTab('ai')} 
                className={`filter-pill ${activeTab === 'ai' ? 'active' : ''}`}
              >
                AI & Automation ({PROJECTS.filter(p => p.category === 'ai').length})
              </button>
              <button 
                onClick={() => setActiveTab('web')} 
                className={`filter-pill ${activeTab === 'web' ? 'active' : ''}`}
              >
                Web Development ({PROJECTS.filter(p => p.category === 'web').length})
              </button>
              <button 
                onClick={() => setActiveTab('hardware')} 
                className={`filter-pill ${activeTab === 'hardware' ? 'active' : ''}`}
              >
                IoT ({PROJECTS.filter(p => p.category === 'hardware').length})
              </button>
              <button 
                onClick={() => setActiveTab('game')} 
                className={`filter-pill ${activeTab === 'game' ? 'active' : ''}`}
              >
                Game & Animation ({PROJECTS.filter(p => p.category === 'game').length})
              </button>
            </div>
          </div>

          <div className="projects-dossier-grid">
            {filteredProjects.map((project) => (
              <article 
                key={project.id} 
                className="project-dossier-panel reveal-on-scroll"
                onClick={() => setSelectedProject(project)}
              >
                <div className="dossier-top-meta font-mono">
                  <div className="dossier-tags-group">
                    <span className="dossier-domain-tag">{project.domainTag}</span>
                    {project.videoEmbedUrl && (
                      <span className="dossier-video-tag">
                        <Play size={10} /> Video Demo
                      </span>
                    )}
                  </div>
                  <span className="dossier-timeline-tag">{project.period}</span>
                </div>

                <h3 className="dossier-project-title">{project.title}</h3>
                <h4 className="dossier-project-subtitle">{project.subtitle}</h4>

                {project.images && project.images[0] && (
                  <div 
                    className="dossier-img-preview-box"
                    onClick={(e) => {
                      e.stopPropagation();
                      openImageViewer(project.images[0]);
                    }}
                    title="Click to view full preview"
                  >
                    <span className="preview-label-tag font-mono">preview</span>
                    <img src={project.images[0].src} alt={project.title} className="dossier-preview-thumb" />
                  </div>
                )}

                <div className="dossier-footer-action">
                  <span>View details</span>
                  <ArrowUpRight size={13} />
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* ==================== WORK EXPERIENCE & VOLUNTEERING ==================== */}
        <section id="experience" className="journal-content-section">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <h2 className="section-main-heading">Experience & Volunteering</h2>
            </div>
          </div>

          <div className="binder-experience-layout">
            {/* --- SUBSECTION 1: WORK EXPERIENCE --- */}
            <div className="binder-category-group">
              <div className="binder-category-header reveal-on-scroll">
                <span className="binder-header-glyph">✦</span>
                <h3 className="binder-header-title font-mono">
                  <span>Work Experience</span>
                </h3>
                <span className="binder-header-glyph">✦</span>
              </div>

              <div className="binder-cards-stack">
                {WORK_EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="binder-notebook-card reveal-on-scroll">
                    {/* Ring Binder Spine */}
                    <div className="binder-rings-column" aria-hidden="true">
                      {[...Array(5)].map((_, rIdx) => (
                        <div key={rIdx} className="binder-ring-unit">
                          <div className="binder-hole"></div>
                          <div className="binder-metal-ring"></div>
                        </div>
                      ))}
                    </div>

                    {/* Lined Notebook Page */}
                    <div className="notebook-page-content">
                      <div className="notebook-header-bar">
                        <div className="notebook-badge-cluster font-mono">
                          <span className="notebook-code-badge">{exp.menuCode}</span>
                          <span className="notebook-tag-badge">{exp.categoryTag}</span>
                        </div>
                        <div className="notebook-date-tag font-mono">{exp.period}</div>
                      </div>

                      <div className="notebook-title-row">
                        <h4 className="notebook-role-title">{exp.role}</h4>
                        <div className="notebook-company-pill font-mono">{exp.company}</div>
                      </div>

                      <ul className="notebook-ruled-points">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx}>
                            <span className="notebook-bullet-star">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SUBSECTION 2: VOLUNTEERING & ACTIVITIES --- */}
            <div className="binder-category-group">
              <div className="binder-category-header reveal-on-scroll">
                <span className="binder-header-glyph">✦</span>
                <h3 className="binder-header-title font-mono">
                  <span>Volunteering & Community</span>
                </h3>
                <span className="binder-header-glyph">✦</span>
              </div>

              <div className="binder-cards-stack">
                {VOLUNTEER_EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="binder-notebook-card reveal-on-scroll">
                    {/* Ring Binder Spine */}
                    <div className="binder-rings-column" aria-hidden="true">
                      {[...Array(5)].map((_, rIdx) => (
                        <div key={rIdx} className="binder-ring-unit">
                          <div className="binder-hole"></div>
                          <div className="binder-metal-ring"></div>
                        </div>
                      ))}
                    </div>

                    {/* Lined Notebook Page */}
                    <div className="notebook-page-content">
                      <div className="notebook-header-bar">
                        <div className="notebook-badge-cluster font-mono">
                          <span className="notebook-code-badge">{exp.menuCode}</span>
                          <span className="notebook-tag-badge">{exp.categoryTag}</span>
                        </div>
                        <div className="notebook-date-tag font-mono">{exp.period}</div>
                      </div>

                      <div className="notebook-title-row">
                        <h4 className="notebook-role-title">{exp.role}</h4>
                        <div className="notebook-company-pill font-mono">{exp.company}</div>
                      </div>

                      <ul className="notebook-ruled-points">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx}>
                            <span className="notebook-bullet-star">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ==================== ACADEMICS & COURSEWORK ==================== */}
        <section id="education" className="journal-content-section">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <h2 className="section-main-heading">Education & Academics</h2>
            </div>
          </div>

          <div className="academics-duo-grid">
            {/* Degree Card */}
            <div className="academics-card main-degree reveal-on-scroll">
              <div className="academic-top-line">
                <GraduationCap size={18} className="academic-icon" />
                <span className="academic-tag font-mono">DEGREE</span>
              </div>
              <h3 className="academic-title">Bachelor of Engineering (Software Engineering)</h3>
              <h4 className="academic-institution">Xiamen University Malaysia</h4>

              <div className="academic-meta-table font-mono">
                <div className="meta-table-row">
                  <span className="meta-k">Period</span>
                  <span className="meta-v">February 2023 – Expected February 2027</span>
                </div>
                <div className="meta-table-row">
                  <span className="meta-k">GPA</span>
                  <span className="meta-v highlight-green">3.64 / 4.0 (Dean's List 2x)</span>
                </div>
                <div className="meta-table-row">
                  <span className="meta-k">Scholarship</span>
                  <span className="meta-v">75% Merit Scholarship in 1st Year (2023)</span>
                </div>
              </div>
            </div>

            {/* Language Proficiency */}
            <div className="academics-card reveal-on-scroll">
              <div className="academic-top-line">
                <Globe size={16} className="academic-icon" />
                <span className="academic-tag font-mono">LANGUAGES</span>
              </div>
              <h3 className="academic-title">Language Proficiency</h3>
              <div className="language-rows-list">
                <div className="lang-entry">
                  <span className="lang-title">Indonesian</span>
                  <span className="lang-badge font-mono">Native</span>
                </div>
                <div className="lang-entry">
                  <span className="lang-title">English</span>
                  <span className="lang-badge font-mono">IELTS Band 7.0 (Advanced)</span>
                </div>
                <div className="lang-entry">
                  <span className="lang-title">Bahasa Melayu</span>
                  <span className="lang-badge font-mono">Advanced</span>
                </div>
                <div className="lang-entry">
                  <span className="lang-title">Chinese</span>
                  <span className="lang-badge font-mono">Intermediate (HSK 4)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TECHNICAL SKILLS MATRIX ==================== */}
        <section id="skills" className="journal-content-section">
          <div className="section-header-row reveal-on-scroll">
            <div>
              <h2 className="section-main-heading">Technical Skills & Technologies</h2>
            </div>
          </div>

          <div className="skills-cabinet-grid">
            {SKILLS_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="skills-drawer-box reveal-on-scroll">
                <h3 className="skills-drawer-title font-mono">{cat.category}</h3>
                <div className="skills-chip-wrap">
                  {cat.items.map((item, iIdx) => (
                    <span key={iIdx} className="skill-chip font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT & COLLABORATION ==================== */}
        <section id="contact" className="journal-content-section">
          <div className="contact-letter-card reveal-on-scroll">
            <div className="contact-card-left">
              <h2 className="contact-main-title">Get in Touch!</h2>
              <p className="contact-main-p">
                I'm currently looking for software engineering internship opportunities starting September 2026. Whether you have an exciting opportunity, a project idea, or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-meta-info font-mono">
                <MapPin size={13} className="pin-icon" />
                <span>Sepang, Selangor, Malaysia • Willing to Relocate / Remote</span>
              </div>
              <div className="contact-rabbit-decor">
                <img 
                  src="/pink_rabbit_plush.png" 
                  alt="Pink Rabbit Plush" 
                  className="rabbit-plush-img" 
                />
              </div>
            </div>

            <div className="contact-card-right">
              <a href="mailto:leticiangeline@proton.me" className="btn-contact-item primary">
                <Mail size={15} />
                <span className="font-mono">leticiangeline@proton.me</span>
                <Send size={13} />
              </a>

              <button onClick={handleCopyEmail} className="btn-contact-item secondary">
                {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <a href="https://github.com/leticiangeline" target="_blank" rel="noreferrer" className="btn-contact-item ghost">
                <GithubIcon size={15} />
                <span className="font-mono">github.com/leticiangeline</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== PROJECT DETAILS MODAL ==================== */}
      {selectedProject && (
        <div className="journal-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="journal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-line">
              <div className="modal-header-text">
                <div className="modal-header-meta font-mono">
                  <span className="modal-domain-tag">{selectedProject.domainTag}</span>
                  <span className="modal-meta-sep">•</span>
                  <span className="modal-timeline-tag">{selectedProject.period}</span>
                  {selectedProject.videoEmbedUrl && (
                    <span className="modal-video-badge">
                      <Play size={9} /> Video
                    </span>
                  )}
                </div>
                <h3 className="modal-heading-title">{selectedProject.title}</h3>
                <h4 className="modal-sub-title">{selectedProject.subtitle}</h4>
              </div>
              <button 
                className="modal-close-button" 
                onClick={() => setSelectedProject(null)} 
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-scrollable-content">
              <p className="modal-summary-text">{selectedProject.summary}</p>

              {selectedProject.metrics && (
                <div className="dossier-metric-badge font-mono modal-metric-badge">
                  <Award size={13} className="award-icon" />
                  <span>{selectedProject.metrics}</span>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="modal-details-card">
                  <h4 className="modal-block-heading">Preview</h4>
                  <div className="modal-images-gallery-grid">
                    {selectedProject.images.map((imgObj, idx) => (
                      <div 
                        key={idx} 
                        className="modal-image-preview-card clickable"
                        onClick={() => openImageViewer(imgObj)}
                        title="Click to view full size and zoom"
                      >
                        <img src={imgObj.src} alt={imgObj.label} className="modal-project-img" />
                        <span className="modal-img-caption font-mono">{imgObj.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.videoEmbedUrl && (
                <div className="modal-details-card">
                  <div className="modal-video-header-row">
                    <h4 className="modal-block-heading">
                      {selectedProject.videoTitle || (selectedProject.category === 'game' ? 'Gameplay Video Demo' : 'Hardware & System Video Demo')}
                    </h4>
                    <a 
                      href={selectedProject.videoLink || selectedProject.videoEmbedUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-video-direct-link font-mono"
                    >
                      <Play size={11} />
                      <span>Open on Google Drive</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <div className="modal-video-embed-container">
                    <iframe
                      src={selectedProject.videoEmbedUrl}
                      title={`${selectedProject.title} Video Demo`}
                      className="modal-video-iframe"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              <div className="modal-details-card">
                <h4 className="modal-block-heading">Key Implementation Architecture & Features</h4>
                <ul className="modal-details-bullets">
                  {selectedProject.details.map((point, idx) => (
                    <li key={idx}>
                      <CornerDownRight size={13} className="bullet-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.sprites && selectedProject.sprites.length > 0 && (
                <div className="modal-details-card">
                  <h4 className="modal-block-heading">Preview (Sprite Sheets)</h4>
                  <div className="modal-sprites-preview-grid">
                    {selectedProject.sprites.map((sprite, idx) => (
                      <div 
                        key={idx} 
                        className="sprite-preview-box clickable"
                        onClick={() => openImageViewer({ src: sprite, label: `${selectedProject.title} Sprite Sheet ${idx + 1}` })}
                        title="Click to view full sprite sheet and zoom"
                      >
                        <img src={sprite} alt={`Sprite asset ${idx + 1}`} className="sprite-sheet-thumb" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-details-card">
                <h4 className="modal-block-heading">Technologies & Frameworks</h4>
                <div className="modal-tech-pills">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-chip font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer-line">
              {selectedProject.actionUrl ? (
                <a 
                  href={selectedProject.actionUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-craft-primary"
                >
                  {selectedProject.category === 'game' ? <Gamepad2 size={15} /> : <Sparkles size={15} />}
                  <span>{selectedProject.actionLabel || 'View Project'}</span>
                  <ExternalLink size={12} />
                </a>
              ) : !selectedProject.hideGithub ? (
                <a 
                  href={selectedProject.githubUrl || "https://github.com/leticiangeline"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-craft-primary"
                >
                  <GithubIcon size={14} />
                  <span>View on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              ) : null}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="btn-craft-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== FULL IMAGE LIGHTBOX MODAL WITH ZOOM & PAN ==================== */}
      {fullImageViewer && (
        <div className="full-image-lightbox-backdrop" onClick={() => setFullImageViewer(null)}>
          <div className="full-image-lightbox-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header-bar">
              <div className="lightbox-zoom-toolbar">
                <button 
                  className="zoom-btn" 
                  onClick={() => setZoomLevel(prev => Math.max(Number((prev - 0.3).toFixed(1)), 0.5))}
                  title="Zoom Out"
                >
                  −
                </button>
                <span className="zoom-percentage font-mono">{Math.round(zoomLevel * 100)}%</span>
                <button 
                  className="zoom-btn" 
                  onClick={() => setZoomLevel(prev => Math.min(Number((prev + 0.3).toFixed(1)), 5))}
                  title="Zoom In"
                >
                  +
                </button>
                <button 
                  className={`zoom-btn reset ${zoomLevel === 1 && pan.x === 0 && pan.y === 0 ? 'active' : ''}`} 
                  onClick={() => {
                    setZoomLevel(1);
                    setPan({ x: 0, y: 0 });
                  }}
                  title="Reset (100% & Center)"
                >
                  Reset
                </button>
                <button 
                  className={`zoom-btn preset ${zoomLevel === 2 ? 'active' : ''}`} 
                  onClick={() => setZoomLevel(2)}
                  title="2x Zoom"
                >
                  200%
                </button>
                <button 
                  className={`zoom-btn preset ${zoomLevel === 3 ? 'active' : ''}`} 
                  onClick={() => setZoomLevel(3)}
                  title="3x Zoom (Pixel Sharp)"
                >
                  300%
                </button>
              </div>

              <button 
                className="lightbox-close-btn" 
                onClick={() => setFullImageViewer(null)}
                aria-label="Close full preview"
              >
                ✕
              </button>
            </div>

            <div 
              className={`lightbox-img-wrapper ${isDragging ? 'is-dragging' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={(e) => {
                if (e.deltaY < 0) {
                  setZoomLevel(prev => Math.min(Number((prev + 0.2).toFixed(1)), 5));
                } else {
                  setZoomLevel(prev => Math.max(Number((prev - 0.2).toFixed(1)), 0.5));
                }
              }}
            >
              <img 
                src={fullImageViewer.src} 
                alt={fullImageViewer.label || 'Full Preview'} 
                className="lightbox-full-img" 
                draggable={false}
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              />
            </div>

            {fullImageViewer.label && (
              <div className="lightbox-caption font-mono">
                <span>{fullImageViewer.label} • (Click & drag to pan, scroll wheel or buttons to zoom)</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== CANDY WRAPPER FOOTER ==================== */}
      <footer className="candy-wrapper-footer">
        <div className="candy-wrapper-container">
          <div className="candy-twist left"></div>
          <div className="candy-wrapper-body">
            <span className="candy-wrapper-text font-mono">© 2026 Leticia Angeline</span>
          </div>
          <div className="candy-twist right"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;