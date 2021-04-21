import Head from "next/head";
import Footer from "./_footer";
import Header from "./_header";

const blogs = [
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
	},
	{
		id: 2,
		url:
			"https://medium.com/@wickedbrat/being-a-college-student-could-be-overwhelming-71b5ea968517",
		date: "May 1, 2020",
		heading: "Being a college student could be overwhelming",
		description: `Being a college student could be overwhelming. It had just been 
    a matter of months that you’ve completed the “routine” of the school, passed the
    exam that probably lakhs and lakhs of students from the country have appeared for.
    You made it to college. The newfound freedom, the unknown faces, the uncertainty of
    not knowing what to do when your father isn’t pestering you with benefits of waking
    up at 6 or 7 in the morning.…`,
	},
	{
		id: 3,
		url:
			"https://medium.com/@wickedbrat/being-a-college-student-could-be-overwhelming-71b5ea968517",
		date: "Apr 12, 2020",
		heading: "Do you have a pet?",
		description: `Do you have a pet? If not, you must have observed the daily routine
    of that of a dog, right? What does a dog do from the start of the day to the last
    thing it sees before closing its eyes at night? Well, one thing that you must be
    wondering is that what the hell is this article about? Productivity of a dog's
    schedule? Which exactly is my point here. Now imagine yourself on a day when
    you've done nothing. Slept 18 hours a day, ate, and d`,
	},
	{
		id: 4,
		url:
			"https://medium.com/@wickedbrat/open-source-summer-intern-a4a19240ea40",
		date: "Dec 23, 2018",
		heading: "Open Source Summer Internships",
		description: `As we reach the winter solstice, many of us undergrads would have 
    started trying for summer internships in open source. This seemed like a good time
    for this post as usually we don’t find an outlook on what needs to be done. I’ll try 
    to present all the options that might be available to you and the fallback paths too. 
    If I miss something or any doubt that you think should be addressed in this article, 
    feel free to comment, I’ll try to update it! All the best!`,
	},
	{
		id: 5,
		url:
			"https://medium.com/free-code-camp/todo-boilerplates-with-hasura-on-angular-460db0040b4a",
		date: "Dec 10, 2018",
		heading: "How to get started with Angular-Hasura Boilerplates",
		description: `This blogpost gives you an idea of how to start with GraphQL with the help of 
    Hasura and Angular. I will give you information about the boilerplate apps on Angular 
    configured to use with Hasura’s deployed GraphQL engine on Heroku.`,
	},
];

export default function Writings() {
	return (
		<div className="flex flex-col">
			{blogs.map((writing) => {
				return (
					<a
						key={writing.id}
						href={writing.url}
						target="_blank"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
					>
						<p className="text-xs text-gray-500">{writing.date}</p>

						<h3 className="text-2xl font-bold">{writing.heading} &rarr;</h3>
						<p className="mt-4 text-s text-gray-700 hover:text-blue-700 focus:text-blue-700">
							{writing.description.substring(0, 200) + "..."}
						</p>
					</a>
				);
			})}
		</div>
	);
}
