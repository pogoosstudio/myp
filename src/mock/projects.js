import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'Todos',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Codigo Abierto',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Pogo OS Website',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Express'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
    ],
    description:
      'Este proyecto es el sitio web de mi bot de discord.',
    sourceLink: 'https://www.pogoos.com/',
    category: [PROJECT_CATEGORY.ALL],
  },
  {
    imgSrc: 'https://images2.imgbox.com/b5/bb/6f5g9QBE_o.png',
    title: 'Pogo OS Discord Bot',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'MongoDB'),
      getSkillByLabel(FRONTEND_SKILLS, 'Node.js'),
    ],
    description:
      'Este proyecto es un bot de discord con múltiples funciones desarrollado usando la biblioteca Discord.js v14',
    sourceLink: 'https://www.pogoos.com/invite',
    category: [PROJECT_CATEGORY.ALL],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'DioverDM - Mi Portafolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'HTML',
        icon: 'logos:html',
      },
    ],
    description:
      'Este proyecto es mi portafolio actual y el mismo sitio web que estas visitando justo ahora',
    sourceLink: 'https://www.dioverdm.com',
    category: [PROJECT_CATEGORY.ALL],
  },
];
