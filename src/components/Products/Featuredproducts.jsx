import React, { useState, useEffect } from 'react';

const FeaturedProducts = () => {
  const [category, setCategory] = useState('Trending');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/data/featuredproducts/${category.toLowerCase()}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mx-auto nunito">
      <div className="text-center mt-8 mb-10">
        <h2 className="text-4xl font-bold">Our Featured Products</h2>
      </div>

      {/* Navigation Tabs */}
      <div className="group flex justify-center mb-16 pb-[41px] border-b-2 border-gray-100">
        <ul className="flex space-x-2 text-gray-600">
          {['Trending', 'Top-Rated', 'Best-Sellers', 'Mens-Fashion', 'Womens-Fashion', 'Kids-Fashion'].map((item) => (
            <li
              key={item}
              onClick={() => setCategory(item)}
              className={`relative cursor-pointer text-lg px-3 -mb-[41px] custom-hover ${
                category === item 
                  ? 'active-btn' 
                  : 'hover:text-pink-500 hover:border-pink-500 hover:border-b-[2px]'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Products Grid */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full h-auto object-cover"
              />
              <div className="absolute right-0 top-2 m-4 flex flex-col gap-3">
                <a href="#">
                  <i className="fa-regular fa-eye bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[100ms] hover:bg-gray-700 hover:text-white"></i>
                </a>
                <a href="#">
                  <svg class="bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1zm18 5V4a1 1 0 0 0-1-1h-5v2h4v4h2zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2v4zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1h5zM2 11h20v2H2z"></path></svg>
                </a>
                <a href="#">
                  <i className="fa-regular fa-link bg-white text-gray-600 px-2 py-1.5 text-sm opacity-0 transform translate-x-5 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:translate-x-0 delay-[300ms] hover:bg-gray-700 hover:text-white"></i>
                </a>
              </div>
              <div className="absolute inset-x-0 bottom-20 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-gray-900 nunito text-white py-2 px-4 w-full custom-button">
                  Add To Cart
                </button>
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-pink-500 mb-2">{product.name}</h3>
                <p className="text-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && <div className="text-center mt-8">Loading...</div>}

      {/* View All Categories Button */}
      <div className="text-center mt-8 mb-12">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-5 rounded-md">
          View All Categories
        </button>
      </div>
    </div>
  );
};
// That is amazing WHAATTTT You filtered them too!!!!!!!!!!! That's fucing awesome!! HEHEHEHEHEHEHEEHEH hehehehehe THE DATA IS IN JSONs Nice baby girl. I wanna see the animation code Got It! Amazing i think teko kuch jyada hi pasand aa gyi h Obviously ek to bobo ne bnai that;s the biggest thing. Second the animations because wo mai bhi seekh rha hu to it's new to me. ohhhhhhkieeeeeeeee okay see here i want the center dot to be there when the categorie's data is rendered. ..So you basically need the centered dot to bethere na not yes Okie let's see... Show me it's codeji Done! find me an icon too the box scanner Okya let's see nahhh IT's a QR code scanner na? Ya fir kuch yes but i want the same one Okie Let's see in fontawesome nai to kahi or se svg hai ek or jgah w8 Lo ji Arigatou :* Yayyyyyy Kissi mili!!!! pervertHu wo to hu hehe noooooobdeeeeeeeeee Boooooooooobdddeeeeee hahahakya karu tera Sex kro mera SEXX kisi ne pdh liye na agr ye cmnt HMARI to izzat gyi.... BWahahahhaha Saare comments ko notepad me save kr liyo  KYUuuuuuu Memories hai SEXHANJIIIII   whattttt?????? hehehehehehe Chl ab meri website dekh jo maine aaj ro pit ke bnai hai AWWWWWWWW dikhao AAo aaai
export default FeaturedProducts;
