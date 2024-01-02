export type Education = {
	name: string;
	url: string;
	location: string;
	date: string;
	brief: string;
}

const brainstation: Education = 
{
  name: 'Brain Station',
  url: 'https://brainstation.io/',
  location: 'Vancover, BC',
  date: 'Spring 2023',
  brief: 'An three month intensive bootcamp focusing on the skills required for Data Science and Machine Learning',
}

const functionalPatterns: Education =
{
  name: 'Functional Patterns',
  url: 'https://functionalpatterns.com/',
  location: 'Madrid, Spain',
  date: 'Spring 2022',
  brief: 'Human Biomechanics Specialist Certification Level 1. A 4 day intensive course focusing on the biomechanics of the human body and how to correct imbalances through movement.',
}

const fullstackAcademy: Education =
{
  name: 'Fullstack Academy',
  url: 'http://www.fullstackacademy.com/',
  location: 'New York, NY',
  date: 'Spring 2015',
  brief: 'An intense and immerseive three month coding bootcamp focusing on javascript and the MEAN stack',
}

const endicottCollege: Education =
{
  name: 'Endicott College',
  url: 'http://www.endicott.edu/',
  location: 'Beverly, MA',
  date: '2009 - 2013',
  brief: 'Business Admin Major: focus in Computer Information Systems | 3.8 GPA | President\'s Scholar | Magna Cum Laude | 4 year starter & 1 year Lacrosse Captain',
}

const florenceUniversity: Education =
{
  name: 'Florence University of the Arts',
  url: 'http://fua.it/',
  location: 'Florence, Italy',
  date: 'Fall 2012',
  brief: 'Focus in Graphic Design and Photography | Photograph featured in school\'s end of year gallery',
}




const education: Education[] = [
  brainstation,
  functionalPatterns,
  fullstackAcademy,
  endicottCollege,
  florenceUniversity
]

export default education;

