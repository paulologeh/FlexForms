import React from 'react';
import { Segment, Header, Grid, Icon, List } from 'semantic-ui-react';

const iconsColumn1 = [
    "calendar alternate outline",
    "radio",
    "check square outline",
    "text cursor",
    "keyboard outline",
    "dropdown",
    "clone outline"
]

const iconsColumn2 = [
    "clock outline",
    "dot circle outline",
    "check square",
    "font",
    "sliders horizontal",
    "list",
    "power off"
]

const Tools = () => {
    return (
        <Segment secondary padded compact>
            <Header as="h5">Tools</Header>
            <Grid celled columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List>
                            {iconsColumn1.map((icon, i) => <List.Item><Icon name={icon} key={i}></Icon></List.Item>)}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            {iconsColumn2.map((icon, i) => <List.Item><Icon name={icon} key={i}></Icon></List.Item>)}
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Tools;