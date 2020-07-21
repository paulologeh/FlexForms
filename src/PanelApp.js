import React, { Component } from 'react';
import { Grid, Menu, Container, Dropdown } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';
import { StoreProvider } from './Store';
import { isObjInvalid } from './helpers';

const canvasStyle = { flexGrow: 1, height: '100%' };

const toolsItemsStyle = { width: '200px' };

const PanelMenu = () => {

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          Panel Builder
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
        <Dropdown item simple text='Options'>
          <Dropdown.Menu>
            <Dropdown.Item>Save</Dropdown.Item>
            <Dropdown.Item>Clear Canvas</Dropdown.Item>
            <Dropdown.Item>Export URL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu >
  )
}

class PanelApp extends Component {

  state = {
    canvasTool: null
  }

  componentDidMount() {
    console.clear()
  }

  getSelectedTool = (tool) => {
    if (isObjInvalid(tool)) {
      console.log('ERROR! -> Tool not recognised')
      return;
    }
    this.setState({ canvasTool: { tool } })
    return;
  }

  render() {
    return (
      <StoreProvider>
        <div>
          <div className="menu-header">
            <PanelMenu />
          </div>
          <div className="App">
            <Grid columns={2} padded>
              <Grid.Row>
                <Grid.Column style={toolsItemsStyle}>
                  <Grid.Row stretched>
                    <Tools callbackTool={this.getSelectedTool} />
                  </Grid.Row>
                  <br />
                  <Grid.Row stretched>
                    <ItemsPanel />
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column stretched style={canvasStyle}>
                  <Canvas canvasTool={this.state.canvasTool} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </StoreProvider>
    )
  }
}

export default PanelApp;