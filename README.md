# Počáteční instalace na Windows

**VS Code**
https://code.visualstudio.com/download
+ nainstalovat Czech language pack

**NVM**
- pro instalaci NVM použijete Brew (pokud ještě nemáme Brew, tak ho nainstalujete z terminálu pomocí ``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`` )
- Instalace nástroje Node version manager (NVM) ``brew install nvm``
- Instalace Node JS 14 pomocí příkazu: ``nvm install v14.20.0``
 
**MU commander**
https://www.mucommander.com/#download

**GIT**
``brew install git``

**Midnight Commander**
``brew install mc``

**iTerm2**
``brew install --cask iterm2``

**Tvůj účet na Github**
Vývojáři si sdílí svůj kód nejčastěji ve speciálním uložišti zdrojových kódů, jedním z nich je služba github.com. Bude potřeba, aby jsi měl svůj účet, na kterém se budeš moci pochlubit s tím, co vytvoříš. A je super, že je zdarma. Učet si vytvoříš na adrese:
github.com/signup Potřebuješ k tomu znát svůj email a vymyslet si heslo, k tomuto účtu svoji programátorskou přezdívku.

**Stažení lekcí na tvůj počítač**
Tedy otevři si iTerm2.

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