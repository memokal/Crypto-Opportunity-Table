var puan=0;
function ekle() {
    var coinName= document.getElementById("cad").value;
    var coinValue= document.getElementById("fiyat").value;
    var enyuksek=document.getElementById("enyuksek").value;
    var endusuk=document.getElementById("endusuk").value;
    var h1=(enyuksek-endusuk)/100*61.8+parseInt(enyuksek);
    var h2=(enyuksek-endusuk)/100*323.6+parseInt(enyuksek);
    var pd= document.getElementById("pd").value;
    var h1pd=(h1/coinValue)*pd;
    var tepepd=(h2/coinValue)*pd;
    var pdex= document.getElementById("milyon-milyar").value;
    var pdex2=pdex;
    var pdex3=pdex;
    var table= document.getElementById("rtable");
    var puan1= document.getElementById("puan1");
    
    if(coinName=="" || coinValue=="" || enyuksek=="" || endusuk=="" || pd==""){ //You should fill the form
        document.getElementById("uyari").innerHTML="Coin Adı, b ve c değeri, Güncel Fiyat ve Piyasa Değeri boş bırakılamaz";
    }else{

        document.getElementById("uyari").innerHTML="";    //Removes warning span

    if(pd.length>3 && pdex=="milyon"){ //Converting milyon into milyar
        
        if(pd.length==4){
            pd=pd.substring(0,1)+"."+pd.substring(1,2);
        }
        if(pd.length==5){
            pd=pd.substring(0,2)+"."+pd.substring(2,3);
        }
        if(pd.length==6){
            pd=pd.substring(0,3)+"."+pd.substring(3,4);
        }
        pdex="milyar";
        pdex2="milyar";
        pdex3="milyar";
        var h1pd=(h1/coinValue)*pd;
        var tepepd=(h2/coinValue)*pd;
    }

    h1pd=h1pd.toPrecision(4);  //Standartizing Numbers
    tepepd=tepepd.toPrecision(4); //Standartizing Numbers

    var kural=/\./; //Searches for a Dot in string
    if(!kural.test(h1pd) && pdex=="milyon"){ //if theres no Dot
        h1pd=h1pd.substring(0,1)+"."+h1pd.substring(1,2);
        pdex2="milyar";
    }
    if(!kural.test(h1pd) && pdex=="milyar"){
        h1pd=h1pd.substring(0,1)+"."+h1pd.substring(1,2);
        pdex2="trilyon";
    }
    if(!kural.test(tepepd) && pdex=="milyon"){
        tepepd=tepepd.substring(0,1)+"."+tepepd.substring(1,2);
        pdex3="milyar";
    }
    if(!kural.test(tepepd) && pdex=="milyar"){
        tepepd=tepepd.substring(0,1)+"."+tepepd.substring(1,2);
        pdex3="trilyon";
    }
   
    //Calculations of Puan
    if(h1/coinValue>=4 && h1/coinValue<=5){ 
        puan=puan+1;
    } else if(h1/coinValue>=6 && h1/coinValue<=8){
        puan=puan+2;
    } else if(h1/coinValue>=8 && h1/coinValue<=12){
        puan=puan+3;
    } else if(h1/coinValue>12){
        puan=puan+4;
    }

    if(h2/coinValue>=5 && h2/coinValue<=6){
        puan=puan+1;
    } else if(h2/coinValue>=7 && h2/coinValue<=9){
        puan=puan+2;
    } else if(h2/coinValue>=10 && h2/coinValue<=15){
        puan=puan+3;
    } else if(h2/coinValue>15){
        puan=puan+4;
    }

    if(puan1.checked==true){
        puan=puan+1;
    }
    //Calculations of Puan End

    //Template that will be pushed into the table
    var template= "<tr><th>"+coinName+"</th><td>"+coinValue+"</td><td>"+h1.toPrecision(4)+"</td><td>"+h2.toPrecision(4)+"</td><td style='color:white; background:"+color(pd, pdex)+";'>"+pd+" "+pdex+"</td><td style='color:white; background:"+color(h1pd, pdex2)+";'>"+h1pd+" "+pdex2+"</td><td style='color:white; background:"+color(tepepd, pdex3)+";'>"+tepepd+" "+pdex3+"</td><th>"+puan+"</th></tr>";
   
    table.innerHTML += template; //Adding Template into the table
    puan=0; //Resets Puan
}
}


function color(a, b){  //Color Calculations and Styling for Table

    if(a<=100 && b=="milyon"){
        puan=puan+3;
        return "green";
    } else if(a<=500 && b=="milyon"){
        puan=puan+2;
        return "orange";
    } else if(a<1000 && b=="milyon"){
        puan=puan+1;
        return "red";
    } else if(a<=3 && b=="milyar"){
        puan=puan+1;
        return "red";
    } else if(a<1000 && b=="milyar"){
        return "purple";
    } else if(a<10000 && b=="trilyon"){
        return "black";
    } 

}



function prevent(a){ //Prevents Length of input to be over 6
    if (a.value.length > 6){
      a.value = a.value.slice(0, 6)
    }
}
