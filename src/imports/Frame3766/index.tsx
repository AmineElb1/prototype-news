import imgPlus from "./4ae3cfeb2483acc1f6b1f7d65efb5956419dd8d2.png";
import imgPlaceholder from "./941fdb80140d5a65b39255b5f432f035bba86d80.png";
import imgPlaceholder1 from "./d6ddc66adc726d524f15d7ccbff2c7d5e8e19e17.png";
import imgPlaceholder2 from "./5de992d1a43ca43d8e08922e13fe55b19ed16077.png";
import imgPlaceholder3 from "./bd728b9ebf331fef537304d530efe8c90cffec17.png";
import imgPlaceholder4 from "./e079490048ca7826dba91250e051d14256b5af25.png";

function Spacer() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Image Prop">
      <Spacer />
    </div>
  );
}

function Spacer1() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer2() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Wrapper">
      <Spacer2 />
    </div>
  );
}

function Spacer3() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer3 />
    </div>
  );
}

function Taxonomy() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer1 />
      <PremiumWrapper />
      <PremiumProp />
    </div>
  );
}

function Spacer4() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Plus() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[11px] pr-[11px] relative shrink-0" data-name="Plus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlus} />
      <Spacer4 />
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

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[15px] leading-[1.15] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">{`Afschaffing papieren belastingaangifte voor bedrijven uitgesteld `}</p>
      <InlinePlus />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Body">
      <Title />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function Spacer5() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageWidth() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip pr-[110px] relative shrink-0" data-name="Image Width">
      <Spacer5 />
    </div>
  );
}

function PremiumLongProp() {
  return <div className="absolute bottom-[0.86px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function Image() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-full" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder1} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
      <ImageWidth />
      <PremiumLongProp />
    </div>
  );
}

function Spacer6() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageTokenRight() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Image Token Right">
      <Image />
      <Spacer6 />
    </div>
  );
}

function Spacer7() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image Prop">
      <ImageTokenRight />
      <Spacer7 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom">
      <Body />
      <ImageProp1 />
    </div>
  );
}

function ImageRightBodyWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Image Right Body Wrapper">
      <Taxonomy />
      <Bottom />
    </div>
  );
}

function Spacer8() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Image Prop">
      <Spacer8 />
    </div>
  );
}

function Spacer9() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer10() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Wrapper">
      <Spacer10 />
    </div>
  );
}

function Spacer11() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer11 />
    </div>
  );
}

function Taxonomy1() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer9 />
      <PremiumWrapper1 />
      <PremiumProp1 />
    </div>
  );
}

function Spacer12() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Plus1() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[11px] pr-[11px] relative shrink-0" data-name="Plus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlus} />
      <Spacer12 />
    </div>
  );
}

function InlinePlus1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Inline Plus">
      <Plus1 />
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[17px] text-black w-[0.001px]">M</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[15px] leading-[1.15] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">Belg houdt nog steeds van cash (maar afhalen is moeilijk)</p>
      <InlinePlus1 />
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

function Spacer13() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageWidth1() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip pr-[110px] relative shrink-0" data-name="Image Width">
      <Spacer13 />
    </div>
  );
}

function PremiumLongProp1() {
  return <div className="absolute bottom-[0.86px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-full" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder1} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder2} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
      <ImageWidth1 />
      <PremiumLongProp1 />
    </div>
  );
}

function Spacer14() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageTokenRight1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Image Token Right">
      <Image1 />
      <Spacer14 />
    </div>
  );
}

function Spacer15() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image Prop">
      <ImageTokenRight1 />
      <Spacer15 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom">
      <Body1 />
      <ImageProp3 />
    </div>
  );
}

function ImageRightBodyWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Image Right Body Wrapper">
      <Taxonomy1 />
      <Bottom1 />
    </div>
  );
}

function Spacer16() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Image Prop">
      <Spacer16 />
    </div>
  );
}

function Spacer17() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer18() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Wrapper">
      <Spacer18 />
    </div>
  );
}

function Spacer19() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer19 />
    </div>
  );
}

function Taxonomy2() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer17 />
      <PremiumWrapper2 />
      <PremiumProp2 />
    </div>
  );
}

function Spacer20() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Plus2() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[11px] pr-[11px] relative shrink-0" data-name="Plus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlus} />
      <Spacer20 />
    </div>
  );
}

function InlinePlus2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Inline Plus">
      <Plus2 />
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[17px] text-black w-[0.001px]">M</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[15px] leading-[1.15] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">Vergeet Musk, in China komt de vliegende robotaxi al van de grond</p>
      <InlinePlus2 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Body">
      <Title2 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout2() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function Spacer21() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageWidth2() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip pr-[110px] relative shrink-0" data-name="Image Width">
      <Spacer21 />
    </div>
  );
}

function PremiumLongProp2() {
  return <div className="absolute bottom-[0.86px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-full" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder3} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout2 />
        </div>
      </div>
      <ImageWidth2 />
      <PremiumLongProp2 />
    </div>
  );
}

function Spacer22() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageTokenRight2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Image Token Right">
      <Image2 />
      <Spacer22 />
    </div>
  );
}

function Spacer23() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image Prop">
      <ImageTokenRight2 />
      <Spacer23 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom">
      <Body2 />
      <ImageProp5 />
    </div>
  );
}

function ImageRightBodyWrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Image Right Body Wrapper">
      <Taxonomy2 />
      <Bottom2 />
    </div>
  );
}

function Spacer24() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Image Prop">
      <Spacer24 />
    </div>
  );
}

function Spacer25() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Spacer26() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Wrapper">
      <Spacer26 />
    </div>
  );
}

function Spacer27() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function PremiumProp3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
      <Spacer27 />
    </div>
  );
}

function Taxonomy3() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
      <Spacer25 />
      <PremiumWrapper3 />
      <PremiumProp3 />
    </div>
  );
}

function Spacer28() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function Plus3() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[11px] pr-[11px] relative shrink-0" data-name="Plus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlus} />
      <Spacer28 />
    </div>
  );
}

function InlinePlus3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Inline Plus">
      <Plus3 />
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[17px] text-black w-[0.001px]">M</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Arnhem:SemiBold',sans-serif] indent-[15px] leading-[1.15] min-w-full not-italic relative shrink-0 text-[17px] text-black w-[min-content]">Curatoren hebben een akkoord over Van Hool, maar hoe moet het nu verder?</p>
      <InlinePlus3 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Body">
      <Title3 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout3() {
  return (
    <div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
  );
}

function Spacer29() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageWidth3() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip pr-[110px] relative shrink-0" data-name="Image Width">
      <Spacer29 />
    </div>
  );
}

function PremiumLongProp3() {
  return <div className="absolute bottom-[0.86px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />;
}

function Image3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-full" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e0e0e0] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPlaceholder4} />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect Ratio">
          <AspectRatioKeeperRotatedAutoLayout3 />
        </div>
      </div>
      <ImageWidth3 />
      <PremiumLongProp3 />
    </div>
  );
}

function Spacer30() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageTokenRight3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Image Token Right">
      <Image3 />
      <Spacer30 />
    </div>
  );
}

function Spacer31() {
  return <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />;
}

function ImageProp7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Image Prop">
      <ImageTokenRight3 />
      <Spacer31 />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom">
      <Body3 />
      <ImageProp7 />
    </div>
  );
}

function ImageRightBodyWrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Image Right Body Wrapper">
      <Taxonomy3 />
      <Bottom3 />
    </div>
  );
}

function TopStories() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Top stories">
      <div className="bg-[#ccc] h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="relative size-full" />
        <div aria-hidden className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="DefaultTeaser__Mobile">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start p-[16px] relative shrink-0 w-[375px]" data-name="DefaultTeaser">
          <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
          <ImageProp2 />
          <ImageRightBodyWrapper1 />
        </div>
      </div>
      <div className="bg-[#ccc] h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="relative size-full" />
        <div aria-hidden className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="DefaultTeaser__Mobile">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start p-[16px] relative shrink-0 w-[375px]" data-name="DefaultTeaser">
          <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
          <ImageProp4 />
          <ImageRightBodyWrapper2 />
        </div>
      </div>
      <div className="bg-[#ccc] h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="relative size-full" />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="DefaultTeaser__Mobile">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start p-[16px] relative shrink-0 w-[375px]" data-name="DefaultTeaser">
          <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
          <ImageProp6 />
          <ImageRightBodyWrapper3 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="DefaultTeaser__Mobile">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start p-[16px] relative shrink-0 w-[375px]" data-name="DefaultTeaser">
          <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
          <ImageProp />
          <ImageRightBodyWrapper />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center relative shrink-0 w-[375px]" data-name="Regular4">
        <TopStories />
      </div>
    </div>
  );
}