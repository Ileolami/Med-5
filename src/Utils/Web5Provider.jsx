import { createContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api/browser";
import propTypes from "prop-types";
import Swal from "sweetalert2";

export const Web5Context = createContext(null);

export const Web5Provider = ({ children }) => {
  Web5Provider.propTypes = {
    children: propTypes.string,
  };

  const [web5, setWeb5] = useState(null);
  const [myDID, setMyDID] = useState(null);
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const connectToWeb5 = async () => {
      try {
        const { web5: connectedWeb5, did: connectedDID } = await Web5.connect();
        setWeb5(connectedWeb5);
        setMyDID(connectedDID);

        if (connectedWeb5 && connectedDID) {
          await configureProtocol(connectedWeb5, connectedDID);
        } else {
          console.log("hey");
        }
      } catch (error) {
        console.log("error", error);
        Swal.fire({
          icon: "error",
          text: "Failed to connect to Web5",
        });
      }
    };

    connectToWeb5();

    const configureProtocol = async (web5, myDID) => {
      const protocolDefinition = newProtocolDefinition();
      const protocolUrl = protocolDefinition.protocol;

      // const { protocols: localProtocols, status: localProtocolStatus } = await queryLocalProtocol(web5, protocolUrl);
      // if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
      //   const result = await installLocalProtocol(web5, protocolDefinition);
      //   console.log({ result })
      //   console.log("Protocol installed locally");
      // }

      const { protocols: remoteProtocols, status: remoteProtocolStatus } =
        await queryRemoteProtocol(web5, myDID, protocolUrl);
      if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
        const result = await installRemoteProtocol(
          web5,
          myDID,
          protocolDefinition
        );
        console.log({ result });
        console.log("Protocol installed remotely");
      }
    };

    readAllDataFromDWNForDid();
  }, [myDID]);

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

  const newProtocolDefinition = () => {
    return {
      protocol: "https://github.com/sirval",
      published: true,
      types: {
        patientRecord: {
          schema: "https://med-5.vercel.app/schema/patientRecord",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        patientRecord: {
          $actions: [
            // { who: "author", of: "patientRecord", can: "write" },
            // { who: "recipient", of: "patientRecord", can: "write" },
            { who: "anyone", can: "read" },
            { who: "anyone", can: "write" },
          ],
        },
      },
    };
  };

  // const queryLocalProtocol = async (web5) => {
  //   return await web5.dwn.protocols.query({
  //     message: {
  //       filter: {
  //         protocol: "https://github.com/sirval",
  //       },
  //     },
  //   });
  // };

  const queryRemoteProtocol = async (web5, myDID) => {
    return await web5.dwn.protocols.query({
      from: myDID,
      message: {
        filter: {
          protocol: "https://github.com/sirval",
        },
      },
    });
  };

  // const installLocalProtocol = async (web5, protocolDefinition) => {
  //   return await web5.dwn.protocols.configure({
  //     message: {
  //       definition: protocolDefinition,
  //     },
  //   });
  // };

  const installRemoteProtocol = async (web5, myDID, protocolDefinition) => {
    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
    console.log("Remote protocol installed");
    return await protocol.send(myDID);
  };

  return (
    <>
      {web5 && myDID && (
        <Web5Context.Provider value={{ web5, myDID }}>
          {children}
        </Web5Context.Provider>
      )}
    </>
  );
};
