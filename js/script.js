//navbar
const nav = document.querySelector("nav");

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 100)
    {
        nav.classList.add("bg-primary","shadow")
        nav.style.transition="all .5s linear"
        
    }
    else{
        nav.classList.remove("bg-primary","shadow")
    }
    
})

//first slider
$(document).ready(function(){
    $('.autoSlider').owlCarousel({
       items : 1,
       center : true,
        loop : true,
        autoplay:true,
        autoplayTimeout:2000,
        
    })
   

})

//faq
const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//second slide
$(document).ready(function(){
    $('.appScreenShot').owlCarousel({
        items:3,
        loop:true,
        margin:5,
        center:true,
        nav:true,
        dots:false,
        navText:[`<i class="fas fa-long-arrow-alt-left"></i>`,`<i class="fas fa-long-arrow-alt-right"></i>`],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                center : true,
                dots:true,
                autoplay:true,
                autoplayTimeout:2000,
               
               
            },
            700:{
                items:2,
                
            },
            1000:{
                items:3,
                
                
            }
        }
    })
})

// magnific popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });

  //testimonials

  $(document).ready(function(){
    $('.testimonialsSlider').owlCarousel({
       items : 1,
       center : true,
        loop : true,
        autoplay:true,
        autoplayTimeout:2000,
        
    })
   

})





//contact us
const nameReg=/^[a-zA-Z\s$]{4,50}/;
const emailReg = /^([a-z0-9._]{4,60})([@]{1})([a-z]{3,25})([.]{1})([a-z.]{2,10})$/;
const subjectReg=/^[a-zA-Z\s.]{5,100}$/;
const messReg=/^[a-zA-Z\s0-9.\-_\,]{10,}$/;





myform.addEventListener('submit',function(e){
    e.preventDefault();
    if(nameReg.test(fname.value) || emailReg.test(email.value) || subjectReg.test(subject.value) || messReg.test(message.value))
    {
        if(nameReg.test(fname.value))
        {
            nameErr.innerText=""
        }
        else{
            nameErr.innerText="Please enter valid name"
        }
        if(emailReg.test(email.value)){
            emailErr.innerText=""
        }
        else{
            emailErr.innerText="Please enter valid email"
        }
        if(subjectReg.test(subject.value)){
            subErr.innerText=""
        }
        else{
            subErr.innerText="Please enter valid subject"
        }
        if(messReg.test(message.value))
        {
            msgErr.innerText=""
            
        }
        else{
            msgErr.innerText="Please enter valid message"
        }
        if(nameReg.test(fname.value) && emailReg.test(email.value) && subjectReg.test(subject.value) && messReg.test(message.value))
        {
            myform.submit();
            fname.value=""
            email.value=""
            subject.value=""
            message.value=""
        }
    }
    else{

        nameErr.innerText="Please enter valid name"
        emailErr.innerText="Please enter valid email"
        subErr.innerText="Please enter valid subject"
        msgErr.innerText="Please enter valid message"
    }

})

//our client
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:false,
    pauseOnHover:false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          center:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


//aos
AOS.init({
    duration: 1000
});

//back to up

window.addEventListener("scroll",function(){
    const scrollTop = document.querySelector(".toTop")
    scrollTop.classList.toggle("active",window.scrollY > 100)
})
