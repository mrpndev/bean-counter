const router = require("express").Router()
const { getAll, getByID, getByFilter, addData, modifyData, deleteData } = require("../controllers/api.controllers")

router.get("/all", getAll)
router.get("/:id", getByID)
router.get("/filter", getByFilter)

router.post("/add", addData)
router.put("/:id", modifyData)
router.delete("/:id", deleteData)

module.exports = router