
     
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

         
      function myFunction() {
          document.getElementById("demo").style.display="block";
                          document.getElementById("demo1").style.display="none";

            }    
            
 
    function Function() {
        document.getElementById("demo1").style.display="block";
                document.getElementById("demo").style.display="none";

          }
         
