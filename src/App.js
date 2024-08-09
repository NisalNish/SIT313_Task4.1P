import React from 'react';
import { Container, Input, Button, Segment, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HeaderComponent from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

// Import the new banner image
import bannerImage from './assets/7.jpg';

const App = () => (
  <Container>
    <HeaderComponent />
    <div style={{ marginTop: '20px' }}>
      <img src={bannerImage} alt="Main Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
    </div>
    <FeaturedArticles />
    <Tutorials />
    <Segment textAlign="center" style={{ margin: '20px 0' }}>
      <Grid centered columns={2}>
        <Grid.Column textAlign="right">
          <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Input
            action={<Button content="Subscribe" icon="mail" />}
            placeholder="Enter your email"
            style={{ width: '100%' }}
          />
        </Grid.Column>
      </Grid>
    </Segment>
    <Footer />
  </Container>
);

export default App;
