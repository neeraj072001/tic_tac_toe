function func(){
    let a = document.getElementById('1').value;
    let b = document.getElementById('2').value;
    let c = document.getElementById('3').value;
    let d = document.getElementById('4').value;
    let e = document.getElementById('5').value;
    let f = document.getElementById('6').value;
    let g = document.getElementById('7').value;
    let h = document.getElementById('8').value;
    let i = document.getElementById('9').value;


   if((a=='X' && b=='X' && c=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
    }
   else if((d=='X' && e=='X' && f=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((g=='X' && h=='X' && i=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
         }
   else if((a=='X' && d=='X' && g=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((b=='X' && e=='X' && h=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('9').disabled =true;
      }      
   else if((c=='X' && f=='X' && i=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      }
   else if((a=='X' && e=='X' && i=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      }
   else if((c=='X' && e=='X' && g=='X')){
      document.getElementById('win').innerHTML = 'X has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((a=='O' && b=='O' && c=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((d=='O' && e=='O' && f=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((g=='O' && h=='O' && i=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
      }
   else if((a=='O' && d=='O' && g=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((b=='O' && e=='O' && h=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((c=='O' && f=='O' && i=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('5').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      }
   else if((a=='O' && e=='O' && h=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('2').disabled =true;
      document.getElementById('3').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('7').disabled =true;
      document.getElementById('8').disabled =true;
      }
   else if((c=='O' && e=='O' && g=='O')){
      document.getElementById('win').innerHTML = 'O has won the game';
      document.getElementById('1').disabled =true;
      document.getElementById('2').disabled =true;
      document.getElementById('4').disabled =true;
      document.getElementById('6').disabled =true;
      document.getElementById('8').disabled =true;
      document.getElementById('9').disabled =true;
      }
   else if((a=='X' || a=='O') && (b=='X' || b=='O') && (c=='X' || c=='O') && (d=='X' || d=='O') && (e=='X' || e=='O') && (f=='X' || f=='O') && (g=='X' || g=='O') && (h=='X' || h=='O') && (i=='X' || i=='O')){
      document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp;game has been drawn'
   }
   else{
        if(flag==0)
         document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X turn';
         else
         document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;O turn';
    }
}
 let flag = 0;
 function fun1(){
    if(flag==0){
    document.getElementById('1').value="X";
    document.getElementById('1').disabled = true;
    flag=1;
    }
    else{
    document.getElementById('1').value="O";
    document.getElementById('1').disabled = true;
    flag=0;
    }
 }
 function fun2(){
    if(flag==0){
    document.getElementById('2').value='X';
    document.getElementById('2').disabled = true;
    flag=1;
    }
    else{
    document.getElementById('2').value='O';
    document.getElementById('2').disabled = true;
    flag=0;
    }
 }
 function fun3(){
    if(flag==0){
    document.getElementById('3').value='X';
    document.getElementById('3').disabled = true;
    flag=1;
    }
    else{
    document.getElementById('3').value='O';
    document.getElementById('3').disabled = true;
    flag=0;
    }
 }
 function fun4(){
   if(flag==0){
   document.getElementById('4').value='X';
   document.getElementById('4').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('4').value='O';
   document.getElementById('4').disabled = true;
   flag=0;
   }
}
function fun5(){
   if(flag==0){
   document.getElementById('5').value='X';
   document.getElementById('5').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('5').value='O';
   document.getElementById('5').disabled = true;
   flag=0;
   }
}
function fun6(){
   if(flag==0){
   document.getElementById('6').value='X';
   document.getElementById('6').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('6').value='O';
   document.getElementById('6').disabled = true;
   flag=0;
   }
}
function fun7(){
   if(flag==0){
   document.getElementById('7').value='X';
   document.getElementById('7').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('7').value='O';
   document.getElementById('7').disabled = true;
   flag=0;
   }
}
function fun8(){
   if(flag==0){
   document.getElementById('8').value='X';
   document.getElementById('8').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('8').value='O';
   document.getElementById('8').disabled = true;
   flag=0;
   }
}
function fun9(){
   if(flag==0){
   document.getElementById('9').value='X';
   document.getElementById('9').disabled = true;
   flag=1;
   }
   else{
   document.getElementById('9').value='O';
   document.getElementById('9').disabled = true;
   flag=0;
   }
}
function fun(){
   document.getElementById('1').value = '';
   document.getElementById('2').value = '';
   document.getElementById('3').value = '';
   document.getElementById('4').value = '';
   document.getElementById('5').value = '';
   document.getElementById('6').value = '';
   document.getElementById('7').value = '';
   document.getElementById('8').value = '';
   document.getElementById('9').value = '';
   document.getElementById('1').disabled=false;
   document.getElementById('2').disabled=false;
   document.getElementById('3').disabled=false;
   document.getElementById('4').disabled=false;
   document.getElementById('5').disabled=false;
   document.getElementById('6').disabled=false;
   document.getElementById('7').disabled=false;
   document.getElementById('8').disabled=false;
   document.getElementById('9').disabled=false;
   if(document.getElementById('win').innerText === 'X has won the game'){
      flag = 0;
     document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X turn';
   }
   else if(document.getElementById('win').innerText === 'O has won the game'){
      flag = 1;
     document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;O turn';
   }
   else
     document.getElementById('win').innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X turn';
}
