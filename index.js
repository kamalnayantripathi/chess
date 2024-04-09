let pieceId, pieceClicked = false;
let innerhtml, targetElement, element;
let initialAscii,finalAscii,initialPlace,finalPlace;
let knightColor,pieceInBetween,inMid=false;

let pawnsWhite = document.getElementsByClassName('pawn-white');
for (let i = 0; i < pawnsWhite.length; i++){
pawnsWhite[i].addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        console.log("white pawn Clicked");
        pieceClicked = true;
        pieceId = e.target;
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white pawn unclicked");
    }
})
}

let kingWhite = document.getElementById('king-white');
kingWhite.addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white king unclicked");
}})

let queenWhite = document.getElementById('queen-white');
queenWhite.addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white queen unclicked");
}})

let knightWhite = document.getElementsByClassName('knight-white');
for(let i = 0; i < knightWhite.length; i++){
    knightWhite[i].addEventListener('click',(e)=>{
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
            console.log("white knight clicked : ",e.target);
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white knight unclicked");
}})
}

let bishopWhite = document.getElementsByClassName('bishop-white');
for(let i = 0; i < bishopWhite.length; i++){
bishopWhite[i].addEventListener('click',(e)=>{
        element = e.target; 
        console.log("white bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white bishop unclicked");
}})
}

let rookWhite = document.getElementsByClassName('rook-white');
for(let i = 0; i < rookWhite.length; i++){
rookWhite[i].addEventListener('click',(e)=>{
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            console.log("white rook clicked : ",e.target);
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white rook unclicked");
} })
}

document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for white.");
    targetElement = e.target;

    if(e.target.className != 'pawn-white' && e.target.id != 'queen-white' && e.target.className!="rook-white" && e.target.id!='king-white'  && e.target.className!="knight-white" && e.target.className!="bishop-white"){
        if(pieceClicked == true && pieceId.className == 'pawn-white'){
            console.log("white pawn :",e.target);  
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            if(parseInt(pieceId.parentElement.classList[3])==6 && parseInt(targetElement.classList[3]) ==4 && (pieceId.parentElement.classList[2]==targetElement.classList[2])){    
                if(document.getElementsByClassName(pieceId.parentElement.classList[2])[5].hasChildNodes('img')){
                    console.log("piece in between pawn movement");
                }else{
                console.log("first Move of pawn");
                targetElement.appendChild(pieceId);
                }
            }else if((initialPlace >finalPlace && initialPlace-finalPlace<=1)&&(pieceId.parentElement.classList[2]==targetElement.classList[2])){
                    targetElement.appendChild(pieceId);
            }
                pieceClicked = false;
            }

            if(pieceClicked==true && pieceId.id == "king-white"){
                console.log("white king :",e.target);
                initialPlace = parseInt(pieceId.parentElement.classList[3]);
                finalPlace = parseInt(e.target.classList[3]);
                initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
                finalAscii = e.target.classList[2].charCodeAt(0);
                if((Math.abs(initialPlace-finalPlace)==1 && Math.abs(initialAscii-finalAscii)<=1) || (Math.abs(initialAscii-finalAscii)==1)&&(Math.abs(initialPlace-finalPlace)<=1)){
                e.target.appendChild(pieceId);
                }
                pieceClicked = false;    
            }
            
        if(pieceClicked==true && pieceId.className == "rook-white"){
            console.log("white rook :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = targetElement.classList[2].charCodeAt(0);
            if(initialPlace == finalPlace || initialAscii == finalAscii){
                console.log("in the rook block");
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<=finalPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
            else if(initialPlace>finalPlace){
                for(let i = finalPlace; i<initialPlace; i++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                    console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between");
                        inMid=true;
                        break;  
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            if(initialAscii<finalAscii){
                for(let i = initialAscii-96; i<=finalAscii-97; i++){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            else if(initialAscii>finalAscii){
                for(let i = initialAscii-98; i>=finalAscii-97; i--){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
        }
        pieceClicked = false;
    }
    if(pieceClicked==true && pieceId.className == "bishop-white" ){
        console.log("white bishop :",e.target);
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        finalPlace = parseInt(targetElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        finalAscii = targetElement.classList[2].charCodeAt(0);
        if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
            if(initialAscii<finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("white piece in between tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("white in tedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            if(initialAscii>finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace-1,i=initialAscii-1;i>=finalAscii;i--,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("white piece in between ulta tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in ulta tedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }

            if(initialAscii>finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1,i=initialAscii-1;i>=finalAscii;i--,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("white piece in between seedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("white in seedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            
        if(initialAscii<finalAscii && initialPlace>finalPlace){
            for(let j=initialPlace- 1,i=initialAscii+1;i<=finalAscii;i++,j--){
                pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                console.log("i: ",i,"j: ",j,"white piece in between seedha ulta",pieceInBetween);
                if(pieceInBetween.hasChildNodes('img')){
                    inMid=true;
                    break;
                }
            }
            if(!inMid){
                console.log("white in seedha ulta mid as well");
                e.target.appendChild(pieceId);
            }
            inMid=false;
        }
        }
        pieceClicked = false;
    }

    if(pieceClicked==true && pieceId.id == "queen-white"){
        console.log("white queen :",e.target);
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        finalPlace = parseInt(targetElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        finalAscii = targetElement.classList[2].charCodeAt(0);

        if(initialPlace == finalPlace || initialAscii == finalAscii){
            console.log("before in for loop");
            if(finalPlace>initialPlace){
                for(let i = initialPlace+1; i<=finalPlace; i++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                    console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between");
                        inMid=true;
                        break;  
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            else if(initialPlace>finalPlace){
                for(let i = finalPlace; i<initialPlace; i++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                    console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between");
                        inMid=true;
                        break;  
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            if(initialAscii<finalAscii){
                for(let i = initialAscii-96; i<=finalAscii-97; i++){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            else if(initialAscii>finalAscii){
                for(let i = initialAscii-98; i>=finalAscii-97; i--){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
        }
        if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
            
            if(initialAscii<finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in tedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            if(initialAscii>finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace-1,i=initialAscii-1;i>=finalAscii;i--,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between ulta tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in ulta tedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }

            if(initialAscii>finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1,i=initialAscii-1;i>=finalAscii;i--,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between seedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            
        if(initialAscii<finalAscii && initialPlace>finalPlace){
            for(let j=initialPlace- 1,i=initialAscii+1;i<=finalAscii;i++,j--){
                pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                if(pieceInBetween.hasChildNodes('img')){
                    inMid=true;
                    break;
                }
            }
            if(!inMid){
                console.log("in seedha ulta mid as well");
                e.target.appendChild(pieceId);
            }
            inMid=false;
        }
        }
        pieceClicked=false;
    }

    if(pieceClicked==true && pieceId.className == "knight-white"){
        console.log("knight :",e.target);
        knightColor = pieceId.parentElement.classList[1];
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        finalPlace = parseInt(e.target.classList[3]);
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        finalAscii = e.target.classList[2].charCodeAt(0);

        if((knightColor=='white' && e.target.classList[1]=='black')||(knightColor=='black' && e.target.classList[1]=='white')){
            if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
            targetElement.appendChild(pieceId)
        }
    }
        pieceClicked = false;
    }

        }  
    })

    







// --------------------------------DARK CODE------------------------------------------------


document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for black.");
    targetElement = e.target;

if(e.target.className != 'pawn-black' && e.target.id != 'queen-black' && e.target.className!="rook-black" && e.target.id!='king-black'  && e.target.className!="knight-black" && e.target.className!="bishop-black"){
    if(pieceClicked == true && pieceId.className == 'pawn-black'){
        console.log("pawn :",e.target);  
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        finalPlace = parseInt(targetElement.classList[3]);
        if(parseInt(pieceId.parentElement.classList[3])==1 && parseInt(targetElement.classList[3]) ==3 && (pieceId.parentElement.classList[2]==targetElement.classList[2])){    
            if(document.getElementsByClassName(pieceId.parentElement.classList[2])[2].hasChildNodes('img')){
                console.log("piece in between pawn movement");
            }else{
            console.log("first Move of pawn");
            targetElement.appendChild(pieceId); 
            }
        }else if((initialPlace <finalPlace && finalPlace-initialPlace<=1)&&(pieceId.parentElement.classList[2]==targetElement.classList[2])){
                targetElement.appendChild(pieceId);
            }
            pieceClicked = false;
        }
        

        if(pieceClicked==true && pieceId.id == "queen-black"){
            console.log("queen :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = targetElement.classList[2].charCodeAt(0);

            if(initialPlace == finalPlace || initialAscii == finalAscii){
                console.log("before in for loop");
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<=finalPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                if(initialAscii<finalAscii){
                    for(let i = initialAscii-96; i<=finalAscii-97; i++){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between horizontal");
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>=finalAscii-97; i--){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between horizontal");
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
            }
            if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
                
                if(initialAscii<finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in tedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>=finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between ulta tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in ulta tedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>=finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between seedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in seedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<=finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha ulta mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            }
            pieceClicked=false;
        }

        if(pieceClicked==true && pieceId.className == "knight-black"){
            console.log("knight :",e.target);
            knightColor = pieceId.parentElement.classList[1];
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(e.target.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = e.target.classList[2].charCodeAt(0);

            if((knightColor=='white' && e.target.classList[1]=='black')||(knightColor=='black' && e.target.classList[1]=='white')){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                targetElement.appendChild(pieceId)
            }
        }
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.className == "bishop-black" ){
            console.log("bishop :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = targetElement.classList[2].charCodeAt(0);
            if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
                if(initialAscii<finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in tedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>=finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between ulta tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in ulta tedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>=finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between seedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in seedha mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<=finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha ulta mid as well");
                    e.target.appendChild(pieceId);
                }
                inMid=false;
            }
            }
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.className == "rook-black"){
            console.log("rook :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = targetElement.classList[2].charCodeAt(0);
            if(initialPlace == finalPlace || initialAscii == finalAscii){
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<=finalPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                if(initialAscii<finalAscii){
                    for(let i = initialAscii-96; i<=finalAscii-97; i++){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between horizontal");
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>=finalAscii-97; i--){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between horizontal");
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }
                    inMid=false;
                }
            }
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.id == "king-black"){
            console.log("king :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(e.target.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            finalAscii = e.target.classList[2].charCodeAt(0);
            if((Math.abs(initialPlace-finalPlace)==1 && Math.abs(initialAscii-finalAscii)<=1) || (Math.abs(initialAscii-finalAscii)==1)&&(Math.abs(initialPlace-finalPlace)<=1)){
            e.target.appendChild(pieceId);
            }
            pieceClicked = false;    
        }
    }
}
)

let pawns = document.getElementsByClassName('pawn-black');
for (let i = 0; i < pawns.length; i++){
pawns[i].addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        console.log("pawn Clicked");
        pieceClicked = true;
        pieceId = e.target;
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("pawn unclicked");
    }
})
}

let queen = document.getElementById('queen-black');
queen.addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("queen unclicked");
}})

let king = document.getElementById('king-black');
king.addEventListener('click',(e)=>{
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("king unclicked");
}})

let knight = document.getElementsByClassName('knight-black');
for(let i = 0; i < knight.length; i++){
    knight[i].addEventListener('click',(e)=>{
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
            console.log("knight clicked : ",e.target);
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("knight unclicked");
}})
}

let bishop = document.getElementsByClassName('bishop-black');
for(let i = 0; i < bishop.length; i++){
bishop[i].addEventListener('click',(e)=>{
        element = e.target; 
        console.log("bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("bishop unclicked");
}})
}

let rook = document.getElementsByClassName('rook-black');
for(let i = 0; i < rook.length; i++){
rook[i].addEventListener('click',(e)=>{
        element = e.target;
        console.log("rook clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("rook unclicked");
} })
}