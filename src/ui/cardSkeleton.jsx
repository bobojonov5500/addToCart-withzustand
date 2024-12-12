import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="">
      <div>
        <Skeleton
          highlightColor="black"
          borderRadius={3}
          className="w-full h-[170px]"
        />
      </div>
      <div className="flex justify-between max-w-sm">
        <Skeleton highlightColor="black" width={20} />
        <Skeleton highlightColor="black" width={20} />
      </div>
      <div>
        <Skeleton highlightColor="black" count={4} />
      </div>
      <div>
        <Skeleton highlightColor="black" width={30} />
      </div>
    </div>
  );
};

export default CardSkeleton;
