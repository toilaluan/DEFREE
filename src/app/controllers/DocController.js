const { query } = require("express");
const call_api = require("./utils/OpenAPI");
const Doc = require("../models/Doc");
const gdUtils = require("./utils/GoogleDriveUtils");
const { authorize, uploadFile } = require("./utils/DriveAPI");
class ReadController {
  // [GET] /doc/show
  show(req, res) {
    let query = req.query;
    Doc.findById(query.id, (err, doc) => {
      if (err) {
        console.error(err);
      } else {
        Doc.updateOne({ _id: query.id }, { $set: { views: doc.views+1 }}, (err, result) => {
          if (err) {
            console.log('Error:', err);
          }
        });
        doc = doc.toObject();
        let id = gdUtils.getFileIdFromUrl(doc.link);
        let previewLink = gdUtils.idToPreviewLink(id);
        doc.link = previewLink;
        res.render("docs/show", doc);
      }
    });
  }
  // [GET] /doc/upload
  upload(req, res, next) {
    res.render("docs/upload");
  }
  // [POST] /doc/store

  store(req, res) {
    if (req.file) {
      authorize()
        .then((client) => uploadFile(client, req))
        .then((uploadedFile) => call_api(uploadedFile, req))
        .then((new_doc) => res.render("docs/store", new_doc))
        .catch(console.error);
    }
  }
  async store_confirm(req, res) {
    await Doc.create(req.body, (err, res) => {
      if (err) throw err;
      console.log("Upload successfully!");
    });
    res.redirect("/");
  }
}
module.exports = new ReadController();
