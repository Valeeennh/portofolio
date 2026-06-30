import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
export const DATA = {
  
  name: "Valen hendriansyah",
  initials: "Valen",
  url: "https://valenhendriansyah.com",
  location: "Bandung",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "Software Engineer with a passion for building scalable and efficient applications.",
  summary:
    "Software Engineering (RPL) graduate from SMKN 4 Padalarang with a strong interest in the technology and industrial sectors. Completed a 6-month internship as a Front-End Developer at Gits Indonesia and PT Jamparing Masagi in Bandung. Skilled in adaptability, communication, and teamwork, with a strong willingness to learn and grow professionally. Seeking an opportunity to contribute and develop a career in a dynamic organization.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
     { name: "Laravel" },
     { name: "Figma" },
     { name: "Canva" }
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "valenhendriansyah@gmail.com",
    tel: "+6285524713206",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Valeeennh",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/valeennnh",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@valeennnh/playlists",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
   
    {
      company: "Gits Indonesia",
      badges: [],
      href: "https://shopify.com",
      location: "Bandung, Indonesia",
      title: "Intern Frontend Developer",
      logoUrl: "/gits.png",
      start: "July 2023",
      end: "September 2023",
      description:
        "Developed and maintained user interface components using HTML, CSS, and JavaScript ,Collaborated with the development team to improve website performance and usability,Assisted in debugging and fixing front-end issues",
    },
    {
      company: "Jamparing Masagi",
      href: "https://jmasagi.com/",
      badges: [],
      location: "Cimindi Kebon kopi, Indonesia",
      title: "Intern Frontend Developer",
      logoUrl: "/masagi.jpg",
      start: "September 2023",
      end: "December 2023",
      description:
        "Built responsive web pages based on design requirements , Ensured cross-browser compatibility and mobile responsiveness ,Worked closely with team members to meet project deadlines",
    },
     {
      company: "Shopee affiliate",
      href: "https://affiliate.shopee.co.id/",
      badges: [],
      location: "Remote",
      title: "Freelance Affiliate",
      logoUrl: "/Shopee.svg",
      start: "January 2024",
      end: "now",
      description:
        "Created engaging affiliate content on social media platforms, including Instagram (@inspirasioutfitt.idn) and TikTok (@inspirasioutfitt.idn) ,Developed content strategies to increase audience engagement and drive sales conversions , Analyzed trends and audience behavior to optimize content performance ",
    },
    {
      company: "Sagara Mobile",
      href: "https://sagaramobile.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Project",
      logoUrl: "/sagara.png",
      start: "April 2026",
      end: "Mei 2026",
      description:
        "Slicing web HRIS is the process of cutting a web design into smaller parts and converting them into HTML, CSS, and JavaScript code that can be used to create web pages. Slicing web HRIS is done to facilitate the web development process and ensure that the web design can be implemented properly.",
    }
   
  ],
  education: [
    {
      school: "SMKN 4 Padalarang",
      href: "https://tefa.smkn4padalarang.sch.id/tefa/rpl",
      degree: "ORACLE ACADEMY (Rekayasa Perangkat Lunak)",
      logoUrl: "/smk4.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Universitas Terbuka",
      href: "https://www.ut.ac.id/",
      degree: "Sistem Informasi",
      logoUrl: "/ut.png",
      start: "2026",
      end: "now",
    }
  ],
  projects: [
    {
      title: "APLIKASI ABSENSI KANTOR ",
      href: "/app.PNG",
      dates: "INTERNSHIP PROJECT JULY 2024",
      active: true,
      description:
        "aplikasi absensi Kantor adalah aplikasi yang digunakan untuk mencatat kehadiran karyawan di kantor/sekolah. Aplikasi ini dapat digunakan untuk mencatat kehadiran karyawan secara manual maupun otomatis. Aplikasi ini dibuat untuk mempermudah data kehadiran karyawan.",
      technologies: [
        "Laravel",
        "TailwindCSS",
        // "Typescript",
        "PostgreSQL",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Local",
          href: "/app.PNG",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/app.PNG",
      video:
        "",
    },
      {
      title: "APLIKASI ABSENSI SISWA ",
      href: "SMK.PNG",
      dates: "INTERNSHIP PROJECT JULY 2024",
      active: true,
      description:
        "aplikasi absensi Sekolah adalah aplikasi yang digunakan untuk mencatat kehadiran siswa di sekolah. Aplikasi ini dapat digunakan untuk mencatat kehadiran siswa secara manual maupun otomatis. Aplikasi ini dibuat untuk mempermudah data kehadiran siswa.",
      technologies: [
        "Laravel",
        "TailwindCSS",
        // "Typescript",
        "PostgreSQL",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Local",
          href: "S",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/SMK.PNG",
      video:
        "",
    },
     {
      title: "CONTENT CREATOR INSTAGRAM (AFFILIATE) ",
      href: "https://www.instagram.com/outfitinspirasi_62/",
      dates: "FREELANCE ",
      active: true,
      description:
        "Content creator for Inspirasinya Outfitt affiliate program, developing engaging social media content to promote products and drive sales.",
      technologies: [
        "FIGMA",
        "CANVA",
        // "Typescrip",
        "SHOPEE",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "SOCIAL MEDIA (IG)",
          href: "https://www.instagram.com/outfitinspirasi_62/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ig.PNG",
      video:
        "",
    },
     {
      title: "CONTENT CREATOR TIKTOK (AFFILIATE) ",
      href: "https://www.tiktok.com/@inspirasioutfitt.idn",
      dates: "FREELANCE ",
      active: true,
      description:
        "Content creator for Inspirasinya Outfitt affiliate program, developing engaging social media content to promote products and drive sales.",
      technologies: [
        "FIGMA",
        "CANVA",
        "Tiktok",
        "SHOPEE",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "SOCIAL MEDIA (TIKTOK)",
          href: "https://www.tiktok.com/@inspirasioutfitt.idn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tiktok.PNG",
      video:
        "",
    },
      {
      title: "OPEN TRIP WEBSITE ",
      href: "SOON",
      dates: "PERSONAL PROJECTT JANUARY 2026",
      active: true,
      description:
        "Open trip website is a platform that allows users to book and manage their travel itineraries, including flights, accommodations, and activities. The website provides a user-friendly interface for planning and organizing trips, making it easier for travelers to explore new destinations.",
      technologies: [
        "LARAVEL",
        "VUEJS",
        // "Prisma",
        "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "LOCAL",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/trip.png",
      video:
        "",
    },
     {
      title: "SLICING WEB HRIS -SAGARA- ",
      href: "https://sso-staging.sagaramobile.com/",
      dates: "FREELANCE PROJECT APRIL 2026",
      active: true,
      description:
        "Slicing web HRIS adalah proses memotong desain web menjadi bagian-bagian yang lebih kecil dan mengubahnya menjadi kode HTML, CSS, dan JavaScript yang dapat digunakan untuk membuat halaman web. Slicing web HRIS dilakukan untuk mempermudah proses pengembangan web dan memastikan bahwa desain web dapat diimplementasikan dengan baik.",
      technologies: [
        "Laravel",
        "TailwindCSS",
        "Typescript",
        "PostgreSQL",
        "NEXTJS",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sso-staging.sagaramobile.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hris.PNG",
      video:
        "",
    },
 
  ],
 
} as const;
