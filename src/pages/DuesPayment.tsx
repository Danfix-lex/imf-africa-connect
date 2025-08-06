import React, { useEffect } from 'react';

const DuesPayment = () => {
  useEffect(() => {
    // Redirect to the external payment page
    window.location.href = 'https://imf-payment-xdde.onrender.com';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to payment page...</p>
      </div>
    </div>
  );
};

export default DuesPayment;