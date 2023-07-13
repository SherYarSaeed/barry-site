
// Read More function to make paragraphs shorter for mobile
function readMore(event) {
  let dots = document.querySelector(`.show-more-text[data-event="${event}"] #dots`);
    let moreText = document.querySelector(`.show-more-text[data-event="${event}"] #more`);
    let btnText = document.querySelector(`.show-more-text[data-event=${event}] #myBtn`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 


  // Function for hamburger menu
  const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Navigation
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');

    // Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
        }
      })

    // Animate Burger
      burger.classList.toggle('toggle');
    });
  }

  navSlide();
