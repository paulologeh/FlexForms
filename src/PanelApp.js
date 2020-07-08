import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';

const canvasStyle = { width: '120vmin', height: '150vmin' }

const toolsItemsStyle = { width: '35vmin' }

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
    // console.log('tools')
    // console.log(newCanvasTools)
    return;
  }

  render() {
    // console.log(this.state.canvasTools)
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
                <ItemsPanel />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column stretched style={canvasStyle}>
              <Canvas canvasTools={this.state.canvasTools} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PanelApp;