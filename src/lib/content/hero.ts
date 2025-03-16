import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Full-Stack Developer',
  title: 'Hello i am',
  tagline: 'Judith Muthui',
  description:
    "I'm a passionate Full-Stack Developer with experience in building scalable and high-performance web applications using React.js, Next.js, Vue 3, TypeScript, TailwindCSS, Node.js, Express.js, Django, PHP (Laravel 11), MySQL, PostgreSQL, MongoDB, Microsoft SQL, and cloud platforms like AWS, Azure, and Linux.",
specialText: "Currently available for freelance.",

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
