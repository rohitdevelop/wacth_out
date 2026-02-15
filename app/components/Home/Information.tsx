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
            <img
              src="https://images.pexels.com/photos/34341284/pexels-photo-34341284.jpeg"
              alt="img4"
              className="w-full h-full object-cover"
            />
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJCo4rz9vNJl0j09E5p4O9Mt6KMnl1UurbpqKk9hoyg"
              alt="img6"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="row-span-2 h-[420px] overflow-hidden rounded-xl">
            <video
              src="/videos/watch-home.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[200px] overflow-hidden rounded-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJCo4rz9vNJl0j09E5p4O9Mt6KMnl1UurbpqKk9hoyg"
              alt="img7"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    <section>
        <div className="max-w-7xl mx-auto px-6 py-12">
            
        </div>
    </section>
       </div>
  );
};

export default Information;
