import imgFrame1990 from "./47c7694841db36d5f48ee6aa3b9afa5fb1fd416d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10.667px] h-[266.667px] items-center p-[10.667px] relative shrink-0 w-[320px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ddfadc] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame1990} />
      </div>
    </div>
  );
}

export default function ZoneMobile() {
  return (
    <div className="content-stretch flex flex-col items-center py-[16px] relative size-full" data-name="Zone/Mobile">
      <Frame />
    </div>
  );
}