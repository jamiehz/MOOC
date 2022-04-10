function closeMe(){
    // Find the element
         x=document.getElementById("demo");
     //Option 1: Change the style attribute directly
        //  x.style.display="none";

    //Option 2: Change the class
          x.className="closed";
  }

function openMe(){
    // Find the element
         x=document.getElementById("demo");
    //Option 1: Change the style attribute directly
        //   x.style.display="block";
    
    //Option 2: Change the class
          x.className="open";
  }

function Red(){
// Find the element
    x=document.getElementById("demo");
    // x.className="red";
    // x.style.background="red";
    x.style.color='red';
}

function Blue(){
// Find the element
    x=document.getElementById("demo");
    // x.className="blue";
    // x.style.background="blue";
    x.style.color='blue';
}