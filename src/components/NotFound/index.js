import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <main style={{margin:'100px auto', textAlign:'center'}}>
      Ooops!!!
      <br />
      Seems you are on the wrong page. <br />
      Please find your way back <Link to="/" style={{textDecoration:'underline', color:'#e62429'}}>Home</Link>.
      <br />
      Thank you :-)
    </main>
  );
}

export default NotFound;
