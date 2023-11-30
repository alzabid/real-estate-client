import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe(
      "pk_test_51OHu2XBMntAgfRXAPy3IyZRp4So0QxkIod4CfisivprINyLqLQMuTzzUQuFxo0Dqwx7LZjr712BxE2qNWR8KNhji00ypfyUlYN"
    );
    return (
      <div className="max-w-screen-md mb-10 mt-10 mx-auto h-screen">
        <p className="text-center font-bold text-4xl">Payment</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
};

export default Payment;