function PillButton() {
  return (
    <div className="bg-[#ffe6e6] relative rounded-[999px] shrink-0" data-name="Pill button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#af0202] text-[14px] text-center whitespace-nowrap">sub-nav__item</p>
      </div>
    </div>
  );
}

function PillButton1() {
  return (
    <div className="bg-[#ffe6e6] relative rounded-[999px] shrink-0" data-name="Pill button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#af0202] text-[14px] text-center whitespace-nowrap">sub-nav__item</p>
      </div>
    </div>
  );
}

function PillButton2() {
  return (
    <div className="bg-[#ffe6e6] relative rounded-[999px] shrink-0" data-name="Pill button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#af0202] text-[14px] text-center whitespace-nowrap">sub-nav__item</p>
      </div>
    </div>
  );
}

function PillButton3() {
  return (
    <div className="bg-[#ffe6e6] relative rounded-[999px] shrink-0" data-name="Pill button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#af0202] text-[14px] text-center whitespace-nowrap">sub-nav__item</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name=".sub-nav__item">
        <PillButton />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name=".sub-nav__item">
        <PillButton1 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name=".sub-nav__item">
        <PillButton2 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name=".sub-nav__item">
        <PillButton3 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[360px]" data-name="Component 1">
      <Frame />
    </div>
  );
}

export default function HeaderNavTopics() {
  return (
    <div className="content-stretch flex items-start pb-[16px] pl-[8px] pt-[12px] relative size-full" data-name="header-nav__topics">
      <Component />
    </div>
  );
}