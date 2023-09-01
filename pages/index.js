import OrderCustomizationSection2 from "../components/order-customization-section2";
import SectionCardForm from "../components/section-card-form";
import WarningContainer from "../components/warning-container";
import ThreeDModel from "../components/three-d-model";
const AndroidLarge20 = () => {
  return (
    <div className="relative bg-gray-100 w-full h-full">
      <ThreeDModel />
      <OrderCustomizationSection2 />
      <SectionCardForm group2="/group-22.svg" />
      <WarningContainer />
    </div>
  );
};

export default AndroidLarge20;
