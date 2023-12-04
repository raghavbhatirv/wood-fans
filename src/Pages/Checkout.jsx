import React, { useState } from "react";

function Checkout() {
  const [type, setType] = useState("Individual");
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="w-4/6 bg-white rounded-3xl p-10 mt-5">
        <div>
          <h2 className="font-semibold text-2xl">Address</h2>
        </div>
        <div className="flex rounded-lg bg-gray-200 p-3 justify-between font-medium">
          <div className="bg-white p-2 w-1/2 items-center flex justify-center rounded-lg">
            <p>Individual</p>
          </div>
          <div className="flex w-1/2 p-2 items-center justify-center">
            <p>Corporate</p>
          </div>
        </div>
        <div>
          <form>
            <label htmlFor="fname">First Name:</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label htmlFor="lname">Last Name:</label>
            <br />
            <input type="text" id="lname" name="lname" />
            <br />
            <label htmlFor="phone">Phone Number:</label>
            <br />
            <input type="tel" id="phone" name="phone" />
            <br />
            <label htmlFor="state">State:</label>
            <br />
            <select id="state" name="state">
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
            <br />
            <label htmlFor="city">City:</label>
            <br />
            <input type="text" id="city" name="city" />
            <br />
            <label htmlFor="pin">Pin Code:</label>
            <br />
            <input type="text" id="pin" name="pin" />
            <br />
            <label htmlFor="address">Address:</label>
            <br />
            <textarea id="address" name="address" rows="4" cols="50"></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
