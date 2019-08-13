import React from 'react';
import {Link} from 'react-router-dom'

const MenuItem = (props) => {
  let {active, href, children} = props;

  return(
    <li className={active ? 'nav-item active' : 'nav-item'}>
      <Link className="nav-link" to={href}>{children}</Link>
    </li>
  );
}

export default MenuItem;