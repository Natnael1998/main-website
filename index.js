let ct=false

function anime(event){
   const s = document.querySelectorAll(".bg")
   const x = event.clientX / 20
   const y = event.clientY / 20
   for (let i= 0; i<s.length;++i){
      const isOdd = i%2!==0
      const boolin = isOdd ? -1:1;
      s[i].style.transform = `translate(${x * boolin}px,${y * boolin}px)`
   }

}









function toggleContrast(){
   ct = !ct
   if(ct){
      document.body.classList += " dark-theme"

   }
   else{
      document.body.classList.remove("dark-theme")
   }
   
}
function contact(event){

    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList+= " modal__overlay--visible"
     emailjs 
     .sendForm(
        "service_9olgchs",
        "template_kw41hd9",
        event.target,
       "bJDaJKNJ9-O_NZN-P")
     .then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        
     }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email istemporarly unavialable.Please contact me directly on nati123solo@gmail.com"
        )
        
     })
     
     
     
     
     
}
isModalOpen = false
function toggleModal(){
  if (isModalOpen){
   isModalOpen = false
   return document.body.classList.remove("modal--open")
  }
  isModalOpen = true
   document.body.classList+=" modal--open"
}
//just for fun
window.alert("You got hacked bitch")