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

const PanelMenu = (props) => {

  const clearCanvas = () => {
    props.callbackClear(true)
  }

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
            <Dropdown.Item onClick={clearCanvas}>Clear Canvas</Dropdown.Item>
            <Dropdown.Item>Export URL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu >
  )
}

class PanelApp extends Component {

  state = {
    canvasTool: null,
    clear: false,
    toolToDelete: null
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

  callbackClear = (clear) => {
    if (isObjInvalid(clear)) {
      console.log('ERROR! -> Did not clear canvas');
      return;
    }
    if (clear) {
      console.log('Clearing canvas');
      this.setState({ clear: true });
    }
  }

  callbackCleared = (cleared) => {
    if (isObjInvalid(cleared)) {
      console.log('ERROR! -> Clear failed');
      return;
    }
    if (cleared) {
      this.setState({ clear: false });
      console.log('Canvas cleared');
    }
  }

  callbackToolToDelete = (tool) => {
    if (isObjInvalid(tool)) {
      console.log('ERROR! -> Did not delete tool');
      return;
    }
    console.log('Deleting ' + tool);
    this.setState({ toolToDelete: tool })
  }

  callbackDeleted = (deleted) => {
    if (isObjInvalid(deleted)) {
      console.log('ERROR! -> Delete failed');
      return;
    }
    this.setState({ toolToDelete: null });
    console.log('Deleted')
  }

  render() {
    return (
      <StoreProvider>
        <div>
          <div className="menu-header">
            <PanelMenu callbackClear={this.callbackClear} />
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
                    <ItemsPanel callbackToolToDelete={this.callbackToolToDelete} />
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column stretched style={canvasStyle}>
                  <Canvas
                    canvasTool={this.state.canvasTool}
                    clear={this.state.clear}
                    callbackCleared={this.callbackCleared}
                    toolToDelete={this.state.toolToDelete}
                    callbackDeleted={this.callbackDeleted}
                  />
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