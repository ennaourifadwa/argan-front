import React from "react";

function Home() {
  return (
    <>
      <div className="">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: "url('/assets/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              textAlign: "left",
              color: "white",
            }}
          >
            <h1 className=" font-semibold text-5xl mb-10">
              Welcome to Our <br /> Argan heaven
            </h1>

            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
              Made using clean, non-toxic <br /> ingredients, our products are <br /> designed for everyone
            </p>

            <p className=" text-bold text-xl mb-5 text-green-600">Starting at 4.99 Euro</p>

            <button
              className="px-10 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm hover:rounded-lg bg-gradient-to-r from-brown-500 to-black text-white text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
            >
              Learn More
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
