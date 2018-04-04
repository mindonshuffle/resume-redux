// declare data seeds
let profile = {
    name: "Scott Foster",
    skills: ["JavaScript", "HTML5", "CSS3", "Mongo", "Express", "React", "Node.js", "Git"],
    urls: ["about.me/thescottfoster", "linkedin.com/in/thescottfoster", "github.com/mindonshuffle"],
    email: "thescottfoster@gmail.com",
    location: "Chicago, IL",
    phone: "815.901.7884",
};

let bio = {
    headline: "Junior Web Developer",
    body: "seeking to leverage my lifelong passion for technology and established skills at problem-solving towards tackling new challenges and building new experiences.",
};

let projects = [
    {
        name: "res.create",
        url: "res-create.herokuapp.com",
        role: "front-end developer",
        details: ["Web app for storing CV/resume information and creating clean, printable designs", "Created Express-based API routes for communication between mySQL database and Materialize-based front-end", "Designed visual layout wireframes; implemented in HTML, CSS, and Materialize CSS framework"],
    },
    {
        name: "HabiTrail",
        url: "habitrail.herokuapp.com",
        role: "sole developer",
        details: ["MERN-stack app allowing users to track their progress and train positive life habits", "Developed underlying database schema with MongoDB and Materialize", "Built React-based Single Page Application front-end conforming to Material Design specifications"],
    },
    {
        name: "Pinbox",
        url: "mindonshuffle.github.io/Pinbox/",
        role: "back-end developer",
        details: ["Firebase-based app to search, save, and annotate web-development learning resources", "Built communications between front-end design and Firebase database and authentication", "Integrated Google Custom Search API for topic-specific search results"],
    },    
];

let experiences = [
    {
        name: "Freelance Photography",
        date: "Jun 2014 &mdash; Present",
        title: "Wedding, Event, and Portrait Photographer",
        details: [],
    },
    {
        name: "Resource Point of Sale",
        date: "Nov 2016 &mdash; Jul 2017",
        title: "Bench Technician",
        details: ["Triage, diagnose, and repair diverse Point-of-Sale and PC systems", "Perform network-based software / OS recovery and reinstall operations", "Implement testing and documentation protocols for client hardware and software"],
    },
    {
        name: "Verizon Wireless",
        date: "Dec 2009 &mdash; Apr 2015",
        title: "Technical Support Coordinator",
        details: ["Assist customers solving various problems with cell phone, netbook, tablet, and mobile broadband service, including connectivity issues, configuration and activation, and application support", "Provide internal training and support for new products, services, and technologies"],
    },
    {
        name: "The Foster & Buick Law Group, LLC",
        date: "Jun 2006 &mdash; Aug 2010",
        title: "IT Coordinator",
        details: [],
    },    
];

let educations = [
    {
        name: "Northwestern University",
        location: "Chicago, IL",
        program: "Full-Stack Web Development Boot Camp",
        date: "2017",
    },
    {
        name: "Northern Illinois University",
        location: "Dekalb, IL",
        program: "B.A. Philosophy",
        date: "2007",
    },
];

// main logic

//create and populate a project div for each project in array
projects.forEach( project => {
    $('#project-section').append(`
        <div class="project">
            <span class="project-name">${project.name},</span>
            <a href="${project.url}" class="project-url">${project.url},</a>
            <span class="project-role">${project.role}</span>
            ${project.details[0]? `<ul class="project-details"></ul>` : null /*Only add details list if items exist*/}
        </div>
    `);
    // add each "project detail" item to last project div in DOM
    project.details.forEach( detail => {
        $('.project-details').last().append(`
            <li>${detail}</li> 
        `);
    });  
});

//create a populate an experience div for each experience in array
experiences.forEach( experience => {
    $('#experience-section').append(`
        <div class="experience">
            <span class="experience-name">${experience.name},</span>
            <span class="experience-date">${experience.date},</span>
            <br>            
            <span class="experience-title">${experience.title}</span>
            ${experience.details[0]? `<ul class="experience-details"></ul>` : `` /*Only add details list if items exist*/}
        </div>
    `);
    // add each "experience detail" item to last project div in DOM
    experience.details.forEach( detail => {
        $('.experience-details').last().append(`
            <li>${detail}</li> 
        `);
    });  
});

educations.forEach( education => {
    $('#education-section').append(`
        <div class="education">
            <span class="education-name">${education.name},</span>
            <span class="education-location">${education.location}</span>
            <br>
            <span class="education-program">${education.program},</span>
            <span class="education-date">${education.date}</span>
        </div>
    `);
})