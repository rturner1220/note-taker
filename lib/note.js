const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function createNote(body, notesArray) {
    const note = body;
    note.id = uuidv4();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];
        
        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync (
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
            }
        }
    }

function validateNote(note) {
    
    if (!note.title || typeof note.title !== 'string') {
          return false;
        }
          if (!note.text || typeof note.text !== 'string') {
              return false;
          }
          return true;
        }

 module.exports = {
    createNote,
    deleteNote,
    validateNote
  };