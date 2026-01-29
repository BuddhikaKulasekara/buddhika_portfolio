import { NextResponse } from 'next/server'

import { NavLinkType } from '@/app/types/navlink'
import { ProjectType } from '@/app/types/project'
import { RecordType } from '@/app/types/record'
import { ReviewType } from '@/app/types/review'
import { SpecializeType } from '@/app/types/specialize'
import { PlanType } from '@/app/types/plan'
import { CategoryType } from '@/app/types/category'
import { FooterLinkType } from '@/app/types/footerlinks'
import { HeroType } from '@/app/types/hero'

const HeroData: HeroType[] = [
  {
    imgSrc: '/images/banner/profile1.webp',
  },
  {
    imgSrc: '/images/banner/profile2.webp',
  },

]

const NavLinkData: NavLinkType[] = [
  {
    label: 'Buddhika',
    href: '/#project',
  },
  {
    label: 'Expertise',
    href: '/#expertise',
  },
  {
    label: 'Pricing',
    href: '/#pricing',
  },
  {
    label: 'Categories',
    href: '/#categories',
  },
]

const ProjectData: ProjectType[] = [
  {
    coverImg: '/images/project/ONBS.webp',
    name: 'Online Appointment Booking System',
  },
  {
    coverImg: '/images/project/DPB.webp',
    name: 'Digital Portfolio Builder',
  },
  {
    coverImg: '/images/project/JVAS.webp',
    name: 'Job Vacancy Alert System',
  },
  {
    coverImg: '/images/project/SPMT.webp',
    name: 'Student Project Management Tool',
  },
  {
    coverImg: '/images/project/PET.webp',
    name: 'Personal Expense Tracker',
  },
  {
    coverImg: '/images/project/SVSF.webp',
    name: 'Smart Vehicle Service Finder',
  },
  {
    coverImg: '/images/project/ELP.webp',
    name: 'E-learning Mini Platform',
  },
]

const RecordData: RecordType[] = [
  {
    imgSrc: '/images/records/star.svg',
    digit: '2+',
    desc: 'Years of experience building modern web applications',
  },
  {
    imgSrc: '/images/records/user.svg',
    digit: '12+',
    desc: 'Academic and professional web-based projects completed',
  },
  {
    imgSrc: '/images/records/cart.svg',
    digit: '2+',
    desc: 'Production-level platforms worked on during internship',
  },
  {
    imgSrc: '/images/records/star.svg',
    digit: '6+',
    desc: 'Core skills including Frontend, Backend, UI/UX, and APIs',
  },
];



const ReviewData: ReviewType[] = [
  {
    imgSrc: '/images/review/web.webp',
    name: 'Web Application Development',
    rating: 4.6,
    desc: 'Developing modern web applications with a focus on performance, responsiveness, and clean code structure.',
  },
  {
    imgSrc: '/images/review/tools.webp',
    name: 'Tools & Technologies',
    rating: 4.3,
    desc: 'Hands-on experience with Next.js, React, Node.js, Git, REST APIs, and database-driven systems.',
  },
  {
    imgSrc: '/images/review/content.webp',
    name: 'Content & Documentation',
    rating: 4.1,
    desc: 'Creating clear documentation, technical content, and structured project explanations for better understanding.',
  },
];


const SpecializeData: SpecializeType[] = [
  {
    imgSrc: '/images/specialization/webdesign.svg',
    title: 'Web Development & UI',
    desc: 'Building modern, responsive web interfaces with clean code and strong UI/UX focus.Experienced in creating fast, scalable, and user-friendly web applications.',
  },
  {
    imgSrc: '/images/specialization/logodesign.svg',
    title: 'Internship & Industry Experience',
    desc: 'Hands-on experience working on real-world projects during my internship.\nContributed to live systems, internal tools, and production-ready features.',
  },
  {
    imgSrc: '/images/specialization/contentwrite.svg',
    title: 'Content Writing & Documentation',
    desc: 'Creating clear technical documentation and meaningful digital content. Able to explain complex ideas in a simple and understandable way.',
  },
  {
    imgSrc: '/images/specialization/mobileapp.svg',
    title: 'Tools, Technologies & Continuous Learning',
    desc: 'Working with modern web technologies and frameworks.\nContinuously learning, experimenting, and improving development skills.',
  },


  {
    imgSrc: '/images/specialization/digitalmarketing.svg',
    title: 'Academic & Project-Based Experience',
    desc: 'Practical experience gained through academic and personal projects. Focused on solving real problems with structured and efficient solutions.',
  },

  {
    imgSrc: '/images/specialization/seooptimize.svg',
    title: 'Graphic Design & Visual Content',
    desc: 'Designing clean visuals, layouts, and simple UI graphics. Focused on consistency, usability, and visual balance.Familiar with creating banners, social media visuals, and simple UI graphics.',
  },
]

const PlanData: PlanType[] = [
  {
    type: 'Basic',
    price: {
      monthly: 9,
      yearly: 95,
    },
    desc: 'Ideal for freelancers and startups.',
    option: [
      'Consultation with strategy session',
      'Basic design and development',
      'One revision per project',
      'Responsive on all devices',
      'Email support included only',
    ],
  },
  {
    type: 'Pro',
    price: {
      monthly: 19,
      yearly: 185,
    },
    desc: 'Perfect for small growing teams.',
    option: [
      'Advanced project planning support',
      'Premium design and development',
      'Three revisions per project',
      'Fully responsive and optimized',
      'Priority email and chat support',
    ],
  },
]

const CategoryData: CategoryType[] = [
  {
    imgSrc: '/images/category/webdev.webp',
    title: 'Web Development & UI',
  },
  {
    imgSrc: '/images/category/logods.webp',
    title: 'Academic & Project-Based',
  },
  {
    imgSrc: '/images/category/mobileapp.webp',
    title: 'Tools, Technologies & Continuous Learning',
  },
  {
    imgSrc: '/images/category/contentwrite.webp',
    title: 'Content Writing',
  },
  {
    imgSrc: '/images/category/digitalmarket.webp',
    title: 'Graphic Design & Visual Content',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      {
        label: 'Projects',
        href: '/#project',
      },
      {
        label: 'Expertise',
        href: '/#expertise',
      },
      {
        label: 'Pricing',
        href: '/#pricing',
      },
      {
        label: 'Categories',
        href: '/#categories',
      },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeroData,
    NavLinkData,
    ProjectData,
    RecordData,
    ReviewData,
    SpecializeData,
    PlanData,
    CategoryData,
    FooterLinkData,
  })
}
