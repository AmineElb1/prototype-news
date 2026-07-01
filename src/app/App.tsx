import React, { useState, useRef, useCallback } from "react";
import { ChameleonProvider, DefaultTeaser, Logo, BrandedHeading } from "@chameleon/react";
import { Newspaper, CirclePlay, Headphones, Menu as MenuIcon, User } from "lucide-react";
import MobileV from "@/imports/MobileV2/index";
import svgPaths from "@/imports/MobileV2/svg-dqhalv9jru";

// Placeholder images reused from the Figma import asset pool
import img0  from "@/imports/MobileV2/941fdb80140d5a65b39255b5f432f035bba86d80.png";
import img1  from "@/imports/MobileV2/66658b90b2e667252f3a3cfc739ad3a53ebdd3b0.png";
import img2  from "@/imports/MobileV2/2f65e7b8893c39944feea869a8f781771b0ee1aa.png";
import img3  from "@/imports/MobileV2/769bad667227c5f3c540ea24c91e19d0e9a86764.png";
import img4  from "@/imports/MobileV2/47c7694841db36d5f48ee6aa3b9afa5fb1fd416d.png";
import img5  from "@/imports/MobileV2/d6ddc66adc726d524f15d7ccbff2c7d5e8e19e17.png";
import img6  from "@/imports/MobileV2/5de992d1a43ca43d8e08922e13fe55b19ed16077.png";
import img7  from "@/imports/MobileV2/bd728b9ebf331fef537304d530efe8c90cffec17.png";
import img8  from "@/imports/MobileV2/e079490048ca7826dba91250e051d14256b5af25.png";
import img9  from "@/imports/MobileV2/c1aec7ff5d3af0276e65975ea06785b7fcbb01fc.png";
import img10 from "@/imports/MobileV2/712522b12ee3067eaeebf451710f9f5e1f6bfb04.png";
import img11 from "@/imports/MobileV2/10181199dddd60070bf57f989efcc857731b6006.png";
import img12 from "@/imports/MobileV2/ab8e3ae483953c127fb5e42a616a211d298eabbc.png";
import img13 from "@/imports/MobileV2/cabcbe43919ce6526de1209de060a91fad6670f6.png";
import img14 from "@/imports/MobileV2/0dbb6a281aa59a99576a415b2f468b08031a0dc9.png";
import img15 from "@/imports/MobileV2/dcde0f5af188b20b2783a79ac2dccc9e59497f16.png";
import img16 from "@/imports/MobileV2/9c8ddee71e0dd727ede509cdb72f8e4d715d2f27.png";
import img17 from "@/imports/MobileV2/b573853d5f62ccf89b1cc6ddd6746ba7cca95c55.png";
import img18 from "@/imports/MobileV2/eb46df97e4ebde1997e934894c927360ba82fb9a.png";
import img19 from "@/imports/MobileV2/c4707fed84e44efd8ea5837b82dffe151c193f23.png";

const IMGS = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19];

// ─── Layout constants ─────────────────────────────────────────────────────────

const PHONE_W         = 375;
const PHONE_H         = 812;
const STATUSBAR_H     = 44;
const MAINNAV_H       = 48;
const TOPICS_H        = 56;
const CHROME_EXPANDED = STATUSBAR_H + MAINNAV_H + TOPICS_H; // 148
const CHROME_COLLAPSED = STATUSBAR_H + TOPICS_H;            // 100
const IMPORT_NAV_H    = 158; // MobileV's own status+nav+topics to clip
const BOTTOMNAV_RESERVE = 90; // space to keep clear at the bottom of scrollable feeds for the floating liquid-glass bar

const TOPICS = ["Nieuws","Politiek","Sport","Wereld","Tech","Cultuur","Video","Lifestyle"];

// ─── Storyblock data types ────────────────────────────────────────────────────

type HeroBlock = {
  kind: "hero";
  category: string;
  premium?: boolean;
  title: string;
  img: number; // index into IMGS[]
};
type DefaultBlock = {
  kind: "default";
  category: string;
  premium?: boolean;
  title: string;
  img?: number;
};
type GridBlock = {
  kind: "grid";
  items: { category: string; premium?: boolean; title: string; img: number }[];
};
type BrandedBlock = {
  kind: "branded";
  color: string;
  heading: string;
  articles: { title: string; category: string }[];
};
type Storyblock = HeroBlock | DefaultBlock | GridBlock | BrandedBlock;

// ─── Topic feed data ──────────────────────────────────────────────────────────

const FEEDS: Record<string, Storyblock[]> = {
  Politiek: [
    { kind: "hero",    category: "Politiek", premium: true,  title: "Formatie loopt vast op pensioenakkoord: coalitie zoekt uitweg na crisis", img: 0 },
    { kind: "default", category: "Binnenland",                title: "Tweede Kamer stemt in met noodwet zorgpersoneel", img: 1 },
    { kind: "default", category: "Europa",   premium: true,  title: "Brussel dreigt met miljardenboete voor staatssteun aan Nederlandse bedrijven" },
    { kind: "default", category: "Politiek",                 title: "Minister van Financiën wil bezuinigen op ambtenarenapparaat", img: 2 },
    { kind: "grid", items: [
      { category: "Stikstof",  title: "Debat over stikstofwet eindigt in spoedoverleg", img: 3 },
      { category: "Politiek",  title: "Oppositie vraagt om enquête mediabeleid", img: 4 },
      { category: "Klimaat",   title: "Nederland mist klimaatdoelen van Parijs", img: 5 },
      { category: "Wonen",     title: "Gemeenten vragen meer autonomie woningbouw", img: 6 },
    ]},
    { kind: "branded", color: "#05416d", heading: "Analyse", articles: [
      { title: "Waarom de coalitie steeds vaker struikelt op financieel beleid", category: "Opinie" },
      { title: "Het pensioenstelsel in vijf vragen uitgelegd", category: "Uitleg" },
      { title: "Tien jaar Europa: hoe ver zijn we gevorderd?", category: "Europa" },
    ]},
    { kind: "hero",    category: "Internationaal", premium: true, title: "EU-top bereikt compromis over migratiepact na nachtelijke onderhandelingen", img: 7 },
    { kind: "default", category: "Politiek",                 title: "Burgemeester Amsterdam pleit voor grondwetswijziging woonrecht", img: 8 },
    { kind: "default", category: "Economie", premium: true,  title: "Begrotingstekort loopt op naar 3,2% — verdere ingrepen onvermijdelijk" },
  ],

  Sport: [
    { kind: "hero",    category: "Voetbal",  title: "Ajax wint in extremis: Berghuis scoort in blessuretijd van bewogen derby", img: 9 },
    { kind: "default", category: "Oranje",   premium: true,  title: "Van Dijk twijfelgeval voor EK-kwalificatie: Koeman houdt hart vast", img: 10 },
    { kind: "default", category: "Formule 1",                title: "Verstappen start van pole in Monaco na dominante kwalificatie", img: 11 },
    { kind: "default", category: "Tennis",                   title: "Bencic wint Roland Garros in drie sets na comeback van 3-6 achterstand" },
    { kind: "grid", items: [
      { category: "Voetbal",    title: "PSV en Feyenoord strijden om nationaal talent Mathijs Keur", img: 12 },
      { category: "Wielrennen", title: "Van der Poel wint Ronde van Vlaanderen voor derde keer", img: 13 },
      { category: "Zwemmen",    title: "Nederlandse zwemmers domineren bij EK met vijf gouden", img: 14 },
      { category: "Darts",      title: "Van Gerwen bereikt finale na thriller in halve finale", img: 15 },
    ]},
    { kind: "branded", color: "#8b1a1a", heading: "WK 2026", articles: [
      { title: "Nederland in zwaar poule: Brazilië, Duitsland en Senegal", category: "Oranje" },
      { title: "Dit zijn de vijf Nederlanders om in de gaten te houden", category: "Analyse" },
      { title: "De host-steden van het WK 2026 op een rij", category: "Achtergrond" },
    ]},
    { kind: "hero",    category: "Atletiek", premium: true,  title: "Sifan Hassan verbetert eigen wereldrecord op de marathon in Rotterdam", img: 16 },
    { kind: "default", category: "Hockey",                   title: "Nederlandse hockeyvrouwen pakken goud op World League Final", img: 17 },
  ],

  Wereld: [
    { kind: "hero",    category: "Europa",   premium: true,  title: "NAVO-top eindigt met nieuw veiligheidsplan voor Oost-Europa na urenlange vergadering", img: 18 },
    { kind: "default", category: "Azië",                     title: "Aardbevingen treffen kustgebied Japan: geen tsunamigevaar, wel materiële schade", img: 19 },
    { kind: "default", category: "Klimaat",  premium: true,  title: "VS en China hervatten klimaatdialoog na maanden stilte — akkoord in zicht?" },
    { kind: "default", category: "Midden-Oosten",            title: "Krachtmeting in het Midden-Oosten na diplomatieke herkenningen", img: 0 },
    { kind: "grid", items: [
      { category: "Latijns-Amerika", title: "Brazilië kondigt noodtoestand af na overstromingen in het zuiden", img: 1 },
      { category: "Europa",          title: "EU keurt nieuw AI-regelgevingspakket goed na lang debat", img: 2 },
      { category: "Afrika",          title: "Armoede in Afrika daalt voor het eerst in een decennium", img: 3 },
      { category: "Klimaat",         title: "Canada trekt zich terug uit klimaatakkoord van Montreal", img: 4 },
    ]},
    { kind: "branded", color: "#2d4a2d", heading: "Correspondent", articles: [
      { title: "Brief uit Kyiv: hoe het leven doorgaat achter de frontlinie", category: "Oekraïne" },
      { title: "De stille machtsgreep van Peking in de Stille Oceaan", category: "China" },
      { title: "Washington in rep en roer: wat betekent dit voor Europa?", category: "VS" },
    ]},
    { kind: "hero",    category: "VN",       premium: true,  title: "Veiligheidsraad stemt voor eerste keer in decennia unaniem voor staakt-het-vuren", img: 5 },
    { kind: "default", category: "Migratie",                 title: "Recordaantal vluchtelingen bereikt Europa via Centraal-Mediterrane route", img: 6 },
  ],

  Tech: [
    { kind: "hero",    category: "AI",       premium: true,  title: "OpenAI onthult GPT-5: sneller, goedkoper en significant minder hallucinaties", img: 7 },
    { kind: "default", category: "Apple",                    title: "Nieuwe MacBook-lijn met M4-chip: Apple richt pijlen op AI-toepassingen", img: 8 },
    { kind: "default", category: "Cybersecurity", premium: true, title: "Hackers legden kritieke infrastructuur van meerdere EU-landen lam" },
    { kind: "default", category: "Quantum",                  title: "Hoe quantum computing de RSA-encryptie binnen vijf jaar kan kraken", img: 9 },
    { kind: "grid", items: [
      { category: "Muziek",     title: "Spotify lanceert AI-afspeellijsten op basis van stemming", img: 10 },
      { category: "Startup",    title: "Lightyear wint CES Innovation Award voor solar e-auto", img: 11 },
      { category: "Regulering", title: "EU legt Meta recordboete op van 1,3 miljard euro", img: 12 },
      { category: "Zorg",       title: "Philips lanceert generatief AI-platform voor ziekenhuisdiagnoses", img: 13 },
    ]},
    { kind: "branded", color: "#1a1a2e", heading: "Uitgelegd", articles: [
      { title: "Wat is een large language model en hoe werkt het?", category: "AI" },
      { title: "Blockchain: hype of toekomst voor de financiële sector?", category: "Fintech" },
      { title: "De wet op de digitale markten: wat verandert er voor u?", category: "Regulering" },
    ]},
    { kind: "hero",    category: "Space",    premium: true,  title: "SpaceX landt Starship succesvol voor derde keer: nieuw tijdperk voor ruimtevaart", img: 14 },
    { kind: "default", category: "Gaming",                   title: "Nintendo onthult opvolger van de Switch met nieuw beeldscherm", img: 15 },
  ],

  Cultuur: [
    { kind: "hero",    category: "Kunst",    title: "Rijksmuseum opent grootste Vermeer-tentoonstelling ooit met dertig schilderijen", img: 16 },
    { kind: "default", category: "Literatuur", premium: true, title: "Waarom de roman herleefd is in het tijdperk van de korte aandacht", img: 17 },
    { kind: "default", category: "Film",                     title: "Nederlandse film \"Nacht van de stroom\" wint Gouden Palme in Cannes", img: 18 },
    { kind: "default", category: "Media",                    title: "Eva Jinek kondigt afscheid aan van NPO Radio 1 na vijf jaar" },
    { kind: "grid", items: [
      { category: "Muziek",     title: "Lowlands verkoopt 60.000 tickets in recordtijd van vier minuten", img: 19 },
      { category: "Erfgoed",    title: "Hermitage Amsterdam heropent als nieuw cultureel centrum", img: 0 },
      { category: "Literatuur", title: "Boekenweek 2025 breekt bezoekersrecord met 600.000 bezoekers", img: 1 },
      { category: "Theater",    title: "Noord Nederlands Toneel wint Théâtre Award voor beste regie", img: 2 },
    ]},
    { kind: "branded", color: "#4a1942", heading: "Recensie", articles: [
      { title: "\"Parasite\" — Bong Joon-ho's meesterwerk herbekeken na vijf jaar", category: "Film" },
      { title: "Boek van de maand: Lize Spit over stilte en schreeuw", category: "Literatuur" },
      { title: "Tentoonstelling Cobra Museum: kleur als protest", category: "Kunst" },
    ]},
    { kind: "hero",    category: "Muziek",   premium: true,  title: "Metronomy speelt verrassend intiem concert in De Kleine Komedie Amsterdam", img: 3 },
  ],

  Video: [
    { kind: "hero",    category: "Video",    title: "KIJK | Politiechef legt uit hoe ambtsmisdrijven worden onderzocht bij de Rijksrecherche", img: 4 },
    { kind: "default", category: "Documentaire", premium: true, title: "De onzichtbare dijkwacht: leven aan de rand van het water — nu te zien", img: 5 },
    { kind: "default", category: "Live",                     title: "LIVE | Persconferentie premier na afloop Europese Raad — 14:00 uur", img: 6 },
    { kind: "default", category: "Sport",                    title: "VIDEO | Zo bereiden Olympische atleten zich voor op de Spelen van LA 2028" },
    { kind: "grid", items: [
      { category: "Serie",      title: "\"De Brug\" seizoen 3 is ronduit de beste tot nu toe", img: 7 },
      { category: "Kort",       title: "90 seconden: het nieuws van de ochtend samengevat", img: 8 },
      { category: "Reportage",  title: "Leven met droogte in het Groene Hart van Holland", img: 9 },
      { category: "Interview",  title: "Minister praat vrijuit over eerste honderd dagen in functie", img: 10 },
    ]},
    { kind: "branded", color: "#1a1a1a", heading: "Must-see", articles: [
      { title: "De vijf beste documentaires van dit jaar op een rij", category: "Top 5" },
      { title: "Waarom \"Zwart Licht\" de beste Nederlandse serie van het decennium is", category: "Serie" },
      { title: "Streaming gids: wat kijken we deze week?", category: "Gids" },
    ]},
    { kind: "hero",    category: "Achtergrond", premium: true, title: "Het geheim achter viral nieuws: hoe desinformatie zich razendsnel verspreidt", img: 11 },
  ],

  Lifestyle: [
    { kind: "hero",    category: "Gezondheid", premium: true, title: "De zeven slaapregels die artsen en slaapwetenschappers zelf dagelijks volgen", img: 12 },
    { kind: "default", category: "Wonen",                    title: "Minimalisme in de keuken: minder spullen geven verrassend meer vreugde", img: 13 },
    { kind: "default", category: "Mobiliteit",               title: "Test: de twaalf beste elektrische fietsen van 2025 onder 2.000 euro", img: 14 },
    { kind: "default", category: "Mentaal",  premium: true,  title: "Hoe ga je om met het gevoel dat iedereen om je heen gelukkiger is?" },
    { kind: "grid", items: [
      { category: "Reizen",     title: "De mooiste treinroutes door Europa zonder vliegtuig", img: 15 },
      { category: "Tuin",       title: "Boerentuin op je balkon: zo groeit groente op 6 m²", img: 16 },
      { category: "Werk",       title: "Vier-daagse werkweek: werkgevers tonen zich verdeeld", img: 17 },
      { category: "Voeding",    title: "Wat eet je als je vaker thuis werkt? Dit zeggen diëtisten", img: 18 },
    ]},
    { kind: "branded", color: "#3d6b3d", heading: "Duurzaam", articles: [
      { title: "Hoe je je carbon footprint halveert zonder grote offers", category: "Klimaat" },
      { title: "Tweedehands kopen: de beste apps en sites van 2025", category: "Winkelen" },
      { title: "Plantaardig eten: een eerlijk maandrapport van een beginner", category: "Voeding" },
    ]},
    { kind: "hero",    category: "Psychologie", premium: true, title: "Het juiste ochtendritme bestaat niet — maar dit helpt je wel op weg", img: 19 },
  ],
};

// ─── Storyblock primitives ────────────────────────────────────────────────────

/** Matches the Divider/Mobile SVG pattern from the import */
function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[calc(100%-32px)]" data-name="Divider/Mobile">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line stroke="#C8C8C8" x2="343" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Thin full-width divider between major sections */
function FullDivider() {
  return (
    <div className="bg-[#ccc] relative shrink-0 w-full" data-name="Divider/Mobile">
      <div className="content-stretch flex items-start px-[16px] relative size-full">
        <div className="flex-[1_0_0] h-0 min-w-px relative">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
              <line stroke="#CCCCCC" x2="343" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Storyblock renderers ─────────────────────────────────────────────────────

/**
 * LargeTeaser__Mobile — full-width hero image with title below.
 * Uses Chameleon's DefaultTeaser, orientation="vertical" size="lg", `ds` theme tokens.
 */
function HeroStoryblock({ block }: { block: HeroBlock }) {
  return (
    <DefaultTeaser
      link="#"
      title={block.title}
      label={block.category}
      premium={block.premium}
      orientation="vertical"
      size="lg"
      inset
      image={<img src={IMGS[block.img % IMGS.length]} alt="" />}
    />
  );
}

/**
 * DefaultTeaser__Mobile — text left + thumbnail right.
 * Uses Chameleon's DefaultTeaser (@chameleon/react) directly, `ds` theme tokens.
 */
function DefaultStoryblock({ block }: { block: DefaultBlock }) {
  return (
    <DefaultTeaser
      link="#"
      title={block.title}
      label={block.category}
      premium={block.premium}
      orientation="horizontal"
      size="sm"
      inset
      image={block.img !== undefined ? <img src={IMGS[block.img % IMGS.length]} alt="" /> : undefined}
    />
  );
}

/**
 * GridImageTeaser — 2-column grid.
 * Mirrors: Zone/Mobile > flex gap-[16px] p-[16px] > GridImageTeaser__Mobile × 2
 */
function GridStoryblock({ block }: { block: GridBlock }) {
  // Render pairs of items as rows
  const rows: typeof block.items[] = [];
  for (let i = 0; i < block.items.length; i += 2) {
    rows.push(block.items.slice(i, i + 2));
  }
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Zone/Mobile">
      {rows.map((pair, rowIdx) => (
        <React.Fragment key={rowIdx}>
          <div className="content-stretch flex gap-[16px] items-start p-[16px] relative shrink-0 w-full">
            {pair.map((item, colIdx) => (
              <div key={colIdx} className="content-stretch flex items-start relative shrink-0 flex-1 min-w-0 overflow-hidden" data-name="GridImageTeaser__Mobile">
                <DefaultTeaser
                  link="#"
                  title={item.title}
                  label={item.category}
                  premium={item.premium}
                  orientation="vertical"
                  size="sm"
                  style={{ width: "100%", minWidth: 0 }}
                  image={<img src={IMGS[item.img % IMGS.length]} alt="" style={{ width: "100%" }} />}
                />
              </div>
            ))}
          </div>
          {rowIdx < rows.length - 1 && (
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-[calc(100%-32px)]">
              <div className="flex-[1_0_0] h-0 min-w-px relative">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
                    <line stroke="#C8C8C8" x2="343" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Branded section — dark colored block with heading + article list.
 * Mirrors: bg-[#05416d] Regular4 > BrandedHeading__Mobile + TopStories
 */
function BrandedStoryblock({ block }: { block: BrandedBlock }) {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full"
      style={{ background: block.color }}
      data-name="Regular4"
    >
      {/* Branded heading — Chameleon's BrandedHeading, nested dark colorMode so its
          adaptive text-color token resolves to white against the colored panel */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[calc(100%-32px)]" data-name="BrandedHeading__Mobile">
        <ChameleonProvider theme="ds" colorMode="dark" as="div">
          <BrandedHeading size="lg">{block.heading}</BrandedHeading>
        </ChameleonProvider>
      </div>
      {/* Articles list */}
      {block.articles.map((article, i) => (
        <React.Fragment key={i}>
          <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[calc(100%-32px)]">
            <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[12px] text-white uppercase tracking-[0.04em] mb-[4px]">
              {article.category}
            </p>
            <p className="[word-break:break-word] font-['Arnhem',_'Arnhem_Fallback',_serif] font-semibold leading-[1.25] relative shrink-0 text-[17px] text-white">
              {article.title}
            </p>
          </div>
          {i < block.articles.length - 1 && (
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-[calc(100%-32px)]">
              <div className="flex-[1_0_0] h-0 min-w-px relative">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
                    <line stroke="rgba(255,255,255,0.25)" x2="343" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      <div style={{ height: 16 }} />
    </div>
  );
}

// ─── Topic Feed assembler ─────────────────────────────────────────────────────

/**
 * Renders the storyblock sequence for a non-Nieuws topic.
 * Mirrors the Frame11 outer structure: bg-white, flex-col, gap-[24px], items-center
 */
function TopicFeed({ topicId }: { topicId: string }) {
  const blocks = FEEDS[topicId] ?? [];
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Frame11-equiv">
      {blocks.map((block, i) => (
        <React.Fragment key={i}>
          {block.kind === "hero"    && <HeroStoryblock    block={block} />}
          {block.kind === "default" && <DefaultStoryblock block={block} />}
          {block.kind === "grid"    && <GridStoryblock    block={block} />}
          {block.kind === "branded" && <BrandedStoryblock block={block} />}

          {/* Divider between blocks — mirrors Divider/Mobile pattern */}
          {i < blocks.length - 1 && block.kind !== "branded" && (
            blocks[i + 1]?.kind !== "branded"
              ? <SectionDivider />
              : <FullDivider />
          )}
        </React.Fragment>
      ))}
      <div style={{ height: 40 + BOTTOMNAV_RESERVE }} />
    </div>
  );
}

// ─── Status Bar ───────────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div style={{ height: STATUSBAR_H, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", paddingLeft: 16, paddingRight: 8 }}>
      <p className="mx-[10px] my-[0px]" style={{ fontFamily: "'SF Pro:Semibold', sans-serif", fontWeight: 590, fontSize: 12, lineHeight: "22px", color: "black", fontVariationSettings: '"wdth" 100' }}>9:41</p>
      <svg fill="none" viewBox="0 0 134.065 54" style={{ height: STATUSBAR_H, width: 134.065 * (STATUSBAR_H / 54) }}>
        <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="78.5" y="23.5" />
        <path d={svgPaths.p1af82040} fill="black" opacity="0.4" />
        <rect fill="black" height="9" rx="2.5" width="21" x="80" y="25" />
        <path clipRule="evenodd" d={svgPaths.p397d7f00} fill="black" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p37488800} fill="black" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────

function MainNav() {
  return (
    <div style={{ height: MAINNAV_H, display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 16, paddingRight: 16, background: "#fff", gap: 12 }}>
      <Logo name="logo-main" style={{ height: 22, width: "auto" }} />
      <div style={{ flex: 1 }} />
      <div className="liquid-glass-border" style={{ borderRadius: 999, background: "var(--color-primary-base)", padding: "8px 13px", flexShrink: 0 }}>
        <span style={{ fontFamily: '"Libre Franklin", sans-serif', fontWeight: 600, fontSize: 14, lineHeight: 1.1, color: "#fff", whiteSpace: "nowrap" }}>
          Abonneren
        </span>
      </div>
      <div className="liquid-glass-border--gray" style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <User size={18} color="#1a1a1a" strokeWidth={2} />
      </div>
    </div>
  );
}

// ─── Nieuws Feed (clips MobileV's own nav) ────────────────────────────────────

class NieuwsBoundary extends React.Component<{ children: React.ReactNode }, { err: boolean }> {
  constructor(props: { children: React.ReactNode }) { super(props); this.state = { err: false }; }
  static getDerivedStateFromError() { return { err: true }; }
  render() {
    if (this.state.err) return <TopicFeed topicId="Nieuws-fallback" />;
    return this.props.children;
  }
}

function NieuwsFeed() {
  return (
    <NieuwsBoundary>
      <div style={{ marginTop: -IMPORT_NAV_H, paddingBottom: BOTTOMNAV_RESERVE }}>
        <MobileV />
      </div>
    </NieuwsBoundary>
  );
}

// ─── Bottom Nav (liquid glass) ─────────────────────────────────────────────────

const BOTTOM_TABS: { label: string; icon?: typeof Newspaper; isBrand?: boolean }[] = [
  { label: "Actueel", isBrand: true },
  { label: "Publicaties", icon: Newspaper },
  { label: "Kijk", icon: CirclePlay },
  { label: "Luister", icon: Headphones },
  { label: "Menu", icon: MenuIcon },
];

function LiquidGlassFilter() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <filter id="liquid-glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves={2} seed={92} result="noise" />
        <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
        <feDisplacementMap in="SourceGraphic" in2="blur" scale={16} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

function BottomNav() {
  const [activeTab, setActiveTab] = useState("Actueel");
  return (
    <>
      <LiquidGlassFilter />
      <div
        className="liquid-glass"
        style={{
          position: "absolute",
          left: "var(--scale-9)",
          right: "var(--scale-9)",
          bottom: "var(--scale-6)",
          zIndex: 40,
          borderRadius: 25,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          padding: "var(--scale-5) var(--scale-2)",
        }}
      >
        {BOTTOM_TABS.map(({ label, icon: TabIcon, isBrand }, i) => {
          const active = label === activeTab;
          const color = active ? "var(--color-primary-base)" : "#000";
          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0, border: "none", background: "transparent", cursor: "pointer", padding: 0, marginLeft: i === 0 ? "var(--scale-5)" : 0, marginRight: i === BOTTOM_TABS.length - 1 ? "var(--scale-5)" : 0 }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--scale-2)",
                  padding: "8px var(--scale-5)",
                  borderRadius: 14,
                  background: active ? "rgba(0,0,0,0.08)" : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                {isBrand
                  ? <Logo name="logo-square-main" style={{ width: 20, height: 20, filter: active ? "none" : "grayscale(1) opacity(0.6)" }} />
                  : TabIcon && <TabIcon size={20} color={color} strokeWidth={active ? 2.4 : 2} />}
                <span style={{ fontFamily: '"Libre Franklin", sans-serif', fontWeight: 500, fontSize: 10, lineHeight: 1.1, color, whiteSpace: "nowrap" }}>
                  {label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeIndex, setActiveIndex]       = useState(0);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  const isAnimatingRef  = useRef(false);
  const activeIndexRef  = useRef(0);
  activeIndexRef.current = activeIndex;

  const feedsRef      = useRef<HTMLDivElement>(null);
  const topicsBarRef  = useRef<HTMLDivElement>(null);
  const topicBtnRefs  = useRef<(HTMLButtonElement | null)[]>([]);

  const navTranslateY = headerCollapsed ? -MAINNAV_H : 0;
  const feedTop       = headerCollapsed ? CHROME_COLLAPSED : CHROME_EXPANDED;

  const scrollTopicIntoView = useCallback((index: number) => {
    const bar = topicsBarRef.current;
    const btn = topicBtnRefs.current[index];
    if (!bar || !btn) return;
    const target =
      bar.scrollLeft +
      btn.getBoundingClientRect().left -
      bar.getBoundingClientRect().left -
      bar.offsetWidth / 2 +
      btn.offsetWidth / 2;
    bar.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  const goToTopic = useCallback((index: number) => {
    if (index === activeIndexRef.current || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setActiveIndex(index);
    scrollTopicIntoView(index);
    feedsRef.current?.scrollTo({ left: index * (feedsRef.current?.offsetWidth ?? PHONE_W), behavior: "smooth" });
    setTimeout(() => { isAnimatingRef.current = false; }, 450);
  }, [scrollTopicIntoView]);

  const handleFeedsScroll = useCallback(() => {
    if (isAnimatingRef.current) return;
    const feeds = feedsRef.current;
    if (!feeds) return;
    const index = Math.round(feeds.scrollLeft / feeds.offsetWidth);
    if (index !== activeIndexRef.current) {
      setActiveIndex(index);
      scrollTopicIntoView(index);
    }
  }, [scrollTopicIntoView]);

  const handleFeedPaneScroll = useCallback((e: React.UIEvent<HTMLDivElement>, paneIndex: number) => {
    if (paneIndex !== activeIndexRef.current) return;
    setHeaderCollapsed(e.currentTarget.scrollTop > 52);
  }, []);

  return (
    <ChameleonProvider theme="ds">
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)", overflow: "hidden" }}>
      <div
        className="w-screen h-dvh rounded-none shadow-none sm:w-[375px] sm:h-[812px] sm:rounded-[44px] sm:shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_24px_64px_rgba(0,0,0,0.28),0_8px_24px_rgba(0,0,0,0.16)]"
        style={{ position: "relative", overflow: "hidden", background: "#fff", flexShrink: 0 }}
      >

        {/* Fixed status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 30, background: "#fff" }}>
          <StatusBar />
        </div>

        {/* Nav header — slides up on scroll */}
        <div style={{ position: "absolute", top: STATUSBAR_H, left: 0, right: 0, zIndex: 20, background: "#fff", transform: `translateY(${navTranslateY}px)`, transition: "transform 0.25s ease" }}>
          <div style={{ overflow: "hidden", opacity: headerCollapsed ? 0 : 1, transition: "opacity 0.2s ease" }}>
            <MainNav />
          </div>
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            <div
              ref={topicsBarRef}
              style={{ display: "flex", alignItems: "center", gap: 8, overflowX: "auto", overflowY: "hidden", padding: "12px 8px 16px", scrollbarWidth: "none" }}
              className="[&::-webkit-scrollbar]:hidden"
            >
              {TOPICS.map((topic, i) => {
                const active = i === activeIndex;
                return (
                  <button
                    key={topic}
                    ref={(el) => { topicBtnRefs.current[i] = el; }}
                    onClick={() => goToTopic(i)}
                    style={{ flexShrink: 0, border: "none", cursor: "pointer", borderRadius: 999, background: active ? "var(--color-primary-base)" : "#ffe6e6", padding: "6px 12px", transition: "background 0.18s ease" }}
                  >
                    <span style={{ fontFamily: '"Libre Franklin", sans-serif', fontWeight: 400, fontSize: 14, lineHeight: 1.1, color: active ? "#ffffff" : "#af0202", whiteSpace: "nowrap", transition: "color 0.18s ease" }}>
                      {topic}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feed area */}
        <div style={{ position: "absolute", top: feedTop, left: 0, right: 0, bottom: 0, transition: "top 0.25s ease", overflow: "hidden" }}>
          <div
            ref={feedsRef}
            style={{ display: "flex", width: "100%", height: "100%", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", overscrollBehavior: "contain" }}
            className="[&::-webkit-scrollbar]:hidden"
            onScroll={handleFeedsScroll}
          >
            {TOPICS.map((topic, i) => (
              <div
                key={topic}
                style={{ width: "100%", height: "100%", flexShrink: 0, scrollSnapAlign: "start", overflowY: "auto", overflowX: "hidden" }}
                onScroll={(e) => handleFeedPaneScroll(e, i)}
              >
                {topic === "Nieuws" ? <NieuwsFeed /> : <TopicFeed topicId={topic} />}
              </div>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
    </ChameleonProvider>
  );
}
