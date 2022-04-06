const { Handyman } = require('../models')

const handymandata = [
    {
        // 1
        firstName: 'Joe',
        lastName: 'Gurr',
        businessName: "Joe's Plumbing",
        email: 'joeplumbing@gmail.com',
        password: 'password123',
        bio: '20 years of plumbing experience to help fix your problems in a couple of hours.'
    },
    {
        // 2
        firstName: 'Mike',
        lastName: 'Conner',
        businessName: 'Rascal Repair',
        email: 'rascalrepair@gmail.com',
        password: 'password123',
        bio: 'Can repair anything from a hole in the wall or a broken pipe under your sink.'
    },
    {
        // 3
        firstName: 'Darth',
        lastName: 'Vader',
        businessName: 'Revenge of the Remodel',
        email: 'iamyourfather@gmail.com',
        password: 'password123',
        bio: 'Remodeling homes for 10 years.'
    },
    {
        // 4
        firstName: 'Joe',
        lastName: 'Dirt',
        businessName: 'Rapid Remodel',
        email: 'Joeydirt@gmail.com',
        password: 'password123',
        bio: 'Can remodel your home in less than 2 weeks.'
    },
    {
        // 5
        firstName: 'Veronica',
        lastName: 'Cortez',
        businessName: 'Interior Glam',
        email: 'vcortez@gmail.com',
        password: 'password123',
        bio: 'I have a design degree with 5 years of interior designing experiences.'
    },
    {
        // 6
        firstName: 'Helen',
        lastName: 'Brown',
        businessName: 'Cool Gardens',
        email: 'gardens@gmail.com',
        password: 'password123',
        bio: 'Got a backyard with dead grass and weeds? Contact us to make your garden cool again.'
    },
    {
        // 7
        firstName: 'Justin',
        lastName: 'Beaver',
        businessName: 'Central Carpeting',
        email: 'theshiz@gmail.com',
        password: 'password123',
        bio: 'Can carpet all kinds of flooring and visit our store for rugs as well.'
    },
]

const seedGallery = () => Handyman.bulkCreate(handymandata)

module.exports = seedGallery