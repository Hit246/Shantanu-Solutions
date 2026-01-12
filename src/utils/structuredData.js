// Organization structured data for SEO
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shantanu Solutions",
  "url": "https://shantanu-solutions.vercel.app",
  "logo": "https://shantanu-solutions.vercel.app/logo.png",
  "description": "Professional website development services in India. We build fast, affordable, and SEO-optimized websites for businesses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shrinagar Society",
    "addressLocality": "Idar",
    "addressRegion": "Gujarat",
    "postalCode": "383430",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9898760235",
    "contactType": "Customer Service",
    "email": "hitarth0236@gmail.com",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/chauhanhitarth6",
  ],
  "priceRange": "₹15,000 - ₹2,50,000"
};

// Service structured data
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Development",
  "provider": {
    "@type": "Organization",
    "name": "Shantanu Solutions"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Static Website Development",
          "description": "Professional static websites with modern design and SEO optimization"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "15000-50000",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dynamic Website Development",
          "description": "Full-featured dynamic websites with custom functionality and CMS"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "50000-250000",
          "priceCurrency": "INR"
        }
      }
    ]
  }
};
