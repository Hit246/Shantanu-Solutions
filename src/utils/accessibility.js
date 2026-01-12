/**
 * Accessibility Utilities
 * Helpers for improving website accessibility (WCAG 2.1 AA compliance)
 */

// Add skip to main content link
export const addSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Check color contrast ratio
export const getContrastRatio = (color1, color2) => {
  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgb.map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Validate ARIA labels
export const validateAriaLabels = () => {
  const issues = [];
  
  // Check buttons without labels
  const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
  buttons.forEach(button => {
    if (!button.textContent.trim()) {
      issues.push({
        element: button,
        issue: 'Button without accessible label',
        severity: 'error'
      });
    }
  });
  
  // Check images without alt text
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach(img => {
    issues.push({
      element: img,
      issue: 'Image without alt text',
      severity: 'error'
    });
  });
  
  // Check form inputs without labels
  const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputs.forEach(input => {
    const id = input.getAttribute('id');
    if (!id || !document.querySelector(`label[for="${id}"]`)) {
      issues.push({
        element: input,
        issue: 'Form input without label',
        severity: 'error'
      });
    }
  });
  
  return issues;
};

// Add ARIA live region for dynamic content
export const createLiveRegion = (type = 'polite') => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', type);
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.style.cssText = `
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  document.body.appendChild(liveRegion);
  return liveRegion;
};

// Announce message to screen readers
export const announceToScreenReader = (message, priority = 'polite') => {
  let liveRegion = document.querySelector(`[aria-live="${priority}"]`);
  if (!liveRegion) {
    liveRegion = createLiveRegion(priority);
  }
  liveRegion.textContent = message;
  
  // Clear after announcement
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 1000);
};

// Trap focus within modal
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Add keyboard navigation to custom components
export const makeKeyboardAccessible = (element, onActivate) => {
  element.setAttribute('tabindex', '0');
  element.setAttribute('role', 'button');
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate(e);
    }
  });
};

// Check heading hierarchy
export const validateHeadingHierarchy = () => {
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const issues = [];
  let previousLevel = 0;
  
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName[1]);
    
    if (index === 0 && level !== 1) {
      issues.push({
        element: heading,
        issue: 'Page should start with h1',
        severity: 'warning'
      });
    }
    
    if (level - previousLevel > 1) {
      issues.push({
        element: heading,
        issue: `Heading level skipped from h${previousLevel} to h${level}`,
        severity: 'warning'
      });
    }
    
    previousLevel = level;
  });
  
  return issues;
};

// Add focus visible styles
export const addFocusStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    *:focus-visible {
      outline: 3px solid #3b82f6;
      outline-offset: 2px;
    }
    
    *:focus:not(:focus-visible) {
      outline: none;
    }
  `;
  document.head.appendChild(style);
};

// Detect reduced motion preference
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Disable animations for users who prefer reduced motion
export const respectMotionPreference = () => {
  if (prefersReducedMotion()) {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
};

// Add language attribute
export const setLanguage = (lang = 'en') => {
  document.documentElement.setAttribute('lang', lang);
};

// Ensure proper document structure
export const validateDocumentStructure = () => {
  const issues = [];
  
  // Check for main landmark
  if (!document.querySelector('main')) {
    issues.push({
      issue: 'Missing main landmark',
      severity: 'error'
    });
  }
  
  // Check for navigation landmark
  if (!document.querySelector('nav')) {
    issues.push({
      issue: 'Missing navigation landmark',
      severity: 'warning'
    });
  }
  
  // Check for lang attribute
  if (!document.documentElement.getAttribute('lang')) {
    issues.push({
      issue: 'Missing lang attribute on html element',
      severity: 'error'
    });
  }
  
  return issues;
};

// Initialize all accessibility features
export const initAccessibility = () => {
  addSkipLink();
  addFocusStyles();
  respectMotionPreference();
  setLanguage('en');
  
  // Log validation issues in development
  if (import.meta.env.DEV) {
    const ariaIssues = validateAriaLabels();
    const headingIssues = validateHeadingHierarchy();
    const structureIssues = validateDocumentStructure();
    
    if (ariaIssues.length > 0) {
      console.warn('Accessibility issues found:', {
        aria: ariaIssues,
        headings: headingIssues,
        structure: structureIssues
      });
    }
  }
};

export default {
  addSkipLink,
  getContrastRatio,
  validateAriaLabels,
  createLiveRegion,
  announceToScreenReader,
  trapFocus,
  makeKeyboardAccessible,
  validateHeadingHierarchy,
  addFocusStyles,
  prefersReducedMotion,
  respectMotionPreference,
  setLanguage,
  validateDocumentStructure,
  initAccessibility,
};
