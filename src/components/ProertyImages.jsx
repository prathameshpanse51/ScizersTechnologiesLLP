import React from "react";

export default function ProertyImages() {
  const images = [
    "https://townbridges.com/wp-content/uploads/2023/07/harbour-lights-11-1110x623.webp",
    "https://media-cdn.tripadvisor.com/media/photo-s/15/3b/32/2b/cc-quantum-of-the-seas.jpg",
    "https://s3-alpha-sig.figma.com/img/9774/c7c4/eb00973257c63ccc544b2553b0bcc8fc?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IGx5jxQjvMsLlPMNwvcOZrEgcCcgd-uQqqg5Sy4Fx645WgIY4sK~bQ9I-5TE30rlWDOz7TEhGdO5D~HWVFaqz7TJ-QO5JAx4Kay76Hkmr6G-~sTCPjXaz7a9Hj5kwwq5DMB~QyC4F62W8XVpUJmB4HtO9mlAev5BYuTalYJza21szHiSqtDd-lqYNa7NR6Aqvvf1hmFBr8CWGfgkP8vXgRnJWVfsZrHrfnSR0oYWWkH8fC2ohFPCARMYFVn2UVm0elFUhq~K4GvXpxyPlr~Udlu1SpDe5U2unIawzwlFiPeITQGOhA08JMWnbZzUeFxx030M50CzgPfV9VLvwb~vsQ__",
    "https://s3-alpha-sig.figma.com/img/fe74/8d0c/ff4d72c2404d943f7dc586b7bf15d714?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JW-rFRrUnNKh5J5XrSMyhB24ztZxYawlBxmMQaYACbq~eI9ZluEMmKcY2m84u3r6FqlkhN5pVs789-pclfzT8YFqWL2uKqRPtLzprP7Vl1LcKsefIC6QAmqBYGgOsAR0lCmN0KhbPIhH3IRAAFh6Yku-a5opEkEdUA2kmSGI8eHBkl2WQ5zWt-ECWvonS6ijg4UjpH~Eyswyn6efNgwuiYJzIGIZeUtONBuGYUYvZxR1bk9zrpiGJZXk9cY9nD2vl3fk6ZPlSr9r5ymEwb7BiK1W6aSOq2OXUQBYpzVpxLMDfZeg8iVwDvS3ISTASDA4qoQajuEU2ODird33SjXA6w__",
  ];
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://townbridges.com/wp-content/uploads/2023/07/harbour-lights-1-1110x623.webp"
            className="w-full rounded-2xl px-0 md:mx-40"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 md:left-44 right-5 md:right-44 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className="md:mx-40 flex flex-row justify-evenly gap-1 md:gap-10 md:my-4">
        {images.map((e, idx) => {
          return (
            <>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <div key={idx}>
                <button
                  className=""
                  onClick={() =>
                    document.getElementById(`my_modal_${idx}`).showModal()
                  }
                >
                  <img
                    src={e}
                    alt=""
                    className="w-[86px] md:w-[270px] h-[55px] md:h-[170px] rounded"
                  />
                </button>
                <dialog id={`my_modal_${idx}`} className="modal">
                  <div className="modal-box md:max-w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <img
                      src={e}
                      alt=""
                      className="md:w-[100vw] md:h-[100vh] px-4"
                    />
                  </div>
                </dialog>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
