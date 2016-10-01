export default {
	projects: [
		{
			name: 'Ximer',
			url: 'http://ximer.io (no longer live)',
			description: 'Ximer is a web-based digital audio workstation designed to allow users to record short audio loops and combine them with the use of effects to construct an audio track. With a timeline and drag and drop functionality built on top of the Web Audio framework, Tone.js, the interface built over a series of days had comparable features to that of fully functioning digital audio workstations.',
			myRole: 'I was chosen by my teammates to be Team Lead and Project Manager of for Ximer. With only three weeks to complete the project, focusing our efforts was essential. Much of my time in the early parts of this project involved prototyping the timeline functionality and the recording of audio while delegating work amongst the team. With a strict deadline, our end goal was in constant motion yet as a team we exceeded expectations - hitting nearly every major feature we mapped during the first week.',
			technologies: ['Angular', 'Mongo', 'Node', 'AWS (S3)', 'Tonejs', 'Javascript', 'SCSS', 'Digital Ocean', 'NGINX'],
			date: 'Spring 2015'
		},
		{
			name: 'Websynth',
			url: 'http://websynth.herokuapp.com/',
			description: "Websynth is a web-based polyphonic synthesizer built on the back of Tonejs. This was a hackathon project originally completed during my cohort's 3 day hackathon at Fullstack Academy. It is equipped with common functionality to a desktop synthesizer as well as an effects rack. To use this application you need a usb midi keyboard device plugged into your computer.",
			myRole: 'I was the sole developer on this project - winning the award for the Most Technically Challenging Hackathon Project at Fullstack Academy.',
			technologies: ['Angular', 'Web Audio API', 'Node', 'Tonejs', 'Javascript', 'SCSS', 'Heroku', 'Gulp'],
			date: 'Spring 2015'
		},
		{
			name: 'React Component Generator',
			url: 'https://github.com/k23Burke/react-component-generator',
			description: "This project is a small npm module created to assist developers writing React applications. By generating files that adheres to (my) standard of a React components, reducers, and specs, it is meant to get users to stay on the command line. The module itself is very perscriptive in terms of its assumptions about the react environment but does try to enforce best practices.",
			myRole: 'I am the sole developer on this project. It is in a constant state of improvement - and still trying to stay on the command line more!',
			technologies: ['Node', 'React'],
			date: 'Spring 2016'
		}
	],
	workExperience: [
		{
			company: 'Resonate',
			url: 'https://resonate.is/',
			myRole: 'For the past couple weeks I have been dedicating spare time working as a volunteer for Reonsate\'s software needs. My work has largely been focused on building out the Audio Player which will be crucial for the success of their crowdfunding campaign. Resonate\'s team is spead across the the globe making communication and management necessary for the success of this product.',
			// projects: ['Audio Player'],
			technologies: ['Javascript', 'Gulp', 'Amplitudejs'],
			date: 'Summer 2016 - Present'
		},
		{
			company: 'Skylark',
			url: 'https://skylark.com/',
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
		},
		{
			company: '1800Accountant',
			url: 'https://1800accountant.com',
			myRole: 'I was the lead in-house developer working with a tech team of two responsible for building out their online bookkeeping software. With such a small team I was responsible for deisgn and development for not only their customer facing site but also the landing pages and campaigns partered with companies such as Legalzoom and Sam\'s Club. Under the guidance of CTO, I was also responsible for building integrations with Salesforce.',
			technologies: ['PHP', 'Javascript', 'Cake PHP', 'Salesforce', 'MySQL'],
			date: 'Winter 2013 - Spring 2015'
		},
		{
			company: 'Black Forest Pastry Shop',
			url: 'http://blackforestpastryshop.com/',
			myRole: 'Sole developer during this three month project spent working with a designer to create a customer facing website for a bakery shop.',
			technologies: ['PHP', 'Wordpress', 'Javascript'],
			date: 'Winter 2014'
		}
	],
	education: [
		{
			name: 'Fullstack Academy',
			url: 'http://www.fullstackacademy.com/',
			location: 'New York, NY',
			date: 'Spring 2015',
			brief: 'An intense and immerseive three month coding bootcamp focusing on javascript and the MEAN stack',
		},
		{
			name: 'Endicott College',
			url: 'http://www.endicott.edu/',
			location: 'Beverly, MA',
			date: '2009 - 2013',
			brief: 'Business Admin Major: focus in Computer Information Systems | 3.8 GPA | President\'s Scholar | Magna Cum Laude | 4 year starter & 1 year Lacrosse Captain',
		},
		{
			name: 'Florence University of the Arts',
			url: 'http://fua.it/',
			location: 'Florence, Italy',
			date: 'Fall 2012',
			brief: 'Focus in Graphic Design and Photography | Photograph featured in school\'s end of year gallery',
		}
	],
	allowed: false
}
