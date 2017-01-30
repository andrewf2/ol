import BusinessStore from '../stores/BusinessStore';
import Layout from './Layout.jsx';
import React from 'react';

const Home = React.createClass({
  render(){
    return(
      <Layout>
      	{this.props.children}
      </Layout>
    );
  }
});

export default Home;
