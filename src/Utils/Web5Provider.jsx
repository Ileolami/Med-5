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
      } catch (error) {
        Swal.fire({  
            icon: 'error',  
            text: 'Failed to connect to Web5',
        });
        console.error('Failed to connect to Web5:', error);
      }
    };

    connectToWeb5();
  }, []);

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

