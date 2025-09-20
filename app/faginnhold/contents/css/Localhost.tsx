"use client";

export default function LocalhostMobile() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>Localhost på Mobil</h2>
      <p>
        Nå som dere skal skrive koder som fungerer fint på mobil, iPad og desktop,
        kan det være gøy å se hvordan resultatet faktisk blir på mobilen.
      </p>

      <h3>Steg-for-steg guide</h3>

      <h4>1. Finn Din Lokale IP-adresse</h4>
      <p>
        For å nå din lokale server fra en annen enhet, må du først finne IP-adressen til datamaskinen din i det lokale nettverket:
      </p>
      <p><strong>På Windows:</strong></p>
      <ol className="list-decimal list-inside pl-6">
        <li>Åpne Command Prompt ved å søke etter "cmd" i Start-menyen.</li>
        <li>Skriv <code>ipconfig</code> og trykk Enter.</li>
        <li>Finn linjen som heter "IPv4 Address" under nettverkskortet du er koblet til (f.eks. "Wireless LAN adapter Wi-Fi").</li>
        <li>Noter IP-adressen, for eksempel <code>192.168.1.10</code>.</li>
      </ol>

      <p><strong>På macOS:</strong></p>
      <ol className="list-decimal list-inside pl-6">
        <li>Åpne System Preferences → Network.</li>
        <li>Velg nettverket du er koblet til (Wi-Fi eller Ethernet).</li>
        <li>IP-adressen vil vises som "Status: Connected" etterfulgt av IP-en, f.eks. <code>192.168.1.10</code>.</li>
      </ol>

      <h4>2. Start Lokal Serveren</h4>
      <p>
        Kjør serveren din på datamaskinen. Sjekk at den fungerer på <code>localhost</code>. Vanlige porter er 3000, 8000, 8080 osv.
      </p>

      <h4>3. Konfigurer Brannmurinnstillinger (Hvis Nødvendig)</h4>
      <p>
        Hvis brannmuren blokkerer tilgangen, gi tillatelse for porten serveren bruker:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li>Windows: "Windows Defender Firewall with Advanced Security".</li>
        <li>macOS: Administrer via systeminnstillinger eller midlertidig deaktivere for testing.</li>
      </ul>

      <h4>4. Åpne Siden på Mobilen</h4>
      <p>
        Åpne nettleseren på mobilen og skriv inn datamaskinens IP-adresse etterfulgt av porten der serveren kjører, for eksempel:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`http://192.168.1.10:3000`}
      </pre>
      <p>Nå skal nettsiden på localhost vises på mobilen, akkurat som på datamaskinen. Du er klar til å teste nettstedet ditt på mobilen!</p>
    </div>
  );
}
