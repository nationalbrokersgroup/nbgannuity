import '@/styles.css';
import packageJson from '../package.json';

declare global {
  interface Window {
    __db_version__: string;
  }
}

window.onload = () => {
  const iframe = document.getElementById('db-iframe') as HTMLIFrameElement | null;

  if (iframe) {
    document.title = 'NBG | Annuity';
    iframe.src = 'https://www.jotform.com/form/260051149991155';
  }

  if (typeof window !== 'undefined') {
    window.__db_version__ = packageJson.version || '';
  }

  // Initialize carousel
  const carousel = document.getElementById('carousel');
  if (carousel) {
    const images = [
      'allianz.png',
      'athene.png',
      'fandg.png',
      'nationwide.png',
      'nlg.png',
      'northamerican.png',
      'sagicor.png',
      'silac.png',
    ];

    // Create carousel items - duplicated for seamless loop
    images.forEach((img) => {
      const imgElement = document.createElement('img');
      imgElement.src = `/carriers/${img}`;
      imgElement.alt = img.replace('.png', '');
      imgElement.className = 'carousel-image';
      carousel.appendChild(imgElement);
    });

    images.forEach((img) => {
      const imgElement = document.createElement('img');
      imgElement.src = `/carriers/${img}`;
      imgElement.alt = img.replace('.png', '');
      imgElement.className = 'carousel-image';
      carousel.appendChild(imgElement);
    });

    // Infinite scrolling with smooth looping
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    // Wait for images to load then get actual width
    setTimeout(() => {
      if (!carousel) return;
      const carouselWidth = carousel.scrollWidth / 2; // Half the width (one set of images)

      function animateCarousel() {
        if (!carousel) return;
        scrollPosition += scrollSpeed;

        // Seamless loop - reset when reaching the halfway point
        if (scrollPosition >= carouselWidth) {
          scrollPosition = scrollPosition - carouselWidth;
        }

        carousel.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(animateCarousel);
      }

      animateCarousel();
    }, 500);
  }
};
