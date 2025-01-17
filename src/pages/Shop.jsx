import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


const Shop = () => {
  return (
    <>
      <div className="row">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img
              src="https://www.med-geraete.de/media/9e/47/e9/1657887862/Dr-mueller-onlineshop-screen-2.jpg?ts=1715681249"
              className="d-block w-100 shadow-black"
              alt="..."
            />
            <MDBCarouselCaption>
              <h1
                style={{
                  marginTop: "-370px",
                  marginRight: "200px",
                  width: "100%",
                  color: "white",
                  textShadow: "2px 2px 4px black",
                }}
                className="text-6xl font-extrabold"
              >
                Gebrauchte medizinische Geräte kaufen
              </h1>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img
              src="https://www.med-geraete.de/media/b4/de/33/1657887862/Dr-mueller-onlineshop-screen-1.jpg?ts=1657887862"
              className="d-block w-100 shadow-black"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>

        <div className="bg-sky-700 text-center text-white" style={{height:"390px"}}>
  <h3 className="text-teal-300 font-bold mt-5">
    Online-Shop für gebrauchte medizinische Geräte Dr. Wilfried Müller GmbH
  </h3>
  <div className="row mt-5">
    <div className="col-lg-1"></div>
    <div className="col-lg-5 text-left">
      <p className="font-light">
        Im Online-Shop der Dr. Wilfried Müller GmbH finden Sie gebrauchte medizinische Geräte für das gesamte Spektrum der Human- und Veterinärmedizin. Alle unsere Geräte sind optisch und technisch in einem sehr guten Zustand und werden mit einer 12-monatigen Garantie und einer Teilegarantie von 8 Jahren verkauft.
      </p>
      <p className="font-light">
        Klicken Sie oben im Menü auf "Shop", um alle Geräte-Kategorien anzuzeigen.
      </p>
      <p className="font-light">
        Von Saugpumpen, Infusionsgeräten und Sterilisatoren bis hin zu Zubehör für die Anästhesie,
      </p>
    </div>
    <div className="col-lg-5 text-left">
      <p className="font-light">
        In unserem Online-Shop finden Sie gebrauchte Medizintechnik aus 29 verschiedenen Kategorien, die wir an private und öffentliche Kliniken, Arztpraxen, Universitäten und Forschungseinrichtungen im Bereich der Human- und Veterinärmedizin liefern.
      </p>
      <p className="font-light">
        Unser erfahrenes Techniker-Team beantwortet Ihnen gerne alle Fragen zu unseren Geräten – selbstverständlich auch nach Ihrem Kauf.
      </p>
    </div>
    <div className="col-lg-1"></div>
  </div>
</div>






<div className="flex flex-col justify-center items-center mt-4"> 
  <img style={{ width: "100px" }} src="https://www.med-geraete.de/media/da/f5/08/1658916065/Logo_Bildmarke.svg?ts=1658916065" alt="" /> 
  <h2 className="mt-4 text-sky-600 font-bold">Unsere Bestseller-Kategorien</h2>
</div>

<div>
<div className="row mt-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">Anästhesie und Beatmung</h4>
    <p className="font-thin">Wir bieten Anästhesiegeräte für alle Bereiche: Humanmedizin, Veterinärmedizin und Forschung.</p>
    <Link to={'/shop/Anesthesia-and-ventilation'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/thumbnail/32/54/59/1659013956/Kategorie-Narkose-und-Beatmung_800x800.jpg?ts=1659013956" alt="Anästhesie und Beatmung" />
  </div>
  <div className="col-lg-2"></div>
</div>


<div className="row mt-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/thumbnail/25/0e/3f/1659013956/Kategorie-Endoskopie_800x800.jpg?ts=1659013956" alt="Endoskopie" />
  </div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">Endoskopie</h4>
    <p className="font-light">Wir liefern hauptsächlich Endoskope von OLYMPUS und bieten dabei vor allem flexible Endoskope an.</p>
    <Link to={'/shop/Flexible-endoscopes'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-2"></div>
</div>


<div className="row mt-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">OP-Tische</h4>
    <p className="font-thin">Wir bieten hochwertige, mobile OP-Tische von Maquet, Schmitz und Trumpf an.</p>
    <Link to={'/shop/Operating-tables-and-patient-trolleys'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/thumbnail/f7/9a/6d/1659013956/Kategorie-Op-Tische_800x800.jpg?ts=1659013956" alt="OP-Tische" />
  </div>
  <div className="col-lg-2"></div>
</div>



<div className="row mt-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/media/96/da/53/1659014288/Kategorie-HF-Chirurgie.jpg?ts=1659014288" alt="HF-Chirurgie" />
  </div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">HF-Chirurgie</h4>
    <p className="font-light">In unserem Sortiment finden Sie sowohl monopolare als auch bipolare medizinische Geräte. Wir bieten auch Geräte für spezielle Anwendungen wie Endoskopie an.</p>
    <Link to={'/shop/HF-Surgery'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-2"></div>
</div>


<div className="row mt-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">Defibrillatoren</h4>
    <p className="font-thin">Hier finden Sie folgende Gerätekategorien: Monophase- und Biphase-Geräte, Geräte mit oder ohne zusätzliche Funktionen, mit und ohne Drucker, manuelle Geräte, halbautomatische und vollautomatische Geräte.</p>
    <Link to={'/shop/Defibrillators'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/thumbnail/c4/c4/e2/1659013956/Kategorie-Defibrillatoren_800x800.jpg?ts=1659013956" alt="Defibrillatoren" />
  </div>
  <div className="col-lg-2"></div>
</div>



<div className="row mt-5 mb-5">
  <div className="col-lg-2"></div>
  <div className="col-lg-4">
    <img src="https://www.med-geraete.de/thumbnail/94/d9/51/1659013956/Kategorie-Infusoren-Perfusoren_800x800.jpg?ts=1659013956" alt="Infusoren Perfusoren" />
  </div>
  <div className="col-lg-4">
    <h4 className="text-sky-600">Infusoren und Perfusoren</h4>
    <p className="font-light">In unserem Programm finden Sie Perfusoren und Infusomaten der Hersteller BRAUN und Fresenius. Verschiedene Gerätetypen und jegliches Zubehör wie Halteklammern, Infusionsständer und Intensivpflegegestelle sind verfügbar.</p>
    <Link to={'/shop/Infusors-perfusors'}><button className="bg-sky-800 text-white py-2 px-4 rounded"> Zu den Geräten </button></Link>
  </div>
  <div className="col-lg-2"></div>
</div>

</div>

      </div>
    </>
  );
};

export default Shop;
