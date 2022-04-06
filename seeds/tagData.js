
const { Tag } = require('../models');

const tagData = [
    {
        // 1
        title: 'Finish in one day',
        description: 'Able to finish job in less than one day'
    },
    {
        // 2
        title: 'Finish in one week',
        description: 'Able to finish job in less than one week'
    },
    {
        // 3
        title: 'Plumbing',
        description: 'Jobs related to plumbing'
    },
    {
        // 4
        title: 'Interior Design',
        description: 'Jobs related to interior designing'
    },
    {
        // 5
        title: 'Yard work',
        description: 'Jobs related to yard work and gardening'
    },
    {
        // 6
        title: 'Repairing',
        description: 'Jobs related to repairing, such as repairing houses, walls, sinks, etc.'
    },
    {
        // 7
        title: 'Remodeling',
        description: 'Jobs related to remodeling'
    },
    {
        // 8
        title: 'Finish in one month',
        description: 'Able to finish job in less than one month'
    }
];

const seedGallery = () => Tag.bulkCreate(tagData);

module.exports = seedGallery;