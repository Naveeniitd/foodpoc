import { useMemo } from "react";

const SectionCardForm = ({
  group2,
  frameDivPosition,
  frameDivTop,
  frameDivWidth,
  frameDivMarginTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      width: frameDivWidth,
      marginTop: frameDivMarginTop,
    };
  }, [frameDivPosition, frameDivTop, frameDivWidth, frameDivMarginTop]);

  return (
    <div
      className="absolute top-[648px] left-[calc(50%_-_164px)] flex flex-col items-center justify-start gap-[12px] text-left text-xs text-dimgray font-sansation"
      style={frameDivStyle}
    >
      <div className="rounded-xs bg-white flex flex-col pt-0 px-0 pb-2 items-center justify-start">
        <div className="self-stretch flex flex-row py-2.5 px-4 items-center justify-between">
          <b className="relative">Bun</b>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] shrink-0">
            <img
              className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector5.svg"
            />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <img
              className="relative w-[328px] h-px"
              alt=""
              src="/vector-2.svg"
            />
            <div className="w-[328px] flex flex-col p-2.5 box-border items-center justify-center gap-[16px]">
              <div className="w-[296px] flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[13px] h-[13px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke w-[13px] h-[13px]" />
                    <div className="absolute top-[2px] left-[2px] rounded-[50%] bg-dimgray w-[9px] h-[9px]" />
                  </button>
                  <div className="relative">Classic Sesame</div>
                </div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[13px] h-[13px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke w-[13px] h-[13px]" />
                    <div className="absolute top-[2px] left-[2px] rounded-[50%] w-[9px] h-[9px]" />
                  </button>
                  <div className="relative">Whole Wheat Grain</div>
                </div>
                <div className="relative">+ ₹50</div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[13px] h-[13px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke w-[13px] h-[13px]" />
                    <div className="absolute top-[2px] left-[2px] rounded-[50%] w-[9px] h-[9px]" />
                  </button>
                  <div className="relative">Gluten-Free Bun</div>
                </div>
                <div className="relative">+ ₹75</div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt=""
                    src="/group-2.svg"
                  />
                  <div className="relative">Multigrain Bun</div>
                </div>
                <div className="relative">+ ₹125</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xs bg-white flex flex-col pt-0 px-0 pb-2 items-center justify-start">
        <div className="self-stretch flex flex-row py-2.5 px-4 items-center justify-between">
          <b className="relative">Cheese</b>
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/arrow-forward.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <img
              className="relative w-[328px] h-0"
              alt=""
              src="/vector-21.svg"
            />
            <div className="w-[328px] flex flex-col p-2.5 box-border items-center justify-center gap-[16px]">
              <div className="w-[296px] flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt=""
                    src="/group-21.svg"
                  />
                  <div className="relative">Classic Sesame</div>
                </div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt=""
                    src="/group-22.svg"
                  />
                  <div className="relative">Whole Wheat Grain</div>
                </div>
                <div className="relative">+ ₹50</div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt=""
                    src="/group-22.svg"
                  />
                  <div className="relative">Gluten-Free Bun</div>
                </div>
                <div className="relative">+ ₹75</div>
              </div>
              <div className="w-[296px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[13px] h-[13px]"
                    alt=""
                    src={group2}
                  />
                  <div className="relative">Multigrain Bun</div>
                </div>
                <div className="relative">+ ₹125</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm;
