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