const WarningContainer = () => {
  return (
    <div className="absolute top-[23.5px] left-[calc(50%_-_158px)] rounded-xs bg-gray-300 text-left text-xs text-white font-sansation border-[0.5px] border-solid border-lightgray-300">
      <div className="flex flex-col py-3 px-6">
        <div className="w-[264px] flex flex-row items-center justify-between">
          <b className="relative">Classic Burger</b>
          <div className="flex flex-row items-center justify-end gap-[12px] text-limegreen">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/grass.svg"
              />
              <b className="relative">1226 Cal</b>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px] text-steelblue">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/monitor-weight.svg"
              />
              <b className="relative">300 gm</b>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-[312px] h-[60px] flex flex-col pt-0 px-0 pb-3 items-start justify-start relative text-khaki">
        <div className="my-0 mx-[!important] absolute top-[12px] left-[24px] w-[264px] flex flex-col items-start justify-start gap-[6px] z-[0]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/report-gmailerrorred.svg"
            />
            <b className="relative">Warning</b>
          </div>
          <div className="self-stretch relative text-3xs leading-[132.41%] text-navajowhite">
            <span>{`This product contain `}</span>
            <b>sesame seed</b>
            <span>{` and `}</span>
            <b>onion</b>
            <span>, it could be allergic.</span>
          </div>
        </div>
      </div>
      <div className="bg-darkgreen w-[312px] h-[50px] flex flex-col items-center justify-center text-3xs text-navajowhite">
        <div className="w-[264px] flex flex-row items-start justify-start gap-[6px]">
          <div className="flex-1 relative leading-[132.41%]">
            <p className="m-0">{`Confused about serving size? `}</p>
            <p className="m-0">
              Use AR for accurate serving size idea!. Click Now
            </p>
          </div>
          <div className="rounded-[15.62px] bg-lightgray-200 flex flex-row p-[1.9528840780258179px] items-start justify-start">
            <div className="rounded-[15.62px] w-[22.13px] h-[22.13px] flex flex-row p-[3.9057681560516357px] box-border items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[11.16px] h-[11.16px] overflow-hidden shrink-0">
                <img
                  className="absolute h-[91.67%] w-[91.67%] top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/view-in-ar.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningContainer;
