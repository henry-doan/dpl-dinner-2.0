import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuList = ({ menus }) => (
  <>
    { 
      menus.map( m => 
        <Link to={{
          pathname: `/menus/${m.id}`,
          state: { ...m }
        }}>
          <Card>
            <Card.Header>{m.title}</Card.Header>
          </Card>
        </Link>
      )
    }
  </>
)

export default MenuList;