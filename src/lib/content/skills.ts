import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, Node JS, MySQL, POSTgreSQL',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
  { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
  { name: 'sass', icon: 'vscode-icons:file-type-sass' },
  { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
  { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
  { name: 'nodejs', icon: 'logos:nodejs-icon' },
  { name: 'reactjs', icon: 'logos:react' },
  { name: 'nextjs', icon: 'logos:nextjs-icon' },
  { name: 'vuejs', icon: 'logos:vue' },
  { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
  { name: 'bootstrap', icon: 'logos:bootstrap' },
  { name: 'redux', icon: 'logos:redux' },
  { name: 'laravel', icon: 'logos:laravel' },
  { name: 'mysql', icon: 'logos:mysql' },
  { name: 'postgresql', icon: 'logos:postgresql' },
  { name: 'mongodb', icon: 'logos:mongodb' },
  { name: 'aws', icon: 'logos:aws' },
  { name: 'azure', icon: 'logos:microsoft-azure' },
  { name: 'docker', icon: 'logos:docker' },
  { name: 'jest', icon: 'vscode-icons:file-type-jest' },
  { name: 'git', icon: 'logos:git-icon' },
  { name: 'github', icon: 'logos:github' },
  { name: 'slack', icon: 'logos:slack' }
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};
