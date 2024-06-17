import React from "react";

export default function Landing() {
  return (
    <>
      <div className="bg-cover md:min-h-screen bg-no-repeat bg-[url(https://ik.imagekit.io/qz6ubt34n4/phoneLandingImg.png?updatedAt=1718628219498)] md:bg-[url(https://ik.imagekit.io/qz6ubt34n4/landingImg.jpg?updatedAt=1718620101765)]">
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="mx-auto hero-content text-white">
          <div className="">
            <div className="navbar bg-transparent md:gap-[400px] mt-4">
              <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                  <svg
                    width="166"
                    height="22"
                    viewBox="0 0 166 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0893 10.9004C33.4092 7.64807 33.2959 5.12089 31.7492 3.31525C30.2026 1.51679 27.2854 0.61038 22.9994 0.61038H8.48309L7.17183 3.86987H17.1667C22.2653 3.86987 23.7422 6.48499 21.9828 10.816C20.968 13.3217 20.0682 15.6263 17.9461 16.6511C16.0037 17.5917 13.9984 17.8663 10.4291 17.8663L5.80651 17.8573L9.25903 9.42499H4.90502L0 21.4291H13.1562C16.8441 21.4291 19.7561 21.0773 21.9043 20.3773C24.2566 19.6001 26.363 18.3222 28.2252 16.5452C29.9567 14.8509 31.2453 12.9717 32.0893 10.9004ZM122.816 0.588841L122.819 0.604995H117.429L96.7212 20.5514L104.815 0.608585H95.9382L85.2145 9.25628L79.694 13.9229H79.4429L82.041 7.12397L78.8744 0.608585H69.9571L61.8507 20.5891L57.1793 0.608585H47.4059L25.8224 21.4273H31.2174L36.7345 15.9835H50.3336L51.4164 21.4273H65.8664L71.0888 8.55987C71.3521 7.91371 71.6032 7.17064 71.8491 6.33961C71.8735 7.01089 72.0513 7.72525 72.3722 8.4773L76.9668 19.2106H77.7445L90.8885 8.51499C91.382 8.11294 92.1283 7.38781 93.1239 6.33961C92.6147 7.31064 92.259 8.04653 92.0515 8.55987L86.8292 21.4273H96.3689L96.3707 21.4219H106.428L111.884 15.9529H126.01L127.143 21.4219H132.108L127.269 0.587046H122.816V0.588841ZM39.5767 13.1278L48.1836 4.65423L49.7372 13.1278H39.5767ZM114.735 13.0973L123.572 4.24141L125.408 13.0973H114.735ZM165.843 0.570892H151.196C146.907 0.570892 143.252 1.4773 140.246 3.28115C137.236 5.08499 135.069 7.61935 133.747 10.8735C132.905 12.9411 132.666 14.8347 133.027 16.5201C133.454 18.3042 134.518 19.5858 136.244 20.3611C137.813 21.0576 140.451 21.4129 144.139 21.4129H157.269L158.582 18.1068H151.184C147.621 18.1068 145.245 17.6329 144.061 16.6888C142.769 15.6676 142.913 13.3019 143.921 10.7891C145.688 6.45089 149.376 3.74782 154.474 3.74782H160.207L158.893 7.01269H163.243L165.843 0.570892Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </a>
                <div className="dropdown ml-[35px] md:ml-0">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="right-0 menu menu-sm dropdown-content mt-3 z-[1] p-6 py-10 shadow bg-base-100 rounded-box w-64 h-[40vh]"
                  >
                    <li>
                      <a className="poppins-bold btn rounded-lg tracking-wider py-[12px] px-[44px] border-[3px] border-[#17ABFF] text-[#17ABFF] text-sm font-bold bg-transparent hover:bg-[#17ABFF] hover:border-[#17ABFF] hover:text-white hover:transition hover:duration-1000">
                        ENQUIRE NOW
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex"></div>
              <div className="navbar-end">
                <a className="hidden md:block poppins-bold btn rounded-lg tracking-wider py-[12px] px-[44px] border-[3px] border-[#17ABFF] text-[#17ABFF] text-sm font-bold bg-transparent hover:bg-[#17ABFF] hover:border-[#17ABFF] hover:text-white hover:transition hover:duration-1000">
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            <main className="flex flex-col md:flex-row items-center justify-between mt-2 md:mt-28 md:mx-6">
              <div className="flex flex-col gap-6">
                <h1 className="oswald-500 uppercase text-4xl md:text-5xl leading-[50px] md:leading-[60px]">
                  Harbour Lights <br /> de{" "}
                  <span className="text-[#17ABFF]">GRESOGONO</span>
                </h1>
                <p className="poppins-bold text-sm md:text-2xl">
                  1, 2 & 3 Bedrooms Seaside Apartments <br /> in Dubai Maritime
                  City
                </p>

                <p
                  className="poppins-400 text-sm w-[300px] py-[10px] px-4 border-l-4 border-[#17ABFF] md:mt-8"
                  style={{ background: "#00000042" }}
                >
                  Rental Returns of{" "}
                  <span className="font-semibold"> UPTO 11%** </span>
                </p>

                <p
                  className="poppins-400 text-sm w-[300px] py-[10px] px-4 border-l-4 border-[#17ABFF]"
                  style={{ background: "#00000042" }}
                >
                  Capital Appreciation of{" "}
                  <span className="font-semibold"> UPTO 32%** </span>
                </p>
              </div>

              <div
                className="w-fit rounded-2xl mt-10 md:mt-0"
                style={{
                  background: "#5790BE1F",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex flex-col gap-2 py-8 px-8 pb-0">
                  <p className="poppins-400 text-sm ">PRICING STARTS FROM</p>
                  <p className="oswald-500 text-5xl">$ 425,000</p>
                  <p className="oswald-500 font-normal text-2xl my-4">
                    AED 1.3 Million
                  </p>
                  <button className="poppins-bold text-sm tracking-wider py-[12px] px-[50px] bg-[#17ABFF] rounded mb-10">
                    GET A PRESENTATION
                  </button>
                </div>

                <p
                  className="text-[#98C5E8] text-sm flex justify-center p-[15px]"
                  style={{
                    borderTop: "1px solid #0000004D",
                    background: "#5790BE1F",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  Get an Expert’s Presentation of Real <br /> Estate in Dubai
                  for Life and investment
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
