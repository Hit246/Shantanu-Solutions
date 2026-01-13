import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  // Sample blog posts - replace with real content or fetch from CMS
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Features Every Business Website Needs in 2026',
      excerpt: 'Discover the must-have features that will make your business website stand out and convert visitors into customers.',
      author: 'Shantanu Solutions',
      date: '2026-01-10',
      readTime: '5 min read',
      category: 'Web Development',
      image: '/blog/website-features.png', 
      slug: '10-essential-website-features-2026',
    },
    {
      id: 2,
      title: 'SEO Best Practices for Small Businesses in India',
      excerpt: 'Learn how to optimize your website for search engines and attract more local customers with these proven SEO strategies.',
      author: 'Shantanu Solutions',
      date: '2026-01-08',
      readTime: '7 min read',
      category: 'SEO',
      image: '/blog/seo-practices.png',
      slug: 'seo-best-practices-small-businesses-india',
    },
    {
      id: 3,
      title: 'Static vs Dynamic Websites: Which is Right for Your Business?',
      excerpt: 'Understanding the differences between static and dynamic websites to make the best choice for your business needs.',
      author: 'Shantanu Solutions',
      date: '2026-01-05',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/blog/static-vs-dynamic.png',
      slug: 'static-vs-dynamic-websites-guide',
    },
    {
      id: 4,
      title: 'How to Choose the Right Web Development Partner',
      excerpt: 'Key factors to consider when selecting a web development agency for your business project.',
      author: 'Shantanu Solutions',
      date: '2026-01-03',
      readTime: '4 min read',
      category: 'Business',
      image: '/blog/choosing-partner.png',
      slug: 'choose-right-web-development-partner',
    },
    {
      id: 5,
      title: 'The Complete Guide to Website Maintenance',
      excerpt: 'Why regular website maintenance is crucial and what tasks you should be performing monthly.',
      author: 'Shantanu Solutions',
      date: '2026-01-01',
      readTime: '8 min read',
      category: 'Maintenance',
      image: '/blog/website-maintenance.png',
      slug: 'complete-guide-website-maintenance',
    },
    {
      id: 6,
      title: 'E-commerce Trends to Watch in 2026',
      excerpt: 'Stay ahead of the curve with these emerging e-commerce trends that will shape online shopping this year.',
      author: 'Shantanu Solutions',
      date: '2025-12-28',
      readTime: '6 min read',
      category: 'E-commerce',
      image: '/blog/ecommerce-trends.png',
      slug: 'ecommerce-trends-2026',
    },
  ];

  const categories = ['All', 'Web Development', 'SEO', 'E-commerce', 'Business', 'Maintenance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest web development trends, SEO tips, and business strategies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post (First Post) */}
        {filteredPosts.length > 0 && (
          <div className="mb-12 scroll-animate">
            <div className="bg-gradient-to-br from-primary-950 to-primary-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full mb-4 w-fit">
                    Featured Post
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(filteredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <a
                    href={`#blog/${filteredPosts[0].slug}`}
                    className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all w-fit"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 scroll-animate group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-accent-600 text-xs font-semibold rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12 scroll-animate">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center scroll-animate">
          <h3 className="text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest web development tips, trends, and exclusive offers delivered to your inbox.
          </p>
          <a
            href="#newsletter"
            className="inline-block bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

// Add React import for useState
import React from 'react';

export default Blog;
