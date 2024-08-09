import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

// Importing images from assets folder
import tutorialImage1 from '../assets/1.jpg';
import tutorialImage2 from '../assets/2.jpg';
import tutorialImage3 from '../assets/3.jpg';

const tutorials = [
  {
    title: 'React Basics',
    description: 'Learn the basics of React, including components, state, and props. This tutorial will give you a solid foundation to build upon as you dive deeper into React development.',
    author: 'Jane Doe',
    image: tutorialImage1,
    rating: 4.5,
  },
  {
    title: 'Advanced React',
    description: 'Take your React skills to the next level by exploring advanced topics such as context, reducers, and the use of custom hooks. This tutorial is perfect for those looking to enhance their React expertise.',
    author: 'John Smith',
    image: tutorialImage2,
    rating: 4.7,
  },
  {
    title: 'React Hooks',
    description: 'Understand the power of React Hooks and how they can simplify your code. This tutorial covers useState, useEffect, and custom hooks to help you write more efficient and clean React components.',
    author: 'Alice Johnson',
    image: tutorialImage3,
    rating: 4.8,
  },
];

const Tutorials = () => (
  <div>
    <h2>Featured Tutorials</h2>
    <Card.Group itemsPerRow={3}>
      {tutorials.map((tutorial, index) => (
        <Card key={index}>
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <Image src={tutorial.image} alt="Tutorial" wrapped ui={false} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" /> {tutorial.rating} &nbsp; {tutorial.author}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button content="See all tutorials" />
  </div>
);

export default Tutorials;
