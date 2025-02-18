import React, { useState } from 'react';
import img from "../assets/bottle.png"
import '../input.css'
const FragranceMixer = () => {
  const [fragrances, setFragrances] = useState([
    { brand: '', fragrance: '', percentage: 0 },
    { brand: '', fragrance: '', percentage: 0 },
    { brand: '', fragrance: '', percentage: 0 }
  ]);
  const [scentName, setScentName] = useState('');

  const handlePercentageChange = (index, value) => {
    const newFragrances = [...fragrances];
    newFragrances[index].percentage = parseInt(value);

    const total = newFragrances.reduce((sum, f) => sum + f.percentage, 0);

    if (total > 100) {
      const diff = total - 100;
      for (let i = 0; i < newFragrances.length; i++) {
        if (i !== index) {
          newFragrances[i].percentage -= Math.min(newFragrances[i].percentage, diff);
        }
      }
    }

    setFragrances(newFragrances);
  };

  const totalPercentage = fragrances.reduce((sum, f) => sum + f.percentage, 0);

  return (
    <div className="bg-[#fff] min-h-screen py-8">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl">MIX IT</h1>
          <h1 className="mb-2 text-xl">Have you tried mixing different perfumes?</h1>
        </div>

        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden flex flex-col items-center justify-center  card">
            <img src={img} alt="" className="object-cover w-full h-full" style={{ zIndex: '3' }} />

            <div className="absolute z-10 text-2xl font-bold text-gray-900 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {totalPercentage}%

            </div>

            <div className="wavem" style={{ height: `${totalPercentage}%` }}>
              <div className="wave-container">
                <svg viewBox="0 0 320 20" xmlns="http://www.w3.org/2000/svg" className=" wave-svg" width="296" height="auto">
                  <path d="M0,10 Q50,0 100,10 T200,10 T296,10 L296,20 L0,20 Z" fill="#49597d" />
                </svg>
              </div>
            </div>
          </div>




          <div className="space-y-8">
            <h2 className="mb-6 text-xl font-medium">Choose Two Or More Fragnances</h2>

            {fragrances.map((fragrance, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg"
                    value={fragrance.brand}
                    onChange={(e) => {
                      const newFragrances = [...fragrances];
                      newFragrances[index].brand = e.target.value;
                      setFragrances(newFragrances);
                    }}
                  >
                    <option value="">Select Brand</option>
                    <option value="chanel">Chanel</option>
                    <option value="dior">Dior</option>
                    <option value="gucci">Gucci</option>
                  </select>

                  <select
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg"
                    value={fragrance.fragrance}
                    onChange={(e) => {
                      const newFragrances = [...fragrances];
                      newFragrances[index].fragrance = e.target.value;
                      setFragrances(newFragrances);
                    }}
                  >
                    <option value="">Select Fragrance</option>
                    <option value="no5">No. 5</option>
                    <option value="chance">Chance</option>
                    <option value="sauvage">Sauvage</option>
                  </select>
                </div>


                <div className="relative py-2">
                  <div className="flex justify-center w-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full">
                      {fragrance.percentage}%
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold text-gray-500">0%</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={fragrance.percentage}
                      onChange={(e) => handlePercentageChange(index, e.target.value)}
                      className="w-full h-2 bg-[#E5D1CA] rounded-lg appearance-none cursor-pointer"
                      style={{
                        WebkitAppearance: 'none',
                        '::-webkit-slider-thumb': {
                          WebkitAppearance: 'none',
                          appearance: 'none',
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#FDE7E7',
                          border: '2px solid #E5D1CA',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        },
                      }}
                    />
                    <span className="text-sm font-bold text-gray-500">100%</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4">
              <input
                type="text"
                placeholder="Name Your Scent"
                value={scentName}
                onChange={(e) => setScentName(e.target.value)}
                className="w-full p-3 bg-white border border-gray-200 rounded-lg"
              />
              <button
                className="w-full p-3 text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-600"
                onClick={() => console.log('Added to cart:', { fragrances, scentName })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragranceMixer;