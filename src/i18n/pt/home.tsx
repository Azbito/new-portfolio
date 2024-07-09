import GFChaos from "@/images/gfchaos.png";
import * as BoxIcon from "react-icons/bi";
import * as SimpleIcon from "react-icons/si";
import * as RemixIcon from "react-icons/ri";
import * as FontAwesome from "react-icons/fa";
import { ProjectsProps } from "@/_types/projects";
import { RepositoriesProps } from "@/_types/repositories";

export const TPortuguese = {
  technologiesTitle: "Tecnologias",
  highlightTitle: "Repositórios Em Destaque",
  seeMore: "Ver mais",
  projectsTitle: "Projetos",
  languageTitle: "Linguagem",
  all: "Todos",
  noDescription: "Não tem descrição, mas parece bacana! c:",
  marketing: "Caso queira ver mais,",
  clickHere: "clique aqui.",
  welcome: "Bem-vindo(a)!",
  name: "Me chamo Thiago",
  developer: "Sou desenvolvedor",
  haveALook: "Dê uma olhadinha nas minhas coisas! c:",
};

export const mainRepositories: RepositoriesProps[] = [
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "FindGyms",
    description:
      "Uma aplicação backend para encontrar academias próximas e fazer check-ins, autenticando estudantes de acordo com sua posição em tempo real. Foi desenvolvido utilizando a metodologia SOLID.",
    link: "https://github.com/Azbito/nodejs-solid",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <SimpleIcon.SiFastify />,
    title: "Prática de JWT & AWS S3",
    description: "Criado para praticar CRUD, JWT e AWS S3.",
    link: "https://github.com/Azbito/forum-jwt-study",
  },
  {
    language: <RemixIcon.RiJavascriptFill />,
    technology: <RemixIcon.RiNextjsFill />,
    title: "AWS Amplify & GraphQL",
    description:
      "Repositório para aprender mais sobre os serviços da Amazon — Amplify com GraphQL.",
    link: "https://github.com/Azbito/amplify-graphql-study",
  },
  {
    language: <BoxIcon.BiLogoTypescript />,
    technology: <FontAwesome.FaReact />,
    title: "Starship",
    description:
      "É uma prática de API Rest! A API foi feita pelo meu irmão Marcos Roque.",
    link: "https://github.com/Azbito/Starship",
  },
];

export const projects: ProjectsProps[] = [
  {
    id: 1,
    image: GFChaos,
    name: "GF Chaos",
    description: `Desenvolvedor de sistemas para um servidor MMORPG privado, focado na implementação de novos recursos, correções de bugs e otimização de desempenho.<br><br>
        Desenvolvimento e manutenção de interfaces front-end para o servidor MMORPG GFChaos, garantindo uma experiência otimizada para aproximadamente 100 jogadores online diariamente.<br><br>
        Responsável pela construção e gestão do servidor Discord, facilitando a interação e comunicação entre aproximadamente 1000 membros.<br><br>
        Adição de novos conteúdos e funcionalidades ao jogo para proporcionar uma experiência dinâmica e envolvente para a comunidade.<br><br>
        Utilização de habilidades de engenharia reversa para resolver problemas técnicos complexos e otimizar o desempenho do servidor.<br><br>
        Revisão e correção de traduções em inglês e francês.<br><br>
        Melhoria do launcher, desenvolvido em Electron, para medidas de segurança contra cheats.`,
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
    name: "Editor de Mapa FSM & SMP",
    description: `Editor de mapas de jogo que gera mapas a partir de arquivos de Máquina de Estado Finita (FSM) e colisões via arquivos SMP para o jogo GFChaos.<br><br>
    <br><br>
    <br><br>
    RECURSOS:<br><br>
    - Manipulação de objetos em um mapa;<br><br>
    - Manipulação de heightmap;<br><br>
    - Manipulação de texturas;<br><br>
    - Manipulação de colisões.<br><br>`,
    used_technologies: [<BoxIcon.BiLogoCPlusPlus />],
  },
  {
    id: 3,
    name: "Anticheat",
    description:
      "Impede que o usuário manipule a memória do jogo GFChaos, bloqueando programas como IDA, OLLYDBG, CheatEngine, etc., para que não sejam executados simultaneamente ao jogo. Para evitar que o jogador trapaceie em filas ranqueadas para obter a classificação mais alta, foi aplicada a técnica de mutex. Portanto, o jogador não pode abrir o launcher/executável mais de uma vez. Se tentar abrir, ele fechará e o jogo continuará normalmente. Atividades maliciosas são detectadas e enviadas para um chat de servidor de Staff via webhooks.",
    used_technologies: [
      <BoxIcon.BiLogoCPlusPlus />,
      <SimpleIcon.SiAssemblyscript />,
    ],
  },
  {
    id: 4,
    name: "Desafio Pigz",
    description:
      "Software para entregadores. O entregador pode se registrar usando e-mail e senha ou mesmo com sua conta do Google. Se o cliente fizer o pedido, uma nova entrega será notificada no celular do entregador com o endereço. Cada entrega aceita/recusada será contada e mostrará na tela quantas foram aceitas e recusadas. No final, o valor ganho no dia aparece na tela.",
    used_technologies: [<FontAwesome.FaReact />],
  },
  {
    id: 5,
    name: "FindGyms — Backend",
    description:
      "Um projeto backend que realiza CRUD de academias, check-ins e alunos. Os alunos só podem fazer check-in se estiverem realmente na academia usando uma fórmula matemática para calcular isso. A autenticação dos alunos é feita por token JWT.",
    used_technologies: [
      <SimpleIcon.SiFastify />,
      <BoxIcon.BiLogoTypescript />,
      <SimpleIcon.SiPrisma />,
    ],
  },
  {
    id: 6,
    name: "Fórum — Backend",
    description:
      "Um projeto backend que realiza CRUD de usuários e posts. A autenticação é feita por token JWT. Os usuários podem postar suas opiniões com a comunidade, excluir suas próprias postagens e também usar sua própria foto de perfil fazendo upload delas no bucket AWS S3.",
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
      "Um site interativo para a comunidade de desenvolvedores onde os usuários podem postar suas dúvidas de codificação. Aqueles que oferecem ajuda podem se envolver em chats em tempo real para editar código separadamente. Além disso, os usuários podem iniciar chats privados—ideal para cenários como desenvolvedores juniores buscando orientação de seniors dentro de uma empresa, permitindo que seniors editem seu código diretamente sem precisar de um pull request formal.",
    used_technologies: [
      <BoxIcon.BiLogoTypescript />,
      <RemixIcon.RiNextjsFill />,
    ],
  },
];
