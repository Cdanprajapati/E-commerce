import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../../Pages/Payment";
const stripePromise = loadStripe("pk_test_51LjHWKJ");


function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}

export default Stripe;
