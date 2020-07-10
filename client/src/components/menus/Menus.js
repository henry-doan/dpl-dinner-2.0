import React, { Component } from 'react';
import { MenuConsumer } from '../../providers/MenuProvider';
import MenuForm from './MenuForm';
import { DinerConsumer } from '../../providers/DinerProvider';

class Menus extends Component {
  render() {
    const { addMenu, dinerId } = this.props
    return(
      <>
        <h1>Menus:</h1>
        <MenuForm addMenu={addMenu} dinerId={dinerId} />
      </>
    )
  }
}

const ConnectedMenus = (props) => (
  <MenuConsumer>
    {
      values => <Menus {...props} {...values} />
    }
  </MenuConsumer>
)

// const ConnectedConnectedMenus = (props) => (
//   <DinerConsumer>
//     {
//       values => <ConnectedMenus {...props} {...values} />
//     }
//   </DinerConsumer>
// )

export default ConnectedMenus;