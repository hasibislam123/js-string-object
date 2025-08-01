const mobile = {
    brand : 'samsung' ,
    model : 'S10',
    price : 89000,
    color : 'Black',
    camera:  '48mp',
    battary: '54000am',
    isnew: true
} 
// for of : array
// for in : object
for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}