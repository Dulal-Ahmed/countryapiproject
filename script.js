const fetcurl = "https://restcountries.com/v3.1/all";
const section = document.querySelector('#section');
const allinformation = document.querySelector('#allinformation');
const container = document.querySelector('#container');
const allcntrydivclass = document.querySelectorAll('.countryDiv');
let globalvar;
let divindx;

fetch(fetcurl)
.then(res => res.json())
.then(data => allcountryshoew(data));




const allcountryshoew =(country)=>{
    globalvar = country;
for(let i=0; i < country.length; i++){

    section.innerHTML += `
         <div class="countryDiv" onclick="showdataimage(${i})" >
            <img src="${country[i].flags.png}" alt="${country[i].name.common}">
            <div class="innerText">
                <h2>${country[i].name.common}</h2>
               
                <p><b> Population :</b> ${country[i].population}</p>
                <p><b> Region :</b> ${country[i].region} </p>
                <p><b> Capital :</b> ${country[i].capital} </p>
            </div>
           </div>
         `;
       
}

}
const showdataimage =(g)=>{
    divindx = g;
    console.log(globalvar[g]);

    allinformation.style.display = " flex";
    allinformation.innerHTML = `
    <div id="bgrc">  
    <div id="back" onclick="clrdiv()"> &lt; Back</div>
    <div id="popupimg">
        <div class="imgdiv">
            <img src="${globalvar[g].flags.png}" alt="">
        </div>
        <div class="txtContainerdiv">
            <div class="topdiv">
                <div class="left">
                     <h1>${globalvar[g].name.common}</h1>
                     <P><b>Native Name :</b> ${globalvar[g].name.nativeName.official}</P>
                     <P><b>Population:</b> ${globalvar[g].population}</P>
                     <P><b>Region:</b>${globalvar[g].region} </P>
                     <P><b>Sub Region:</b>${globalvar[g].subregion}</P>
                     <P><b>Capital :</b>${globalvar[g].capital }</P>
              </div>
                <div class="right"> 
                    <p><b>Top Level Domain:</b>${globalvar[g].tld } </p>
                    <p><b>Currencies :</b>${globalvar[g].currencies.BBD }</p>
                    <p><b>Languages :</b>${globalvar[g].languages }</p>
                </div>
            </div>
        <div class="bottomdiv">
            <p><b> Border Countries : </b>${globalvar[g].continents } </p>
        </div>
        </div>
    </div>
    </div>

    
    `;
   
 }
const srcbox = document.querySelector("#srcbox");
const submit = document.querySelector("#submit");

const srcApi =(keywrd)=>{
 fetch(`https://restcountries.com/v3.1/name/${keywrd}`)
.then(res => res.json())
.then(data=> showdataimageses(data) );

}

submit.onclick = ()=>{
    section.innerHTML = "";
    srcApi(srcbox.value); 
}
 

 const clrdiv = ()=>{
    allinformation.style.display = "none"; 
 }
const showdataimageses =(country)=>{
    globalvar = country;
for(let i=0; i < country.length; i++){

    section.innerHTML += `
         <div class="countryDiv" onclick="showdataimage(${i})" >
            <img src="${country[i].flags.png}" alt="${country[i].name.common}">
            <div class="innerText">
                <h2>${country[i].name.common}</h2>
               
                <p><b> Population :</b> ${country[i].population}</p>
                <p><b> Region :</b> ${country[i].region} </p>
                <p><b> Capital :</b> ${country[i].capital} </p>
            </div>
           </div>
         `;
       
}

}

// Dark mood 
let darkmoodis = false;
const body = document.querySelectorAll('body');
const  heading1 = document.querySelector('h1');
const heading2 = document.querySelector('h2');
const paragrap = document.querySelectorAll('p');
const div = document.querySelectorAll('div');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const header = document.querySelector('header');
const prpgrp = document.querySelector('#prpgrp');

const darkmood = ()=>{

 if(darkmoodis == false){
    
    prpgrp.style.borderColor = "white";

    prpgrp.style.backgroundColor = "  #0d1a26";
    prpgrp.style.color = "white"; 

    main.style.backgroundColor = "  #0d1a26";
    main.style.color = "white";

    header.style.backgroundColor = "  #0d1a26";
    header.style.color = "white"; 

    heading2.style.color = "white"; 
    darkmoodis = true; 
}else{
    prpgrp.style.borderColor = "black";

    prpgrp.style.backgroundColor = "white";
    prpgrp.style.color = "black"; 


        main.style.backgroundColor = "white"; 
        main.style.color = "black";

        header.style.backgroundColor = "white"; 
        header.style.color = "black";

        heading2.style.color = "black"; 
        darkmoodis = false;  
    }
     
  
}