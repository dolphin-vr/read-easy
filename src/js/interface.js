function initGoTopButton(){
   console.log('initGoTopButton')
   const goTopBtn = document.getElementById("goTopBtn");
   goTopBtn.addEventListener('click', goTopPage)
   
   window.onscroll = () => {
      const viewPortHeight = window.innerHeight * 0.4;
      if (document.body.scrollTop > viewPortHeight || document.documentElement.scrollTop > viewPortHeight) {
         goTopBtn.style.display = "block";
      } else {
         goTopBtn.style.display = "none";
      }
   }
}

function goTopPage() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(goTopPage, 5);
   }
}

export {initGoTopButton}
