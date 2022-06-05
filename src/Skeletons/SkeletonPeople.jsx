import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonPeople = () => {
  return (
    <div className='ticket relative flex items-center flex-wrap w-full h-14 overflow-hidden'>
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <SkeletonElement type='h-6 w-6 rounded-full mb-1 mr-1' />
      <Shimmer />
    </div>
  );
};

export default SkeletonPeople;
