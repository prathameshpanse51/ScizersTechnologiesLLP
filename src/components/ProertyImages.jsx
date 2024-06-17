import React from "react";

export default function ProertyImages() {
  const images = [
    "https://ik.imagekit.io/qz6ubt34n4/harbour-lights-11-1110x623.webp?updatedAt=1718649997935",
    "https://ik.imagekit.io/qz6ubt34n4/cc-quantum-of-the-seas.jpg?updatedAt=1718649658485",
    "https://ik.imagekit.io/qz6ubt34n4/suiimg?updatedAt=1718650090792",
    "https://ik.imagekit.io/qz6ubt34n4/suimng2?updatedAt=1718650128836",
  ];
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://ik.imagekit.io/qz6ubt34n4/harbour-lights-1-1110x623.webp?updatedAt=1718649960982"
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
