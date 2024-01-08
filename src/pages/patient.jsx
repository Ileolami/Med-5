import { useContext, useState } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";

import "yup-phone";
import protocolDefinition from "../assests/Web5Protocol/protocol.json";

const Overview = () => {
  const { web5, myDID, patientData } = useContext(Web5Context);

  const [userDid, setUserDid] = useState("");

  // console.log(myDID);

  console.log(patientData);

  async function grantPermission(_recordId) {
    try {
      const record = await web5.dwn.records.get(
        "bafyreihcff3wwovefcdqec2zwfnittmkdfhnl4j6rebologkcecq2mpwjm"
      );

      record.metadata.permissions[userDid] = "read";

      await web5.dwn.records.update(record);

      console.log("Permissions added successfully for user DID:", userDid);
    } catch (error) {
      console.error("Error adding permissions:", error);
    }
  }

  async function revokePermission(recordId, userDid) {
    try {
      const record = await Web5.dwn.records.get(recordId);

      // 2. Remove the user DID from the permissions metadata
      delete record.metadata.permissions[userDid];

      // 3. Republish the record with updated permissions
      await Web5.dwn.records.update(record);

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
                        onClick={() => grantPermission("1")}
                        className="bg-green-500 p-2 rounded text-white font-medium hover:bg-green-400 cursor-pointer"
                      >
                        add access
                      </p>
                      <p
                        onClick={() => revokePermission(patientData, _index)}
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
