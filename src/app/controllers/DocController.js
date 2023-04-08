const { query } = require('express')
const Doc = require('../models/Doc')
const gdUtils = require('./utils/GoogleDriveUtils')
const {authorize, uploadFile} = require('./utils/DriveAPI')
class ReadController {
    // [GET] /doc/show
    show(req, res) {
        let query = req.query
        Doc.findById(query.id, (err, doc) => {
            if (err) {
                console.error(err)
            } else {
                doc = doc.toObject();
                let id = gdUtils.getFileIdFromUrl(doc.link)
                let previewLink = gdUtils.idToPreviewLink(id)
                doc.link = previewLink
                res.render('docs/show', doc)
            }
        })
    }
    // [GET] /doc/upload
    upload(req, res, next) {
        res.render('docs/upload')
    }
    // [POST] /doc/store
    store(req, res) {
        res.json(req.body)
        if (req.file){
            // res.json(req.file)
            authorize().then((client) => uploadFile(client, req)).catch(console.error)
            // console.log(uploadedFile)
            
        }
    }
}
module.exports = new ReadController