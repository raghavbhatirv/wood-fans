import React from "react";
import { useState } from "react";

function AddressForm({ handleSubmit }) {
  const [type, setType] = useState("Individual");
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl pb-4">Address</h2>
      </div>
      <div className="flex rounded-lg bg-gray-200 p-3 justify-between font-medium gap-5">
        <div
          className={`w-1/2 p-2 items-center flex justify-center rounded-lg transition-colors duration-500 cursor-pointer ${
            type === "Individual" ? "bg-white" : ""
          }`}
          onClick={() => setType("Individual")}
        >
          <p>Individual</p>
        </div>
        <div
          className={`w-1/2 p-2 items-center flex justify-center rounded-lg transition-colors duration-500 cursor-pointer ${
            type === "Corporate" ? "bg-white" : ""
          }`}
          onClick={() => setType("Corporate")}
        >
          <p>Corporate</p>
        </div>
      </div>
      <div className="px-2 py-5">
        <form className="space-y-4" onSubmit={(e) => submitForm(e)}>
          {type === "Individual" ? (
            <div className="flex justify-between gap-3">
              <div className="w-1/2 pr-2">
                <label htmlFor="fname" className="block font-medium">
                  First Name:*
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full p-2 rounded-lg border border-gray-400 my-2"
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="lname" className="block font-medium">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="w-full p-2 rounded-lg border border-gray-400 my-2"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="pr-2">
                <label htmlFor="fname" className="block font-medium">
                  Company Name:*
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full p-2 rounded-lg border border-gray-400 my-2"
                  required
                />
              </div>
            </div>
          )}

          <label htmlFor="phone" className="block font-medium">
            Phone Number:*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 rounded-lg border border-gray-400 my-2"
            required
          />

          <div className="flex justify-between gap-3">
            <div className="w-1/2 pr-2">
              <label htmlFor="state" className="block font-medium">
                State:*
              </label>
              <select
                id="state"
                name="state"
                className="w-full p-2 rounded-lg border border-gray-400 my-2 overflow-auto"
                required
              >
                <option value="andhra_pradesh">Andhra Pradesh</option>
                <option value="arunachal_pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal_pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya_pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil_nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar_pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west_bengal">West Bengal</option>
              </select>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="city" className="block font-medium">
                City:*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full p-2 rounded-lg border border-gray-400 my-2"
                required
              />
            </div>
          </div>

          <label htmlFor="pin" className="block font-medium">
            Pin Code:*
          </label>
          <input
            type="text"
            id="pin"
            name="pin"
            className="w-full p-2 rounded-lg border border-gray-400 my-2"
            required
          />

          <label htmlFor="address" className="block font-medium">
            Full Address:*
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            cols="50"
            className="w-full p-2 rounded-lg border border-gray-400 my-2"
            required
          ></textarea>

          <input
            type="submit"
            value="Proceed"
            className="w-full p-2 rounded-lg bg-dark text-light-gray hover:cursor-pointer font-medium text-lg"
          />
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
