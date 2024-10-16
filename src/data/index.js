import pokemon from "../assets/pokemon.png";
import upload from '../assets/porto/upload.png'
import olshop from '../assets/olshop.png'

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2016 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indie",
    date: "2019 - 2023",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prime 3",
    date: "2018 - 2019",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "ODU",
    date: "2015 - 2018",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
    ],
  },
];

const portfolio = [
  {
    name: "Photo Uploader",
    description:
      "The Image Upload CRUD project is built with Express to provide a simple interface for managing items, including uploading images. Users can create, read, update, and delete items seamlessly.",
    image: upload,
    live:"https://upload-virid.vercel.app/",
    github:"https://github.com/jokoadi77/upload-image",
  },
  {
    name: "Ecommerce Shop",
    description:
      "Ecommerce is an online platform designed to simplify the buying and selling of clothing. With an attractive and user-friendly interface, users can browse various clothing categories, view product details, and make secure purchases. The search and filter features help users quickly find the items they're looking for.",
    image: olshop,
    live:"https://ecommerce-iota-beryl-92.vercel.app/",
    github:"https://github.com/jokoadi77/fe-ecommerce",
  },
  {
    name: "Pokemon Memory Games",
    description:
      "The Pokémon Memory Game is a fun and interactive web-based game designed for Pokémon fans of all ages. It challenges players to test their memory skills by matching pairs of Pokémon cards.",
    image: pokemon,
    live:"https://pokememorygame-ashen.vercel.app/",
    github:"https://github.com/jokoadi77/pokememorygame",
  },
];

export { experiences, portfolio };

