const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const notes = [
    {
        id: 1,
        subject: "Day One of JavaScript",
        date: "April 14, 2021",
        feeling: "Fine",
        timeSpent: 120
    },

    {
        id: 2,
        subject: "Notes Project",
        date: "April 15, 2021",
        feeling: "Cool",
        timeSpent: 60
    }
];

const noteAboutToday = {
    id: 3,
    subject: "Learning about JavaScript Functions",
    date: "April 16, 2021",
    feeling: "Intrigued",
    timeSpent: 240

}

notes.push(noteAboutToday);
console.log(notes);

for (const note of notes) {
    console.log(`Note ${note.id}
${note.date}
I learned ${note.subject}
I spent ${note.timeSpent} minutes working on it.
I felt ${note.feeling}.
`)
};

const searchTerm = "Intrigued"

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(`You indeed have felt ${searchTerm} at some point`);

    };
};

const createNote = (note) => {
    //get the length of the array
    const notesLength = notes.length - 1;
    const locatingNote = notes[notesLength];
    const idValue = locatingNote.id;
    const maxId = idValue + 1;


    note.id = maxId;

    notes.push(note)
};

//create a new note object
const moreNewerNote = {
    subject: "Practicing JavaScript Functions",
    feeling: "Confused",
    timeSpent: 360,
    dateCreated: date
};

//specify object as argument for function
//
//
//
createNote(moreNewerNote)

for (const note of notes) {
    console.log(note)
};
