import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const uifeature = document.querySelector('.ui-feature');
    const uiImg = document.querySelector('.ui-img');
    const card1 = document.querySelector('.card1');
    const card1head = document.querySelector('.card1-head');
    const card1des = document.querySelector('.card1-description');
    const card1img = document.querySelector('.card1img');
    const card2 = document.querySelector('.card2');
    const card2head = document.querySelector('.card2-head');
    const card2des = document.querySelector('.card2-description');
    const card2img = document.querySelector('.card2img');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    // Observer for card1
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('card1')) {
            card1head?.classList.add('card-des-animation');
            card1des?.classList.add('card-des-animation');
            card1img?.classList.add('card-img-animation');
          }
        } else {
          card1img?.classList.remove('card-img-animation');
          card1head?.classList.remove('card-des-animation');
          card1des?.classList.remove('card-des-animation');
        }
      });
    }, options);

    // Observer for UI feature
    const uiObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('ui-feature')) {
            uiImg?.classList.add('ui-image-slideUp');
            entry.target.classList.add('active-animation');
          }
        } else {
          uiImg?.classList.remove('ui-image-slideUp');
          entry.target.classList.remove('active-animation');
        }
      });
    }, options);

    // Observer for card2
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('card2')) {
            card2head?.classList.add('card2-des-animation');
            card2des?.classList.add('card2-des-animation');
            card2img?.classList.add('card2-img-animation');
          }
        } else {
          card2head?.classList.remove('card2-des-animation');
          card2des?.classList.remove('card2-des-animation');
          card2img?.classList.remove('card2-img-animation');
        }
      });
    }, options);

    // Start observing
    if (uifeature) uiObserver.observe(uifeature);
    if (card1) observer1.observe(card1);
    if (card2) observer2.observe(card2);

    // Cleanup
    return () => {
      if (uifeature) uiObserver.unobserve(uifeature);
      if (card1) observer1.unobserve(card1);
      if (card2) observer2.unobserve(card2);
    };
  }, []);
};

export default useScrollAnimation;
