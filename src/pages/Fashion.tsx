import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import ArticleGrid from '../components/ArticleGrid';

const Fashion = () => {
  const articles = [
    {
      slug: 'evolution-of-luxury-fashion',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      title: 'The Evolution of Luxury Fashion',
      excerpt: 'From haute couture to contemporary luxury, discover how high-end fashion has transformed while maintaining its timeless appeal.',
      readMore: 'Journey through the transformative eras of luxury fashion, from the birth of haute couture in 19th century Paris to todays digital revolution.'
    },
    {
      slug: 'sustainable-luxury',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      title: 'Sustainable Luxury: The Future of Fashion',
      excerpt: 'Discover how luxury brands are revolutionizing the industry with eco-conscious practices.',
      readMore: 'Delve into the cutting-edge world of sustainable luxury fashion.'
    },
    {
      slug: 'timeless-accessories',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      title: 'Timeless Accessories',
      excerpt: 'Curated guide to investment pieces that transcend seasons and trends.',
      readMore: 'Master the art of building a timeless accessories collection.'
    }
  ];

  return (
    <div className="pt-20">
      <CategoryHeader 
        title="Fashion" 
        description="Curated collections and insights into luxury fashion, where timeless elegance meets contemporary style"
        image="https://images.unsplash.com/photo-1445205170230-053b83016050"
      />
      <ArticleGrid articles={articles} category="fashion" />
    </div>
  );
};

export default Fashion;