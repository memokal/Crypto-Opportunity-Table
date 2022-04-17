function ekle() {
    var coinName= document.getElementById("cad").value;
    var coinValue= document.getElementById("fiyat").value;
    var h1= document.getElementById("hedef1").value;
    var h2= document.getElementById("hedef2").value;
    var pd= document.getElementById("pd").value;
    var pdex= document.getElementById("milyon-milyar").value;
    var h1pd=(h1/coinValue)*pd;
    var tepepd=(h2/coinValue)*pd;
    var table= document.getElementById("rtable");
    var puan=0;
   
    if(pd.length>3 && pdex=="milyon"){
        
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
    }
   


    var template= "<tr><th>"+coinName+"</th><td>"+coinValue+"</td><td>"+h1+"</td><td>"+h2+"</td><td style='color:white; background:"+color(pd, pdex)+";'>"+pd+" "+pdex+"</td><td style='color:white; background:"+color(h1pd, pdex)+";'>"+h1pd+" "+pdex+"</td><td style='color:white; background:"+color(tepepd, pdex)+";'>"+tepepd+" "+pdex+"</td><th>"+puan+"</th></tr>";
   
    table.innerHTML += template;

}


function color(a, b){

    if(a<=100 && b=="milyon"){
        return "green";
    } else if(a<=500 && b=="milyon"){
        return "orange";
    } else if(a<1000 && b=="milyon"){
        return "red";
    } else if(a<=3 && b=="milyar"){
        return "red"
    } else if(a<=900 && b=="milyar"){
        return "purple"
    }

}

function prevent(a){
    if (a.value.length > 6){
      a.value = a.value.slice(0, 6)
    }
}
