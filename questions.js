// =========================================================
//  Rizal Reviewer — Question Data (questions.js)
// =========================================================

const QUESTIONS = [

  // ── MULTIPLE CHOICE ──────────────────────────────────────

  {
    id: 1,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Kailan ipinanganak si Jose Rizal?",
    options: ["Hunyo 19, 1861", "Hulyo 19, 1862", "Hunyo 19, 1860", "Mayo 19, 1861"],
    answer: "Hunyo 19, 1861",
    explanation: "Ipinanganak si Jose Rizal noong Hunyo 19, 1861 sa Calamba, Laguna."
  },
  {
    id: 2,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Sino ang unang guro ni Jose Rizal?",
    options: ["Justiniano Aquino Cruz", "Teodora Alonso (kaniyang ina)", "Maestro Celestino", "Leon Monroy"],
    answer: "Teodora Alonso (kaniyang ina)",
    explanation: "Si Teodora Alonso, ina ni Rizal, ang unang nagturo sa kaniya ng pagbabasa, pagsusulat, at iba pang karunungan."
  },
  {
    id: 3,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang sagisag-panulat (pseudonym) ni Rizal sa akdang 'Amor Patrio'?",
    options: ["Dimasalang", "Laong-Laan", "P. Jacinto", "R. Tambo"],
    answer: "Laong-Laan",
    explanation: "'Laong-Laan' ang pseudonym ni Rizal sa 'Amor Patrio', na kaniyang isinumite sa pahayagang La Solidaridad."
  },
  {
    id: 4,
    type: "multiple-choice",
    category: "Noli Me Tangere",
    question: "Ilang kopya ang nailimbag sa unang edisyon ng Noli Me Tangere?",
    options: ["1,000", "2,000", "3,000", "500"],
    answer: "2,000",
    explanation: "Dalawang libong (2,000) kopya ang nailimbag sa unang edisyon ng Noli Me Tangere noong 1887 sa Berlin."
  },
  {
    id: 5,
    type: "multiple-choice",
    category: "Noli Me Tangere",
    question: "Sino ang nagpahiram ng ₱300 para mailimbag ang Noli Me Tangere?",
    options: ["Paciano Rizal", "Dr. Reinhold Rost", "Dr. Máximo Viola", "Ferdinand Blumentritt"],
    answer: "Dr. Máximo Viola",
    explanation: "Si Dr. Máximo Viola, kaibigan at kapwa Pilipino, ang nagpahiram ng ₱300 para matustusan ang pagpapalimbag ng Noli."
  },
  {
    id: 6,
    type: "multiple-choice",
    category: "Noli Me Tangere",
    question: "Ano ang literal na kahulugan ng 'Noli Me Tangere'?",
    options: ["Ang Aking Pag-ibig sa Bayan", "Huwag Mo Akong Salingin", "Ang Panlipunang Kanser", "Bayaning Pilipino"],
    answer: "Huwag Mo Akong Salingin",
    explanation: "Latin ang 'Noli Me Tangere' na nangangahulugang 'Huwag Mo Akong Salingin' o 'Touch Me Not'. Mula ito sa Bibliya (Juan 20:17)."
  },
  {
    id: 7,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Kailan pumasok si Rizal sa Ateneo Municipal de Manila?",
    options: ["1870", "1872", "1875", "1877"],
    answer: "1872",
    explanation: "Noong 1872, sa edad na 11 taong gulang, pumasok si Rizal sa Ateneo Municipal de Manila."
  },
  {
    id: 8,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Anong karangalan ang tinanggap ni Rizal nang matapos ang kaniyang pag-aaral sa Ateneo noong 1877?",
    options: ["Cum Laude", "Bachelor of Arts — Sobresaliente (Excellent)", "Summa Cum Laude", "Magna Cum Laude"],
    answer: "Bachelor of Arts — Sobresaliente (Excellent)",
    explanation: "Nagtapos si Rizal sa Ateneo noong 1877 na may degree na Bachelor of Arts at may mataas na karangalang Sobresaliente sa lahat ng asignatura."
  },
  {
    id: 9,
    type: "multiple-choice",
    category: "UST",
    question: "Anong kurso ang una niyang kinuha sa UST pagkatapos ng Ateneo?",
    options: ["Medisina", "Abogasya", "Pilosopiya at Letras", "Inhinyeriya"],
    answer: "Pilosopiya at Letras",
    explanation: "Sa UST, una niyang kinuha ang Pilosopiya at Letras bago lumipat sa Medisina."
  },
  {
    id: 10,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Saang unibersidad nag-aral si Rizal ng medisina sa Espanya?",
    options: ["Universidad de Sevilla", "Universidad Central de Madrid", "Universidad de Barcelona", "Universidad de Valencia"],
    answer: "Universidad Central de Madrid",
    explanation: "Nag-aral si Rizal sa Universidad Central de Madrid kung saan nakakuha siya ng Licentiate in Medicine."
  },
  {
    id: 11,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Saan nailimbag ang Noli Me Tangere noong 1887?",
    options: ["Madrid", "Paris", "Berlin", "Heidelberg"],
    answer: "Berlin",
    explanation: "Nailimbag ang Noli Me Tangere sa Berlin, Germany noong Marso 1887."
  },
  {
    id: 12,
    type: "multiple-choice",
    category: "Lihim na Pag-alis",
    question: "Noong anong taon lihim na umalis si Rizal para pumunta sa Europa?",
    options: ["1880", "1881", "1882", "1883"],
    answer: "1882",
    explanation: "Noong Mayo 3, 1882, lihim na umalis si Rizal sa Pilipinas sakay ng barkong Salvadora."
  },
  {
    id: 13,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Ilan ang magkakapatid ni Jose Rizal sa pamilya Rizal-Alonso?",
    options: ["9", "10", "11", "8"],
    answer: "11",
    explanation: "Labing-isa silang magkakapatid. Si Jose ay ika-siyam sa pagkakasunod."
  },
  {
    id: 14,
    type: "multiple-choice",
    category: "Lipunang Kolonyal",
    question: "Anong pangkat panlipunan ang kinabibilangan ng pamilya Rizal sa ilalim ng kolonyal na pamamahala?",
    options: ["Peninsulares", "Insulares (Creoles)", "Principalia", "Indios"],
    answer: "Principalia",
    explanation: "Ang pamilya Rizal ay kabilang sa Principalia — ang lokal na eliteng Pilipino na may mga pribilehiyo sa pamunuan ng bayan."
  },
  {
    id: 15,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Anong tula ni Rizal ang nanalo ng unang gantimpala sa Liceo Artístico-Literario de Manila noong 1879?",
    options: ["Mi Primera Inspiración", "A la Juventud Filipina", "Al M.R.P. Pablo Ramón", "Sa Aking mga Kababata"],
    answer: "A la Juventud Filipina",
    explanation: "'A la Juventud Filipina' (Sa Kabataang Pilipino) ang nanalo ng unang gantimpala sa Liceo Artístico-Literario de Manila noong 1879. Gantimpala: pilak na panulat na hugis-pakpak."
  },
  {
    id: 16,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Sino ang ama ni Jose Rizal?",
    options: ["Paciano Rizal", "Francisco Mercado Rizal", "Emilio Rizal", "Laureano Cruz"],
    answer: "Francisco Mercado Rizal",
    explanation: "Si Francisco Mercado Rizal ang ama ni Jose Rizal, isang magsasakang may-ari ng lupa sa Calamba, Laguna."
  },
  {
    id: 17,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Saan nakilala ni Rizal si Ferdinand Blumentritt?",
    options: ["Berlin", "Paris", "Leitmeritz, Bohemia (sa pamamagitan ng sulat)", "Heidelberg"],
    answer: "Leitmeritz, Bohemia (sa pamamagitan ng sulat)",
    explanation: "Nakilala ni Rizal si Blumentritt sa pamamagitan ng palitan ng liham (korrespondensiya). Si Blumentritt ay nakatira sa Leitmeritz, Bohemia (ngayon ay Czech Republic)."
  },
  {
    id: 18,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Saang bansa pumunta si Rizal bago dumating sa Pilipinas noong 1888 mula sa Europa?",
    options: ["Tsina at India", "Japan, USA, at England", "Australia at New Zealand", "Canada at Mexico"],
    answer: "Japan, USA, at England",
    explanation: "Sa kaniyang paglalakbay pabalik noong 1888, dumaan si Rizal sa Japan (halos isang buwan), pagkatapos ay sa USA at England."
  },
  {
    id: 19,
    type: "multiple-choice",
    category: "Noli Me Tangere",
    question: "Sino ang pangunahing bida (protagonist) ng Noli Me Tangere?",
    options: ["Padre Damaso", "Crisostomo Ibarra", "Elias", "Kapitan Tiago"],
    answer: "Crisostomo Ibarra",
    explanation: "Si Crisostomo Ibarra ang pangunahing bida ng Noli Me Tangere, isang Pilipinong nakapalag-aral sa Europa."
  },
  {
    id: 20,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Alin sa mga sumusunod ang koleksyon ng mga sanaysay ni Rizal na inilathala sa La Solidaridad?",
    options: ["El Filibusterismo", "Filipinas Dentro de Cien Años", "Ultimo Adios", "Annotation sa Morga"],
    answer: "Filipinas Dentro de Cien Años",
    explanation: "'Filipinas Dentro de Cien Años' (Ang Pilipinas sa Loob ng Isang Daang Taon) ay serye ng mga sanaysay na inilathala ni Rizal sa La Solidaridad."
  },
  {
    id: 21,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Sino ang paboritong guro ni Rizal sa Ateneo na nagbigay ng malaking impluwensiya sa kaniya?",
    options: ["Padre Sanchez", "Padre Guerrico", "Fr. Francisco de Paula Sanchez", "Padre Pablo Ramon"],
    answer: "Fr. Francisco de Paula Sanchez",
    explanation: "Si Fr. Francisco de Paula Sanchez ang pinaka-impluwensiyal na guro ni Rizal sa Ateneo na humikayat sa kaniya sa pagiging manunulat."
  },
  {
    id: 22,
    type: "multiple-choice",
    category: "UST",
    question: "Bakit hindi naging masaya ang karanasan ni Rizal sa UST?",
    options: [
      "Hindi siya tinanggap ng mga Dominikano",
      "Ang diskriminasyon ng mga Espanyol na guro at Pilipino bilang pangalawang uri",
      "Masyadong mahirap ang mga asignatura",
      "Walang pera ang kaniyang pamilya"
    ],
    answer: "Ang diskriminasyon ng mga Espanyol na guro at Pilipino bilang pangalawang uri",
    explanation: "Sa UST, naranasan ni Rizal ang diskriminasyon — ang mga Pilipinong estudyante ay itinuturing na mababa kaysa sa mga Espanyol."
  },
  {
    id: 23,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Sa aling lungsod nagsimula si Rizal ng kaniyang pag-aaral sa oftalmolohi (ophthalmology)?",
    options: ["Madrid", "Paris", "Heidelberg", "Berlin"],
    answer: "Heidelberg",
    explanation: "Sa Heidelberg, Germany, nag-aral si Rizal ng oftalmolohi sa ilalim ni Dr. Otto Becker."
  },
  {
    id: 24,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Ano ang orihinal na apelyido ng pamilya Rizal bago palitan ng Espanyol na gobyerno?",
    options: ["Mercado", "Alonso", "Lamco", "Cruz"],
    answer: "Mercado",
    explanation: "Ang pamilya Rizal ay may apelyidong Mercado bago ito pinalitan. 'Rizal' ay mula sa 'ricial' na ibig sabihin ay berdeng parang taniman."
  },
  {
    id: 25,
    type: "multiple-choice",
    category: "Lipunang Kolonyal",
    question: "Ano ang tawag sa pinakamataas na antas ng lipunang Espanyol sa Pilipinas na ipinanganak sa Espanya?",
    options: ["Insulares", "Mestizos", "Peninsulares", "Principalia"],
    answer: "Peninsulares",
    explanation: "Ang Peninsulares ay mga Espanyol na ipinanganak sa Espanya (sa Iberyang Peninsyula) na may pinakamataas na pribilehiyo sa kolonyal na Pilipinas."
  },

  // ── IDENTIFICATION ────────────────────────────────────────

  {
    id: 26,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang unang tula ni Rizal sa Ateneo na kaniyang inihandog sa kaarawan ng kaniyang ina.",
    answer: "Mi Primera Inspiración",
    explanation: "'Mi Primera Inspiración' (Ang Aking Unang Inspirasyon) ang unang tula ni Rizal sa Ateneo, na inihandog niya sa kaniyang inang si Teodora Alonso."
  },
  {
    id: 27,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang sagisag-panulat ni Rizal sa Masonerya.",
    answer: "Dimasalang",
    explanation: "'Dimasalang' ang kaniyang pangalan sa Masonry — ibig sabihin ay 'hindi maaabot' o 'hindi maaatake'."
  },
  {
    id: 28,
    type: "identification",
    category: "Pangunahing Tao",
    question: "Ang kasintahang naiwan ni Rizal sa Pilipinas na naging inspirasyon ng tauhang María Clara.",
    answer: "Leonor Rivera",
    explanation: "Si Leonor Rivera, ang naging nobya ni Rizal, ang pinaniniwalaang inspirasyon ng tauhang María Clara sa Noli Me Tangere."
  },
  {
    id: 29,
    type: "identification",
    category: "Lihim na Pag-alis",
    question: "Ang barko na sinamahan ni Rizal sa kaniyang lihim na pag-alis sa Pilipinas noong 1882.",
    answer: "Salvadora",
    explanation: "Sakay ng barkong Salvadora na lihim na umalis si Rizal patungong Espanya noong Mayo 3, 1882."
  },
  {
    id: 30,
    type: "identification",
    category: "Pamilya at Kapanganakan",
    question: "Ang tunay na pangalan ni Jose Rizal.",
    answer: "Jose Protacio Rizal Mercado y Alonso Realonda",
    explanation: "Ang buong pangalan ni Rizal ay Jose Protacio Rizal Mercado y Alonso Realonda."
  },
  {
    id: 31,
    type: "identification",
    category: "Noli Me Tangere",
    question: "Ang orihinal na pamagat na pinag-isipan ni Rizal para sa Noli Me Tangere bago naging 'Noli'.",
    answer: "La Mano Roja",
    explanation: "'La Mano Roja' (Ang Pulang Kamay) ang isa sa mga pamagat na pinag-isipan ni Rizal para sa kaniyang nobela."
  },
  {
    id: 32,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang Austrian na propesor at matalik na kaibigan ni Rizal na taga-Leitmeritz, Bohemia.",
    answer: "Ferdinand Blumentritt",
    explanation: "Si Ferdinand Blumentritt ay isang Austrian na propesor at isa sa pinaka-matalik na kaibigan ni Rizal. Naging mahalagang tagasuporta siya ng kilusang pambansa ng Pilipinas."
  },
  {
    id: 33,
    type: "identification",
    category: "Calamba",
    question: "Ang probinsiya kung saan ipinanganak si Jose Rizal.",
    answer: "Calamba, Laguna",
    explanation: "Ipinanganak si Rizal sa Calamba, Laguna — isang bayan na kilala sa agrikultura at sakop ng mga lupain ng mga Dominikano."
  },
  {
    id: 34,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang tula ni Rizal na isinulat niya habang naghihintay ng kamatayan — kaniyang huling akda.",
    answer: "Mi Ultimo Adios",
    explanation: "'Mi Ultimo Adios' (Ang Aking Huling Paalam) ang huling tula ni Rizal na isinulat niya bago siya barilin noong Disyembre 30, 1896."
  },
  {
    id: 35,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang kolektor ng mga Pilipiniana sa British Museum na naging mentor at kaibigan ni Rizal sa London.",
    answer: "Dr. Reinhold Rost",
    explanation: "Si Dr. Reinhold Rost ang librarian ng India Office Library sa London na naging kaibigan at tagasuporta ni Rizal."
  },
  {
    id: 36,
    type: "identification",
    category: "Ateneo Municipal",
    question: "Ang tula ni Rizal na nanalo ng unang gantimpala sa Liceo Artístico-Literario de Manila noong 1879.",
    answer: "A la Juventud Filipina",
    explanation: "'A la Juventud Filipina' ang nanalo sa Liceo Artístico-Literario de Manila noong 1879, isang makasaysayang pangyayari dahil sa unang pagkakataon ay isang Pilipino ang nanalo."
  },
  {
    id: 37,
    type: "identification",
    category: "Pamilya at Kapanganakan",
    question: "Ang kapatid na lalaki ni Rizal na kumilos bilang ama at gabay sa kaniyang edukasyon.",
    answer: "Paciano Rizal",
    explanation: "Si Paciano, ang mas matandang kapatid ni Rizal, ay nagsilbing ama-ama at tagasuporta ng kaniyang edukasyon sa Europa."
  },
  {
    id: 38,
    type: "identification",
    category: "Paglalakbay",
    question: "Ang Haponesang babae na naging romantikong interes ni Rizal sa panahon ng kaniyang pananatili sa Japan.",
    answer: "Seiko Usui (O-Sei-San)",
    explanation: "Si Seiko Usui, kilala rin bilang O-Sei-San, ang Haponesang babae na nakilala ni Rizal sa Tokyo at naging malapit sa kaniya."
  },
  {
    id: 39,
    type: "identification",
    category: "Calamba",
    question: "Ang organisasyong nagmamay-ari ng mga lupain sa Calamba na pinagsilbihan ng pamilya Rizal.",
    answer: "Mga Dominikano (Dominican Friars)",
    explanation: "Ang mga Dominikano ang nagmamay-ari ng malawak na lupain sa Calamba kung saan nagtatrabaho ang mga magsasaka kabilang ang pamilya Rizal."
  },
  {
    id: 40,
    type: "identification",
    category: "Noli Me Tangere",
    question: "Ang lungsod sa Germany kung saan nailimbag ang Noli Me Tangere noong 1887.",
    answer: "Berlin",
    explanation: "Sa Berlin, Germany nailimbag ang Noli Me Tangere sa pamamagitan ng imprenta ni Berliner Buchdruckerei-Actiengesellschaft."
  },

  // ── ENUMERATION ──────────────────────────────────────────

  {
    id: 41,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang tatlong pangunahing ugat (roots) ng pagkabayani ni Jose Rizal ayon sa mga mananalaysay.",
    answer: ["Edukasyon at talino", "Pagmamahal sa bayan at pamilya", "Karanasan ng diskriminasyon at pang-aapi sa ilalim ng kolonyal na pamamahala"],
    explanation: "Ang tatlong ugat ng pagkabayani ni Rizal: ang kaniyang mataas na edukasyon, pagmamahal sa bayan, at personal na karanasan ng kolonyal na pang-aapi."
  },
  {
    id: 42,
    type: "enumeration",
    category: "Calamba",
    question: "Pangalanan ang limang pangunahing daing ng mga magsasaka ng Calamba laban sa mga Dominikano.",
    answer: [
      "Mataas na upa ng lupa",
      "Sapilitang pagtataas ng upa",
      "Pagpapaalis sa magsasaka kahit matagal nang naninirahan",
      "Kawalan ng karapatang bumili ng lupang tinatamnan",
      "Pang-aabuso at karahasan ng mga opisyal ng estate"
    ],
    explanation: "Ang mga daing ng mga magsasaka ng Calamba ay nagtulak sa Rizal na ipaglaban ang karapatan ng kaniyang mga kababayan."
  },
  {
    id: 43,
    type: "enumeration",
    category: "Buhay sa Europa",
    question: "Pangalanan ang apat na lungsod sa Europa kung saan nanirahan o nag-aral si Rizal.",
    answer: ["Madrid", "Paris", "Heidelberg", "Berlin"],
    explanation: "Nanirahan si Rizal sa Madrid (pag-aaral), Paris (pananaliksik), Heidelberg (oftalmolohi), at Berlin (pagsusulat ng Noli)."
  },
  {
    id: 44,
    type: "enumeration",
    category: "Noli Me Tangere",
    question: "Ibigay ang tatlong pangunahing tauhan ng Noli Me Tangere.",
    answer: ["Crisostomo Ibarra", "María Clara", "Elias"],
    explanation: "Ang tatlong sentral na tauhan ng Noli: si Ibarra bilang pangunahing bida, si María Clara bilang simbolo ng Pilipina, at si Elias bilang rebolusyonaryong kaibigan."
  },
  {
    id: 45,
    type: "enumeration",
    category: "Mga Tula at Akda",
    question: "Pangalanan ang tatlong tula ni Rizal na isinulat niya noong siya ay bata pa sa Ateneo.",
    answer: ["Mi Primera Inspiración", "A la Juventud Filipina", "El Consejo de los Dioses"],
    explanation: "Tatlo sa mga kilalang tulang isinulat ni Rizal noong siya ay nasa Ateneo pa."
  },
  {
    id: 46,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang apat na wika na natutunan ni Rizal noong kabataan (bukod sa Filipino).",
    answer: ["Kastila (Español)", "Latin", "Griyego", "Ingles"],
    explanation: "Si Rizal ay higit sa dalawampung wika ang nalalaman. Noong kabataan, natutunan niya ang Kastila, Latin, Griyego, at Ingles."
  },
  {
    id: 47,
    type: "enumeration",
    category: "Lipunang Kolonyal",
    question: "Pangalanan ang tatlong pangunahing antas ng lipunang kolonyal ng Pilipinas sa panahon ni Rizal (mula mataas hanggang mababa).",
    answer: ["Peninsulares", "Insulares (Creoles)", "Indios at Mestizos"],
    explanation: "Ang tatlong pangunahing antas: Peninsulares (Espanyol mula Espanya), Insulares/Creoles (Espanyol ipinanganak sa Pilipinas), at Indios/Mestizos (mga katutubo at halo)."
  },
  {
    id: 48,
    type: "enumeration",
    category: "Paglalakbay",
    question: "Pangalanan ang tatlong bansang pinuntahan ni Rizal noong 1888 sa kaniyang paglalakbay patungong Europa (ikalawang biyahe).",
    answer: ["Japan", "United States of America", "England"],
    explanation: "Sa kaniyang ikalawang biyahe patungong Europa noong 1888, dumaan si Rizal sa Japan, USA, at England."
  },
  {
    id: 49,
    type: "enumeration",
    category: "Buhay sa Europa",
    question: "Ibigay ang dalawang nobela ni Jose Rizal.",
    answer: ["Noli Me Tangere", "El Filibusterismo"],
    explanation: "Dalawa ang nobela ni Rizal: 'Noli Me Tangere' (1887) at 'El Filibusterismo' (1891), na kilala rin bilang 'Ang Fili'."
  },
  {
    id: 50,
    type: "enumeration",
    category: "UST",
    question: "Pangalanan ang dalawang kurso na kinuha ni Rizal sa UST.",
    answer: ["Pilosopiya at Letras", "Medisina"],
    explanation: "Sa UST, una niyang kinuha ang Pilosopiya at Letras, pagkatapos ay lumipat sa Medisina bago siya umalis patungong Europa."
  },

  // ── ESSAY ─────────────────────────────────────────────────

  {
    id: 51,
    type: "essay",
    category: "Mga Tula at Akda",
    question: "Ipaliwanag ang kahalagahan ng 'A la Juventud Filipina' bilang unang pagpapahayag ng nasyonalismo ni Rizal.",
    answer: `Mga pangunahing puntos:
• Ang 'A la Juventud Filipina' ay isinulat ni Rizal noong 1879 nang siya ay 18 taong gulang pa lamang, at nanalo ito ng unang gantimpala sa Liceo Artístico-Literario de Manila.
• Ito ang unang pagkakataon na isang Pilipino ang nanalo ng ganitong uri ng parangal, na nagpapakita na ang mga Pilipino ay may kakayahang makilahok at manalo sa mga intelektwal na paligsahan.
• Sa tula, tinawag ni Rizal ang kabataang Pilipino bilang "pag-asa ng inang bayan" — isang mensahe ng pagmamahal sa bayan at paghikayat sa mga kapwa Pilipino.
• Ipinapakita ng tula ang kamalayan ni Rizal sa kalagayan ng Pilipinas sa ilalim ng kolonyal na pamamahala at ang kaniyang pangarap para sa kalayaan ng bayan.
• Ito rin ang simula ng pagtatanghal ni Rizal ng kaniyang sarili bilang tagapagtaguyod ng nasyonalismong Pilipino sa pamamagitan ng sining at panitikan.`,
    explanation: "Ang 'A la Juventud Filipina' ay isa sa mga pinaka-makabuluhang gawa ng batang Rizal na nagpapakita ng kaniyang pambansang damdamin."
  },
  {
    id: 52,
    type: "essay",
    category: "Lihim na Pag-alis",
    question: "Bakit lihim ang pag-alis ni Rizal sa Pilipinas noong 1882? Ano ang kaniyang mga layunin?",
    answer: `Mga pangunahing puntos:
• Lihim ang pag-alis ni Rizal dahil hindi nagpahintulot ang kaniyang ama na si Francisco at ilang miyembro ng pamilya — natatakot sila sa panganib na maaaring maranasan ni Rizal sa Europa.
• Ang pangunahing layunin niya ay pag-aralan ang medisina sa Europa upang magamot ang nanlalabong mata ng kaniyang ina (glaucoma).
• Nais din niya na makita ang kalagayan ng Pilipinas mula sa pananaw ng ibang bansa at matutunan ang mga ideya ng kalayaan at demokrasya.
• Nais niyang maging propesyonal na manggagamot upang makabalik at maglingkod sa kaniyang bayan.
• Si Paciano, ang kaniyang kapatid, ang tumulong sa kaniya na makaalis nang lihim at nagbigay ng pera para sa kaniyang paglalakbay.
• Lumabas siya sa Pilipinas gamit ang pangalan na 'Jose Mercado' upang hindi matukoy ng mga awtoridad.`,
    explanation: "Ang lihim na pag-alis ni Rizal ay nagpapakita ng kaniyang determinasyon na maghanap ng mas mataas na edukasyon at ng kaniyang pagmamahal sa pamilya at bayan."
  },
  {
    id: 53,
    type: "essay",
    category: "Noli Me Tangere",
    question: "Ipaliwanag kung paano ginamit ni Rizal ang Noli Me Tangere bilang sandata laban sa kolonyal na pamamahala.",
    answer: `Mga pangunahing puntos:
• Ginamit ni Rizal ang Noli Me Tangere upang ilantad ang mga kasamaan ng kolonyal na pamamahala sa Pilipinas — ang korupsyon ng mga prayle, ang kasamaan ng gobyernong Espanyol, at ang pang-aabuso sa mga Pilipino.
• Ang nobela ay nagpakita ng mga realidad na kinatatakutan ng mga Espanyol na malaman ng mundo — kaya nga ipinagbawal ito ng simbahan at pamahalaan.
• Ang mga tauhan tulad ni Padre Damaso ay kinatawan ng mapang-abusong mga prayle, habang si Ibarra ay kumakatawan sa mga naliwanagang Pilipino.
• Ang paggamit ni Rizal ng nobela bilang medium ay mas epektibo kaysa sa direktang pulitika dahil maabot nito ang mas malawak na mambabasa.
• Ang Noli ay nagpukaw ng kamalayan sa mga Pilipino tungkol sa kanilang kalagayan at nagsilbing inspirasyon sa himagsikang rebolusyonaryong isinagawa ng mga sumunod na henerasyon.`,
    explanation: "Ang Noli Me Tangere ay hindi lamang nobela — ito ay isang malakas na pulitikal na sanaysay na nakabalot sa anyong pampanitikan."
  },
  {
    id: 54,
    type: "essay",
    category: "Lipunang Kolonyal",
    question: "Ilarawan ang epekto ng panlipunang pagkakaiba-iba (social stratification) sa karanasan ng mga Pilipino sa panahon ni Rizal.",
    answer: `Mga pangunahing puntos:
• Ang lipunang kolonyal ay pinaghati-hati sa mga pangkat: Peninsulares (Espanyol mula Espanya), Insulares (Espanyol ipinanganak sa Pilipinas), Principalia (lokal na elite), at Indios (karamihang Pilipino).
• Ang mga Pilipino ay itinuturing na mababa sa lipunan at kailangan nilang magbayad ng buwis, magbigay ng libreng paggawa (polo y servicios), at sumunod sa lahat ng kautusan ng Espanyol.
• Kahit ang mga edukadong Pilipino tulad ni Rizal ay naranasan ang diskriminasyon — sa UST, mas mababa ang tingin ng mga Espanyol na guro sa mga Pilipinong estudyante.
• Ang pagkakaiba ng lipunan ay nagbigay ng inspirasyon sa kilusang propaganda at sa mga Ilustrado tulad ni Rizal na ipaglaban ang pagkakapantay-pantay.
• Ang pagsasalita ni Rizal tungkol sa kalagayang ito sa Noli Me Tangere ay nagbukas ng mata ng mga Pilipino at ng internasyonal na komunidad.`,
    explanation: "Ang panlipunang pagkakaiba-iba sa kolonyal na Pilipinas ay isa sa mga pangunahing tema sa mga akda ni Rizal."
  },
  {
    id: 55,
    type: "essay",
    category: "Buhay sa Europa",
    question: "Ano ang kahalagahan ng panahon ni Rizal sa Berlin sa kaniyang pag-unlad bilang manunulat at propagandista?",
    answer: `Mga pangunahing puntos:
• Sa Berlin (1886-1887), natapos ni Rizal ang Noli Me Tangere — ang pinakamahalaga niyang akda.
• Nakihalubilo siya sa mga siyentipiko at intelektwal tulad ni Rudolf Virchow at iba pang miyembro ng Berlin Society of Anthropology, Ethnology and Prehistory.
• Sa Berlin, nagpatuloy ang kaniyang pag-aaral sa medisina at naging mahusay na ophthalmologist (doktor ng mata).
• Nakilala niya si Dr. Máximo Viola na nagpahiram ng ₱300 para mailimbag ang Noli.
• Ang karanasan sa Berlin ay nagpalawig ng kaniyang pananaw tungkol sa agham, kultura, at panlipunang pagbabago.
• Noong 1887, naglathala rin siya ng mga sanaysay na nagpapakita ng kaniyang malalim na pag-unawa sa kasaysayan at kultura ng Pilipinas.`,
    explanation: "Ang panahon sa Berlin ay marahil ang pinaka-produktibong yugto ng kaniyang buhay bilang manunulat."
  },
  {
    id: 56,
    type: "essay",
    category: "Pamilya at Kapanganakan",
    question: "Paano naimpluwensiyahan ng kaniyang ina na si Teodora Alonso ang pagkabayani ni Jose Rizal?",
    answer: `Mga pangunahing puntos:
• Si Teodora Alonso ang unang guro ni Rizal — siya ang nagturo sa kaniya ng pagbabasa, pagsusulat, at moralidad.
• Ang pagmamahal at sakripisyo ng kaniyang ina ay naging inspirasyon sa marami niyang tula at akda.
• Ang pagdurusa ng kaniyang ina sa kamay ng mga awtoridad ng kolonyal (pinilit siyang maglakad ng malayo kahit may sakit) ay nagpalakas ng kaniyang galit sa pang-aapi.
• Tinawag ni Rizal ang kaniyang ina bilang "pinaka-perpektong babae" at ito ay makikita sa tauhang si Doña Teodora sa kaniyang mga akda.
• Ang disiplina, pagmamahal sa pagbabasa, at pagiging relihiyoso na itinuro ng kaniyang ina ay naging pundasyon ng kaniyang karakter.`,
    explanation: "Si Teodora Alonso ay naging pundasyon ng panlipunan at moral na pananaw ni Rizal."
  },
  {
    id: 57,
    type: "essay",
    category: "Paglalakbay",
    question: "Ilarawan ang karanasan ni Rizal sa Japan at kung paano ito naging mahalagang kabanata sa kaniyang buhay.",
    answer: `Mga pangunahing puntos:
• Dumating si Rizal sa Japan noong Pebrero 1888 at nanatili siya roon ng halos 45 araw.
• Nakilala niya si Seiko Usui (O-Sei-San), isang Haponesang guro ng Ingles na naging malapit sa kaniya.
• Nagpunta siya sa Yokohama, Tokyo, at iba pang bahagi ng bansa, at napahanga siya sa pag-unlad ng Japan.
• Ipinapakita ng modernong Japan noong Meiji era ang posibilidad na ang isang Asyano ay maaaring makipagtulad sa mga Kanluranin.
• Nagbigay ito ng pag-asa at inspirasyon kay Rizal na maaari rin na magsagawa ng pagbabago ang Pilipinas.
• Ang karanasan sa Japan ay nagpalawig ng kaniyang pananaw sa Asya at nagpakita ng kanyang kakayahang makihalubilo sa iba't ibang kultura.`,
    explanation: "Ang paglalakbay ni Rizal sa Japan ay nagpabago ng kaniyang pananaw sa posibilidad ng pag-unlad ng Asya."
  },
  {
    id: 58,
    type: "essay",
    category: "Calamba",
    question: "Paano naimpluwensiyahan ng lupaing pagtatanim (hacienda) ng mga Dominikano sa Calamba ang pananaw panlipunan ni Rizal?",
    answer: `Mga pangunahing puntos:
• Lumaki si Rizal sa Calamba, isang lugar na pinamumunuan ng mga Dominican friar bilang may-ari ng lupa.
• Nakita niya nang personal ang paghihirap ng mga magsasakang Pilipino na nagbabayad ng mataas na upa sa lupa at walang karapatan.
• Ang kaniyang pamilya mismo ay naapektuhan ng mga abuso ng hacienda system.
• Ang karanasang ito ay nagbigay ng personal na konteksto sa kaniyang kritisismo ng kolonyal na sistema.
• Ginamit niya ang Calamba bilang setting ng ilang bahagi ng Noli Me Tangere at ang mga isyu ng lupaing pagtatanim ay sentral sa nobela.
• Ang pakikipaglaban ng pamilya Rizal laban sa mga Dominican ay nagpapakita ng lakas ng kaniyang pamilya at nagbigay sa kaniya ng konkreto halimbawa ng pang-aapi.`,
    explanation: "Ang Calamba at ang sistema ng lupaing pagtatanim doon ay naging pundasyon ng panlipunang kritisismo ni Rizal."
  },

  // ── EXTRA MULTIPLE CHOICE ─────────────────────────────────

  {
    id: 59,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang pangalawang nobela ni Rizal na nailimbag noong 1891?",
    options: ["Noli Me Tangere", "El Filibusterismo", "Florante at Laura", "Ibong Adarna"],
    answer: "El Filibusterismo",
    explanation: "'El Filibusterismo' (Ang Subersibo) ang pangalawang nobela ni Rizal, na nailimbag sa Ghent, Belgium noong 1891."
  },
  {
    id: 60,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Sino ang nagpinansya ng pagpapalimbag ng El Filibusterismo?",
    options: ["Paciano Rizal", "Dr. Máximo Viola", "Valentin Ventura", "Ferdinand Blumentritt"],
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura, isang kapwa Pilipino sa Europa, ang nagpinansya ng pagpapalimbag ng El Filibusterismo."
  },
  {
    id: 61,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Sino ang paboritong santo ni Rizal habang siya ay nasa Ateneo?",
    options: ["San Jose", "San Francisco Xavier", "Santo Tomas", "San Ignacio de Loyola"],
    answer: "San Francisco Xavier",
    explanation: "Si San Francisco Xavier, ang patron ng mga misyonero, ang naging paboritong santo ni Rizal sa Ateneo."
  },
  {
    id: 62,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Ilang taon si Rizal nang siya ay barilin sa Bagumbayan?",
    options: ["35 taong gulang", "36 taong gulang", "34 taong gulang", "37 taong gulang"],
    answer: "35 taong gulang",
    explanation: "Ipinanganak noong Hunyo 19, 1861 at binaril noong Disyembre 30, 1896 — 35 taong gulang si Rizal."
  },
  {
    id: 63,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Alin sa mga ito ang anotasyon ni Rizal sa isang kasaysayang Kastila tungkol sa Pilipinas?",
    options: [
      "Anotasyon sa 'Sucesos de las Islas Filipinas' ni Morga",
      "Anotasyon sa 'Historia de Filipinas' ni Montero",
      "Anotasyon sa 'Conquista de Filipinas' ni Legazpi",
      "Anotasyon sa 'Relaçion' ni Pigafetta"
    ],
    answer: "Anotasyon sa 'Sucesos de las Islas Filipinas' ni Morga",
    explanation: "Inianotasyon ni Rizal ang 'Sucesos de las Islas Filipinas' ni Antonio de Morga upang ipakita ang mayamang kasaysayan ng Pilipinas bago dumating ang mga Espanyol."
  },
  {
    id: 64,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Sa aling lungsod sa Amerika nananatili si Rizal nang pinakamahaba sa kaniyang pagdaan noong 1888?",
    options: ["New York", "San Francisco", "Chicago", "Los Angeles"],
    answer: "San Francisco",
    explanation: "Sa San Francisco, California, nananatili si Rizal sa kaniyang pagdaan sa USA noong 1888, kung saan nakita niya ang diskriminasyon laban sa mga Tsino."
  },
  {
    id: 65,
    type: "multiple-choice",
    category: "Pangunahing Tao",
    question: "Sino ang nagbigay ng pangalan na 'José' kay Rizal?",
    options: ["Kaniyang ina na si Teodora", "Kaniyang ama na si Francisco", "Ang paring nag-binyag sa kaniya", "Ang kaniyang lolo"],
    answer: "Kaniyang ina na si Teodora",
    explanation: "Si Teodora Alonso, ang ina ni Rizal, ang nagbigay ng pangalang 'Jose Protacio' sa kaniya."
  },

  // ── ADDITIONAL MULTIPLE CHOICE ────────────────────────────

  {
    id: 66,
    type: "multiple-choice",
    category: "Biñan",
    question: "Sino ang guro ni Rizal sa Biñan?",
    options: ["Maestro Leon Monroy", "Maestro Justiniano Aquino Cruz", "Maestro Lucas Padua", "Maestro Celestino"],
    answer: "Maestro Justiniano Aquino Cruz",
    explanation: "Si Maestro Justiniano Aquino Cruz ang guro ni Rizal sa Biñan. Ayon sa reviewer, 'walang araw na walang hampas' — lima o anim na palo kahit maganda ang marka."
  },
  {
    id: 67,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Sino ang kapatid ni Rizal na namatay noong edad na 3 taong gulang?",
    options: ["Josefa", "Concepcion (Concha)", "Olympia", "Narcisa"],
    answer: "Concepcion (Concha)",
    explanation: "Si Concepcion (Concha), ipinanganak noong 1862 at namatay noong 1865 sa edad na 3. Ito ang unang pag-iyak ni Jose ayon sa reviewer."
  },
  {
    id: 68,
    type: "multiple-choice",
    category: "GOMBURZA",
    question: "Kailan binaril ang GOMBURZA?",
    options: ["Pebrero 1, 1872", "Pebrero 17, 1872", "Enero 20, 1872", "Marso 17, 1872"],
    answer: "Pebrero 17, 1872",
    explanation: "Binaril ang GOMBURZA noong Pebrero 17, 1872 sa Bagumbayan gamit ang garrote. Ayon sa reviewer, 'HINDI Pebrero 1' — Peb. 17 ang tamang petsa (NHCP)."
  },
  {
    id: 69,
    type: "multiple-choice",
    category: "Biñan",
    question: "Kailan umuwi si Rizal mula sa Biñan?",
    options: ["Disyembre 15, 1870", "Disyembre 17, 1870", "Disyembre 20, 1870", "Enero 1, 1871"],
    answer: "Disyembre 17, 1870",
    explanation: "Umuwi si Rizal sa Calamba mula Biñan noong Disyembre 17, 1870 sakay ng Bapor Talim, kasama si Arturo Camps (Pranses, kaibigan ng ama)."
  },
  {
    id: 70,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Anong imperyo ang kinabibilangan ni Rizal sa Ateneo bilang externo?",
    options: ["Imperyo Romano", "Imperyo Carthagena", "Imperyo Griyego", "Imperyo Español"],
    answer: "Imperyo Carthagena",
    explanation: "Bilang externo (nangangasera sa labas ng kolehiyo), napunta si Rizal sa Imperyo Carthagena na may bandilang asul. Ang Imperyo Romano ay para sa mga interno (pula ang bandila)."
  },
  {
    id: 71,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang unang gantimpala sa El Consejo de los Dioses?",
    options: ["Pilak na panulat", "Gintong singsing na may larawan ni Cervantes", "Medalya ng karangalan", "Diploma at pluma"],
    answer: "Gintong singsing na may larawan ni Cervantes",
    explanation: "Ang gantimpala sa El Consejo de los Dioses (1880) ay gintong singsing na may larawan ni Cervantes. Ito ay patimpalak para sa ika-300 anibersaryo ng kamatayan ni Cervantes."
  },
  {
    id: 72,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Kailan dumating si Rizal sa Heidelberg?",
    options: ["Pebrero 1, 1886", "Pebrero 3, 1886", "Marso 1, 1886", "Enero 15, 1886"],
    answer: "Pebrero 3, 1886",
    explanation: "Dumating si Rizal sa Heidelberg noong Peb. 3, 1886 (3:00 n.h.). Nanirahan siya sa Karlstrasse 16, kasera: Nebel (babaeng Aleman)."
  },
  {
    id: 73,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Sino ang doktor ng mata na guro ni Rizal sa Heidelberg?",
    options: ["Dr. Louis de Wecker", "Dr. Otto Becker", "Dr. Rudolf Virchow", "Dr. Hans Virchow"],
    answer: "Dr. Otto Becker",
    explanation: "Si Dr. Otto Becker ang guro ni Rizal sa oftalmolohi sa Heidelberg. Siya ay kilala sa Alemanya at nagsanay sa Vienna."
  },
  {
    id: 74,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Kailan natapos ang Noli Me Tangere?",
    options: ["Disyembre 1886", "Pebrero 1887", "Marso 1887", "Abril-Hunyo 1886"],
    answer: "Abril-Hunyo 1886",
    explanation: "Natapos ang Noli Me Tangere noong Abril–Hunyo 1886 sa Wilhelmsfeld, Germany, sa piling ni Pastor Karl Ullmer. Ang huling rebisyon ay sa Berlin (1886–1887)."
  },
  {
    id: 75,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Kailan umalis si Rizal sa Japan patungong Amerika?",
    options: ["Abril 10, 1888", "Abril 13, 1888", "Abril 15, 1888", "Abril 20, 1888"],
    answer: "Abril 13, 1888",
    explanation: "Umalis si Rizal sa Japan noong Abril 13, 1888 sakay ng S.S. Belgic patungong San Francisco, USA."
  },

  // ── ADDITIONAL IDENTIFICATION ─────────────────────────────

  {
    id: 76,
    type: "identification",
    category: "Biñan",
    question: "Ang kaklase ni Rizal sa Biñan na naging class painter kasama niya.",
    answer: "Jose Guevarra",
    explanation: "Si Jose Guevarra ang class painter kasama ni Rizal sa Biñan. Tumulong si Rizal sa pagpipinta kay Juancho at naging class painter."
  },
  {
    id: 77,
    type: "identification",
    category: "Ateneo Municipal",
    question: "Ang unang guro ni Rizal sa Ateneo Municipal.",
    answer: "Padre José Bech",
    explanation: "Si Padre José Bech ang unang guro ni Rizal sa Ateneo. Inilarawan ni Rizal siya bilang 'payat at matangkad, seryoso, inspirado, mukhang Griyego.'"
  },
  {
    id: 78,
    type: "identification",
    category: "Ateneo Municipal",
    question: "Ang titulong nakuha ni Rizal nang matapos sa Ateneo noong 1877.",
    answer: "Bachiller en Artes / Bachelor of Arts",
    explanation: "Nakuha ni Rizal ang Bachiller en Artes (Bachelor of Arts) na may pinakamataas na karangalang Sobresaliente noong Marso 23, 1877, sa edad na 16."
  },
  {
    id: 79,
    type: "identification",
    category: "UST",
    question: "Ang kursong bokasyonal na kinuha ni Rizal sa Ateneo habang nag-aaral sa UST.",
    answer: "Agrimensor / Surveying",
    explanation: "Sabay na kumuha si Rizal ng Agrimensor (surveying) sa Ateneo habang nag-aaral ng Medisina sa UST. Natapos niya ito sa edad na 17 (pagsusulit: Mayo 21, 1878), pero ang lisensya ay naibigay noong Nob. 25, 1881."
  },
  {
    id: 80,
    type: "identification",
    category: "UST",
    question: "Ang sagisag na ginamit ni Rizal sa 'Memorias de un Estudiante de Manila'.",
    answer: "P. Jacinto",
    explanation: "'P. Jacinto' ang sagisag ni Rizal sa talaarawan na 'Memorias de un Estudiante de Manila' (huling mga buwan ng 1878)."
  },
  {
    id: 81,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang tula ni Rizal na isinulat para sa kaarawan ng bayaw niyang si Antonio López.",
    answer: "Felicitación (Maligayang Bati)",
    explanation: "Isinulat ni Rizal ang 'Felicitación' noong 1875 para sa kaarawan ng bayaw na si Antonio López, sa hiling ng mga kapatid na babae."
  },
  {
    id: 82,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang huling tula ni Rizal sa Ateneo na pamamaalam sa mga kaklase.",
    answer: "Un Diálogo Alusivo a la Despedida de los Colegiales",
    explanation: "'Un Diálogo Alusivo a la Despedida de los Colegiales' (1877) ang huling tula ni Rizal sa Ateneo — isang pamamaalam sa mga kaklase."
  },
  {
    id: 83,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang pahayagang Tagalog na naglathala ng 'Amor Patrio' noong 1882.",
    answer: "Diariong Tagalog",
    explanation: "Ang 'Amor Patrio' ay inilathala sa Diariong Tagalog noong Agosto 20, 1882. Si Marcelo H. del Pilar ang nagsalin sa Tagalog."
  },
  {
    id: 84,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang tagasalin sa Tagalog ng 'Amor Patrio' ni Rizal.",
    answer: "Marcelo H. del Pilar",
    explanation: "Si Marcelo H. del Pilar ang nagsalin ng 'Amor Patrio' sa Tagalog para sa Diariong Tagalog."
  },
  {
    id: 85,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang logia (lodge) ng Masonerya kung saan sumali si Rizal.",
    answer: "Logia Acacia (kalaunan Logia Solidaridad)",
    explanation: "Sumali si Rizal sa Logia Acacia noong 1883, na kalaunan ay naging Logia Solidaridad. Ang kaniyang sagisag ay 'Dimasalang.'"
  },
  {
    id: 86,
    type: "identification",
    category: "Noli Me Tangere",
    question: "Ang palimbagan na naglimbag ng Noli Me Tangere sa Berlin.",
    answer: "Berliner Buchdruckerei-Aktiengesellschaft",
    explanation: "Ang Berliner Buchdruckerei-Aktiengesellschaft ang palimbagan na naglimbag ng 2,000 kopya ng Noli Me Tangere noong Marso 1887."
  },
  {
    id: 87,
    type: "identification",
    category: "Paglalakbay",
    question: "Ang unang bansang dinaungan ni Rizal mula Manila noong 1882.",
    answer: "Singapore",
    explanation: "Ang unang bansa na dinaungan ni Rizal noong Mayo 9, 1882 ay Singapore (kolonyang Ingles). Nanatili siya sa Otel La Paz."
  },
  {
    id: 88,
    type: "identification",
    question: "Ang tawag sa sapilitang pagbebenta ng produkto ng mga Pilipino sa gobyerno sa napakababang presyo.",
    category: "Lipunang Kolonyal",
    answer: "Bandala / Vandala",
    explanation: "Ang 'bandala' o 'vandala' ay sapilitang pagbebenta ng mga produkto tulad ng palay at abaca sa gobyernong Espanyol sa napakababang presyo."
  },
  {
    id: 89,
    type: "identification",
    category: "Paglalakbay",
    question: "Ang hotel kung saan nanatili si Rizal sa Tokyo, Japan.",
    answer: "Tokyo Hotel",
    explanation: "Nanatili si Rizal sa Tokyo Hotel mula Marso 2 hanggang 7, 1888. Sa Yokohama, nanatili siya sa Grand Hotel."
  },
  {
    id: 90,
    type: "identification",
    category: "Paglalakbay",
    question: "Ang barko na sinamahan ni Rizal mula Japan patungong San Francisco.",
    answer: "S.S. Belgic",
    explanation: "Sakay ng S.S. Belgic na umalis si Rizal mula Japan noong Abril 13, 1888, at dumating sa San Francisco, California noong Abril 28, 1888."
  },

  // ── ADDITIONAL ENUMERATION ────────────────────────────────

  {
    id: 91,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang tatlong pribadong guro ni Rizal bago siya pumasok sa Biñan.",
    answer: ["Celestino", "Lucas Padua", "Leon Monroy"],
    explanation: "Ang tatlong pribadong guro: Celestino (panimulang aralin), Lucas Padua (aritmetika/matematika), Leon Monroy (Espanyol at Latin, dating kaklase ni Francisco). Ang kamatayan ni Monroy ay hudyat ng Biñan."
  },
  {
    id: 92,
    type: "enumeration",
    category: "Ateneo Municipal",
    question: "Ibigay ang limang ranggo sa Imperyo ng Ateneo mula pinakamahusay.",
    answer: ["Emperador", "Tribuna", "Dekuryon", "Senturyon", "Tagapagdala ng Bandila"],
    explanation: "Ang limang ranggo sa Imperyo ng Ateneo (Romano o Carthagena). Naging Emperador si Rizal makalipas ang isang buwan sa unang taon."
  },
  {
    id: 93,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang apat na tiyo ni Rizal at ang kanilang itinuro.",
    answer: ["Tiyo Manuel (katawan/pisikal)", "Tiyo Gregorio (aklat at pagmamasid)", "Tiyo Jose Alberto (sining)", "Teodora (pananampalataya at pagbasa)"],
    explanation: "Ang apat na nag-ambag sa 'Unang Kurikulum' ni Rizal: Manuel (pisikal), Gregorio (intelektwal), Jose Alberto (sining), at ang ina niyang si Teodora (espiritwal at pagbasa)."
  },
  {
    id: 94,
    type: "enumeration",
    category: "GOMBURZA",
    question: "Ibigay ang tatlong paring Pilipino na binuo ang GOMBURZA.",
    answer: ["Padre Mariano Gomez", "Padre Jose Burgos", "Padre Jacinto Zamora"],
    explanation: "Ang GOMBURZA: Padre Mariano Gomez, Padre Jose Burgos, at Padre Jacinto Zamora — tatlong paring Pilipinong binaril sa Bagumbayan noong Peb. 17, 1872."
  },
  {
    id: 95,
    type: "enumeration",
    category: "Buhay sa Europa",
    question: "Ibigay ang apat na dahilan ng pananatili ni Rizal sa Berlin.",
    answer: ["Mapalawak ang kaalaman sa sakit sa mata", "Agham at wika kasama ng mga Alemang iskolar", "Makita ang pamumuhay ng mga tao", "Tapusin ang Noli Me Tangere"],
    explanation: "Ang apat na dahilan ng pananatili ni Rizal sa Berlin (Nob. 1886 – Mayo 1887), ayon sa reviewer."
  },
  {
    id: 96,
    type: "enumeration",
    category: "Paglalakbay",
    question: "Ibigay ang apat na dahilan ng pag-uwi ni Rizal sa Pilipinas noong 1887.",
    answer: ["Operahan ang mata ng ina", "Tumulong sa mga Pilipinong naaapi", "Malaman ang epekto ng Noli sa Pilipinas", "Malaman kung bakit walang balita tungkol kay Leonor Rivera"],
    explanation: "Ang apat na dahilan ng pag-uwi ni Rizal noong Hulyo 3, 1887 mula Marseille. Dumating siya sa Maynila noong Agosto 5, 1887."
  },
  {
    id: 97,
    type: "enumeration",
    category: "Mga Tula at Akda",
    question: "Ibigay ang tatlong pintor/eskultor na nagturo ng sining kay Rizal.",
    answer: ["Agustín Sáez (pagpipinta)", "Romualdo de Jesús (paglililok)", "Padre Lleonart (nag-utos ng paggawa ng Sagradong Puso ni Hesus)"],
    explanation: "Nag-aral si Rizal ng pagpipinta kay Agustín Sáez at paglililok kay Romualdo de Jesús. Humanga si Padre Lleonart at nagpaukit ng Sagradong Puso ni Hesus."
  },
  {
    id: 98,
    type: "enumeration",
    category: "Paglalakbay",
    question: "Ibigay ang tatlong barkong sinamahan ni Rizal mula Pilipinas hanggang Europa noong 1882.",
    answer: ["Salvadora (Manila → Singapore)", "Djemnah (Singapore → Point de Galle)", "Ibang barko patungong Suez at Marseille"],
    explanation: "Sakay ng Salvadora (kapitan: Donato Lecha) mula Manila hanggang Singapore. Lumipat sa barkong Pranses na Djemnah patungong Point de Galle, Ceylon."
  },
  {
    id: 103,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang labing-isang (11) magkakapatid sa pamilya Rizal-Alonso ayon sa pagkakasunod.",
    answer: [
      "Saturnina (Neneng)",
      "Paciano",
      "Narcisa (Sisa)",
      "Olympia (Ypia)",
      "Lucia",
      "Maria (Biang)",
      "JOSE (ikapito)",
      "Concepcion (Concha, namatay edad 3)",
      "Josefa (Panggoy)",
      "Trinidad (Trining)",
      "Soledad (Choleng)"
    ],
    explanation: "Labing-isa silang magkakapatid sa pamilya Rizal-Alonso. Si Jose ay ikapito sa pagkakasunod. Si Concepcion (Concha) ay namatay noong edad na tatlo (1862-1865)."
  },
  {
    id: 104,
    type: "enumeration",
    category: "Noli Me Tangere",
    question: "Ibigay ang walong (8) polyetos (mga pari) na umatake at nag-condemn sa Noli Me Tangere.",
    answer: [
      "Padre Font",
      "Padre Rodriguez",
      "Padre Sanz",
      "Padre Noceda",
      "Padre de la Naja",
      "Padre Montaña",
      "Padre Martinez",
      "Archbishop Pedro Payo"
    ],
    explanation: "Walong paring Espanyol ang nag-condemn sa Noli Me Tangere bilang 'heretical, impious, scandalous.' Si Archbishop Payo ang nag-utos na ipagbawal ito."
  },
  {
    id: 105,
    type: "enumeration",
    category: "Noli Me Tangere",
    question: "Ibigay ang anim (6) na pangunahing tauhan ng Noli Me Tangere.",
    answer: [
      "Crisostomo Ibarra",
      "María Clara",
      "Elias",
      "Padre Damaso",
      "Kapitan Tiago",
      "Sisa"
    ],
    explanation: "Ang anim na pangunahing tauhan: Ibarra (bida), María Clara (dalaga), Elias (rebolusyonaryo), Padre Damaso (mapang-abusong pari), Kapitan Tiago (mayamang Indio), at Sisa (nababaliw na ina)."
  },
  {
    id: 106,
    type: "enumeration",
    category: "Paglalakbay",
    question: "Ibigay ang siyam (9) na pangunahing bansang pinuntahan ni Rizal sa kaniyang mga paglalakbay.",
    answer: [
      "Espanya (Spain)",
      "Alemanya (Germany)",
      "Pransya (France)",
      "England",
      "Austria/Bohemia",
      "Belgium",
      "Japan",
      "United States of America",
      "Hong Kong"
    ],
    explanation: "Ang siyam na pangunahing bansa na pinuntahan ni Rizal sa kaniyang paglalakbay mula 1882-1896. Nanatili rin siya sa ibang bansa tulad ng Italy, Switzerland, at Netherlands."
  },
  {
    id: 107,
    type: "enumeration",
    category: "Buhay sa Europa",
    question: "Ibigay ang pitong (7) pangunahing lungsod sa Europa kung saan nanirahan o nag-aral si Rizal.",
    answer: [
      "Barcelona",
      "Madrid",
      "Paris",
      "Heidelberg",
      "Berlin",
      "London",
      "Brussels"
    ],
    explanation: "Pitong pangunahing lungsod sa Europa: Barcelona (unang himpilan), Madrid (medisina), Paris (pananaliksik), Heidelberg (oftalmolohi), Berlin (Noli), London (British Museum), Brussels (El Fili)."
  },
  {
    id: 108,
    type: "enumeration",
    category: "Mga Tula at Akda",
    question: "Ibigay ang anim (6) na pangunahing tula ni Rizal mula sa kaniyang kabataan hanggang kamatayan.",
    answer: [
      "Mi Primera Inspiración (1874)",
      "A la Juventud Filipina (1879)",
      "El Consejo de los Dioses (1880)",
      "Amor Patrio (1882)",
      "A las Flores de Heidelberg (1886)",
      "Mi Ultimo Adios (1896)"
    ],
    explanation: "Anim na pangunahing tula ni Rizal mula sa edad 13 hanggang sa kaniyang kamatayan. Ang Mi Ultimo Adios ay isinulat niya sa kulungan bago siya barilin."
  },
  {
    id: 109,
    type: "enumeration",
    category: "Pamilya at Kapanganakan",
    question: "Ibigay ang walong (8) pribadong guro at kamag-anak na nagturo kay Rizal bago pumasok sa Ateneo.",
    answer: [
      "Teodora Alonso (ina - pagbabasa, pagsulat, Doctrina Cristiana)",
      "Celestino (panimulang aralin)",
      "Lucas Padua (aritmetika)",
      "Leon Monroy (Espanyol at Latin)",
      "Maestro Justiniano Aquino Cruz (Biñan - matalim na guro)",
      "Tiyo Manuel (pisikal/katawan)",
      "Tiyo Gregorio (aklat at pagmamasid)",
      "Tiyo Jose Alberto (sining/pagpipinta)"
    ],
    explanation: "Walong guro at kamag-anak ang nag-ambag sa edukasyon ni Rizal bago ang Ateneo. Ang mga ito ay bumuo ng 'Unang Kurikulum' na naging pundasyon ng kaniyang karakter."
  },
  {
    id: 110,
    type: "enumeration",
    category: "Mga Tula at Akda",
    question: "Ibigay ang limang (5) pangunahing sanaysay o artikulo ni Rizal sa La Solidaridad.",
    answer: [
      "Filipinas Dentro de Cien Años (1889-1890)",
      "Sobre la Indolencia de los Filipinos (1890)",
      "Los Agricultores Filipinos (1889)",
      "Amor Patrio (1882, sa Diariong Tagalog)",
      "La Visión de Fray Rodriguez (1889)"
    ],
    explanation: "Lima sa mga pangunahing sanaysay ni Rizal na naglalarawan ng kalagayan ng Pilipinas at lumalaban sa mga maling paratang ng mga Espanyol."
  },
  {
    id: 111,
    type: "enumeration",
    category: "Lipunang Kolonyal",
    question: "Ibigay ang anim (6) na pangunahing uri ng buwis at sapilitang paggawa sa ilalim ng kolonyal na pamamahala.",
    answer: [
      "Polo y Servicios (sapilitang paggawa, 40 araw/taon)",
      "Bandala (sapilitang pagbebenta ng produkto sa mababang presyo)",
      "Tributo (buwis sa bawat pamilya)",
      "Donativo de Zamboanga (pang-depensa sa mga Moro)",
      "Sanctorum (para sa simbahan)",
      "Vinta (donasyon para sa barko ng sandatahan)"
    ],
    explanation: "Anim na pangunahing uri ng buwis at sapilitang paggawa na nagpahirap sa mga Pilipino sa ilalim ng kolonyal na pamamahala ng Espanya."
  },
  {
    id: 112,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Ano ang pangalan ng librong paboritong binasa ni Rizal sa Ateneo?",
    options: ["The Count of Monte Cristo", "Les Miserables", "The Three Musketeers", "Don Quixote"],
    answer: "The Count of Monte Cristo",
    explanation: "Ang 'The Count of Monte Cristo' ni Alexandre Dumas ang paboritong nobela ni Rizal. Dinala niya ang memorya nito sa buong buhay niya."
  },
  {
    id: 113,
    type: "identification",
    category: "Buhay sa Europa",
    question: "Ang lugar sa Germany kung saan natapos ni Rizal ang Noli Me Tangere.",
    answer: ["Wilhelmsfeld", "Wilhelmsfeld, Germany"],
    explanation: "Sa Wilhelmsfeld, Germany natapos ni Rizal ang Noli Me Tangere (Abril-Hunyo 1886) sa piling ni Pastor Karl Ullmer. Ang huling rebisyon ay ginawa sa Berlin."
  },
  {
    id: 114,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Ilang araw nanatili si Rizal sa Japan noong 1888?",
    options: ["30 araw", "45 araw", "60 araw", "21 araw"],
    answer: "45 araw",
    explanation: "Nanatili si Rizal ng halos 45 araw sa Japan mula Pebrero 28 hanggang Abril 13, 1888."
  },
  {
    id: 115,
    type: "identification",
    category: "UST",
    question: "Ang dalaga na unang pag-ibig ni Rizal na nakilala niya sa bahay ng lola sa Troso.",
    answer: ["Segunda Katigbak"],
    explanation: "Si Segunda Katigbak (edad 14) ang unang pag-ibig ni Rizal na nakilala noong Disyembre 1877. Ito ay naging unang kabiguan sa pag-ibig."
  },
  {
    id: 116,
    type: "enumeration",
    category: "Buhay sa Europa",
    question: "Ibigay ang limang (5) pangunahing obra ni Rizal (nobela, anotasyon, at akda).",
    answer: [
      "Noli Me Tangere (1887)",
      "El Filibusterismo (1891)",
      "Anotasyon sa Sucesos de las Islas Filipinas ni Morga",
      "Filipinas Dentro de Cien Años",
      "Sobre la Indolencia de los Filipinos"
    ],
    explanation: "Lima sa mga pangunahing akda ni Rizal na nagpakita ng kaniyang pag-unawa sa kasaysayan at kalagayan ng Pilipinas."
  },
  {
    id: 117,
    type: "multiple-choice",
    category: "GOMBURZA",
    question: "Ano ang dahilan ng Cavite Mutiny noong Enero 20, 1872?",
    options: [
      "Pagkakait ng pribilehiyo ng mga manggagawa sa arsenal",
      "Mataas na buwis",
      "Pag-aapi ng mga pari",
      "Kawalan ng pagkain"
    ],
    answer: "Pagkakait ng pribilehiyo ng mga manggagawa sa arsenal",
    explanation: "Ang Cavite Mutiny ay naganap dahil sa pagkakait ng exemption sa tributo at polo y servicios ng mga manggagawang Pilipino sa Cavite Arsenal."
  },
  {
    id: 118,
    type: "essay",
    category: "Ateneo Municipal",
    question: "Paano naimpluwensiyahan ng sistemang imperyo ng Ateneo ang competitive spirit at akademikong tagumpay ni Rizal?",
    answer: `Mga pangunahing puntos:
• Ang sistemang imperyo (Romano vs Carthagena) ay nagturo kay Rizal ng healthy competition at determinasyon.
• Bilang miyembro ng Imperyo Carthagena (externo, bandilang asul), nagsikap si Rizal na umakyat sa ranggo.
• Naging Emperador siya makalipas ang isang buwan — ang pinakamataas na ranggo.
• Ang ranggo system (Emperador, Tribuna, Dekuryon, Senturyon, Tagapagdala ng Bandila) ay nag-motivate sa mga estudyante.
• Nagturo ito ng disiplina, pag-aaral nang mabuti, at pagmamalaki sa sariling galing.
• Ang karanasang ito ay naghanda kay Rizal sa mga hamon sa UST at sa Europa.`,
    explanation: "Ang sistemang imperyo ng Ateneo ay mahalagang bahagi ng pagbuo ng competitive at disciplined na karakter ni Rizal."
  },
  {
    id: 119,
    type: "multiple-choice",
    category: "Pamilya at Kapanganakan",
    question: "Ano ang naging dahilan ng pagkakulong ng ina ni Rizal na si Teodora Alonso?",
    options: [
      "Bintang ni Teodora Formoso na sinubukang lasunin siya",
      "Pag-aalsa laban sa gobyerno",
      "Pagtulong kay Rizal",
      "Hindi pagbabayad ng buwis"
    ],
    answer: "Bintang ni Teodora Formoso na sinubukang lasunin siya",
    explanation: "Nakulong si Teodora Alonso ng mahigit 2 taon (1871-1874) dahil sa maling akusasyon ni Teodora Formoso na sinubukan niyang lasunin ito. Ang totoo, si Teodora Formoso ay may sakit na dahil sa aso at pagkain (gaas sa tsokolate), pero ibinintang niya kay Teodora Alonso."
  },
  {
    id: 120,
    type: "identification",
    category: "Mga Tula at Akda",
    question: "Ang sarswelang isinulat ni Rizal na itinanghal sa Ateneo noong Disyembre 8, 1880.",
    answer: ["Junto al Pasig"],
    explanation: "Ang 'Junto al Pasig' ay sarswelang may iisang yugto (dulang may musika) na itinanghal noong Kapistahan ng Inmaculada Concepción. Musika ay gawa ni Blas Echegoyen."
  },

  // ── ADDITIONAL ESSAY ──────────────────────────────────────

  {
    id: 99,
    type: "essay",
    category: "Ateneo Municipal",
    question: "Ilarawan ang sistemang edukasyon ng mga Heswita sa Ateneo at kung paano ito nag-ambag sa pagbuo ng karakter ni Rizal.",
    answer: `Mga pangunahing puntos:
• Ang sistemang edukasyon ng mga Heswita ay makabago noon at nakatuon sa: araling panrelihiyon, disiplinang pansarili, kulturang pisikal, humanidades, at agham.
• May dalawang imperyo (Romano at Carthagena) na nagpapakumpitensya — ang mga estudyante ay naglalaban para sa ranggo (Emperador, Tribuna, Dekuryon, atbp.).
• Ang sistemang ito ay nagturo kay Rizal ng disiplina at determinasyon — naging Emperador siya makalipas ang isang buwan.
• Nagturo ang Ateneo ng pagpapahalaga sa sining, panitikan, at agham — naging kasapi si Rizal ng Akademiya ng Literaturang Espanyol at Akademiya ng mga Likas na Agham.
• Ang debosyon sa relihiyon ay bahagi ng sistemang ito — naging kalihim si Rizal ng Kongregasyon ni Maria.
• Ang impluwensiya ni Padre Sánchez ay nagbukas ng landas para sa kaniyang pagiging manunulat.`,
    explanation: "Ang Ateneo Municipal ay nag-ambag sa intelektwal, moral, at espiritwal na pagbuo ni Rizal."
  },
  {
    id: 100,
    type: "essay",
    category: "Biñan",
    question: "Ano ang mga natutunan ni Rizal sa Biñan at paano ito naghanda sa kaniya para sa Ateneo?",
    answer: `Mga pangunahing puntos:
• Sa Biñan, natutunan ni Rizal ang disiplina sa pamamagitan ng mahigpit na pamumuno ni Maestro Justiniano Aquino Cruz — 'walang araw na walang hampas.'
• Natuto siyang makipagtunggali at lumaban — dalawang tunggalian: kay Pedro (anak ng guro) at kay Andres Salandaan (bunong-braso, natalo si Rizal).
• Nag-develop ang kaniyang talento sa pagpipinta — naging class painter kasama si Jose Guevarra, tumulong kay Juancho.
• Natutunan niyang hindi likas na henyo — umunlad dahil sa pagsasanay.
• Natuto ng pagiging independente — tumira sa bahay ni Tia Tomasa Mercado, malayo sa pamilya.
• Ang karanasan sa Biñan ay naghanda sa kaniya para sa mas mataas na antas ng edukasyon sa Ateneo.`,
    explanation: "Ang pag-aaral ni Rizal sa Biñan ay naghanda sa kaniyang intelektwal, pisikal, at emosyonal na aspeto."
  },

  // ── MORE MULTIPLE CHOICE ───────────────────────────────────

  {
    id: 121,
    type: "multiple-choice",
    category: "El Filibusterismo",
    question: "Kailan nailimbag ang El Filibusterismo?",
    options: ["Setyembre 18, 1891", "Oktubre 18, 1891", "Nobyembre 18, 1891", "Disyembre 18, 1891"],
    answer: "Setyembre 18, 1891",
    explanation: "Nailimbag ang El Filibusterismo sa Ghent, Belgium noong Setyembre 18, 1891, pinondohan ni Valentin Ventura."
  },
  {
    id: 122,
    type: "multiple-choice",
    category: "El Filibusterismo",
    question: "Sino ang pangunahing tauhan ng El Filibusterismo na dating si Crisostomo Ibarra?",
    options: ["Simoun", "Basilio", "Isagani", "Padre Florentino"],
    answer: "Simoun",
    explanation: "Si Simoun ang pangunahing tauhan ng El Filibusterismo — siya ay si Crisostomo Ibarra na bumalik bilang isang mapanghimagsik na negosyante."
  },
  {
    id: 123,
    type: "multiple-choice",
    category: "Dapitan",
    question: "Ilang taon nakulong si Rizal sa Dapitan?",
    options: ["2 taon", "3 taon", "4 taon", "5 taon"],
    answer: "4 taon",
    explanation: "Ipinatapon si Rizal sa Dapitan mula Hulyo 17, 1892 hanggang Hulyo 31, 1896 — halos 4 na taon."
  },
  {
    id: 124,
    type: "multiple-choice",
    category: "La Liga Filipina",
    question: "Kailan itinatag ni Rizal ang La Liga Filipina?",
    options: ["Hulyo 2, 1892", "Hulyo 3, 1892", "Hulyo 4, 1892", "Hulyo 5, 1892"],
    answer: "Hulyo 3, 1892",
    explanation: "Itinatag ni Rizal ang La Liga Filipina noong Hulyo 3, 1892 sa bahay ni Doroteo Ongjunco sa Tondo, Manila."
  },
  {
    id: 125,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Kailan binaril si Jose Rizal sa Bagumbayan?",
    options: ["Disyembre 28, 1896", "Disyembre 29, 1896", "Disyembre 30, 1896", "Disyembre 31, 1896"],
    answer: "Disyembre 30, 1896",
    explanation: "Binaril si Jose Rizal sa Bagumbayan (ngayon ay Luneta Park) noong Disyembre 30, 1896, alas-7:03 ng umaga."
  },
  {
    id: 126,
    type: "multiple-choice",
    category: "Dapitan",
    question: "Ano ang mga ginawa ni Rizal sa Dapitan?",
    options: [
      "Nagtayo ng paaralan, ospital, at water system",
      "Nag-rebel laban sa gobyerno",
      "Nagsulat lamang ng mga tula",
      "Nag-plano ng pagtakas"
    ],
    answer: "Nagtayo ng paaralan, ospital, at water system",
    explanation: "Sa Dapitan, nagtayo si Rizal ng paaralan para sa mga bata, ospital para sa mga pasyente, at water system para sa komunidad. Nag-aral din siya ng agrikultura at nag-kolekta ng mga halaman at hayop."
  },
  {
    id: 127,
    type: "multiple-choice",
    category: "Josephine Bracken",
    question: "Sino si Josephine Bracken?",
    options: [
      "Irlandes-Amerikanang naging asawa ni Rizal sa Dapitan",
      "Kapatid ni Rizal",
      "Estudyante ni Rizal",
      "Kaibigan ng pamilya"
    ],
    answer: "Irlandes-Amerikanang naging asawa ni Rizal sa Dapitan",
    explanation: "Si Josephine Bracken ay Irlandes-Amerikanang dalaga na dumating sa Dapitan kasama ang kaniyang amang-bulagan na si George Taufer. Naging asawa siya ni Rizal (kahit walang pormal na kasal sa simbahan)."
  },
  {
    id: 128,
    type: "multiple-choice",
    category: "Himagsikan",
    question: "Ano ang Katipunan?",
    options: [
      "Lihim na samahan na itinatag ni Andres Bonifacio para sa rebolusyon",
      "Samahan ng mga magsasaka",
      "Organisasyon na itinatag ni Rizal",
      "Samahan ng mga estudyante"
    ],
    answer: "Lihim na samahan na itinatag ni Andres Bonifacio para sa rebolusyon",
    explanation: "Ang Katipunan (Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan) ay lihim na rebolusyonaryong samahan na itinatag ni Andres Bonifacio noong Hulyo 7, 1892 — ang parehong araw na inaresto si Rizal."
  },
  {
    id: 129,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Saan nakakulong si Rizal bago siya barilin?",
    options: ["Bilibid Prison", "Fort Santiago", "Fort San Pedro", "Muntinlupa Prison"],
    answer: "Fort Santiago",
    explanation: "Nakakulong si Rizal sa Fort Santiago sa Intramuros, Manila bago siya barilin sa Bagumbayan."
  },
  {
    id: 130,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Ano ang huling salita ni Rizal bago siya namatay?",
    options: ["'Consummatum est!' (Tapos na!)", "'Viva Filipinas!'", "'Mahal ko kayo'", "'Kalayaan!'"],
    answer: "'Consummatum est!' (Tapos na!)",
    explanation: "Ang huling salita ni Rizal ay 'Consummatum est!' — Latin para sa 'Tapos na!' o 'It is finished!' Ito rin ang sinabi ni Hesus sa krus."
  },

  // ── MORE IDENTIFICATION ───────────────────────────────────

  {
    id: 131,
    type: "identification",
    category: "El Filibusterismo",
    question: "Ang lugar sa Belgium kung saan nailimbag ang El Filibusterismo.",
    answer: "Ghent, Belgium",
    explanation: "Sa Ghent, Belgium nailimbag ang El Filibusterismo noong Setyembre 18, 1891."
  },
  {
    id: 132,
    type: "identification",
    category: "El Filibusterismo",
    question: "Ang taong nagpinansya ng pagpapalimbag ng El Filibusterismo.",
    answer: "Valentin Ventura",
    explanation: "Si Valentin Ventura, isang mayamang Pilipinong nasa Europa, ang nagpinansya ng pagpapalimbag ng El Filibusterismo."
  },
  {
    id: 133,
    type: "identification",
    category: "Dapitan",
    question: "Ang paring Heswita na naging kaibigan ni Rizal sa Dapitan.",
    answer: "Padre Francisco de Paula Sanchez",
    explanation: "Si Padre Francisco de Paula Sanchez, ang dating guro ni Rizal sa Ateneo, ay bumisita sa kaniya sa Dapitan at naging malapit na kaibigan."
  },
  {
    id: 134,
    type: "identification",
    category: "La Liga Filipina",
    question: "Ang samahang itinatag ni Rizal noong Hulyo 3, 1892 para sa repormang panlipunan.",
    answer: "La Liga Filipina",
    explanation: "Ang La Liga Filipina ay samahang itinatag ni Rizal para sa pagkakaisa ng mga Pilipino at repormang panlipunan. Ito ay naghiwalay pagkatapos ng kaniyang pag-aaresto."
  },
  {
    id: 135,
    type: "identification",
    category: "Josephine Bracken",
    question: "Ang Irlandes-Amerikanang naging asawa ni Rizal sa Dapitan.",
    answer: "Josephine Bracken",
    explanation: "Si Josephine Bracken ay naging common-law wife ni Rizal sa Dapitan. Dumating siya doon kasama ang kaniyang amang si George Taufer na hinahangad na pagalingin ni Rizal."
  },
  {
    id: 136,
    type: "identification",
    category: "Kamatayan",
    question: "Ang tula na isinulat ni Rizal sa gabi bago siya barilin.",
    answer: "Mi Ultimo Adios",
    explanation: "Isinulat ni Rizal ang 'Mi Ultimo Adios' (Ang Aking Huling Paalam) sa kulungan sa Fort Santiago noong gabi ng Disyembre 29, 1896."
  },
  {
    id: 137,
    type: "identification",
    category: "Kamatayan",
    question: "Ang korte-martiyal na nag-condemn kay Rizal.",
    answer: "Military Court / Korte-Martiyal ng Militar",
    explanation: "Ang korte-martiyal ng militar ay nag-condemn kay Rizal sa paratang ng rebelyon, sedisyon, at pagtatag ng mga lihim na samahan. Walang hustisya ang trial."
  },
  {
    id: 138,
    type: "identification",
    category: "Himagsikan",
    question: "Ang tagapagtatag ng Katipunan noong Hulyo 7, 1892.",
    answer: "Andres Bonifacio",
    explanation: "Si Andres Bonifacio ang nagtatag ng Katipunan noong Hulyo 7, 1892 — ang parehong araw na inaresto si Rizal."
  },
  {
    id: 139,
    type: "identification",
    category: "Dapitan",
    question: "Ang gobernador-general na nag-utos ng pagtatapon kay Rizal sa Dapitan.",
    answer: "Gobernador-General Eulogio Despujol",
    explanation: "Si Gobernador-General Eulogio Despujol ang nag-utos na itapon si Rizal sa Dapitan bilang parusa sa kaniyang mga ideya."
  },
  {
    id: 140,
    type: "identification",
    category: "Kamatayan",
    question: "Ang lugar kung saan binaril si Jose Rizal noong Disyembre 30, 1896.",
    answer: "Bagumbayan (ngayon ay Luneta Park / Rizal Park)",
    explanation: "Binaril si Rizal sa Bagumbayan, na ngayon ay tinatawag na Luneta Park o Rizal Park, sa Maynila."
  },

  // ── MORE ENUMERATION ──────────────────────────────────────

  {
    id: 141,
    type: "enumeration",
    category: "El Filibusterismo",
    question: "Ibigay ang limang pangunahing tauhan ng El Filibusterismo.",
    answer: ["Simoun (dating Ibarra)", "Basilio", "Isagani", "Padre Florentino", "Kabesang Tales"],
    explanation: "Ang limang pangunahing tauhan ng El Filibusterismo: Simoun (mapanghimagsik na negosyante), Basilio (estudyante ng medisina), Isagani (makatang estudyante), Padre Florentino (matalinong pari), at Kabesang Tales (magsasaka na naging tulisan)."
  },
  {
    id: 142,
    type: "enumeration",
    category: "Dapitan",
    question: "Ibigay ang limang pangunahing gawain ni Rizal sa Dapitan.",
    answer: [
      "Nagtayo ng paaralan para sa mga bata",
      "Nagpatayo ng ospital at nag-gamot ng mga pasyente",
      "Nag-design ng water system para sa bayan",
      "Nag-aral ng agrikultura at nag-farm",
      "Nag-kolekta ng mga halaman, insekto, at hayop para sa siyensya"
    ],
    explanation: "Ang limang pangunahing kontribusyon ni Rizal sa Dapitan na nagpakita ng kaniyang pagmamahal sa bayan at talino."
  },
  {
    id: 143,
    type: "enumeration",
    category: "La Liga Filipina",
    question: "Ibigay ang apat na layunin ng La Liga Filipina.",
    answer: [
      "Pag-isa ng mga Pilipino sa isang malakas na organisasyon",
      "Tulong at proteksyon sa lahat ng mga miyembro",
      "Pagpapalaki ng edukasyon",
      "Pag-develop ng agrikultura at komersyo"
    ],
    explanation: "Ang apat na layunin ng La Liga Filipina na itinatag ni Rizal noong Hulyo 3, 1892."
  },
  {
    id: 144,
    type: "enumeration",
    category: "Kamatayan",
    question: "Ibigay ang tatlong pangunahing akusasyon laban kay Rizal sa korte-martiyal.",
    answer: [
      "Pagiging founder ng Katipunan",
      "Pag-uudyok ng rebelyon sa pamamagitan ng mga akda (Noli at Fili)",
      "Pagtatag ng mga lihim na samahan na layuning lumaban sa gobyerno"
    ],
    explanation: "Ang tatlong akusasyon laban kay Rizal na naging dahilan ng kaniyang kamatayan, kahit hindi totoo ang ilan sa mga ito."
  },
  {
    id: 145,
    type: "enumeration",
    category: "Josephine Bracken",
    question: "Ibigay ang tatlong mahahalagang detalye tungkol kay Josephine Bracken.",
    answer: [
      "Irlandes-Amerikana na ipinanganak sa Hong Kong",
      "Anak-ampon ni George Taufer (bulag) na dinala siya sa Dapitan para magpagamot",
      "Naging common-law wife ni Rizal (walang kasal sa simbahan dahil tumanggi ang pari)"
    ],
    explanation: "Ang tatlong mahahalagang detalye tungkol kay Josephine Bracken na naging huling pag-ibig ni Rizal."
  },
  {
    id: 146,
    type: "enumeration",
    category: "Himagsikan",
    question: "Ibigay ang tatlong pangunahing pangyayari na nag-udyok ng Rebolusyong Pilipino noong 1896.",
    answer: [
      "Pag-aaresto at pagtatapon kay Rizal sa Dapitan (1892)",
      "Pagbubunyag ng Katipunan (Agosto 1896)",
      "Sigaw sa Pugad Lawin / Cry of Balintawak (Agosto 23, 1896)"
    ],
    explanation: "Ang tatlong mahahalagang pangyayari na nag-udyok ng pagsisimula ng armadong rebolusyon laban sa Espanya."
  },
  {
    id: 147,
    type: "enumeration",
    category: "Kamatayan",
    question: "Ibigay ang limang mahahalagang pangyayari sa huling mga araw ni Rizal (Dis. 26-30, 1896).",
    answer: [
      "Disyembre 26: Nagsimula ang korte-martiyal",
      "Disyembre 28: Natapos ang trial, hatol: kamatayan",
      "Disyembre 29: Isinulat ang 'Mi Ultimo Adios'",
      "Disyembre 29: Ikinasal kay Josephine Bracken (relihiyosong seremonya sa kulungan)",
      "Disyembre 30: Binaril sa Bagumbayan, 7:03 AM"
    ],
    explanation: "Ang limang mahahalagang pangyayari sa huling mga araw ng buhay ni Rizal."
  },

  // ── MORE ESSAY ────────────────────────────────────────────

  {
    id: 148,
    type: "essay",
    category: "El Filibusterismo",
    question: "Paano naiiba ang El Filibusterismo sa Noli Me Tangere sa tono, mensahe, at solusyon?",
    answer: `Mga pangunahing puntos:
• Ang Noli Me Tangere ay mas mahinahon at nakatuon sa pagbubunyag ng kasamaan — umaasa pa sa reporma sa pamamagitan ng edukasyon at pagbabago ng sistema.
• Ang El Filibusterismo ay mas madilim, radikal, at puno ng galit — walang pag-asa sa repormang mapayapa.
• Si Ibarra sa Noli ay idealista at umaasa sa pagbabago; si Simoun sa Fili ay mapanghimagsik na nais gumamit ng karahasan.
• Ang Noli ay nagtatapos nang may pag-asa; ang Fili ay nagtatapos sa trahedya at pagkabigo ni Simoun.
• Ang mensahe ng Fili: ang kolonyal na sistema ay hindi mababago sa pamamagitan ng reporma — kailangan ng rebolusyon o ganap na pagbabago.
• Ang dalawang nobela ay sumasalamin sa pagbabago ng pananaw ni Rizal mula idealistikong reformista tungo sa mas mapanghamong kritiko.`,
    explanation: "Ang El Filibusterismo ay mas radikal at madilim kaysa sa Noli Me Tangere."
  },
  {
    id: 149,
    type: "essay",
    category: "Dapitan",
    question: "Paano ipinakita ni Rizal ang kaniyang pagmamahal sa bayan kahit nakakulong siya sa Dapitan?",
    answer: `Mga pangunahing puntos:
• Nagtayo si Rizal ng paaralan para sa mga batang Pilipino — nagturo ng Ingles, Espanyol, aritmetika, at heograpiya nang walang bayad.
• Nagpatayo ng ospital at nag-gamot ng mga pasyente, kabilang ang mga mahihirap na walang kakayahang magbayad.
• Nag-design ng water system para sa bayan ng Dapitan — nagbigay ng malinis na tubig sa komunidad.
• Nag-aral ng agrikultura at nag-farm upang makatulong sa pag-develop ng ekonomiya ng lugar.
• Nag-kolekta ng mga halaman, insekto, at hayop para sa siyentipikong pag-aaral — nagpadala ng mga specimens sa mga museum sa Europa.
• Kahit nakakulong, patuloy niyang pinaglingkuran ang bayan sa pamamagitan ng edukasyon, medisina, at siyensya.`,
    explanation: "Ang Dapitan ay nagpakita ng praktikal na pagmamahal ni Rizal sa bayan."
  },
  {
    id: 150,
    type: "essay",
    category: "La Liga Filipina",
    question: "Ano ang La Liga Filipina at bakit ito nabigo?",
    answer: `Mga pangunahing puntos:
• Ang La Liga Filipina ay samahang itinatag ni Rizal noong Hulyo 3, 1892 sa bahay ni Doroteo Ongjunco sa Tondo.
• Layunin nito: pag-isa ng mga Pilipino, tulong sa mga miyembro, edukasyon, at pag-develop ng ekonomiya.
• Ito ay mapayapang organisasyon na hindi naghangad ng rebolusyon — nakatuon sa gradual na reporma.
• Nabigo ito dahil sa pag-aaresto ni Rizal tatlong araw pagkatapos — Hulyo 6, 1892, at kaniyang pagtatapon sa Dapitan.
• Ang La Liga ay naghiwalay pagkatapos: ang mga moderado ay naging Cuerpo de Compromisarios, habang ang mga radikal ay sumali kay Bonifacio sa Katipunan.
• Ang pagkabigo ng La Liga ay nagpakita na ang mapayapang reporma ay imposible sa ilalim ng kolonyal na pamamahala.`,
    explanation: "Ang La Liga Filipina ay naging simbolo ng pagtatangka ng mapayapang reporma na nabigo."
  },
  {
    id: 151,
    type: "essay",
    category: "Kamatayan",
    question: "Bakit itinuring na martir si Jose Rizal at ano ang epekto ng kaniyang kamatayan?",
    answer: `Mga pangunahing puntos:
• Namatay si Rizal dahil sa kaniyang mga paninindigan at pagmamahal sa bayan — hindi siya kumilos ng karahasan ngunit naging biktima ng karahasan ng kolonyal na pamamahala.
• Ang kaniyang kamatayan ay hindi makatarungan — walang maayos na trial, walang konkretong ebidensya laban sa kaniya.
• Ang pagbaril sa kaniya ay ginawa upang takutin ang mga Pilipino, ngunit ang naging resulta ay kabaligtaran.
• Ang kaniyang kamatayan ay nag-udyok ng mas malaking galit at determinasyon sa mga Pilipino — naging simbolo siya ng sakripisyo para sa kalayaan.
• Si Rizal ay naging inspirasyon ng Rebolusyong Pilipino at ng mga susunod na henerasyon ng mga Pilipino.
• Ang kaniyang 'Mi Ultimo Adios' ay naging pambansang tula na sumasalamin sa kaniyang pagmamahal sa bayan.`,
    explanation: "Ang kamatayan ni Rizal ay naging pundasyon ng nasyonalismong Pilipino."
  },
  {
    id: 152,
    type: "essay",
    category: "Himagsikan",
    question: "Ano ang kaugnayan ni Rizal sa Katipunan at Rebolusyong Pilipino?",
    answer: `Mga pangunahing puntos:
• Hindi miyembro si Rizal ng Katipunan at hindi siya direktang nag-organize ng rebolusyon.
• Ngunit ang kaniyang mga akda (Noli at Fili) ay naging inspirasyon ng Katipunan — ginamit ng mga Katipunero ang kaniyang ideya bilang pundasyon.
• Si Andres Bonifacio at ang Katipunan ay nag-proclama kay Rizal bilang Honorary President ng Katipunan.
• Noong 1896, ang Katipunan ay nag-plan na iligtas si Rizal mula Dapitan, ngunit tumangging sumama si Rizal dahil hindi siya sang-ayon sa armadong rebolusyon.
• Ang kaniyang kamatayan noong Disyembre 30, 1896 ay naging pundasyon ng Rebolusyong Pilipino — naging simbolo siya ng sakripisyo.
• Kahit hindi siya aktibong nakipaglaban, si Rizal ay naging pinakamakapangyarihang simbolo ng kalayaan ng Pilipinas.`,
    explanation: "Si Rizal ay hindi rebolusyonaryo sa aksyon, ngunit naging pinakamakapangyarihang simbolo ng rebolusyon."
  },

  // ── ADDITIONAL MULTIPLE CHOICE (Comprehensive Coverage) ───

  // Biñan
  {
    id: 197,
    type: "multiple-choice",
    category: "Biñan",
    question: "Kailan umuwi si Rizal mula sa Biñan?",
    options: ["Disyembre 15, 1870", "Disyembre 17, 1870", "Disyembre 20, 1870", "Enero 1, 1871"],
    answer: "Disyembre 17, 1870",
    explanation: "Umuwi si Rizal sa Calamba mula Biñan noong Disyembre 17, 1870 sakay ng Bapor Talim, kasama si Arturo Camps."
  },
  {
    id: 198,
    type: "multiple-choice",
    category: "Biñan",
    question: "Sino ang naging kalaban ni Rizal sa bunong-braso sa Biñan?",
    options: ["Pedro", "Andres Salandaan", "Jose Guevarra", "Juancho"],
    answer: "Andres Salandaan",
    explanation: "Si Andres Salandaan ang naging kalaban ni Rizal sa bunong-braso sa Biñan. Natalo si Rizal sa labanan."
  },
  {
    id: 199,
    type: "multiple-choice",
    category: "Biñan",
    question: "Saan nakatira si Rizal habang nag-aaral sa Biñan?",
    options: ["Bahay ng guro", "Bahay ni Tia Tomasa Mercado", "Sariling bahay", "Dormitoryo ng paaralan"],
    answer: "Bahay ni Tia Tomasa Mercado",
    explanation: "Nakatira si Rizal sa bahay ng kaniyang tiyahin na si Tomasa Mercado habang nag-aaral sa Biñan."
  },

  // GOMBURZA
  {
    id: 200,
    type: "multiple-choice",
    category: "GOMBURZA",
    question: "Ano ang Cavite Mutiny?",
    options: [
      "Pag-aalsa ng mga manggagawa sa Cavite Arsenal noong 1872",
      "Digmaan sa Cavite noong 1896",
      "Rebolusyon ng mga pari",
      "Protesta ng mga magsasaka"
    ],
    answer: "Pag-aalsa ng mga manggagawa sa Cavite Arsenal noong 1872",
    explanation: "Ang Cavite Mutiny ay pag-aalsa ng mga manggagawang Pilipino sa Cavite Arsenal noong Enero 20, 1872 dahil sa pagkakait ng exemption sa tributo at polo y servicios."
  },
  {
    id: 201,
    type: "multiple-choice",
    category: "GOMBURZA",
    question: "Anong parusa ang ipinataw sa GOMBURZA?",
    options: ["Pagbaril", "Garrote (pagsakal)", "Pagbitay", "Bilanggo habambuhay"],
    answer: "Garrote (pagsakal)",
    explanation: "Ang GOMBURZA ay pinatay sa pamamagitan ng garrote (pagsakal gamit ang metal collar) noong Pebrero 17, 1872 sa Bagumbayan."
  },
  {
    id: 202,
    type: "multiple-choice",
    category: "GOMBURZA",
    question: "Sino sa GOMBURZA ang pinakabata?",
    options: ["Padre Mariano Gomez", "Padre Jose Burgos", "Padre Jacinto Zamora", "Lahat ay magkapareho ang edad"],
    answer: "Padre Jose Burgos",
    explanation: "Si Padre Jose Burgos ang pinakabata sa tatlo. Siya ay 35 taong gulang noong siya ay barilin."
  },

  // Calamba
  {
    id: 203,
    type: "multiple-choice",
    category: "Calamba",
    question: "Ano ang pangunahing produkto ng Calamba sa panahon ni Rizal?",
    options: ["Palay", "Asukal", "Kape", "Abaca"],
    answer: "Palay",
    explanation: "Ang Calamba ay kilala sa pagtatanim ng palay. Ang pangalang 'Calamba' ay nanggaling sa 'kalan' at 'banga' na ginagamit sa pagluluto."
  },
  {
    id: 204,
    type: "multiple-choice",
    category: "Calamba",
    question: "Ilang hektarya ang hacienda ng mga Dominikano sa Calamba?",
    options: ["1,000 hectares", "3,000 hectares", "5,000 hectares", "10,000 hectares"],
    answer: "3,000 hectares",
    explanation: "Ang mga Dominikano ay may 3,000 hectares ng lupain sa Calamba na inuupahan ng mga magsasakang Pilipino kabilang ang pamilya Rizal."
  },

  // Ateneo - more questions
  {
    id: 205,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Ano ang dalawang imperyo sa Ateneo?",
    options: [
      "Romano at Griyego",
      "Romano at Carthagena",
      "Espanyol at Pilipino",
      "Interno at Externo"
    ],
    answer: "Romano at Carthagena",
    explanation: "Ang dalawang imperyo sa Ateneo ay Romano (para sa mga interno, pula ang bandila) at Carthagena (para sa mga externo, asul ang bandila)."
  },
  {
    id: 206,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Ilang taon nag-aral si Rizal sa Ateneo?",
    options: ["4 taon", "5 taon", "6 taon", "7 taon"],
    answer: "5 taon",
    explanation: "Nag-aral si Rizal sa Ateneo mula 1872 hanggang 1877 - 5 taon para makakuha ng Bachelor of Arts."
  },
  {
    id: 207,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Ano ang tawag sa paboritong nobela ni Rizal na binasa niya sa Ateneo?",
    options: ["Les Miserables", "The Count of Monte Cristo", "Don Quixote", "The Three Musketeers"],
    answer: "The Count of Monte Cristo",
    explanation: "Ang 'The Count of Monte Cristo' ni Alexandre Dumas ang paboritong nobela ni Rizal na binasa niya sa Ateneo."
  },
  {
    id: 208,
    type: "multiple-choice",
    category: "Ateneo Municipal",
    question: "Kailan naging Emperador si Rizal sa Ateneo?",
    options: [
      "Pagkatapos ng isang taon",
      "Makalipas ang isang buwan sa unang taon",
      "Sa ikalawang taon",
      "Sa huling taon"
    ],
    answer: "Makalipas ang isang buwan sa unang taon",
    explanation: "Naging Emperador si Rizal makalipas ang isang buwan sa kaniyang unang taon sa Ateneo (1872-1873)."
  },

  // UST - more questions
  {
    id: 209,
    type: "multiple-choice",
    category: "UST",
    question: "Anong edad si Rizal nang pumasok sa UST?",
    options: ["15 taong gulang", "16 taong gulang", "17 taong gulang", "18 taong gulang"],
    answer: "16 taong gulang",
    explanation: "Pumasok si Rizal sa UST noong 1877 sa edad na 16 taong gulang pagkatapos magtapos sa Ateneo."
  },
  {
    id: 210,
    type: "multiple-choice",
    category: "UST",
    question: "Ano ang naging kurso ni Rizal sa Ateneo habang nag-aaral ng Medisina sa UST?",
    options: ["Abogasya", "Agrimensor (Surveying)", "Accounting", "Engineering"],
    answer: "Agrimensor (Surveying)",
    explanation: "Sabay na kinuha ni Rizal ang Agrimensor (surveying) sa Ateneo habang nag-aaral ng Medisina sa UST. Natapos niya ito noong Mayo 21, 1878."
  },
  {
    id: 211,
    type: "multiple-choice",
    category: "UST",
    question: "Sino ang unang pag-ibig ni Rizal na nakilala niya sa UST?",
    options: ["Leonor Rivera", "Segunda Katigbak", "Leonor Valenzuela", "Consuelo Ortiga"],
    answer: "Segunda Katigbak",
    explanation: "Si Segunda Katigbak (edad 14) ang unang pag-ibig ni Rizal na nakilala noong Disyembre 1877 habang siya ay nasa UST."
  },

  // Mga Tula - more questions
  {
    id: 212,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang gantimpala sa 'A la Juventud Filipina'?",
    options: [
      "Gintong singsing",
      "Pilak na panulat na hugis-pakpak",
      "Diploma at medalya",
      "Pera at trofeo"
    ],
    answer: "Pilak na panulat na hugis-pakpak",
    explanation: "Ang gantimpala sa 'A la Juventud Filipina' ay pilak na panulat na hugis-pakpak (silver pen shaped like a feather)."
  },
  {
    id: 213,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang 'El Consejo de los Dioses'?",
    options: [
      "Nobela ni Rizal",
      "Alegoryang prosa",
      "Sanaysay tungkol sa kalayaan",
      "Tula tungkol sa pag-ibig"
    ],
    answer: "Alegoryang prosa",
    explanation: "Ang 'El Consejo de los Dioses' ay alegoryang prosa na isinulat ni Rizal noong 1880 para sa ika-300 anibersaryo ng kamatayan ni Cervantes."
  },
  {
    id: 214,
    type: "multiple-choice",
    category: "Mga Tula at Akda",
    question: "Ano ang 'Junto al Pasig'?",
    options: ["Nobela", "Sarswela (dulang may musika)", "Tula", "Sanaysay"],
    answer: "Sarswela (dulang may musika)",
    explanation: "Ang 'Junto al Pasig' ay sarswelang may iisang yugto na itinanghal noong Disyembre 8, 1880 sa Ateneo. Ang musika ay gawa ni Blas Echegoyen."
  },

  // Buhay sa Europa - more questions
  {
    id: 215,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Kailan dumating si Rizal sa Barcelona?",
    options: ["Hunyo 15, 1882", "Hunyo 16, 1882", "Mayo 15, 1882", "Hulyo 15, 1882"],
    answer: "Hunyo 15, 1882",
    explanation: "Dumating si Rizal sa Barcelona noong Hunyo 15, 1882 mula sa kaniyang paglalakbay mula sa Pilipinas."
  },
  {
    id: 216,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Saan nanirahan si Rizal sa Madrid?",
    options: ["Calle de la Victoria", "Calle de Atocha", "Calle Mayor", "Gran Via"],
    answer: "Calle de Atocha",
    explanation: "Nanirahan si Rizal sa Calle de Atocha sa Madrid habang nag-aaral sa Universidad Central de Madrid."
  },
  {
    id: 217,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Ano ang Logia Acacia?",
    options: [
      "Samahan ng mga estudyante",
      "Logia ng Masonerya",
      "Samahan ng mga manunulat",
      "Organisasyon ng mga doktor"
    ],
    answer: "Logia ng Masonerya",
    explanation: "Ang Logia Acacia (kalaunan Logia Solidaridad) ay logia ng Masonerya kung saan sumali si Rizal noong 1883. Ang kaniyang sagisag ay 'Dimasalang'."
  },
  {
    id: 218,
    type: "multiple-choice",
    category: "Buhay sa Europa",
    question: "Kailan natapos ang Noli Me Tangere?",
    options: ["Abril-Hunyo 1886", "Disyembre 1886", "Enero 1887", "Marso 1887"],
    answer: "Abril-Hunyo 1886",
    explanation: "Natapos ang Noli Me Tangere noong Abril-Hunyo 1886 sa Wilhelmsfeld, Germany. Ang huling rebisyon ay ginawa sa Berlin."
  },

  // Paglalakbay - more questions
  {
    id: 219,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Ilang araw nanatili si Rizal sa Japan?",
    options: ["30 araw", "45 araw", "60 araw", "21 araw"],
    answer: "45 araw",
    explanation: "Nanatili si Rizal ng halos 45 araw sa Japan mula Pebrero 28 hanggang Abril 13, 1888."
  },
  {
    id: 220,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Ano ang barko na sinamahan ni Rizal mula Japan patungong USA?",
    options: ["Salvadora", "Djemnah", "S.S. Belgic", "Colon"],
    answer: "S.S. Belgic",
    explanation: "Sakay ng S.S. Belgic na umalis si Rizal mula Japan patungong San Francisco, California noong Abril 13, 1888."
  },
  {
    id: 221,
    type: "multiple-choice",
    category: "Paglalakbay",
    question: "Kailan dumating si Rizal sa San Francisco?",
    options: ["Abril 26, 1888", "Abril 28, 1888", "Abril 30, 1888", "Mayo 1, 1888"],
    answer: "Abril 28, 1888",
    explanation: "Dumating si Rizal sa San Francisco, California noong Abril 28, 1888 mula Japan."
  },

  // El Filibusterismo - more questions
  {
    id: 222,
    type: "multiple-choice",
    category: "El Filibusterismo",
    question: "Saan nailimbag ang El Filibusterismo?",
    options: ["Berlin, Germany", "Madrid, Spain", "Ghent, Belgium", "Paris, France"],
    answer: "Ghent, Belgium",
    explanation: "Nailimbag ang El Filibusterismo sa Ghent, Belgium noong Setyembre 18, 1891."
  },
  {
    id: 223,
    type: "multiple-choice",
    category: "El Filibusterismo",
    question: "Sino si Kabesang Tales sa El Fili?",
    options: [
      "Estudyante ng medisina",
      "Magsasaka na naging tulisan",
      "Negosyanteng mapanghimagsik",
      "Paring Pilipino"
    ],
    answer: "Magsasaka na naging tulisan",
    explanation: "Si Kabesang Tales (Telesforo Juan de Dios) ay magsasakang naging tulisan dahil sa pang-aabuso ng mga prayle at pagkawala ng kanyang lupain."
  },

  // Dapitan - more questions
  {
    id: 224,
    type: "multiple-choice",
    category: "Dapitan",
    question: "Ilang hektarya ang biniling lupa ni Rizal sa Talisay, Dapitan?",
    options: ["10 hectares", "16 hectares", "20 hectares", "25 hectares"],
    answer: "16 hectares",
    explanation: "Bumili si Rizal ng 16 hectares na lupa sa Talisay, Dapitan kung saan nagtayo siya ng paaralan, ospital, at farm."
  },
  {
    id: 225,
    type: "multiple-choice",
    category: "Dapitan",
    question: "Sino ang bumisita kay Rizal sa Dapitan noong Pebrero 1895?",
    options: [
      "Ferdinand Blumentritt",
      "Padre Francisco de Paula Sanchez",
      "Paciano Rizal",
      "Dr. Maximo Viola"
    ],
    answer: "Padre Francisco de Paula Sanchez",
    explanation: "Si Padre Francisco de Paula Sanchez, ang dating guro ni Rizal sa Ateneo, ang bumisita sa kaniya sa Dapitan noong Pebrero 1895."
  },

  // La Liga Filipina
  {
    id: 226,
    type: "multiple-choice",
    category: "La Liga Filipina",
    question: "Saan itinayo ang La Liga Filipina?",
    options: [
      "Bahay ni Rizal",
      "Bahay ni Doroteo Ongjunco",
      "Bahay ni Paciano Rizal",
      "Teatro sa Manila"
    ],
    answer: "Bahay ni Doroteo Ongjunco",
    explanation: "Itinatag ang La Liga Filipina sa bahay ni Doroteo Ongjunco sa Ilaya Street, Tondo, Manila noong Hulyo 3, 1892."
  },
  {
    id: 227,
    type: "multiple-choice",
    category: "La Liga Filipina",
    question: "Ano ang nangyari tatlong araw pagkatapos ng La Liga Filipina?",
    options: [
      "Nag-rally ang mga miyembro",
      "Inaresto si Rizal",
      "Nagtayo ng paaralan",
      "Naglathala ng pahayagan"
    ],
    answer: "Inaresto si Rizal",
    explanation: "Inaresto si Rizal noong Hulyo 6, 1892 — tatlong araw pagkatapos ng pagtatag ng La Liga Filipina. Itinatapon siya sa Dapitan."
  },

  // Katipunan
  {
    id: 228,
    type: "multiple-choice",
    category: "Katipunan",
    question: "Ano ang KKK?",
    options: [
      "Kalayaan, Kapatiran, Katapatan",
      "Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan",
      "Kilusang Kalayaan ng Kapatiran",
      "Katipunan ng Kalayaan at Katarungan"
    ],
    answer: "Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan",
    explanation: "Ang KKK ay nangangahulugang 'Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan' na itinatag ni Andres Bonifacio."
  },
  {
    id: 229,
    type: "multiple-choice",
    category: "Katipunan",
    question: "Sino ang nagsumbong ng Katipunan sa mga pari?",
    options: ["Emilio Aguinaldo", "Teodoro Patiño", "Antonio Luna", "Apolinario Mabini"],
    answer: "Teodoro Patiño",
    explanation: "Si Teodoro Patiño ang nagsumbong ng Katipunan sa mga pari noong Agosto 19, 1896, na naging dahilan ng pagbubunyag ng samahan."
  },

  // Himagsikan
  {
    id: 230,
    type: "multiple-choice",
    category: "Himagsikan",
    question: "Kailan ang Cry of Pugad Lawin?",
    options: ["Agosto 23, 1896", "Agosto 26, 1896", "Agosto 19, 1896", "Agosto 30, 1896"],
    answer: "Agosto 23, 1896",
    explanation: "Ang Cry of Pugad Lawin (o Cry of Balintawak) ay naganap noong Agosto 23, 1896 — simula ng Rebolusyong Pilipino."
  },
  {
    id: 231,
    type: "multiple-choice",
    category: "Himagsikan",
    question: "Ano ang ginawa ni Bonifacio sa Cry of Pugad Lawin?",
    options: [
      "Nag-speech",
      "Nag-tear ng cedula",
      "Bumaril sa mga Espanyol",
      "Nagtayo ng bandila"
    ],
    answer: "Nag-tear ng cedula",
    explanation: "Si Andres Bonifacio ay nag-tear (pinunit) ang kaniyang cedula bilang simbolo ng paghihimagsik laban sa Espanya."
  },

  // Josephine Bracken
  {
    id: 232,
    type: "multiple-choice",
    category: "Josephine Bracken",
    question: "Sino ang amang-bulagan ni Josephine Bracken?",
    options: ["James Bracken", "George Taufer", "Henry Bracken", "John Taufer"],
    answer: "George Taufer",
    explanation: "Si George Taufer ang amang-bulagan ni Josephine Bracken na dinala siya sa Dapitan para magpagamot kay Rizal."
  },
  {
    id: 233,
    type: "multiple-choice",
    category: "Josephine Bracken",
    question: "Bakit hindi nakasal sa simbahan sina Rizal at Josephine?",
    options: [
      "Walang pera",
      "Walang panahon",
      "Tumanggi ang pari dahil ayaw ni Rizal na talikuran ang kaniyang paninindigan",
      "Hindi pumayag ang pamilya"
    ],
    answer: "Tumanggi ang pari dahil ayaw ni Rizal na talikuran ang kaniyang paninindigan",
    explanation: "Tumanggi ang pari na ikasal sila dahil hindi handa si Rizal na talikuran ang kaniyang paninindigan at manumbalik sa simbahan."
  },

  // Kamatayan
  {
    id: 234,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Saan ginanap ang korte-martiyal ni Rizal?",
    options: ["Fort Santiago", "Cuartel de España", "Malacañang", "Manila Cathedral"],
    answer: "Cuartel de España",
    explanation: "Ang korte-martiyal ni Rizal ay ginanap sa Cuartel de España noong Disyembre 26-28, 1896."
  },
  {
    id: 235,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Ilang bala ang tumama kay Rizal?",
    options: ["7 bala", "8 bala", "9 bala", "10 bala"],
    answer: "9 bala",
    explanation: "Siyam (9) na bala ang tumama kay Rizal noong siya ay barilin sa Bagumbayan noong Disyembre 30, 1896."
  },
  {
    id: 236,
    type: "multiple-choice",
    category: "Kamatayan",
    question: "Sino ang nagtago ng 'Mi Ultimo Adios'?",
    options: ["Paciano Rizal", "Narcisa Rizal", "Trinidad Rizal", "Josefa Rizal"],
    answer: "Trinidad Rizal",
    explanation: "Si Trinidad Rizal ang nagtago ng 'Mi Ultimo Adios' sa loob ng alcohol lamp na dinalhan niya kay Jose sa kulungan."
  },

  // Lipunang Kolonyal - more questions
  {
    id: 237,
    type: "multiple-choice",
    category: "Lipunang Kolonyal",
    question: "Ano ang 'polo y servicios'?",
    options: [
      "Buwis sa lupa",
      "Sapilitang libreng paggawa",
      "Bayad sa simbahan",
      "Donasyon sa gobyerno"
    ],
    answer: "Sapilitang libreng paggawa",
    explanation: "Ang 'polo y servicios' ay sapilitang libreng paggawa ng mga lalaking Pilipino (16-60 taong gulang) para sa gobyernong Espanyol — 40 araw bawat taon."
  },
  {
    id: 238,
    type: "multiple-choice",
    category: "Lipunang Kolonyal",
    question: "Ano ang 'bandala'?",
    options: [
      "Buwis sa bahay",
      "Sapilitang pagbebenta ng produkto sa mababang presyo",
      "Donasyon sa simbahan",
      "Bayad para sa proteksyon"
    ],
    answer: "Sapilitang pagbebenta ng produkto sa mababang presyo",
    explanation: "Ang 'bandala' ay sapilitang pagbebenta ng produkto ng mga Pilipino (palay, abaca) sa gobyernong Espanyol sa napakababang presyo."
  },

  // Recitation - more multiple choice
  {
    id: 239,
    type: "multiple-choice",
    category: "Recitation",
    question: "Ano ang Escuela Pia?",
    options: [
      "Paaralan sa Madrid",
      "Dating pangalan ng kawang gawa para sa kalalakihan",
      "Samahan ng mga estudyante",
      "Logia ng Masonerya"
    ],
    answer: "Dating pangalan ng kawang gawa para sa kalalakihan",
    explanation: "Ang Escuela Pia ay ang dating pangalan ng paaralan na kawang gawa para sa mga lalaki."
  },
  {
    id: 240,
    type: "multiple-choice",
    category: "Recitation",
    question: "Ano ang Republic Act 1425?",
    options: ["Batas Militar", "Batas Rizal", "Batas Edukasyon", "Batas Kolonyal"],
    answer: "Batas Rizal",
    explanation: "Ang Republic Act 1425 ay ang Batas Rizal na nag-mandate ng pag-aaral ng buhay, akda, at mga gawa ni Rizal sa lahat ng paaralan."
  },

  // ── RECITATION (Quick Q&A) ────────────────────────────────

  {
    id: 153,
    type: "identification",
    category: "Recitation",
    question: "Ano ang dating pangalan ng kawang gawa para sa kalalakihan?",
    answer: "Escuela Pia",
    explanation: "Ang Escuela Pia ay ang dating pangalan ng paaralan na kawang gawa para sa mga lalaki."
  },
  {
    id: 154,
    type: "identification",
    category: "Recitation",
    question: "Anong degree academiko ang nakuha ni Rizal sa Ateneo?",
    answer: "Bachelor of Arts",
    explanation: "Nakuha ni Rizal ang Bachelor of Arts sa Ateneo noong 1877 na may pinakamataas na karangalang Sobresaliente."
  },
  {
    id: 155,
    type: "identification",
    category: "Recitation",
    question: "Anong taon hinatulan ng kamatayan ang tatlong paring Gomburza?",
    answer: "1872",
    explanation: "Noong 1872 hinatulan ng kamatayan at binaril ang GOMBURZA sa Bagumbayan (Pebrero 17, 1872)."
  },
  {
    id: 156,
    type: "identification",
    category: "Recitation",
    question: "Anong imperyo ang kinabibilangan ng mga estudyanteng nangangasera sa labas ng Ateneo?",
    answer: "Carthagena / Imperyo Carthagena",
    explanation: "Ang Imperyo Carthagena (bandilang asul) ay para sa mga externo o nangangasera sa labas ng kolehiyo."
  },
  {
    id: 157,
    type: "identification",
    category: "Recitation",
    question: "Anong tula ang inihandog ni Rizal sa kaarawan ng kanyang ina?",
    answer: "Mi Primera Inspiración",
    explanation: "Ang 'Mi Primera Inspiración' (Ang Aking Unang Inspirasyon) ay inihandog ni Rizal sa kanyang inang si Teodora Alonso."
  },
  {
    id: 158,
    type: "identification",
    category: "Recitation",
    question: "Sino ang patron ng Ateneo?",
    answer: "Immaculada Concepción / Immaculate Conception",
    explanation: "Ang Immaculada Concepción (Walang Dungis na Paglilihi) ay patron ng Ateneo Municipal de Manila."
  },
  {
    id: 159,
    type: "identification",
    category: "Recitation",
    question: "Anong dalawang salitang Tagalog ang pinagmulan ng pangalan ng Calamba?",
    answer: "Kalan at Banga",
    explanation: "Ang pangalan ng Calamba ay nagmula sa dalawang salitang Tagalog: 'kalan' at 'banga'."
  },
  {
    id: 160,
    type: "identification",
    category: "Recitation",
    question: "Sino ang unang pag-ibig at kabiguan ni Rizal?",
    answer: "Segunda Katigbak",
    explanation: "Si Segunda Katigbak (edad 14) ang unang pag-ibig ni Rizal na nakilala noong Disyembre 1877 — naging unang kabiguan sa pag-ibig."
  },
  {
    id: 161,
    type: "identification",
    category: "Recitation",
    question: "Ano ang pinakamataas na opisyal ng Pilipinas noong panahon ng Kastila?",
    answer: "Gobernador-Heneral / Governor-General",
    explanation: "Ang Gobernador-Heneral ang pinakamataas na opisyal na kinakatawan ng Espanya sa Pilipinas."
  },
  {
    id: 162,
    type: "identification",
    category: "Recitation",
    question: "Anong uri ng pari ang karibal ng paring regular sa pamamahala ng parokya?",
    answer: "Paring sekular / Secular priest",
    explanation: "Ang mga paring sekular (native Filipino priests) ay karibal ng mga paring regular (Spanish friars) sa pamamahala ng parokya."
  },
  {
    id: 163,
    type: "identification",
    category: "Recitation",
    question: "Sino ang nagsilbing ninong ni Rizal?",
    answer: "Padre Pedro Casañas",
    explanation: "Si Padre Pedro Casañas ang nagsilbing ninong ni Jose Rizal sa kanyang binyag."
  },
  {
    id: 164,
    type: "identification",
    category: "Recitation",
    question: "Sino ang guro ni Rizal sa Biñan na may estudyanteng nagngalang Juancho?",
    answer: "Maestro Justiniano Aquino Cruz",
    explanation: "Si Maestro Justiniano Aquino Cruz ang guro ni Rizal sa Biñan. Si Jose Guevarra (Juancho) ang class painter na kasama ni Rizal."
  },
  {
    id: 165,
    type: "identification",
    category: "Recitation",
    question: "Anong tula ang may linya na 'Ang hindi magmahal sa kanyang salita ay higit sa hayop at malansang isda'?",
    answer: "Sa Aking mga Kababata",
    explanation: "Ang 'Sa Aking mga Kababata' ay naglalaman ng kilalang linya tungkol sa pagmamahal sa sariling wika."
  },
  {
    id: 166,
    type: "identification",
    category: "Recitation",
    question: "Anong orden ng kaparihan ang namamahala at nagpapatakbo ng Ateneo?",
    answer: "Heswita / Jesuits / Society of Jesus",
    explanation: "Ang Society of Jesus (Jesuits o Heswita) ang namamahala sa Ateneo Municipal de Manila."
  },
  {
    id: 167,
    type: "identification",
    category: "Recitation",
    question: "Ano ang Republic Act 1425?",
    answer: "Batas Rizal / Rizal Law",
    explanation: "Ang Republic Act 1425 ay ang Batas Rizal na nag-mandate ng pag-aaral ng buhay, akda, at mga gawa ni Rizal sa lahat ng paaralan."
  },
  {
    id: 168,
    type: "identification",
    category: "Recitation",
    question: "Sino ang tinagurian ni Rizal na 'bulaklak' ng Japan?",
    answer: "O-Sei-San / Seiko Usui",
    explanation: "Si O-Sei-San (Seiko Usui) ang Haponesang guro ng Ingles na naging romantikong interes ni Rizal sa Tokyo noong 1888."
  },
  {
    id: 169,
    type: "identification",
    category: "Recitation",
    question: "Anong barko ang sinasakyan ni Rizal mula Biñan pabalik sa Calamba?",
    answer: "Bapor Talim",
    explanation: "Sakay ng Bapor Talim na umuwi si Rizal mula Biñan noong Disyembre 17, 1870, kasama si Arturo Camps."
  },
  {
    id: 170,
    type: "identification",
    category: "Recitation",
    question: "Kailan ang kapanganakan ni Jose Rizal?",
    answer: "June 19, 1861 / Hunyo 19, 1861",
    explanation: "Ipinanganak si Jose Rizal noong Hunyo 19, 1861 sa Calamba, Laguna."
  },
  {
    id: 171,
    type: "identification",
    category: "Recitation",
    question: "Anong lungsod ang itinuturing na 'patay na lungsod'?",
    answer: "Macau",
    explanation: "Si Rizal ay tumawag sa Macau bilang 'patay na lungsod' dahil sa kakulangan ng buhay at sigla."
  },
  {
    id: 172,
    type: "identification",
    category: "Recitation",
    question: "Ano ang tawag sa isang dulaan o dramang Hapon?",
    answer: "Kabuki",
    explanation: "Ang Kabuki ay tradisyonal na dulaan o drama ng Japan na napanood ni Rizal noong 1888."
  },
  {
    id: 173,
    type: "identification",
    category: "Recitation",
    question: "Anong barko ang sinasakyan ni Rizal papuntang Singapore noong 1882?",
    answer: "Bapor Salvadora",
    explanation: "Ang Salvadora ang barkong sinamahan ni Rizal mula Manila patungong Singapore noong Mayo 3, 1882."
  },
  {
    id: 174,
    type: "identification",
    category: "Recitation",
    question: "Anong barko ang sinasakyan ni Rizal papuntang Hong Kong?",
    answer: "Bapor Zafiro",
    explanation: "Ang Zafiro ang barkong ginamit ni Rizal papuntang Hong Kong sa iba't ibang paglalakbay."
  },
  {
    id: 175,
    type: "identification",
    category: "Recitation",
    question: "Sino ang commissioner sa pagpili ng bayani ng Pilipinas?",
    answer: "William Howard Taft",
    explanation: "Si William Howard Taft, ang unang American Governor-General ng Pilipinas, ay bahagi ng komisyon na pumili kay Rizal bilang pambansang bayani."
  },
  {
    id: 176,
    type: "identification",
    category: "Recitation",
    question: "Sino ang nagpasok ng Batas Rizal sa Kongreso?",
    answer: "Jose P. Laurel Sr.",
    explanation: "Si Senator Jose P. Laurel Sr. ang nag-sponsor ng Republic Act 1425 o Batas Rizal noong 1956."
  },
  {
    id: 177,
    type: "identification",
    category: "Recitation",
    question: "Sino ang tiyo ni Rizal na nagturo sa kaniya ng pagmamahal sa sining?",
    answer: "Jose Alberto",
    explanation: "Si Tiyo Jose Alberto ang nagturo kay Rizal ng sining (pagpipinta at paglililok)."
  },
  {
    id: 178,
    type: "identification",
    category: "Recitation",
    question: "Sino ang dalagang pinagpagukulan ni Rizal ng tula na 'A la Señorita C. O. y R.'?",
    answer: "Consuelo Ortiga y Rey",
    explanation: "Si Consuelo Ortiga y Rey ang dalagang naging tagahanga ni Rizal sa Madrid na pinagpagukulan ng tula."
  },
  {
    id: 179,
    type: "identification",
    category: "Recitation",
    question: "Sino ang pamangkin ni Padre Burgos na paring nagturo kay Rizal para makapasok sa Ateneo?",
    answer: "Dr. Manuel Xerez Burgos",
    explanation: "Si Dr. Manuel Xerez Burgos, pamangkin ni Padre Jose Burgos, ang tumulong kay Rizal na makapasok sa Ateneo."
  },
  {
    id: 180,
    type: "identification",
    category: "Recitation",
    question: "Ano ang unang pighati ni Rizal?",
    answer: "Kamatayan ni Concepcion / Pagkamatay ng kapatid niyang si Concha",
    explanation: "Ang kamatayan ng kanyang kapatid na si Concepcion (Concha) noong 1865 ay ang unang pighati ni Rizal. Ito ang unang pagkakataon na umiyak si Jose."
  },
  {
    id: 181,
    type: "identification",
    category: "Recitation",
    question: "Sino ang dalagang ipinagpapalagay na itinatago ni Rizal sa pangalan na 'Binibining L'?",
    answer: "Jacinta Ibardo Laza",
    explanation: "Si Jacinta Ibardo Laza ang pinaniniwalaang itinutukoy ni Rizal sa pangalan na 'Binibining L'."
  },
  {
    id: 182,
    type: "identification",
    category: "Recitation",
    question: "Ano ang tawag sa pinakamahusay na mag-aaral sa bawat klase sa Ateneo?",
    answer: "Emperador",
    explanation: "Ang 'Emperador' ang pinakamataas na ranggo sa sistemang imperyo ng Ateneo — ang pinakamahusay na mag-aaral."
  },
  {
    id: 183,
    type: "identification",
    category: "Recitation",
    question: "Sino ang paring nagbinyag kay Rizal?",
    answer: "Padre Rufino Collantes",
    explanation: "Si Padre Rufino Collantes ang paring nagbinyag kay Jose Rizal."
  },
  {
    id: 184,
    type: "identification",
    category: "Recitation",
    question: "Ano ang kahulugan ng 'Rizal' sa buong pangalan ni Jose Rizal?",
    answer: "Green field / Pasture / Verdeng parang taniman",
    explanation: "Ang 'Rizal' ay mula sa 'ricial' na nangangahulugang berdeng parang taniman o pasture."
  },
  {
    id: 185,
    type: "identification",
    category: "Recitation",
    question: "Ano ang ibig sabihin ng 'san' sa salitang Hapon?",
    answer: "Binibini o Ginoo / Mr. o Ms.",
    explanation: "Ang 'san' sa Hapon ay isang respectful suffix na nangangahulugang 'Mr.' o 'Ms.' / 'Ginoo' o 'Binibini'."
  },
  {
    id: 186,
    type: "identification",
    category: "Recitation",
    question: "Sino ang itinuturing na 'Mina' sa buhay ni Rizal?",
    answer: "Julia",
    explanation: "Si Julia ang itinuturing na 'Mina' sa buhay ni Rizal — isa sa mga pag-ibig niya."
  },
  {
    id: 187,
    type: "identification",
    category: "Recitation",
    question: "Sino ang 'dakilang pag-ibig' ni Rizal?",
    answer: "Leonor Rivera",
    explanation: "Si Leonor Rivera ang dakilang pag-ibig ni Rizal — ang pinaniniwalaang inspirasyon ni María Clara."
  },
  {
    id: 188,
    type: "identification",
    category: "Recitation",
    question: "Saan nanggaling ang apelyidong 'Realonda' ni Rizal?",
    answer: "Ninang ng nanay ni Rizal",
    explanation: "Ang apelyidong 'Realonda' ay nanggaling sa ninang ng ina ni Rizal na si Teodora Alonso."
  },
  {
    id: 189,
    type: "identification",
    category: "Recitation",
    question: "Ano ang tunay na apelyido ng mag-anak na Rizal?",
    answer: "Mercado",
    explanation: "Ang orihinal na apelyido ng pamilya Rizal ay 'Mercado' bago ito pinalitan ng 'Rizal'."
  },
  {
    id: 190,
    type: "identification",
    category: "Recitation",
    question: "Anong tula ang nagbibigay dangal sa Calamba?",
    answer: "Un Recuerdo a Mi Pueblo",
    explanation: "Ang 'Un Recuerdo a Mi Pueblo' (Alaala sa Aking Bayan) ay tula ni Rizal na nagbibigay dangal sa Calamba."
  },
  {
    id: 191,
    type: "identification",
    category: "Recitation",
    question: "Ano ang tawag sa mga murang manggagawang Tsino?",
    answer: "Coolie",
    explanation: "Ang 'coolie' ay tawag sa mga murang manggagawang Tsino na napansin ni Rizal sa San Francisco."
  },
  {
    id: 192,
    type: "identification",
    category: "Recitation",
    question: "Ano ang itinuturing na pinakamahabang kainan sa buong mundo?",
    answer: "Lauriat",
    explanation: "Ang 'lauriat' ay tradisyunal na salu-salong Tsino na itinuturing na pinakamahabang kainan — natikman ni Rizal sa Macau."
  },
  {
    id: 193,
    type: "identification",
    category: "Recitation",
    question: "Saan nagpakadalubhasa si Rizal sa wikang Kastila?",
    answer: "Santa Isabel College",
    explanation: "Nagpakadalubhasa si Rizal ng wikang Kastila sa Santa Isabel College."
  },
  {
    id: 194,
    type: "identification",
    category: "Recitation",
    question: "Anong sagisag ang ginamit ni Marcelo H. del Pilar?",
    answer: "Dolores Manapat",
    explanation: "Si Marcelo H. del Pilar ay gumamit ng sagisag na 'Dolores Manapat' sa pagsulat ng 'Caiingat Cayo'."
  },
  {
    id: 195,
    type: "identification",
    category: "Recitation",
    question: "Anong bansa ang itinuturing na 'bansang malaya' ni Rizal?",
    answer: "Estados Unidos / United States of America",
    explanation: "Tinawag ni Rizal ang Estados Unidos (USA) bilang 'bansang malaya' — ngunit para lamang sa mga Puti."
  },
  {
    id: 196,
    type: "identification",
    category: "Recitation",
    question: "Sino ang may-akda ng 'Sucesos de las Islas Filipinas'?",
    answer: "Antonio de Morga",
    explanation: "Si Antonio de Morga ang may-akda ng 'Sucesos de las Islas Filipinas' na inianotasyon ni Rizal."
  }

];

// Export for use in quiz.html and reviewer.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS;
}
