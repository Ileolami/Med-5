import patientImage from "../assests/esther.svg";
import { useContext, useState } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Overview = () => {
  const { web5, myDID } = useContext(Web5Context);
  // const { patientRecord, setPatientRecord } = useState([]);

  // console.log({myDID});

  const validationSchema = Yup.object({
    patientDID: Yup.string().required("Patient DID is required"),
    health_record: Yup.string().required("Patient health record is required"),
    firstName: Yup.string().required("Patient First name is required"),
    lastName: Yup.string().required("Patient Last name is required"),
    email: Yup.string().required("Patient email is required"),
    phone: Yup.string().required("Patient phone number is required"),
    address: Yup.string().required("Patient address is required"),
  });

  const formik = useFormik({
    initialValues: {
      patientDID: "",
      health_record: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const recipientDID = values.patientDID;
      let patientData = {
        // "@type": "healthRecord",
        recipient: recipientDID,
        author: myDID,
        health_record: values.health_record,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        address: values.address,
      };

      //create new record in the dwn
      try {
        const { record, status } = await web5.dwn.records.write({
          data: patientData,
          message: {
            protocol: "https://github.com/sirval",
            protocolPath: "patientRecord",
            schema: "https://med-5.vercel.app/schema/patientRecord",
            recipient: recipientDID,
            published: true,
          },
        });

        await record.send(
          "did:ion:EiDnuQlQo06W1ov8nTrIe6kN3ZiqR5crOU25cWmPwMB6vw:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4Ijoid3QyZjhOZ3g4NEJTLV9uSjNELVUwT2FUdjVSdUVaeW5sYzQtamtSVUxLVSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJFMFdJZHJGdmtrTzlUREtrWE9EYzFHZGgwQnNDU29YaVV4QzhWYWlrUnRvIiwieSI6IjBKTTQ1R2Q0X3Q0a3Q0dTJUbUZUdTFKRU1DT2RHbmdOYnJiZ25JTXNnUHMifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNiJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlENV9VaWo3SlJTZlphZW1HMVItVjdlc2dwd2E1T0xiLWtZcjVyVVhlbzljZyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQklrY3hidnl0UTUyRjlRNjRIRXBKb2hvcDRLYkRsMy1MbVpMdFBaS1ZEZlEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUNtaXYzaUhWYUYwTDNHdUxUVnRMUmoybUN2SVNlQktCNUZCT1VjUTZkMVpnIn19"
        );

        setSubmitting(false);
        resetForm();
        toast.success("Submit Successfully!");
        if (status.code === 200) {
          console.log(record);
          return { ...patientData, recordId: record.id };
        } else {
          console.log(record);
        }

        console.log("Record written to DWN", { record, status });
        if (record) {
          const { status } = await record.send(recipientDID);
          console.log("Send record", status);
        } else {
          throw new Error("Failed to create record");
        }
        // return record;

        // const writeToDwn = async (patientData) => {
        //   const record = await web5.dwn.records.write({
        //     data: patientData,
        //     message: {
        //       protocol: "https://github.com/sirval",
        //       protocolPath: "patientRecord",
        //       schema: "https://med-5.vercel.app/schema/patientRecord",
        //       recipient: recipientDID,
        //       published: true,
        //     },
        //   });
        //   return record;
        // };

        // const writeToDwnResponse = await writeToDwn(patientData);

        // if (writeToDwnResponse?.status?.code === 202) {
        //   const sentDataResponse = await writeToDwnResponse?.record.send(recipientDID);
        //   console.log(sentDataResponse);
        // }
        // console.log(record, status.code);
        // if (status.code === 202) {
        //     console.log("Send record status", status);
        //    const sentData = await record.send(recipientDID);
        //    console.log(sentData);
        // }else {
        //   console.log('Record not sent', record);
        // }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // const fetchRecords = async () => {
  //   const userMessages = await fetchUserMessages();
  //   const directMessages = await fetchDirectMessages();
  //   const allMessages = [...(userMessages || []), ...(directMessages || [])];
  //   setMessages(allMessages);
  // };
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between">
          <Sidebar />
          <div className="flex lg:justify-center lg:items-center flex-grow">
            <div
              className="w-full max-w-md p-8 bg-font rounded-lg shadow-lg shadow-slate-950 md:m-10 md:h-3/6 lg:h-5/6 lg:max-w-screen-sm"
              data-aos="fade-right"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                New Patient Record
              </h2>
              <form onSubmit={formik.handleSubmit} className="flex flex-col">
                <input
                  type="text"
                  name="patientDID"
                  className="w-full p-2 border rounded"
                  placeholder="Patient DID"
                  {...formik.getFieldProps("patientDID")}
                />
                {formik.touched.patientDID && formik.errors.patientDID && (
                  <div className=" font-light text-red-600">
                    {formik.errors.patientDID}
                  </div>
                )}

                <div className="flex mt-2">
                  <div className="w-1/2 mr-2 ">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full p-2 border rounded"
                      placeholder="First Name"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="font-light text-red-600">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2 ml-2">
                    <input
                      type="text"
                      name="lastName"
                      className="w-full p-2 border rounded"
                      placeholder="Last Name"
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="font-light text-red-600">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="text"
                  name="address"
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Address"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="font-light text-red-600">
                    {formik.errors.address}
                  </div>
                )}
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 mt-2 border rounded"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="font-light text-red-600">
                    {formik.errors.email}
                  </div>
                )}
                <input
                  type="tel"
                  name="phone"
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Phone"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className=" font-light text-red-600">
                    {formik.errors.phone}
                  </div>
                )}

                <textarea
                  name="health_record"
                  className="w-full p-2 mt-2 border rounded"
                  placeholder="Medical Information"
                  rows="4"
                  {...formik.getFieldProps("health_record")}
                ></textarea>

                {formik.touched.health_record &&
                  formik.errors.health_record && (
                    <div className="font-light text-red-600">
                      {formik.errors.health_record}
                    </div>
                  )}
                <div>
                  <button
                    type="submit"
                    className="bg-hover hover:bg-orange-700 hover:w-20 transition duration-500 ease-in-out shadow-lg shadow-yellow-800 text-white p-2 mt-4 rounded self-end"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
