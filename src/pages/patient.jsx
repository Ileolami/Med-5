import { useContext, useState } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
import "yup-phone";
import toast from "react-hot-toast";

const Overview = () => {
  const { web5, myDID, patientData } = useContext(Web5Context);

  const [userDid, setUserDid] = useState("");

  console.log(patientData);

  async function grantPermission(recordData) {
    try {
      const { record, status } = await web5.dwn.records.write({
        data: recordData,
        message: {
          protocol: "https://github.com/sirval",
          protocolPath: "patientRecord",
          schema: "https://med-5.vercel.app/schema/patientRecord",
          recipient: userDid,
          published: true,
        },
      });

      await record.send(myDID);

      toast.success("Submit Successfully!");
      if (status.code === 200) {
        console.log(record);
        return { ...patientData, recordId: record.id };
      } else {
        console.log(record);
      }

      console.log("Record written to DWN", { record, status });
      if (record) {
        const { status } = await record.send(userDid);
        console.log("Send record", status);
      } else {
        throw new Error("Failed to create record");
      }
    } catch (error) {
      toast.error("error occured");

      console.log(error);
    }
  }

  async function revokePermission(record) {
    console.log(record);
    try {
      const { protocols } = await web5.dwn.records.query({
        recipient: userDid,
        message: {
          recordId: record.recordId,
        },
      });

      console.log(protocols);

      // await web5.dwn.records.delete({
      //   from: userDid,
      //   message: {
      //     recordId: recordId,
      //   },
      // });

      console.log("Permissions removed successfully for user DID:", userDid);
    } catch (error) {
      console.error("Error removing permissions:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between">
          <Sidebar />
          <div className="flex lg:justify-center lg:items-center flex-grow">
            <div
              className="w-full max-w-md p-8 bg-font rounded-lg shadow-lg shadow-slate-950 md:m-10 md:min-h-3/6 lg:min-h-5/6 lg:max-w-screen-2xl"
              data-aos="fade-right"
            >
              <h2 className="text-2xl font-bold mb-4 text-center font-Playfair underline text-white">
                Patient's Record
              </h2>

              <div className="text-neutral-50 flex flex-col gap-5 justify-start">
                {patientData?.map((item, _index) => (
                  <div key={_index}>
                    <h1 className="text-xl my-2 font-medium  text-start underline-offset-2">
                      Record {_index + 1}
                    </h1>
                    <div className="flex flex-col items-start lg:flex-row lg:gap-3 ">
                      <p>
                        <span className=" text-hover font-Lato">Name</span>:{" "}
                        {item?.firstName} {item?.lastName}
                      </p>
                      <p>
                        <span className=" text-hover font-Lato">Email</span>:{" "}
                        {item?.email}
                      </p>
                    </div>
                    <div className=" text-left">
                      {" "}
                      <p>
                        <span className=" text-hover font-Lato">Address</span>:{" "}
                        {item?.address}
                      </p>
                    </div>
                    <div className="flex justify-start">
                      {" "}
                      <p>
                        <span className=" text-hover font-Lato">Phone</span>:{" "}
                        {item?.phone}
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <p>
                        <span className=" text-hover font-Lato">
                          Medical Record
                        </span>
                        : {item?.health_record}
                      </p>
                    </div>

                    {/* trigger */}

                    <div className="flex justify-start gap-2">
                      <input
                        onChange={(e) => setUserDid(e.target.value)}
                        className=""
                        type="text"
                        placeholder="user did"
                      />
                    </div>

                    {/* trigger */}

                    <div className="flex justify-start gap-2 text-sm mt-2">
                      <p
                        onClick={() => grantPermission(item)}
                        className="bg-green-500 p-2 rounded text-white font-medium hover:bg-green-400 cursor-pointer"
                      >
                        add access
                      </p>
                      <p
                        onClick={() => revokePermission(item)}
                        className="bg-red-500 p-2 rounded text-white font-medium hover:bg-red-400 cursor-pointer"
                      >
                        remove access
                      </p>
                    </div>
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
