const { Handyman } = require('../models')

const handymandata = [
    {
        firstName: 'Joe',
        lastName: 'Gurr',
        businessName: 'Joes Plumbing',
        email: 'joeplumbing@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Mike',
        lastName: 'Conner',
        businessName: 'rascal repair',
        email: 'rascalrepair@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Darth',
        lastName: 'Vader',
        businessName: 'Revenge of the remodle',
        email: 'iamyourfather@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Joe',
        lastName: 'Dirt',
        businessName: 'Rapid remodle',
        email: 'Joeydirt@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Veronica',
        lastName: 'Cortez',
        businessName: 'Interior Glam',
        email: 'vcortez@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Helen',
        lastName: 'Brown',
        businessName: 'Cool Gardens',
        email: 'gardens@gmail.com',
        password: 'password123'
    },
    {
        firstName: 'Justin',
        lastName: 'Beaver',
        businessName: 'central carpenting',
        email: 'theshiz@gmail.com',
        password: 'password123'
    },
]

const seedGallery = () => Handyman.bulkCreate(handymandata)

module.exports = seedGallery