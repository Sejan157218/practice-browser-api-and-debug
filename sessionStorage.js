const object = {
    name: 'sejan',
    id :1 ,
}

sessionStorage.setItem('details',JSON.stringify(object));


const callfromBrowser = JSON.parse(sessionStorage.getItem('details'));
console.log(callfromBrowser);


for(let i=0;i<10000;i++){
    console.log(i);
}