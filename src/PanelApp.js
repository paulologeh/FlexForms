import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';
import { StoreProvider } from './Store';
import { isObjInvalid } from './helpers';

const canvasStyle = { flexGrow: 1, height: '100%' }

const toolsItemsStyle = { width: '200px' }

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
      <div className="App">
        <Grid columns={2} padded>
          <Grid.Row>
            <Grid.Column style={toolsItemsStyle}>
              <Grid.Row stretched>
                <Tools callbackTool={this.getSelectedTool} />
              </Grid.Row>
              <br />
              <Grid.Row stretched>
                <StoreProvider>
                  <ItemsPanel />
                </StoreProvider>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column stretched style={canvasStyle} a>
              <StoreProvider>
                <Canvas canvasTool={this.state.canvasTool} />
              </StoreProvider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PanelApp;