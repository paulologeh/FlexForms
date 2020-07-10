import React from 'react';
import { Segment, Header, Input, Container, TextArea, Form } from 'semantic-ui-react';
/*
Customisable view based on tool selected 
*/
const ItemsPanel = (selectedItemId) => {

    return (
        <Segment secondary padded >
            <Container>
                <Header as="h5">Items Panel</Header>
                <label>ID</label>
                <Input fluid type="text" size="small" />
                <label>Label</label>
                <Input fluid type="text" size="small" />
                <label>Tooltip</label>
                <Input fluid type="text" size="small" />
                <label>Help Box</label>
                <Form> <TextArea /> </Form>
                <label>Conditions</label>
                <Segment>
                    <p><i>Example: Enable if ID1 == true</i></p>
                </Segment>
            </Container>
        </Segment>
    )
}

export default ItemsPanel;