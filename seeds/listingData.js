
const { NewListing } = require('../models');

const listingData = [
    {
        // 1
        title: 'Toliet Plumbing',
        post_content: "If you got a broken toliet or a burst pipe from it, then call Joe's Plumbing.",
        price: 30,
        tagIds: [1, 3, 6],
        handyman_id: 1
    },
    {
        // 2
        title: 'Kitchen Repairs',
        post_content: 'Need your kitchen upgrade or your stove fixed, then call Rascal Repair.',
        price: 400,
        tagIds: [2, 6, 7],
        handyman_id: 2
    },
    {
        // 3
        title: 'Remodeling houses for $2999',
        post_content: 'Revenge of the Remodel will fix your property no matter how old it is.',
        price: 2999,
        tagIds: [6, 7, 8],
        handyman_id: 3
    },
    {
        // 4
        title: 'Quick remodeling for any house!',
        post_content: 'Need a full house remodel? Call Rapid Remodel to have it done in less than 2 weeks.',
        price: 3000,
        tagIds: [2, 6, 7],
        handyman_id: 4
    },
    {
        // 5
        title: 'Glam up your house!',
        post_content: "If your house needs to be redecorated, then call up Interior Glam to make it how you've always wanted it for a good price.",
        price: 2000,
        tagIds: [2, 4],
        handyman_id: 5
    },
    {
        // 6
        title: 'Weed Removings',
        post_content: 'Will remove weeds and spray with weed killer for $100.',
        price: 100,
        tagIds: [1, 5],
        handyman_id: 6
    },
    {
        // 7
        title: 'Replace carpet',
        post_content: 'If you need your carpet replace without wanting the hassle of moving your furniture, then call Central Carpeting.',
        price: 400,
        tagIds: [1, 6, 7],
        handyman_id: 7
    },
    {
        // 8
        title: 'Clogged sink',
        post_content: "Call Joe's Plumbing if you have a clogged sink no matter how much you tried to drain it.",
        price: 50,
        tagIds: [1, 3, 6],
        handyman_id: 1
    },
    {
        // 9
        title: 'Want tiles in your house?',
        post_content: 'Have you always wanted tiles on your kitchen wall or bathroom floor, Rascal Repair can make that happen!',
        price: 200,
        tagIds: [2, 4, 7],
        handyman_id: 2
    },
    {
        // 10
        title: 'Let us build you a new house',
        post_content: 'Is your house falling apart? Are you living in your childhood home but want to make it more modern? We can fix it up again for cheap!',
        price: 6000,
        tagIds: [6, 7, 8],
        handyman_id: 3
    },
    {
        // 11
        title: 'Upgrade a room',
        post_content: 'We can remodel a room in less than a week.',
        price: 1000,
        tagIds: [2, 7],
        handyman_id: 4
    }
];

const seedGallery = () => NewListing.bulkCreate(listingData);

module.exports = seedGallery;