
/*
File: index.html
Author: Kiss Albert
Copyright: 2023, Kiss Albert
Group: Szoft I-1/E
Date: 2023-01-17
Github: https://github.com/kalbert2001
Licenc: GNU GPL
*/ 
const baseElem=document.querySelector("#base");
const heightElem=document.querySelector("#height");
const calcButton=document.querySelector("#calcButton");
const areaElem=document.querySelector("#area");

calcButton.addEventListener('click',()=>{
    
    var base =Number(baseElem.value);
    var height =Number(heightElem.value);
    var area=calcTriangleArea(base,height)
    console.log("Terulet : " + area)
    areaElem.value=area

    console.log(typeof base)
    console.log(height+base)

});

function calcTriangleArea(base,height){

    return base*height /2
}

