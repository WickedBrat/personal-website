export default function getBlogs() {
	return [
		{
			id: 1,
			url: "https://medium.com/@wickedbrat/how-to-experience-time-f10e26bab362",
			date: "Apr 10, 2021",
			heading: "How we experience time",
			description: `As every day passes, our problems seem to get bigger and bigger.
    We start by thinking of what-was, then we stumble upon
    what-could-have-been, and then, staring back into our eyes, the
    harsh reality of what-is stuns us to the core with the realization
    of what-is-not.`,
			labels: ["Life", "Motivation", "Time", "Childhood", "Struggle"],
			social: ["medium"]
		},
		{
			id: 2,
			url: "https://medium.com/@wickedbrat/being-a-college-student-could-be-overwhelming-71b5ea968517",
			date: "May 1, 2020",
			heading: "Being a college student could be overwhelming",
			description: `Being a college student could be overwhelming. It had just been 
    a matter of months that you’ve completed the “routine” of the school, passed the
    exam that probably lakhs and lakhs of students from the country have appeared for.
    You made it to college. The newfound freedom, the unknown faces, the uncertainty of
    not knowing what to do when your father isn’t pestering you with benefits of waking
    up at 6 or 7 in the morning.…`,
			labels: ["Life", "Motivation", "Student", "College", "Productivity"],
			social: ["medium"]
		},
		{
			id: 3,
			url: "https://medium.com/@wickedbrat/being-a-college-student-could-be-overwhelming-71b5ea968517",
			date: "Apr 12, 2020",
			heading: "Do you have a pet?",
			description: `Do you have a pet? If not, you must have observed the daily routine
    of that of a dog, right? What does a dog do from the start of the day to the last
    thing it sees before closing its eyes at night? Well, one thing that you must be
    wondering is that what the hell is this article about? Productivity of a dog's
    schedule? Which exactly is my point here. Now imagine yourself on a day when
    you've done nothing. Slept 18 hours a day, ate, and d`,
			labels: ["Life", "Motivation", "Student", "College", "Productivity"],
			social: ["medium"]
		},
		{
			id: 4,
			url: "https://medium.com/@wickedbrat/open-source-summer-intern-a4a19240ea40",
			date: "Dec 23, 2018",
			heading: "Open Source Summer Internships",
			description: `As we reach the winter solstice, many of us undergrads would have 
    started trying for summer internships in open source. This seemed like a good time
    for this post as usually we don’t find an outlook on what needs to be done. I’ll try 
    to present all the options that might be available to you and the fallback paths too. 
    If I miss something or any doubt that you think should be addressed in this article, 
    feel free to comment, I’ll try to update it! All the best!`,
			labels: [
				"Internships",
				"Summer",
				"Open Source",
				"College",
				"Productivity",
			],
			social: ["medium"]

		},
		{
			id: 5,
			url: "https://medium.com/free-code-camp/todo-boilerplates-with-hasura-on-angular-460db0040b4a",
			date: "Dec 10, 2018",
			heading: "How to get started with Angular-Hasura Boilerplates",
			description: `This blogpost gives you an idea of how to start with GraphQL with the help of 
    Hasura and Angular. I will give you information about the boilerplate apps on Angular 
    configured to use with Hasura’s deployed GraphQL engine on Heroku.`,
			labels: [
				"Hasura",
				"Angular",
				"Boilerplate",
				"Tech",
				"Software",
				"GraphQL",
			],
			social: ["medium", "freecodecamp"]
		},
	];
}

export const text_map = [
	{ idx: 0, name: "Rich Dad, Poor Dad", author: "-Robert Kiyosaki" },
	{ idx: 1, name: "Atomic Habits", author: "-James Clear" },
	{ idx: 2, name: "Sapiens", author: "-Yuval Noah Harari" },
	{ idx: 3, name: "The One Thing", author: "-Gary W. Keller" },
	{ idx: 4, name: "The Alchemist", author: "-Paulo Coelho" },
	{ idx: 5, name: "Black Swan", author: "-Nassim Nicholas Taleb" },
	{ idx: 6, name: "Ikigai", author: "-Francesc Miralles" },
	{ idx: 7, name: "Chaos Monkeys", author: "-Antonio Martínez" },
];

export const current_book = {
	idx: 999,
	name: "The Psychology of Money",
	author: "-Morgan Housel",
};
