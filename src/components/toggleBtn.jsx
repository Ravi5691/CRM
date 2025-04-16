import React from "react";

const ToggleBtn = () => {
  return (
    <div>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="relative w-13 h-7 peer-focus:outline-none rounded-full peer dark:bg-[#ffffff20] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black  after:rounded-full after:h-6 after:w-6 after:transition-all dark:peer-checked:bg-white"></div>
      </label>
    </div>
  );
};

export default ToggleBtn;
