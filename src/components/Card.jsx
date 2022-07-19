import React from "react";

const Card = () => {
  return (
   <div className="as">
     <div>
    <h1 class="text-center text-white p-12 mb-12">Tailwind CSS Card</h1>
    <div class="max-w-md mx-auto px-4">
      <div class='relative m-0 shadow-lg flex bg-white'>
        <div class='flex-no-shrink'>
          <img alt='' class='w-64 h-64 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900' />
        </div>
        <div class='flex-1 card-block relative'>
          <div class="p-6">
            <h4 class='font-medium text-2xl mb-3'>Card title</h4>
            <p class='leading-normal'>Magni inventore repellat dignissimos eveniet dolore ex sit illo adipisci accusamus quos.</p>
            <p class="text-sm text-grey block mt-6">Designation title</p>
            <a class='-m-4 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker absolute pin-t pin-r' href='#'>
              <i class='text-xl fa fa-plus'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
   </div>
  );
};

export default Card;
