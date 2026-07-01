import imgPlaceholder from "./941fdb80140d5a65b39255b5f432f035bba86d80.png";
import imgPlaceholder1 from "./2f65e7b8893c39944feea869a8f781771b0ee1aa.png";
import imgPremiumTokenTitleInline from "./4ae3cfeb2483acc1f6b1f7d65efb5956419dd8d2.png";
import imgPlaceholder2 from "./769bad667227c5f3c540ea24c91e19d0e9a86764.png";

function AspectRatioKeeperRotatedAutoLayout() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function PremiumLongProp() {
  return <div className="absolute bottom-[-0.35px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function ImageProp() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Image Prop">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
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
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[26px] leading-[1.1] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Russische bedrijven kunnen geen Chinese chips meer betalen</p>
      <PremiumProp2 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Body">
      <Taxonomy />
      <Title />
    </div>
  );
}

function Spacer4() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Image Prop">
      <Spacer4 />
    </div>
  );
}

function Spacer5() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer6() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Wrapper">
      <Spacer6 />
    </div>
  );
}

function LabelLayout() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Label Layout">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.335] relative shrink-0 text-[#5a4848] text-[12px] uppercase whitespace-nowrap">label</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start pb-[2px] pr-[4px] relative shrink-0" data-name="Label">
      <LabelLayout />
    </div>
  );
}

function Spacer7() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer7 />
    </div>
  );
}

function Taxonomy1() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer5 />
      <PremiumWrapper />
      <Label />
      <PremiumProp3 />
    </div>
  );
}

function Spacer8() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Plus() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[11px] pr-[11px] relative shrink-0" data-name="Plus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremiumTokenTitleInline} />
      <Spacer8 />
    </div>
  );
}

function InlinePlus() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Inline Plus">
      <Plus />
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[17px] text-black w-[0.001px]">M</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[15px] leading-[1.15] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">{`The quick brown fox jumps over the lazy dog and bumps into a hole `}</p>
      <InlinePlus />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Body">
      <Title1 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout1() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function Spacer9() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageWidth() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip pr-[110px] relative shrink-0" data-name="Image Width">
      <Spacer9 />
    </div>
  );
}

function PremiumLongProp1() {
  return <div className="absolute bottom-[0.86px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function Image() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-full" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder2} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
      <ImageWidth />
      <PremiumLongProp1 />
    </div>
  );
}

function Spacer10() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageTokenRight() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Image Token Right">
      <Image />
      <Spacer10 />
    </div>
  );
}

function Spacer11() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image Prop">
      <ImageTokenRight />
      <Spacer11 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom">
      <Body1 />
      <ImageProp2 />
    </div>
  );
}

function ImageRightBodyWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Image Right Body Wrapper">
      <Taxonomy1 />
      <Bottom />
    </div>
  );
}

export default function ZoneMobile() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Zone/Mobile">
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Teaser">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="HeroZone/Mobile">
          <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[375px]" data-name="LargeTeaser__Mobile">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="DefaultTeaser">
              <ImageProp />
              <Body />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-[343px]" data-name="Divider/Mobile">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line id="Divider" stroke="var(--stroke-0, #C8C8C8)" x2="343" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Teaser">
        <div className="content-stretch flex items-start relative shrink-0" data-name="DefaultTeaser__Mobile">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start p-[16px] relative shrink-0 w-[375px]" data-name="DefaultTeaser">
            <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
            <ImageProp1 />
            <ImageRightBodyWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}