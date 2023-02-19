const Image = require('../models/images.model');
const fs = require('fs');

exports.getOne = (req, res, next) => {
  Image.findOne({ _id: req.params.id})
    .then((image) => { res.status(200).json(image)})
    .catch((error) => { res.status(404).json({ error: error});
    }
  );
};

exports.create = (req, res, next) => {
  const imageObject = JSON.parse(req.body.sauce);
  delete imageObject._id;
  const images = new Image({
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  images.save()
  .then(() => res.status(201).json({ message: 'Image created',}))
  .catch((error) => res.status(500).json({error: error, message: "Service error"}));
};

exports.delete = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then(images => {
      const filename = sauces.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Image.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Image deleted'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.update = (req, res, next) => {
  this.create(req, res, next);
  this.delete(req, res, next);
};
