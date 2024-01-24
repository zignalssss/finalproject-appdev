const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  res.json({ 
    number: 1, 
    name: 'John', 
    gender: 'male'
  }); 
});
app.listen(5050, () => {
    console.log('sever start successfuly!')
})