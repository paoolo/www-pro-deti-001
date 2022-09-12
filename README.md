# Počáteční instalace

**VS Code**
https://code.visualstudio.com/download
+ nainstalovat Czech language pack

**XCode **
- některé programy vyžadují mít tyto programátorské knihovny, je třeba je nainstalovat

``xcode-select --install``

**NVM**
- pro instalaci NVM použijete Brew (pokud ještě nemáme Brew, tak ho nainstalujete z terminálu pomocí 

``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`` )
- Instalace nástroje Node version manager (NVM) 

``brew install nvm`` 

a dále je nutné nvm nakonfigurovat ~/.bash_profile tak, jak je uvedeno zde: https://tecadmin.net/install-nvm-macos-with-homebrew/

- Pokud se Vám úspěšně povedlo předešlý krok, tak je již možná instalace Node JS 14 pomocí příkazu: 

``nvm install v14.20.0``
 
**MU commander**
https://www.mucommander.com/#download

**GIT**

``brew install git``

**Midnight Commander**

``brew install mc``

**oh-my-zsh**

``sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"``
Po instalaci oh my zsh je třeba přidat do jeho konfigurace odkaz na nastavení existujícím shell.
Tedy do souboru ~/.zshrc přidat řádek
``source ~/.bash_profile``

**Tvůj účet na Github**
Vývojáři si sdílí svůj kód nejčastěji ve speciálním uložišti zdrojových kódů, jedním z nich je služba github.com. Bude potřeba, aby jsi měl svůj účet, na kterém se budeš moci pochlubit s tím, co vytvoříš. A je super, že je zdarma. Učet si vytvoříš na adrese:
github.com/signup Potřebuješ k tomu znát svůj email a vymyslet si heslo, k tomuto účtu svoji programátorskou přezdívku.

**Stažení lekcí na tvůj počítač**
Tedy otevři si Terminál nebo iTerm2.

A ted už můžeš z Githubu stáhnout lekce, které jsme pro tebe připravili. Lekce obsahují spoustu programátorského kódu, takže Github je pro to skvělé místo. Spust příkaz:
``git clone https://github.com/paoolo/www-pro-deti-001`` 

Přepni se do adresáře www-pro-deti-001:

``cd www-pro-deti-001`` 

Nyní se můžeš přepnout na první lekci. Stačí spustit příkaz:

``./lekce1.sh`` 

Nainstalovat tvůj první program pomocí příkazu:

``npm install``

A následně spustit tvůj první program pomocí příkazu:

``npm start``

Je to webová stránka a v prohlížeči ji najdeš na adrese:

``http://localhost:1234``