function calc(){
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var c = parseFloat(document.getElementById("c").value);
var delta = b * b -4 * a * c;

   if(delta > 0)
   {
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-b + Math.sqrt(delta)) / (2 * a);

        result.innerHTML="▲ = "+delta+"</br>x1 = "+x1+"</br>x2 = "+x2;
   }
   else if(delta === 0)
   {    
        x0 = (-b/(2*a))

        result.innerHTML="▲ = "+delta+"</br>x0 = "+x1;
   }
   else
   {
        result.innerHTML="▲ = "+delta;
        
   }

}