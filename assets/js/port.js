const PORT_PREV = '<div class="col-md-6 {{type}} {{half}} all proj-prev"><div class="contain"><a href="/work/{{shortname}}"><img id="{{shortname}}" src="../assets/img/{{img}}/thumbnail.png" style="display: block" class="image"><!-- <img src="../assets/img/{{shortname}}/thumbnail.png" style="display: block" class="image"> --></a><div class="mid"><img src="../assets/img/{{shortname}}/logo.png" style="display: block; opacity: 1" class="image" loading="lazy"></div></div><a href="/work/{{shortname}}"><h1 class="pl-1 pt-3 thumbnail-title">{{fullname}}</h1></a><h3 class="thumbnail-title" style="padding-bottom: 3em">{{subtitle}}</h3></div>';

let port = [
  {
    "type": "socmed",
    "shortname": "AisB",
    "fullname": "Apathy is Boring",
    "subtitle": "social media"
  },
  {
    "type": "vid",
    "shortname": "upstart",
    "fullname": "UpstartED",
    "subtitle": "video"
  },
  {
    "type": "brand",
    "shortname": "indigirecruit",
    "fullname": "IndigIrecruit",
    "subtitle": "brand"
  },
  {
    "type": "brand web",
    "shortname": "circulus",
    "fullname": "Circulus AgTech",
    "subtitle": "brand + web"
  },
  {
    "type": "vid web",
    "shortname": "divest",
    "fullname": "Divest McGill",
    "subtitle": "video + web"
  },
  {
    "type": "web",
    "shortname": "MPCC",
    "fullname": "Milton Parc Citizen's Committee",
    "subtitle": "web"
  },
  {
    "type": "brand socmed web",
    "shortname": "YIC",
    "fullname": "InvestEco + Renewal Funds",
    "subtitle": "web + brand + social media"
  },
  {
    "type": "vid socmed",
    "shortname": "SOMM",
    "fullname": "School of Music Montreal",
    "subtitle": "video + social media"
  },
  {
    "type": "vid",
    "shortname": "mealcare",
    "fullname": "MealCare",
    "subtitle": "video"
  },
  {
    "type": "vid web socmed",
    "shortname": "CBYC",
    "fullname": "Sustainable Business Youth Council",
    "subtitle": "social media + web + video"
  },
  {
    "type": "brand web",
    "shortname": "NSILC",
    "fullname": "NSILC",
    "subtitle": "brand + web"
  },
  {
    "type": "brand",
    "shortname": "thrive",
    "fullname": "Thrive Collective",
    "subtitle": "brand"
  },
  {
    "type": "brand socmed",
    "shortname": "mmc-fest",
    "fullname": "MMC Fest",
    "subtitle": "brand + social media"
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

// <div class="col-md-6 {{ include.type }} all proj-prev">
//   <div class="contain">
//     <a href="/work/{{ include.shortname }}">
//       <img style="display: block" class="image">
//       <!-- <img src="../assets/img/{{ include.shortname }}/thumbnail.png" style="display: block" class="image"> -->
//     </a>
//     <div class="mid">
//       <img src="../assets/img/{{ include.shortname }}/logo.png" style="display: block; opacity: 1" class="image" loading="lazy">
//     </div>
//   </div>
//   <a href="/work/{{ include.shortname }}"><h1 class="pl-1 pt-3 thumbnail-title">{{ include.fullname }}</h1></a>
//   <h3 class="thumbnail-title" style="padding-bottom: 3em">{{ include.subtitle }}</h3>
// </div>


// {% comment %}
// {% include project-preview.html type="socmed"
//                                 fullname="Apathy is Boring"
//                                 shortname="AisB" subtitle="social media" %}
//
// {% include project-preview.html type="vid"
//                                 fullname="UpstartED"
//                                 shortname="upstart" subtitle="video" %}
//
// {% include project-preview.html type="vid socmed"
//                                 fullname="The School of Music Montreal"
//                                 shortname="SOMM" subtitle="video + social media" %}
//
// {% include project-preview.html type="brand web"
//                                 fullname="Circulus AgTech"
//                                 shortname="circulus" subtitle="brand + web" %}
//
// {% include project-preview.html type="vid web"
//                                 fullname="Divest McGill"
//                                 shortname="divest" subtitle="video + website" %}
//
// {% include project-preview.html type="web"
//                                 fullname="Milton Parc Citizen's Committee"
//                                 shortname="MPCC" subtitle="web" %}
//
// {% include project-preview.html type="brand socmed web"
//                                 fullname="Youth Impact Challenge"
//                                 shortname="YIC" subtitle="website + brand + social media" %}
//
// {% include project-preview.html type="brand"
//                                 fullname="IndigIrecruit"
//                                 shortname="indigirecruit" subtitle="brand" %}
//
// {% include project-preview.html type="vid"
//                                 fullname="MealCare National"
//                                 shortname="mealcare" subtitle="video" %}
//
// {% include project-preview.html type="brand web"
//                                 fullname="NSILC"
//                                 shortname="NSILC" subtitle="brand + web" %}
//
// {% include project-preview.html type="vid web socmed"
//                                 fullname="Sustainable Business Youth Council"
//                                 shortname="CBYC" subtitle="social media + web + video" %}
//
// {% include project-preview.html type="brand"
//                                 fullname="Thrive Collective"
//                                 shortname="thrive" subtitle="brand" %}
//
// {% include project-preview.html type="brand socmed"
//                                 fullname="MMC Fest"
//                                 shortname="mmc-fest" subtitle="brand + social media" %}
//
// {% include project-preview.html type="vid"
//                                 fullname="Kitchen 24"
//                                 shortname="kitchen-24" subtitle="video" %}
//
// {% include project-preview.html type="vid web"
//                                 fullname="Black Students' Network"
//                                 shortname="BSN" subtitle="video + website" %}
//
// {% include project-preview.html type="vid"
//                                 fullname="Eating Disorder Resource & Support Centre"
//                                 shortname="EDRSC" subtitle="video" %}
//
// {% endcomment %}
