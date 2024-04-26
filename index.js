let pieceId, pieceClicked = false;
let innerhtml, targetElement, element, whiteCastle=false, blackCastle=false;
let initialAscii,finalAscii,initialPlace,finalPlace;
let knightColor,pieceInBetween,inMid=false;
let whiteChance = true,cuttingPlace,cuttingAscii,firstMovePawn=false;
let color,check,border,enPass,enPassantPawn;
let leftCheck, rightCheck,possMoves=[],initialX,initial_X,initialY,initial_Y;
let rookNotMoved=true,kingNotMoved=true,blackKingNotMoved=true,blackRookNotMoved=true;

function clearAllColors(){
    for(let i=0;i<8;i++){
        for(let j=97;j<105;j++){
         document.getElementById(String.fromCharCode(j)+i).style.backgroundColor = '';
        }
    }
}

let pawnsWhite = document.getElementsByClassName('pawn-white');
for (let i = 0; i < pawnsWhite.length; i++){
pawnsWhite[i].addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        clearAllColors();
        pieceClicked = true;
        pieceId = e.target;
        console.log("white pawn Clicked");
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        clearAllColors();
        console.log("white pawn unclicked");
    }}
})
}

let kingWhite = document.getElementById('king-white');
kingWhite.addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101  && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        console.log("white king unclicked");
        clearAllColors();
}}})

let queenWhite = document.getElementById('queen-white');
queenWhite.addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==true){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("white queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        clearAllColors();
        console.log("white queen unclicked");
    }
}})

let knightWhite = document.getElementsByClassName('knight-white');
for(let i = 0; i < knightWhite.length; i++){
    knightWhite[i].addEventListener('click',(e)=>{
        clearAllColors();
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
    clearAllColors();
    if(whiteChance==true){       
        element = e.target; 
        console.log("white bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            clearAllColors();
            console.log("white bishop unclicked");
}}})
}

let rookWhite = document.getElementsByClassName('rook-white');
for(let i = 0; i < rookWhite.length; i++){
rookWhite[i].addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==true){
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.id != element.parentElement.id)){
            console.log("white rook clicked : ",e.target);
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            clearAllColors();
            console.log("white rook unclicked");
}}})
}

document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for white.");
    targetElement = e.target;

    if(pieceClicked == true && pieceId.className == 'pawn-white'){
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2];
        leftCheck = String.fromCharCode(initialAscii.charCodeAt(0)-1);
        rightCheck = String.fromCharCode(initialAscii.charCodeAt(0)+1);
        if(initialPlace==6){
            for(let i=1;i<3;i++){
            possMoves[i] = initialAscii+(initialPlace-i);
            document.getElementById(possMoves[i]).style.backgroundColor='red'
        }}else{
            possMoves[1]=initialAscii+(initialPlace-1);
            console.log("poss: ",document.getElementById(possMoves[1]).childElementCount)
            if(document.getElementById(possMoves[1]).childElementCount == 0){
                document.getElementById(possMoves[1]).style.backgroundColor='red'
        }}
        if(initialAscii!='a' && document.getElementById(leftCheck+(initialPlace-1)).children[0] && document.getElementById(leftCheck+(initialPlace-1)).children[0].className.includes('black')){
            console.log("in the left check");
            document.getElementById(leftCheck+(initialPlace-1)).style.backgroundColor = 'red'
        }if(initialAscii!='h' && document.getElementById(rightCheck+(initialPlace-1)).children[0] && document.getElementById(rightCheck+(initialPlace-1)).children[0].className.includes('black')){
            console.log("in the right check");
            document.getElementById(rightCheck+(initialPlace-1)).style.backgroundColor = 'red'
        }if(initialAscii!='a' && firstMovePawn && initialPlace==3 && document.getElementById(leftCheck+initialPlace).children[0] && document.getElementById(leftCheck+initialPlace).children[0].className == 'pawn-black'){
            if(enPassantPawn.parentElement.id == document.getElementById(leftCheck+initialPlace).id){
                console.log("in the left check");
                document.getElementById(leftCheck+(initialPlace-1)).style.backgroundColor = 'red'
            }
        }if(initialAscii!='h' && firstMovePawn && initialPlace==3 && document.getElementById(rightCheck+initialPlace).children[0] && document.getElementById(rightCheck+initialPlace).children[0].className == 'pawn-black'){
            if(enPassantPawn.parentElement.id == document.getElementById(rightCheck+initialPlace).id){
                console.log("in the right check");
                document.getElementById(rightCheck+(initialPlace-1)).style.backgroundColor = 'red'
            }
        }
    }

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
            if(initialPlace==6 && finalPlace==4 && (initialAscii==finalAscii)){    
                if(document.getElementsByClassName(initialAscii)[5].hasChildNodes('img')){
                    console.log("piece in between pawn movement");
                }else{
                    console.log("first Move of pawn");
                    clearAllColors();
                    targetElement.appendChild(pieceId);
                    whiteChance=false;
                    firstMovePawn=true;
                    enPassantPawn=pieceId;
                }
            }else if((initialPlace >finalPlace && initialPlace-finalPlace<=1)&&(initialAscii==finalAscii)){
                    targetElement.appendChild(pieceId);
                    if(initialPlace==6){
                        clearAllColors();
                    }else{
                        clearAllColors();
                    }
                    whiteChance=false;
                    firstMovePawn=false;
            }else if((initialPlace-cuttingPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-cuttingAscii)==1){
                console.log("piece cutted");        
                targetElement.parentElement.replaceChild(pieceId, targetElement);
                clearAllColors();
                whiteChance=false;
                firstMovePawn=false;
            }else if(firstMovePawn && pieceId.parentElement.classList[3]=='3' && enPassantPawn.parentElement.id == document.getElementById(targetElement.classList[2]+pieceId.parentElement.classList[3]).id){
                console.log("trying for en passant");
                enPass = pieceId.parentElement.classList[2].charCodeAt(0);
                if(enPass+1 == targetElement.classList[2].charCodeAt(0) || enPass-1 == targetElement.classList[2].charCodeAt(0)){
                    console.log('en passant');
                    targetElement.appendChild(pieceId);
                    document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])+1)).innerHTML = ''
                    clearAllColors();
                    whiteChance=false;
                    firstMovePawn=false;
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
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                    console.log("in mid as well");
                }
                whiteChance = false;
                firstMovePawn=false;
                kingNotMoved=false;
            }else if(!whiteCastle && targetElement.id=='g7' && document.getElementById('h7').hasChildNodes('img') && !document.getElementById('f7').hasChildNodes('img') && !document.getElementById('g7').hasChildNodes('img')){ 
                let castleRook = document.getElementById('h7').children[0];
                let castlePlace = document.getElementById('f7');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('h7').innerHTML = "";
                clearAllColors();
                whiteChance=false;
                whiteCastle=true;
                firstMovePawn=false;
                kingNotMoved=false;
            }else if(!whiteCastle && targetElement.id=='c7' && document.getElementById('a7').hasChildNodes('img') && !document.getElementById('b7').hasChildNodes('img') && !document.getElementById('c7').hasChildNodes('img') && !document.getElementById('d7').hasChildNodes('img') ){
                let castleRook = document.getElementById('a7').children[0];
                let castlePlace = document.getElementById('d7');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('a7').innerHTML = "";
                clearAllColors();
                whiteChance=false;
                whiteCastle=true;
                firstMovePawn=false;
                kingNotMoved=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                            console.log("in mid as well");
                        }
                        whiteChance = false;
                        firstMovePawn=false;
                        rookNotMoved=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                        console.log("in mid as well");
                    }
                    whiteChance = false;
                    firstMovePawn=false;
                    rookNotMoved=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        console.log("in mid as well");
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
                    rookNotMoved=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                        console.log("in mid as well");
                    }
                    whiteChance = false;
                    firstMovePawn=false;
                    rookNotMoved=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                }
                whiteChance = false;
                firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = false;
                    firstMovePawn=false;
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
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                }
                whiteChance = false;
                firstMovePawn=false;
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
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();                    
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                }
                whiteChance = false;
                firstMovePawn=false;
        }
    }}
    else if(targetElement.parentElement.className != "container"){
        if((knightColor=='light' && e.target.parentElement.className.includes('dark'))||(knightColor=='dark' && e.target.parentElement.className.includes('light'))){
            if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                if(targetElement.className.includes('black')){
                    console.log("ghoda chala");
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                }
                whiteChance = false;
                firstMovePawn=false;
            }
        }}
        pieceClicked = false;
    }

}
if(pieceClicked==true && pieceId.className=="knight-white"){
    console.log("ghoda chala rahe hain");
    knightColor = pieceId.parentElement.classList[1];
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    console.log("henene",(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-2)));
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i=i+2){
        if(i<105 && i>96 && (initialY-2)>=0 && (initialY-2)<8){
        if(document.getElementById(String.fromCharCode(i)+(initialY-2)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY-2)).children[0].className.includes('white')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY-2)).style.backgroundColor='red';
        }}
    }
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i=i+2){9
        if(i<105 && i>96 && (initialY+2)<8 && (initialY+2)>=0){
        if(document.getElementById(String.fromCharCode(i)+(initialY+2)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+2)).children[0].className.includes('white')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+2)).style.backgroundColor='red';
        }}
    }
    for(let i=initialY-1;i<initialY+2;i=i+2){
        if(i<8 && i>=0 && (initialX.charCodeAt(0)+2)<105){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).children[0].className.includes('white')){
            continue;
        }else{
            document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).style.backgroundColor='red';
        }}
    }
    for(let i=initialY-1;i<initialY+2;i=i+2){
        if(i<8 && i>=0 && (initialX.charCodeAt(0)-2)>96){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).children[0].className.includes('white')){
            continue;
        }else{
            document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).style.backgroundColor='red';
        }}}
    
}
if(pieceClicked==true && pieceId.className == "bishop-white" ){
    console.log("ooth chala rahe hain");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
        if(j<8 && j>=0){
        console.log(j,"first quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY-1;i>96 && i<105;i--,j--){
        if(j<8 && j>=0){
        console.log(j,"second quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)+1, j=initialY+1;i<105 && i>96;i++,j++){
        if(j<8 && j>=0){
        console.log(j,"fourth quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY+1;i>96 && i<105;i--,j++){
        if(j<8 && j>=0){
        console.log(j,"third quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        } }    
    }
}
if(pieceClicked==true && pieceId.className == 'rook-white'){
    console.log("Hathi chala rahe hain");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialY-1;i>=0;i--){
        console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=initialY+1;i<8;i++){
        console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
}
if(pieceClicked == true && pieceId.className == 'queen-white'){
    console.log("idhar pela rahe hain");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialY-1;i>=0;i--){
        console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=initialY+1;i<8;i++){
        console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
    for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
        if(j<8 && j>=0){
        console.log(j,"first quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY-1;i>96 && i<105;i--,j--){
        if(j<8 && j>=0){
        console.log(j,"second quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)+1, j=initialY+1;i<105 && i>96;i++,j++){
        if(j<8 && j>=0){
        console.log(j,"fourth quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY+1;i>96 && i<105;i--,j++){
        if(j<8 && j>=0){
        console.log(j,"third quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        } }    
    }
}
if(pieceClicked == true && pieceId.className == "king-white"){
    console.log("rajwa aawa hai");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96&&i<105&&(initialY-1)>=0){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1));
        if(document.getElementById(String.fromCharCode(i)+(initialY-1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY-1)).children[0].className.includes('white')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY-1)).style.backgroundColor='red';
        }
    }}
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96 && i<105 && (initialY+1)<8){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1));
        if(document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0].className.includes('white')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+1)).style.backgroundColor='red';
        }
    }}
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96 && i<105 && (initialY+1)<8){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1));
        if(document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0].className.includes('white')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+1)).style.backgroundColor='red';
        }
    }}
    if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).children[0].className.includes('white')){
        console.log("kuch nahi hoga aise");
    }else{document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).style.backgroundColor = 'red';}
    if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).children[0].className.includes('white')){
        console.log("aise to aur kuch nahi hoga");
    }else{ document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).style.backgroundColor = 'red';}
    if(!whiteCastle && pieceId.parentElement.id == 'e7' && rookNotMoved && kingNotMoved){
        if(!document.getElementById('f7').querySelector('img') && !document.getElementById('g7').querySelector('img')){
        document.getElementById('f7').style.backgroundColor = 'red';
        document.getElementById('g7').style.backgroundColor = 'red';
    }}
    if(!whiteCastle && pieceId.parentElement.id == 'e7' && rookNotMoved && kingNotMoved){
        if(!document.getElementById('d7').querySelector('img') && !document.getElementById('c7').querySelector('img') && !document.getElementById('b7').querySelector('img')){
        document.getElementById('d7').style.backgroundColor = 'red';
        document.getElementById('c7').style.backgroundColor = 'red';
    }}
    
}
})   








// --------------------------------DARK CODE------------------------------------------------


let pawns = document.getElementsByClassName('pawn-black');
for (let i = 0; i < pawns.length; i++){
pawns[i].addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        console.log("pawn Clicked");
        pieceClicked = true;
        pieceId = e.target;
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        clearAllColors();
        console.log("pawn unclicked");
    }}
})
}

let queen = document.getElementById('queen-black');
queen.addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("queen clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        clearAllColors();
        console.log("queen unclicked");
}}})

let king = document.getElementById('king-black');
king.addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==false){
    element = e.target;
    if(pieceClicked == false || (pieceClicked==true && element.id.charCodeAt(element.id.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
        pieceClicked = true;
        pieceId = e.target;
        console.log("king clicked",pieceId);
    }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
        pieceClicked = false;
        clearAllColors();
        console.log("king unclicked");
}}})

let knight = document.getElementsByClassName('knight-black');
for(let i = 0; i < knight.length; i++){
    knight[i].addEventListener('click',(e)=>{
        clearAllColors();
        if(whiteChance==false){
        element = e.target;
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
            console.log("knight clicked : ",e.target);
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            clearAllColors();
            console.log("knight unclicked");
}}})
}

let bishop = document.getElementsByClassName('bishop-black');
for(let i = 0; i < bishop.length; i++){
bishop[i].addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==false){
        element = e.target; 
        console.log("bishop clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            clearAllColors();
            console.log("bishop unclicked");
}}})
}

let rook = document.getElementsByClassName('rook-black');
for(let i = 0; i < rook.length; i++){
rook[i].addEventListener('click',(e)=>{
    clearAllColors();
    if(whiteChance==false){
        element = e.target;
        console.log("rook clicked : ",e.target);
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==107 && pieceId.parentElement.id != element.parentElement.id)){
            pieceId = e.target;
            pieceClicked = true;
        }else if(pieceClicked == true && pieceId.parentElement.id == element.parentElement.id){
            pieceClicked = false;
            clearAllColors();
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
            clearAllColors(); 
            whiteChance = true;
            firstMovePawn = true;
            enPassantPawn = pieceId;
            }
        }else if((initialPlace <finalPlace && finalPlace-initialPlace<=1)&&(pieceId.parentElement.classList[2]==targetElement.classList[2])){
                targetElement.appendChild(pieceId);
                clearAllColors();
                console.log("in here");
                whiteChance = true;
                firstMovePawn = false;
        }else if((cuttingPlace-initialPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-cuttingAscii)==1){
            console.log("piece cutted");        
            targetElement.parentElement.replaceChild(pieceId, targetElement);
            clearAllColors();
            whiteChance = true;
            firstMovePawn = false;
        }else if(firstMovePawn && pieceId.parentElement.classList[3]=='4' && enPassantPawn.parentElement.id == document.getElementById(targetElement.classList[2]+pieceId.parentElement.classList[3]).id ){
            console.log("trying for en passant");
            enPass = pieceId.parentElement.classList[2].charCodeAt(0);
            if(enPass+1 == targetElement.classList[2].charCodeAt(0) || enPass-1 == targetElement.classList[2].charCodeAt(0)){
                console.log('en passant');
                targetElement.appendChild(pieceId);
                document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])-1)).innerHTML = '';
                clearAllColors();
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = true;
                    firstMovePawn=false;
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
                targetElement.appendChild(pieceId);
                clearAllColors();
                whiteChance = true;
                firstMovePawn=false;
            }
        }}else if(targetElement.parentElement.className != "container"){
            if((knightColor=='light' && e.target.parentElement.className.includes('dark'))||(knightColor=='dark' && e.target.parentElement.className.includes('light'))){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<=2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<=2)){
                    if(targetElement.className.includes('white')){
                        console.log("kaala ghoda chala");
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = true;
                    firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
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
                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                        clearAllColors();
                    }else{
                        e.target.appendChild(pieceId);
                        clearAllColors();
                    }
                    whiteChance = true;
                    firstMovePawn=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
                        blackRookNotMoved=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
                        blackRookNotMoved=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
                        blackRookNotMoved=false;
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
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                        }else{
                            e.target.appendChild(pieceId);
                            clearAllColors();
                        }
                        whiteChance = true;
                        firstMovePawn=false;
                        blackRookNotMoved=false;
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
                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                    clearAllColors();
                }else{
                    e.target.appendChild(pieceId);
                    clearAllColors();
                }
                whiteChance = true;
                firstMovePawn=false;
                blackKingNotMoved=false;
            }else if(!blackCastle && targetElement.id=='g0' && document.getElementById('h0').hasChildNodes('img') && !document.getElementById('f0').hasChildNodes('img') && !document.getElementById('g0').hasChildNodes('img')){
               
                let castleRook = document.getElementById('h0').children[0];
                let castlePlace = document.getElementById('f0');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('h0').innerHTML = "";
                clearAllColors();
                whiteChance=true;
                blackCastle=true;
                firstMovePawn=false;
                blackKingNotMoved=false;
            }else if(!blackCastle && targetElement.id=='c0' && document.getElementById('a0').hasChildNodes('img') && !document.getElementById('b0').hasChildNodes('img') && !document.getElementById('c0').hasChildNodes('img') && !document.getElementById('d0').hasChildNodes('img') ){
                let castleRook = document.getElementById('a0').children[0];
                let castlePlace = document.getElementById('d0');
                e.target.appendChild(pieceId);
                castlePlace.appendChild(castleRook);
                document.getElementById('a0').innerHTML = "";
                clearAllColors();
                whiteChance=true;
                blackCastle=true;
                firstMovePawn=false;
                blackKingNotMoved=false;
            }
            pieceClicked = false;    
        }
    }
    
    if(pieceClicked == true && pieceId.className == 'pawn-black'){
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2];
        leftCheck = String.fromCharCode(initialAscii.charCodeAt(0)-1);
        rightCheck = String.fromCharCode(initialAscii.charCodeAt(0)+1);
        if(initialPlace==1){
            for(let i=1;i<3;i++){
            possMoves[i] = initialAscii+(initialPlace+i);
            document.getElementById(possMoves[i]).style.backgroundColor='red'
        }}else{
            possMoves[1]=initialAscii+(initialPlace+1);
            console.log("poss: ",document.getElementById(possMoves[1]).childElementCount)
            if(document.getElementById(possMoves[1]).childElementCount == 0){
                document.getElementById(possMoves[1]).style.backgroundColor='red'
        }}
        if(initialAscii!='a' && document.getElementById(leftCheck+(initialPlace+1)).children[0] && document.getElementById(leftCheck+(initialPlace+1)).children[0].className.includes('white')){
            console.log("in the left check");
            document.getElementById(leftCheck+(initialPlace+1)).style.backgroundColor = 'red'
        }if(initialAscii!='h' && document.getElementById(rightCheck+(initialPlace+1)).children[0] && document.getElementById(rightCheck+(initialPlace+1)).children[0].className.includes('white')){
            console.log("in the right check");
            document.getElementById(rightCheck+(initialPlace+1)).style.backgroundColor = 'red'
        }if(initialAscii!='a' && firstMovePawn && initialPlace==4 && document.getElementById(leftCheck+initialPlace).children[0] && document.getElementById(leftCheck+initialPlace).children[0].className == 'pawn-white'){
            if(enPassantPawn.parentElement.id == document.getElementById(leftCheck+initialPlace).id){
                console.log("in the left check");
                document.getElementById(leftCheck+(initialPlace+1)).style.backgroundColor = 'red'
            }
        }if(initialAscii!='h' && firstMovePawn && initialPlace==4 && document.getElementById(rightCheck+initialPlace).children[0] && document.getElementById(rightCheck+initialPlace).children[0].className == 'pawn-white'){
            if(enPassantPawn.parentElement.id == document.getElementById(rightCheck+initialPlace).id){
            console.log("in the right check");
            document.getElementById(rightCheck+(initialPlace+1)).style.backgroundColor = 'red'
            }
        }
    }
    if(pieceClicked == true && pieceId.className == 'queen-black'){
        console.log("idhar pela rahe hain");
        initialY = parseInt(pieceId.parentElement.classList[3]);
        initialX = pieceId.parentElement.classList[2];
        for(let i=initialY-1;i>=0;i--){
            console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
            if(document.getElementById(initialX+i).querySelector('img')){
                if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(initialX+i).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(initialX+i).style.backgroundColor = 'red';
            }
        }
        for(let i=initialY+1;i<8;i++){
            console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
            if(document.getElementById(initialX+i).querySelector('img')){
                if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(initialX+i).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(initialX+i).style.backgroundColor = 'red';
            }
        }
        for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
            console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
            if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            }
        }
        for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
            console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
            if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            }
        }
        for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
            if(j<8 && j>=0){
            console.log(j,"first quadrant rangenge",i);
            if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            }}     
        }
        for(let i=initialX.charCodeAt(0)-1, j=initialY-1;i>96 && i<105;i--,j--){
            if(j<8 && j>=0){
            console.log(j,"second quadrant rangenge",i);
            if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            }}     
        }
        for(let i=initialX.charCodeAt(0)+1, j=initialY+1;i<105 && i>96;i++,j++){
            if(j<8 && j>=0){
            console.log(j,"fourth quadrant rangenge",i);
            if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            }}
        }
        for(let i=initialX.charCodeAt(0)-1, j=initialY+1;i>96 && i<105;i--,j++){
            if(j<8 && j>=0){
            console.log(j,"third quadrant rangenge",i);
            if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                    break;
                }
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                break;
            }else{
                document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            } }    
        }
    }
    if(pieceClicked==true && pieceId.className=="knight-black"){
    console.log("ghoda chala rahe hain");
    knightColor = pieceId.parentElement.classList[1];
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    console.log("henene",(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-2)));
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i=i+2){
        if(i<105 && i>96 && (initialY-2)>=0 && (initialY-2)<8){
        if(document.getElementById(String.fromCharCode(i)+(initialY-2)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY-2)).children[0].className.includes('black')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY-2)).style.backgroundColor='red';
        }}
    }
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i=i+2){9
        if(i<105 && i>96 && (initialY+2)<8 && (initialY+2)>=0){
        if(document.getElementById(String.fromCharCode(i)+(initialY+2)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+2)).children[0].className.includes('black')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+2)).style.backgroundColor='red';
        }}
    }
    for(let i=initialY-1;i<initialY+2;i=i+2){
        if(i<8 && i>=0 && (initialX.charCodeAt(0)+2)<105){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).children[0].className.includes('black')){
            continue;
        }else{
            document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+2)+i).style.backgroundColor='red';
        }}
    }
    for(let i=initialY-1;i<initialY+2;i=i+2){
        if(i<8 && i>=0 && (initialX.charCodeAt(0)-2)>96){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).children[0].className.includes('black')){
            continue;
        }else{
            document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-2)+i).style.backgroundColor='red';
        }}}
    
}
if(pieceClicked==true && pieceId.className == "bishop-black" ){
    console.log("ooth chala rahe hain");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
        if(j<8 && j>=0){
        console.log(j,"first quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY-1;i>96 && i<105;i--,j--){
        if(j<8 && j>=0){
        console.log(j,"second quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}     
    }
    for(let i=initialX.charCodeAt(0)+1, j=initialY+1;i<105 && i>96;i++,j++){
        if(j<8 && j>=0){
        console.log(j,"fourth quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        }}
    }
    for(let i=initialX.charCodeAt(0)-1, j=initialY+1;i>96 && i<105;i--,j++){
        if(j<8 && j>=0){
        console.log(j,"third quadrant rangenge",i);
        if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
        } }    
    }
}
if(pieceClicked==true && pieceId.className == 'rook-black'){
    console.log("Hathi chala rahe hain");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialY-1;i>=0;i--){
        console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('black')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=initialY+1;i<8;i++){
        console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
        if(document.getElementById(initialX+i).querySelector('img')){
            if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('black')){
                break;
            }
            document.getElementById(initialX+i).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(initialX+i).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
    for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
        console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
        if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
            if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('black')){
                break;
            }
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
            break;
        }else{
            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
        }
    }
}
if(pieceClicked == true && pieceId.className == "king-black"){
    console.log("rajwa aawa hai");
    initialY = parseInt(pieceId.parentElement.classList[3]);
    initialX = pieceId.parentElement.classList[2];
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96&&i<105&&(initialY-1)>=0){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1));
        if(document.getElementById(String.fromCharCode(i)+(initialY-1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY-1)).children[0].className.includes('black')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY-1)).style.backgroundColor='red';
        }
    }}
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96 && i<105 && (initialY+1)<8){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1));
        if(document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0].className.includes('black')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+1)).style.backgroundColor='red';
        }
    }}
    for(let i=initialX.charCodeAt(0)-1;i<initialX.charCodeAt(0)+2;i++){
        if(i>96 && i<105 && (initialY+1)<8){
        console.log(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1));
        if(document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(i)+(initialY+1)).children[0].className.includes('black')){
            continue;
        }else{
        document.getElementById(String.fromCharCode(i)+(initialY+1)).style.backgroundColor='red';
        }
    }}
    if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).children[0].className.includes('black')){
        console.log("kuch nahi hoga aise");
    }else{document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+initialY).style.backgroundColor = 'red';}
    if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).children[0].className.includes('black')){
        console.log("aise to aur kuch nahi hoga");
    }else{ document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+initialY).style.backgroundColor = 'red';}
    if(!blackCastle && pieceId.parentElement.id == 'e0' && blackRookNotMoved && blackK0ngNotMoved){
        if(!document.getElementById('f0').querySelector('img') && !document.getElementById('g0').querySelector('img')){
        document.getElementById('f0').style.backgroundColor = 'red';
        document.getElementById('g0').style.backgroundColor = 'red';
    }}
    if(!blackCastle && pieceId.parentElement.id == 'e0' && blackRookNotMoved && blackKingNotMoved){
        if(!document.getElementById('d0').querySelector('img') && !document.getElementById('c0').querySelector('img') && !document.getElementById('b0').querySelector('img')){
        document.getElementById('d0').style.backgroundColor = 'red';
        document.getElementById('c0').style.backgroundColor = 'red';
    }}
    
}

}
)
