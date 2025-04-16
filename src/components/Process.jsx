import Image from "next/image";

export default function ProcessSteps() {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md mt-14">
      <div className="grid grid-cols-4 gap-4">
        {/* Step 1 */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-[#ffe6df] rounded-xl flex items-center justify-center p-4">
            <Image 
              src="/add-product.svg" 
              width={40} 
              height={40} 
              alt="Select Product"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Select Product
          </span>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-[#e6f3ff] rounded-xl flex items-center justify-center p-4">
            <Image 
              src="/cart.svg" 
              width={40} 
              height={40} 
              alt="Add To Cart"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Add To Cart
          </span>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-[#fff2e6] rounded-xl flex items-center justify-center p-4">
            <Image 
              src="/checklist.svg" 
              width={40} 
              height={40} 
              alt="Check Out"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Check Out
          </span>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-[#e6ffe6] rounded-xl flex items-center justify-center p-4">
            <Image 
              src="/delivery.svg" 
              width={40} 
              height={40} 
              alt="Fast Delivery"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            Fast Delivery
          </span>
        </div>
      </div>
    </div>
  );
}