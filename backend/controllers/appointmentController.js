
const Patient = require("../models/patient.model");
const Doctor = require("../models/doctor.model");
const newAppointment = async (req,res)=>{
    try {
        const patient_id = req.body.patient_id;
        const doctor_id = req.body.doctor_id;
        const patient= Patient.findById(patient_id);
        const doctor= Doctor.findById(doctor_id);
        const appointmentArray = doctor.appointments;
        const appTime = new Date();
        appointmentArray.forEach(element => {
            if(element.time - appTime <= 3600){
                appTime
            }
        });<

        
    } catch (err) {
        res.error(500).json({sucess: false, msg: `Error generating appointment ${err}`})
        
    }

}