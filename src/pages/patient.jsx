
import patientImage from "../assests/esther.svg";
import { useContext } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "yup-phone";
import Swal from 'sweetalert2'
import protocolDefinition from '../assests/Web5Protocol/protocol.json';

const Overview = () => {
  const {web5, myDID} = useContext(Web5Context)


  
    console.log(myDID);
    
    const writeToDwn = async (patientData) => {
      const { record } = await web5.dwn.records.write({
        data: patientData,
        message: {
          protocol: "https://med-5.vercel.app/patientRecord",
          protocolPath: "patientRecord",
          schema: "https://med-5.vercel.app/schema/patientRecord",
          recipient: myDID,
        },
      });
      return record;
    };

    const sendRecord = async (record) => {
      return await record.send(myDID);
    };
  


    const validationSchema = Yup.object({
      patientDID: Yup.string()
          .required("Patient DID is required"),
      health_record: Yup.string()
          .required("Patient health record is required"),
      firstName: Yup.string()
          .required("Patient First name is required"),
      lastName: Yup.string()
      .required("Patient Last name is required"),
      email: Yup.string()
      .required("Patient email is required"),
      phone: Yup.string()
      .required("Patient phone number is required"),
      address: Yup.string()
      .required("Patient address is required"),
    });

  const formik = useFormik({
      initialValues: {
        patientDID: '',
        health_record: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
            let patientData = {
              "@type": "healthRecord",
              "recipient": values.patientDID,
              "author":myDID,
              "health_record": values.health_record,
              "firstName": values.firstName,
              "lastName": values.lastName,
              "phone":  values.phone,
              "email": values.email,
              "address": values.address
            };

            //create new record in the dwn
            try {
             
              const record = await writeToDwn(patientData);
              const { status } = await sendRecord(record);
              console.log("Send record status", status);
              /* 
                |---------------------------------------------------------------------------------------|
                  Heads up create record in doctors dwn, send same recored to patient and
                  automatically make the patient author
                |---------------------------------------------------------------------------------------|
              */
            } catch (error) {
              console.log(error);
            }
       
         
      },
  });
    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between">
            <Sidebar />
            <div className="flex lg:justify-center lg:items-center flex-grow">
              <div className="w-full max-w-md p-8 bg-font rounded-lg shadow-lg shadow-slate-950 md:m-10 md:h-3/6 lg:h-5/6 lg:max-w-screen-sm" data-aos="fade-right">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">Patient Records</h2>
                
              </div>
            </div>
          </div>
        </div>

      </>

    );
};
export default Overview;