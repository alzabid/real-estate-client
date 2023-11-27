import { useState } from "react";


const MakeOffer = () => {
      // State for form data
  const [formData, setFormData] = useState({
    propertyTitle: '',
    propertyLocation: '',
    agentName: '',
    offeredAmount: '',
    buyerEmail: '',
    buyerName: '',
    buyingDate: '',
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const submitOffer = async () => {
    // Validate the offered amount against the specified price range
    // Perform additional client-side validation if needed

    // Assuming you have fetched property details and price range from the server
    const minPrice = 2/* fetched minimum price */
    const maxPrice = 5 /* fetched maximum price */
    const offeredAmount = parseFloat(formData.offeredAmount);

    if (offeredAmount < minPrice || offeredAmount > maxPrice) {
      setErrorMessage('Offered amount must be within the specified price range.');
      return;
    }

    try {
      // Perform an API request to submit the offer data to the server
      const response = await fetch('/submitOffer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data and clear error message on successful submission
        setFormData({
          propertyTitle: '',
          propertyLocation: '',
          agentName: '',
          offeredAmount: '',
          buyerEmail: '',
          buyerName: '',
          buyingDate: '',
        });
        setErrorMessage('');
        // Handle further actions, e.g., redirect or display a success message
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to submit offer.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Internal Server Error');
    }
  };
    return (
      <div>
        <div>
          {/* Offer Form */}
          <form>
            {/* Display Property Information (readonly) */}
            {/* ... (same as in the previous example) */}

            {/* Offer Details */}
            <label htmlFor="offeredAmount">Offered Amount:</label>
            <input
              type="number"
              id="offeredAmount"
              name="offeredAmount"
              value={formData.offeredAmount}
              onChange={(e) =>
                setFormData({ ...formData, offeredAmount: e.target.value })
              }
              required
            />

            {/* ... (same as in the previous example) */}

            {/* Offer Button */}
            <button type="button" onClick={submitOffer}>
              Make Offer
            </button>
          </form>

          {/* Display error message if there's an error */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    );
};

export default MakeOffer;