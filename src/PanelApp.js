import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';
import { StoreProvider } from './Store';

const canvasStyle = { flexGrow: 1, height: '100%' }

const toolsItemsStyle = { width: '200px' }

function isInvalid(value) {
  return (value === undefined || value === null) ? true : false
}

class PanelApp extends Component {

  state = {
    canvasTools: []
  }

  componentDidMount() {
    console.clear()
  }

  getSelectedTool = (tool) => {
    if (isInvalid(tool)) {
      return;
    }

    let newCanvasTools = Array.from(this.state.canvasTools)
    newCanvasTools.push(tool)
    this.setState({ canvasTools: newCanvasTools })
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
                <Canvas canvasTools={this.state.canvasTools} />
              </StoreProvider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PanelApp;