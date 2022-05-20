var url;

function getBackgroundAndChampNameFromAPI(){
    
    
    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundSize='cover';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })
}
getBackgroundAndChampNameFromAPI();

    
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

function changeAPI(){

    var API = document.getElementById("APItype").value;
    if(API === "lol"){

    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })


    }else if(API === "museum"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/art")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "rickmorty"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/rick-and-morty")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "finalspace"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/final-space")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "dota"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/dota")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "pokemon"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/pokemon")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }
    
    



}
function changeAPIAll(){

    var API = document.getElementById("APItype").value;
    if(API === "lol"){

    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })


    }else if(API === "museum"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/art")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "rickmorty"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/rick-and-morty")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "finalspace"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/final-space")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "dota"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/dota")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "pokemon"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/pokemon")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }
    ChangeIcon();
    
    



}

function ChangeIcon(){

    var API = document.getElementById("APItype").value;
    var icon = document.getElementById("icon");

    if(API === "lol"){

        icon.setAttribute('href', 'https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-free/128/ic_league_of_legend_logo-512.png');

        
    
    
        }else if(API === "museum"){
    
            icon.setAttribute('href', 'https://image.flaticon.com/icons/png/512/103/103461.png');
    
    
        }else if(API === "rickmorty"){
    
            icon.setAttribute('href', 'https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png');
    
    
        }else if(API === "finalspace"){
    
       
            icon.setAttribute('href', 'https://i.pinimg.com/236x/e9/c7/93/e9c793d47a49d56d704f6751ae91290b.jpg');

    
        }else if(API === "dota"){
    
            icon.setAttribute('href', 'https://cdn0.iconfinder.com/data/icons/coloricons/50/50X50-10-512.png');

    
    
        }else if(API === "pokemon"){
    
              
            icon.setAttribute('href', 'https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png');

    
        }

}