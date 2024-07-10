import profile_picture from './assets/images/Profile_pic.jpg';
import JTH_pic from './assets/images/portfolio_images/JTH.png'
import ecosight from './assets/images/portfolio_images/ecosight.png'
import fuego_games from './assets/images/portfolio_images/fuego_games.png'
import weather from './assets/images/portfolio_images/weather.png'
import blokus from './assets/images/portfolio_images/blokus.jpg'
import dfa from './assets/images/portfolio_images/dfa.png'
import scraper from './assets/images/portfolio_images/scraper.png'

const logotext = "J a c k";
const meta = {
    title: "Jack Merrill",
    description: "I’m Jack Merrill, software engineer working in Salt Lake City, Utah.",
};

const introdata = {
    title: "I’m Jack Merrill",
    animated: {
        first: "I'm a software engineer",
        second: "I write efficient code",
        third: "I handle data carefully",
    },
    description: "Thank you for checking out my portfolio. Feel free to reach out with any questions.",
    your_img: profile_picture //declared up top
};

const dataabout = {
    title: "About Jack",
    aboutme: "Jack is a recent graduate from Cornell University with a bachelors of science in Computer Science and a minor in business.  He is currently employed by Oracle as a software engineer in the Energy & Water department.  In his free time, Jack enjoys spending time outdoors skiing, rock climbing, mountain biking, and sailing.  Jack is very interested in agricultural technology and how that can produce better food and reduce the human impact of climate change.",
};
const worktimeline = [{
    jobtitle: "Software Engineer Intern",
    where: "Oracle",
    date: "May 2023 - Aug 2023",
},
{
    jobtitle: "Software Engineer Intern",
    where: "US Sailing Team",
    date: "Jun 2022 - Oct 2022",
},
{
    jobtitle: "Founder & Webdesigner",
    where: "Jack's Tech Help LLC",
    date: "Apr 2020 - May 2023",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "SQL",
    value: 80,
},
{
    name: "Java",
    value: 75,
},
{
    name: "OCaml",
    value: 70,
},
{
    name: "Google Cloud Platform",
    value: 65,
},
{
    name: "Oracle Cloud",
    value: 50,

},
{
    name: "Java Script",
    value: 40,
},
{
    name: "React",
    value: 30,
},
];

const services = [{
    title: "Software Engineering",
    description: "Jack has a proven and impressive record of developing software collaboratively across organizations.  Jack has launched an IOS, created full stack solutions still in use by the US Sailing Team, and collaborated on large scale data engineering projects at Oracle.",
},
{
    title: "Agricultural Technology",
    description: "Jack has a strong interest in Agricultural Technology, horticulture, and animal science. He has designed and built a vertical hydroponic system.  At Cornell he took numerous courses in horticulture, food production, and food supply chain management. He is very interested in speaking with anyone in the agriculture technology field.",
},
{
    title: "Outdoors",
    description: "Jack is an avid alpine and backcountry skier, mountain biker, rock climber, and sailor. He has worked as a ski instructor for Aspen Snowmass and the Steamboat Resort Corporation. In his free time Jack can be found outdoors in the mountains and on lakes, rivers, or the ocean. Jack strongly believes that technology can and should be used to reduce the human effect on the climate and is very interested in any attempt to do so.",
},
];

const dataportfolio = [
    {
        title: "Eco Sight AI",
        img: ecosight,
        description: "An AI model developed from 4 different kaggle data sets which sucessfully classifies waste products into different categories with 95% accuracy.  This accuracy is greater than common human accuracy in waste sorting and thus could be implamented to improve waste sorting and recycling.",
        link: "https://github.com/jsm443/EcoSightAI",
    },
    {
        title: "Jack's Tech Help LLC",
        img: JTH_pic,
        description: "Jack's Tech Help LLC. was a web design company which sold produced over 30 websites to customers with various businesses. Leads were originally obtained organically, but after a partnership agreement with WIX was signed all leads came through the WIX marketplace. The WIX marketplace has an average lead completion rate of 1%. Jack's Tech Help LLC's completion rate was 5% demonstrating a superior sales and building ability over the marketplace average. Jack was the main salesman and developer although some tasks were outsourced to other web designers.  Jack's Tech Help LLC. also contracted out all graphic design work and some digital marketing.",
        link: "https://jacksmerrill.wixsite.com/techhelp",
    },
    {
        title: "Fuego Games",
        img: fuego_games,
        description: "Fuego Games is a web and iOS application which allows users to select the setting, number of players and time they have to play a game. The app recommends a game based on the parameters. This project was created entirely during my winter break during my freshman year of college. Fuego Games was built using WIX for the website and Flutter for the iOS app.  The app was approved and listed on the app store.",
        link: "https://jacksmerrill.wixsite.com/game/gamefinder",
    },
    {
        title: "Wind Data Display",
        img: weather,
        description: "A dashboard built with the python package plotly which is built on top of dash. The user has the option to display 8 hours, 24 hours, and 5 days worth of data.  The graph takes data in the form of a json response from a SQL query. The dashboard includes custom created arrows indicating the wind direction at each given data point. This was built for the Cornell lab of hydraulics for use with wind data from Cayuga lake.",
        link: "https://github.com/jsm443/CayugaWeather",
    },
    {
        title: "Block_Us",
        img: blokus,
        description: "This is a command line interface version of my favorite board game Blokus. It displays a visual of the board between turns and checks for each moves validity.  it is coded entirely in OCAML (a functional programming language). This project was created in a group of four students for my functional programming class during my sophomore year of college.",
        link: "https://github.com/jsm443/block_us",
    },
    {
        title: "Gale-Shapley Algorithim",
        img: dfa,
        description: "This python coding of the Gale-Shapley deferred acceptance algorithim takes two sets of objects each with a priority list and finds the best set of matches possible between them. This algorithim is used in a variety of real world scenarios, most famously to match med-students with hospitals for residency.",
        link: "https://github.com/jsm443/dfa",
    },
    {
        title: "Poem Scaper",
        img: scraper,
        description: "This project was commissioned by a poet who had stored his lifes work on a website that would no longer allow him to retrieve his poetry via a login portal.  In order to access it he was manually trying to copy and paste over 1000 poems.  I wrote this python code to do it for him in minutes and preserve thr formatting.",
        link: "https://github.com/jsm443/poem-scraper/blob/main/result.txt",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jacksmerrill@gmail.com",
    YOUR_FONE: "(802)829-9227",
    description: "Please feel free to reach out to me. I love meeting people and learning new things :).",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_hfxfrqc",
    YOUR_TEMPLATE_ID: "template_6pfe058",
    YOUR_USER_ID: "95JNMpLC7nNTBLYk4",
};

const socialprofils = {
    github: "https://github.com/jsm443",
    linkedin: "https://www.linkedin.com/in/jack-merrill/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};