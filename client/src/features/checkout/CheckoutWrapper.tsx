import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe(
  "pk_test_51MjkeUGwhxfqCnou5ErdIw9UuwY92E5xqvuvtNpnSQ3qbkXLVgpePd5YyxITfyBBGdqRVMakFP5zaAIoklZjvi7W00UrAyPKiO"
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
