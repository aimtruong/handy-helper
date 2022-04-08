const { Customer } = require('../models')

const customerdata = [
    {
        username: 'henry',
        email: 'henry@yahoo.com',
        password: 'password1'
    },
    {
        username: 'mich',
        email: 'mich@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Katy',
        email: 'katy@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Holly',
        email: 'Holly@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Ben',
        email: 'Ben@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Ryan',
        email: 'Ryan@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Dora',
        email: 'Dora@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Zach',
        email: 'Zach@yahoo.com',
        password: 'password1'
    },
    {
        username: 'Lilly',
        email: 'Lilly@yahoo.com',
        password: 'password1'
    },
]

const seedGallery = () => Customer.bulkCreate(customerdata)

module.exports = seedGallery