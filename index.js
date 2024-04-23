let pieceId, pieceClicked = false;
let innerhtml, targetElement, element, whiteCastle=false, blackCastle=false;
let initialAscii,finalAscii,initialPlace,finalPlace;
let knightColor,pieceInBetween,inMid=false;
let whiteChance = true,cuttingPlace,cuttingAscii,firstMovePawn=false;
let color,check,border,enPass;

let pawnsWhite = document.getElementsByClassName('pawn-white');
for (let i = 0; i < pawnsWhite.length; i++){
pawnsWhite[i].addEventListener('click',(e)=>{
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        console.log("white pawn Clicked",color);
        if(pieceClicked==true){
            for(i=6;i>3;i--){
                console.log("i : ",i,"ye lo: ",color.classList[2]);
                // document.getElementById(color.classList[2]+i).style.backgroundColor="";
            }
        }
        pieceClicked = true;
        for(i=6;i>3;i--){
            console.log("i : ",i,"ye lo: ",e.target.parentElement.classList[2]);
            check = document.getElementById(e.target.parentElement.classList[2]+i)
            // check.style.backgroundColor="skyblue";
        }
        pieceId = e.target;
        color = e.target.parentElement;
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        for(i=6;i>3;i--){
            console.log("i : ",i,"ye lo: ",e.target.parentElement.classList[2]);
            // document.getElementById(e.target.parentElement.classList[2]+i).style.backgroundColor="";
        }
        console.log("white pawn unclicked");
    }}
})
}

let kingWhite = document.getElementById('king-white');
kingWhite.addEventListener('click',(e)=>{
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white king unclicked");
}}})

let queenWhite = document.getElementById('queen-white');
queenWhite.addEventListener('click',(e)=>{
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white queen unclicked");
    }
}})

let knightWhite = document.getElementsByClassName('knight-white');
for(let i = 0; i < knightWhite.length; i++){
    knightWhite[i].addEventListener('click',(e)=>{
        if(whiteChance==true){
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
            console.log("white knight clicked : ",e.target);
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white knight unclicked");
}}})
}

let bishopWhite = document.getElementsByClassName('bishop-white');
for(let i = 0; i < bishopWhite.length; i++){
bishopWhite[i].addEventListener('click',(e)=>{
    if(whiteChance==true){       
        element = e.target; 
        console.log("white bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white bishop unclicked");
}}})
}

let rookWhite = document.getElementsByClassName('rook-white');
for(let i = 0; i < rookWhite.length; i++){
rookWhite[i].addEventListener('click',(e)=>{
    if(whiteChance==true){
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            console.log("white rook clicked : ",e.target);
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("white rook unclicked");
}}})
}

document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for white.");
    targetElement = e.target;

    if(e.target.className != 'pawn-white' && e.target.id != 'queen-white' && e.target.className!="rook-white" && e.target.id!='king-white'  && e.target.className!="knight-white" && e.target.className!="bishop-white"){
        
        if(pieceClicked == true && pieceId.className == 'pawn-white'){
            console.log("white pawn :",e.target);  
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            finalPlace = parseInt(targetElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2];
            finalAscii = targetElement.classList[2];
            if(targetElement.parentElement.className != "container"){
            cuttingPlace = parseInt(targetElement.parentElement.classList[3]);
            cuttingAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            }
            if(initialPlace==6 && finalPlace ==4 && (initialAscii==finalAscii)){    
                if(document.getElementsByClassName(initialAscii)[5].hasChildNodes('img')){
                    console.log("piece in between pawn movement");
                }else{
                    console.log("first Move of pawn");
                    // for(i=6;i>3;i--){
                        // console.log("i : ",i,"ye lo: ",color.classList[2]);
                        // document.getElementById(color.classList[2]+i).style.backgroundColor="";
                    // }
                    targetElement.appendChild(pieceId);
                    whiteChance=false;
                    firstMovePawn=true;
                }
            }else if((initialPlace >finalPlace && initialPlace-finalPlace<=1)&&(initialAscii==finalAscii)){
                    targetElement.appendChild(pieceId);
                    whiteChance=false;
            }else if((initialPlace-cuttingPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-cuttingAscii)==1){
                console.log("piece cutted");        
                targetElement.parentElement.replaceChild(pieceId, targetElement);
                whiteChance=false;
            }else if(firstMovePawn && pieceId.parentElement.classList[3]=='3'){
                console.log("trying for en passant");
                enPass = pieceId.parentElement.classList[2].charCodeAt(0);
                if(enPass+1 == targetElement.classList[2].charCodeAt(0) || enPass-1 == targetElement.classList[2].charCodeAt(0)){
                    console.log('en passant');
                    targetElement.appendChild(pieceId);
                    document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])+1)).innerHTML = ''
                    whiteChance=false;
                }
            }
                pieceClicked = false;
            }

        if(pieceClicked==true && pieceId.id == "king-white"){
            console.log("white king :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if((Math.abs(initialPlace-finalPlace)==1 && Math.abs(initialAscii-finalAscii)<=1) || (Math.abs(initialAscii-finalAscii)==1)&&(Math.abs(initialPlace-finalPlace)<=1)){
                if(targetElement.className.includes('black')){
                    console.log("in replace",targetElement);
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                    e.target.appendChild(pieceId);
                    console.log("in mid as well");
                }whiteChance = false;
            }else if(!whiteCastle && targetElement.id=='g7' && document.getElementById('h7').hasChildNodes('img') && !document.getElementById('f7').hasChildNodes('img') && !document.getElementById('g7').hasChildNodes('img')){ 
                let castleRook = document.getElementById('h7').children[0];
                let castlePlace = document.getElementById('f7');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('h7').innerHTML = "";
                whiteChance=false;
                whiteCastle=true;
            }else if(!whiteCastle && targetElement.id=='c7' && document.getElementById('a7').hasChildNodes('img') && !document.getElementById('b7').hasChildNodes('img') && !document.getElementById('c7').hasChildNodes('img') && !document.getElementById('d7').hasChildNodes('img') ){
                let castleRook = document.getElementById('a7').children[0];
                let castlePlace = document.getElementById('d7');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('a7').innerHTML = "";
                whiteChance=false;
                whiteCastle=true;
            }
            pieceClicked = false;    
        }
            
        if(pieceClicked==true && pieceId.className == "rook-white"){
            console.log("white rook :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if(initialPlace == finalPlace || initialAscii == finalAscii){
                console.log("in the rook block");
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<finalPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between");
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            console.log("in replace",targetElement);
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                            console.log("in mid as well");
                        }whiteChance = false;
                    }
                    inMid=false;
                }
            else if(initialPlace>finalPlace){
                for(let i = finalPlace+1; i<initialPlace; i++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                    console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between");
                        inMid=true;
                        break;  
                    }
                }
                if(!inMid){
                    if(targetElement.className.includes('black')){
                        console.log("in replace",targetElement);
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                        e.target.appendChild(pieceId);
                        console.log("in mid as well");
                    }whiteChance = false;
                }
                inMid=false;
            }
            if(initialAscii<finalAscii){
                for(let i = initialAscii-96; i<finalAscii-97; i++){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    if(targetElement.className.includes('black')){
                        console.log("in replace",targetElement);
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            else if(initialAscii>finalAscii){
                for(let i = initialAscii-98; i>finalAscii-97; i--){
                    pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                    console.log("i is: ",i,"pieceInBetween",pieceInBetween);
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between horizontal");
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    if(targetElement.className.includes('black')){
                        console.log("in replace",targetElement);
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                        e.target.appendChild(pieceId);
                        console.log("in mid as well");
                    }whiteChance = false;
                }
                inMid=false;
            }
        }
        pieceClicked = false;  
    }
    if(pieceClicked==true && pieceId.className == "bishop-white" ){
        console.log("white bishop :",e.target);
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        
        if(targetElement.parentElement.className != "container"){
            finalPlace = parseInt(targetElement.parentElement.classList[3]);
            finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            console.log("ascii: ",finalAscii,"place: ",finalPlace);
        }else{
            finalPlace = parseInt(targetElement.classList[3]);
            finalAscii = targetElement.classList[2].charCodeAt(0);
        }
        if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
            if(initialAscii<finalAscii && initialPlace<finalPlace){
                console.log("yaha aa gaye aake pela gaye",finalAscii);
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
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            if(initialAscii>finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("white piece in between ulta tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in ulta tedha mid as well");
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }

            if(initialAscii>finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("white piece in between seedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("white in seedha mid as well");
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            
        if(initialAscii<finalAscii && initialPlace>finalPlace){
            for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                console.log("i: ",i,"j: ",j,"white piece in between seedha ulta",pieceInBetween);
                if(pieceInBetween.hasChildNodes('img')){
                    inMid=true;
                    break;
                }
            }
            if(!inMid){
                console.log("white in seedha ulta mid as well");
                if(targetElement.className.includes('black')){
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                e.target.appendChild(pieceId);
                }whiteChance = false;
            }
            inMid=false;
        }
        }
        pieceClicked = false;
    }

    if(pieceClicked==true && pieceId.id == "queen-white"){
        console.log("white queen :",e.target);
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        if(targetElement.parentElement.className != "container"){
            finalPlace = parseInt(targetElement.parentElement.classList[3]);
            finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            console.log("ascii: ",finalAscii,"place: ",finalPlace);
        }else{
            finalPlace = parseInt(targetElement.classList[3]);
            finalAscii = targetElement.classList[2].charCodeAt(0);
        }

        if(initialPlace == finalPlace || initialAscii == finalAscii){
            console.log("before in for loop");
            if(finalPlace>initialPlace){
                for(let i = initialPlace+1; i<finalPlace; i++){
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
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            else if(initialPlace>finalPlace){
                for(let i = finalPlace+1; i<initialPlace; i++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                    if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                        console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                        inMid=true;
                        break;  
                    }
                }
                if(!inMid){
                    console.log("in mid as well");
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            if(initialAscii<finalAscii){
                for(let i = initialAscii-96; i<finalAscii-97; i++){
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
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            else if(initialAscii>finalAscii){
                for(let i = initialAscii-98; i>finalAscii-97; i--){
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
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
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
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            if(initialAscii>finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between ulta tedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in ulta tedha mid as well");
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }

            if(initialAscii>finalAscii && initialPlace<finalPlace){
                for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        console.log("piece in between seedha",pieceInBetween);
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha mid as well");
                    if(targetElement.className.includes('black')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = false;
                }
                inMid=false;
            }
            
        if(initialAscii<finalAscii && initialPlace>finalPlace){
            for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                if(pieceInBetween.hasChildNodes('img')){
                    inMid=true;
                    break;
                }
            }
            if(!inMid){
                console.log("in seedha ulta mid as well");
                if(targetElement.className.includes('black')){
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                e.target.appendChild(pieceId);
                }whiteChance = false;
            }
            inMid=false;
        }
        }
        pieceClicked=false;
    }

    if(pieceClicked==true && pieceId.className == "knight-white"){
        console.log("knight :",e.target);
        knightColor = pieceId.parentElement.classList[1];
        initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        if(targetElement.parentElement.className != "container"){
            finalPlace = parseInt(targetElement.parentElement.classList[3]);
            finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            console.log("ascii: ",finalAscii,"place: ",finalPlace);
        }else{
            finalPlace = parseInt(targetElement.classList[3]);
            finalAscii = targetElement.classList[2].charCodeAt(0);
        }
    if(e.target.classList[1]) {   
        if((knightColor=='light' && e.target.classList[1]=='dark')||(knightColor=='dark' && e.target.classList[1]=='light')){
            if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                if(targetElement.className.includes('black')){
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                e.target.appendChild(pieceId);
                }whiteChance = false;
        }
    }}
    else if(targetElement.parentElement.className != "container"){
        if((knightColor=='light' && e.target.parentElement.className.includes('dark'))||(knightColor=='dark' && e.target.parentElement.className.includes('light'))){
            if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                if(targetElement.className.includes('black')){
                    console.log("ghoda chala");
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                    e.target.appendChild(pieceId);
                }whiteChance = false;
            }
        }}
        pieceClicked = false;
    }

}})








// --------------------------------DARK CODE------------------------------------------------


let pawns = document.getElementsByClassName('pawn-black');
for (let i = 0; i < pawns.length; i++){
pawns[i].addEventListener('click',(e)=>{
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        console.log("pawn Clicked");
        pieceClicked = true;
        pieceId = e.target;
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("pawn unclicked");
    }}
})
}

let queen = document.getElementById('queen-black');
queen.addEventListener('click',(e)=>{
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("queen unclicked");
}}})

let king = document.getElementById('king-black');
king.addEventListener('click',(e)=>{
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("king unclicked");
}}})

let knight = document.getElementsByClassName('knight-black');
for(let i = 0; i < knight.length; i++){
    knight[i].addEventListener('click',(e)=>{
        if(whiteChance==false){
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
            console.log("knight clicked : ",e.target);
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("knight unclicked");
}}})
}

let bishop = document.getElementsByClassName('bishop-black');
for(let i = 0; i < bishop.length; i++){
bishop[i].addEventListener('click',(e)=>{
    if(whiteChance==false){
        element = e.target; 
        console.log("bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("bishop unclicked");
}}})
}

let rook = document.getElementsByClassName('rook-black');
for(let i = 0; i < rook.length; i++){
rook[i].addEventListener('click',(e)=>{
    if(whiteChance==false){
        element = e.target;
        console.log("rook clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            console.log("rook unclicked");
}}})
}


document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for black.");
    targetElement = e.target;

if(e.target.className != 'pawn-black' && e.target.id != 'queen-black' && e.target.className!="rook-black" && e.target.id!='king-black'  && e.target.className!="knight-black" && e.target.className!="bishop-black"){
    if(pieceClicked == true && pieceId.className == 'pawn-black'){
        console.log("pawn :",e.target);  
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        finalPlace = parseInt(targetElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2];
        if(targetElement.parentElement.className != "container"){
            cuttingPlace = parseInt(targetElement.parentElement.classList[3]);
            cuttingAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            }
        if(parseInt(pieceId.parentElement.classList[3])==1 && parseInt(targetElement.classList[3]) ==3 && (pieceId.parentElement.classList[2]==targetElement.classList[2])){    
            if(document.getElementsByClassName(pieceId.parentElement.classList[2])[2].hasChildNodes('img')){
                console.log("piece in between pawn movement");
            }else{
            console.log("first Move of pawn");
            targetElement.appendChild(pieceId); 
            whiteChance = true;
            firstMovePawn = true;
            }
        }else if((initialPlace <finalPlace && finalPlace-initialPlace<=1)&&(pieceId.parentElement.classList[2]==targetElement.classList[2])){
                targetElement.appendChild(pieceId);
                console.log("in here");
                whiteChance = true;
                firstMovePawn = false;
        }else if((cuttingPlace-initialPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-cuttingAscii)==1){
            console.log("piece cutted");        
            targetElement.parentElement.replaceChild(pieceId, targetElement);
            whiteChance = true;
            firstMovePawn = false;
        }else if(firstMovePawn && pieceId.parentElement.classList[3]=='4'){
            console.log("trying for en passant");
            enPass = pieceId.parentElement.classList[2].charCodeAt(0);
            if(enPass+1 == targetElement.classList[2].charCodeAt(0) || enPass-1 == targetElement.classList[2].charCodeAt(0)){
                console.log('en passant');
                targetElement.appendChild(pieceId);
                document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])-1)).innerHTML = ''
                whiteChance=true;
            }
        }
            pieceClicked = false;
        }
        

        if(pieceClicked==true && pieceId.id == "queen-black"){
            console.log("queen :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if(initialPlace == finalPlace || initialAscii == finalAscii){
                console.log("before in for loop");
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<finalPlace; i++){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace+1; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                if(initialAscii<finalAscii){
                    for(let i = initialAscii-96; i<finalAscii-97; i++){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>finalAscii-97; i--){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between ulta tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in ulta tedha mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between seedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in seedha mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha ulta mid as well");
                    if(targetElement.className.includes('white')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                    e.target.appendChild(pieceId);
                    }whiteChance = true;
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
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
        if(e.target.classList[1]){
            if((knightColor=='light' && e.target.classList[1]=='dark')||(knightColor=='dark' && e.target.classList[1]=='light')){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                    console.log("in here ghoda");
                targetElement.appendChild(pieceId)
                whiteChance = true;
            }
        }}else if(targetElement.parentElement.className != "container"){
            if((knightColor=='light' && e.target.parentElement.className.includes('dark'))||(knightColor=='dark' && e.target.parentElement.className.includes('light'))){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                    if(targetElement.className.includes('white')){
                        console.log("kaala ghoda chala");
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                        e.target.appendChild(pieceId);
                    }whiteChance = true;
                }
            }}
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.className == "bishop-black" ){
            console.log("bishop :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                        e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between ulta tedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in ulta tedha mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            console.log("piece in between seedha",pieceInBetween);
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        console.log("in seedha mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    console.log("i: ",i,"j: ",j,"piece in between seedha ulta",pieceInBetween);
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    console.log("in seedha ulta mid as well");
                    if(targetElement.className.includes('white')){
                        targetElement.parentElement.replaceChild(pieceId,targetElement)
                    }else{
                        e.target.appendChild(pieceId);
                    }whiteChance = true;
                }
                inMid=false;
            }
            }
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.className == "rook-black"){
            console.log("rook :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if(initialPlace == finalPlace || initialAscii == finalAscii){
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<finalPlace; i++){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace+1; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            console.log("i is: ",i,"pieceInBetween: ",pieceInBetween);
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        console.log("in mid as well");
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                if(initialAscii<finalAscii){
                    for(let i = initialAscii-96; i<finalAscii-97; i++){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>finalAscii-97; i--){
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
                        if(targetElement.className.includes('white')){
                            targetElement.parentElement.replaceChild(pieceId,targetElement)
                        }else{
                            e.target.appendChild(pieceId);
                        }whiteChance = true;
                    }
                    inMid=false;
                }
            }
            pieceClicked = false;
        }

        if(pieceClicked==true && pieceId.id == "king-black"){
            console.log("king :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                console.log("ascii: ",finalAscii,"place: ",finalPlace);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if((Math.abs(initialPlace-finalPlace)==1 && Math.abs(initialAscii-finalAscii)<=1) || (Math.abs(initialAscii-finalAscii)==1)&&(Math.abs(initialPlace-finalPlace)<=1)){
                if(targetElement.className.includes('white')){
                    targetElement.parentElement.replaceChild(pieceId,targetElement)
                }else{
                    e.target.appendChild(pieceId);
                }whiteChance = true;
            }else if(!blackCastle && targetElement.id=='g0' && document.getElementById('h0').hasChildNodes('img') && !document.getElementById('f0').hasChildNodes('img') && !document.getElementById('g0').hasChildNodes('img')){
               
                let castleRook = document.getElementById('h0').children[0];
                let castlePlace = document.getElementById('f0');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('h0').innerHTML = "";
                whiteChance=true;
                blackCastle=true;
            }else if(!blackCastle && targetElement.id=='c0' && document.getElementById('a0').hasChildNodes('img') && !document.getElementById('b0').hasChildNodes('img') && !document.getElementById('c0').hasChildNodes('img') && !document.getElementById('d0').hasChildNodes('img') ){
                let castleRook = document.getElementById('a0').children[0];
                let castlePlace = document.getElementById('d0');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('a0').innerHTML = "";
                whiteChance=true;
                blackCastle=true;
            }
            pieceClicked = false;    
        }
    }
}
)
