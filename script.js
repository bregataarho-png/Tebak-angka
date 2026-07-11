let angka = Math.floor(Math.random() * 100) + 1;

let nyawa = 5;

function cek(){

let tebakan = Number(document.getElementById("tebakan").value);

if(nyawa==0){
return;
}

if(tebakan==angka){

document.getElementById("hasil").innerHTML=
"🎉 BENAR!!";

return;

}

nyawa--;

let hati="";

for(let i=0;i<nyawa;i++){

hati+="❤️";

}

document.getElementById("nyawa").innerHTML=hati;

if(nyawa==0){

document.getElementById("hasil").innerHTML=
"💀 GAME OVER<br>Jawabannya : "+angka;

return;

}

if(tebakan>angka){

document.getElementById("hasil").innerHTML=
"📉 Terlalu Besar";

}else{

document.getElementById("hasil").innerHTML=
"📈 Terlalu Kecil";

}

}

function mainLagi(){

angka=Math.floor(Math.random()*100)+1;

nyawa=5;

document.getElementById("nyawa").innerHTML="❤️❤️❤️❤️❤️";

document.getElementById("hasil").innerHTML="";

document.getElementById("tebakan").value="";

                        }
