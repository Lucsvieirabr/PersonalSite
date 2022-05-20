
var icons ={
    "lol": "https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-free/128/ic_league_of_legend_logo-512.png",
    "art": "https://image.flaticon.com/icons/png/512/103/103461.png",
    "rick-and-morty": "https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png",
    "final-space": "https://i.pinimg.com/236x/e9/c7/93/e9c793d47a49d56d704f6751ae91290b.jpg",
    "dota": "https://cdn0.iconfinder.com/data/icons/coloricons/50/50X50-10-512.png",
    "pokemon": "https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png"
}
function current_API(){
    return document.getElementById("selectedAPI").value;
}
function request_API_And_ChangeHTML(){
    var request_API = new Request(`https://awesome-api.vercel.app/api/${current_API()}`)
    fetch(request_API).then(response => response.json()).then(json =>{
        document.getElementById('html').style.backgroundImage= "url(" + json.img +')';
        document.getElementById('html').style.backgroundSize='cover';
        document.getElementById('html').style.backgroundPosition= 'center';
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
        document.getElementById('html').style.backgroundSize='auto';
    }

    if(backtype === "cover"){
        document.getElementById('html').style.backgroundSize='cover';
    }
}
request_API_And_ChangeHTML();
