interface ProjectInterface {
	name: string;
	url: string;
	description: string;
	myRole: string;
	technologies: string[];
	date: string;
}

class Project implements ProjectInterface {
	name: string = '';
	url: string = '';
	description: string = '';
	myRole: string = '';
	technologies: string[] = [];
	date: string = '';
}

const YogaPoseClassification: Project = {
	name: 'Yoga Pose Classification',
	url: 'https://github.com/oftenfrequent/yoga-pose-classification',
	description: 'A series of neural networks to explore the classification of yoga poses. The project is built on top of the PyTorch.js framework and uses keypoints to determine the pose of a user. The project is currently in development and will soon feature a web-based interface to allow users to interact with the model.',
	myRole: 'The project was scoped, designed, and developed by me. I have been interested in exploring the use of machine learning for physical therapy and posture-related applications for some time and found this as a great opportunity to do so.',
	technologies: ['Python', 'Detectron', 'PyTorch', 'Kaggle', 'OpenCV', 'Numpy'],
	date: 'Spring 2023'
}

const YewThereYet: Project = {
	name: 'Are Yew There Yet?',
	url: 'http://yew.kylejburke.com/',
	description: 'A choose your own adventure story following a character who is subsumed into the diaspora of health information on the web. It featues several different endings depending on the path chosen throughout the story.',
	myRole: 'The piece was design, developed, and written by me with useful edits from friends and colleagues in our club. I have been interested in experimenting with story-tellling in the browser for some time and found this as a great opportunity to do so.',
	technologies: ['Javascript', 'React', 'Tonejs', 'Styled Components', 'Digital Storytelling'],
	date: 'Spring 2021'
}

const EurorackModuleSynthesizer: Project = {
	name: 'Eurorack Module Synthesizer',
	url: 'http://eurorack.kylejburke.com',
	description: 'The Eurorack is a one-of-a-kind module synthesizer built for the web browser. Inspired by its anolog counterparts, the eurorack is unique in its ability to allow users to customize a modular set up and interface with it in an infinite number of ways. Built on top of the Web Audio Framework, Tone.js, the eurorack will soon feature educational walkthroughs providing users with the opportunity to learn hands-on about synthesis and digital sound engineering.',
	myRole: 'This was a personal project initially completed over a two month period and has since been in a constant state of improvement. I have scoped, designed, and developed the project all on my own. For the best experience, please use a laptop or desktop running Google Chrome web browser.',
	technologies: ['Javascript', 'React', 'Redux', 'Webpack', 'Node', 'Express', 'Tonejs',  'SCSS', 'Digital Ocean', 'NGINX'],
	date: 'Winter 2017'
}

const Ximer: Project = {
	name: 'Ximer',
	url: 'https://www.youtube.com/watch?v=eExYsVEG2NU',
	description: 'Ximer is a web-based digital audio workstation designed to allow users to record short audio loops and combine them with the use of effects to construct an audio track. With a timeline and drag and drop functionality built on top of the Web Audio framework, Tone.js, the interface built over a series of days had comparable features to that of fully functioning digital audio workstations.',
	myRole: 'I was chosen by my teammates to be Team Lead and Project Manager of for Ximer. With only three weeks to complete the project, focusing our efforts was essential. Much of my time in the early parts of this project involved prototyping the timeline functionality and the recording of audio while delegating work amongst the team. With a strict deadline, our end goal was in constant motion yet as a team we exceeded expectations - hitting nearly every major feature we mapped during the first week.',
	technologies: ['Javascript', 'Angular', 'Mongo', 'Node', 'Express', 'AWS (S3)', 'Tonejs', 'SCSS', 'Digital Ocean', 'NGINX'],
	date: 'Spring 2015'
}

const Websynth: Project = {
	name: 'Websynth',
	url: 'http://websynth.herokuapp.com/',
	description: "Websynth is a web-based polyphonic synthesizer built on the back of Tonejs. This was a hackathon project originally completed during my cohort's 3 day hackathon at Fullstack Academy. It is equipped with common functionality to a desktop synthesizer as well as an effects rack. To use this application you need a usb midi keyboard device plugged into your computer.",
	myRole: 'I was the sole developer on this project - winning the award for the Most Technically Challenging Hackathon Project at Fullstack Academy.',
	technologies: ['Javascript', 'Angular', 'Web Audio API', 'Node', 'Tonejs', 'SCSS', 'Heroku', 'Gulp'],
	date: 'Spring 2015'
}

const ReactComponentGenerator: Project = {
	name: 'React Component Generator',
	url: 'https://github.com/k23Burke/react-component-generator',
	description: "This project is a small npm module created to assist developers writing React applications. By generating files that adheres to (my) standard of a React components, reducers, and specs, it is meant to get users to stay on the command line. The module itself is very perscriptive in terms of its assumptions about the react environment but does try to enforce best practices.",
	myRole: 'I am the sole developer on this project. It is in a constant state of improvement - and still trying to stay on the command line more!',
	technologies: ['Node', 'React', 'cli'],
	date: 'Spring 2016'
}

const projects: Project[] = [
	YogaPoseClassification,
	YewThereYet,
	EurorackModuleSynthesizer,
	Ximer,
	Websynth,
	ReactComponentGenerator
]

export default projects;