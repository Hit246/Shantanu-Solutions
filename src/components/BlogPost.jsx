import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react';

const BlogPost = ({ slug }) => {
  // Navigation function for hash-based routing
  const navigateToBlog = () => {
    window.location.hash = '#blog';
  };

  // Blog posts data with full content
  const blogPosts = {
    '10-essential-website-features-2026': {
      title: '10 Essential Features Every Business Website Needs in 2026',
      author: 'Shantanu Solutions',
      date: '2026-01-10',
      readTime: '8 min read',
      category: 'Web Development',
      excerpt: 'Discover the must-have features that will make your business website stand out and convert visitors into customers.',
      content: `
        <h2>Introduction</h2>
        <p>In today's digital landscape, having a website isn't enough. Your business website needs to be equipped with features that engage visitors, build trust, and drive conversions. Here are the 10 essential features every business website must have in 2026.</p>

        <h2>1. Mobile-Responsive Design</h2>
        <p>With over 60% of web traffic coming from mobile devices, a responsive design is non-negotiable. Your website must look and function perfectly on smartphones, tablets, and desktops.</p>
        <p><strong>Why it matters:</strong> Google prioritizes mobile-friendly websites in search rankings. Poor mobile experience leads to high bounce rates and lost customers.</p>

        <h2>2. Fast Loading Speed</h2>
        <p>Website speed directly impacts user experience and SEO. Aim for a loading time under 3 seconds.</p>
        <p><strong>Key optimizations:</strong></p>
        <ul>
          <li>Image compression and lazy loading</li>
          <li>Minified CSS and JavaScript</li>
          <li>Content Delivery Network (CDN)</li>
          <li>Browser caching</li>
        </ul>

        <h2>3. Clear Call-to-Actions (CTAs)</h2>
        <p>Every page should guide visitors toward a specific action - whether it's making a purchase, booking a consultation, or signing up for a newsletter.</p>
        <p><strong>Best practices:</strong> Use contrasting colors, action-oriented text, and strategic placement above the fold.</p>

        <h2>4. Live Chat Support</h2>
        <p>Instant communication builds trust and helps convert visitors into customers. Live chat can increase conversions by up to 45%.</p>
        <p><strong>Popular options:</strong> Tawk.to, Intercom, Drift, or Crisp.</p>

        <h2>5. SSL Certificate (HTTPS)</h2>
        <p>Security is paramount. An SSL certificate encrypts data between your website and visitors, protecting sensitive information.</p>
        <p><strong>Benefits:</strong> Builds trust, improves SEO rankings, and is required for e-commerce sites.</p>

        <h2>6. Contact Forms & Multiple Contact Methods</h2>
        <p>Make it easy for customers to reach you. Provide multiple contact options:</p>
        <ul>
          <li>Contact form with validation</li>
          <li>Phone number (click-to-call on mobile)</li>
          <li>Email address</li>
          <li>WhatsApp integration</li>
          <li>Social media links</li>
        </ul>

        <h2>7. Search Engine Optimization (SEO)</h2>
        <p>SEO ensures your website appears in search results when potential customers look for your services.</p>
        <p><strong>Essential elements:</strong></p>
        <ul>
          <li>Meta titles and descriptions</li>
          <li>Header tags (H1, H2, H3)</li>
          <li>Alt text for images</li>
          <li>XML sitemap</li>
          <li>Schema markup</li>
        </ul>

        <h2>8. Social Proof (Testimonials & Reviews)</h2>
        <p>Customer testimonials build credibility and trust. Display reviews prominently on your homepage and service pages.</p>
        <p><strong>Include:</strong> Customer name, photo, company, and specific results achieved.</p>

        <h2>9. Analytics & Tracking</h2>
        <p>Google Analytics 4 helps you understand visitor behavior, track conversions, and make data-driven decisions.</p>
        <p><strong>Key metrics to monitor:</strong> Traffic sources, bounce rate, conversion rate, popular pages, and user demographics.</p>

        <h2>10. Privacy Policy & Cookie Consent</h2>
        <p>GDPR and privacy laws require transparent data handling. Include:</p>
        <ul>
          <li>Privacy policy page</li>
          <li>Cookie consent banner</li>
          <li>Terms of service</li>
          <li>Clear data collection practices</li>
        </ul>

        <h2>Bonus: Blog Section</h2>
        <p>Regular blog posts improve SEO, establish authority, and provide value to your audience. Aim for 2-4 posts per month on topics relevant to your industry.</p>

        <h2>Conclusion</h2>
        <p>Implementing these 10 features will transform your website from a basic online presence into a powerful business tool that attracts, engages, and converts visitors into loyal customers.</p>
        <p>Need help implementing these features? <a href="#contact">Contact Shantanu Solutions</a> for professional website development services.</p>
      `
    },
    'seo-best-practices-small-businesses-india': {
      title: 'SEO Best Practices for Small Businesses in India',
      author: 'Shantanu Solutions',
      date: '2026-01-08',
      readTime: '10 min read',
      category: 'SEO',
      excerpt: 'Learn how to optimize your website for search engines and attract more local customers with these proven SEO strategies.',
      content: `
        <h2>Why SEO Matters for Indian Small Businesses</h2>
        <p>Search Engine Optimization (SEO) is crucial for small businesses in India to compete in the digital marketplace. With over 700 million internet users in India, appearing in search results can dramatically increase your visibility and customer base.</p>

        <h2>1. Local SEO: Your Secret Weapon</h2>
        <p>For small businesses serving local areas, local SEO is essential. Here's how to dominate local search:</p>

        <h3>Google Business Profile (Formerly Google My Business)</h3>
        <ul>
          <li>Claim and verify your business listing</li>
          <li>Add accurate business information (address, phone, hours)</li>
          <li>Upload high-quality photos of your business</li>
          <li>Collect and respond to customer reviews</li>
          <li>Post regular updates and offers</li>
        </ul>

        <h3>Local Keywords</h3>
        <p>Include location-based keywords in your content:</p>
        <ul>
          <li>"Web development services in Mumbai"</li>
          <li>"Best restaurant in Bangalore"</li>
          <li>"Plumber near me in Delhi"</li>
        </ul>

        <h2>2. Keyword Research for Indian Market</h2>
        <p>Understanding what your customers search for is fundamental to SEO success.</p>

        <h3>Tools to Use:</h3>
        <ul>
          <li><strong>Google Keyword Planner:</strong> Free tool showing search volumes</li>
          <li><strong>Ubersuggest:</strong> Keyword ideas and competition analysis</li>
          <li><strong>AnswerThePublic:</strong> Question-based keywords</li>
        </ul>

        <h3>Focus on Long-Tail Keywords</h3>
        <p>Instead of targeting broad terms like "website design," focus on specific phrases like "affordable website design for small business in India" - these have less competition and higher conversion rates.</p>

        <h2>3. On-Page SEO Optimization</h2>
        
        <h3>Title Tags</h3>
        <p>Create compelling titles under 60 characters that include your primary keyword:</p>
        <p><em>Example: "Professional Website Development in Mumbai | Shantanu Solutions"</em></p>

        <h3>Meta Descriptions</h3>
        <p>Write persuasive descriptions (150-160 characters) that encourage clicks:</p>
        <p><em>Example: "Get a stunning, mobile-responsive website for your business. Fast delivery, affordable prices. Free consultation. Call now!"</em></p>

        <h3>Header Tags (H1, H2, H3)</h3>
        <p>Structure your content with proper headings:</p>
        <ul>
          <li>One H1 tag per page (main title)</li>
          <li>Multiple H2 tags for main sections</li>
          <li>H3 tags for subsections</li>
        </ul>

        <h3>URL Structure</h3>
        <p>Keep URLs short, descriptive, and keyword-rich:</p>
        <p>✅ Good: yoursite.com/web-design-mumbai</p>
        <p>❌ Bad: yoursite.com/page?id=12345</p>

        <h2>4. Content is King</h2>
        <p>Quality content attracts visitors and keeps them engaged.</p>

        <h3>Content Strategy:</h3>
        <ul>
          <li><strong>Blog regularly:</strong> 2-4 posts per month minimum</li>
          <li><strong>Answer customer questions:</strong> Create FAQ pages</li>
          <li><strong>Use local language:</strong> Consider Hindi, Tamil, or regional languages</li>
          <li><strong>Include multimedia:</strong> Images, videos, infographics</li>
        </ul>

        <h3>Content Ideas for Indian Businesses:</h3>
        <ul>
          <li>"How to choose [your service] in [your city]"</li>
          <li>"Top 10 [industry] trends in India 2026"</li>
          <li>"Complete guide to [your service]"</li>
          <li>Customer success stories</li>
          <li>Industry news and updates</li>
        </ul>

        <h2>5. Mobile Optimization</h2>
        <p>With 95% of Indian internet users accessing via mobile, mobile optimization is critical.</p>

        <h3>Mobile SEO Checklist:</h3>
        <ul>
          <li>Responsive design that adapts to all screen sizes</li>
          <li>Fast loading speed (under 3 seconds)</li>
          <li>Large, tappable buttons</li>
          <li>Readable text without zooming</li>
          <li>Avoid pop-ups that cover content</li>
        </ul>

        <h2>6. Technical SEO Basics</h2>

        <h3>Site Speed</h3>
        <p>Improve loading times with:</p>
        <ul>
          <li>Image compression (use WebP format)</li>
          <li>Browser caching</li>
          <li>Minify CSS and JavaScript</li>
          <li>Use a Content Delivery Network (CDN)</li>
        </ul>

        <h3>XML Sitemap</h3>
        <p>Submit your sitemap to Google Search Console to help search engines discover your pages.</p>

        <h3>Robots.txt</h3>
        <p>Guide search engines on which pages to crawl and index.</p>

        <h3>SSL Certificate</h3>
        <p>HTTPS is a ranking factor. Ensure your site has an SSL certificate.</p>

        <h2>7. Link Building Strategies</h2>
        <p>Quality backlinks improve your site's authority and rankings.</p>

        <h3>Link Building Tactics for Indian Businesses:</h3>
        <ul>
          <li><strong>Local directories:</strong> JustDial, Sulekha, IndiaMART</li>
          <li><strong>Industry associations:</strong> Join and get listed</li>
          <li><strong>Guest blogging:</strong> Write for industry blogs</li>
          <li><strong>Local news:</strong> Get featured in local publications</li>
          <li><strong>Social media:</strong> Share content on LinkedIn, Facebook</li>
        </ul>

        <h2>8. Leverage Social Media</h2>
        <p>While not a direct ranking factor, social signals help SEO indirectly.</p>

        <h3>Best Platforms for Indian Businesses:</h3>
        <ul>
          <li><strong>Facebook:</strong> Largest user base in India</li>
          <li><strong>Instagram:</strong> Visual content, younger audience</li>
          <li><strong>LinkedIn:</strong> B2B businesses</li>
          <li><strong>WhatsApp Business:</strong> Direct customer communication</li>
        </ul>

        <h2>9. Monitor and Measure Results</h2>

        <h3>Essential Tools:</h3>
        <ul>
          <li><strong>Google Analytics:</strong> Track traffic and user behavior</li>
          <li><strong>Google Search Console:</strong> Monitor search performance</li>
          <li><strong>Google Business Insights:</strong> Local search data</li>
        </ul>

        <h3>Key Metrics to Track:</h3>
        <ul>
          <li>Organic traffic growth</li>
          <li>Keyword rankings</li>
          <li>Bounce rate</li>
          <li>Conversion rate</li>
          <li>Page load time</li>
        </ul>

        <h2>10. Common SEO Mistakes to Avoid</h2>
        <ul>
          <li>❌ Keyword stuffing</li>
          <li>❌ Buying backlinks</li>
          <li>❌ Duplicate content</li>
          <li>❌ Ignoring mobile users</li>
          <li>❌ Slow website speed</li>
          <li>❌ No local SEO optimization</li>
        </ul>

        <h2>SEO Timeline: What to Expect</h2>
        <p>SEO is a long-term strategy. Here's a realistic timeline:</p>
        <ul>
          <li><strong>Month 1-3:</strong> Foundation setup, initial optimization</li>
          <li><strong>Month 4-6:</strong> Start seeing traffic improvements</li>
          <li><strong>Month 7-12:</strong> Significant ranking improvements</li>
          <li><strong>12+ months:</strong> Established authority, consistent traffic</li>
        </ul>

        <h2>Conclusion</h2>
        <p>SEO for small businesses in India requires patience, consistency, and the right strategies. Focus on local SEO, create quality content, optimize for mobile, and build your online presence gradually.</p>
        <p>Remember: SEO is not a one-time task but an ongoing process. Stay updated with algorithm changes and continuously improve your website.</p>
        <p><strong>Need professional SEO services?</strong> <a href="#contact">Contact Shantanu Solutions</a> for a free SEO audit and consultation.</p>
      `
    },
    'static-vs-dynamic-websites-guide': {
      title: 'Static vs Dynamic Websites: Which is Right for Your Business?',
      author: 'Shantanu Solutions',
      date: '2026-01-05',
      readTime: '7 min read',
      category: 'Web Development',
      excerpt: 'Understanding the differences between static and dynamic websites to make the best choice for your business needs.',
      content: `
        <h2>Introduction</h2>
        <p>Choosing between a static and dynamic website is one of the first decisions you'll make when building your online presence. This guide will help you understand the differences and choose the right option for your business.</p>

        <h2>What is a Static Website?</h2>
        <p>A static website displays the same content to every visitor. The content is fixed and doesn't change unless manually updated by a developer.</p>

        <h3>How Static Websites Work</h3>
        <p>Static websites are built with HTML, CSS, and JavaScript. Each page is a separate HTML file stored on the server. When a visitor requests a page, the server sends that exact file to their browser.</p>

        <h3>Examples of Static Websites:</h3>
        <ul>
          <li>Portfolio websites</li>
          <li>Landing pages</li>
          <li>Company brochure sites</li>
          <li>Personal blogs (with static site generators)</li>
        </ul>

        <h2>What is a Dynamic Website?</h2>
        <p>A dynamic website generates content in real-time based on user interactions, database queries, or other factors. The content can change without manual updates.</p>

        <h3>How Dynamic Websites Work</h3>
        <p>Dynamic websites use server-side programming languages (PHP, Python, Node.js) and databases (MySQL, MongoDB). When a visitor requests a page, the server processes the request, queries the database, and generates HTML on the fly.</p>

        <h3>Examples of Dynamic Websites:</h3>
        <ul>
          <li>E-commerce stores</li>
          <li>Social media platforms</li>
          <li>News websites</li>
          <li>Web applications</li>
          <li>Membership sites</li>
        </ul>

        <h2>Static Websites: Pros and Cons</h2>

        <h3>Advantages ✅</h3>
        <ul>
          <li><strong>Lightning Fast:</strong> No database queries = instant loading</li>
          <li><strong>Highly Secure:</strong> No database = fewer security vulnerabilities</li>
          <li><strong>Cost-Effective:</strong> Cheaper hosting, lower development costs</li>
          <li><strong>Easy to Host:</strong> Can be hosted on simple servers or CDNs</li>
          <li><strong>Better SEO:</strong> Fast loading speeds improve search rankings</li>
          <li><strong>Reliable:</strong> Less can go wrong, minimal downtime</li>
        </ul>

        <h3>Disadvantages ❌</h3>
        <ul>
          <li><strong>Limited Functionality:</strong> Can't handle complex user interactions</li>
          <li><strong>Manual Updates:</strong> Requires developer to change content</li>
          <li><strong>Not Scalable:</strong> Difficult to manage hundreds of pages</li>
          <li><strong>No User Accounts:</strong> Can't have login/registration features</li>
          <li><strong>No Personalization:</strong> Same content for all visitors</li>
        </ul>

        <h2>Dynamic Websites: Pros and Cons</h2>

        <h3>Advantages ✅</h3>
        <ul>
          <li><strong>Easy Content Management:</strong> Update content via admin panel</li>
          <li><strong>User Interaction:</strong> Comments, forms, user accounts</li>
          <li><strong>Personalization:</strong> Show different content to different users</li>
          <li><strong>Scalability:</strong> Handle thousands of pages easily</li>
          <li><strong>Advanced Features:</strong> E-commerce, bookings, memberships</li>
          <li><strong>Real-Time Updates:</strong> Content changes instantly</li>
        </ul>

        <h3>Disadvantages ❌</h3>
        <ul>
          <li><strong>Slower Performance:</strong> Database queries take time</li>
          <li><strong>Higher Costs:</strong> More expensive hosting and development</li>
          <li><strong>Security Risks:</strong> More vulnerable to attacks</li>
          <li><strong>Complex Maintenance:</strong> Requires regular updates</li>
          <li><strong>Server Dependencies:</strong> Needs specific server configuration</li>
        </ul>

        <h2>Cost Comparison</h2>

        <h3>Static Website Costs</h3>
        <ul>
          <li><strong>Development:</strong> ₹15,000 - ₹50,000</li>
          <li><strong>Hosting:</strong> ₹500 - ₹2,000/year</li>
          <li><strong>Maintenance:</strong> ₹5,000 - ₹15,000/year</li>
          <li><strong>Total First Year:</strong> ₹20,000 - ₹67,000</li>
        </ul>

        <h3>Dynamic Website Costs</h3>
        <ul>
          <li><strong>Development:</strong> ₹50,000 - ₹2,50,000</li>
          <li><strong>Hosting:</strong> ₹5,000 - ₹20,000/year</li>
          <li><strong>Maintenance:</strong> ₹20,000 - ₹50,000/year</li>
          <li><strong>Total First Year:</strong> ₹75,000 - ₹3,20,000</li>
        </ul>

        <h2>Which Should You Choose?</h2>

        <h3>Choose a Static Website If:</h3>
        <ul>
          <li>✅ You have a small business with basic information needs</li>
          <li>✅ Your content doesn't change frequently</li>
          <li>✅ You want the fastest possible loading speeds</li>
          <li>✅ You're on a tight budget</li>
          <li>✅ You don't need user accounts or complex features</li>
          <li>✅ You want maximum security and reliability</li>
        </ul>

        <p><strong>Best for:</strong> Portfolios, landing pages, small business websites, informational sites</p>

        <h3>Choose a Dynamic Website If:</h3>
        <ul>
          <li>✅ You need to update content frequently</li>
          <li>✅ You want non-technical staff to manage content</li>
          <li>✅ You need user accounts and login functionality</li>
          <li>✅ You're running an e-commerce store</li>
          <li>✅ You need personalized user experiences</li>
          <li>✅ You have complex business logic</li>
        </ul>

        <p><strong>Best for:</strong> E-commerce, blogs, news sites, web applications, membership sites</p>

        <h2>Hybrid Approach: Best of Both Worlds</h2>
        <p>Modern solutions like Jamstack combine static site benefits with dynamic features:</p>

        <h3>Static Site Generators + Headless CMS</h3>
        <ul>
          <li>Build static pages for speed and security</li>
          <li>Use a CMS for easy content management</li>
          <li>Add dynamic features via APIs</li>
          <li>Examples: Next.js, Gatsby, Hugo</li>
        </ul>

        <h2>Real-World Examples</h2>

        <h3>Static Website Success Story</h3>
        <p><strong>Client:</strong> Local law firm</p>
        <p><strong>Solution:</strong> 5-page static website with contact form</p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>0.8 second load time</li>
          <li>95+ Google PageSpeed score</li>
          <li>₹25,000 total cost</li>
          <li>50% increase in inquiries</li>
        </ul>

        <h3>Dynamic Website Success Story</h3>
        <p><strong>Client:</strong> Online clothing store</p>
        <p><strong>Solution:</strong> E-commerce website with 500+ products</p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Easy product management</li>
          <li>Automated inventory tracking</li>
          <li>₹1,50,000 development cost</li>
          <li>₹10 lakhs revenue in first year</li>
        </ul>

        <h2>Making the Decision</h2>

        <h3>Ask Yourself These Questions:</h3>
        <ol>
          <li>How often will content change?</li>
          <li>Do I need user accounts or login?</li>
          <li>What's my budget?</li>
          <li>Do I need e-commerce features?</li>
          <li>How important is page speed?</li>
          <li>Will I manage content myself?</li>
        </ol>

        <h2>Conclusion</h2>
        <p>There's no one-size-fits-all answer. Static websites are perfect for small businesses with simple needs, while dynamic websites suit businesses requiring frequent updates and complex functionality.</p>

        <p>For most small businesses in India, we recommend starting with a static website and upgrading to dynamic as your needs grow. This approach minimizes initial costs while providing room for future expansion.</p>

        <p><strong>Still unsure?</strong> <a href="#contact">Contact Shantanu Solutions</a> for a free consultation. We'll analyze your needs and recommend the perfect solution for your business.</p>
      `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button onClick={navigateToBlog} className="btn-primary">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={navigateToBlog}
          className="flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </button>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-6">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
          <button className="flex items-center gap-2 hover:text-accent-600 dark:hover:text-accent-400 transition-colors ml-auto">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Featured Image Placeholder */}
        <div className="mb-12 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/20 dark:to-primary-900/20 rounded-2xl h-96 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-lg">Featured Image</p>
            <p className="text-sm">{post.category}</p>
          </div>
        </div>

        {/* Blog Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-primary-950 dark:prose-headings:text-white
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-primary-900 dark:prose-strong:text-white
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
            prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-gray-100 dark:prose-code:bg-dark-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Professional Web Development Services?</h3>
          <p className="mb-6 text-white/90">
            Let Shantanu Solutions help you build a stunning website that drives results.
          </p>
          <button
            onClick={() => window.location.hash = '#contact'}
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <div
                  key={key}
                  onClick={() => window.location.hash = `#blog/${key}`}
                  className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all"
                >
                  <span className="text-sm text-accent-600 dark:text-accent-400 font-semibold">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-xl font-bold text-primary-950 dark:text-white mt-2 mb-3">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <span>{formatDate(relatedPost.date)}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
