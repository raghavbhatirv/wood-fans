import React from "react";

function ContactUs() {
  return (
    <div className="py-5 flex flex-col md:flex-row gap-5">
      <div className="md:w-2/5">
        <h3 className="text-dark text-4xl ">Contact Us</h3>
      </div>
      <div className="md:w-3/5">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base md:text-lg text-gray-600 py-">
            Our team of experienced designers and craftsmen will be happy to
            create for you unique furniture that reflects your style and
            preferences.
          </p>
          <div className="flex gap-5 text-xs">
            <input
              type="text"
              name="name"
              placeholder="What is your name?"
              className="w-1/2 border-b border-gray-400 p-2 focus:outline-none"
            />
            <input
              type="tel"
              name="number"
              placeholder="+7(_ _ _)_ _ _-_ _ _"
              className="w-1/2 border-b border-gray-400 p-2 focus:outline-none"
            />
          </div>
          <div className="text-xs">
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              className="w-full border-b border-gray-400 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className=" flex justify-between items-center py-8 gap-4">
          <div className="flex gap-2">
            <input type="checkbox" />
            <label htmlFor="checkbox" className="text-sm">
              I consent to the processing of personal data
            </label>
          </div>
          <div>
            <button className="px-8 py-2 md:px-10 md:py-3 bg-primary-yellow hover:bg-yellow-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
