import patientImage from "../assests/esther.svg";
import { useContext, useEffect, useState } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import Swal from "sweetalert2";
import protocolDefinition from "../assests/Web5Protocol/protocol.json";

const Overview = () => {
  const { web5, myDID } = useContext(Web5Context);
  const [patientData, setPatientData] = useState([]);

  // console.log(myDID);

  const readAllDataFromDWNForDid = async () => {
    const response = await web5.dwn.records.query({
      from: myDID,
      message: {
        filter: {
          schema: "https://med-5.vercel.app/schema/patientRecord",
          dataFormat: "application/json",
        },
      },
    });

    let num = 1;

    let arr = [];

    for (const record of response.records) {
      let { record: readRecord } = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: record.id,
          },
        },
      });

      // assuming the record has a text payload
      const text = await readRecord.data.text();

      arr.push(JSON.parse(text));

      num += 1;
    }

    setPatientData(arr);
  };

  useEffect(() => {
    readAllDataFromDWNForDid();
  }, [myDID]);

  console.log(patientData);

  // const writeToDwn = async (patientData) => {
  //   const { record } = await web5.dwn.records.write({
  //     data: patientData,
  //     message: {
  //       protocol: "https://med-5.vercel.app/patientRecord",
  //       protocolPath: "patientRecord",
  //       schema: "https://med-5.vercel.app/schema/patientRecord",
  //       recipient: myDID,
  //     },
  //   });
  //   return record;
  // };

  // const sendRecord = async (record) => {
  //   return await record.send(myDID);
  // };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between">
          <Sidebar />
          <div className="flex lg:justify-center lg:items-center flex-grow">
            <div
              className="w-full max-w-md p-8 bg-font rounded-lg shadow-lg shadow-slate-950 md:m-10 md:min-h-3/6 lg:min-h-5/6 lg:max-w-screen-sm"
              data-aos="fade-right"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                Patient Records
              </h2>

              <div className="text-neutral-50 flex flex-col gap-4">
                {patientData?.map((item, _index) => (
                  <div key={_index}>
                    <h1 className="text-xl my-2 font-medium underline underline-offset-2">
                      Record {_index + 1}
                    </h1>
                    <p>email: {item?.email}</p>
                    <p>FirstName: {item?.firstName}</p>
                    <p>address: {item?.address}</p>
                    <p>health_record: {item?.health_record}</p>
                    <p>phone: {item?.phone}</p>
                    <p>lastName: {item?.lastName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
