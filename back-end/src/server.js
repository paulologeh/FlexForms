import express, { response, request } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

var counter = 1;

const example = {
    id: 1,
    settings: {
        array: [{ id: 'example', label: 'example', tooltip: 'example', helpbox: 'example', conditions: [] }]
    }
}

const savedForms = [];
savedForms.push(example);

app.listen(8000, () => console.log('Listening on port 8000'));

app.post('/api/publishForm', (request, response) => {
    counter++;
    let form_object = { id: counter, settings: request.body };
    savedForms.push(form_object);
    console.log('publishing form')
    console.log(JSON.stringify(savedForms))
    response.json({ status: 'Success!' });
})


app.get('/api/forms/:id', (request, response) => {
    console.log('getting form')
    for (let i in savedForms) {
        if (savedForms[i].id === Number(request.params.id)) {
            console.log(savedForms[i]);
            response.json({ status: 'Success!', data: savedForms[i] });
            return;
        }
    }
    response.json({ status: 'Failed!', data: 'no such form' })
});