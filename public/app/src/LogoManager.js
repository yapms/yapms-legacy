class LogoManager {
	static toggleLogo(name) {
		var logoSlot = document.getElementById("logo-div");
		switch(name) {
			case "LTE":
			logoSlot.style.backgroundImage = 'url("./res/logos/lte.png")';
			break;
			case "RedEagle":
			logoSlot.style.backgroundImage = 'url("./res/logos/redeagletv.png")';
			break;
			case "PG":
			logoSlot.style.backgroundImage = 'url("./res/logos/pg.png")';
			break;
			case "EP":
			logoSlot.style.backgroundImage = 'url("./res/logos/ep.png")';
			break;
			case "RedDonkey":
			logoSlot.style.backgroundImage = 'url("./res/logos/reddonkey.png")';
			break;
			case "PoliticalAnalyst":
			logoSlot.style.backgroundImage = 'url("./res/logos/pa.png")';
			break;
		}
	
		if(LogoManager.currentLogo !== name) {
			logoSlot.style.display = "inline";
		} else if(logoSlot.style.display === "") {
			logoSlot.style.display = "inline";
		} else if(logoSlot.style.display === "inline") {
			logoSlot.style.display = "";
		}

		LogoManager.currentLogo = name;
	}

	static loadButtons() {
		if(LogoManager.buttonsLoaded) {
			return;
		}
		LogoManager.buttonsLoaded = true;

		var backButtons_addcandidatemenu = document.getElementsByClassName("backbutton-addcandidatemenu");
		var backButtons = document.getElementsByClassName("backbutton");
		var closeButtons = document.getElementsByClassName("closebutton");

		for(var index = 0; index < backButtons_addcandidatemenu.length; ++index) {
			var button = backButtons_addcandidatemenu[index];
			button.setAttribute("data", "./html/backbutton-addcandidate.svg");	
		}

		for(var index = 0; index < backButtons.length; ++index) {
			var button = backButtons[index];
			button.setAttribute("data", "./html/backbutton.svg");
		}

		for(var index = 0; index < closeButtons.length; ++index) {
			var button = closeButtons[index];
			button.setAttribute("data", "./html/closebutton.svg");
		}
	}

	static loadFlags() {
		if(LogoManager.flagsLoaded) {
			return;
		}
		LogoManager.flagsLoaded = true;

		var countries = ['aus', 'usa', 'bra', 'can', 'ger', 'ind',
			'ita', 'ire', 'ned', 'prt', 'rus', 'esp', 'tur',
			'ukd', 'eu', 'un', 'fra', 'tat', 'che', 'zaf', 'swe',
			'arg', 'pak'];
	
		for(var countryIndex = 0; countryIndex < countries.length; ++countryIndex) {	
			var country = countries[countryIndex];
			var elements = document.getElementsByClassName("flag-" + country);
			for(var elementIndex = 0; elementIndex < elements.length; ++elementIndex) {
				var flag = elements[elementIndex];
				flag.setAttribute("src", "res/flags/" + country + ".svg");
			}	
		}
	}
}

LogoManager.currentLogo = "";
LogoManager.buttonsLoaded = false;
LogoManager.flagsLoaded = false;
