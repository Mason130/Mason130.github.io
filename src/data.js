// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import Nav from "./images/logo.png";
import Resume from "./docs/Cheng_Yu_Resume.pdf";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/light.jpg";
import HeroDark from "./images/dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Mason130";

// Navbar Logo image
export const navLogo = Nav;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="teenyicons:python-solid" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="ri:java-fill" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:language-c" className="display-4" />,
    name: "C",
  },
  {
    id: 4,
    skill: <Icon icon="akar-icons:django-fill" className="display-4" />,
    name: "Django",
  },
  {
    id: 5,
    skill: <Icon icon="bxl:spring-boot" className="display-4" />,
    name: "Spring Boot",
  },
  {
    id: 6,
    skill: <Icon icon="gravity-ui:abbr-sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 7,
    skill: <Icon icon="file-icons:matlab" className="display-4" />,
    name: "MATLAB",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:pytorch" className="display-4" />,
    name: "PyTorch",
  },
  {
    id: 9,
    skill: <Icon icon="ion:logo-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 10,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <Icon icon="teenyicons:docker-outline" className="display-4" />,
    name: "Docker",
  },
  {
    id: 12,
    skill: <Icon icon="mdi:aws" className="display-4" />,
    name: "AWS",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = Resume;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["django-site", "AI_GOMOKU"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  // {
  //   name: "django-site",
  //   image: Logo,
  // },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xkndzoqy";
