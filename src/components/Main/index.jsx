import React from "react";
import a from "../../assets/a.jpg";
import product from "../../assets/product.png";
import product2 from "../../assets/product2.png";
import logo from "../../assets/logo.png"
import product3 from "../../assets/product3.png"
function Main() {
  return (
    // <div className='container mx-auto max-w-[1344px]'>
    //     <div className='flex flex-col gap-[44px] p-5 py-6 min-h-screen h-auto justify-center md:p-0 lg:px-10 lg:pt-10 lg:pb-20 lg:min-h-fit lg:flex-row lg:justify-between lg:gap-5 overflow-hidden'></div>
    // </div>
    <div>
      <header>
        <div className="flex-none">
          <div className="container mx-auto px-4 m-auto"></div>
        </div>
      </header>
      <div>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src={logo}
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src={logo}
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
        {/* <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              Warnjai
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              Warnjai
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div> */}
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* สร้าง Card เมนูอาหาร */}
          {/* <div className="bg-gray-300 rounded-lg shadow-md p-4">
            <h2 className="text-gray-700 text-xl text-center font-semibold mb-2">Jelly for kid</h2>
            <img src="https://image.makewebcdn.com/makeweb/m_1920x0/r9viYeHoP/BComplex/DHM_012_B_Complex_Jelly_for_kids_02_0.jpg?v=202311151122" alt="pizzs" className='w-[300px] m-auto mt-4'/>
            <p className='text-gray-700 mt-4 text-center'>เด็กกินได้ผู้ใหญ่กินแล้วตาย</p>
            <div><button className="btn btn-success ml-[200px] mt-4">Buy</button></div>
          </div> */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[300px] m-auto mt-4"
                // src="https://image.makewebcdn.com/makeweb/m_1920x0/r9viYeHoP/BComplex/DHM_012_B_Complex_Jelly_for_kids_02_0.jpg?v=202311151122"
                src={product}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Warnjai Product
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>สูตรหวานน้อย</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Food</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button className="btn btn-outline btn-success">Buy Now</button>
            </div>
          </div>
          {/* <div className="bg-gray-300 rounded-lg shadow-md p-4">
                <h2 className="text-gray-700 text-xl font-semibold mb-2 text-center">Jelly for Adult</h2>
                <img src="https://itp1.itopfile.com/ImageServer/z_itp_01062021bs0t/0/0/contentimg04z-z1556330106275.webp" alt="humburger" className='w-[300px] m-auto mt-4'/>
                <p className='text-gray-700 mt-4 text-center'>ผู้ใหญ่กินได้เด็กกินดี</p>
                <div><button className="btn btn-success ml-[200px] mt-4">Buy</button></div>
            </div> */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[300px] m-auto mt-4"
                //src="https://image.makewebcdn.com/makeweb/r_409x409/r9viYeHoP/CalGrow/DHM_011_Cal_Grow_Plus_Jelly_Strip_02_0.jpg"
                src={product2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Warnjai Product
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>สูตรหวานปกติ</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Food</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button className="btn btn-outline btn-success">Buy Now</button>
            </div>
          </div>
          {/* <div className="bg-gray-300 rounded-lg shadow-md p-4">
            <h2 className="text-gray-700 text-xl font-semibold mb-2 text-center">Jelly for Everyone</h2>
            <img src="https://image.makewebeasy.net/makeweb/0/NDZT2k3Ln/2020_Test/DHM_003_Jelly_Strips_01.jpg" alt="sushi" className='w-[300px] m-auto mt-4'/>
            <p className='text-gray-700 mt-4 text-center'>เด็กกินดีผู้ใหญ่กินได้</p>
            <div><button className="btn btn-success ml-[200px] mt-4">Buy</button></div>
          </div> */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-[300px] mt-4"
                //src="https://image.makewebcdn.com/makeweb/r_409x409/r9viYeHoP/BraindyJellyStrip/DBM_002_Braindy_Jelly_Strip_02_0.jpg?v=202311151122"
                src={product3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Jelly for everyone
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>เด็กกินดีผู้ใหญ่กินได้</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Food</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button className="btn btn-outline btn-success">Buy Now</button>
            </div>
          </div>
          {/* เพิ่ม Card เมนูอาหารเพิ่มเติมตามต้องการ */}
        </div>
      </div>
    </div>
  );
}

export default Main;
