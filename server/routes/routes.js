const express = require("express");
const router = express.Router();
const users = require("../model/useSchema")

const {getBookMarks,addBookMark,SearchBookMark,deleteBookMark}= require('../Controllers/bookmarks')

router.get("/getBookMarks", getBookMarks)

router.post("/addBookmark", addBookMark)

router.get("/searchBookMark/:name", SearchBookMark)

router.delete("/deleteBookMark/:id",deleteBookMark)

module.exports = router;