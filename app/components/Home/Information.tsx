import React from "react";

const Information = () => {
  return (
    <div>
    <section className="w-full space-y-6">

      {/* Top Banner */}
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src="https://images.ctfassets.net/a9wd67qru8w4/51Gx58WpjHxtxTA434CUjr/acfbdff67fb34b7f39525533a3f5b359/DoW-Rolex_Day-Date-banner-wide_228345RBR.jpg"
          className="w-full h-full object-cover"
          alt="banner"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-10">

        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-4">

          <div className="col-span-2 h-[200px] overflow-hidden rounded-xl">
            <img
              src="https://res.cloudinary.com/wc-photo/image/upload/c_limit,w_4000,g_center/f_auto/q_auto/v1707128729/cms/DISCOVER/Editorial_Articles/feb_2024/vday/V-Day-134-b-(Banner-72x31)-_587eee47c9"
              alt="img2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[200px] overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/34341284/pexels-photo-34341284.jpeg"
              alt="img3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[200px] overflow-hidden rounded-xl">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRYhIY26pCgMlmwJHn63aqo9TLNFBIsGBbw&amp;s"   className="w-full h-full object-cover"             alt="img4"
         ></img>
          </div>

          <div className="col-span-2 h-[200px] overflow-hidden rounded-xl">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/070/495/688/small/a-watch-on-a-green-cloth-photo.jpeg"
              alt="watch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-4">

          <div className="col-span-2 h-[200px] overflow-hidden rounded-xl">
            <img
              src="https://assets-metrostyle.abs-cbn.com/prod/metro.style/media/assets/banner-landscape-tag-heuer-couple-watch.jpg"
              alt="img5"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[200px] overflow-hidden rounded-xl">
            <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zEhy-aNYn8bwFLaQ6Qm5lI9uDBSa1hJ_9w&amp;s" 
              alt="img6"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="row-span-2 h-[420px] overflow-hidden rounded-xl">
            <video
              src="/videos/watch-home2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[200px] overflow-hidden rounded-xl">
            <img src="https://cdn.prod.website-files.com/63b937f7cb69a848fab5e097/675aabc6b7168d05ec87c646_6615321c02cdb7f7495b767d_Number%25201.jpeg" 
              alt="img7"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>

<section className="relative w-full h-[1100px]">

  {/* Background Image */}
  <img
    src="https://www.lepage.fr/75894-zoom_default/hublot-big-bang-unico-dark-green-ceramic-automatic-watch-skeleton-dial-orange-rubber-strap-42-mm.jpg"
    alt="Luxury Watch"
    className="absolute inset-0 w-full h-full pt-10 object-cover"
  />

  {/* Dark Overlay */}
 
  {/* Content */}
  <div className="relative z-10 pt-5 h-full text-center text-white px-6">

 <div className="absolute inset-0 pointer-events-none overflow-hidden">
  <h1
    className="text-[8rem] sm:text-[10rem] md:text-[10rem] font-extrabold whitespace-nowrap text-white"
    style={{ letterSpacing: "-0.05em" }}
  >
    TIME IS LUXURY
  </h1>
</div>

    <div className="flex flex-col items-center justify-center mt-[700px]">

 <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
      Discover precision, elegance and timeless craftsmanship.
      Elevate your style with iconic performance.
    </p>

    <button className="mt-15 px-8 py-3 font-semibold tracking-wider bg-white  text-black hover:bg-gray-200">
      SHOP NOW
    </button>
    </div>

  </div>
 
   
 
</section>

       </div>
  );
};

export default Information;
