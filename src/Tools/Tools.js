import React from 'react';
import { Segment, Header, Grid, List, Button, Popup } from 'semantic-ui-react';
import DateTime from './date-time';
import Time from './time';

const toolsColumn1 = [
    { icon: "calendar alternate outline", tool: "date-time", component: DateTime },
    { icon: "dot circle outline", tool: "radio" },
    { icon: "check square outline", tool: "checkbox" },
    { icon: "text cursor", tool: "text" },
    { icon: "keyboard outline", tool: "digit input" },
    { icon: "align justify", tool: "list" },
    { icon: "clone outline", tool: "panel" },
]

const toolsColumn2 = [
    { icon: "clock outline", tool: "time", component: Time },
    { icon: "ellipsis vertical", tool: "radio-group" },
    { icon: "tasks", tool: "checkbox-list" },
    { icon: "font", tool: "text-area" },
    { icon: "sliders horizontal", tool: "slider" },
    { icon: "dropdown", tool: "dropdown" },
    { icon: "square outline", tool: "button" }
]

const Tools = (props) => {

    const sendComponent = (component) => {
        props.callbackTool(component)
    }

    const handleClick = (data, event) => {
        console.log("Clicked " + event.icon)
        // console.log(event.component)
        sendComponent(event.component)
    }

    return (
        <Segment secondary padded>
            <Header as="h5">Tools</Header>
            <Grid celled columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List>
                            {toolsColumn1.map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        content={obj.tool}
                                        trigger={<Button component={obj.component} icon={obj.icon} key={i} onClick={handleClick} />}
                                    />
                                </List.Item>)
                            }
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            {toolsColumn2.map((obj, i) =>
                                <List.Item key={i}>
                                    <Popup
                                        content={obj.tool}
                                        trigger={<Button component={obj.component} icon={obj.icon} key={i} onClick={handleClick} />}
                                    />
                                </List.Item>)
                            }
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Tools;