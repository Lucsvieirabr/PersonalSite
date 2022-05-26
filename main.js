function current_API(){
    return document.getElementById("selectedAPI").value;
}

function request_API(){
    return new Request(`https://awesome-api.vercel.app/api/${current_API()}`)
}

async function ediBg_toGradientColor(){
    const colorThief = new ColorThief();
    const img = new Image();
    var json = await get_API_JSON();
    img.crossOrigin = 'Anonymous';
    img.src = json.img;

    img.addEventListener('load',function() {
        var colorpalette = colorThief.getPalette(img);
        var dominnatcolor = colorThief.getColor(img);
        dominantcolor = rgbToHex(dominnatcolor[0], dominnatcolor[1], dominnatcolor[2]);
        var colorArray = [];
        colorpalette.forEach(function(rgb){
            var colorHex = rgbToHex(rgb[0], rgb[1], rgb[2]);
            colorArray.push(colorHex);
        });
        document.getElementById('html').style.background= `linear-gradient(to bottom right,${dominantcolor}, ${colorArray[1]})`;
    });
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
async function get_API_JSON(){
    return await fetch(request_API()).then(response => response.json()).then(json =>{
        return json;
    });
}

async function changeHTML_to_currentAPI(){
    var json = await get_API_JSON();
    document.getElementById('imageBg').style.backgroundImage= "url(" + json.img +')';
    document.getElementById('imageBg').style.backgroundPosition= 'center';
    document.getElementById('title').innerHTML =  json.title || json.name;
    ediBg_toGradientColor();
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
        ediBg_toGradientColor();
    }
}
changeHTML_to_currentAPI();
changeBackgroundType();