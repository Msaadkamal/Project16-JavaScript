const textarea=document.getElementById('textarea');
 const totelcounter=document.getElementById('totel-counter');
 const remaningcounter=document.getElementById('remaning-counter')
textarea.addEventListener('keyup', ()=>{updateCounter()})
   function updateCounter() {
    totelcounter.innerText= textarea.value.length;
    remaningcounter.innerText=textarea.getAttribute('maxlength')- textarea.value.length; 
    
   }
   updateCounter();