import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';

const canvasStyle = { width: '140vmin', height: '150vmin' }

const toolsItemsStyle = { width: '35vmin' }

class PanelApp extends Component {

  state = {}

  render() {
    return (
      <div className="App">
        <Grid columns={2} padded>
          <Grid.Row>
            <Grid.Column padded style={toolsItemsStyle}>
              <Grid.Row stretched>
                <Tools />
              </Grid.Row>
              <br />
              <Grid.Row stretched>
                <ItemsPanel />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column stretched style={canvasStyle}>
              <Canvas />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PanelApp;