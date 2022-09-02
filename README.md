# Počáteční instalace na Windows

**VS Code**
https://code.visualstudio.com/download
+ nainstalovat Czech language pack

**Git bash**
https://git-scm.com/download/win

**Python** - Windows x86-64 MSI installer (TODO: Je nutné?)
https://www.python.org/downloads/release/python-2718/

**NVM**
https://github.com/coreybutler/nvm-windows/releases
Postup:
- stažení souboru nvm a instalace (Na Windows 10 a vyšší: pravé tlačítko > Spustit jako správce)
- instalace Node JS 12 pomocí příkazu: ``nvm install v12.22.12``
 
**Total commander**
 https://www.ghisler.com/download.htm

**Tvůj účet na Github**
Vývojáři si sdílí svůj kód nejčastěji ve speciálním uložišti zdrojových kódů, jedním z nich je služba github.com Bude potřeba, aby jsi měl svůj účet na kterém se budeš moci pochlubit s tím, co vytvoříš. A je super, že je zdarma. Učet si vytvoříš na adrese:
github.com/signup Potřebuješ k tomu znám svůj email a vymyslet si heslo, k tomuto účtu svoji programátorskou přezdívku.

**Stažení lekcí na tvůj počítač**
Pokud se ti povedlo nainstalova t Git bash, potom si stáhni lekce na disk C:. 
  
Tedy otevři si Git bash a spust příkaz 
  ``cd c:`` 
tím se přepneš na začáteční úroven celého disku C.

A ted už můžeš z Githubu stáhnout lekce, které jsme pro tebe připravili. Lekce obsahují spoustá programátorského kódu, takže Github je pro to skvělé místo. Spust příkaz:
``git clone https://github.com/paoolo/www-pro-deti-001`` 

Nyní se můžeš přepnout na první lekci. Stačí spustit příkaz:
``./lekce1.sh`` 

Nainstalovat tvůj první program pomocí příkazu:
``npm install``

A následně spustit tvůj první program pomocí příkazu:
``npm start``

Je to webová stránka a v prohlížeči ji najdeš na adrese:
``http://localhost:1234``