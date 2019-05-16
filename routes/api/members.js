const express   = require('express');
const router    = express.Router();
const uuid      = require('uuid');
const members   = require('../../Members');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Get a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // If all fields are filled, push new member on to array
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email'});
    } else {
        members.push(newMember);
    }

    // Send back response
    res.json(members);
});


module.exports = router;