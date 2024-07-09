import GFChaos from "@/images/gfchaos.png";
import * as BoxIcon from "react-icons/bi";
import * as SimpleIcon from "react-icons/si";
import * as RemixIcon from "react-icons/ri";
import * as FontAwesome from "react-icons/fa";
import { ProjectsProps } from "@/_types/projects";
import { RepositoriesProps } from "@/_types/repositories";

export const TEnglish = {
  technologiesTitle: "Technologies",
  highlightTitle: "Highlighted Repositories",
  seeMore: "See more",
  projectsTitle: "Projects",
  languageTitle: "Language",
  all: "All",
  noDescription: "There's no description, but it looks interesting! c:",
  marketing: "If you want to see more,",
  clickHere: "click here.",
  welcome: "Welcome!",
  name: "I am Thiago",
  developer: "I am developer",
  haveALook: "Have a look at my stuffs! c:",
};

export const mainRepositories: RepositoriesProps[] = [
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "FindGyms",
    description:
      "A backend application to find near gyms, and checkout, authenticate students according to their real-time position. It was also developped by using SOLID methodology",
    link: "https://github.com/Azbito/nodejs-solid",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "JWT & AWS S3 practice",
    description: "Created in order to practice CRUD, JWT and AWS S3",
    link: "https://github.com/Azbito/forum-jwt-study",
  },
  {
    language: <RemixIcon.RiJavascriptFill />,
    technology: <RemixIcon.RiNextjsFill />,
    title: "AWS Amplify & GraphQL",
    description:
      "Repository to learn more about Amazon services — Amplify with GraphQL",
    link: "https://github.com/Azbito/amplify-graphql-study",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <FontAwesome.FaReact />,
    title: "Starship",
    description:
      "It's an API Rest practice! The API was made by my brother Marcos Roque",
    link: "https://github.com/Azbito/Starship",
  },
];

export const projects: ProjectsProps[] = [
  {
    id: 1,
    image: GFChaos,
    name: "GF Chaos",
    description: `Systems developer for a private MMORPG server, focused on implementing new features, bug fixes, and performance optimization.<br><br>
        Developing and maintaining front-end interfaces for the MMORPG server GFChaos, ensuring an optimized user experience for approximately 100 daily online players.<br><br>
        Responsible for building and managing the Discord server, facilitating interaction and communication among approximately 1000 members.<br><br>
        Adding new content and features to the game to provide a dynamic and engaging experience for the community.<br><br>
        Utilizing reverse engineering skills to solve complex technical issues and optimize server performance.<br><br>
        Reviewing and correcting translations in English and French.<br><br>
        Improving the launcher, built in Electron, for anti-cheat security measures.`,
    used_technologies: [
      <BoxIcon.BiLogoTypescript />,
      <RemixIcon.RiNextjsFill />,
      <SimpleIcon.SiAssemblyscript />,
      <SimpleIcon.SiTailwindcss />,
    ],
    public_link: "https://gfchaos.com/",
  },
  {
    id: 2,
    name: "FSM & SMP Map Editor",
    description: `Game map editor that generates maps from Finite State Machine (FSM) files and collision via SMP files for the GFChaos game.<br><br>
    <br><br>
    <br><br>
    FEATURES:<br><br>
    - Manipulating objects on a map;<br><br>
    - Highmap manipulation;<br><br>
    - Texture manipulation;<br><br>
    - Collision manipulation.<br><br>`,
    used_technologies: [<BoxIcon.BiLogoCPlusPlus />],
  },
  {
    id: 3,
    name: "Anticheat",
    description:
      "It does not allow the user to manipulate the GFChaos game memory by blocking programs such as IDA, OLLYDBG, CheatEngine, etc. do not run at the same time as the game is running. To prevent the player from cheating in ranked queues to get the highest ranking, the mutex technique was applied. Therefore, the player cannot open the launcher/executable more than once. If you try to open it, it will close and the game will continue normally. Malicious activities are detected and sent to a Staff server chat via webhooks.",
    used_technologies: [
      <BoxIcon.BiLogoCPlusPlus />,
      <SimpleIcon.SiAssemblyscript />,
    ],
  },
  {
    id: 4,
    name: "Pigz Challenge",
    description:
      "Software for delivery people. The delivery person can register using email and password or even with their Google account. If the customer places the order, a new delivery will beep on the delivery person's cell phone stating the address. Each accepted/rejected delivery will be counted and show on the screen how many were accepted and rejected. In the end, the amount earned on the day appears on the screen.",
    used_technologies: [<FontAwesome.FaReact />],
  },
  {
    id: 5,
    name: "FindGyms — Backend",
    description:
      "A backend project that CRUD gyms, checkouts and students. Students can only checkout if they are really in the gym by using a math formula for calculate it. Students' authentication are made by JWT Token.",
    used_technologies: [
      <SimpleIcon.SiFastify />,
      <BoxIcon.BiLogoTypescript />,
      <SimpleIcon.SiPrisma />,
    ],
  },
  {
    id: 6,
    name: "Forum — Backend",
    description:
      "A backend project that CRUD users and posts. The authentication is made by JWT Token. Users can post their thoughts with the community, delete their own posts and also use their own profile picture by uploading them in the AWS S3 bucket.",
    used_technologies: [
      <SimpleIcon.SiFastify />,
      <BoxIcon.BiLogoTypescript />,
      <SimpleIcon.SiPrisma />,
      <FontAwesome.FaAws />,
    ],
  },
  {
    id: 7,
    name: "Cuba",
    description:
      "An interactive website for the developer community where users can post their coding doubts. Those offering help can engage in real-time chats to edit code separately. Additionally, users can initiate private chats—ideal for scenarios such as junior developers seeking guidance from seniors within an enterprise, allowing seniors to edit their code directly without requiring a formal pull request.",
    used_technologies: [
      <BoxIcon.BiLogoTypescript />,
      <RemixIcon.RiNextjsFill />,
    ],
  },
];
