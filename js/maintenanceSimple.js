// ----------------   Selections DOM  --------------------
// Sections
const sectionFormulaire = document.querySelector(".sectionFormulaire");
const sectionGenerateBtn = document.querySelector(".sectionGenerateBtn");
const sectionPDF = document.querySelector(".sectionPDF");

// INPUTS FORMULAIRE
// Inputs formulaire client
const nomInput = document.querySelector("#firstNameInput");
const prenomInput = document.querySelector("#secondNameInput");
const telInput = document.querySelector("#telInput");
const mailInput = document.querySelector("#mailInput");
const adresseInput = document.querySelector("#adresseInput");
const codepostalInput = document.querySelector("#codepostalInput");
const villeInput = document.querySelector("#villeInput");
// Inputs formulaire installation
const typeSystemeInput = document.querySelector("#typeSystemeInput");
const systemePriceContainer = document.querySelector(".systemePriceContainer");
const marqueInput = document.querySelector("#marqueInput");
const refInput = document.querySelector("#refInput");
const fluideSelect = document.querySelector("#fluideSelect");
const chargeInput = document.querySelector("#chargeInput");
const dateInstallationInput = document.querySelector("#dateInstallationInput");
const detailsInstallationInput = document.querySelector(
  "#detailsInstallationInput"
);
// Inputs formulaire contrat & options
const dateContratInput = document.querySelector("#dateContratInput");
const tvaSelect = document.querySelector("#tvaSelect");
const clauseInput = document.querySelector("#clauseInput");
const visitInput = document.querySelector(".visitInput");
const deplacementSuppInput = document.querySelector("#deplacementSuppInput");
const deplacementSuppPriceContainer = document.querySelector(
  ".deplacementSuppPriceContainer"
);
const optionSuppInput = document.querySelector("#optionSuppInput");
const optionSuppPriceContainer = document.querySelector(
  ".optionSuppPriceContainer"
);

// BOUTONS
// Bouton générer contrat
const generateBtn = document.querySelector(".generateBtn");
// Bouton pour télécharge le PDF
const downloadPdfBtn = document.querySelector(".downloadPdfBtn");
//  Bouton retour au formulaire
const backBtn = document.querySelector(".backBtn");

const generateMessage = document.querySelector(".generateMessage");

// INPUTS PDF
// Inputs PDF client
const pdf_Nom_Input = document.querySelector("#pdf_Nom_Input");
const pdf_Prenom_Input = document.querySelector("#pdf_Prenom_Input");
const pdf_Tel_Input = document.querySelector("#pdf_Tel_Input");
const pdf_Mail_Input = document.querySelector("#pdf_Mail_Input");
const pdf_Adresse_Input = document.querySelector("#pdf_Adresse_Input");
const pdf_Codepostal_Input = document.querySelector("#pdf_Codepostal_Input");
const pdf_Ville_Input = document.querySelector("#pdf_Ville_Input");
// Inputs PDF installation
const pdf_Systeme_Input = document.querySelector("#pdf_Systeme_Input");
const pdf_Details_Installation_Input = document.querySelector(
  "#pdf_Details_Installation_Input"
);
const pdf_Marque_Input = document.querySelector("#pdf_Marque_Input");
const pdf_Ref_Input = document.querySelector("#pdf_Ref_Input");
const pdf_Fluide_Input = document.querySelector("#pdf_Fluide_Input");
const pdf_Charge_Input = document.querySelector("#pdf_Charge_Input");
const pdf_Date_Installation_Input = document.querySelector(
  "#pdf_Date_Installation_Input"
);
const pdf_Visites_Input = document.querySelector("#pdf_Visites_Input");
// Inputs PDF ARRAY
const pdf_Prix_Systeme_Input = document.querySelector(
  "#pdf_Prix_Systeme_Input"
);
const pdf_Prix_Deplacementsupp_Input = document.querySelector(
  "#pdf_Prix_Deplacementsupp_Input"
);
const pdf_Prix_Optionsupp_Input = document.querySelector(
  "#pdf_Prix_Optionsupp_Input"
);

const pdf_Deplacementsupp_Input = document.querySelector(
  "#pdf_Deplacementsupp_Input"
);
const pdf_Optionsupp_Input = document.querySelector("#pdf_Optionsupp_Input");

const pdf_Prix_Ht_Input = document.querySelector("#pdf_Prix_Ht_Input");
const pdf_Prix_Tva_Input = document.querySelector("#pdf_Prix_Tva_Input");
const pdf_Taux_Tva_Input = document.querySelector("#pdf_Taux_Tva_Input");
const pdf_Prix_Ttc_Input = document.querySelector("#pdf_Prix_Ttc_Input");

const pdf_Clause_Input = document.querySelector("#pdf_Clause_Input");
const pdf_Date_Contrat_Input = document.querySelector(
  "#pdf_Date_Contrat_Input"
);

// -----------------  CAS GENERAL  --------------------------

// Tableaux CAS GENERAL
// Tableau système maintenance simple
const maintenanceProductsTab = [
  "1 Mono split",
  "1 Bi-split",
  "1 Tri-split",
  "1 Quadri-split",
  "1 Split gainable",
  "1 PAC résidentiel Air/Eau basse température",
  "1 PAC résidentiel Air/Eau haute température",
  "1 Ballon ECS Thermodynamique",
  "1 PAC Piscine",
  "Jusqu'à 3 unités intérieures",
  "De 3 à 6 unités intérieures",
  "2 splits gainable",
];
// Tableau prix maintenance simple
const maintenancePriceTab = [
  135.44, 171.94, 195.5, 232.0, 195.5, 171.94, 220.23, 93.04, 135.44, 195.5,
  232.0, 261.45,
];

// Appel fonction création liste installations
createProductList();
// Fonction pour créer la liste de types d'installation
function createProductList() {
  for (let products in maintenanceProductsTab) {
    let productOption = document.createElement("option");
    productOption.innerHTML = maintenanceProductsTab[products];
    typeSystemeInput.appendChild(productOption);
  }
}
// Appel fonction ajout du prix correspondant
insertPrice();
typeSystemeInput.addEventListener("change", () => {
  insertPrice();
});
// Fonction pour ajouter le tarif correspondant
function insertPrice() {
  let productIndex = maintenanceProductsTab.indexOf(typeSystemeInput.value);
  systemePriceContainer.innerText = `${maintenancePriceTab[productIndex]} €`;
}

// ----------------------   DEPLACEMENT SUPP   -------------------------

// Tableaux DEPLACEMENT SUPPLEMENTAIRE
// Tableau deplacement supplémentaire simple
const deplacementSuppTab = [
  "",
  "Zone B rayon 50-70 Kms",
  "Zone C rayon 70-100 Kms",
  "Zone D rayon 100-120 Kms",
];
// Tableau prix deplacement supplémentaires simple
const deplacementSuppPriceTab = [0, 16.79, 62.64, 109.91];

// Appel fonction création liste déplacement supp
createDeplacementList();
// Fonction pour créer la liste de déplacement supp
function createDeplacementList() {
  for (let deplacements in deplacementSuppTab) {
    let deplacementOption = document.createElement("option");
    deplacementOption.innerHTML = deplacementSuppTab[deplacements];
    deplacementSuppInput.appendChild(deplacementOption);
  }
}

// Appel fonction afficher prix déplacement
insertdeplacementSuppPrice();
// Appel fonction afficher prix déplacement au changement
deplacementSuppInput.addEventListener("change", () => {
  insertdeplacementSuppPrice();
});
// Fonction pour afficher le prix déplacement supplémentaire correspondant
function insertdeplacementSuppPrice() {
  let productIndex = deplacementSuppTab.indexOf(deplacementSuppInput.value);
  deplacementSuppPriceContainer.innerText = `${deplacementSuppPriceTab[productIndex]} €`;
}

// ----------------------   OPTIONS SUPP   -------------------------

// Tableaux OPTIONS SUPPLEMENTAIRES
// Tableau options supplémentaires simple
const optionSuppTab = ["", "Option Piscine sur PAC", "Option PAC > à 25 Kw"];
// Tableau prix options supplémentaires simple
const optionSuppPriceTab = [0, 51.76, 46.09];

// Appel fonction pour créer la liste des options
createOptionsList();
// Fonction pour créer la liste des options
function createOptionsList() {
  for (let options in optionSuppTab) {
    let optionSupp = document.createElement("option");
    optionSupp.innerHTML = optionSuppTab[options];
    optionSuppInput.appendChild(optionSupp);
  }
}

// Appel fonction afficher le prix option supplémentaire correspondant
insertOptionsSuppPrice();
// Appel fonction afficher le prix option supplémentaire correspondant au changement
optionSuppInput.addEventListener("change", () => {
  insertOptionsSuppPrice();
});
//  Fonction pour afficher le prix option supplémentaire correspondant
function insertOptionsSuppPrice() {
  let productIndex = optionSuppTab.indexOf(optionSuppInput.value);
  optionSuppPriceContainer.innerText = `${optionSuppPriceTab[productIndex]} €`;
}

// -------------------------   PUSH INFOS  -----------------------------

// J'apelle la fonction pour envoyer les données du formulaire dans le PDF
pushFormInformations();
// Fonction pour envoyer les données du formulaire dans le PDF
function pushFormInformations() {
  generateBtn.addEventListener("click", () => {
    // Inputs infos clients
    pdf_Nom_Input.innerText = nomInput.value;
    pdf_Prenom_Input.innerText = prenomInput.value;
    pdf_Tel_Input.innerText = telInput.value;
    pdf_Mail_Input.innerText = mailInput.value;
    pdf_Adresse_Input.innerText = adresseInput.value;
    pdf_Codepostal_Input.innerText = codepostalInput.value;
    pdf_Ville_Input.innerText = villeInput.value;
    // Inputs infos installation
    pdf_Systeme_Input.innerText = typeSystemeInput.value;
    pdf_Details_Installation_Input.innerText = detailsInstallationInput.value;
    pdf_Marque_Input.innerText = marqueInput.value;
    pdf_Ref_Input.innerText = refInput.value;
    pdf_Fluide_Input.innerText = fluideSelect.value;
    pdf_Charge_Input.innerText = chargeInput.value;
    pdf_Date_Installation_Input.innerText = dateInstallationInput.value;
    pdf_Visites_Input.innerText = visitInput.value;
    // Inputs PDF ARRAY
    pdf_Prix_Systeme_Input.innerText = systemePriceContainer.innerText;
    pdf_Deplacementsupp_Input.innerText = deplacementSuppInput.value;
    pdf_Prix_Deplacementsupp_Input.innerText =
      deplacementSuppPriceContainer.innerText;
    pdf_Optionsupp_Input.innerText = optionSuppInput.value;
    pdf_Prix_Optionsupp_Input.innerText = optionSuppPriceContainer.innerText;
    pdf_Taux_Tva_Input.innerHTML = parseFloat(tvaSelect.value * 100) + "%";
    pdf_Date_Contrat_Input.innerHTML = dateContratInput.value;
    pdf_Clause_Input.innerHTML = clauseInput.value;
  });
}

// -------------------------- APPARITIONS / DISPARISTION BOUTONS  ----------------------------

// Appel fonction faire disparaitre au clic sur le bouton "Génerer"
disappearForm();
// Fonction pour faire disparaitre le formulaire au clic sur le bouton "Génerer"
function disappearForm() {
  generateBtn.addEventListener("click", () => {
    sectionFormulaire.classList.toggle("disappearItem");
    sectionPDF.classList.toggle("disappearItem");
    generateBtn.classList.toggle("disappearItem");
    // backBtn.classList.toggle("disappearItem");
    downloadPdfBtn.classList.toggle("disappearItem");
    generateMessage.classList.toggle("disappearItem");
  });
}

// -----------------------------  CALCUL ET A AFFICHAGES PRIX  ------------------------------------

// Fonction pour calculer les prix HT, TVA et TTC
calculatePricesInPdf();
function calculatePricesInPdf() {
  generateBtn.addEventListener("click", () => {
    // Calcul HT
    let price = parseFloat(pdf_Prix_Systeme_Input.innerText.replace("€", ""));
    let deplacement = parseFloat(
      pdf_Prix_Deplacementsupp_Input.innerText.replace("€", "")
    );
    let option = parseFloat(
      pdf_Prix_Optionsupp_Input.innerText.replace("€", "")
    );
    let htPrice = parseFloat(price + deplacement + option);
    pdf_Prix_Ht_Input.innerText = htPrice.toFixed(2) + " €";

    // Calcul TVA
    let tvaPercent = parseFloat(tvaSelect.value);
    let tvaPrice = parseFloat(htPrice * tvaPercent);
    pdf_Prix_Tva_Input.innerText = parseFloat(tvaPrice).toFixed(2) + " €";

    // Calcul total
    let ttcPrice = +parseFloat(htPrice + tvaPrice).toFixed(2);
    pdf_Prix_Ttc_Input.innerText = ttcPrice + " €";
  });
}

// ----------------------------  GESTION POUR GENERER LE PDF  ---------------------------------------

// // Appel fonction créer le pdf
createPdf();

// Fonction pour créer le pdf
function createPdf() {
  // Paramètres pour html2pdf
  let pdfOpt = {
    margin: [0, 0, 0, 0],
    filename: `Contrat de maintenance`,
    image: { type: "jpeg", quality: 1 },
    pagebreak: { after: [".pdfPiedDePage"] },
    html2canvas: {
      dpi: 192,
      scale: 4,
      letterRendering: true,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  const worker = html2pdf();
  const toPrint = document.querySelector(".toPrint");
  // Download au click
  downloadPdfBtn.addEventListener("click", () => {
    worker.set(pdfOpt).from(toPrint).save();
  });
}
