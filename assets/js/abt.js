const ABT_RIGHT = '<div class="proj-prev {{type}} all"><div class="row" style="padding-top: 5em; padding-bottom: 5em"><div class="col-8 col-lg-9 align-self-center"><h1 class="title">{{name}}, <span class="hide-xl"><br></span><span class="position avoidwrap">{{title}}</span></h1><h3 class="desc">{{content}}</h3></div><div class="col-4 col-lg-3"><img src="../assets/img/portraits/{{name}}.jpg" style="max-height:100%; max-width: 100%"></div></div></div>';
const ABT_LEFT = '<div class="proj-prev {{type}} all"><div class="row" style="padding-top: 5em; padding-bottom: 5em"><div class="col-4 col-lg-3"><img src="../assets/img/portraits/{{name}}.jpg" style="max-height:100%; max-width: 100%"></div><div class="col-8 col-lg-9 align-self-center"><h1 class="title">{{name}}, <span class="hide-xl"><br></span><span class="position avoidwrap">{{title}}</span></h1><h3 class="desc">{{content}}</h3></div></div></div>';

let abt_list = [
  {
    "type": "exec creat",
    "name": "Tristan Surman",
    "title": "Executive Director",
    "content": "Tristan is in charge of helping the team get access to the strategies, tools and opportunities that drive the organization forward. He loves making music, writing, and learning."
  },
  {
    "type": "exec creat",
    "name": "Tony Wang",
    "title": "Creative Director",
    "content": "Tony is the Creative Director at My Media—he makes sure everything looks pretty and manages the Creative Team. He’s a big fan of horror films, Carly Rae Jepsen, and em dashes."
  },
  {
    "type": "exec creat",
    "name": "Sofia Mikton",
    "title": "Director of Operations",
    "content": "Sofia works with clients and creatives to facilitate and coordinate campaigns. Sofia enjoys reading, baking and playing words with friends."
  },
  {
    "type": "exec creat",
    "name": "Ella Roy",
    "title": "Senior Art Director",
    "content": "Ella's here to oversee My Media’s brand, and works directly with clients to build visual identities and brand strategies. She loves all kinds of design, discovering new places in Montreal and binge-watching The Office."
  },
  {
    "type": "exec creat",
    "name": "Andrew Mingo",
    "title": "Art Director",
    "content": "Andrew works with client on a wide range of design projects. They specialize in branding and visual identity, as well as web and motion graphics. When Andrew is not designing you can find him bingeing the newest queer drama on Netflix or catching up on some Z’s."
  },
  {
    "type": "exec creat",
    "name": "Liam Chung",
    "title": "Director of Technology and Development",
    "content": "Liam designs and develops the organization's website, and lends expertise in the technical aspects of modern activism. He loves hip hop, Lord of the Rings, and math."
  },
  {
    "type": "exec creat",
    "name": "Max Brauch",
    "title": "Director of Video",
    "content": "Max helps to shoot, edit, and direct the organization’s video content. He is a student filmmaker, and believes passionately in the power of activism through storytelling."
  },
  {
    "type": "exec creat",
    "name": "Ariane Te",
    "title": "Director of Product Design",
    "content": "Ariane works with clients to create effective and meaningful digital experiences. She loves drawing, moshing, and (sometimes) weight training."
  },
  {
    "type": "exec creat",
    "name": "Simrit Dhillon",
    "title": "UX/UI Designer",
    "content": "Simrit is a UX/UI designer, illustrator, and huge marvel fan. She loves to watch movies, read books, listen to Khalid, and push pixels to perfection."
  },
  {
    "type": "exec creat",
    "name": "Prerna Vinod",
    "title": "Product Designer",
    "content": "Prerna puts her design skills to use by working on digital interfaces that brings the client’s vision to life. She is a huge fan of crime documentaries, badminton and spending time with her friends."
  },
  {
    "type": "creat",
    "name": "David Boot",
    "title": "Videographer",
    "content": "David is a videographer at My Media, responsible for shooting and editing video content. He loves rap music, Chinese food and the outdoors."
  }
]

function assignData(value, index, array) {
  if(index % 2 == 0){
    var prof = ABT_LEFT.replace("{{type}}", value.type);
    prof = prof.replace(/{{name}}/g, value.name);
    prof = prof.replace(/{{title}}/g, value.title);
    prof = prof.replace(/{{content}}/g, value.content);
    document.getElementById("profiles").innerHTML += prof;
  }
  else{
    var prof = ABT_RIGHT.replace("{{type}}", value.type);
    prof = prof.replace(/{{name}}/g, value.name);
    prof = prof.replace(/{{title}}/g, value.title);
    prof = prof.replace(/{{content}}/g, value.content);
    document.getElementById("profiles").innerHTML += prof;
  }
}

abt_list.forEach(assignData);

// {% include about-profile.html right="hide" type="exec creat"
//             name="Tristan Surman" title="Executive Director"
//             content="Tristan is in charge of helping the team get access to the strategies, tools and opportunities that drive the organization forward. He loves making music, writing, and learning." %}
//
// {% include about-profile.html left="hide" type="exec creat"
//             name="Tony Wang" title="Creative Director"
//             content="Tony makes sure everything looks pretty and manages the Creative Team. He’s a big fan of horror films, Carly Rae Jepsen, and em dashes." %}
//
// {% include about-profile.html right="hide" type="exec creat"
//             name="Ella Roy" title="Art Director"
//             content="Ella's here to oversee My Media’s brand, and works directly with clients to build visual identities and brand strategies. She loves all kinds of design, discovering new places in Montreal and binge-watching The Office."%}
//
// {% include about-profile.html left="hide" type="exec creat"
//             name="Sofia Mikton" title="Campaigns Director"
//             content="Sofia works with clients and creatives to facilitate and coordinate campaigns. Sofia enjoys reading, baking and playing words with friends." %}
//
// {% include about-profile.html right="hide" type="exec creat"
//             name="Max Brauch" title="Director of Video"
//             content="Max helps to shoot, edit, direct, and oversee all of the organization’s video content. He is a student filmmaker, and believes passionately in the power of activism through storytelling." %}
//
// {% include about-profile.html left="hide" type="exec creat"
//             name="Liam Chung" title="Director of Tech and Web"
//             content="Liam designs and develops the organization's website, and lends expertise in the technical aspects of modern activism. He loves hip hop, Lord of the Rings, and math." %}
//
// {% include about-profile.html right="hide" type="exec creat"
//             name="Ariane Te" title="Director of Product Design"
//             content="Ariane works with clients to create effective and meaningful digital experiences. She loves drawing, moshing, and (sometimes) weight training." %}
//
// {% include about-profile.html left="hide" type="exec"
//             name="Ana Earl" title="Director of Operations"
//             content="Ana oversees and sets out a direction for our educational programs. She makes sure the Education and Programs team is on track—and makes sure our curriculum is serving learners. Ana loves her dog, Bee, running, and sweet potatoes." %}
//
// {% include about-profile.html right="hide" type="exec"
//             name="Rachael Madore" title="Director of Outreach"
//             content="Rachael is in charge of building and maintaining connections with local non-profits and eager learners. She helps coordinate the relationship between those two parties. She loves writing music, mindfulness, and markets." %}
//
// {% include about-profile.html left="hide" type="exec"
//             name="Mako Sorensen" title="Director of Education"
//             content="Mako works in collaboration with the creatives to run immersive workshops and educational events. His main interests are in neuroscience and social activism, but what he loves most are people." %}
//
// {% include about-profile.html right="hide" type="exec"
//             name="Nikhita Panwar" title="Director of Education"
//             content="Nikhita works to plan the education curriculum and workshops for My Media and coordinates with external partner organisations for the education program. She likes cooking, eating, and buying more plants than she has space for." %}
//
// {% include about-profile.html left="hide" type="exec"
//             name="Beatrice Dimaculangan" title="Director of Community"
//             content="Bea contributes her activism/organizing experience to help facilitate workshops and foster connections with the community. She is a human rights activist and enjoys painting and making music." %}
//
// {% include about-profile.html right="hide" type="creat"
//             name="Corentin Jeanrot" title="Creative"
//             content="Corentin works directly with clients to build logos, visual identities and branding content. Besides annoying his friends, Corentin loves spending time in nature and going on all sorts of hikes and adventures with his favourite humans." %}
//
// {% include about-profile.html left="hide" type="creat"
//             name="Amy Cooper" title="Creative"
//             content="Amy is a Product Designer at My Media, creating pixel-perfect digital products and creative content with incredible user experiences. She enjoys listening to music, staying active, and reading." %}
//
// {% include about-profile.html right="hide" type="creat last"
//             name="David Boot" title="Creative"
//             content="David is a videographer at My Media, responsible for shooting and editing video content. He loves rap music, Chinese food and the outdoors." %}
//
