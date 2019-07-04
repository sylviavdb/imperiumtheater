function checkNotEmpty(formField, spanId){
				/*var meldingNaam=document.getElementById('meldingNaam').value;
				var meldingEmail=document.getElementById('meldingEmail').value;
				var meldingVraag=document.getElementById('meldingVraag').value;*/

			if(formField.value.length >1){
					document.getElementById(spanId).innerHTML = "Goed"
				}
				else {
						document.getElementById(spanId).innerHTML = "Niet goed"
					}
				}


	window.onload=function(){
				document.getElementById('naam').onblur = function(){ 
				 checkNotEmpty(naam, 'meldingNaam');
				}
				document.getElementById('geboortedatum').onblur = function(){
				checkNotEmpty(geboortedatum, 'meldingDatum');
					}
				document.getElementById('adres').onblur = function(){
				checkNotEmpty(adres, 'meldingAdres');
					}
				document.getElementById('postcode').onblur = function(){
				checkNotEmpty(postcode, 'meldingCode');
					}
				document.getElementById('woonplaats').onblur = function(){
				checkNotEmpty(woonplaats, 'meldingPlaats');
					}
				document.getElementById('telefoonnummer').onblur = function(){
				checkNotEmpty(telefoonnummer, 'meldingNummer');
					}
				document.getElementById('email').onblur = function(){
				checkNotEmpty(email, 'meldingEmail');
			}
				document.getElementById('groepsnaam').onblur = function(){
				checkNotEmpty(groepsnaam, 'meldingGroepsnaam');
					}
				document.getElementById('leden').onblur = function(){
					checkNotEmpty(leden, 'meldingLeden');
				} 
				document.getElementById('periode1').onblur = function(){
					checkNotEmpty(periode1, 'meldingPeriode');
				}

				sent.onclick = function(){
					document.getElementById('sent').onclick=function(){
					checkNotEmpty('sent');
				}

				}
			}
/*Wanneer je tab drukt werkt de validatie, enter niet*/

