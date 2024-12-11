import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Software Developer',
  title: 'Hello i am',
  tagline: 'Judith Muthui',
  description:
    "Skilled Full-Stack Developer with expertise in Node.js, TypeScript, RESTful APIs, authentication, database optimization, and scalable systems. Proficient in asynchronous programming, event-driven architecture, and Git for collaboration..",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
