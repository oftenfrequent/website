export default {
	projects: [
		{
			name: 'Ximer',
			url: 'no longer live',
			description: 'A web-based digital audio workstation that was designed to allow users to record short audio loops and combine them with the use of effects to construct an audio track. Project was featured on Fox 5 news (https://www.youtube.com/watch?v=pUChD3HGAK4).',
			myRole: 'I was chosen by my teammates to be Team Lead and Project Manager of this project. I largely spent time building out the logic involved with a functioning audio timeline, the recording of audio, and the front end associated with the digital audio workstation. The project was completed in a three week timespan.',
			technologies: ['Angular', 'Mongo', 'Node', 'AWS (S3)', 'Tonejs', 'Javascript', 'SCSS', 'Digital Ocean', 'nginx'],
			date: 'Spring 2015'
		},
		{
			name: 'Websynth',
			url: 'http://websynth.herokuapp.com/',
			description: "A web-based polyphonic synthesizer built on the back of Tonejs. This was a hackathon project originally completed during my cohort's 3 day hackathon at Fullstack Academy. To use this application you need a usb midi keyboard device plugged into your computer.",
			myRole: 'I was the sole developer on this project - winning the award for the Most Technically Challenging Hackathon Project at Fullstack Academy',
			technologies: ['Angular', 'Web Audio API', 'Node', 'Tonejs', 'Javascript', 'SCSS', 'Heroku', 'Gulp'],
			date: 'Spring 2015'
		},
		{
			name: 'React Component Generator',
			url: 'https://github.com/k23Burke/react-component-generator',
			description: "An npm module built to assist developers writing React applications to stay on the command line but allowing them to generate basic React components, reducers, and specs. The module itself is very perscriptive in terms of its assumptions about the react environment but does try to enforce best practices.",
			myRole: 'I was the sole developer on this project - and still trying to stay on the command line more!',
			technologies: ['Node', 'React'],
			date: 'Spring 2016'
		}
	],
	workExperience: [
		{
			company: 'Resonate',
			url: 'https://resonate.is/',
			myRole: 'I have been working as a volunteer for the software needs. My work has largely been focused on building out the Audio Player which will be utilized during the crowdfunding campaign. As a team spead across the the globe, communication and management have been focus points for me during this time as well.',
			// projects: ['Audio Player'],
			technologies: ['Javascript', 'Gulp', 'Amplitudejs'],
			date: 'Summer 2016 - Present'
		},
		{
			company: 'Skylark',
			url: 'https://skylark.com/',
			myRole: 'As a fullstack developer, I worked on both the frontend applications built on React/Redux and the backend software running Ruby on Rails. After building and managing several applications in Angular, we worked to port over our main customer facing application from Angular to React.',
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
			myRole: 'Lead in-house developer for online bookkeeping software. Under the guidance of CTO, built integrations with Salesforce.',
			technologies: ['PHP', 'Javascript', 'Cake PHP', 'Salesforce', 'MySQL'],
			date: 'Winter 2013 - Spring 2015'
		},
		{
			company: 'Black Forest Pastry Shop',
			url: 'http://blackforestpastryshop.com/',
			myRole: 'Sole developer working with a designer to create a customer facing website for a bakery shop.',
			technologies: ['PHP', 'Wordpress', 'Javascript'],
			date: 'Winter 2014'
		}
	],
	education: [
		{
			name: 'Fullstack Academy',
			location: 'New York, NY',
			date: 'Spring 2015',
			brief: 'An intense and immerseive three month coding bootcamp focusing on javascript and the MEAN stack',
		},
		{
			name: 'Endicott College',
			location: 'Beverly, MA',
			date: '2009 - 2013',
			brief: 'Business Admin Major: focus in Computer Information Systems | 3.8 GPA | President\'s Scholar | Magna Cum Laude | 4 year starter & 1 year Lacrosse Captain',
		},
		{
			name: 'Florence University of the Arts',
			location: 'Florence, Italy',
			date: 'Fall 2012',
			brief: 'Focus in Graphic Design and Photography | Photograph featured in school\'s end of year gallery',
		}
	]
}
