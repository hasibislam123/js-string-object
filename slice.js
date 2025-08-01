//  sub slice ar niyom
 
 const address = 'chandPur';
 const part = address.slice( 4,6);
 console.log(part);

 const sentence = 'I am a good and hardworking parson';
//  console.log(sentence.split(' '));
console.log(sentence.split('a'));


const friendstr = 'Rahim,karim,dahim,fahim,sahim';
const friend = friendstr.split(',')  
console.log(friend);

const realfriend = ['rahim', 'kahim', 'dahim', 'sayem', 'fahim']
console.log(realfriend.join());
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));


