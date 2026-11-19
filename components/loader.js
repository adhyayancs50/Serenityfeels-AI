const Spinner2 = () => (
  <>
    <div className="loader"></div>
    <style jsx>{`
      .loader {
        width: 72px; /* Increased from 48px */
        height: 72px; /* Increased from 48px */
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 3px solid; /* Optionally adjust to 4px or 5px for a thicker border */
        border-color: #FFF #FFF transparent transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
      .loader::after,
      .loader::before {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 3px solid; /* Optionally adjust as above */
        border-color: transparent transparent #FF3D00 #FF3D00;
        width: 60px; /* Increased from 40px */
        height: 60px; /* Increased from 40px */
        border-radius: 50%;
        box-sizing: border-box;
        animation: rotationBack 0.5s linear infinite;
        transform-origin: center center;
      }
      .loader::before {
        width: 48px; /* Increased from 32px */
        height: 48px; /* Increased from 32px */
        border-color: #FFF #FFF transparent transparent;
        animation: rotation 1.5s linear infinite;
      }
          
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } 
      @keyframes rotationBack {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
          
    `}</style>
  </>
);

export const FullScreenLoader = () => {
  return (
    <>
      <div className="h-screen bg-[#010F19] flex flex-col w-screen items-center justify-center px-10">
        {/* <img
          src={"/images/logo.png"}
          alt=""
          className="max-w-[500px] w-full -mt-24"
        /> */}
          <Spinner2/>
        {/* <p>Loading</p>
        <div className="max-w-[500px] w-full mt-5 sm:-mt-5">
        </div> */}
      </div>
    </>
  );
};
