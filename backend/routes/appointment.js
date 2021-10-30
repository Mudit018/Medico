const express = require("express");
const router = express.Router();

const {newAppointment} = require("../controllers/appointmentController");
router.post("/newAppointment",newAppointment);

router
  .route("/patient/:id")
  .get(getPatientbyID)
  .patch(updatePatient)
  .delete(deletePatient);
// .route("/Doctorlogin")
// .get(Doctorlogin);

module.exports = router;