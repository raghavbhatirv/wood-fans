import React from "react";

function PhotoGallery() {
  return (
    <div className="py-5">
      <div>
        <h3 className="text-dark text-4xl py-5">Photo gallery of our works</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-5">
          <img
            className="object-cover h-96"
            src="https://api.woodfans.ru/storage/uploads/images/rMIeWQJa0x5ziXS8T8zc3JzJ4zU00QwKiiO7Ras8.webp"
          />
          <img
            className="object-cover"
            src="https://api.woodfans.ru/storage/uploads/images/8y4zCOBOxISNI0pXJNpjOasGGX8MsJCdfVor2QT2.webp"
          />
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="object-cover "
            src="https://api.woodfans.ru/storage/uploads/images/5FswCGgqfvwA1iwJYJiSfQX3QVdZerp7FsnbFGj3.webp"
          />
          <img
            className="object-cover h-96"
            src="https://api.woodfans.ru/storage/uploads/images/hOwEAdHvEAQxy5wH6ukJRby5iHyCiwaBOh9BETFT.webp"
          />
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="object-cover h-96"
            src="https://api.woodfans.ru/storage/uploads/images/S4cpikgZTKjIQPyNLorFzRj7MaMlNM0aaIpBgNWx_cropped_1688_1658.webp"
          />
          <img
            className="object-cover"
            src="https://api.woodfans.ru/storage/uploads/images/5KGsaJ5aqzJQBazNm9VJt5YZUtUeSAqZkka6Gxmo.webp"
          />
        </div>
        <div className="flex flex-col gap-10">
          <img
            className="object-cover h-64"
            src="https://api.woodfans.ru/storage/uploads/images/oc2lPjhjTIeaTxjj0YiC7B48C8w5B14B8wFeHA0A_cropped_1278_1279_widened_900.webp"
          />
          <img
            className="object-cover h-96"
            src="https://api.woodfans.ru/storage/uploads/images/ChiY8HjDlDGZNGqOgBjjU2SK1vMuetWXJ2VUTIex_widened_900.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
