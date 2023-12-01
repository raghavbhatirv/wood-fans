import React from "react";
import MaltsevaNina from "./assets/media/Maltseva Nina.webp";
import IvanovAlexey from "./assets/media/Ivanov Alexey.webp";
import IvanovaElena from "./assets/media/Ivanova Elena.webp";
function OurTeam() {
  return (
    <div className="bg-light-gray px-5 py-10">
      <div>
        <h3 className="text-dark text-3xl md:text-4xl py-10">Our team</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div>
            <img src={MaltsevaNina} />
          </div>
          <div>
            <h4 className="text-2xl py-3 md:py-2 font-medium">Maltseva Nina</h4>
            <p className="text-xs font-base text-gray-400">
              Head of Sales Department
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={IvanovAlexey} />
          </div>
          <div>
            <h4 className="text-2xl py-3 md:py-2 font-medium">Ivanov Alexey</h4>
            <p className="text-xs font-base text-gray-400">CEO</p>
          </div>
        </div>
        <div>
          <div>
            <img src={IvanovaElena} />
          </div>
          <div>
            <h4 className="text-2xl py-3 md:py-2 font-medium">Ivanova Elena</h4>
            <p className="text-xs font-base text-gray-400">Creative director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
