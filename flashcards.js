// =========================================================
//  Rizal Reviewer — Flashcard Data (flashcards.js)
// =========================================================

const FLASHCARDS = [

  // ── Pamilya at Kapanganakan ───────────────────────────────
  {
    id: 1,
    category: "Pamilya at Kapanganakan",
    front: "Kailan at saan ipinanganak si Jose Rizal?",
    back: "Hunyo 19, 1861 sa Calamba, Laguna, Pilipinas"
  },
  {
    id: 2,
    category: "Pamilya at Kapanganakan",
    front: "Ano ang buong pangalan ni Jose Rizal?",
    back: "Jose Protacio Rizal Mercado y Alonso Realonda"
  },
  {
    id: 3,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang mga magulang ni Jose Rizal?",
    back: "Ama: Francisco Mercado Rizal\nIna: Teodora Alonso Realonda"
  },
  {
    id: 4,
    category: "Pamilya at Kapanganakan",
    front: "Ika-pila si Jose sa pagkakasunod ng mga anak ng Rizal-Alonso?",
    back: "Ikapito (7th) sa labing-isang magkakapatid"
  },
  {
    id: 5,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang kapatid ni Rizal na nagsilbing giya at tagasuporta ng kaniyang edukasyon?",
    back: "Paciano Rizal — ang mas matandang kapatid na lalaki"
  },
  {
    id: 6,
    category: "Pamilya at Kapanganakan",
    front: "Ano ang kahulugan ng salitang 'Rizal' (mula sa 'ricial')?",
    back: "Verdeng parang taniman; berdeng lugar kung saan tumutubo ang palay"
  },
  {
    id: 7,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang unang guro ni Jose Rizal?",
    back: "Ang kaniyang ina na si Teodora Alonso — nagturo ng pagbabasa, pagsulat, at moralidad"
  },

  // ── Calamba ──────────────────────────────────────────────
  {
    id: 8,
    category: "Calamba",
    front: "Ang mga may-ari ng mga lupain sa Calamba noong panahon ni Rizal",
    back: "Ang mga Dominican Friars (mga Dominikano) — nagmamay-ari ng malawak na hacienda"
  },
  {
    id: 9,
    category: "Calamba",
    front: "Ano ang kalagayan ng mga magsasaka sa Calamba sa ilalim ng Dominican hacienda?",
    back: "Kailangang magbayad ng mataas na upa ng lupa; walang karapatang bumili ng lupa; maaaring palayasin kahit matagal nang naninirahan"
  },
  {
    id: 10,
    category: "Calamba",
    front: "Ano ang epekto ng Dominican hacienda system sa pamilya Rizal?",
    back: "Ang pamilya Rizal at ibang magsasaka ay inusig at pinaalis ng mga Dominikano matapos nilang ipaglaban ang kanilang karapatan"
  },

  // ── Lipunang Kolonyal ─────────────────────────────────────
  {
    id: 11,
    category: "Lipunang Kolonyal",
    front: "Ano ang Peninsulares?",
    back: "Mga Espanyol na ipinanganak sa Espanya (Iberyang Peninsyula) — pinakamataas na antas ng kolonyal na lipunan"
  },
  {
    id: 12,
    category: "Lipunang Kolonyal",
    front: "Ano ang Insulares o Creoles?",
    back: "Mga Espanyol na ipinanganak sa Pilipinas — ikalawang antas ng lipunan, hindi kasing taas ng Peninsulares"
  },
  {
    id: 13,
    category: "Lipunang Kolonyal",
    front: "Ano ang Principalia?",
    back: "Ang lokal na elite na Pilipino — may mga pribilehiyo sa pamunuan ng bayan; kinabibilangan ng pamilya Rizal"
  },
  {
    id: 14,
    category: "Lipunang Kolonyal",
    front: "Ano ang 'polo y servicios'?",
    back: "Sapilitang libreng paggawa ng mga lalaking Pilipino para sa gobyernong Espanyol — isa sa mga pang-aabuso ng kolonyal na pamamahala"
  },
  {
    id: 15,
    category: "Lipunang Kolonyal",
    front: "Ano ang 'bandala'?",
    back: "Sapilitang pagbebenta ng produkto ng mga Pilipino sa gobyernong Espanyol sa napakababang presyo"
  },

  // ── Ateneo Municipal ──────────────────────────────────────
  {
    id: 16,
    category: "Ateneo Municipal",
    front: "Kailan pumasok si Rizal sa Ateneo Municipal de Manila?",
    back: "1872 — sa edad na 11 taong gulang"
  },
  {
    id: 17,
    category: "Ateneo Municipal",
    front: "Kailan nagtapos si Rizal sa Ateneo at anong karangalan ang kaniyang natanggap?",
    back: "1877 — Bachelor of Arts na may pinakamataas na karangalang Sobresaliente (Excellent)"
  },
  {
    id: 18,
    category: "Ateneo Municipal",
    front: "Sino ang paboritong guro ni Rizal sa Ateneo?",
    back: "Fr. Francisco de Paula Sanchez — nagturo ng retoriko at nagbigay inspirasyon sa pagiging manunulat ni Rizal"
  },
  {
    id: 19,
    category: "Ateneo Municipal",
    front: "Ano ang 'Liceo Artístico-Literario de Manila'?",
    back: "Samahan ng mga mahihilig sa panitikan at sining sa Manila; dito nanalo si Rizal ng unang gantimpala noong 1879 (A la Juventud Filipina) at 1880 (El Consejo de los Dioses)"
  },
  {
    id: 20,
    category: "Ateneo Municipal",
    front: "Ano ang naging dahilan para sa tagumpay ni Rizal sa Ateneo?",
    back: "Kaniyang kahusayan sa akademya, talento sa panitikan at sining, at malakas na suporta ng pamilya — lalo na ni Paciano"
  },

  // ── UST ──────────────────────────────────────────────────
  {
    id: 21,
    category: "UST",
    front: "Kailan pumasok si Rizal sa UST?",
    back: "1877 — pagkatapos ng Ateneo; una sa Pilosopiya at Letras, pagkatapos ay Medisina"
  },
  {
    id: 22,
    category: "UST",
    front: "Bakit hindi naging masaya si Rizal sa UST?",
    back: "Naranasan niya ang diskriminasyon — ang mga Pilipinong estudyante ay itinuturing na mas mababa kaysa sa mga Espanyol"
  },
  {
    id: 23,
    category: "UST",
    front: "Sino ang nagpamahalang relihiyoso sa UST?",
    back: "Ang mga Dominican Friars (Mga Dominikano)"
  },
  {
    id: 24,
    category: "UST",
    front: "Hanggang anong taon si Rizal sa UST bago umalis patungong Europa?",
    back: "1882 — hindi pa siya nakatapos ng kaniyang kursong Medisina nang umalis siya"
  },

  // ── Mga Tula at Akda ──────────────────────────────────────
  {
    id: 25,
    category: "Mga Tula at Akda",
    front: "Ano ang 'A la Juventud Filipina'?",
    back: "Tula ni Rizal (1879) na nanalo ng unang gantimpala sa Liceo Artístico-Literario de Manila; tinawag ang kabataang Pilipino bilang 'pag-asa ng inang bayan'; gantimpala: pilak na panulat na hugis-pakpak"
  },
  {
    id: 26,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Mi Primera Inspiración'?",
    back: "Unang tula ni Rizal sa Ateneo; inihandog sa kaniyang inang si Teodora Alonso sa kaarawan ng ina"
  },
  {
    id: 27,
    category: "Mga Tula at Akda",
    front: "Ano ang 'El Consejo de los Dioses'?",
    back: "Alegoryang prosang isinulat ni Rizal habang nasa UST (1880); nanalo ng unang gantimpala sa Liceo Artístico-Literario de Manila para sa paggunita sa ika-300 anibersaryo ng kamatayan ni Cervantes; gantimpala: gintong singsing na may larawan ni Cervantes"
  },
  {
    id: 28,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Amor Patrio' at sa ilalim ng anong pseudonym ito inilathala?",
    back: "'Amor Patrio' (Pagmamahal sa Bayan) — inilathala sa Diariong Tagalog gamit ang pseudonym na 'Laong-Laan'"
  },
  {
    id: 29,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Mi Ultimo Adios'?",
    back: "Huling tula ni Rizal na isinulat bago siya barilin noong Disyembre 30, 1896 — ang kaniyang huling paalam sa bayan"
  },
  {
    id: 30,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Filipinas Dentro de Cien Años'?",
    back: "Serye ng mga sanaysay ni Rizal sa La Solidaridad — hinulaan niya ang posibilidad ng kalayaan ng Pilipinas sa loob ng isang daang taon"
  },
  {
    id: 31,
    category: "Mga Tula at Akda",
    front: "Ano ang Anotasyon ni Rizal sa 'Sucesos de las Islas Filipinas'?",
    back: "Inanotasyon ni Rizal ang akda ni Antonio de Morga (1609) upang ipakita ang mayamang kultura ng Pilipinas bago ang kolonyalismo"
  },

  // ── Noli Me Tangere ───────────────────────────────────────
  {
    id: 32,
    category: "Noli Me Tangere",
    front: "Kailan at saan nailimbag ang Noli Me Tangere?",
    back: "Marso 1887 sa Berlin, Germany"
  },
  {
    id: 33,
    category: "Noli Me Tangere",
    front: "Ano ang kahulugan ng 'Noli Me Tangere'?",
    back: "Latin para sa 'Huwag Mo Akong Salingin' o 'Touch Me Not' — mula sa Bibliya (Juan 20:17)"
  },
  {
    id: 34,
    category: "Noli Me Tangere",
    front: "Ilang kopya ang unang edisyon ng Noli Me Tangere?",
    back: "2,000 kopya"
  },
  {
    id: 35,
    category: "Noli Me Tangere",
    front: "Sino ang nagpahiram ng ₱300 para mailimbag ang Noli?",
    back: "Dr. Máximo Viola — kaibigan at kapwa Pilipino ni Rizal sa Europa"
  },
  {
    id: 36,
    category: "Noli Me Tangere",
    front: "Sino ang pangunahing bida ng Noli Me Tangere?",
    back: "Crisostomo Ibarra — isang Pilipinong nakapalag-aral sa Europa na bumalik sa Pilipinas"
  },
  {
    id: 37,
    category: "Noli Me Tangere",
    front: "Sino si María Clara sa Noli Me Tangere?",
    back: "Ang pangunahing babaeng tauhan; simbolo ng dalisay at mapagmahalang Pilipina; pinaniniwalaang inspirasyon ay si Leonor Rivera"
  },
  {
    id: 38,
    category: "Noli Me Tangere",
    front: "Sino si Padre Damaso sa Noli Me Tangere?",
    back: "Isang mapang-abusong Spanish friar — kinatawan ng lahat ng kasamaan ng kolonyal na paring Espanyol"
  },
  {
    id: 39,
    category: "Noli Me Tangere",
    front: "Sino si Elias sa Noli Me Tangere?",
    back: "Isang mahirap ngunit matalinong lalaki na nagpapakilala ng rebolusyonaryong ideya; namatay para iligtas si Ibarra"
  },

  // ── Buhay sa Europa ───────────────────────────────────────
  {
    id: 40,
    category: "Buhay sa Europa",
    front: "Saang unibersidad nag-aral si Rizal ng medisina sa Madrid?",
    back: "Universidad Central de Madrid — nakakuha ng Licentiate in Medicine"
  },
  {
    id: 41,
    category: "Buhay sa Europa",
    front: "Ano ang natutuhan ni Rizal sa Heidelberg?",
    back: "Oftalmolohi (ophthalmology) sa ilalim ni Dr. Otto Becker — doktor ng mata"
  },
  {
    id: 42,
    category: "Buhay sa Europa",
    front: "Sino si Ferdinand Blumentritt?",
    back: "Austrian na propesor at pinaka-matalik na kaibigan ni Rizal; naninirahan sa Leitmeritz, Bohemia; tagasuporta ng kilusang Pilipino"
  },
  {
    id: 43,
    category: "Buhay sa Europa",
    front: "Ano ang 'La Solidaridad'?",
    back: "Pahayagan ng kilusang propaganda ng mga Ilustrado Pilipino sa Europa; naitatag noong 1889; nailimbag sa Barcelona at Madrid"
  },
  {
    id: 44,
    category: "Buhay sa Europa",
    front: "Ano ang sagisag-panulat ni Rizal sa Masonerya?",
    back: "Dimasalang — ibig sabihin ay 'hindi maaabot' o 'hindi maaatake'"
  },
  {
    id: 45,
    category: "Buhay sa Europa",
    front: "Sino si Dr. Reinhold Rost?",
    back: "Librarian ng India Office Library sa London; kolektor ng mga Pilipiniana; kaibigan at mentor ni Rizal"
  },
  {
    id: 46,
    category: "Buhay sa Europa",
    front: "Ano ang pangalawang nobela ni Rizal at kailan ito nailimbag?",
    back: "El Filibusterismo — nailimbag noong 1891 sa Ghent, Belgium; pinondohan ni Valentin Ventura"
  },

  // ── Mga Pangunahing Tao ───────────────────────────────────
  {
    id: 47,
    category: "Mga Pangunahing Tao",
    front: "Sino si Leonor Rivera sa buhay ni Rizal?",
    back: "Ang naging nobya ni Rizal na naiwan sa Pilipinas; pinaniniwalaang inspirasyon ni María Clara; nagpakasal sa isang Ingles habang si Rizal ay nasa Europa"
  },
  {
    id: 48,
    category: "Mga Pangunahing Tao",
    front: "Sino si Paciano Rizal?",
    back: "Ang mas matandang kapatid ni Rizal; nagsilbing giya at tagasuporta; isa rin sa mga Ilustrado; sumuporta sa edukasyon ni Jose sa Europa"
  },
  {
    id: 49,
    category: "Mga Pangunahing Tao",
    front: "Sino si Dr. Máximo Viola?",
    back: "Kaibigan at kapwa Pilipino ni Rizal sa Europa; nagpahiram ng ₱300 para mailimbag ang Noli Me Tangere; kasama ni Rizal sa paglalakbay sa Europa"
  },
  {
    id: 50,
    category: "Mga Pangunahing Tao",
    front: "Sino ang mga Ilustrado?",
    back: "Mga edukadong Pilipino sa Europa na nagtataguyod ng repormang panlipunan at pampulitika sa pamamagitan ng kilusang propaganda; kabilang sina Rizal, Marcelo H. del Pilar, at Graciano Lopez Jaena"
  },
  {
    id: 51,
    category: "Mga Pangunahing Tao",
    front: "Sino si Teodora Alonso?",
    back: "Ina ni Jose Rizal; unang guro niya; isang edukadang babae para sa kaniyang panahon; naging inspirasyon ng maraming akda ni Rizal"
  },
  {
    id: 52,
    category: "Mga Pangunahing Tao",
    front: "Sino si Seiko Usui (O-Sei-San)?",
    back: "Haponesang guro ng Ingles na nakilala ni Rizal sa Tokyo noong 1888; naging romantikong interes niya sa kaniyang pananatili sa Japan"
  },

  // ── Paglalakbay at Mga Petsa ──────────────────────────────
  {
    id: 53,
    category: "Paglalakbay",
    front: "Kailan at paano lihim na umalis si Rizal sa Pilipinas noong 1882?",
    back: "Mayo 3, 1882 — sakay ng barkong Salvadora; gumamit ng pangalang 'Jose Mercado' upang hindi matukoy"
  },
  {
    id: 54,
    category: "Paglalakbay",
    front: "Anong mga bansa ang pinuntahan ni Rizal bago dumating sa Espanya noong 1882?",
    back: "Singapore, Ceylon (Sri Lanka), Suez Canal Zone, at Marseille, France — pagkatapos ay Barcelona, Espanya"
  },
  {
    id: 55,
    category: "Paglalakbay",
    front: "Ano ang ginawa ni Rizal sa Japan noong 1888?",
    back: "Nanatili ng halos 45 araw; bumisita sa Yokohama at Tokyo; nagpahanga sa pag-unlad ng Japan sa ilalim ng Meiji era; nakilala si O-Sei-San"
  },
  {
    id: 56,
    category: "Paglalakbay",
    front: "Kailan bumalik si Rizal sa Pilipinas pagkatapos ng kaniyang unang pananatili sa Europa?",
    back: "Agosto 1887 — bumalik siya upang makita ang kaniyang pamilya at magpagamot ng mata ng kaniyang ina"
  },
  {
    id: 57,
    category: "Paglalakbay",
    front: "Kailan inilunsad ang ikalawang paglalakbay ni Rizal sa Europa?",
    back: "1888 — dumaan sa Japan, USA, at England bago bumalik sa Europa"
  },
  {
    id: 58,
    category: "Paglalakbay",
    front: "Anong naobserbahan ni Rizal sa San Francisco, USA noong 1888?",
    back: "Nakita niya ang diskriminasyon laban sa mga Intsik-Amerikanong manggagawa at nagtala siya ng kaniyang mga obserbasyon tungkol sa lipunang Amerikano"
  },

  // ── Mga Petsa ─────────────────────────────────────────────
  {
    id: 59,
    category: "Mga Petsa",
    front: "1861",
    back: "Kapanganakan ni Jose Rizal — Hunyo 19, Calamba, Laguna"
  },
  {
    id: 60,
    category: "Mga Petsa",
    front: "1872",
    back: "Pumasok si Rizal sa Ateneo Municipal de Manila; parehong taon: Cavite Mutiny (Enero 20) at pagbitay sa GOMBURZA (Pebrero 17, 1872)"
  },
  {
    id: 61,
    category: "Mga Petsa",
    front: "1877",
    back: "Nagtapos si Rizal sa Ateneo ng Bachelor of Arts (Sobresaliente); pumasok sa UST"
  },
  {
    id: 62,
    category: "Mga Petsa",
    front: "1879",
    back: "Nanalo si Rizal ng unang gantimpala sa Liceo Artístico-Literario de Manila gamit ang 'A la Juventud Filipina' — unang Pilipinong nanalo sa ganitong uri ng patimpalak"
  },
  {
    id: 63,
    category: "Mga Petsa",
    front: "1882",
    back: "Lihim na pag-alis ni Rizal patungong Europa — Mayo 3, sakay ng Salvadora"
  },
  {
    id: 64,
    category: "Mga Petsa",
    front: "1887",
    back: "Nailimbag ang Noli Me Tangere sa Berlin, Germany — Marso 1887; bumalik si Rizal sa Pilipinas — Agosto 1887"
  },
  {
    id: 65,
    category: "Mga Petsa",
    front: "1888",
    back: "Ikalawang paglalakbay ni Rizal patungong Europa — dumaan sa Japan, USA, England"
  },
  {
    id: 66,
    category: "Mga Petsa",
    front: "1891",
    back: "Nailimbag ang El Filibusterismo sa Ghent, Belgium"
  },
  {
    id: 67,
    category: "Mga Petsa",
    front: "1896",
    back: "Inaresto, sinubukan, at binaril si Rizal — Disyembre 30, 1896 sa Bagumbayan (ngayon ay Luneta)"
  },

  // ── ADDITIONAL FLASHCARDS ─────────────────────────────────

  // ── Biñan ────────────────────────────────────────────────
  {
    id: 68,
    category: "Biñan",
    front: "Sino ang guro ni Rizal sa Biñan?",
    back: "Maestro Justiniano Aquino Cruz — walang araw na walang hampas (5-6 palo kahit maganda ang marka)"
  },
  {
    id: 69,
    category: "Biñan",
    front: "Kailan umuwi si Rizal mula Biñan?",
    back: "Disyembre 17, 1870 — sakay ng Bapor Talim, kasama si Arturo Camps (Pranses, kaibigan ng ama)"
  },
  {
    id: 70,
    category: "Biñan",
    front: "Sino ang class painter kasama ni Rizal sa Biñan?",
    back: "Jose Guevarra — tumulong si Rizal kay Juancho sa pagpipinta"
  },

  // ── Ateneo Years ─────────────────────────────────────────
  {
    id: 71,
    category: "Ateneo Municipal",
    front: "Sino ang unang guro ni Rizal sa Ateneo?",
    back: "Padre José Bech — 'payat at matangkad, seryoso, inspirado, mukhang Griyego'"
  },
  {
    id: 72,
    category: "Ateneo Municipal",
    front: "Anong dalawang imperyo ang nag-compete sa Ateneo?",
    back: "Imperyo Romano (interno, bandilang pula) at Imperyo Carthagena (externo, bandilang asul)"
  },
  {
    id: 73,
    category: "Ateneo Municipal",
    front: "Ano ang limang ranggo sa imperyo ng Ateneo?",
    back: "1. Emperador, 2. Tribuna, 3. Dekuryon, 4. Senturyon, 5. Tagapagdala ng Bandila"
  },
  {
    id: 74,
    category: "Ateneo Municipal",
    front: "Kailan naging Emperador si Rizal sa Ateneo?",
    back: "Makalipas ang isang buwan sa unang taon (1872-1873)"
  },
  {
    id: 75,
    category: "Ateneo Municipal",
    front: "Ano ang paboritong nobela ni Rizal na una niyang binasa?",
    back: "The Count of Monte Cristo ni Alexandre Dumas — dinalaw niya ang Château d'If sa Marseilles noong 1882"
  },
  {
    id: 76,
    category: "Ateneo Municipal",
    front: "Ano ang huling tula ni Rizal sa Ateneo?",
    back: "Un Diálogo Alusivo a la Despedida de los Colegiales (1877) — pamamaalam sa mga kaklase"
  },

  // ── UST Years ────────────────────────────────────────────
  {
    id: 77,
    category: "UST",
    front: "Ano ang kursong bokasyonal na kinuha ni Rizal sa Ateneo habang nag-aaral sa UST?",
    back: "Agrimensor (surveying) — natapos noong Mayo 21, 1878, edad 17; lisensya: Nob. 25, 1881"
  },
  {
    id: 78,
    category: "UST",
    front: "Ano ang sagisag ni Rizal sa 'Memorias de un Estudiante de Manila'?",
    back: "P. Jacinto — talaarawan na isinulat noong huling mga buwan ng 1878"
  },
  {
    id: 79,
    category: "UST",
    front: "Sino ang unang pag-ibig ni Rizal?",
    back: "Segunda Katigbak (edad 14) — nakilala noong Dis. 1877 sa bahay ng lola ni Rizal sa Troso, Maynila; naging unang kabiguan"
  },
  {
    id: 80,
    category: "UST",
    front: "Sino si Leonor Valenzuela ('Orang')?",
    back: "Kapitbahay ni Rizal sa Intramuros (ika-2 taon sa UST); anak nina Kap. Juan at Kapitana Sanday Valenzuela; gumamit ng invisible ink (asin + tubig) sa mga liham"
  },

  // ── Poems & Works ────────────────────────────────────────
  {
    id: 81,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Felicitación' (Maligayang Bati)?",
    back: "Tula ni Rizal (1875) para sa kaarawan ng bayaw na si Antonio López — hiling ng mga kapatid na babae"
  },
  {
    id: 82,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Un Recuerdo a mi Pueblo' (1876)?",
    back: "Tula ni Rizal na iniharap sa Akademiya ng Panitikan ng Ateneo — pag-ibig at pananabik sa Calamba, 'duyan ng matatamis na alaala ng masayang kabataan'"
  },
  {
    id: 83,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Junto al Pasig' (1880)?",
    back: "Sarswelang may iisang yugto (dulang may musika) — itinanghal ng mga Atenista noong Dis. 8, 1880 (Kapistahan ng Inmaculada Concepción); musika ni Blas Echegoyen"
  },
  {
    id: 84,
    category: "Mga Tula at Akda",
    front: "Sino ang nagsalin sa Tagalog ng 'Amor Patrio'?",
    back: "Marcelo H. del Pilar — inilathala sa Diariong Tagalog noong Agosto 20, 1882"
  },
  {
    id: 85,
    category: "Mga Tula at Akda",
    front: "Ano ang 'Me Piden Versos'?",
    back: "Tula ng kalungkutan at pangungulila sa ibang bayan — 'Ako'y isang punong katutubo lamang / Na biglang binunot sa lupang sinilangan'"
  },

  // ── GOMBURZA ─────────────────────────────────────────────
  {
    id: 86,
    category: "GOMBURZA",
    front: "Kailan ang Cavite Mutiny?",
    back: "Enero 20, 1872 — nag-udyok sa pagbitay sa GOMBURZA"
  },
  {
    id: 87,
    category: "GOMBURZA",
    front: "Kailan binaril ang GOMBURZA?",
    back: "Pebrero 17, 1872 (HINDI Pebrero 1) — garrote sa Bagumbayan"
  },
  {
    id: 88,
    category: "GOMBURZA",
    front: "Sino ang tatlong pari na bumuo ng GOMBURZA?",
    back: "Padre Mariano Gomez, Padre Jose Burgos, Padre Jacinto Zamora"
  },
  {
    id: 89,
    category: "GOMBURZA",
    front: "Paano naapektuhan si Paciano ng GOMBURZA?",
    back: "Kaibigan at nangungupahan ni Padre Burgos — pinatigil siya sa pag-aaral upang mabuhay at hindi madamay"
  },
  {
    id: 90,
    category: "GOMBURZA",
    front: "Ilang taon si Jose nang gumising ang kaniyang kamalayan dahil sa GOMBURZA?",
    back: "11 taong gulang — ang GOMBURZA ay nag-udyok ng kaniyang pag-unlad bilang bayani"
  },

  // ── Family Details ───────────────────────────────────────
  {
    id: 91,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang kapatid ni Rizal na namatay noong edad na 3?",
    back: "Concepcion (Concha), 1862–1865 — unang pag-iyak ni Jose"
  },
  {
    id: 92,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang tatlong pribadong guro ni Rizal bago ang Biñan?",
    back: "Celestino (panimulang aralin), Lucas Padua (aritmetika), Leon Monroy (Espanyol at Latin)"
  },
  {
    id: 93,
    category: "Pamilya at Kapanganakan",
    front: "Sino ang apat na tiyo ni Rizal at ang kanilang itinuro?",
    back: "Tiyo Manuel (katawan), Tiyo Gregorio (aklat at pagmamasid), Tiyo Jose Alberto (sining), Teodora (pananampalataya)"
  },
  {
    id: 94,
    category: "Pamilya at Kapanganakan",
    front: "Ilang taon nakakulong si Teodora Alonso?",
    back: "Mahigit 2 taon (1871-1874) — maling akusasyon ni Teodora Formoso na sinubukang lasunin; totoo: may sakit dahil sa aso (Ranqulfo) at tsokolate"
  },
  {
    id: 95,
    category: "Pamilya at Kapanganakan",
    front: "Ano ang Catalogo alfabetico de apellidos (1849)?",
    back: "Nobyembre 21, 1849 — para sa senso, buwis, at rekord ng simbahan; HINDI patunay ng dugong Kastila"
  },

  // ── Europe Life Details ──────────────────────────────────
  {
    id: 96,
    category: "Buhay sa Europa",
    front: "Kailan natapos ang Noli Me Tangere?",
    back: "Abril–Hunyo 1886 sa Wilhelmsfeld, Germany (piling ni Pastor Karl Ullmer); huling rebisyon sa Berlin (1886–1887)"
  },
  {
    id: 97,
    category: "Buhay sa Europa",
    front: "Sino ang palimbagan ng Noli Me Tangere?",
    back: "Berliner Buchdruckerei-Aktiengesellschaft — 2,000 kopya, halagang ₱300"
  },
  {
    id: 98,
    category: "Buhay sa Europa",
    front: "Kailan una niyang liham kay Ferdinand Blumentritt?",
    back: "Hulyo 31, 1886 — kalakip ang Aritmética ni Rufino Baltazar Hernández; simula ng panghabambuhay na pagkakaibigan"
  },
  {
    id: 99,
    category: "Buhay sa Europa",
    front: "Saan nanirahan si Rizal sa Berlin?",
    back: "Jägerstrasse (Nob. 1886 – Mayo 1887) — halos gutom (isang basong tubig sa umaga, gulay at patatas sa tanghali)"
  },
  {
    id: 100,
    category: "Buhay sa Europa",
    front: "Ano ang logia ng Masonerya ni Rizal?",
    back: "Logia Acacia (kalaunan Logia Solidaridad) — sumali noong 1883, sagisag: Dimasalang"
  },
  {
    id: 101,
    category: "Buhay sa Europa",
    front: "Ano ang 'Tagalische Verskunst'?",
    back: "Ang Sining ng Panulaang Tagalog — panayam ni Rizal sa Lipunan ng mga Dalubwika sa wikang Aleman, Abril 1887"
  },
  {
    id: 102,
    category: "Buhay sa Europa",
    front: "Sino si Consuelo Ortega y Rey?",
    back: "Dalaga na naging tagahanga ni Rizal sa Madrid (tagpuan: Circulo Hispano-Filipino); umatras si Rizal dahil kay Eduardo de Lete at kay Leonor Rivera"
  },

  // ── Travel Details ───────────────────────────────────────
  {
    id: 103,
    category: "Paglalakbay",
    front: "Ano ang unang barko ni Rizal mula Manila?",
    back: "Salvadora (kapitan: Donato Lecha) — Mayo 3, 1882; kasama sina Barco, Morlan, Pardo, Buil"
  },
  {
    id: 104,
    category: "Paglalakbay",
    front: "Ano ang pangalawang barko ni Rizal patungong Point de Galle?",
    back: "Djemnah (barkong Pranses) — mula Singapore; binasa niya ang 'Charles the Bold' ni Walter Scott sa biyahe"
  },
  {
    id: 105,
    category: "Paglalakbay",
    front: "Kailan dumating si Rizal sa Barcelona?",
    back: "Hunyo 15, 1882 — unang impresyon: marumi at pangit; nag-iba nang makita ang kalayaan sa pagtitipon at pamamahayag"
  },
  {
    id: 106,
    category: "Paglalakbay",
    front: "Saan nanirahan si Rizal sa Barcelona?",
    back: "Blg. 3 Calle de Sitjes — kasera: Señora Silvestra (tawag sa kaniya: 'Don Pepe')"
  },
  {
    id: 107,
    category: "Paglalakbay",
    front: "Kailan dumating si Rizal sa Heidelberg?",
    back: "Peb. 3, 1886 (3:00 n.h.) — nanirahan sa Karlstrasse 16 (kasera: Nebel, babaeng Aleman)"
  },
  {
    id: 108,
    category: "Paglalakbay",
    front: "Sino ang doktor ng mata na guro ni Rizal sa Heidelberg?",
    back: "Dr. Otto Becker — kilala sa Alemanya, nagsanay sa Vienna, nagtatag ng museo ng sining, kaibigan ni Brahms"
  },
  {
    id: 109,
    category: "Paglalakbay",
    front: "Ano ang 'A las Flores de Heidelberg'?",
    back: "Tula ni Rizal (Abril 22, 1886) sa pampang ng Ilog Neckar — pinakiusapan ang mga bulaklak na dalhin sa Pilipinas ang kaniyang pag-ibig"
  },
  {
    id: 110,
    category: "Paglalakbay",
    front: "Kailan umalis si Rizal sa Heidelberg?",
    back: "Agosto 8, 1886 — dumalo sa ika-500 anibersaryo ng Pamantasan ng Heidelberg"
  },
  {
    id: 111,
    category: "Paglalakbay",
    front: "Saan pumunta si Rizal pagkatapos ng Heidelberg?",
    back: "Leipzig (panayam sa kasaysayan ng sikolohiya), Dresden (Dr. Adolph B. Meyer), at Berlin"
  },
  {
    id: 112,
    category: "Paglalakbay",
    front: "Kailan dumating si Rizal sa Roma?",
    back: "Hunyo 27, 1887 — 'Ang abo ng mga bayani ay tinatapakan ng mga paa ko' (sa harap ng mga guho ng mga Cesar)"
  },
  {
    id: 113,
    category: "Paglalakbay",
    front: "Kailan bumalik si Rizal sa Pilipinas mula Europa (unang beses)?",
    back: "Agosto 5, 1887 (Maynila) / Agosto 8, 1887 (Calamba) — sakay ng Djemnah mula Marseille (Hulyo 3, 1887)"
  },
  {
    id: 114,
    category: "Paglalakbay",
    front: "Sino ang espiyang sumunod kay Rizal sa Hong Kong?",
    back: "José Sainz de Varanda — inutusan ni Gobernador Terrero"
  },
  {
    id: 115,
    category: "Paglalakbay",
    front: "Ano ang lauriat?",
    back: "Tradisyunal na salu-salong Tsino — nakatikim si Rizal sa Macau (century egg, hipon, palikpik ng pating, pugad ng ibon)"
  },
  {
    id: 116,
    category: "Paglalakbay",
    front: "Kailan dumating si Rizal sa Yokohama, Japan?",
    back: "Pebrero 28, 1888 (madaling-araw) — nakatira sa Grand Hotel"
  },
  {
    id: 117,
    category: "Paglalakbay",
    front: "Kailan nanatili si Rizal sa Tokyo?",
    back: "Marso 2–7, 1888 — Tokyo Hotel; tirahan: Legasyong Español (Juan Perez Caballero, kalihim)"
  },
  {
    id: 118,
    category: "Paglalakbay",
    front: "Kailan umalis si Rizal sa Japan?",
    back: "Abril 13, 1888 — sakay ng S.S. Belgic patungong USA; kasama sina Pamilya Turner, Emma Jackson, Tetcho Suehiro"
  },
  {
    id: 119,
    category: "Paglalakbay",
    front: "Sino si Tetcho Suehiro?",
    back: "Palabang Hapon, mamamahayag, nobelista — nakilala sa barko; sumulat ng 'Bato sa Tubig' tungkol kay Rizal (tauhan: Takashi Takayama)"
  },
  {
    id: 120,
    category: "Paglalakbay",
    front: "Kailan dumating si Rizal sa San Francisco?",
    back: "Abril 28, 1888 — hindi agad pinababa (kuwarentina dahil sa 643 Tsinong coolie at malapit na eleksyon)"
  },
  {
    id: 121,
    category: "Paglalakbay",
    front: "Sino si Leland Stanford?",
    back: "Nakilala ni Rizal sa San Francisco — nagpatayo ng Stanford University"
  },
  {
    id: 122,
    category: "Paglalakbay",
    front: "Kailan umalis si Rizal sa New York patungong Liverpool?",
    back: "Mayo 16, 1888 — sakay ng City of Rome (2nd pinakamalaking barko noon); nakita ang Statue of Liberty"
  },
  {
    id: 123,
    category: "Paglalakbay",
    front: "Ano ang sinabi ni Rizal tungkol sa Amerika?",
    back: "'Ang Amerika ay isang bansang may napakagaling na kalayaan ngunit para lamang sa mga Puti' — sinabi kay Jose Alejandro sa Brussels"
  },

  // ── Colonial System ──────────────────────────────────────
  {
    id: 124,
    category: "Lipunang Kolonyal",
    front: "Ano ang 'polo y servicios'?",
    back: "Sapilitang libreng paggawa ng mga lalaking Pilipino (16-60 taong gulang) para sa gobyernong Espanyol — 40 araw bawat taon"
  },
  {
    id: 125,
    category: "Lipunang Kolonyal",
    front: "Ano ang 'bandala'?",
    back: "Sapilitang pagbebenta ng produkto ng mga Pilipino (palay, abaca) sa gobyernong Espanyol sa napakababang presyo"
  },
  {
    id: 126,
    category: "Lipunang Kolonyal",
    front: "Ano ang hagdan ng lipunan sa kolonyal na Pilipinas?",
    back: "1. Peninsulares, 2. Creoles/Insulares, 3. Chinese mestizos, 4. Principalia, 5. Inquilinos, 6. Magsasaka (indio)"
  },

  // ── Noli Reactions ───────────────────────────────────────
  {
    id: 127,
    category: "Noli Me Tangere",
    front: "Sino ang nag-utos ng komite ng UST laban sa Noli?",
    back: "Padre Gregorio Echavarria (rektor ng UST) — komite: Padre Matias Gomez, Norberto del Prado, Fernandes Asias"
  },
  {
    id: 128,
    category: "Noli Me Tangere",
    front: "Sino ang Agustinong pinuno ng Permanenteng Komisyon ng Sensura?",
    back: "Padre Salvador Font — opisyal na nag-rekomenda ng pagbabawal sa Noli"
  },
  {
    id: 129,
    category: "Noli Me Tangere",
    front: "Sino ang naglabas ng 8 polyeto laban sa Noli?",
    back: "Padre José Rodríguez (Agustino, Superior ng Guadalupe) — tinawag ang Noli na 'kasalanang mortal' na basahin"
  },
  {
    id: 130,
    category: "Noli Me Tangere",
    front: "Sino ang sumulat ng 'Caiingat Cayo' bilang tugon?",
    back: "Marcelo H. del Pilar (sagisag: 'Dolores Manapat') — ipinamahagi sa simbahan, napagkamalang gawa ni Rodriguez"
  },
  {
    id: 131,
    category: "Noli Me Tangere",
    front: "Sino si Don Jose Taviel de Andrade?",
    back: "Batang tenyente na ibinigay ni Gobernador Terrero bilang bantay/tagapagtanggol ni Rizal matapos ang Noli"
  },

  // ── El Filibusterismo ────────────────────────────────────
  {
    id: 132,
    category: "El Filibusterismo",
    front: "Kailan nailimbag ang El Filibusterismo?",
    back: "Setyembre 18, 1891 sa Ghent, Belgium"
  },
  {
    id: 133,
    category: "El Filibusterismo",
    front: "Sino ang nagpinansya ng El Filibusterismo?",
    back: "Valentin Ventura — kaibigan ni Rizal na mayamang Pilipino sa Europa"
  },
  {
    id: 134,
    category: "El Filibusterismo",
    front: "Sino ang pangunahing tauhan ng El Fili?",
    back: "Simoun — ang dating Crisostomo Ibarra na naging mapanghimagsik na negosyante"
  },
  {
    id: 135,
    category: "El Filibusterismo",
    front: "Sino si Basilio sa El Fili?",
    back: "Estudyante ng medisina; anak ni Sisa; tumupad ng pangarap na maging doktor"
  },
  {
    id: 136,
    category: "El Filibusterismo",
    front: "Sino si Isagani sa El Fili?",
    back: "Makatang estudyante; kasintahan ni Paulita Gomez; idealista at nag-dream ng reporma"
  },
  {
    id: 137,
    category: "El Filibusterismo",
    front: "Sino si Padre Florentino sa El Fili?",
    back: "Matalinong paring Pilipino; nag-alalay kay Simoun sa kaniyang kamatayan"
  },
  {
    id: 138,
    category: "El Filibusterismo",
    front: "Ano ang pangkat ng estudyante na nag-petition para sa Espanyol na guro?",
    back: "Academia de Derecho Español — kabilang sina Isagani at Basilio"
  },
  {
    id: 139,
    category: "El Filibusterismo",
    front: "Kailan namatay si Simoun sa El Fili?",
    back: "Sa wakas ng nobela; sa bahay ni Padre Florentino; nagtapat ng kasalanan at nagsisi"
  },

  // ── Dapitan ──────────────────────────────────────────────
  {
    id: 140,
    category: "Dapitan",
    front: "Kailan ipinatapon si Rizal sa Dapitan?",
    back: "Hulyo 17, 1892 — tatlong araw pagkatapos ng La Liga Filipina"
  },
  {
    id: 141,
    category: "Dapitan",
    front: "Ilang taon nakulong si Rizal sa Dapitan?",
    back: "4 taon (1892-1896) — Hulyo 17, 1892 – Hulyo 31, 1896"
  },
  {
    id: 142,
    category: "Dapitan",
    front: "Ano ang mga pangunahing gawain ni Rizal sa Dapitan?",
    back: "Nagtayo ng paaralan, ospital, water system; nag-farm; nag-kolekta ng halaman at hayop; nag-practice ng medisina"
  },
  {
    id: 143,
    category: "Dapitan",
    front: "Sino si Padre Jose Vilaclara?",
    back: "Paring Heswita sa Dapitan na naging kaibigan ni Rizal; regular na nag-debate tungkol sa relihiyon"
  },
  {
    id: 144,
    category: "Dapitan",
    front: "Ano ang 'Talisay' sa Dapitan?",
    back: "16-hectare na lupa na binili ni Rizal; lugar ng kaniyang paaralan, ospital, farm, at tahanan"
  },
  {
    id: 145,
    category: "Dapitan",
    front: "Ano ang mga kurso na itinuro ni Rizal sa kaniyang paaralan sa Dapitan?",
    back: "Ingles, Espanyol, aritmetika, heograpiya, agrikultura, at mga kasanayan sa buhay"
  },
  {
    id: 146,
    category: "Dapitan",
    front: "Sino ang dating guro ni Rizal sa Ateneo na bumisita sa kaniya sa Dapitan?",
    back: "Padre Francisco de Paula Sanchez (Peb. 1895) — nag-iwan ng malaking impluwensiya"
  },

  // ── Josephine Bracken ────────────────────────────────────
  {
    id: 147,
    category: "Josephine Bracken",
    front: "Sino si Josephine Bracken?",
    back: "Irlandes-Amerikanang naging asawa ni Rizal sa Dapitan (common-law wife); ipinanganak sa Hong Kong"
  },
  {
    id: 148,
    category: "Josephine Bracken",
    front: "Kailan dumating si Josephine sa Dapitan?",
    back: "Pebrero 1895 — kasama ang amang-bulagan niyang si George Taufer"
  },
  {
    id: 149,
    category: "Josephine Bracken",
    front: "Bakit tumanggi ang pari na ikasal sina Rizal at Josephine?",
    back: "Dahil hindi handa si Rizal na talikuran ang kaniyang paninindigan at manumbalik sa simbahan"
  },
  {
    id: 150,
    category: "Josephine Bracken",
    front: "Kailan ikinasal sina Rizal at Josephine (relihiyosong seremonya)?",
    back: "Disyembre 29, 1896 — sa kulungan sa Fort Santiago, ilang oras bago siya barilin"
  },

  // ── La Liga Filipina ─────────────────────────────────────
  {
    id: 151,
    category: "La Liga Filipina",
    front: "Kailan itinatag ang La Liga Filipina?",
    back: "Hulyo 3, 1892 sa bahay ni Doroteo Ongjunco, Ilaya St., Tondo, Manila"
  },
  {
    id: 152,
    category: "La Liga Filipina",
    front: "Ano ang layunin ng La Liga Filipina?",
    back: "Pag-isa ng mga Pilipino; tulong sa mga miyembro; edukasyon; pag-develop ng agrikultura at komersyo"
  },
  {
    id: 153,
    category: "La Liga Filipina",
    front: "Bakit nabigo ang La Liga Filipina?",
    back: "Inaresto si Rizal 3 araw pagkatapos (Hulyo 6, 1892) at itinatapon sa Dapitan"
  },
  {
    id: 154,
    category: "La Liga Filipina",
    front: "Ano ang nangyari sa La Liga pagkatapos ng pag-aaresto kay Rizal?",
    back: "Naghiwalay: moderados → Cuerpo de Compromisarios; radicals → Katipunan"
  },

  // ── Katipunan ────────────────────────────────────────────
  {
    id: 155,
    category: "Katipunan",
    front: "Kailan itinatag ang Katipunan?",
    back: "Hulyo 7, 1892 — parehong araw ng pag-aaresto kay Rizal"
  },
  {
    id: 156,
    category: "Katipunan",
    front: "Sino ang tagapagtatag ng Katipunan?",
    back: "Andres Bonifacio — Supremo ng Katipunan"
  },
  {
    id: 157,
    category: "Katipunan",
    front: "Ano ang buong pangalan ng Katipunan?",
    back: "Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan (KKK)"
  },
  {
    id: 158,
    category: "Katipunan",
    front: "Ano ang posisyon ni Rizal sa Katipunan?",
    back: "Honorary President — kahit hindi miyembro; ang Katipunan ay nag-proclama sa kaniya bilang inspirasyon"
  },
  {
    id: 159,
    category: "Katipunan",
    front: "Kailan nabunyag ang Katipunan?",
    back: "Agosto 19, 1896 — si Teodoro Patiño ang nagsumbong sa mga pari"
  },

  // ── Pagbabalik at Pag-aaresto ────────────────────────────
  {
    id: 160,
    category: "Pagbabalik",
    front: "Kailan umalis si Rizal sa Dapitan patungong Kuba?",
    back: "Hulyo 31, 1896 — bilang volunteer army doctor"
  },
  {
    id: 161,
    category: "Pagbabalik",
    front: "Kailan inaresto si Rizal sa barkong Colon?",
    back: "Oktubre 3, 1896 sa Barcelona, Spain — pabalik mula Kuba"
  },
  {
    id: 162,
    category: "Pagbabalik",
    front: "Kailan bumalik si Rizal sa Pilipinas bilang bilanggo?",
    back: "Nobyembre 3, 1896 — dinala sa Fort Santiago"
  },

  // ── Kamatayan ────────────────────────────────────────────
  {
    id: 163,
    category: "Kamatayan",
    front: "Kailan nagsimula ang korte-martiyal ni Rizal?",
    back: "Disyembre 26, 1896 — sa Cuartel de España"
  },
  {
    id: 164,
    category: "Kamatayan",
    front: "Ano ang mga akusasyon laban kay Rizal?",
    back: "Founder ng Katipunan; pag-uudyok ng rebelyon sa pamamagitan ng Noli at Fili; pagtatag ng lihim na samahan"
  },
  {
    id: 165,
    category: "Kamatayan",
    front: "Kailan natapos ang trial at ibinigay ang hatol?",
    back: "Disyembre 28, 1896 — hatol: kamatayan sa pamamagitan ng pagbaril"
  },
  {
    id: 166,
    category: "Kamatayan",
    front: "Kailan isinulat ni Rizal ang 'Mi Ultimo Adios'?",
    back: "Gabi ng Disyembre 29, 1896 — sa kulungan sa Fort Santiago"
  },
  {
    id: 167,
    category: "Kamatayan",
    front: "Kailan binaril si Jose Rizal?",
    back: "Disyembre 30, 1896 — 7:03 AM sa Bagumbayan (ngayon Luneta/Rizal Park)"
  },
  {
    id: 168,
    category: "Kamatayan",
    front: "Ano ang huling salita ni Rizal?",
    back: "'Consummatum est!' (Latin: Tapos na / It is finished) — parehong sinabi ni Hesus sa krus"
  },
  {
    id: 169,
    category: "Kamatayan",
    front: "Ilang taon si Rizal nang siya ay barilin?",
    back: "35 taong gulang (ipinanganak: Hunyo 19, 1861; namatay: Dis. 30, 1896)"
  },
  {
    id: 170,
    category: "Kamatayan",
    front: "Saan inilibing si Rizal?",
    back: "Sa Paco Cemetery, Manila — walang tanda sa una; kalaunan itinayo ang monumento sa Luneta"
  },

  // ── More Historical Context ──────────────────────────────
  {
    id: 171,
    category: "Himagsikan",
    front: "Kailan nagsimula ang Rebolusyong Pilipino?",
    back: "Agosto 23, 1896 — Cry of Pugad Lawin / Cry of Balintawak"
  },
  {
    id: 172,
    category: "Himagsikan",
    front: "Sino ang Supremo ng Katipunan na nag-declare ng rebolusyon?",
    back: "Andres Bonifacio — nag-tear ng cedula bilang simbolo ng paghihimagsik"
  },
  {
    id: 173,
    category: "Himagsikan",
    front: "Sino ang naging pangulo ng unang republika ng Pilipinas?",
    back: "Emilio Aguinaldo (Republika ng Malolos, 1899)"
  },
  {
    id: 174,
    category: "Kasaysayan",
    front: "Ano ang Treaty of Paris (1898)?",
    back: "Kasunduan kung saan ibinenta ng Espanya ang Pilipinas sa Amerika sa halagang $20 million"
  },

  // ── Mga Karagdagang Detalye ─────────────────────────────
  {
    id: 175,
    category: "Mga Talento ni Rizal",
    front: "Ilang wika ang alam ni Rizal?",
    back: "22+ wika — kabilang ang Tagalog, Kastila, Ingles, Pranses, Aleman, Latin, Griyego, Hebreo, Sanskrit, atbp."
  },
  {
    id: 176,
    category: "Mga Talento ni Rizal",
    front: "Ano ang mga talento ni Rizal bukod sa pagsusulat?",
    back: "Pagpipinta, paglililok, arkitektura, medisina (ophthalmology), inhinyeriya, botaniko, entomology"
  },
  {
    id: 177,
    category: "Mga Talento ni Rizal",
    front: "Ano ang mga species na nakapangalan kay Rizal?",
    back: "Draco rizali (flying lizard), Apogonia rizali (beetle), Rhacophorus rizali (frog)"
  },
  {
    id: 178,
    category: "Memorabilia",
    front: "Saan itinago ni Trinidad Rizal ang 'Mi Ultimo Adios'?",
    back: "Sa loob ng alcohol lamp — dinalhan niya si Rizal sa kulungan"
  },
  {
    id: 179,
    category: "Memorabilia",
    front: "Ano ang laman ng huling liham ni Rizal kay Blumentritt?",
    back: "'Mahal kong kaibigan: Aking pinapaalam sa iyo na sa alas 7:00 bukas ako ay papatayin... Adios, aking pinakamahusay na kaibigan, at hindi kailanman ay makalimot ng mga nag-mamahal sa iyo sa bansang ito!' (Dis. 29, 1896)"
  },
  {
    id: 180,
    category: "Parangal",
    front: "Kailan ginawang pambansang bayani si Rizal?",
    back: "1995 — sa pamamagitan ng Republic Act No. 1425 (Rizal Law, 1956) at mga sumunod na deklarasyon"
  }
,

  // ── Recitation (Quick Q&A) ───────────────────────────────
  {
    id: 181,
    category: "Recitation",
    front: "Ano ang dating pangalan ng kawang gawa para sa kalalakihan?",
    back: "Escuela Pia"
  },
  {
    id: 182,
    category: "Recitation",
    front: "Anong degree academiko ang nakuha ni Rizal sa Ateneo?",
    back: "Bachelor of Arts (1877, Sobresaliente)"
  },
  {
    id: 183,
    category: "Recitation",
    front: "Anong taon hinatulan ng kamatayan ang GOMBURZA?",
    back: "1872 (Pebrero 17, 1872)"
  },
  {
    id: 184,
    category: "Recitation",
    front: "Anong imperyo ang para sa mga estudyanteng nangangasera sa labas ng Ateneo?",
    back: "Carthagena (bandilang asul)"
  },
  {
    id: 185,
    category: "Recitation",
    front: "Anong tula ang inihandog ni Rizal sa kaarawan ng ina?",
    back: "Mi Primera Inspiración"
  },
  {
    id: 186,
    category: "Recitation",
    front: "Sino ang patron ng Ateneo?",
    back: "Immaculada Concepción (Immaculate Conception)"
  },
  {
    id: 187,
    category: "Recitation",
    front: "Anong dalawang salita ang pinagmulan ng pangalan ng Calamba?",
    back: "Kalan at Banga"
  },
  {
    id: 188,
    category: "Recitation",
    front: "Sino ang unang pag-ibig at kabiguan ni Rizal?",
    back: "Segunda Katigbak (edad 14, Disyembre 1877)"
  },
  {
    id: 189,
    category: "Recitation",
    front: "Ano ang pinakamataas na opisyal ng Pilipinas noong panahon ng Kastila?",
    back: "Gobernador-Heneral"
  },
  {
    id: 190,
    category: "Recitation",
    front: "Anong uri ng pari ang karibal ng paring regular?",
    back: "Paring sekular (secular priests)"
  },
  {
    id: 191,
    category: "Recitation",
    front: "Sino ang ninong ni Rizal?",
    back: "Padre Pedro Casañas"
  },
  {
    id: 192,
    category: "Recitation",
    front: "Sino ang guro ni Rizal sa Biñan?",
    back: "Maestro Justiniano Aquino Cruz (kaklase: Juancho/Jose Guevarra)"
  },
  {
    id: 193,
    category: "Recitation",
    front: "Anong tula ang may linya 'Ang hindi magmahal sa kanyang salita ay higit sa hayop at malansang isda'?",
    back: "Sa Aking mga Kababata"
  },
  {
    id: 194,
    category: "Recitation",
    front: "Anong orden ng kaparihan ang namamahala sa Ateneo?",
    back: "Heswita (Jesuits / Society of Jesus)"
  },
  {
    id: 195,
    category: "Recitation",
    front: "Ano ang Republic Act 1425?",
    back: "Batas Rizal (Rizal Law) — nag-mandate ng pag-aaral ng buhay ni Rizal"
  },
  {
    id: 196,
    category: "Recitation",
    front: "Sino ang tinagurian ni Rizal na 'bulaklak' ng Japan?",
    back: "O-Sei-San (Seiko Usui)"
  },
  {
    id: 197,
    category: "Recitation",
    front: "Anong barko ang sinasakyan ni Rizal mula Biñan pabalik sa Calamba?",
    back: "Bapor Talim (Disyembre 17, 1870)"
  },
  {
    id: 198,
    category: "Recitation",
    front: "Kailan ang birthday ni Jose Rizal?",
    back: "June 19, 1861 / Hunyo 19, 1861"
  },
  {
    id: 199,
    category: "Recitation",
    front: "Anong lungsod ang itinuturing ni Rizal na 'patay na lungsod'?",
    back: "Macau"
  },
  {
    id: 200,
    category: "Recitation",
    front: "Ano ang tawag sa dulaan o dramang Hapon?",
    back: "Kabuki"
  },
  {
    id: 201,
    category: "Recitation",
    front: "Anong barko ang sinasakyan ni Rizal papuntang Singapore (1882)?",
    back: "Bapor Salvadora"
  },
  {
    id: 202,
    category: "Recitation",
    front: "Anong barko ang sinasakyan ni Rizal papuntang Hong Kong?",
    back: "Bapor Zafiro"
  },
  {
    id: 203,
    category: "Recitation",
    front: "Sino ang American commissioner sa pagpili ng bayani?",
    back: "William Howard Taft"
  },
  {
    id: 204,
    category: "Recitation",
    front: "Sino ang nagpasok ng Batas Rizal sa Kongreso?",
    back: "Jose P. Laurel Sr. (1956)"
  },
  {
    id: 205,
    category: "Recitation",
    front: "Sino ang tiyo ni Rizal na nagturo ng sining?",
    back: "Jose Alberto (Tiyo Jose Alberto)"
  },
  {
    id: 206,
    category: "Recitation",
    front: "Sino ang dalaga sa tula 'A la Señorita C. O. y R.'?",
    back: "Consuelo Ortiga y Rey"
  },
  {
    id: 207,
    category: "Recitation",
    front: "Sino ang pamangkin ni Padre Burgos na tumulong kay Rizal?",
    back: "Dr. Manuel Xerez Burgos"
  },
  {
    id: 208,
    category: "Recitation",
    front: "Ano ang unang pighati ni Rizal?",
    back: "Kamatayan ni Concepcion (Concha, 1865)"
  },
  {
    id: 209,
    category: "Recitation",
    front: "Sino ang 'Binibining L' sa buhay ni Rizal?",
    back: "Jacinta Ibardo Laza"
  },
  {
    id: 210,
    category: "Recitation",
    front: "Ano ang tawag sa pinakamahusay na mag-aaral sa Ateneo?",
    back: "Emperador"
  },
  {
    id: 211,
    category: "Recitation",
    front: "Sino ang paring nagbinyag kay Rizal?",
    back: "Padre Rufino Collantes"
  },
  {
    id: 212,
    category: "Recitation",
    front: "Ano ang kahulugan ng 'Rizal'?",
    back: "Green field / Pasture / Verdeng parang taniman"
  },
  {
    id: 213,
    category: "Recitation",
    front: "Ano ang ibig sabihin ng 'san' sa Hapon?",
    back: "Binibini o Ginoo (Mr./Ms.)"
  },
  {
    id: 214,
    category: "Recitation",
    front: "Sino ang 'Julia' sa buhay ni Rizal?",
    back: "Itinuturing na 'Mina' sa buhay ni Rizal"
  },
  {
    id: 215,
    category: "Recitation",
    front: "Sino ang dakilang pag-ibig ni Rizal?",
    back: "Leonor Rivera"
  },
  {
    id: 216,
    category: "Recitation",
    front: "Saan nanggaling ang apelyidong 'Realonda'?",
    back: "Ninang ng nanay ni Rizal (Teodora Alonso)"
  },
  {
    id: 217,
    category: "Recitation",
    front: "Ano ang tunay na apelyido ng mag-anak na Rizal?",
    back: "Mercado"
  },
  {
    id: 218,
    category: "Recitation",
    front: "Sino si Paciano Rizal?",
    back: "Mas matandang kapatid ni Rizal; giya at tagasuporta ng edukasyon"
  },
  {
    id: 219,
    category: "Recitation",
    front: "Anong tula ang nagbibigay dangal sa Calamba?",
    back: "Un Recuerdo a Mi Pueblo (Alaala sa Aking Bayan)"
  },
  {
    id: 220,
    category: "Recitation",
    front: "Ano ang tawag sa murang manggagawang Tsino?",
    back: "Coolie"
  },
  {
    id: 221,
    category: "Recitation",
    front: "Ano ang pinakamahabang kainan sa mundo?",
    back: "Lauriat (tradisyunal na salu-salong Tsino)"
  },
  {
    id: 222,
    category: "Recitation",
    front: "Saan nagpakadalubhasa si Rizal ng wikang Kastila?",
    back: "Santa Isabel College"
  },
  {
    id: 223,
    category: "Recitation",
    front: "Anong sagisag ang ginamit ni Marcelo H. del Pilar?",
    back: "Dolores Manapat (sa 'Caiingat Cayo')"
  },
  {
    id: 224,
    category: "Recitation",
    front: "Anong bansa ang itinuturing na 'bansang malaya'?",
    back: "Estados Unidos (USA) — ngunit 'para lamang sa mga Puti'"
  },
  {
    id: 225,
    category: "Recitation",
    front: "Sino ang may-akda ng 'Sucesos de las Islas Filipinas'?",
    back: "Antonio de Morga (inianotasyon ni Rizal)"
  }

];
