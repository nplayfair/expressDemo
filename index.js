const express   = require('express');
const path      = require('path');

const app = express();

// Example data
const members = [
    {
        id: 1,
        name: 'Nick Playfair',
        email: 'nick@nickplayfair.co.uk',
        status: 'active'
    },
    {
        id: 2,
        name: 'John Smith',
        email: 'john@mail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Anita Adams',
        email: 'anita@email.com',
        status: 'active'
    }
]

app.get('/api/members', (req, res) => {
    res.json(members);
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));