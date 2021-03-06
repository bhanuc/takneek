var Types = require('hapi').types;

module.exports = [
    { method: 'GET', path: '/findperson', config: { handler: getPersons, validate: { query: { name: Types.String() } } } },
    { method: 'GET', path: '/persons/{id}', config: { handler: getPerson } },
    { method: 'GET', path: '/addperson', config: { handler: addPerson, validate: { query: { name: Types.String(),age: Types.String(),sex: Types.String(),currentlocation: Types.String(),height: Types.String() } } } },
     { method: 'GET', path: '/addstory', config: { handler: addStory,  validate: { query: { story: Types.String(),content: Types.String() } } } },
     { method: 'GET', path: '/addresource', config: { handler: addResource,  validate: { query: { resource: Types.String() } } } },
     { method: 'GET', path: '/addproblem', config: { handler: addProblem,  validate: { query: { problem: Types.String() } } } },
     { method: 'GET', path: '/getproblem', config: { handler: getProblem } },
     { method: 'GET', path: '/getresource', config: { handler: getResource } }
];
function getProblem(problem1) {

    request.reply(problems);
}
function getResource(resource1) {

     request.reply(resources);
}

function addStory(request) {

    var stories  = {
        id: story[story.length - 1].id + 1,
       	story: request.query.story,
	content: request.query.content
	
    };

    story.push(stories);

    request.reply(stories).code(201);
}
function addProblem(request) {

    var stories  = {
        id: story[story.length - 1].id + 1,
        problem: request.query.name
	
    };

    problems.push(problem);

    request.reply(problem).code(201);
}
function addResource(request) {

    var resource  = {
        id: story[story.length - 1].id + 1,
        resource: request.query.resource
	
    };

    resources.push(resource);

    request.reply(resource).code(201);
}





function getPersons(request) {

    if (request.query.name) {
        request.reply(findPersons(request.query.name));
    }
    else {
        request.reply(persons);
    }
}

function findPersons(name) {

    return persons.filter(function(person) {
        return person.name.toLowerCase() === name.toLowerCase();
    });
}

function getPerson(request) {

    var person = persons.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    request.reply(person);
}

function addPerson(request) {

    var person = {
        id: persons[persons.length - 1].id + 1,
        name: request.query.name,
	age: request.query.age,
	currentlocation: request.query.currentlocation,
	sex: request.query.sex,
	height: request.query.height
	
    };

    persons.push(person);

    request.reply(person).code(201).header('Location,: /persons/' + person.id);
}

var persons = [{
        id: 1,
        name: 'Guitar',
        age: 46,
       currentlocation: 'delhi',
	sex: 'male',
	height: '176cm'
    },
    {
        id: 2,
        name: 'Banjo',
	age: 46,
	currentlocation: 'delhi',
	sex: 'male',
	height: '176cm'    
	}
];

var story = [{
        id: 1,
        name: 'Guitar',
        content: 'Sample Story'
         }
];
var resources = [{
        id: 1,
       resource: 'Sample Story'
         }
];

var problems = [{
        id: 1,
        problem: 'Sample Problem'
         }
];
