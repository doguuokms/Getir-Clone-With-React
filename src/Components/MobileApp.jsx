// import React from 'react'

const MobileApp = () => {
  return (
    <section className="MobileApp relative flex justify-between sm:container sm:mx-auto mt-20 mb-20 ">
      <div className="MobileAppCard bg-primary-brand-color flex justify-between w-full h-full pt-20 rounded-lg">
      <div className="flex flex-col pl-32">
        <h2 className="text-white font-bold text-3xl"> Getiri indirin!</h2>
        <span className="text-white text-xl font-semibold ">
          İstediğiniz ürünleri dakikalar içerisinde kapınıza getirelim.
        </span>
        <div className="mt-12">
          <ul className="flex">
            <li className="mr-3">
              <a href="">
                <img src="src/assets/img/appstore.svg" alt="" />
              </a>
            </li>
            <li className="mr-3">
              <a href="">
                <img src="src/assets/img/googleplay.svg" alt="" />
              </a>
            </li>
            <li className="mr-3">
              <a href="">
                <img src="src/assets/img/appgallery.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="h-auto max-lg:w-56" src="src/assets/img/phone.png" alt="" />
      </div>
    </section>
  );
};

export default MobileApp;
