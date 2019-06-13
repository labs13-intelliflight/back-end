const router = require("express").Router();

const Pireps = require("./pireps-model");

router.get("/", (req, res) => {
  Pireps.getPireps()
    .then(pireps => {
      res.status(200).json(pireps);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err, message: "Cannot retrieve pireps from database." });
    });
});

router.get("/:pirepid", (req, res) => {
  Pireps.findById(id);
});

router.post("/", async (req, res) => {
  const pirep = req.body;
  if (
    (pirep.altitude && pirep.latitude && pirep.longitude && pirep.turbulence) ||
    (pirep.icing && pirep.altitude && pirep.latitude && pirep.longitude)
  ) {
    try {
      const inserted = await Pireps.add(pirep);
      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({ message: "error, unable to add your pirep" });
    }
  } else {
    res.status(400).json({
      message:
        "Please provide turbulence or icing , latitude, longitude and altitude"
    });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Pireps.update(id, changes)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(error => {
      res.status(500).json("error");
    });
});

router.delete("/:id", (req, res) => {
  Pireps.remove(req.params.id)
    .then(del => {
      res
        .status(200)
        .json({ message: "this pirep has successfully been deleted" })
        .end(del);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
