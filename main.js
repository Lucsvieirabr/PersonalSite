function current_API(){
    return document.getElementById("selectedAPI").value;
}

function request_API(){
    return new Request(`https://awesome-api.vercel.app/api/${current_API()}`)
}

async function teste(){
    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener('load', function() {
        console.log(colorThief.getPalette(img));
    });

    img.crossOrigin = 'Anonymous';
    var json = await get_API_JSON();
    img.src = json.img;
}
teste();
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
changeHTML_to_currentAPI();
changeBackgroundType();