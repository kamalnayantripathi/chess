let pieceId, pieceClicked = false;
let innerhtml, targetElement, element, whiteCastle=false, blackCastle=false;
let initialAscii,finalAscii,initialPlace,finalPlace;
let knightColor,pieceInBetween,inMid=false;
let whiteChance = true,cuttingPlace,cuttingAscii,firstMovePawn=false;
let color,check=false,border,enPass,enPassantPawn;
let leftCheck, rightCheck,possMoves=[],initialX,initial_X,initialY,initial_Y;
let rookNotMoved=true,kingNotMoved=true,blackKingNotMoved=true,blackRookNotMoved=true,attackingPiece=false;
let underAttack=[],kingUnderAttack=false,kingCanBeSaved=false,safetyPiece=[],attackLane=[],attackLaneHor=[];
let kingX,kingY,onlyChecking=false,checkingCheck=false,pin=false,pinnedPiece=[],pinnedPieces=[],pinningLane=[],pinnedPieceCount=0;
let pinningLanes=[],kingCanMove=false,safetyPieces=[];


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

let queenWhite = document.getElementsByClassName('queen-white');
    queenWhite[0].addEventListener('click',(e)=>{
        queenMovesAfterPromotion(e);
    })
        

function queenMovesAfterPromotion(e){
    clearAllColors();
    if(whiteChance==true){
        element = e.target;   
        if(pieceClicked == false || (pieceClicked==true && element.className.charCodeAt(element.className.length-1)==101 && pieceId.parentElement.className != element.parentElement.className)){
            pieceClicked = true;
            pieceId = e.target;
            console.log("white queen clicked",pieceId);
        }else if(pieceClicked == true && pieceId.parentElement.className == element.parentElement.className){
            pieceClicked = false;
            clearAllColors();
            console.log("white queen unclicked");
        }
    }
}
function queenClicking(){
        targetElement.children[0].addEventListener('click',(e)=>{
            queenMovesAfterPromotion(e);           
        })
}


let knightWhite = document.getElementsByClassName('knight-white');
    for(let i = 0; i < knightWhite.length; i++){
        knightWhite[i].addEventListener('click',(e)=>{
            addingEventListenerToKnight(e);
        })
    }

function addingEventListenerToKnight(e){
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
        }
    }
}


// function knightPromotion(){
//     targetElement.addEventListener('click',()=>{
//         addingEventListenerToKnight();
//     })   
// }

bishopClicking();
function bishopClicking(){
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
}

rookClicking();
function rookClicking(){
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
}

document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for white.");
    targetElement = e.target;
   
    if(e.target.className != 'pawn-white' && e.target.className != 'queen-white' && e.target.className!="rook-white" && e.target.id!='king-white'  && e.target.className!="knight-white" && e.target.className!="bishop-white"){
        
        if(pieceClicked == true && pieceId.className == 'pawn-white'){ 
                console.log("white pawn :",e.target);  
                initialPlace = parseInt(pieceId.parentElement.classList[3]);            
                initialAscii = pieceId.parentElement.classList[2];
                if(targetElement.parentElement.className != "container"){
                    finalPlace = parseInt(targetElement.parentElement.classList[3]);
                    finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
                }else{
                    finalPlace = parseInt(targetElement.classList[3]);
                    finalAscii = targetElement.classList[2];
                }
                
                if(initialPlace==6 && finalPlace==4 && (initialAscii==finalAscii)){    
                    if(document.getElementsByClassName(initialAscii)[5].hasChildNodes('img')){
                    }else{
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            targetElement.appendChild(pieceId);
                            afterMoveFunctions("pawn");
                            firstMovePawn=true;
                            enPassantPawn=pieceId;        
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                targetElement.appendChild(pieceId);
                                afterMoveFunctions("pawn");
                                firstMovePawn=true;
                                enPassantPawn=pieceId;
                            }
                        }else if(!check){
                            targetElement.appendChild(pieceId);
                            afterMoveFunctions("pawn");
                            firstMovePawn=true;
                            enPassantPawn=pieceId;
                        }
                    }
                }else if((initialPlace-finalPlace==1)&&(initialAscii==finalAscii)){
                    if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                        if(checkForPawnPromotion("white")){
                            console.log("pawn promoted");
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }else{
                            targetElement.appendChild(pieceId);
                            afterMoveFunctions("pawn");
                            firstMovePawn=true;
                            enPassantPawn=pieceId;  
                        }      
                    }else if(!check && checkForPin(pieceId)){
                        if(pinnedPieceMovement(targetElement)){
                            if(checkForPawnPromotion("white")){
                                console.log("pawn promoted");
                                afterMoveFunctions("pawn");
                                firstMovePawn=false;
                            }
                            else{
                                targetElement.appendChild(pieceId);
                                afterMoveFunctions("pawn");
                                firstMovePawn=false;
                            }
                        }
                    }else if(!check){
                        if(checkForPawnPromotion("white")){
                            console.log("pawn promoted");
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }else{
                            targetElement.appendChild(pieceId);
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }
                    }
                }else if((initialPlace-finalPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-finalAscii)==1){
                    if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                        if(checkForPawnPromotion("white","replace")){
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }else{
                            targetElement.parentElement.replaceChild(pieceId, targetElement);
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;       
                        }
                    }else if(!check && checkForPin(pieceId)){
                        if(pinnedPieceMovement(targetElement)){
                            if(checkForPawnPromotion("white","replace")){
                                afterMoveFunctions("pawn");
                                firstMovePawn=false;
                            }else{
                                targetElement.parentElement.replaceChild(pieceId, targetElement);
                                afterMoveFunctions("pawn");
                                firstMovePawn=false;       
                            }
                        }
                    }else if(!check){
                        if(checkForPawnPromotion("white","replace")){
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }else{
                            targetElement.parentElement.replaceChild(pieceId, targetElement);
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;       
                        }
                    }
                }else if(firstMovePawn && pieceId.parentElement.classList[3]=='3' && enPassantPawn.parentElement.id == document.getElementById(targetElement.classList[2]+pieceId.parentElement.classList[3]).id){
                    enPass = pieceId.parentElement.classList[2].charCodeAt(0);
                    if(enPass+1 == targetElement.classList[2].charCodeAt(0) || enPass-1 == targetElement.classList[2].charCodeAt(0)){
                        if(checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                targetElement.appendChild(pieceId);
                                document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])+1)).innerHTML = ''
                                afterMoveFunctions("pawn");
                                firstMovePawn=false;
                            }
                        }else{
                            targetElement.appendChild(pieceId);
                            document.getElementById(targetElement.classList[2]+(parseInt(pieceId.parentElement.classList[3])+1)).innerHTML = ''
                            afterMoveFunctions("pawn");
                            firstMovePawn=false;
                        }
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
                }else{
                    finalPlace = parseInt(targetElement.classList[3]);
                    finalAscii = targetElement.classList[2].charCodeAt(0);
                }
                if((Math.abs(initialPlace-finalPlace)==1 && Math.abs(initialAscii-finalAscii)<=1) || (Math.abs(initialAscii-finalAscii)==1)&&(Math.abs(initialPlace-finalPlace)<=1)){
                    if(targetElement.className.includes('black')){
                        for(i=0;i<possMoves.length;i++){
                            if(targetElement==possMoves[i]){
                                kingCanMove=true;
                            }else if(possMoves[i].children[0] && targetElement==possMoves[i].children[0]){
                                kingCanMove=true;
                            }
                        }if(kingCanMove){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            clearAllColors();
                            check=false;
                            whiteChance = false;
                            firstMovePawn=false;
                            kingNotMoved=false;
                            kingCanMove=false;
                        }
                    }else{
                        for(i=0;i<possMoves.length;i++){
                            if(targetElement==possMoves[i]){
                                kingCanMove=true;
                            }else if(possMoves[i].children[0] && targetElement==possMoves[i].children[0]){
                                kingCanMove=true;
                            }
                        }if(kingCanMove){  
                            e.target.appendChild(pieceId);
                            clearAllColors();
                            check=false;
                            whiteChance = false;
                            firstMovePawn=false;
                            kingNotMoved=false;
                            kingCanMove=false;
                        }
                    }
                }else if(!whiteCastle && targetElement.id=='g7' && document.getElementById('h7').hasChildNodes('img') && !document.getElementById('f7').hasChildNodes('img') && !document.getElementById('g7').hasChildNodes('img')){ 
                    let castleRook = document.getElementById('h7').children[0];
                    let castlePlace = document.getElementById('f7');
                    AttackedLane('f'.charCodeAt(0),7);
                    AttackedLane('g'.charCodeAt(0),7);
                    if(!kingUnderAttack && !check){
                        e.target.appendChild(pieceId);
                        castlePlace.appendChild(castleRook);
                        document.getElementById('h7').innerHTML = "";
                        clearAllColors();
                        check=false;
                        whiteChance=false;
                        whiteCastle=true;
                        firstMovePawn=false;
                        kingNotMoved=false;
                    }
                    kingUnderAttack=false;
                }else if(!whiteCastle && targetElement.id=='c7' && document.getElementById('a7').hasChildNodes('img') && !document.getElementById('b7').hasChildNodes('img') && !document.getElementById('c7').hasChildNodes('img') && !document.getElementById('d7').hasChildNodes('img') ){
                    let castleRook = document.getElementById('a7').children[0];
                    let castlePlace = document.getElementById('d7');
                    AttackedLane('b'.charCodeAt(0),7);
                    AttackedLane('c'.charCodeAt(0),7);
                    AttackedLane('d'.charCodeAt(0),7);
                    if(!kingUnderAttack && !check){
                        e.target.appendChild(pieceId);
                        castlePlace.appendChild(castleRook);
                        document.getElementById('a7').innerHTML = "";
                        clearAllColors();
                        check=false;
                        whiteChance=false;
                        whiteCastle=true;
                        firstMovePawn=false;
                        kingNotMoved=false;
                    }
                    kingUnderAttack=false;
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
                }else{
                    finalPlace = parseInt(targetElement.classList[3]);
                    finalAscii = targetElement.classList[2].charCodeAt(0);
                }
                if(initialPlace == finalPlace || initialAscii == finalAscii){
                    if(finalPlace>initialPlace){
                        for(let i = initialPlace+1; i<finalPlace; i++){
                            pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                            if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                                inMid=true;
                                break;  
                            }
                        }
                        if(!inMid){
                            if(targetElement.className.includes('black')){
                                if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("rook");
                                }else if(!check && checkForPin(pieceId)){
                                    if(pinnedPieceMovement(targetElement)){
                                        targetElement.parentElement.replaceChild(pieceId,targetElement);
                                        afterMoveFunctions("rook");
                                    }
                                }else if(!check){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("rook");
                                }
                            }else{
                                if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("rook");
                                }else if(!check && checkForPin(pieceId)){
                                    if(pinnedPieceMovement(targetElement)){
                                        e.target.appendChild(pieceId);
                                        afterMoveFunctions("rook");
                                    }
                                }else if(!check){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("rook");
                                }
                            }
                        }
                        inMid=false;
                    }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace+1; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");
                            }
                        }
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
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");                     
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");                     
                            }
                        }
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>finalAscii-97; i--){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("rook");
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("rook");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("rook");     
                            }
                        };
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
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
            if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
                if(initialAscii<finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                        }
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                            else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                        }
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                            else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions("bishop");
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                        }
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    if(targetElement.className.includes('black')){
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions("bishop");
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions("bishop");
                            }
                        }else if(!check){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions("bishop");
                        }
                    }else{
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions("bishop");
                        }
                        else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions("bishop");
                            }
                        }else if(!check){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions("bishop");
                        }
                    }
                }
                inMid=false;
            }
            }
            pieceClicked = false;
        }
        if(pieceClicked==true && pieceId.className == "queen-white"){
            console.log("white queen :",e.target);
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2].charCodeAt(0);
            if(targetElement.parentElement.className != "container"){
                finalPlace = parseInt(targetElement.parentElement.classList[3]);
                finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }

            if(initialPlace == finalPlace || initialAscii == finalAscii){
                if(finalPlace>initialPlace){
                    for(let i = initialPlace+1; i<finalPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();     
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }
                else if(initialPlace>finalPlace){
                    for(let i = finalPlace+1; i<initialPlace; i++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(initialAscii))[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;  
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }
                if(initialAscii<finalAscii){
                    for(let i = initialAscii-96; i<finalAscii-97; i++){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }      
                        }
                    }
                    inMid=false;
                }
                else if(initialAscii>finalAscii){
                    for(let i = initialAscii-98; i>finalAscii-97; i--){
                        pieceInBetween = document.getElementsByClassName(initialPlace)[i];
                        if(pieceInBetween && pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }
            }
            if(Math.abs(initialPlace-finalPlace) == Math.abs(initialAscii-finalAscii)){
                
                if(initialAscii<finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1, i=initialAscii+1; i<finalAscii; i++,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);  
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);  
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }
                if(initialAscii>finalAscii && initialPlace>finalPlace){
                    for(let j=initialPlace-1,i=initialAscii-1;i>finalAscii;i--,j--){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }

                if(initialAscii>finalAscii && initialPlace<finalPlace){
                    for(let j=initialPlace+1,i=initialAscii-1;i>finalAscii;i--,j++){
                        pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                        if(pieceInBetween.hasChildNodes('img')){
                            inMid=true;
                            break;
                        }
                    }
                    if(!inMid){
                        if(targetElement.className.includes('black')){
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else{
                            if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }else if(!check && checkForPin(pieceId)){
                                if(pinnedPieceMovement(targetElement)){
                                    e.target.appendChild(pieceId);
                                    afterMoveFunctions();    
                                }
                            }else if(!check){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }
                    }
                    inMid=false;
                }
                
            if(initialAscii<finalAscii && initialPlace>finalPlace){
                for(let j=initialPlace- 1,i=initialAscii+1;i<finalAscii;i++,j--){
                    pieceInBetween = document.getElementsByClassName(String.fromCharCode(i)+` ${j}`)[0];
                    if(pieceInBetween.hasChildNodes('img')){
                        inMid=true;
                        break;
                    }
                }
                if(!inMid){
                    if(targetElement.className.includes('black')){
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else if(!check){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }
                    }else{
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions();    
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }else if(!check){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions();    
                        }
                    }
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
            }else{
                finalPlace = parseInt(targetElement.classList[3]);
                finalAscii = targetElement.classList[2].charCodeAt(0);
            }
        if(e.target.classList[1]) {   
            if((knightColor=='light' && e.target.classList[1]=='dark')||(knightColor=='dark' && e.target.classList[1]=='light')){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<2)){
                    if(targetElement.className.includes('black')){
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                targetElement.parentElement.replaceChild(pieceId,targetElement);
                                afterMoveFunctions();    
                            }
                        }else if(!check){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }
                    }else{
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions();    
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                e.target.appendChild(pieceId);
                                afterMoveFunctions();    
                            }
                        }else if(!check){
                            e.target.appendChild(pieceId);
                            afterMoveFunctions();    
                        }
                    }
            }
        }}
        else if(targetElement.parentElement.className != "container"){
            if((knightColor=='light' && e.target.parentElement.className.includes('dark'))||(knightColor=='dark' && e.target.parentElement.className.includes('light'))){
                if((Math.abs(initialPlace-finalPlace)==2 && Math.abs(initialAscii-finalAscii)<2) || (Math.abs(initialAscii-finalAscii)==2)&&(Math.abs(initialPlace-finalPlace)<2)){
                    if(targetElement.className.includes('black')){
                        if(check && checkSafetyPiece(pieceId.parentElement.id,targetElement)){
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }else if(!check && checkForPin(pieceId)){
                            if(pinnedPieceMovement(targetElement)){
                                    console.log("ghoda chala");
                                    targetElement.parentElement.replaceChild(pieceId,targetElement);
                                    afterMoveFunctions();    
                            }
                        }else if(!check){
                            console.log("ghoda chala");
                            targetElement.parentElement.replaceChild(pieceId,targetElement);
                            afterMoveFunctions();    
                        }
                    }
                }
            }}
            pieceClicked = false;
        }
        if(!whiteChance){
            console.log('underAttack ki length 0 kar rahe');
            underAttack.length=0;
            kingUnderAttack=false;
        }
        if(whiteChance){
            clearAllColors();
        }
    }
     
    if(pieceClicked == true && pieceId.className == 'pawn-white'){
        if(check){
            for(i=0;i<safetyPieces.length;i=i+2){
                if(pieceId.parentElement.id==safetyPieces[i]){
                    safetyPieces[i+1].style.backgroundColor='red';  
                }
            }
        }else{
            initialPlace = parseInt(pieceId.parentElement.classList[3]);
            initialAscii = pieceId.parentElement.classList[2];
            leftCheck = String.fromCharCode(initialAscii.charCodeAt(0)-1);
            rightCheck = String.fromCharCode(initialAscii.charCodeAt(0)+1);
            if(!checkForPin(pieceId) && initialPlace==6){
                for(let i=1;i<3;i++){
                    if(document.getElementById(initialAscii+(initialPlace-i)).children[0]){
                        break;
                    }
                    document.getElementById(initialAscii+(initialPlace-i)).style.backgroundColor='red'
            }}else{
                if(!checkForPin(pieceId) && document.getElementById(initialAscii+(initialPlace-1)).childElementCount == 0){
                    document.getElementById(initialAscii+(initialPlace-1)).style.backgroundColor='red'
            }}
            if(initialAscii!='a' && document.getElementById(leftCheck+(initialPlace-1)).children[0] && document.getElementById(leftCheck+(initialPlace-1)).children[0].className.includes('black')){    
                if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(leftCheck+(initialPlace-1)))){
                        document.getElementById(leftCheck+(initialPlace-1)).style.backgroundColor = 'red';
                    }
                }else{
                    document.getElementById(leftCheck+(initialPlace-1)).style.backgroundColor = 'red';      
                }
            }if(initialAscii!='h' && document.getElementById(rightCheck+(initialPlace-1)).children[0] && document.getElementById(rightCheck+(initialPlace-1)).children[0].className.includes('black')){
                if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(rightCheck+(initialPlace-1)))){
                        document.getElementById(rightCheck+(initialPlace-1)).style.backgroundColor = 'red';
                    }
                }else{
                    document.getElementById(rightCheck+(initialPlace-1)).style.backgroundColor = 'red';
                }
            }if(initialAscii!='a' && firstMovePawn && initialPlace==3 && document.getElementById(leftCheck+initialPlace).children[0] && document.getElementById(leftCheck+initialPlace).children[0].className == 'pawn-black'){
                if(enPassantPawn.parentElement.id == document.getElementById(leftCheck+initialPlace).id){
                    document.getElementById(leftCheck+(initialPlace-1)).style.backgroundColor = 'red'
                }
            }if(initialAscii!='h' && firstMovePawn && initialPlace==3 && document.getElementById(rightCheck+initialPlace).children[0] && document.getElementById(rightCheck+initialPlace).children[0].className == 'pawn-black'){
                if(enPassantPawn.parentElement.id == document.getElementById(rightCheck+initialPlace).id){
                    document.getElementById(rightCheck+(initialPlace-1)).style.backgroundColor = 'red'
                }
            }
        }
    }
    if(pieceClicked==true && pieceId.className=="knight-white"){
        if(check){
            for(i=0;i<safetyPieces.length;i=i+2){
                if(pieceId.parentElement.id==safetyPieces[i]){
                    safetyPieces[i+1].style.backgroundColor='red';  
                }
            }
        }else if(!checkForPin(pieceId)){
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
                }}
            }
        }
    }
    if(pieceClicked==true && pieceId.className == "bishop-white" ){
        if(check){
            for(i=0;i<safetyPieces.length;i=i+2){
                if(pieceId.parentElement.id==safetyPieces[i]){
                    safetyPieces[i+1].style.backgroundColor='red';  
                }
            }
        }else{
            initialY = parseInt(pieceId.parentElement.classList[3]);
            initialX = pieceId.parentElement.classList[2];
            for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
                if(j<8 && j>=0){
                console.log(j,"first quadrant rangenge",i);
                if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else{
                    document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                }}    
            }
        }
    }
    if(pieceClicked==true && pieceId.className == 'rook-white'){
        if(check){
            for(i=0;i<safetyPieces.length;i=i+2){
                if(pieceId.parentElement.id==safetyPieces[i]){
                    safetyPieces[i+1].style.backgroundColor='red';  
                }
            }
        }else{
            console.log("Hathi chala rahe hain");
            initialY = parseInt(pieceId.parentElement.classList[3]);
            initialX = pieceId.parentElement.classList[2];
            for(let i=initialY-1;i>=0;i--){
                console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
                if(document.getElementById(initialX+i).querySelector('img')){
                    if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                        break;        
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=initialY+1;i<8;i++){
                console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
                if(document.getElementById(initialX+i).querySelector('img')){
                    if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                        break;        
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
                console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
                if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        break;
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
                console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
                if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        break;
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                    }
                }
            }
        }
    }
    if(pieceClicked == true && pieceId.className == 'queen-white'){
        if(check){
            for(i=0;i<safetyPieces.length;i=i+2){
                if(pieceId.parentElement.id==safetyPieces[i]){
                    safetyPieces[i+1].style.backgroundColor='red';  
                }
            }
        }else{
            initialY = parseInt(pieceId.parentElement.classList[3]);
            initialX = pieceId.parentElement.classList[2];
            for(let i=initialY-1;i>=0;i--){
                console.log("vertical rangne aaye hain",document.getElementById(initialX+i));
                if(document.getElementById(initialX+i).querySelector('img')){
                    if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                        break;        
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=initialY+1;i<8;i++){
                console.log("vertical rang ke jayenge",document.getElementById(initialX+i));
                if(document.getElementById(initialX+i).querySelector('img')){
                    if(document.getElementById(initialX+i).children[0] && document.getElementById(initialX+i).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                        break;        
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(initialX+i))){
                            document.getElementById(initialX+i).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(initialX+i).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=(initialX.charCodeAt(0)+1);i<105;i++){
                console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
                if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        break;
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=(initialX.charCodeAt(0)-1);i>96;i--){
                console.log("horizontal rangne aaye hain",document.getElementById(String.fromCharCode(i)+initialY));
                if(document.getElementById(String.fromCharCode(i)+initialY).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+initialY).children[0] && document.getElementById(String.fromCharCode(i)+initialY).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        break;
                    }
                }else{
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+initialY))){
                            document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+initialY).style.backgroundColor = 'red';
                    }
                }
            }
            for(let i=initialX.charCodeAt(0)+1, j=initialY-1;i<105 && i>96;i++,j--){
                if(j<8 && j>=0){
                console.log(j,"first quadrant rangenge",i);
                if(document.getElementById(String.fromCharCode(i)+j).querySelector('img')){
                    if(document.getElementById(String.fromCharCode(i)+j).children[0] && document.getElementById(String.fromCharCode(i)+j).children[0].className.includes('white')){
                        break;
                    }
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
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
                    if(checkForPin(pieceId)){
                        if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                            document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                            break;
                        }
                    }else{
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else if(checkForPin(pieceId)){
                    if(pinnedPieceMovement(document.getElementById(String.fromCharCode(i)+j))){
                        document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                    }
                }else{
                    document.getElementById(String.fromCharCode(i)+j).style.backgroundColor = 'red';
                }}    
            }
        }
    }
    if(pieceClicked == true && pieceId.className == "king-white"){;
        possMoves.length=0;
        initialY = parseInt(pieceId.parentElement.classList[3]);
        initialX = pieceId.parentElement.classList[2];
        possibleKingMoves(initialX,initialY,"white","black");
        if(!whiteCastle && pieceId.parentElement.id == 'e7' && rookNotMoved && kingNotMoved){
            if(!document.getElementById('f7').querySelector('img') && !document.getElementById('g7').querySelector('img')){
            document.getElementById('f7').style.backgroundColor = 'red';
            document.getElementById('g7').style.backgroundColor = 'red';
        }}
        if(!whiteCastle && pieceId.parentElement.id == 'e0' && rookNotMoved && kingNotMoved){
            if(!document.getElementById('d7').querySelector('img') && !document.getElementById('c7').querySelector('img') && !document.getElementById('b7').querySelector('img')){
            document.getElementById('d7').style.backgroundColor = 'red';
            document.getElementById('c7').style.backgroundColor = 'red';
        }}
    }
})   
function possibleKingMoves(initialX,initialY,c1,c2){  
    possMoves.length = 0;
    kingUnderAttack=false;
    console.log("ini X,Y: ",initialX,initialY,c1,c2);
    if(initialY-1>=0){
        if(document.getElementById((initialX)+(initialY-1)).children[0] && document.getElementById((initialX)+(initialY-1)).children[0].className.includes(`${c1}`)){
            console.log('piece in front');
        }else{
            AttackedLane(initialX.charCodeAt(0),(initialY-1),c1,c2);
            console.log("checking color front",onlyChecking,kingUnderAttack);
            if(!kingUnderAttack){
                console.log("pushing poss front");
                possMoves.push(document.getElementById((initialX)+(initialY-1)));
                if(!onlyChecking){
                    console.log('checking color rangayi for front.');
                    document.getElementById((initialX)+(initialY-1)).style.backgroundColor='red';
                }
    }}
        kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)-1>96) && (initialY-1>=0)){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1)).children[0].className.includes(`${c1}`)){
            console.log('piece in left diag');
        }else{
            AttackedLane((initialX.charCodeAt(0)-1),(initialY-1),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for left diag");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY-1)).style.backgroundColor='red';
                }
    }}
        kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)+1<105) && (initialY-1<8) && (initialY-1)>=0){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-1)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-1)).children[0].className.includes(`${c1}`)){
            console.log('piece in right diag');
        }else{
            AttackedLane((initialX.charCodeAt(0)+1),(initialY-1),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for right diag");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-1)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY-1)).style.backgroundColor='red';
                }
    }}
        kingUnderAttack=false;
}
    if(initialY+1<8){
        if(document.getElementById((initialX)+(initialY+1)).children[0] && document.getElementById((initialX)+(initialY+1)).children[0].className.includes(`${c1}`)){
            console.log('piece in back');
        }else{
            AttackedLane((initialX.charCodeAt(0)),(initialY+1),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for back");
                possMoves.push(document.getElementById((initialX)+(initialY+1)));
                if(!onlyChecking){
                    document.getElementById((initialX)+(initialY+1)).style.backgroundColor='red';
                }
    }}
    kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)-1>96) && (initialY+1<8)){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1)).children[0].className.includes(`${c1}`)){
            console.log('piece in back left');
        }else{
            AttackedLane((initialX.charCodeAt(0)-1),(initialY+1),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for back left");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY+1)).style.backgroundColor='red';
                }
    }}
    kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)+1<105) && (initialY+1<8)){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY+1)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY+1)).children[0].className.includes(`${c1}`)){
            console.log('piece in back right');
        }else{
            AttackedLane((initialX.charCodeAt(0)+1),(initialY+1),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for back right");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY+1)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY+1)).style.backgroundColor='red';
                }
    }}
    kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)+1<105)){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY)).children[0].className.includes(`${c1}`)){
            console.log('piece in right');
        }else{
            AttackedLane((initialX.charCodeAt(0)+1),(initialY),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for right");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)+1)+(initialY)).style.backgroundColor='red';
                }
    }}
    kingUnderAttack=false;
}
    if((initialX.charCodeAt(0)-1>96)){
        if(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY)).children[0] && document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY)).children[0].className.includes(`${c1}`)){
            console.log('piece in left');
        }else{
            AttackedLane((initialX.charCodeAt(0)-1),(initialY),c1,c2);
            if(!kingUnderAttack){
                console.log("pushing poss for left");
                possMoves.push(document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY)));
                if(!onlyChecking){
                    document.getElementById(String.fromCharCode(initialX.charCodeAt(0)-1)+(initialY)).style.backgroundColor='red';
                }
    }}
    kingUnderAttack=false;
}
}

function AttackedLane(x,y,c1,c2){
    console.log(attackLane.length,"function check: ",x,y,"onlycheck: ",onlyChecking,c1,c2);
    pinnedPieces.length=0;
    pinningLane.length=0;
    pinningLanes.length=0;
    underAttack.length=0;
    if(x>96 && x<105 && y>=0 && y<8){   
        if(!checkingCheck){
            for(i=x-1;i<x+2;i++){
                if(i>96 && i<105 && y-1>=0 && y<8){
                    if(document.getElementById(String.fromCharCode(i)+(y-1)).children[0] && document.getElementById(String.fromCharCode(i)+(y-1)).children[0].className == `king-${c2}`){        
                        kingUnderAttack=true;
                    }
                }
            }
            for(i=x-1;i<x+2;i++){
                if(i>96 && i<105 && y>=0 && y+1<8){
                    if(document.getElementById(String.fromCharCode(i)+(y+1)).children[0] && document.getElementById(String.fromCharCode(i)+(y+1)).children[0].className == `king-${c2}`){        
                        kingUnderAttack=true;
                    }
                }
            }
            for(i=x-1;i<x+2;i++){
                if(i>96 && i<105 && y>=0 && y<8){
                    if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && document.getElementById(String.fromCharCode(i)+(y)).children[0].className == `king-${c2}`){
                        kingUnderAttack=true;
                    }
                }
            }
        }
    for(i=y-1;i>=0;i--){
        attackLane.push(document.getElementById(String.fromCharCode(x)+(i)));
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`king-${c1}`)){
            if(onlyChecking){
                pinnedPieceCount++;
                pinnedPiece.push(document.getElementById(String.fromCharCode(x)+(i)).children[0]);
                if(pinnedPieceCount>1){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
            }}else{break;}
        }
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`knight-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`bishop-${c2}`))){
            if(onlyChecking){
                pinnedPiece.length=0;
                pinnedPieceCount=0;
                break;
            }else{break;}
    }
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`rook-${c2}`))){
            if(onlyChecking && pinnedPieceCount==1){
                pin=true;
                pinnedPieces.push(pinnedPiece[0]);
                break;
            }
            kingUnderAttack=true;
            attackingPiece=true;
            break;
        }
    }
    afterLaneFunctions();
    for(i=y+1;i<8;i++){
        attackLane.push(document.getElementById(String.fromCharCode(x)+(i)));
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`king-${c1}`)){
            if(onlyChecking){
                pinnedPieceCount++;
                pinnedPiece.push(document.getElementById(String.fromCharCode(x)+(i)).children[0]);
                if(pinnedPieceCount>1){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
                }}else{break;}
        }
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`knight-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`bishop-${c2}`))){
            if(onlyChecking){
                pinnedPiece.length=0;
                pinnedPieceCount=0;
                break;
            }else{break;}
        }
        if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`rook-${c2}`))){
            if(onlyChecking && pinnedPieceCount==1){
                pin=true;
                pinnedPieces.push(pinnedPiece[0]);
                break;
            }
            console.log("attack true kar rahe");
            kingUnderAttack=true;
            attackingPiece=true;
            break;
        }
    }
    afterLaneFunctions();
    for(i=x-1;i>96;i--){
        attackLane.push(document.getElementById(String.fromCharCode(i)+(y)));
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`king-${c1}`)){
            if(onlyChecking){
                pinnedPieceCount++;
                pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(y)).children[0]);
                if(pinnedPieceCount>1){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
            }}else{break;}
        }
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`knight-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`bishop-${c2}`))){
            if(onlyChecking){
                pinnedPiece.length=0;
                pinnedPieceCount=0;
                break;
            }else{break;}
        }
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`rook-${c2}`))){
            if(onlyChecking && pinnedPieceCount==1){
                pin=true;
                pinnedPieces.push(pinnedPiece[0]);
                break;
            }
            kingUnderAttack=true;
            attackingPiece=true;
            break;
        }
    }
    afterLaneFunctions();
    for(i=x+1;i<105;i++){
        attackLane.push(document.getElementById(String.fromCharCode(i)+(y)));
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`king-${c1}`)){
            if(onlyChecking){
                pinnedPieceCount++;
                pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(y)).children[0]);
                if(pinnedPieceCount>1){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
            }}else{break;}
        }
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`knight-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`bishop-${c2}`))){
            if(onlyChecking){
                pinnedPiece.length=0;
                pinnedPieceCount=0;
                break;
            }else{break;}
        }
        if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`rook-${c2}`))){
            if(onlyChecking && pinnedPieceCount==1){
                pin=true;
                pinnedPieces.push(pinnedPiece[0]);
                break;
            }
            kingUnderAttack=true;
            attackingPiece=true;
            break;
        }
    }
    afterLaneFunctions();
    for(i=x+1,j=y-1;i<105;i++,j--){
        if(j>=0){
            attackLane.push(document.getElementById(String.fromCharCode(i)+(j)));
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`)){
                if(onlyChecking){
                    pinnedPieceCount++;
                    pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(j)).children[0]);
                    if(pinnedPieceCount>1){
                        pinnedPiece.length=0;
                        pinnedPieceCount=0;
                        break;
                    }}else{
                    break;
                }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c2}`))){
                if(onlyChecking){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
                }else{
                    break;
                }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c2}`))){
                if(onlyChecking && pinnedPieceCount==1){
                    pin=true;
                    pinnedPieces.push(pinnedPiece[0]);
                    break;
                }
                kingUnderAttack=true;
                attackingPiece=true;
                break;
            }
        }
    }
    afterLaneFunctions();
    for(i=x-1,j=y-1;i>96;i--,j--){
        if(j>=0){
            attackLane.push(document.getElementById(String.fromCharCode(i)+(j)));
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`)){    
                if(onlyChecking){
                pinnedPieceCount++;
                pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(j)).children[0]);
                if(pinnedPieceCount>1){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
                }}
                else{
                    break;
                }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c2}`))){ 
            if(onlyChecking){
                pinnedPiece.length=0;
                pinnedPieceCount=0;
                break;
            }else{
                break;
            }}
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c2}`))){
                if(onlyChecking && pinnedPieceCount==1){
                    pin=true;
                    pinnedPieces.push(pinnedPiece[0]);
                    break;
                }
                kingUnderAttack=true;
                attackingPiece=true;
                break;
            }
        }
    }
    afterLaneFunctions();
    for(i=x-1,j=y+1;i>96;i--,j++){
        if(j<8){
            attackLane.push(document.getElementById(String.fromCharCode(i)+(j)));
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`)){
                if(onlyChecking){
                    pinnedPieceCount++;
                    pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(j)).children[0]);
                    if(pinnedPieceCount>1){
                        pinnedPiece.length=0;
                        pinnedPieceCount=0;
                        break;
                    }}
                    else{
                        break;
                    }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c2}`))){
                if(onlyChecking){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
                }else{
                    break;
                }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c2}`))){
                if(onlyChecking && pinnedPieceCount==1){
                    pin=true;
                    pinnedPieces.push(pinnedPiece[0]);
                    break;
                }
                kingUnderAttack=true;
                attackingPiece=true;
                break;
            }
        }
    }
    afterLaneFunctions();
    for(i=x+1,j=y+1;i<105;i++,j++){
        if(j<8){
            attackLane.push(document.getElementById(String.fromCharCode(i)+(j)));
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c1}`) && !document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`)){
                if(onlyChecking){
                    pinnedPieceCount++;
                    pinnedPiece.push(document.getElementById(String.fromCharCode(i)+(j)).children[0]);
                    if(pinnedPieceCount>1){
                        pinnedPiece.length=0;
                        pinnedPieceCount=0;
                        break;
                    }}
                    else{
                        break;
                    }
            }
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c2}`))){
                if(onlyChecking){
                    pinnedPiece.length=0;
                    pinnedPieceCount=0;
                    break;
                }else{
                    break;
                }
            } 
            if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c2}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c2}`))){
                if(onlyChecking && pinnedPieceCount==1){
                    pin=true;
                    pinnedPieces.push(pinnedPiece[0]);
                    break;
                }
                kingUnderAttack=true;
                attackingPiece=true;
                break;
            }
        }
    }
    afterLaneFunctions();
    if((x-1)>96 && (x+1)<105 && (y-1)>=0){
        if(document.getElementById(String.fromCharCode(x-1)+(y-1)).children[0] && document.getElementById(String.fromCharCode(x-1)+(y-1)).children[0].className.includes(`pawn-${c2}`)){
            kingUnderAttack=true;
            attackLane.push(document.getElementById(String.fromCharCode(x-1)+(y-1)));
            underAttack.push(attackLane.slice());
        }else if(document.getElementById(String.fromCharCode(x+1)+(y-1)).children[0] && document.getElementById(String.fromCharCode(x+1)+(y-1)).children[0].className.includes(`pawn-${c2}`)){
            kingUnderAttack=true;
            attackLane.push(document.getElementById(String.fromCharCode(x+1)+(y-1)));
            underAttack.push(attackLane.slice());
        }
    }
    attackLane.length=0;
    for(i=x-1;i<x+2;i=i+2){
        if(y-2>=0 && y-2<8 && i<105 && i>96){
            if(document.getElementById(String.fromCharCode(i)+(y-2)).children[0] && document.getElementById(String.fromCharCode(i)+(y-2)).children[0].className.includes(`knight-${c2}`)){
                kingUnderAttack=true;
                attackLane.push(document.getElementById(String.fromCharCode(i)+(y-2)));
                underAttack.push(attackLane.slice());
                break;
            }
        }
    }
    attackLane.length=0;
    for(i=x-1;i<x+2;i=i+2){
        if(y+2<8 && i<105 && i>96 && y+2>=0){
            if(document.getElementById(String.fromCharCode(i)+(y+2)).children[0] && document.getElementById(String.fromCharCode(i)+(y+2)).children[0].className.includes(`knight-${c2}`)){
                kingUnderAttack=true;
                attackLane.push(document.getElementById(String.fromCharCode(i)+(y+2)));
                underAttack.push(attackLane.slice());
                break;
            }
        }
    }
    attackLane.length=0;
    for(i=y-1;i<y+2;i=i+2){
        if(x-2>96 && x-2<105 && i<8 && i>=0){
            if(document.getElementById(String.fromCharCode(x-2)+(i)).children[0] && document.getElementById(String.fromCharCode(x-2)+(i)).children[0].className.includes(`knight-${c2}`)){
                kingUnderAttack=true;
                attackLane.push(document.getElementById(String.fromCharCode(x-2)+(i)));
                underAttack.push(attackLane.slice());
                break;
            }
        }
    }
    attackLane.length=0
    for(i=y-1;i<y+2;i=i+2){
        if(x+2<105 && x+2>=0 && i<8 && i>=0){
            if(document.getElementById(String.fromCharCode(x+2)+(i)).children[0] && document.getElementById(String.fromCharCode(x+2)+(i)).children[0].className.includes(`knight-${c2}`)){
                kingUnderAttack=true;
                attackLane.push(document.getElementById(String.fromCharCode(x+2)+(i)));
                underAttack.push(attackLane.slice());
                break;
            }
        }
    }
    attackLane.length=0;
    console.log("checking function end",kingUnderAttack,"attackingPiece: ",attackingPiece);
}
}

function afterLaneFunctions(){
    if(onlyChecking && pin){
        pinningLanes.push(attackLane.slice());
        pin=false;
    }
    if(onlyChecking && !attackingPiece && pinnedPieceCount>0){
        pinnedPieceCount=0;
        pinnedPiece.length=0;
    }
    if(attackingPiece && checkingCheck){
        underAttack.push(attackLane.slice());
    }
    attackingPiece=false;
    attackLane.length=0;
}

function checkForPin(piece){
    for(i=0;i<pinnedPieces.length;i++){
        if(pinnedPieces[i]==piece){
           return true;
        }
    }
}   

function pinnedPieceMovement(targ){
    let targetInPinLane=false;
    let pinLane=false,pinLaneId;
    for(i=0;i<pinningLanes.length;i++){
        for(j=0;j<pinningLanes[i].length;j++){
            if(pinningLanes[i][j].children[0] && (pieceId == pinningLanes[i][j].children[0])){
                pinLane=true;
                pinLaneId=i;
            }
        }
    }
    if(pinLane){
        for(i=0;i<pinningLanes[pinLaneId].length;i++){
            if(pinningLanes[pinLaneId][i]==targ){
                targetInPinLane=true;
            }else if(pinningLanes[pinLaneId][i].children[0] && (pinningLanes[pinLaneId][i].children[0]==targ)){
                targetInPinLane=true;
            }
        }
    }
    if(targetInPinLane){
        return true;
    }else{
        return false;
    }
}

function checkSafetyPiece(key,value){
    for(i=0;i<safetyPieces.length;i=i+2){
        console.log("key==safetyPieces[i]: ",key==safetyPieces[i],"value==safetyPieces[i+1]: ",value==safetyPieces[i+1]);
        console.log("value",value,"safetyPieces[i+1]",safetyPieces[i+1]);
        if(key==safetyPieces[i] && value==safetyPieces[i+1]){
            return true;
        }else if(key==safetyPieces[i] && value.parentElement==safetyPieces[i+1]){
            return true;
        }
    }
}

function checkForPawnPromotion(c,h){
    if(c=="white"){
        if(initialPlace==1 && finalPlace==0){
            console.log("target.parent",targetElement.parentElement);
            if(h=="replace"){
                let targEl;
                targEl = targetElement.parentElement;
                targetElement.parentElement.replaceChild(pieceId, targetElement);
                targetElement=targEl;
                targetElement.innerHTML = '<img class="queen-white" src="./white/queen_white.png" alt="">'
                console.log("promotion karne aa rahe",targetElement);
            }else{
                targetElement.appendChild(pieceId);
                targetElement.innerHTML = '';
                targetElement.innerHTML = '<img class="queen-white" src="./white/queen_white.png" alt="">'
            }
            queenClicking();
            return true;
        }
        return false;   
    }
}

function clearAllColors(){
    for(let i=0;i<8;i++){
        for(let j=97;j<105;j++){
         document.getElementById(String.fromCharCode(j)+i).style.backgroundColor = '';
        }
    }
}

function afterMoveFunctions(piece){
    clearAllColors();
    check=false;
    whiteChance = false;
    if(!(piece=="pawn")){
        firstMovePawn=false; 
    }
    if(piece=="rook"){
        rookNotMoved=false;
    }
}

    




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

let queen = document.getElementsByClassName('queen-black');
for(i=0;i<queen.length;i++){
    queen[i].addEventListener('click',(e)=>{
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
        }
    }})
}

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
            }
        }})
}

document.addEventListener('click',(e)=>{
    console.log("document event listener has been added for black.");
    targetElement = e.target;

if(e.target.className != 'pawn-black' && e.target.id != 'queen-black' && e.target.className!="rook-black" && e.target.id!='king-black'  && e.target.className!="knight-black" && e.target.className!="bishop-black"){
    if(pieceClicked == true && pieceId.className == 'pawn-black'){
        console.log("pawn :",e.target);  
        initialPlace = parseInt(pieceId.parentElement.classList[3]);
        initialAscii = pieceId.parentElement.classList[2];
        if(targetElement.parentElement.className != "container"){
            finalPlace = parseInt(targetElement.parentElement.classList[3]);
            finalAscii = targetElement.parentElement.classList[2].charCodeAt(0);
        }else{
            finalPlace = parseInt(targetElement.classList[3]);
            finalAscii = targetElement.classList[2];
        }
        if(initialPlace==1 && finalPlace ==3 && (initialAscii==finalAscii)){    
            if(document.getElementsByClassName(initialAscii)[2].hasChildNodes('img')){
                console.log("piece in between pawn movement");
            }else{
                console.log("first Move of pawn");
                targetElement.appendChild(pieceId);
                clearAllColors(); 
                whiteChance = true;
                firstMovePawn = true;
                enPassantPawn = pieceId;
            }
        }else if((initialPlace <finalPlace && finalPlace-initialPlace<=1)&&(initialAscii==finalAscii)){
                targetElement.appendChild(pieceId);
                clearAllColors();
                console.log("in here");
                whiteChance = true;
                firstMovePawn = false;
        }else if((finalPlace-initialPlace)==1 && Math.abs(initialAscii.charCodeAt(0)-finalAscii)==1){
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
            document.getElementById(initialAscii+(initialPlace+i)).style.backgroundColor='red'
        }}else{
            console.log("poss: ",document.getElementById(initialAscii+(initialPlace+1)).childElementCount)
            if(document.getElementById(initialAscii+(initialPlace+1)).childElementCount == 0){
                document.getElementById(initialAscii+(initialPlace+1)).style.backgroundColor='red'
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
    if(!blackCastle && pieceId.parentElement.id == 'e0' && blackRookNotMoved && blackKingNotMoved){
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

if(whiteChance){
    let x,y;
        x = document.getElementById('king-white').parentElement.classList[2];
        y = parseInt(document.getElementById('king-white').parentElement.classList[3]);
        console.log("raaja aala",kingUnderAttack);
        onlyChecking=true;
        possibleKingMoves(x,y,"white","black");
        checkingCheck=true;
        AttackedLane(x.charCodeAt(0),y,"white","black");
        onlyChecking=false;
        checkingCheck=false;
        if(kingUnderAttack){
            check=true;
            document.getElementById('king-white').parentElement.style.backgroundColor='yellow';
        }
        safetyPieces.length=0;
        if(check){
            if(underAttack.length>1 && possMoves.length==0){
                document.getElementById('d4').innerHTML = "<p>END</p>";
            }else{
            for(k=0;k<underAttack.length;k++){
                for(l=0;l<underAttack[k].length;l++){
                    CheckingSafe(underAttack[k][l].classList[2].charCodeAt(0),parseInt(underAttack[k][l].classList[3]),"white","black");
                }
            }if(safetyPieces.length==0 && possMoves.length==0){
                document.getElementById('d4').innerHTML = "<p>END</p>"
            }else{
                kingCanBeSaved=false;
            }}
        }
    }else{
        let x,y;
        x = document.getElementById('king-black').parentElement.classList[2];
        y = parseInt(document.getElementById('king-black').parentElement.classList[3]);
        console.log("raaja aala",kingUnderAttack);
        onlyChecking=true;
        possibleKingMoves(x,y,"black","white");
        checkingCheck=true;
        AttackedLane(x.charCodeAt(0),y,"black","white");
        onlyChecking=false;
        checkingCheck=false;
        if(kingUnderAttack){
            check=true;
            document.getElementById('king-black').parentElement.style.backgroundColor='yellow';
        }
        safetyPieces.length=0;
        if(check){
            if(underAttack.length>1 && possMoves.length==0){
                document.getElementById('d4').innerHTML = "<p>END</p>";
            }else{
            for(k=0;k<underAttack.length;k++){
                for(l=0;l<underAttack[k].length;l++){
                    CheckingSafe(underAttack[k][l].classList[2].charCodeAt(0),parseInt(underAttack[k][l].classList[3]),"black","white");
                }
            }if(safetyPieces.length==0 && possMoves.length==0){
                document.getElementById('d4').innerHTML = "<p>END</p>"
            }else{
                kingCanBeSaved=false;
            }}
        }
    }

    function CheckingSafe(x,y,c1,c2){
        console.log("safety check: ",x,y,c1,c2);
        if(x>96 && x<105 && y>=0 && y<8){
        for(i=y-1;i>=0;i--){
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`${c2}`)){
                break;
            }
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`knight-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`bishop-${c1}`))){
                break;
            }
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`rook-${c1}`))){
                kingCanBeSaved=true;
                safetyPieces.push(String.fromCharCode(x)+(i)); 
                safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                break;
            }
        }
        for(i=y+1;i<8;i++){
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`${c2}`)){
                break;
            }
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`knight-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`bishop-${c1}`))){
                break;
            }
            if(document.getElementById(String.fromCharCode(x)+(i)).children[0] && (document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(x)+(i)).children[0].className.includes(`rook-${c1}`))){
                kingCanBeSaved=true;
                safetyPieces.push(String.fromCharCode(x)+(i)); 
                safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                break;
            }
        }
        for(i=x-1;i>96;i--){
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`${c2}`)){
                break;
            }
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`knight-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`bishop-${c1}`))){
                break;
            }
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`rook-${c1}`))){
                kingCanBeSaved=true;
                safetyPieces.push(String.fromCharCode(i)+(y));
                safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                break;
            }
        }  
        for(i=x+1;i<105;i++){
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`${c2}`)){
                break;
            }
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`knight-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`bishop-${c1}`))){
                break;
            }
            if(document.getElementById(String.fromCharCode(i)+(y)).children[0] && (document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(y)).children[0].className.includes(`rook-${c1}`))){
                kingCanBeSaved=true;
                safetyPieces.push(String.fromCharCode(i)+(y));
                safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                break;
            }
        }
        
        for(i=x+1,j=y-1;i<105;i++,j--){
            if(j>=0){
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c2}`)){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c1}`))){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c1}`))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(j));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                    break;
                }
            }
        }
        for(i=x-1,j=y-1;i>96;i--,j--){
            if(j>=0){
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c2}`)){    
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c1}`))){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c1}`))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(j));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                    break;
                }
            }
        }
        for(i=x-1,j=y+1;i>96;i--,j++){
            if(j<8){
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c2}`)){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c1}`))){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c1}`))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(j));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                    break;
                }
            }
        }
        for(i=x+1,j=y+1;i<105;i++,j++){
            if(j<8){
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`${c2}`)){
                    break;
                }
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`king-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`pawn-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`knight-${c1}`))){
                    break;
                } 
                if(document.getElementById(String.fromCharCode(i)+(j)).children[0] && (document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`queen-${c1}`) || document.getElementById(String.fromCharCode(i)+(j)).children[0].className.includes(`bishop-${c1}`))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(j));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                    break;
                }
            }
        }
        if(whiteChance && (x)>96 && (x)<105 && (y+1)<8){
            if(document.getElementById(String.fromCharCode(x)+(y+1)).children[0] && document.getElementById(String.fromCharCode(x)+(y+1)).children[0].className.includes(`pawn-${c1}`)){
                if(!(document.getElementById(String.fromCharCode(x)+(y)).querySelector('img'))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x)+(y+1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if(document.getElementById(String.fromCharCode(x)+(y)).classList[3]=='4' && document.getElementById(String.fromCharCode(x)+(y+2)).children[0] && document.getElementById(String.fromCharCode(x)+(y+2)).children[0].className.includes(`pawn-${c1}`)){
                if(!(document.getElementById(String.fromCharCode(x)+(y)).querySelector('img') || document.getElementById(String.fromCharCode(x)+(y+1)).querySelector('img'))){  
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x)+(y+2));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if((x-1)>96 && document.getElementById(String.fromCharCode(x-1)+(y+1)).children[0] && document.getElementById(String.fromCharCode(x-1)+(y+1)).children[0].className.includes(`pawn-${c1}`)){
                if(document.getElementById(String.fromCharCode(x)+(y)).children[0] && document.getElementById(String.fromCharCode(x)+(y)).children[0].className.includes(`${c2}`)){
                    safetyPieces.push(String.fromCharCode(x-1)+(y+1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if((x+1)<105 && document.getElementById(String.fromCharCode(x+1)+(y+1)).children[0] && document.getElementById(String.fromCharCode(x+1)+(y+1)).children[0].className.includes(`pawn-${c1}`)){
                if(document.getElementById(String.fromCharCode(x)+(y)).children[0] && document.getElementById(String.fromCharCode(x)+(y)).children[0].className.includes(`${c2}`)){
                    safetyPieces.push(String.fromCharCode(x+1)+(y+1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }
        }else if(!whiteChance && (x)>96 && (x)<105 && (y-1)>=0){
            if(document.getElementById(String.fromCharCode(x)+(y-1)).children[0] && document.getElementById(String.fromCharCode(x)+(y-1)).children[0].className.includes(`pawn-${c1}`)){
                if(!(document.getElementById(String.fromCharCode(x)+(y)).querySelector('img'))){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x)+(y-1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if(document.getElementById(String.fromCharCode(x)+(y)).classList[3]=='3' && document.getElementById(String.fromCharCode(x)+(y-2)).children[0] && document.getElementById(String.fromCharCode(x)+(y-2)).children[0].className.includes(`pawn-${c1}`)){
                if(!(document.getElementById(String.fromCharCode(x)+(y)).querySelector('img') || document.getElementById(String.fromCharCode(x)+(y+1)).querySelector('img'))){  
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x)+(y-2));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if((x-1)>96 && document.getElementById(String.fromCharCode(x-1)+(y-1)).children[0] && document.getElementById(String.fromCharCode(x-1)+(y-1)).children[0].className.includes(`pawn-${c1}`)){
                if(document.getElementById(String.fromCharCode(x)+(y)).children[0] && document.getElementById(String.fromCharCode(x)+(y)).children[0].className.includes(`${c2}`)){
                    safetyPieces.push(String.fromCharCode(x-1)+(y-1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }if((x+1)<105 && document.getElementById(String.fromCharCode(x+1)+(y-1)).children[0] && document.getElementById(String.fromCharCode(x+1)+(y-1)).children[0].className.includes(`pawn-${c1}`)){
                if(document.getElementById(String.fromCharCode(x)+(y)).children[0] && document.getElementById(String.fromCharCode(x)+(y)).children[0].className.includes(`${c2}`)){
                    safetyPieces.push(String.fromCharCode(x+1)+(y-1));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }       
        }
        for(i=x-1;i<x+2;i=i+2){
            if(y-2>=0 && y-2<8 && i<105 && i>96){
                if(document.getElementById(String.fromCharCode(i)+(y-2)).children[0] && document.getElementById(String.fromCharCode(i)+(y-2)).children[0].className.includes(`knight-${c1}`)){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(y-2));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }
        }
        for(i=x-1;i<x+2;i=i+2){
            if(y+2<8 && i<105 && i>96 && y+2>=0){
                if(document.getElementById(String.fromCharCode(i)+(y+2)).children[0] && document.getElementById(String.fromCharCode(i)+(y+2)).children[0].className.includes(`knight-${c1}`)){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(i)+(y+2));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }
        }
        for(i=y-1;i<y+2;i=i+2){
            if(x-2>96 && x-2<105 && i<8 && i>=0){
                if(document.getElementById(String.fromCharCode(x-2)+(i)).children[0] && document.getElementById(String.fromCharCode(x-2)+(i)).children[0].className.includes(`knight-${c1}`)){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x-2)+(i));
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }
        }
        for(i=y-1;i<y+2;i=i+2){
            if(x+2<105 && x+2>=0 && i<8 && i>=0){
                if(document.getElementById(String.fromCharCode(x+2)+(i)).children[0] && document.getElementById(String.fromCharCode(x+2)+(i)).children[0].className.includes(`knight-${c1}`)){
                    kingCanBeSaved=true;
                    safetyPieces.push(String.fromCharCode(x+2)+(i)); 
                    safetyPieces.push(document.getElementById(String.fromCharCode(x)+(y)));
                }
            }
        }
        console.log("checking king safety",kingCanBeSaved,safetyPiece); 
    }
    }

}
)
