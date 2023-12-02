import React from "react";

function ContactUs() {
  return (
    <div className="py-5 flex gap-5">
      <div className="w-2/5">
        <h3 className="text-dark text-4xl ">Contact Us</h3>
      </div>
      <div className="w-3/5">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-lg">
            Our team of experienced designers and craftsmen will be happy to
            create for you unique furniture that reflects your style and
            preferences.
          </p>
          <div className="flex gap-5 text-xs">
            <input
              type="text"
              name="name"
              placeholder="What is your name?"
              className="w-1/2 border-b border-gray-400 p-2"
            />
            <input
              type="tel"
              name="number"
              placeholder="+7(_ _ _)_ _ _-_ _ _"
              className="w-1/2 border-b border-gray-400 p-2"
            />
          </div>
          <div className="text-xs">
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              className="w-full border-b border-gray-400 p-2"
            />
          </div>
        </div>
        <div className="py-8">
          <div>
            <input type="checkbox" />
            <label htmlFor="checkbox">
              I consent to the processing of personal data
            </label>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
