import React, { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';
import { Card, Grid, Button } from 'semantic-ui-react';

class Items extends Component {
  componentDidMount() {
    const { getAllItems, menuId } = this.props
    getAllItems(menuId)
  }

  renderItems = () => {
    const { updateItem, deleteItem, menuId } = this.props
    return(
      this.props.items.map( i => {
        return(
          <Grid.Column>
            <Card>
              <Card.Header>{i.name}</Card.Header>
              <Card.Content>
                {i.price}
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='yellow'>
                    Edit
                  </Button>
                  <Button basic color='red' onClick={() => deleteItem(menuId, i.id)}>
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })
    )
  }

  render() {
    const { menuId, addItem } = this.props
    return(
      <>
        <ItemForm menuId={menuId} addItem={addItem} />
        <br />
        <br />
        <br />
        <Grid columns={3} stackable>
          { this.renderItems() }
        </Grid>
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