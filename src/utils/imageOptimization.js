/**
 * Image Optimization Utilities
 * Helpers for lazy loading, responsive images, and performance optimization
 */

// Lazy load images using Intersection Observer
export const lazyLoadImage = (imageElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          const srcset = img.getAttribute('data-srcset');
          
          if (src) img.src = src;
          if (srcset) img.srcset = srcset;
          
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    imageObserver.observe(imageElement);
  } else {
    // Fallback for browsers that don't support Intersection Observer
    const src = imageElement.getAttribute('data-src');
    if (src) imageElement.src = src;
  }
};

// Initialize lazy loading for all images with data-src attribute
export const initLazyLoading = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => lazyLoadImage(img));
};

// Generate srcset for responsive images
export const generateSrcSet = (baseUrl, sizes = [320, 640, 960, 1280, 1920]) => {
  return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
};

// Get optimal image size based on viewport
export const getOptimalImageSize = () => {
  const width = window.innerWidth;
  
  if (width <= 640) return 640;
  if (width <= 768) return 768;
  if (width <= 1024) return 1024;
  if (width <= 1280) return 1280;
  return 1920;
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (srcArray) => {
  try {
    const promises = srcArray.map(src => preloadImage(src));
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error preloading images:', error);
    return [];
  }
};

// Convert image to WebP if supported
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Get image format based on browser support
export const getImageFormat = (originalUrl) => {
  if (supportsWebP()) {
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return originalUrl;
};

// Placeholder image generator (for loading states)
export const generatePlaceholder = (width, height, color = '#e5e7eb') => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL();
};

// Calculate aspect ratio
export const calculateAspectRatio = (width, height) => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
};

// Image compression quality based on connection speed
export const getImageQuality = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'low'; // 50% quality
      case '3g':
        return 'medium'; // 75% quality
      case '4g':
      default:
        return 'high'; // 90% quality
    }
  }
  return 'high';
};

// Lazy load background images
export const lazyLoadBackgroundImage = (element) => {
  if ('IntersectionObserver' in window) {
    const bgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bgUrl = entry.target.getAttribute('data-bg');
          if (bgUrl) {
            entry.target.style.backgroundImage = `url(${bgUrl})`;
            entry.target.classList.add('bg-loaded');
          }
          observer.unobserve(entry.target);
        }
      });
    });

    bgObserver.observe(element);
  }
};

// Initialize lazy loading for background images
export const initLazyBackgrounds = () => {
  const lazyBackgrounds = document.querySelectorAll('[data-bg]');
  lazyBackgrounds.forEach(el => lazyLoadBackgroundImage(el));
};

// Image error handler with fallback
export const handleImageError = (event, fallbackSrc = '/placeholder.jpg') => {
  event.target.src = fallbackSrc;
  event.target.classList.add('image-error');
};

// Optimize image loading performance
export const optimizeImages = () => {
  // Add loading="lazy" to all images without it
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // Add decoding="async" for better performance
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
};

// React component helper for responsive images
export const ResponsiveImage = ({ src, alt, className = '', sizes = '100vw' }) => {
  const srcSet = generateSrcSet(src);
  
  return `
    <img
      src="${src}"
      srcset="${srcSet}"
      sizes="${sizes}"
      alt="${alt}"
      className="${className}"
      loading="lazy"
      decoding="async"
    />
  `;
};

export default {
  lazyLoadImage,
  initLazyLoading,
  generateSrcSet,
  getOptimalImageSize,
  preloadImage,
  preloadImages,
  supportsWebP,
  getImageFormat,
  generatePlaceholder,
  calculateAspectRatio,
  getImageQuality,
  lazyLoadBackgroundImage,
  initLazyBackgrounds,
  handleImageError,
  optimizeImages,
};
