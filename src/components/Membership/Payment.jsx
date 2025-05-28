import React, { useState, useEffect } from "react";
import data from "../../data/db.json";

const Payment = () => {
  const [membertier, setMembertier] = useState([]);
  const [selectedTier, setSelectedTier] = useState(null);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setMembertier(data.tier);
  }, []);

  const handleProceedToPay = () => {
    if (selectedTier) {
      setShowPaymentMethods(true);
      setActiveStep(2);
    }
  };

  return (
    <div id="payment" className="px-5 mt-15 md:px-15 w-full h-auto space-x-3">
      <div className="w-full">
        <h2 className="text-xl md:text-3xl font-semibold">
          Secure your membership
          <div className="flex items-center justify-between w-2/3 mx-auto relative mt-10 ">
            <div className="-z-10 absolute top-1/2 left-0 w-full border-b-2 border-gray-300"></div>
            <input
              type="radio"
              name="process"
              checked={activeStep >= 1}
              readOnly
              className="bg-white w-5 h-5 md:w-8 md:h-8 appearance-none border-2 border-gray-500 rounded-full checked:bg-blue-500 checked:border-blue-500"
            />
            <input
              type="radio"
              name="process"
              checked={activeStep >= 2}
              readOnly
              className="bg-white w-5 h-5 md:w-8 md:h-8 appearance-none border-2 border-gray-500 rounded-full checked:bg-blue-500 checked:border-blue-500"
            />
            <input
              type="radio"
              name="process"
              checked={activeStep >= 3}
              readOnly
              className="bg-white w-5 h-5 md:w-8 md:h-8 appearance-none border-2 border-gray-500 rounded-full checked:bg-blue-500 checked:border-blue-500"
            />
          </div>
          <div className="flex justify-between mb-10 w-8/10 md:w-7/10 text-sm md:text-xl mx-auto">
            <p>Submit</p>
            <p>Payment</p>
            <p>Access</p>
          </div>
        </h2>
      </div>

      {!showPaymentMethods ? (
        <div className="md:px-40 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-2/5 h-auto p-4 rounded-lg bg-blue-100">
            <h2 className="text-lg font-semibold">Payment details</h2>
            <div className="w-full space-y-4 mt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  className="w-full md:w-3/4 bg-white rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  title="Enter full name"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full md:w-3/4 bg-white rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  title="Enter your email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  Phone no
                </label>
                <input
                  required
                  type="text"
                  className="w-full md:w-3/4 bg-white rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  maxLength="10"
                  title="Enter mobile no."
                  placeholder="Enter 10-digit number"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold mt-5">Professional details</h2>
            <div className="w-full space-y-4 mt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  Organization
                </label>
                <input
                  required
                  type="text"
                  className="bg-white w-full md:w-3/4 rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  title="Organization"
                  placeholder="Enter your organization"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  Designation
                </label>
                <input
                  required
                  type="text"
                  className="bg-white w-full md:w-3/4 rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  title="Designation"
                  placeholder="Enter your designation"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <label className="text-sm md:text-lg text-gray-700 min-w-[120px]">
                  UID (if student)
                </label>
                <input
                  required
                  type="text"
                  className="bg-white w-full md:w-3/4 rounded-sm px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  title="UID"
                  placeholder="Enter your UID"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold mt-5">Membership tiers</h2>
            <div className="mt-2">
              {membertier.slice(0, 4).map((item, index) => (
                <div key={index} className="flex space-x-3 mt-1">
                  <input
                    type="radio"
                    name="tiers"
                    onChange={() => setSelectedTier(item)}
                  />
                  <p className="text-xs md:text-sm">
                    {item.type} &nbsp;{" "}
                    <em>
                      ({item.time_period}/{item.price})
                    </em>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 md:mt-0 w-full md:w-3/7 max-h-70 p-4 rounded-lg bg-blue-200 flex justify-between relative">
            <div>
              <h2 className="text-xl font-semibold">Order Summary</h2>

              {selectedTier ? (
                <div className="mt-5 md:text-md text-xs min-w-65 md:w-90 space-y-2">
                  <div className="flex  flex-start w-full relative">
                    <p className=" mr-3">{selectedTier.type}</p>
                    <p className="font-medium">
                      ({selectedTier.time_period}) :{" "}
                    </p>
                    &nbsp;
                    <p className="md:ml-10 absolute right-0">
                      ₹{selectedTier.price}/-
                    </p>
                  </div>

                  <div className="flex md:flex-start w-full relative ">
                    <p className="mr-3">GST</p>

                    <p className="font-medium">(18%) : </p>

                    <p className="absolute right-0 md:ml-0">
                      ₹{(selectedTier.price * 18) / 100}/-
                    </p>
                  </div>

                  <hr className="border-1 w-full mx-auto" />

                  <div className="relative">
                    <p>Total : </p>
                    <p className="text-md md:ml-10 absolute right-0 top-0">
                      ₹{selectedTier.price + selectedTier.price * (18 / 100)}/-
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 mt-5">
                  Please select a membership tier.
                </p>
              )}

              <button
                onClick={handleProceedToPay}
                disabled={!selectedTier}
                className={`mt-6 text-white px-2 py-1 rounded-lg tracking-wide ${
                  selectedTier
                    ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:px-40 flex justify-center">
          <div className="md:w-3/4 p-8 rounded-lg bg-blue-200">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Payment Methods
            </h2>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-blue-50">
                <input
                  defaultChecked
                  type="radio"
                  name="payment"
                  className="mr-4 h-5 w-5"
                />
                <div className="flex-1">
                  <h3 className="font-medium md:text-lg">Credit/Debit Card</h3>
                  <p className="text-xs md:text-md text-gray-600">
                    Pay with Visa, Mastercard, etc.
                  </p>
                  <div className="mt-3 grid grid-cols-4 text-xs gap-2">
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">VISA</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">MC</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">AMEX</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">RUPAY</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-blue-50">
                <input type="radio" name="payment" className="mr-4 h-5 w-5" />
                <div>
                  <h3 className="font-medium md:text-lg">UPI Payment</h3>
                  <p className="text-xs md:text-md text-gray-600">
                    Pay using any UPI app
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">GPay</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">PhonePe</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">Paytm</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">BHIM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-blue-50">
                <input type="radio" name="payment" className="mr-4 h-5 w-5" />
                <div>
                  <h3 className="font-medium md:text-lg">Net Banking</h3>
                  <p className="text-xs text-gray-600">Direct bank transfer</p>
                  <select className="mt-3 md:text-md text-xs w-full p-1 md:p-2 border rounded">
                    <option>Select your bank</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  setShowPaymentMethods(false);
                  setActiveStep(1);
                }}
                className="text-xs md:text-md text-blue-600  cursor-pointer hover:text-blue-800 font-medium"
              >
                Back to order details
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="text-xs cursor-pointer bg-blue-500 hover:bg-blue-600 text-white md:px-6 px-2 py-2 rounded-lg md:text-lg"
              >
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
