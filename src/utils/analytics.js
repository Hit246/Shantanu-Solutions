// Google Analytics 4 utility functions

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (typeof window === 'undefined' || !measurementId) return;

  // Load gtag.js script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

// Predefined event tracking functions

export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

export const trackFormSubmission = (formName, formType) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: formType,
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

export const trackPortfolioView = (projectName) => {
  trackEvent('portfolio_view', {
    project_name: projectName,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    contact_method: 'whatsapp',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    contact_method: 'email',
  });
};

export const trackNewsletterSubscription = () => {
  trackEvent('newsletter_subscription', {
    method: 'email',
    subscribed: true,
  });
};

export const trackFAQExpand = (question) => {
  trackEvent('faq_expand', {
    question_text: question.substring(0, 50),
  });
};

export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

export const trackPurchase = (transactionId, value, items) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'INR',
    items: items,
  });
};

export const trackLead = (leadType, leadValue) => {
  trackEvent('generate_lead', {
    lead_type: leadType,
    value: leadValue,
    currency: 'INR',
  });
};

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
};

export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', {
    time_seconds: seconds,
  });
};

export const trackOutboundLink = (url, linkText) => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

export const trackVideoPlay = (videoTitle) => {
  trackEvent('video_play', {
    video_title: videoTitle,
  });
};

export const trackVideoComplete = (videoTitle) => {
  trackEvent('video_complete', {
    video_title: videoTitle,
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

export const trackError = (errorMessage, errorLocation) => {
  trackEvent('error', {
    error_message: errorMessage,
    error_location: errorLocation,
  });
};

export const trackEngagement = (engagementType, engagementValue) => {
  trackEvent('user_engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
  });
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackServiceView,
  trackPortfolioView,
  trackWhatsAppClick,
  trackEmailClick,
  trackNewsletterSubscription,
  trackFAQExpand,
  trackSectionView,
  trackPurchase,
  trackLead,
  trackScrollDepth,
  trackTimeOnPage,
  trackOutboundLink,
  trackDownload,
  trackVideoPlay,
  trackVideoComplete,
  trackSearch,
  trackError,
  trackEngagement,
};
