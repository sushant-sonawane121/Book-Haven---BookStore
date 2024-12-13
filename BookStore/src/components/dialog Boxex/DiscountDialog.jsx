import React, { useState } from "react";
import ReactDOM from "react-dom";

const DiscountDialog = ({
  isOpen,
  onClose,
  onUpdate,
  bookId,
  price,
  isDiscount,
}) => {
  const [discount, setDiscount] = useState(0);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
        >
          &times;
        </button>

        {/* Dialog Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Set Discount
          </h3>
          <div className="mb-4">
            <form>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Discount Percentage
              </label>

              <input
                type="number"
                id="discount"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                min="0"
                max="100"
              />
            </form>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => {
                onUpdate(discount, bookId, price);
                onClose();
              }}
              className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {isDiscount > 0 ? "Update" : "Add"}
            </button>
            {isDiscount != 0 ? (
              <button
                onClick={() => {
                  onUpdate(100, bookId, price);
                  onClose();
                }}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Remove
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DiscountDialog;
