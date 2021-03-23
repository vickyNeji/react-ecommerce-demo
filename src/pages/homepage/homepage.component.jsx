import React from "react";
import './homepage.styles.scss'
//import MenuItem from '../../../src/components/menu-item/menu-item.component'
import Directory from '../../components/directory/directory.component'

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory/>
      </div>
    </div>
  );
}

export default HomePage;
