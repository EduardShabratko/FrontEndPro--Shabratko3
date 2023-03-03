
let a = Number(4) + Number(4);
let b = 4 - 4;
let c = 4 / 4;
let d = Math.sin(4);  
let e = Math.cos(4);
let f = Math.pow(4, 4);

let objects = prompt('Choose an option: ' + '\n a) 4 + 4 ' + '\n b) 4 - 4 ' + '\n c) 4 / 4' + '\n d) sin 4' + '\n e) cos 4' + '\n f) pow(4, 4)' );

if(objects == 'a'){
    alert(a);
}else if(objects == 'b'){
    alert(b);
}else if(objects == 'c'){
    alert(c);
}else if(objects == 'd'){
    alert(d);
}else if( objects == 'e'){
    alert(e);
}else if(objects == 'f'){
    alert(f);
}else{
    alert('Choose the right option')
}



