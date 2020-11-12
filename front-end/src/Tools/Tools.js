import React from 'react';
import { Segment, Header, Grid, List, Button, Popup } from 'semantic-ui-react';
/* Custom components */
import DateTime from './date-time';
import Time from './time';
import Checkbox2 from './checkbox';
import Radio from './radio';
import Text from './text';
import Textarea from './text-area';
import DigitalInput from './digital-input';
import Label from './static-label';


const toolsColumn1 = [
    { icon: "calendar alternate outline", tool: "date-time", component: DateTime },
    { icon: "dot circle outline", tool: "radio", component: Radio },
    { icon: "check square outline", tool: "checkbox", component: Checkbox2 },
    { icon: "text cursor", tool: "text", component: Text },
    { icon: "keyboard outline", tool: "digit input", component: DigitalInput },
    { icon: "align justify", tool: "list" },
    { icon: "clone outline", tool: "panel" },
]

const toolsColumn2 = [
    { icon: "clock outline", tool: "time", component: Time },
    { icon: "ellipsis vertical", tool: "radio-group" },
    { icon: "tasks", tool: "checkbox-list" },
    { icon: "font", tool: "text-area", component: Textarea },
    { icon: "heading", tool: "static-label", component: Label },
    { icon: "dropdown", tool: "dropdown" },
    { icon: "square outline", tool: "layout" }
]

const notyetImplemented = ["align justify", "clone outline", "tasks", "dropdown", "ellipsis vertical", "square outline"]

const comingSoon = () => {
    alert('Feature Coming Soon')
}

const Tools = (props) => {

    const sendComponent = (component) => {
        props.callbackTool(component)
    }

    const handleClick = (data, event) => {
        if (notyetImplemented.includes(event.icon)) {
            comingSoon();
        }
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