// Mwongozo wa slides 10 kwa kila category. Majina ya category lazima yalingane na ZUNE_CONFIG.categories.
export const GUIDE_KICKERS = [
  "Utangulizi", "Inajumuisha nini", "Jinsi ya kuchagua", "Ubora wa kukagua", "Bei na thamani",
  "Tahadhari", "Matumizi na utunzaji", "Dhamana na kurudisha", "Vidokezo kwa wauzaji", "Ununuzi salama ZUNE"
];

// Kila slide ni [kichwa, maelezo]. Mpangilio wa slides unalingana na GUIDE_KICKERS.
export const CATEGORY_GUIDES = {
  "Simu na Accessories": [
    ["Dunia ya mawasiliano", "Kundi hili lina simu janja, simu za kawaida na vifaa vinavyoendana nazo. Ni kundi linalouzwa sana kwa sababu karibu kila mtu anahitaji simu."],
    ["Simu, chaja, kava na zaidi", "Utapata simu mpya na zilizotumika, chaja, nyaya, earphones, power bank, kava, kioo cha kulinda skrini na memory card."],
    ["Anza na matumizi yako", "Jiulize utatumia simu kwa picha, michezo au mitandao tu. Linganisha RAM, nafasi ya kuhifadhi, kamera na betri, si jina la brand pekee."],
    ["Kagua simu iliyotumika", "Angalia skrini, kamera, spika, maikrofoni, kuchaji na afya ya betri. Piga *#06# kuona IMEI na ilinganishe na ile iliyo kwenye boksi au simu."],
    ["Linganisha bei", "Linganisha bei ya modeli ileile kwa wauzaji kadhaa. Bei ya chini sana kuliko soko mara nyingi huashiria simu bandia, iliyoibiwa au yenye kasoro."],
    ["Epuka hatari", "Usinunue simu isiyo na IMEI halali au yenye madai yasiyothibitishwa. Chaja na betri feki zinaweza kuharibu simu au kusababisha moto."],
    ["Tunza simu yako", "Tumia chaja asili au zilizothibitishwa, usiache simu kwenye joto kali na washa masasisho ya mfumo kwa ajili ya usalama."],
    ["Dhamana kwanza", "Uliza dhamana ni ya muda gani, nani anaitoa na masharti yake. Hifadhi boksi na risiti kwa siku za mwanzo."],
    ["Kwa wauzaji", "Weka picha halisi za pande zote, taja modeli kamili, RAM na storage, hali ya simu na dhamana. Maelezo sahihi hupunguza malalamiko."],
    ["Nunua kwa uhakika", "Wasiliana na muuzaji kupitia Messages, uliza video fupi ya simu ikiwaka na kubaliana wazi bei, utoaji na malipo kabla ya kupokea."]
  ],
  "Electronics": [
    ["Vifaa vya kielektroniki", "Kundi hili lina vifaa vya umeme na vya kidijitali vya nyumbani na kazini, kama kompyuta, TV, spika, saa janja na vifaa vya mtandao."],
    ["Utapata nini", "Laptop, TV, headphones, spika za Bluetooth, saa janja, kamera, router, printa na vifaa vya kuchaji."],
    ["Eleza kazi kwanza", "Amua kama ni kwa ofisi, masomo, burudani au biashara. Kisha linganisha processor, RAM, ukubwa wa skrini na betri na bajeti yako."],
    ["Kagua kabla ya kupokea", "Hakikisha kinawaka vizuri, hakina michubuko mikubwa na vifaa vyote vya boksi vipo. Vifaa vya ukutani viendane na umeme wa 230V."],
    ["Gharama kamili", "Gharama halisi ni bei pamoja na matumizi ya umeme, vifaa vya ziada na matengenezo. Bidhaa ya bei nafuu sana inaweza kugharimu zaidi baadaye."],
    ["Jihadhari na feki", "Epuka chapa feki na picha zisizo za bidhaa halisi. Usikubali bidhaa iliyokarabatiwa bila kuambiwa wazi na kupewa dhamana."],
    ["Utunzaji", "Weka vifaa mbali na unyevu na vumbi, tumia kinga ya umeme (surge protector) na usichaji kwa chaja isiyoendana."],
    ["Dhamana iandikwe", "Omba dhamana iandikwe: muda, nani anarekebisha na kama inahusu betri. Jaribu kifaa mara tu unapokipokea ili kasoro zijulikane mapema."],
    ["Kwa wauzaji", "Orodhesha modeli, vipimo, hali, vifaa vilivyomo na dhamana. Picha ya namba ya serial na boksi huongeza imani ya wateja."],
    ["Nunua kwa uhakika", "Uliza video ya kifaa kikifanya kazi, thibitisha kilichomo kwenye boksi na andika makubaliano ya bei na utoaji kwenye Messages."]
  ],
  "Fashion": [
    ["Mtindo na mavazi", "Fashion ni mavazi, viatu, mikoba na vito vinavyoonyesha mtindo wako. Hapa kuna mitindo ya kila siku, kazini, sherehe na michezo."],
    ["Kinachopatikana", "Nguo za wanawake, wanaume na watoto, viatu, mikoba, mikanda, saa, miwani na vito."],
    ["Chagua kwa tukio", "Chagua kulingana na tukio, hali ya hewa na rangi unazovaa mara nyingi. Nguo chache zinazoendana ni bora kuliko nyingi zisizovaliwa."],
    ["Kagua ubora", "Angalia kitambaa, mishono, zipu, vifungo na kama rangi inafifia. Kwa viatu kagua soli, gundi na ndani ya kiatu."],
    ["Bei dhidi ya ubora", "Nguo imara ya bei ya kati mara nyingi huokoa zaidi kuliko ya bei rahisi inayoharibika haraka."],
    ["Ukubwa na feki", "Ukubwa hutofautiana kati ya wauzaji. Uliza vipimo kwa sentimita na usitegemee S, M, L pekee. Jihadhari na bidhaa feki za chapa maarufu."],
    ["Utunzaji wa nguo", "Soma maelekezo ya kufua, tenganisha nguo za rangi tofauti, anika kivulini na hifadhi viatu mahali pakavu."],
    ["Kubadilisha ukubwa", "Kubaliana kabla kuhusu kubadilisha au kurudisha. Bidhaa zilizovaliwa au kufuliwa mara nyingi hazikubaliwi kurudishwa."],
    ["Kwa wauzaji", "Piga picha kwenye mwanga mzuri, onyesha mbele, nyuma na lebo, weka jedwali la vipimo na taja aina ya kitambaa."],
    ["Nunua kwa uhakika", "Omba picha au video halisi na vipimo kupitia Messages, na thibitisha ukubwa kabla ya kukubali oda."]
  ],
  "Nyumbani": [
    ["Mahitaji ya nyumbani", "Kundi hili lina vitu vinavyofanya nyumba iwe safi, salama na ya starehe: vyombo, mapambo, vifaa vya usafi na vya jikoni."],
    ["Kinachopatikana", "Vyombo vya jikoni, sufuria, vifaa vya usafi, matandiko, mapazia, taa, mapambo na vifaa vidogo vya umeme."],
    ["Pima kabla ya kununua", "Pima nafasi na zingatia idadi ya watumiaji. Chagua vitu vya matumizi ya kila siku kabla ya mapambo."],
    ["Kagua nyenzo", "Kwa vyombo vya jikoni angalia nyenzo na unene, kama chuma kisichoshika kutu au plastiki salama kwa chakula. Vifaa vya umeme viwe na plagi inayofaa."],
    ["Thamani ya seti", "Nunua seti pale inapopunguza gharama, lakini hakikisha unahitaji kila kipande. Linganisha bei kwa kipande."],
    ["Usalama", "Epuka plastiki zisizo na alama ya usalama wa chakula na vifaa vya umeme visivyo na maelekezo. Usiache vifaa vya joto vimewaka bila uangalizi."],
    ["Tunza vyombo", "Safisha kwa kufuata nyenzo, kausha vizuri kuzuia kutu na ukungu, na hifadhi vitu dhaifu kwa ulinzi."],
    ["Vitu vinavyovunjika", "Vitu vya kioo na kauri vinahitaji ufungashaji mzuri. Kubaliana mapema nani anabeba hasara kama vitavunjika njiani."],
    ["Kwa wauzaji", "Taja vipimo, nyenzo, rangi na idadi ya vipande. Picha ya kitu kando ya kitu kinachojulikana inaonyesha ukubwa halisi."],
    ["Nunua kwa uhakika", "Thibitisha vipimo na hali ya bidhaa kupitia Messages, na ikiwezekana kagua bidhaa wakati wa kuipokea."]
  ],
  "Beauty": [
    ["Urembo na utunzaji", "Beauty ni bidhaa za ngozi, nywele, kucha na harufu. Usalama wa bidhaa ni muhimu kuliko mwonekano wake."],
    ["Kinachopatikana", "Skincare, makeup, bidhaa za nywele, manukato, vifaa vya kucha na vifaa vya kujipamba."],
    ["Jua ngozi yako", "Jua aina ya ngozi yako: kavu, yenye mafuta, mchanganyiko au nyeti. Anza na bidhaa chache rahisi badala ya nyingi kwa mara moja."],
    ["Kagua kifungashio", "Angalia tarehe ya kuisha muda, muhuri, orodha ya viambato na usajili wa bidhaa. Harufu au rangi isiyo ya kawaida ni ishara mbaya."],
    ["Bei na ukubwa", "Bei ya juu haimaanishi bora kila mara, lakini bei ya chini sana kwa chapa kubwa mara nyingi ni feki. Linganisha kiasi kwa bei."],
    ["Viambato hatari", "Epuka bidhaa za kubadilisha ngozi zenye viambato hatari kama zebaki na zisizo na orodha ya viambato. Jaribu kiasi kidogo kwenye ngozi kwanza."],
    ["Hifadhi vizuri", "Hifadhi mbali na jua na joto, funga kifuniko vizuri na usishiriki brashi au vifaa vinavyogusa ngozi ili kuepuka maambukizi."],
    ["Sera ya kurudisha", "Bidhaa za urembo zilizofunguliwa mara nyingi hazirudishwi kwa sababu za usafi. Uliza sera kabla ya kununua."],
    ["Kwa wauzaji", "Onyesha tarehe za kuisha, ukubwa, viambato na maelekezo ya matumizi. Usitoe ahadi za matibabu zisizo na uthibitisho."],
    ["Nunua kwa uhakika", "Uliza picha ya kifungashio na tarehe ya mwisho kupitia Messages. Ukipata muwasho, acha kutumia na muone mtaalamu wa afya."]
  ],
  "Furniture": [
    ["Samani za nyumbani na ofisini", "Furniture ni vitu vikubwa vya kukaa, kulalia, kuhifadhia na kufanyia kazi. Hununuliwa mara chache, kwa hiyo ubora ni muhimu."],
    ["Kinachopatikana", "Makochi, viti, meza, vitanda, kabati, rafu, meza za ofisi na samani za nje."],
    ["Pima kwanza", "Pima chumba, mlango na ngazi kabla ya kununua ili samani iingie. Chagua mtindo unaoendana na matumizi na idadi ya watu."],
    ["Kagua uimara", "Angalia aina ya mbao au chuma, viungio, rangi na uthabiti. Tikisa samani kuona kama inayumba. Kwa makochi angalia sponji na kitambaa."],
    ["Imara ni nafuu", "Samani imara ya bei ya kati hudumu kuliko ya bei rahisi. Uliza kama bei inajumuisha usafirishaji na ufungaji."],
    ["Tahadhari", "Mbao zenye unyevu hupinda na kuoza; epuka samani zenye harufu ya ukungu au dalili za wadudu. Hakikisha picha ndiyo bidhaa utakayopokea."],
    ["Utunzaji", "Futa kwa kitambaa chenye unyevu kidogo, epuka maji mengi kwenye mbao na weka mbali na jua kali na unyevu."],
    ["Usafirishaji", "Kubaliana kuhusu usafirishaji, ufungaji na uharibifu njiani kabla ya malipo, kwani samani ni nzito na kurudisha kuna gharama."],
    ["Kwa wauzaji", "Weka vipimo kamili (urefu, upana, kimo), aina ya nyenzo, rangi na muda wa kuandaa kama inatengenezwa kwa oda."],
    ["Nunua kwa uhakika", "Uliza picha au video ya samani halisi na vipimo kupitia Messages, na uikague kabla ya kukubali kupokea."]
  ],
  "Magari": [
    ["Magari na usafiri", "Kundi hili ni la magari, pikipiki na vipuri. Ni maamuzi makubwa ya kifedha, hivyo yanahitaji umakini zaidi kuliko bidhaa nyingine."],
    ["Kinachopatikana", "Magari, pikipiki, bajaji, vipuri, matairi, betri, vifaa vya ndani ya gari na vifaa vya utunzaji."],
    ["Bajeti kamili", "Amua matumizi (familia, biashara au mizigo). Weka bajeti ya jumla pamoja na kodi, bima, matengenezo na matumizi ya mafuta."],
    ["Kagua gari", "Kagua mwili, rangi, injini, matairi, breki na ndani. Omba kadi ya usajili na ulinganishe namba ya chassis na nyaraka. Mwombe fundi unayemwamini aikague."],
    ["Linganisha bei", "Linganisha na magari ya aina na mwaka huo huo. Zingatia gharama za baadaye: kodi, bima, vipuri na ukarabati."],
    ["Epuka utapeli", "Usilipe kabla ya kuona gari na nyaraka. Jihadhari na bei ya chini sana, madai ya malipo ya awali ya haraka na nyaraka zisizoeleweka."],
    ["Utunzaji", "Fuata ratiba ya huduma, badilisha mafuta na vichujio kwa wakati na angalia shinikizo la matairi mara kwa mara."],
    ["Vipuri sahihi", "Hakikisha kipuri kinaendana na modeli na mwaka wa gari lako. Uliza kama ni asili au mbadala na kama kinarudishwa."],
    ["Kwa wauzaji", "Weka mwaka, kilomita, hali ya injini, historia ya huduma na picha za ndani, nje na injini. Nyaraka wazi huongeza imani."],
    ["Nunua kwa uhakika", "Kutana mahali salama penye watu, kagua gari na nyaraka pamoja na kamilisha uhamisho wa umiliki kwa utaratibu rasmi. Weka makubaliano kwenye Messages."]
  ],
  "Sports": [
    ["Michezo na mazoezi", "Sports ni vifaa na mavazi ya mazoezi, michezo ya timu na shughuli za nje zinazosaidia afya na burudani."],
    ["Kinachopatikana", "Jezi, viatu vya michezo, mipira, vifaa vya gym, baiskeli, vifaa vya kuogelea, yoga na kambi."],
    ["Chagua kwa mchezo", "Chagua kulingana na mchezo, kiwango chako na mahali pa kufanyia. Anza na vifaa vya msingi kabla ya vya gharama kubwa."],
    ["Kagua kifaa", "Kwa viatu angalia ukubwa, ulinzi wa kisigino na soli inayofaa uso wa kuchezea. Kwa vifaa vya uzito angalia uimara wa viungio na uzito ulioandikwa."],
    ["Thamani", "Vifaa vya msingi vya ubora wa kati vinawatosha wanaoanza. Linganisha bei na uimara, si mwonekano tu."],
    ["Usalama", "Vifaa visivyo imara vinaweza kusababisha majeraha. Anza mazoezi taratibu na ufuate maelekezo. Jihadhari na jezi na viatu feki."],
    ["Utunzaji", "Safisha vifaa baada ya matumizi, kausha viatu na jezi vizuri na hifadhi vifaa vya chuma mahali pakavu ili visiote kutu."],
    ["Ukubwa na kubadilisha", "Ukubwa wa viatu na jezi hutofautiana. Uliza vipimo na sera ya kubadilisha kabla ya kununua."],
    ["Kwa wauzaji", "Taja ukubwa, nyenzo na uzito wa juu unaobebwa kwa vifaa vya mazoezi. Onyesha picha za kifaa kikitumika."],
    ["Nunua kwa uhakika", "Uliza vipimo na picha halisi kupitia Messages, na usinunue vifaa vizito bila kujua gharama za kuvifikisha."]
  ],
  "Vyakula": [
    ["Vyakula na vinywaji", "Kundi hili ni la vyakula, viungo na vinywaji. Kwa kuwa ni bidhaa za kuliwa, usalama na usafi huja kwanza."],
    ["Kinachopatikana", "Nafaka, viungo, mafuta, asali, matunda yaliyokaushwa, vitafunwa, vinywaji, chai na kahawa."],
    ["Chagua kwa mahitaji", "Chagua kulingana na mahitaji ya familia, muda wa kuhifadhi na kiasi unachoweza kutumia kabla hakijaharibika."],
    ["Kagua kifungashio", "Angalia tarehe ya kuisha muda, muhuri na kifungashio kisichovuja. Tafuta alama ya ubora kama TBS pale inapohitajika. Epuka bidhaa zisizo na lebo."],
    ["Bei kwa kipimo", "Nunua kwa wingi tu ikiwa bidhaa inahifadhika. Linganisha bei kwa kilo au lita, si kwa pakiti pekee."],
    ["Tahadhari", "Epuka vyakula vyenye harufu au rangi isiyo ya kawaida, vifungashio vilivyofunguliwa au madai ya tiba kupitia chakula. Wenye mzio wasome viambato."],
    ["Hifadhi vizuri", "Hifadhi mahali pakavu na penye ubaridi, funga vizuri baada ya kufungua na tumia kwa mpangilio wa tarehe za kuisha."],
    ["Kagua ukipokea", "Vyakula vingi havirudishwi baada ya kupokewa. Kagua mara moja ukipokea na toa taarifa haraka kama kuna tatizo."],
    ["Kwa wauzaji", "Onyesha tarehe ya kuisha, uzito, jinsi ya kuhifadhi na hali ya usafi. Usiuze bidhaa zilizokwisha muda."],
    ["Nunua kwa uhakika", "Uliza tarehe ya mwisho na picha ya kifungashio kupitia Messages, na kubaliana muda wa kufikishiwa ili chakula kisiharibike."]
  ],
  "Vingine": [
    ["Kila kitu kingine", "Vingine ni kwa bidhaa zisizoingia moja kwa moja kwenye makundi mengine, kama vifaa vya ofisi, vitabu, vya ujenzi, vya watoto na zawadi."],
    ["Kinachopatikana", "Vifaa vya ofisi na shule, vitabu, vifaa vya watoto, zana, vifaa vya kilimo, zawadi na bidhaa maalum."],
    ["Tafuta kwa maneno", "Tumia kisanduku cha kutafuta kwa maneno mahususi. Bidhaa za kundi hili hutofautiana sana, kwa hiyo soma maelezo kwa makini."],
    ["Kagua maelezo", "Hakikisha picha na maelezo vinaendana na uliza maswali kama maelezo hayatoshi. Bidhaa za hatari kama zana ziwe na maelekezo ya matumizi."],
    ["Jua bei ya haki", "Kwa bidhaa isiyo na bei ya soko iliyozoeleka, tafuta mifano ya bidhaa kama hiyo ili ujue bei ya haki kabla ya kukubali."],
    ["Tahadhari", "Jihadhari na bidhaa zisizoeleweka au zenye maelezo machache sana. Usiuze wala kununua vitu vilivyokatazwa na sheria."],
    ["Matumizi salama", "Soma maelekezo ya matumizi, hifadhi vifungashio na maelekezo, na tumia vifaa vya kujikinga unapotumia zana."],
    ["Kubaliana mapema", "Kubaliana kuhusu hali ya bidhaa, kurudisha na kubadilisha, kwa sababu sera hutofautiana kwa kila muuzaji."],
    ["Kwa wauzaji", "Chagua kundi sahihi ikiwezekana, andika kichwa chenye maneno ambayo wateja huyatafuta na weka picha nyingi zenye maelezo ya kina."],
    ["Nunua kwa uhakika", "Tumia Messages kuuliza usichokielewa, na usikubali bidhaa kabla ya kukubaliana wazi kuhusu hali, bei na utoaji."]
  ]
};
