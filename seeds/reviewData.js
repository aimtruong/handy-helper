
const { Review } = require('../models');

const reviewData = [
    {
        // 1
        title: 'Amazing work but EXPENSIVE',
        review_text: "The gardeners have done a great job for my backyard but they charge per plants!! So if you're planning to use this company, don't do it during spring or summer!",
        customer_id: 1,
        handyman_id: 6
    },
    {
        // 2
        title: "I can't recommend Cool Gardens enough!",
        review_text: "The gardeners involve my husband and I a lot into the process of choosing the trees and flowers. They were so kind to also teach us how to keep them alive that I can't wait to get into gardening to keep their hard effort alive.",
        customer_id: 2,
        handyman_id: 6
    },
    {
        // 3
        title: 'Veronica has made my vision become real perfectly',
        review_text: "I love black but also want a modern style for my living room and Veronica nailed it! The walls were the darkest of black, the couch was black, the table was black with a shade of brown. I love it!",
        customer_id: 3,
        handyman_id: 5
    },
    {
        // 4
        title: 'Five stars all the way',
        review_text: "I hired Interior Glam for my fixer upper house and she did amazing on portraying what I wanted the house to feel.",
        customer_id: 4,
        handyman_id: 5
    },
    {
        // 5
        title: 'Rapid remodel really does remodel fast',
        review_text: "Fixed my house in 13 days when other places said they would take 2 months, I'm glad I chose Rapid Remodel!",
        customer_id: 5,
        handyman_id: 4
    },
    {
        // 6
        title: 'Very fast',
        review_text: "They were able to repair my kitchen after a fire in a week and that's because shipping took 6 of those days.",
        customer_id: 6,
        handyman_id: 4
    },
    {
        // 7
        title: 'Great work and best name',
        review_text: "I never thought Darth Vader would fix my house but he did and did it amazingly!",
        customer_id: 7,
        handyman_id: 3
    },
    {
        // 8
        title: 'Five stars all the way',
        review_text: "Love the work they did!!",
        customer_id: 8,
        handyman_id: 3
    },
    {
        // 9
        title: 'Would recommend always',
        review_text: "My house got flooded from a burst pipe and they were able to fix my tiles and sink so well and quick.",
        customer_id: 9,
        handyman_id: 2
    },
    {
        // 10
        title: 'Love Rascal Repair!!',
        review_text: "They did an amazing work on fixing my yard after the tornado, would call them again if anything happens again.",
        customer_id: 1,
        handyman_id: 2
    },
    {
        // 11
        title: 'Party fixer',
        review_text: "After my party, I found that someone flushed down a whole roll of toliet paper which clogged the pipes. It was nice to have Joes Plumbing help us.",
        customer_id: 2,
        handyman_id: 1
    },
    {
        // 12
        title: 'Could have possibly saved my marriage',
        review_text: "I accidently dropped my wedding ring down my bathroom sink while cleaning, Joe Plumbing was quick to come and take it out before my wife came home from work.",
        customer_id: 3,
        handyman_id: 1
    },
    {
        // 13
        title: 'Cool carpets',
        review_text: "They moved my furniture, changed my carpet, and moved my furniture back all in one day!!",
        customer_id: 1,
        handyman_id: 7
    },

];

const seedGallery = () => Review.bulkCreate(reviewData);

module.exports = seedGallery;