
const { Specialty } = require('../models');

const specialtyData = [
    {
        // 1
        title: 'Plumbing',
        description: 'Expert on plumbing',
        handyman_id: 1
    },
    {
        // 2
        title: 'Repairing',
        description: 'Expert on repairing',
        handyman_id: 2
    },
    {
        // 3
        title: 'Remodeling',
        description: 'Expert on remodeling',
        handyman_id: 3
    },
    {
        // 4
        title: 'Remodeling',
        description: 'Expert on remodeling',
        handyman_id: 4
    },
    {
        // 5
        title: 'Designing',
        description: 'Expert on designing',
        handyman_id: 5
    },
    {
        // 6
        title: 'Gardening',
        description: 'Expert on gardening',
        handyman_id: 6
    },
    {
        // 7
        title: 'Carpeting',
        description: 'Expert on carpeting',
        handyman_id: 7
    }
];

const seedGallery = () => Specialty.bulkCreate(specialtyData);

module.exports = seedGallery;