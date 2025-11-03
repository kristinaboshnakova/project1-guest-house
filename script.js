const slideNavigator = (name) => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
      slide.classList.remove('active');
      if (slide.classList.contains(name)) {
        slide.classList.add('active');
      }
    });
  };
  
  // switch background buttons
  window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        slideBtnList.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        slideNavigator(this.getAttribute('data-target'));
      });
    });
  
    // затваря мобилното меню при клик на линк
    document.querySelectorAll('.nav-mobile .nav-btn').forEach(a => {
      a.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');
        menu.classList.remove('active');
        navMobile.classList.remove('active');
      });
    });
  });
  
  // reset header to initial state
  const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
  };
  
  // toggle menu
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
  };
  

  const BREAKPOINT = 768;

function closeMobileMenuOnDesktop() {
  if (window.innerWidth > BREAKPOINT) {
    document.querySelector('.menu')?.classList.remove('active');
    document.querySelector('.nav-mobile')?.classList.remove('active');
  }
}
window.addEventListener('resize', closeMobileMenuOnDesktop);
window.addEventListener('orientationchange', closeMobileMenuOnDesktop);
