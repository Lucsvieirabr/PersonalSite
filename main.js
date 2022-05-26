function current_API(){
    return document.getElementById("selectedAPI").value;
}

function request_API_And_ChangeHTML(){
    var request_API = new Request(`https://awesome-api.vercel.app/api/${current_API()}`)
    fetch(request_API).then(response => response.json()).then(json =>{
        document.getElementById('imageBg').style.backgroundImage= "url(" + json.img +')';
        document.getElementById('imageBg').style.backgroundPosition= 'center';
        document.getElementById('title').innerHTML =  json.title || json.name;
    });
}
function OpenMenu(){
    
    var display = document.getElementById('menu').style.getPropertyValue('display');
    if(display === "none"){

        document.getElementById('menu').style.setProperty('display', 'block');
    }else{

        document.getElementById('menu').style.setProperty('display', 'none');
    }
}
function changeBackgroundType(){

    var backtype = document.getElementById("backtype").value;
    if(backtype === "repeat"){
        document.getElementById('imageBg').style.backgroundRepeat='round';

    }

    if(backtype === "cover"){
        document.getElementById('imageBg').style.backgroundRepeat='no-repeat';

    }
}
request_API_And_ChangeHTML();
changeBackgroundType();