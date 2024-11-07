import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleContent from '../components/ArticleContent';

export default function ArticleDetail() {
  const { category, slug } = useParams();
  const article = articles.find(a => a.slug === slug && a.category.toLowerCase() === category?.toLowerCase());

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-600 mb-4">Article not found</h1>
          <Link 
            to="/"
            className="text-gray-900 hover:text-gray-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Link to={`/${article.category.toLowerCase()}`}>
          <motion.button
            className="fixed top-24 left-8 z-10 flex items-center text-gray-900 hover:text-gray-700 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to {article.category}</span>
          </motion.button>
        </Link>

        <ArticleContent
          title={article.title}
          category={article.category}
          content={article.content}
          image={article.image}
        />

        <motion.div 
          className="max-w-4xl mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-serif text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles
              .filter(a => 
                a.category === article.category && 
                a.slug !== article.slug
              )
              .slice(0, 2)
              .map((relatedArticle, index) => (
                <Link 
                  key={index}
                  to={`/${relatedArticle.category.toLowerCase()}/article/${relatedArticle.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                    <motion.img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600">{relatedArticle.excerpt}</p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}