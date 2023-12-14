import { createContext, useEffect, useState } from 'react';
import { Web5 } from '@web5/api/browser';
import propTypes from 'prop-types';
import Swal from 'sweetalert2';

export const Web5Context = createContext(null);

export const Web5Provider = ({ children }) => {
    Web5Provider.propTypes = {
        children: propTypes.string,
    };

  const [web5, setWeb5] = useState(null);
  const [myDID, setMyDID] = useState(null);

  useEffect(() => {

   

    const connectToWeb5 = async () => {
      try {
        const { web5: connectedWeb5, did: connectedDID } = await Web5.connect({
          sync: '5s',
        });
        setWeb5(connectedWeb5);
        setMyDID(connectedDID);
       
        if (connectedWeb5 && connectedDID) {
          await protocolConfig(connectedWeb5, connectedDID);
        }else{
          console.log('hey');
        }
      } catch (error) {
        console.log('error', error);
        Swal.fire({  
            icon: 'error',
            text: 'Failed to connect to Web5',
        });
        console.error('Failed to connect to Web5:', error);
      }
    };

    connectToWeb5();

    const protocolConfig = async (web5, did) => {
      const protocolDefinition = await createProtocolDefinition();
  
      const { protocols: appProtocol, status: appProtocolStatus } =
        await queryForProtocol(web5);
      console.log({ appProtocol, appProtocolStatus });
      if (appProtocolStatus.code !== 200 || appProtocol.length === 0) {
  
        const { protocol, status } = await installProtocol(web5, protocolDefinition);
        console.log("Protocol installed locally", protocol, status);
  
        const { status: configureRemoteStatus } = await protocol.send(did);
        console.log("Did the protocol install on the remote DWN?", configureRemoteStatus);
      } else {
        console.log("Protocol already installed");
      }
    };
  }, []);

  console.log('web5', web5);
  console.log('did', myDID);
  const createProtocolDefinition = () => {
    const decentralizedHealthRecord =  {
      "protocol": "https://med-5.vercel.app/patientRecord",
      "published": true,
      "types": {
          "patientRecord": {
            "schema": "https://med-5.vercel.app/schema/patientRecord",
            "dataFormats": ["application/json"]
          }
      },
      "structure": {
        "patientRecord": {
              "$actions": [
                  {
                      "who": "anyone",
                      "can": "read"
                  },
                  {
                      "who": "author",
                      "of": "patientRecord",
                      "can": "write"
                  },
                  {
                      "who": "author",
                      "of": "patientRecord",
                      "can": "read"
                  },
                  {
                      "who": "recipient",
                      "of": "patientRecord",
                      "can": "read"
                  }
              ],
          },
      },
    };
    return decentralizedHealthRecord;
  }

  const queryForProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://med-5.vercel.app/patientRecord",
        },
      },
    });
  };

  const installProtocol = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
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

