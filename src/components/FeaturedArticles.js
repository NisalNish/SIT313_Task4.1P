import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

// Importing images from assets folder
import articleImage1 from '../assets/4.jpg';
import articleImage2 from '../assets/5.jpg';
import articleImage3 from '../assets/6.png';

const articles = [
  {
    title: 'Understanding React State Management',
    description: 'A comprehensive guide to managing state in React applications using various tools like Redux, Context API, and more. Learn the best practices to maintain state effectively.',
    author: 'Emily Clark',
    image: articleImage1,
    rating: 4.9,
  },
  {
    title: 'Building Responsive React Applications',
    description: 'Learn how to build responsive React applications that look great on any device. This tutorial covers CSS Grid, Flexbox, and responsive design principles.',
    author: 'Michael Brown',
    image: articleImage2,
    rating: 4.6,
  },
  {
    title: 'Optimizing React Performance',
    description: 'Explore techniques for optimizing the performance of your React applications, including lazy loading, memoization, and code splitting. Ensure your app runs smoothly for all users.',
    author: 'Sarah Lee',
    image: articleImage3,
    rating: 4.8,
  },
];

const FeaturedArticles = () => (
  <div>
    <h2>Featured Articles</h2>
    <Card.Group itemsPerRow={3}>
      {articles.map((article, index) => (
        <Card key={index}>
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <Image src={article.image} alt="Article" wrapped ui={false} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" /> {article.rating} &nbsp; {article.author}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button content="See all articles" />
  </div>
);

export default FeaturedArticles;
