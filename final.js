
/* referred to: https://stackoverflow.com/questions/53178768/automatic-slideshow-with-arrows-and-buttons
for all the carousel code */
var slideIndex = 0;
var slides =document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showSlides();
var timer;

function showSlides(n) {
  var i;
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex>slides.length)
  {
      slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 2000);
}

// Next/previous controls
function plusSlides(n) 
{
    clearTimeout(timer);
    slideIndex += n;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    else if(slideIndex<1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    if(slideIndex>slides.length)
    {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 2000);
}

// Thumbnail image controls
function currentSlide(index) {
    clearTimeout(timer);
    if (index> slides.length) 
    {
        index = 1;
    }
    else if(index<1)
    {
        index = slides.length;
    }
    slideIndex = index;
    for (i = 0; i < slides.length; i++) 
    {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
    timer = setTimeout(showSlides, 2000);
  }