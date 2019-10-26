document.querySelector("#burger").addEventListener("click",openmenu);
document.querySelector("#closer").addEventListener("click",closemenu);


function openmenu() {       
    console.log('open');   
    document.getElementById('dropdown').style.display="grid";
    document.getElementById('burger').style.display="none";
}

function closemenu() {
    console.log('close');
    document.getElementById('dropdown').style.display="none";
    document.getElementById('burger').style.display="block";
}
















