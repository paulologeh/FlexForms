import React, { Component } from 'react';
import { Grid, Menu, Container, Dropdown, Icon, Segment, Header } from 'semantic-ui-react';
import './App.css';
import Canvas from './Canvas/Canvas';
import ItemsPanel from './Items Panel/ItemsPanel';
import Tools from './Tools/Tools';
import { StoreProvider } from './Store';
import { isObjInvalid } from './helpers';

const canvasStyle = { flexGrow: 1, height: '100%' };

const toolsItemsStyle = { width: '200px' };

function isMobile() {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const NotSuitableForMobile = () => {
  return (
    <Segment secondary color='green'>
      <Header>Using a Mobile Device</Header>
      <p>Hi there,</p>
      <p>I see you are using a mobile device</p>
      <p>This application is not suitable for mobile devices. Please use a computer</p>
      <p>Thanks!</p>
    </Segment>
  )
}

const PanelMenu = (props) => {

  const clearCanvas = () => {
    props.callbackClear(true)
  }

  const reload = (data, event) => {
    window.location.reload(false);
  }

  return (
    <Menu fixed='top' color='green' inverted>
      <Container>
        <Menu.Item as='a' header color='green'>FlexForms</Menu.Item>
        <Menu.Item as='a' onClick={() => reload}><Icon name='home' />Home</Menu.Item>
        <Menu.Item as='a'>Templates</Menu.Item>
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

class App extends Component {

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
    if (isMobile()) {
      return <NotSuitableForMobile />;
    }
    else {
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
}

export default App;