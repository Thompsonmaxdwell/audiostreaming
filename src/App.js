import React from 'react';
import Layout from './hoc/Layout/Layout';
import Aux from './hoc/aux/aux';
import Auth from './container/Auth/Auth';


function App() {
  return (
    <Aux>
        <Layout>
           <Auth/>
        </Layout>
    </Aux>
  );
}

export default App;
