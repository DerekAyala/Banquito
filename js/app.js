document.addEventListener('DOMContentLoaded', function(){
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
}


function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion a');

  enlaces.forEach( enlace => {
    console.log(enlace)
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      console.log(seccionScroll)
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth"});
    });
  });
}