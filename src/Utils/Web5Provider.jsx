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
      // from: "did:ion:EiDnuQlQo06W1ov8nTrIe6kN3ZiqR5crOU25cWmPwMB6vw:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4Ijoid3QyZjhOZ3g4NEJTLV9uSjNELVUwT2FUdjVSdUVaeW5sYzQtamtSVUxLVSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJFMFdJZHJGdmtrTzlUREtrWE9EYzFHZGgwQnNDU29YaVV4QzhWYWlrUnRvIiwieSI6IjBKTTQ1R2Q0X3Q0a3Q0dTJUbUZUdTFKRU1DT2RHbmdOYnJiZ25JTXNnUHMifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNiJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlENV9VaWo3SlJTZlphZW1HMVItVjdlc2dwd2E1T0xiLWtZcjVyVVhlbzljZyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQklrY3hidnl0UTUyRjlRNjRIRXBKb2hvcDRLYkRsMy1MbVpMdFBaS1ZEZlEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUNtaXYzaUhWYUYwTDNHdUxUVnRMUmoybUN2SVNlQktCNUZCT1VjUTZkMVpnIn19",
      from: myDID,
      message: {
        filter: {
          schema: "https://med-5.vercel.app/schema/patientRecord",
          dataFormat: "application/json",
          protocol: "https://github.com/sirval",
          protocolPath: "patientRecord",
        },
      },
    });

    let num = 1;

    let arr = [];

    console.log(response);

    for (const record of response.records) {
      // const dataRes = await record.data.text();

      // console.log(dataRes);

      // let { record: readRecord } = await web5.dwn.records.read({
      //   message: {
      //     filter: {
      //       recordId: record.id,
      //     },
      //   },
      // });

      // assuming the record has a text payload
      // const text = await readRecord.data.text();
      const text = await record.data.text();

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
        <Web5Context.Provider value={{ web5, myDID, patientData }}>
          {children}
        </Web5Context.Provider>
      )}
    </>
  );
};
