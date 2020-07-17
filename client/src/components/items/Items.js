import React, { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';

class Items extends Component {

  render() {
    const { menuId, addItem } = this.props
    return(
      <>
        <ItemForm menuId={menuId} addItem={addItem} />
      </>
    )
  }
}

const ConnectedItems = (props) => (
  <ItemConsumer>
    {
      values => <Items {...props} {...values} />
    }
  </ItemConsumer>
)

export default ConnectedItems;