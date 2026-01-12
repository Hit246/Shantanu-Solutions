import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Tawk.to configuration
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6964e8fc7e8d861989b30e5f/1jep2s789';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append to body
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Customize Tawk.to widget
    window.Tawk_API = Tawk_API;
    window.Tawk_LoadStart = Tawk_LoadStart;

    // Optional: Customize widget behavior
    script.onload = () => {
      if (window.Tawk_API) {
        // Set visitor name if available
        window.Tawk_API.onLoad = function() {
          // Customize widget position, color, etc.
          window.Tawk_API.setAttributes({
            name: 'Visitor',
            email: '',
          }, function(error) {
            if (error) {
              console.error('Tawk.to error:', error);
            }
          });
        };

        // Hide widget on specific pages if needed
        window.Tawk_API.onChatMaximized = function() {
          console.log('Chat maximized');
        };

        window.Tawk_API.onChatMinimized = function() {
          console.log('Chat minimized');
        };
      }
    };

    // Cleanup
    return () => {
      // Remove Tawk.to widget when component unmounts
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript) {
        tawkScript.remove();
      }
      
      // Remove Tawk.to iframe
      const tawkIframe = document.getElementById('tawkchat-container');
      if (tawkIframe) {
        tawkIframe.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkTo;

/*
 * SETUP INSTRUCTIONS:
 * 
 * 1. Sign up for free at https://www.tawk.to/
 * 2. Create a new property for your website
 * 3. Get your Property ID and Widget ID from the dashboard
 * 4. Replace 'YOUR_PROPERTY_ID' and 'YOUR_WIDGET_ID' in the script src above
 * 5. The widget will automatically appear on your website
 * 
 * Example:
 * src='https://embed.tawk.to/507f1f77bcf86cd799439011/default'
 *                          ^^^^^^^^^^^^^^^^^^^^  ^^^^^^^
 *                          Property ID            Widget ID
 * 
 * CUSTOMIZATION:
 * - You can customize the widget color, position, and behavior from the Tawk.to dashboard
 * - The widget automatically adapts to dark mode
 * - You can hide the widget on specific pages by adding conditions in the component
 */
