// import React from 'react'

const Cards = () => {
  return (
    <section className="container mx-auto w-full h-full px-20 py-28 flex justify-between items-center gap-4">
      <div className="shadow-lg bg-white rounded-md">
        <div className="text-center flex py-16 px-12 items-center flex-col">
          <img src="src/assets/img/resim1.svg" alt="" />
          <div className="pt-12">
          <p className="text-primary-text-color font-semibold text-xl">Her Siparişinize Bir Kampanya</p>
          <p className="text-secondary-text-color mt-2">
            Getirde vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg bg-white rounded-md">
        <div className="text-center py-16 px-12 flex items-center flex-col">
          <img src="src/assets/img/resim1.svg" alt="" />
          <div className="pt-12">
          <p className="text-primary-text-color font-semibold text-xl">Dakikalar İçinde Kapınızda</p>
          <p className="text-secondary-text-color mt-2">
            Getirle siparişiniz dakikalar içinde kapınızda.
          </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg bg-white rounded-md">
        <div className="text-center py-16 px-12 flex items-center flex-col">
          <img src="src/assets/img/resim1.svg" alt="" />
          <div className="pt-12">
          <p className="text-primary-text-color font-semibold text-xl">Binlerce Çeşit Mutluluk</p>
          <p className="text-secondary-text-color mt-2">
            Getirde binlerce çeşit arasından seçiminizi yapabilirsiniz.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
