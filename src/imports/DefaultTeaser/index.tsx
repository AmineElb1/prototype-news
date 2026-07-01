import imgPlaceholder from "./941fdb80140d5a65b39255b5f432f035bba86d80.png";
import imgPlaceholder1 from "./66658b90b2e667252f3a3cfc739ad3a53ebdd3b0.png";
import imgPremiumTokenTitleInline from "./4ae3cfeb2483acc1f6b1f7d65efb5956419dd8d2.png";

function AspectRatioKeeperRotatedAutoLayout() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function PremiumLongProp() {
  return <div className="absolute bottom-[0.36px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function ImageProp() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Image Prop">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder1} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder1} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
      <PremiumLongProp />
    </div>
  );
}

function Spacer() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer1() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer1 />
    </div>
  );
}

function Spacer2() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer2 />
    </div>
  );
}

function Taxonomy() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer />
      <PremiumProp />
      <PremiumProp1 />
    </div>
  );
}

function Spacer3() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumTokenTitleInline() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[18px] pr-[18px] relative shrink-0" data-name="Premium Token Title Inline">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumTokenTitleInline} />
      <Spacer3 />
    </div>
  );
}

function PremiumProp2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Premium Prop">
      <PremiumTokenTitleInline />
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[24px] text-black w-[0.001px]">M</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[26px] leading-[1.1] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Federaal parket opent onderzoek naar Russische inmenging in Europees Parlement</p>
      <PremiumProp2 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <Taxonomy />
        <Title />
      </div>
    </div>
  );
}

export default function DefaultTeaser() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="DefaultTeaser">
      <ImageProp />
      <Body />
    </div>
  );
}