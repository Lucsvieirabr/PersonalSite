
function current_API(){
    return document.getElementById("selectedAPI").value;
}

function request_API_And_ChangeHTML(){
    var request_API = new Request(`https://awesome-api.vercel.app/api/${current_API()}`)
    fetch(request_API).then(response => response.json()).then(json =>{
        document.getElementById('html').style.backgroundImage= "url(" + json.img +')';
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
        document.getElementById('html').style.backgroundRepeat='round';
        document.getElementById('html').style.backgroundSize='20%';

    }

    if(backtype === "cover"){
        document.getElementById('html').style.backgroundSize='20%';
        document.getElementById('html').style.backgroundRepeat='no-repeat';
        document.getElementById('html').style.background= getColorDominantRGB();


    }
}
request_API_And_ChangeHTML();
changeBackgroundType();
function getBackgroundImage_Url(){
    var img = document.getElementById('html').style.backgroundImage;
    var url = img.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    return url;
}

function getColorDominantRGB(){
    const colorThief = new ColorThief();
    const img = new Image();
    img.addEventListener('load', function() {
        let integerArrayColor = colorThief.getColor(img);
        return rgbToHex(integerArrayColor[0], integerArrayColor[1], integerArrayColor[2]);
    });
    img.crossOrigin = 'Anonymous';
    img.src = getBackgroundImage_Url();
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}