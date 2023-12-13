
import patientImage from "../assests/esther.svg";
import { useContext } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "yup-phone";
import Swal from 'sweetalert2'
import protocolDefinition from '../assests/Web5Protocol';

const Overview = () => {
  const {web5, myDID} = useContext(Web5Context)


  
    console.log(myDID);
    const protocolConfig = async () => {
      const { protocols, status } = await web5.protocols.query({
        message: {
          filter: {
            protocol: protocolDefinition.protocol,
          }
        }
      });

      if(status.code !== 200) {
        Swal.fire({  
          icon: 'error',  
          text: 'Error querying protocols',
        });
        console.error('Error querying protocols', status);
        return;
      }

       // if the protocol already exists, we return
      if(protocols.length > 0) {
        Swal.fire({  
          icon: 'error',  
          text: 'Protocol already exists',
        });
        console.log('Protocol already exists');
        return;
      }


    // configure protocol on local DWN
    const { status: configureStatus, protocol } = await web5.dwn.protocols.configure({
        message: {
            definition: protocolDefinition,
        }
    });

      console.log('Protocol configured', configureStatus, protocol);
    }

  


    const validationSchema = Yup.object({
      patientDID: Yup.string()
          .required("Patient DID is required"),
      health_record: Yup.string()
          .required("Patient health record is required"),
      firstName: Yup.string()
          .required("Patient First name is required"),
      lastName: Yup.string()
      .required("Patient Last name is required"),
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
              "author": myDID,
              "health_record": values.health_record,
              "firstName": values.firstName,
              "lastName": values.lastName,
              "phone":  values.phone,
              "email": values.email,
              "address": values.address
            };

            //create new record in the dwn
            try {
              const { record } = await web5.dwn.records.create({
                data: patientData,
                message: {
                  protocol: protocolDefinition.protocol,
                  protocolPath: 'health_record',
                  schema: protocolDefinition.types.health_record.schema,
                  dataFormat: protocolDefinition.types.health_record.dataFormats[0],
                  recipient:  values.patientDID
                }
              });
              console.log(patientData);
              /* 
                |---------------------------------------------------------------------------------------|
                  Heads up create record in doctors dwn, send same recored to patient and
                  automatically make the patient author
                |---------------------------------------------------------------------------------------|
              */
            } catch (error) {
              console.log(error);
            }
       
         
         console.log(patientData);
      },
  });
    return (
      <>
        <div className="flex flex-col h-screen">
          <div className="flex justify-between">
            <Sidebar />
            <div className="flex justify-center items-center flex-grow">
              <div className="w-full max-w-md p-8 bg-font rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">New Patient Record</h2>
                <form onSubmit={formik.handleSubmit} className="flex flex-col">
                   <input
                      type="text"
                      name="patientDID"
                      className="w-full p-2 border rounded"
                      placeholder="Patient DID"
                      {...formik.getFieldProps('patientDID')}
                    />
                    {formik.touched.patientDID && formik.errors.patientDID && (
                        <div className="text-white">{formik.errors.patientDID}</div>
                    )}

                  <div className="flex mt-2">
                    <div className="w-1/2 mr-2 ">
                      <input
                        type="text"
                        name="firstName"
                        className="w-full p-2 border rounded"
                        placeholder="First Name"
                        {...formik.getFieldProps('firstName')}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                          <div className="text-white">{formik.errors.firstName}</div>
                      )}
                    </div>
                    <div className="w-1/2 ml-2">
                      <input
                        type="text"
                        name="lastName"
                        className="w-full p-2 border rounded"
                        placeholder="Last Name"
                        {...formik.getFieldProps('lastName')}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                          <div className="text-white">{formik.errors.lastName}</div>
                      )}
                    </div>
                  </div>
                  <input
                    type="text"
                    name="address"
                    className="w-full mt-2 p-2 mt-2 border rounded"
                    placeholder="Address"
                    {...formik.getFieldProps('address')}
                  />
                  {formik.touched.address && formik.errors.address && (
                      <div className="text-white">{formik.errors.address}</div>
                  )}
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 mt-2 border rounded"
                    placeholder="Email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                      <div className="text-white">{formik.errors.email}</div>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Phone"
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                      <div className="text-white">{formik.errors.phone}</div>
                  )}
                  
                  <textarea
                    name="health_record"
                    className="w-full p-2 mt-2 border rounded"
                    placeholder="Medical Information"
                    rows="4"
                   {...formik.getFieldProps('health_record')}
                  ></textarea>
                      
                  {formik.touched.health_record && formik.errors.health_record && (
                      <div className="text-white">{formik.errors.health_record}</div>
                  )}
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-4 rounded self-end">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </>

    );
};
export default Overview;