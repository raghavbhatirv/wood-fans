function App() {
  return (
    <>
      {/* Font setup test */}
      <div className="flex flex-col gap-4 bg-gray-700  items-center justify-center h-screen font-Poppins">
        <h1 className="text-3xl font-bold text-white ">Hello world!</h1>

        {/* // Color test // */}
        <div className="flex justify-center items-center text-center gap-5">
          <div className="h-20 w-20 bg-primary-yellow rounded-md">
            <p> Color: primary-yellow</p>
          </div>
          <div className="h-20 w-20 bg-dark rounded-md">
            <p>Color: dark</p>
          </div>
          <div className="h-20 w-20 bg-dark-gray rounded-md">
            <p>Color: dark-gray</p>
          </div>
          <div className="h-20 w-20 bg-light-gray rounded-md">
            <p> Color: light-gray</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
