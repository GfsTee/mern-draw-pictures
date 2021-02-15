const picture = require('../models/picturesModel');

const apiControllers_index = (req, res) => {
    res.sendStatus(400)
}
const apiControllers_all = (req, res) => {
    res.sendStatus(400)
}
const apiControllers_add_post = (req, res) => {
    const tempPicture = new picture({
        fields: { rows: "3", cols: "3" }
    });
    tempPicture.save()
        .then(response => res.json(response))
        .catch(error => res.json(error))
}
const apiControllers_item_get = (req, res) => {
    picture.findById(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.json(error))
}
const apiControllers_item_edit = (req, res) => {
    picture.findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(error => res.json(error))
}



module.exports = {
    apiControllers_index,
    apiControllers_all,
    apiControllers_add_post,
    apiControllers_item_get,
    apiControllers_item_edit,
}