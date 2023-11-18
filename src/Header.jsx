import React from "react";
import instagram from "./assets/instagram.webp";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <>
      <div class="flex items-center justify-center ">
        <div class="gold-gradient">
          <h1 class="text-4xl font-bold gold-gradient-text stroke-1-black">
            A Billion Dollar Page
          </h1>
        </div>
      </div>
      <div class="flex items-center justify-center ">
        <div class="gold-gradient">
          <h1 class="text-2xl font-bold gold-gradient-text stroke-1-black">
            $1 per page
          </h1>
        </div>
        <div class="gold-gradient">
          <div class="text-sm font-bold gold-gradient-text py-3 px-20">
            <div className="py-2 px-4 rounded-md border border-black text-gray-950">
              Sold : 25452
              <br />
              Available: 986532
            </div>
          </div>
        </div>
        <div class="gold-gradient">
          <h1 class="text-2xl font-bold gold-gradient-text stroke-1-black">
            1 Billion pixels
          </h1>
        </div>
      </div>
      <div class="flex items-center justify-center ">
        <div class="gold-gradient">
          <h1 class="text-2xl font-bold gold-gradient-text stroke-1-black">
            Be part of internet history for more than 50 years
          </h1>
        </div>
      </div>
      <div class="flex items-center justify-center bg-yellow-400 w-full">
        <div class="container">
          <div className="px-60">
            <nav class="bg-gray-800 p-2 w-full">
              <div class="container mx-auto flex justify-between items-center">
                <div class="text-white text-lg font-bold">
                  <div className="py-2 px-2 rounded-md border bg-white text-gray-950 flex align-middle justify-center">
                    <Icon className="side-icons" icon="skill-icons:instagram" />
                    <h2>sahad_azod</h2>
                  </div>
                </div>
                <ul class="flex space-x-4">
                  <li>  
                    <a href="#" class="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Buy Pixels
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      About
                    </a>
                  </li>
                </ul>
                <div class="text-white text-lg font-bold">
                  <Icon className="side-icons" icon="skill-icons:instagram" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
