import React from 'react';

const usePortal = (): HTMLDivElement => {
  const rootElemRef = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    const parentElement = document.getElementById('modal-root');

    if (parentElement) {
      parentElement.append(rootElemRef.current);
    }

    return () => {
      rootElemRef.current.remove();
    };
  }, []);

  return rootElemRef.current;
};

export default usePortal;
