// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse request body
app.use(express.json());

// Create a list of comments
const comments = [
  { id: 1, author: 'Alice', content: 'I love cats' },
  { id: 2, author: 'Bob', content: 'I love dogs' },
  { id: 3, author: 'Charlie', content: 'I love parrots' },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('Comment not found');
  }
  res.json(comment);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,