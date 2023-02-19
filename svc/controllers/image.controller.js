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
  const imageObject = req.file;
  delete imageObject._id;
  const image = new Image({
    ...imageObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  if(!imageObject) {
    return res.status(404).json({ error: 'No image found' });
  }
  image.save()
    .then(() => res.status(201).json({ message: 'Image saved', id: image._id}))
    .catch(error => res.status(500).json({ error: error }));
};

exports.delete = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then(images => {
      const filename = images.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Image.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Image deleted'}))
          .catch(error => res.status(400).json({ error: error }));
      });
    })
    .catch(error => res.status(500).json({ error: error }));
};
