const router = require('express').Router();
const { notes } = require('../db/db.json');

const { createNote, deleteNote, validateNote } = require('../lib/note');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });
  
// create post note
router.post('/notes', (req, res) => {
 
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
       const newNote = createNote(req.body, notes);

       res.json(newNote);
    }
});
    
// Delete note
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});
     
 
  module.exports = router;