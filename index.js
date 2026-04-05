var titles = ['','','','','','','','',''];
var turn = 'X' ;
var going = true;


   var xcount =0;
   var ocount =0;


var lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

var area = document.getElementById('box1');
var txt = document.getElementById('info');


   var xs = document.getElementById('xs');
   var os = document.getElementById('os');



function setup(){
    area.innerHTML = '';
    for(var i=0; i<9; i++){
        var b = document.createElement('button');
        b.className = 'cell';
           b.setAttribute('data-i',i);
        b.onclick= picked ;
        area.appendChild(b);


    }
}


function picked(){
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



    var w = won();
    if(w){
        txt.textContent = 'Player ' + w + ' wins!';
        going=false;

        if(w=='X'){
            xcount++;
            xs.textContent = 'X: ' + xcount;
        } else{
            ocount++;
            os.textContent = 'O: ' + ocount;
        }


        highlightWin();
        return;

    }




    var full = true;
    for(var j = 0; j<titles.length; j++){
        if(titles[j]=='') { full=false; break; }
    }


    if(full){
        txt.textContent = 'Draw!';
        going = false; 
        return;

    }


    turn = turn=='X' ? 'O' : 'X';
  txt.textContent = 'Player ' + turn + "'s turn";
}


function highlightWin(){
    for(var k = 0 ; k<lines.length; k++){
        var a=lines[k][0], b=lines[k][1], c=lines[k][2];
    if(titles[a]!='' && titles[a]==titles[b] && titles[b]==titles[c]){
        var btns = document.querySelectorAll('.cell');
            btns[a].classList.add('winner');
            btns[b].classList.add('winner');
              btns[c].classList.add('winner');
    }

    }
}




function won(){
    for (var k=0; k<lines.length; k++){
        var a = lines[k][0], b=lines[k][1], c=lines[k][2];
        if(titles[a]!='' && titles[a]==titles[b] && titles[b]==titles[c]){
          return titles[a];
        }
    }
    return null;

}


document.getElementById('again').onclick = function(){
    titles = ['','','','','','','','',''];
    turn = 'X';
    going = true;
    txt.textContent = 'Player X goes first';
    setup();
}


setup();














