const rockets = ['Saturn V', 'Falcon 9', 'Space Shuttle', 'Titan IV', 'Saturn 1B', 'Atlas V', 'Juno 1', 'Falcon 1', 'Spudnik', 'Delta II'];
const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto', 'Europa', 'Titan'];
const lifeForms = ['Xenomorphs', 'Jawas', 'Flora Colossus\'', 'Ewoks', 'E.T', 'Marvin the Martian', 'The Thing', 'Invader Zim', 'Roger the Alien', 'Zoidberg'];

// console.log(rockets.length);
const selection = () => {
    let rocket = rockets[Math.floor(Math.random() * rockets.length)];
    let planet = planets[Math.floor(Math.random() * planets.length)];
    let lifeForm = lifeForms[Math.floor(Math.random() * lifeForms.length)];
    
    return (`Hello adventurer! Thank you for choosing to participate in our intergalactic exploration. You be riding upon the ${rocket} rocket! You will be shot off into space to land on and explore ${planet}! Beware, you may encounter ${lifeForm} in your travles. Keep an eye out and record all data at all possible moments. Good luck and godspeed!`);
}


console.log(selection());