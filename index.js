function opennav(){
    var a = document.getElementById('navbarNav');
    var b = document.getElementById('nav-items'); 

    if ( a .style.display === 'none' ){
        a.style.display ='block';
        a.style.transition='2s'
       b.style.flexDirection ='row';
    }else{
        a.style.display='none';
    }
    
}


function openleft(){
   var c = document.getElementById('left');
   var d = document.getElementById('text');
  
   
   if( c.style.width==='250px'){
       c.style.width='0px';
       d.style.display='none';
       document.body.style.backgroundColor='white';
      
   }else{
       c.style.width='250px'; 
       d.style.display=' inline-block'; 
       document.body.style.backgroundColor='#919191';
      
   }
}


const fruits = ["Project 1", "Project 2", "Project 3", "Project 4"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
function myFunction() {
  fruits.push("New project");
  document.getElementById("demo").innerHTML = fruits.join(" * ");
}
function myFunction2() {
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits.join(" * ");
  }
  function myFunction3() {
    fruits.unshift("New project");
    document.getElementById("demo").innerHTML = fruits.join(" * ");
  }
  function myFunction4() {
    fruits.shift();
    document.getElementById("demo").innerHTML = fruits.join(" * ");
  }
