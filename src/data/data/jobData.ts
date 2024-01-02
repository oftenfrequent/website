export type WorkExperience = {
	company: string;
	url: string;
	description: string;
	myRole: string;
	technologies: string[];
	date: string;
}

const MochiGameClub: WorkExperience =
{
  company: 'Mochi Game / Club',
  url: 'https://mochi.club/',
  description: 'An inclusive digital-first community learning together how to solve life\'s challenges - as a group. We built proprietary technology that encourages atomic habits, host (mostly) online events, and various club goods. Together we are building the future of communities by creating protocols, designing technology, and sharing experiences with those that inspire us.',
  myRole: 'Co-founder and lead technologist of the Mochi game, club, and lifestyle. I work as a fullstack engineer building our custom accountability system and solving other technical challenges.',
  technologies: ['React', 'Python', 'Django', 'Ethereum', 'Game Design', 'Heroku', 'Community-building', 'OpenAI', 'Rollbar', 'Celery'],
  date: 'Summer 2019 - Right Now'
}

const UjoMusic: WorkExperience =
{
  company: 'Ujo Music / ConsenSys',
  url: 'https://ujomusic.com/',
  description: 'The original decentralized music marketplace built on the Ethereum network. Our goal was to empower creators through decentralized technology.',
  myRole: 'Hired as the lead application engineer while the team was still in single digits, I was successfully able to develop and launch the original decentralized music marketplace. While my work was largely focused on engineering in the first year, my scope grew to business development as I helped the team make strategic product decisions and human resources as I wrote the team handbook and redesigning the hiring protocol while the team scaled to double its size.',
  // projects: ['Audio Player'],
  technologies: ['React', 'IPFS', 'Ethereum', 'Web3', 'TDD', 'Nextjs', 'ERC-721s', 'Connext State Channels'],
  date: 'Summer 2017 - Spring 2020'
}

const Resonate: WorkExperience =
{
  company: 'Resonate',
  url: 'https://resonate.is/',
  description: 'A community-owned music network pioneering the future of music with concepts such as stream2own and platform as a cooperative.',
  myRole: 'For several months I dedicated spare time working as a volunteer for Reonsate\'s software needs. My work was largely focused on building out their Audio Player which was crucial for the success of their original crowdfunding campaign.',
  technologies: ['Javascript', 'Gulp', 'AWS', 'PHP'],
  date: 'Summer 2016 - Winter 2016'
}

const Skylark: WorkExperience =
{
  company: 'Skylark',
  url: 'https://skylark.com/',
  description: 'Building the future of luxury travel through the pairing of better technology and the utilization of a network of travel agents.',
  myRole: 'As a fullstack developer, I worked on both the frontend applications built on React/Redux and the backend software running Ruby on Rails. After building and managing several applications in Angular, we worked to port over our main customer facing application from Angular to React. Projects throughout my time at Skylark included the Flight Selection Page, a page heavy in data processing that allowed users to narrow down hundreds of flights to the desired option, replacing standard HTTP requests with websocket communication, and a tool for travel agents to manage customer activity on our site amongst other projects.',
  // projects: [
    // 	{
    // 		name: 'Travel Agent Tools',
    // 		description: "A three month Angular project completed in a little over a month, this project had chat functionality and user monitoring software in order to facilitate agents interacting with users on site.",
    // 		technologies: ['Node', 'Angular', 'Mixpanel'], //  'Customer.io', 'Segment'
    // 		date: 'Spring 2016'
    // 	},
    // 	{
    // 		name: 'Flight Selection Page',
    // 		description: "One aspect of the main application similar to most other flight selections. However there was a heavy deal of data process going on in order to calculate filters and fix for price.",
    // 		technologies: ['Angular', 'React'],
    // 		date: 'Winter 2015'
    // 	},
    // 	{
    // 		name: 'Flight Selection Page',
    // 		description: "One aspect of the main application similar to most other flight selections. However there was a heavy deal of data process going on in order to calculate filters and fix for price.",
    // 		technologies: ['Angular', 'React'],
    // 		date: 'Winter 2015'
    // 	}
    // ],
  technologies: ['Javascript', 'Gulp', 'React', 'AWS', 'Angular', 'Mixpanel', 'Sabre', 'Ruby', 'Rails', 'Redux', 'Mocha', 'Chai', 'SockJS', 'Braintree'],
  date: 'Summer 2015 - Summer 2016'
}

const Accountant: WorkExperience =
{
  company: '1800Accountant',
  url: 'https://1800accountant.com',
  description: 'Personal access to a network of CPAs who can solve your tax and business concerns.',
  myRole: 'I was the lead in-house developer working with a tech team of two, responsible for building out the online bookkeeping software. With such a small team I was responsible for design and development for not only their customer facing site but also the landing pages and campaigns partnered with companies such as Legalzoom and Sam\'s Club. Under the guidance of the CTO, I was also responsible for building integrations with Salesforce.',
  technologies: ['PHP', 'Javascript', 'Cake PHP', 'Salesforce', 'MySQL'],
  date: 'Winter 2013 - Spring 2015'
}

const BlackForestPastryShop: WorkExperience =
{
  company: 'Black Forest Pastry Shop',
  url: 'http://blackforestpastryshop.com/',
  description: 'German-styled bakery shop located in the heart of Greenwich, Connecticut.',
  myRole: 'Sole developer during this three month project spent working with a designer to create a customer facing website for a bakery shop.',
  technologies: ['PHP', 'Wordpress', 'Javascript'],
  date: 'Winter 2014'
}


const workExperience: WorkExperience[] = [
  MochiGameClub,
  UjoMusic,
  Resonate,
  Skylark,
  Accountant,
  BlackForestPastryShop
]

export default workExperience;