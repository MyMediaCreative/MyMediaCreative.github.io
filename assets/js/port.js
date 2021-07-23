const PORT_PREV = '<div class="col-md-6 {{type}} {{half}} all proj-prev"><div class="contain"><a href="/work/{{shortname}}"><img id="{{shortname}}" src="../assets/img/{{img}}/thumbnail.png" style="display: block" class="image"><!-- <img src="../assets/img/{{shortname}}/thumbnail.png" style="display: block" class="image"> --></a><div class="mid"><img src="../assets/img/{{shortname}}/logo.png" style="display: block; opacity: 1" class="image" loading="lazy"></div></div><a href="/work/{{shortname}}"><h1 class="pl-1 pt-3 thumbnail-title">{{fullname}}</h1></a><h3 class="thumbnail-title" style="padding-bottom: 3em">{{subtitle}}</h3></div>';

let port = [
  {
    "type": "design strategy web",
    "shortname": "YIC",
    "fullname": "InvestEco + Renewal Funds",
    "subtitle": "web + design + video + strategy"
  },
  {
    "type": "design web",
    "shortname": "psystem",
    "fullname": "Psystem",
    "subtitle": "web + design + strategy"
  },
  {
    "type": "vid",
    "shortname": "mcconnell",
    "fullname": "McConnell Foundation",
    "subtitle": "video"
  },
  {
    "type": "design web strategy",
    "shortname": "infaque",
    "fullname": "Infāque",
    "subtitle": "strategy + design + web"
  },
  {
    "type": "vid",
    "shortname": "upstart",
    "fullname": "UpstartED",
    "subtitle": "video"
  },
  {
    "type": "strategy",
    "shortname": "AisB",
    "fullname": "Apathy is Boring",
    "subtitle": "strategy"
  },
  {
    "type": "vid strategy",
    "shortname": "forgotten",
    "fullname": "Forgotten Names",
    "subtitle": "video + strategy"
  },
  {
    "type": "strategy web design",
    "shortname": "mcluhan",
    "fullname": "McLuhan Foundation",
    "subtitle": "strategy + design + web"
  },
  {
    "type": "strategy design",
    "shortname": "EVD-nofish",
    "fullname": "Easy. Vegan. Delicious. NoFish.",
    "subtitle": "strategy + design"
  },
  {
    "type": "vid",
    "shortname": "SOMM",
    "fullname": "School of Music Montreal",
    "subtitle": "video"
  },
  {
    "type": "web",
    "shortname": "MPCC",
    "fullname": "Milton Parc Citizen's Committee",
    "subtitle": "web"
  },
  {
    "type": "strategy design",
    "shortname": "psystem-listens",
    "fullname": "Psystem Listens",
    "subtitle": "strategy + design"
  },
  {
    "type": "design",
    "shortname": "indigirecruit",
    "fullname": "IndigIrecruit",
    "subtitle": "design"
  },
  {
    "type": "design",
    "shortname": "ethical-coach",
    "fullname": "EthicalCoach",
    "subtitle": "design"
  },
  {
    "type": "vid",
    "shortname": "repit2",
    "fullname": "Pret de ton coeur",
    "subtitle": "video"
  },
  {
    "type": "strategy design",
    "shortname": "MPA",
    "fullname": "McGill Policy Association",
    "subtitle": "strategy + design"
  },
  {
    "type": "strategy design",
    "shortname": "ECxTHP",
    "fullname": "EthicalCoach x The Hunger Project",
    "subtitle": "strategy + design"
  },
  {
    "type": "vid",
    "shortname": "mealcare",
    "fullname": "MealCare",
    "subtitle": "video"
  },
  {
    "type": "design web",
    "shortname": "circulus",
    "fullname": "Circulus AgTech",
    "subtitle": "design + web"
  },
  {
    "type": "vid",
    "shortname": "walksafe",
    "fullname": "WalkSafe",
    "subtitle": "video"
  },
  {
    "type": "vid web",
    "shortname": "divest",
    "fullname": "Divest McGill",
    "subtitle": "video + web"
  },
  {
    "type": "design",
    "shortname": "nofish",
    "fullname": "NoFish",
    "subtitle": "design"
  },
  {
    "type": "vid",
    "shortname": "WUSC",
    "fullname": "WUSC McGill",
    "subtitle": "video"
  },
  {
    "type": "design",
    "shortname": "homie",
    "fullname": "Homie Collection",
    "subtitle": "design"
  },
  {
    "type": "vid",
    "shortname": "story-planet",
    "fullname": "Story Planet",
    "subtitle": "video"
  },
  {
    "type": "design",
    "shortname": "thrive",
    "fullname": "Thrive Collective",
    "subtitle": "design"
  },
  {
    "type": "design web",
    "shortname": "BRB",
    "fullname": "Black Rose Books",
    "subtitle": "design + web"
  },
  {
    "type": "vid",
    "shortname": "AMUSE",
    "fullname": "AMUSE",
    "subtitle": "video"
  },
  {
    "type": "vid web strategy",
    "shortname": "CBYC",
    "fullname": "Sustainable Business Youth Council",
    "subtitle": "strategy + web + video"
  },
  {
    "type": "design web",
    "shortname": "NSILC",
    "fullname": "NSILC",
    "subtitle": "design + web"
  },
  {
    "type": "vid",
    "shortname": "repit",
    "fullname": "Répit-Ressource",
    "subtitle": "video"
  },
  {
    "type": "vid",
    "shortname": "PCPWI",
    "fullname": "PCPWI",
    "subtitle": "video"
  },
  {
    "type": "design strategy",
    "shortname": "mmc-fest",
    "fullname": "MMC Fest",
    "subtitle": "design + strategy"
  },
  {
    "type": "vid",
    "shortname": "kitchen-24",
    "fullname": "Kitchen 24",
    "subtitle": "video"
  },
  {
    "type": "vid web",
    "shortname": "BSN",
    "fullname": "Black Students' Network",
    "subtitle": "web + video"
  },
  {
    "type": "vid",
    "shortname": "EDRSC",
    "fullname": "Eating Disorder Resource & Support Centre",
    "subtitle": "video"
  }
]

function assignData(value, index, array) {
  var p_prev = PORT_PREV.replace("{{type}}", value.type);
  p_prev = p_prev.replace(/{{shortname}}/g, value.shortname);
  p_prev = p_prev.replace(/{{fullname}}/g, value.fullname);
  p_prev = p_prev.replace(/{{subtitle}}/g, value.subtitle);
  if(index > 7) {
    p_prev = p_prev.replace(/{{half}}/g, "sec");
    p_prev = p_prev.replace(/{{img}}/g, "#temp");
  }
  else {
    p_prev = p_prev.replace(/{{half}}/g, "fir");
    p_prev = p_prev.replace(/{{img}}/g, value.shortname);
  }
  document.getElementById("portList").innerHTML += p_prev;
}

port.forEach(assignData);

function assignMoreData(){
  for(i = 0; i < port.length; i++){
    if(i < 8) continue;
    document.getElementById(port[i].shortname).src = "../assets/img/" + port[i].shortname + "/thumbnail.png";
  }
}
