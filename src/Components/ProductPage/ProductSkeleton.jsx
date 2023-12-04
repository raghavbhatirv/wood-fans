import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ProductSkeleton() {
  return (
    <div>
      <div className="shadow-sm shadow-gray-300">
        <div>
          <div>
            <Skeleton height={310} baseColor="#D7D8D5" />
          </div>
          <div className="py-3 px-2">
            <Skeleton height={30} />
          </div>
          <div className="px-2 py-2">
            <Skeleton height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
