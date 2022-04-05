const router = require('express').Router();
const { Tag, NewListing, ListingTag } = require('../../models');

// GET all tags
router.get('/', (req, res) => {
    Tag.findAll({
        attributes: [
            "id",
            "title",
            "description"
        ],
        include: [
            {
                model: NewListing,
                attributes: ["id", "title", "post_content", "price", "handyman_id"],
                through: ListingTag
            }
        ]
    })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a tag
router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    Tag.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id",
            "title",
            "description"
        ],
        include: [
            {
                model: NewListing,
                attributes: ["id", "title", "post_content", "price", "handyman_id"],
                through: ListingTag
            }
        ]
    })
    .then(dbTagData => {
        if(!dbTagData){
            res.status(400).json({ message: "No tag with this id" });
            return;
        }
        res.json(dbTagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST a tag to create
router.post('/', (req, res) => {
    // create a new tag
    Tag.create({
        title: req.body.title,
        description: req.body.description,
    })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT a tag to update
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(
        {
            title: req.body.title,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbTagData => {
      if(!dbTagData[0]){
        res.status(400).json({ message: "No tag found with this id" });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a tag
router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbTagData => {
        if(!dbTagData){
            res.status(400).json({ message: "No tag found with this id" });
            return;
        }
        res.json(dbTagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
