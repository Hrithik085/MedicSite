import React from 'react'

const Company = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src="https://www.med-geraete.de/thumbnail/2f/67/80/1662733151/02_Dr_Mueller_Unternehmen_Header_3_1920x1920.jpg?ts=1662733151" alt="" />
        </div>
      </div>

      <div className="row">
  <h1 className='text-sky-700' style={{textAlign:"center",fontSize:"xx-large",marginTop:"50px",marginBottom:"50px"}}>Über Dr. Wilfried Müller GmbH</h1>
  <div className="col-2"></div>
  <div className="col-4 ms-5">Als inhabergeführtes Unternehmen mit Sitz in Prittriching, Bayern, handelt die Dr. Wilfried Müller GmbH seit 25 Jahren mit gebrauchten medizinischen Geräten. Das Unternehmen wurde 1998 von Namensgeber und Tierarzt Dr. Wilfried Müller gegründet und wird seit 2012 von Marcus Triebel geleitet.</div>
  <div className="col-4">Als inhabergeführtes Unternehmen mit Sitz in Prittriching, Bayern, handelt die Dr. Wilfried Müller GmbH seit 25 Jahren mit gebrauchten medizinischen Geräten. Das Unternehmen wurde 1998 von Namensgeber und Tierarzt Dr. Wilfried Müller gegründet und wird seit 2012 von Marcus Triebel geleitet.</div>
</div>


      <div style={{marginTop:"60px"}} className="row">
        <center>
        <div className="col-1">
          <img src="https://www.med-geraete.de/media/da/f5/08/1658916065/Logo_Bildmarke.svg?ts=1658916065" alt="" />
        </div>
        <h1 style={{fontSize:"xx-large", marginTop:"15px"}}>Das können Sie von einer Zusammenarbeit mit uns erwarten</h1>
        </center>
      </div>

      <div className="row mt-5">
  <div style={styles.container}>
    <div style={{ ...styles.section, ...styles.darkBlue }}>
      <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large", color: "white" }}>Wir leben <br /> für Nachhaltigkeit:</h1>
      <p className='pt-3'>Nicht alles, was nicht mehr benötigt wird, muss weggeworfen werden. Es gibt oft hervorragende Möglichkeiten für eine längerfristige Nutzung in anderen Ländern mit unterschiedlichen Anforderungen. Lebenszyklus von medizinischen Geräten.</p>
    </div>
    <div style={{ ...styles.section, ...styles.lightBeige }}>
      <h2 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large", color: "black" }}>Transparenz und <br /> Zuverlässigkeit</h2>
      <p className='pt-3'>Wir sind immer offen und ehrlich mit Ihnen. Wenn wir Ihnen etwas versprechen, können Sie sich zu 100% darauf verlassen.</p>
    </div>
    <div style={{ ...styles.section, ...styles.lightTeal }}>
      <h2 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large", color: "black" }}>Gute Qualität aller Geräte mit einem <br /> hohen Maß an Sicherheit:</h2>
      <p className='pt-3'>Unsere Mitarbeiter sind hervorragend ausgebildet und wenden ihr Fachwissen gewissenhaft bei der Aufbereitung und Wartung der Geräte an. So können Sie sicher sein, dass Sie hervorragende Qualität und hohe Sicherheit erhalten. Alle gesetzlichen Kalibrierungs- und Prüfanforderungen werden selbstverständlich erfüllt.</p>
    </div>
  </div>
</div>


<div className="row mt-4">
  <center>
    <div style={{backgroundColor:"#F5F5DC"}} className="col-8 p-5">
      <h1 style={{fontWeight:"500",textAlign:"start",fontSize:"x-large"}}>Preisstabilität auch in Krisen- oder Mangelsituationen:</h1>
      <p style={{textAlign:"start"}} className='pt-2'>Selbst wenn bestimmte Gerätetypen, wie z.B. Beatmungsgeräte, knapp werden, halten wir die Preise stabil und nutzen den Mangel nicht aus. Denn unser Hauptanliegen ist Ihre Zufriedenheit und dass wir dazu beitragen, eine gute Versorgung zu gewährleisten.</p>
    </div>
  </center>
</div>


<div className="row d-flex justify-content-center mt-4"> 
  <div  className="col-4"> 
    <img style={{width:"100%",height:"400px"}} src="https://www.med-geraete.de/media/90/12/8e/1702043017/02_Dr_Mueller_Unternehmen_Wertschaetzung_2.jpg" alt="" className="img-fluid" /> 
  </div>
  <div style={{backgroundColor: "#006699", marginLeft:"-10px",height:"400px"}} className="col-4 p-5 align-items-center">
    <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"white" }}>Wertschätzender und freundlicher Umgang:</h1><br />
    <p style={{color:"white"}}>Wir selbst sind sehr kollegial und behandeln einander mit Respekt und Freundlichkeit. Für uns ist jede*r Mitarbeiter*in gleichermaßen wichtig und leistet einen wertvollen Beitrag zum Gesamtergebnis. Und natürlich sind wir zu unseren Kund*innen genauso nett und zuvorkommend wie zueinander.</p>
  </div>
</div>


<div className="row d-flex justify-content-center mt-5">
  <div className="col-4">
    <div style={{backgroundColor:"#F5F5DC", borderRadius:"10px", height:"370px"}} className='p-5'>
      <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large" }}>Flexibilität für <br /> maßgeschneiderte Lösungen:</h1>
      <p className='pt-3'>Wir suchen nach der Lösung, die Sie brauchen – auch für spezielle Anforderungen, fertigen Sonderanfertigungen und liefern auch in entlegene Gebiete.</p>
    </div>
    <div className='mt-4' style={{backgroundColor:"#e0f7fa",borderRadius:"10px"}}>
      <h1 className='p-5' style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large" }}>Reparaturservice auch <br /> für Fremdgeräte:</h1>
      <p className='ps-5 pb-5'>Was viele nicht wissen: Wir reparieren auch Fremdgeräte, die wir nicht selbst verkauft haben oder von Herstellern, die wir nicht führen – zu einem guten Preis, der oft günstiger ist als beim Hersteller.</p>
    </div>
  </div>
  <div className="col-4">
    <div style={{backgroundColor:"#006699", borderRadius:"10px"}} className="col">
      <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large", color: "white" }} className='ps-5 pt-5'>Sehr einfach zu <br /> erreichen:</h1>
      <p style={{color:"white"}} className='ps-5 pt-4 pb-5'>Weil wir wissen, dass manchmal alles schnell gehen muss, stehen wir Ihnen immer zur Verfügung und sind täglich von 7 Uhr bis 17 Uhr erreichbar.</p>
      <img src="https://www.med-geraete.de/media/03/3c/a5/1702043017/02_Dr_Mueller_Unternehmen_Erreichbarkeit_2.jpg" alt="" />
    </div>
  </div>
</div>



<div className="row mt-5 d-flex justify-content-center" style={{backgroundImage:"url('https://www.med-geraete.de/media/09/e7/27/1658916101/02_Dr_Mueller_Unternehmen_Firmenphilosopie.jpg?ts=1658916101')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
  <div className="col-4 p-5">
    <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)" }}>Unsere Arbeit <br /> mit den Geräten</h1>
    <p className='pt-4'>Weil wir makellose Qualität schätzen, werden alle Geräte vor dem Verkauf von unseren erfahrenen Medizintechnikern technisch und optisch überprüft, aufbereitet und anschließend mit einer 12-monatigen Garantie und einer achtjährigen Liefergarantie für Ersatzteile an Kunden weltweit verkauft. Selbstverständlich werden alle gelieferten Geräte mit Betriebshandbuch und den in Deutschland erforderlichen Prüfzertifikaten (STK und MTK) geliefert.</p>
  </div>
  <div className="col-4">
    <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)" }} className='pt-5'>Markenqualität zu einem guten <br /> Preis – unser Sortiment</h1>
    <p className='pt-4'>Unser Produktsortiment umfasst hauptsächlich Anästhesiegeräte (DRÄGER), OP-Tische (MAQUET, SCHMITZ, TRUMPF und SCHAERER), Untersuchungs- und OP-Leuchten (HANAULUX, MARTIN, BERCHTOLD), mobile C-Bögen und Röntgengeräte (SIEMENS, PHILIPS), flexible Endoskope (OLYMPUS), EKGs, Monitore (DRÄGER, SIEMENS, DATEX, GE), OP-Mikroskope (ZEISS, LEICA, WILD, KARL KAPS), Saugpumpen, Autoklaven (MELAG), Infusionspumpen und Spritzenpumpen (BRAUN, FRESENIUS), elektrochirurgische Geräte und mehr.</p>
  </div>
  <h1 className='pt-5' style={{fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)", textAlign:"center"}}>Bundesweiter Service durch Kooperation</h1>
  <div className="col-4 p-5">
    <p className='pt-4'>Wir bieten Ihnen auch die Lieferung von Ersatzteilen und Zubehör für alle Geräte in unserem Sortiment. Um sicherzustellen, dass Sie auch nach Ihrem Kauf exzellenten Service erhalten,</p>
  </div>
  <div className="col-4 p-5">
    <p className='pt-4'>bieten wir Ihnen zusammen mit unseren Kooperationspartnern einen bundesweiten Service für viele Gerätekategorien – wie Anästhesie- und Beatmungsgeräte – an.</p>
  </div>
  <center><button className='ps-3 pe-3 pt-1 pb-1 mb-5' style={{backgroundColor:"rgb(23, 118, 155)",borderRadius:"10px",color:"white"}}>OnlineShop</button></center>
</div>

     



    </div>
  )
}

const styles = {
   container: {
     display: 'grid',
     gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr', 
      gap: '20px', 
      width: '70%', 
      margin: '0 auto',
       padding: '10px',
        boxSizing: 'border-box', 
        
      },
    section: {
         padding: '50px',
          color: '#fff',
          fontWeight:"large"
         },
     darkBlue: {
       backgroundColor: '#2c3e50',
       fontWeight:"large",
        gridColumn: '1 / 2', 
        gridRow: '1 / 3',
       }, 
       lightBeige: { 
        backgroundColor: '#f5f5dc',
         color: '#333',
       },
          lightTeal: { 
        backgroundColor: '#e0f7fa',
         color: '#333', }, };

export default Company