var titles = ['','','','','','','','',''];
var turn = 'X' ;
var going = true;


   var xwinss =0;
   var owinss =0;


var combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

var gridz = document.getElementById('wrap');
var txt = document.getElementById('msg');


   var x_score = document.getElementById('xs');
   var o_score = document.getElementById('os');



function load(){
    gridz.innerHTML = '';
    for(var i=0; i<9; i++){
        var b = document.createElement('button');
        b.className = 'sq';
           b.setAttribute('data-i',i);
        b.onclick= tap ;
        gridz.appendChild(b);


    }
}


function tap(){
    var i = this.getAttribute('data-i');
    if(!going) return;
    if(titles[i]!='') return;



    titles[i] = turn;
    this.innerHTML = turn;
   

    if(turn=='X'){
        this.classList.add('xcolor');
    }else{
        this.classList.add('ocolor');
    }



    var w = checkifwon();
    if(w){
        txt.textContent = 'Player ' + w + ' wins!';
        going=false;



        document.getElementById('poptext').textContent = 'Player ' + w + ' wins!';
        document.getElementById('popsupp').style.display = 'block';

        if(w=='X'){
            xwinss++;
            x_score.textContent = 'X: ' + xwinss;
        } else{
            owins++;
            o_score.textContent = 'O: ' + owinss;
        }


        markWin();
        return;

    }




    var done = true;
    for(var j = 0; j<titles.length; j++){
        if(titles[j]=='') { done=false; break; }
    }


    if(done){
        txt.textContent = 'Draw!';
        going = false; 
        return;

    }


    turn = turn=='X' ? 'O' : 'X';
  txt.textContent = 'Player ' + turn + "'s turn";
}


function markWin(){
    for(var k = 0 ; k<combos.length; k++){
        var a=combos[k][0], b=combos[k][1], c=combos[k][2];
    if(titles[a]!='' && titles[a]==titles[b] && titles[b]==titles[c]){
        var btns = document.querySelectorAll('.sq');
            btns[a].classList.add('winner');
            btns[b].classList.add('winner');
              btns[c].classList.add('winner');
    }

    }
}




function checkifwon(){
    for (var k=0; k<combos.length; k++){
        var a = combos[k][0], b=combos[k][1], c=combos[k][2];
        if(titles[a]!='' && titles[a]==titles[b] && titles[b]==titles[c]){
          return titles[a];
        }
    }
    return null;

}


document.getElementById('rst').onclick = function(){
    titles = ['','','','','','','','',''];
    turn = 'X';
    going = true;
    txt.textContent = 'Player X goes first';



    document.getElementById('popsupp').style.display = 'none';
    load();
}


load();














