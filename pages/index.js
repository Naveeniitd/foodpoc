import OrderCustomizationSection2 from "../components/order-customization-section2";
import SectionCardForm from "../components/section-card-form";
import WarningContainer from "../components/warning-container";
import ThreeDModel from "../components/three-d-model";
const AndroidLarge20 = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[800px] overflow-hidden">
      <ThreeDModel />


      <OrderCustomizationSection2 />
      <SectionCardForm group2="/group-22.svg" />
      <WarningContainer grass="/grass.svg" vector="/vector4.svg" />
      <div className="absolute top-[648px] left-[350px] flex flex-col items-start justify-start gap-[6px]">
        <div className="relative rounded-xs bg-dimgray w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
        <div className="relative rounded-xs bg-lightgray-100 w-1 h-3" />
      </div>
    </div>
  );
};

export default AndroidLarge20;
