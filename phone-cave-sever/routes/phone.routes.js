const router = require("express").Router();
const phonesFromJSON = require("../data/phones.json");

router.get(("/"), (req,res,next) => {
    res.json(phonesFromJSON);
});

router.get(("/:id"), (req,res,next) => {

    const { id } = req.params;
    const singlePhone = phonesFromJSON.find(phone => phone.id.toString() === id.toString());
    if (singlePhone) {
        res.status(200).json(singlePhone)
    }
    res.status(404).json({ msg: "this phone is not in our list" })
})

module.exports = router;