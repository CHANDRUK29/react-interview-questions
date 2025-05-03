import './App.css'
import Stepper from './components/Stepper'

function App() {

  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];

  return (
    <>
      <h2>Checkout</h2>
      <Stepper stepsConfig={CHECKOUT_STEPS} />
    </>
  )
}

export default App
