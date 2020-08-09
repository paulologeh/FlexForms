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

// app.get('/hello', (request, response) =>
//     response.send('Hello! Get')
// );

app.get('/api/forms/:id', (request, response) => {
    console.log('getting form')
    console.log(`${JSON.stringify(request.params)}`)
    console.log(request.params.id)
    for (let i in savedForms) {
        if (savedForms[i].id === Number(request.params.id)) {
            console.log('inside')
            console.log(savedForms[i]);
            response.json({ status: 'Success!', data: savedForms[i] });
            return;
        }
    }
    response.json({ status: 'Failed!', data: 'no such form' })
});

    // response.send(`Hello Get id: ${request.params.id}`)
// );

// app.post('/api/forms/:id', (request, response) => {
//     const encrypted_id = request.params.id;
//     const integer_id = encrypted_form_ids[encrypted_id];
//     response.status(200).send(`The integer value for ${encrypted_id} is ${integer_id}!`);
// })

// to send data in body
// app.post('/hello', (request, response) =>
//     response.send(`Hello! Post ${request.body.name}`)
// )