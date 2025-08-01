const collage = {
    name: 'bangladesh skill development institute',
    class: ['11', '12'],
    events:['science fair', 'Bijoydibosh', '21 feb'],
    speciality:{
        color: 'blue',
        result: {
            gpa:5,
            merit:'top'
        }
    }
}
// console.log(collage.name)
collage.speciality.result.merit = 'top top top top most'
console.log(collage.speciality.result.merit)
collage.events[1] = '16 December'
console.log(collage.events[1]) 
delete collage.class;
console.log(collage);
