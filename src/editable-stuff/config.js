// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Varun",
  middleName: "",
  lastName: "Vishwakarma",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/VarunVishwakarma117",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100010193850322",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/varun.sharma_117//",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/varun-vishwakarma-949b73182/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/VarunSh80960288/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "I'm a just passionate Java and android app developer who loves to explore things and achieve ambitions. Indeed, I'm just following my dream to be the person that I always dreamed of.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "VarunVishwakarma117", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 75 },
    { name: "Android", value: 50 },
    { name: "Python", value: 25 },
    { name: "Git and Github", value: 40 },
    { name: "XML", value: 60 },
    { name: "SQL", value: 55 },
    { name: "SQLite", value: 65 },
    { name: "HTML", value: 60 },
    { name: "CSS", value: 60 },
  ],
  softSkills: [
    { name: "Leadership Skills", value: 65 },
    { name: "Communication", value: 80 },
    { name: "Teamwork", value: 75 },
    { name: "Problem-solving", value: 45 },
    { name: "Time management", value: 40 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm a just passionate Java and android app developer who loves to explore things and achieve ambitions. Indeed, I'm just following my dream to be the person that I always dreamed of.",
  email: " varun.vishwakarma117@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
