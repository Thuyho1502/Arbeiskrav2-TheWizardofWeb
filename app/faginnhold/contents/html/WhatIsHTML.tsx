"use client";
export default function WhatIsHTML() {
  return (
    <div className="prose">
        <h6></h6>
      <p>
        ​HTML, eller HyperText Markup Language, er grunnsteinen i webutvikling.
        Det er et standardisert språk som brukes til å lage nettsider og strukturere 
        innholdet på dem. HTML brukes til å definere strukturen og semantikken til en webside
        ved å bruke en serie med koder eller "tags" som om​slutter ulike deler av innholdet.</p>
        <p>Her er noen nøkkelkonsepter og elementer i HTML:</p> <br />
        
      
        <li>
          <p>  
          Tags (koder): HTML bruker en samling av koder, som kalles tags, for å angi ulike elementer på en webside.
          Tags er vanligvis skrevet innenfor vinkelparenteser, for eksempel &lt;&gt;. 
          Hvert tag har en starttag &lt;tag&gt; og en sluttag &lt;/tag&gt;, 
          og de omslutter innholdet som skal vises på websiden.</p>
        </li>
        <li>
            <p>Struktur: HTML gir struktur til en webside ved å tillate utviklere å opprette hierarkier av elementer. 
          For eksempel, <code>&lt;html&gt;</code>-taggen inneholder hele websiden, 
          <code>&lt;head&gt;</code>-taggen inneholder metainformasjon om siden, og 
          <code>&lt;body&gt;</code>-taggen inneholder selve innholdet.</p>
        </li>
      
      <pre>
        <code>{`<p>Hello World</p>`}</code>
      </pre>
    </div>
  )
}
