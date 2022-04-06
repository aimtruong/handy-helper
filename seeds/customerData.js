const { Customer } = require('../models')

const customerdata = [
    {
        // 1
        username: 'henry',
        email: 'henry@yahoo.com',
        password: 'password1'
    },
    {
        // 2
        username: 'mich',
        email: 'mich@yahoo.com',
        password: 'password1'
    },
    {
        // 3
        username: 'Katy',
        email: 'katy@yahoo.com',
        password: 'password1'
    },
    {
        // 4
        username: 'Holly',
        email: 'Holly@yahoo.com',
        password: 'password1'
    },
    {
        // 5
        username: 'Ben',
        email: 'Ben@yahoo.com',
        password: 'password1'
    },
    {
        // 6
        username: 'Ryan',
        email: 'Ryan@yahoo.com',
        password: 'password1'
    },
    {
        // 7
        username: 'Dora',
        email: 'Dora@yahoo.com',
        password: 'password1'
    },
    {
        // 8
        username: 'Zach',
        email: 'Zach@yahoo.com',
        password: 'password1'
    },
    {
        // 9
        username: 'Lilly',
        email: 'Lilly@yahoo.com',
        password: 'password1'
    },
]

const seedGallery = () => Customer.bulkCreate(customerdata)

module.exports = seedGallery