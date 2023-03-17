// Get The URL
const site = window.location.hostname

// alert(site)

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

// The Blacklist Or The Whitelist
const site_list = [
    
    'https://www.freepornvideo.sex/', 
    'https://www.18porn.sex/', 
    'https://xhamster.com/',
    'https://www.pornhat.one/',
    'https://www.xvideos.com/tags/porn-video/', 
    'https://vracetbocaux.fr/search/hindi+bf+video', 
    'https://www.hdtube.porn/',
    'https://www.xvideos2.com/tags/porn-video/1', 
    'https://www.hdhindisex.com/video/1739/baksish-flizmovies-indian-bgrade-porn-video/', 
    'https://www.xnxx115.com/search/free+porn+video', 
    'https://www.sexvid.pro/', 
    'https://dholera99.in/prof-video-click/model/billo_gulnaz/68525975/young_indian_milf_fucked_in_ass_in_hindi',
    'https://wodzak.pl/search/sex+video', 
    'https://desiporn.tube/video/141141/first-on-net-shahad-part-2-episode-3/', 
    'https://www.pornfuck.net/video/297/indian-girl-first-time-porn-video/', 
    'https://www.eporner.com/cat/4k-porn/', 
    'https://new-porn.video/category/india/',
    'https://www.xnxx.com/search/porn-video',
    'https://xhamster.desi/newest', 
    'https://www.teenpornvideo.me/', 
    'https://www.pornbfvideo.com/video/porn-free-video/',
    'https://hot-sex-tube.com/categories/story/1.html',
    'https://www.machotube.tv/', 
    'https://bengali.parafiadebe.pl/video-p461j6c/indian_kaamwali_in_khett', 
    'https://ok.xxx/models/alyx-star/', 
    'https://hotporntube.co/', 
    'https://www.pornhub.com/video?c=27',
    'https://pornvideo.rodeo/en/',
    'https://www.cartoonpornvideos.com/', 
    'https://xhamster2.com/2',
    'https://www.teenpornvideo.sex/', 
    'https://mfnofficial.it/prof-video-click/model/blair-williams/31063691/blair_williams_and_mick_blue', 
    'https://hdpornmax.com/en/c/indian/', 
    'http://www.bigporn.com/', 'https://www.boyfriendtv.com/',
    'https://www.apornvideo.com/video/2260/free-porn-and-videos/', 
    'https://bigfuck.tv/',
    'https://shooshtime.com/tags/gacha/', 
    'https://www.hothindisex.com/porn/www-porn-video-hindi/',
    'https://tubsexer.com/videos/3153971/awesome-sex-play-eporner/',
    'https://mat6tube.com/video/new+sex+videos', 
    'https://pornaddiction.com/best-porn-addiction-video/',
    'https://www.pornhills.com/', 'https://www.porn.biz/', 
    'https://www.xxxpornvideos.su/',
    'https://hotxv.com/tags/hindi/3',
    'https://pornhits.com/videos.php?p=1&s=l&csg=naughty-america',
    'https://it.youporn.com/',
    'https://www.youjizz.com/top-rated-week/2.html', 
    'https://hqpornvideos.xxx/c/pornstars/'
     'https://wodzak.pl/search/sex+video', 
    'https://www.xnxx115.com/search/sex+video',
    'https://www.qorno.com/', 
    'https://ijavhd.com/xxx/www-sex-videos-in/', 
    'https://www.sexindrag.com/video/how-to-do-sex-video/',
    'https://www.sexindrag.com/video/how-to-have-sex-video/',
    'https://vracetbocaux.fr/search/new+sex+video',
    'https://www.freepornvideo.sex/',
    'https://xhamster.com/tags/sex/full', 
    'https://xhamster.desi/',
    'https://www.xxxhdvideo.mobi/sex/ramya-sex-v/',
    'https://gekso.xyz/video/sex-video',
    'https://www.youtube.com/watch?v=ZzUbAv_Sh0c',
    'https://sexvideoshot.com/all/1', 
    'https://videoxxx.sex/',
    'https://www.xnxx.com/search/www+sex+video+com/', 
    'https://www.xvideos2.com/video22488481/legal_age_teenager_sex_hd_videos',
    'https://www.mirror.co.uk/3am/celebrity-news/georgia-harrisons-stephen-bear-sex-29467081',
    'https://www.hdhindisex.com/video/3939/indian-sex-video-of-young-wife-with-ex-lover/',
    'https://www.pornfuck.net/video/62/sex-video-full-hd-free/', 
    'https://dehati.nijagunaresorts.co.in/video-bj0kpe2/desi_bhabhi_super_sex_romance_xxx_video_indian_latest_actress',
    'https://hot-sex-tube.com/categories/18-19_year_old/1.html', 'https://ok.xxx/models/eliza-ibarra/', 
    
    'https://desiporn.tube/video/141141/first-on-net-shahad-part-2-episode-3/', 
    'https://www.rat.xxx/videos/9930/angela-s-sex-auction/', 
    'https://tubsexer.com/videos/2611911/indian-cuckold-couple-hire-gigolo-to-fuck-wife-xxx-indian-sex-video-hd/', 'https://www.xvideos.com/tags/sex-videos', 'https://red-tube.video/', 'https://www.sopornvideos.com/japanese/', 'https://www.bbc.com/news/uk-england-essex-64836055', 'https://www.xnxx3.com/search/sex-video', 'https://xxxvideo.best/en/xxx-search/local%20kannada%20sex%20videos/', 'https://pornkai.com/videos?q=old-man-sex-videos', 'https://www.pornhub.com/video/search?search=pinay+sex', 'https://en.hdsex.tv/search/?text=Full%20sex%20video%20free%20download', 'https://xxx-sex.fun/en/sex-searches/tamil%20sex%20video%20com/', 'https://www.pussyboy.net/video/7077/real-homemade-hardcore-sex-video/', 'https://hotxv.com/tags/hindi', 'https://iseeindia.org.in/search/indian+sex+video', 'https://www.onlydesiporn.com/video/189/%E0%B0%B8-%E0%B0%AA%E0%B0%B0-%E0%B0%AA-%E0%B0%B0-%E0%B0%9F-%E0%B0%B8-%E0%B0%85%E0%B0%AE-%E0%B0%AE-%E0%B0%AF-%E0%B0%AC-%E0%B0%AF-%E0%B0%AB-%E0%B0%B0-%E0%B0%A1-%E0%B0%95-%E0%B0%B8-%E0%B0%B8-%E0%B0%B2-%E0%B0%AB-%E0%B0%B5-%E0%B0%A1-%E0%B0%AF-telugu-sex-videos-%E0%B0%A4-%E0%B0%B2-%E0%B0%97-%E0%B0%B8-%E0%B0%95-%E0%B0%B8-%E0%B0%B5-%E0%B0%A1-%E0%B0%AF-%E0%B0%B8/', 'https://www.hindibfvideo.com/tag/dehati-sex-video/', 'https://www.hothindisex.com/video/3950/indian-latest-hd-sex-indian-stepbrother-stepsister-video-hindi/', 'https://kantotin.com/pinay-sex-video/', 'https://www.xnxx.xxx/video-14m0zte5/in_this_video_see_porn_videos_sex_video_home_sex_couple_sex_step_cousin_step_brother_and_step_sister_sex_teen_girl_sex_babe_girl_sex_college_girl_fuck_hot_sexy_girl_fucking_tight_pussy_fucks_blowjob_anal_sex_fucking_step_sister_and_step_brother_bi', 'https://iseeindia.org.in/search/indian+sex+video', 'https://www.onlydesiporn.com/video/189/%E0%B0%B8-%E0%B0%AA%E0%B0%B0-%E0%B0%AA-%E0%B0%B0-%E0%B0%9F-%E0%B0%B8-%E0%B0%85%E0%B0%AE-%E0%B0%AE-%E0%B0%AF-%E0%B0%AC-%E0%B0%AF-%E0%B0%AB-%E0%B0%B0-%E0%B0%A1-%E0%B0%95-%E0%B0%B8-%E0%B0%B8-%E0%B0%B2-%E0%B0%AB-%E0%B0%B5-%E0%B0%A1-%E0%B0%AF-telugu-sex-videos-%E0%B0%A4-%E0%B0%B2-%E0%B0%97-%E0%B0%B8-%E0%B0%95-%E0%B0%B8-%E0%B0%B5-%E0%B0%A1-%E0%B0%AF-%E0%B0%B8/', 'https://www.hindibfvideo.com/tag/dehati-sex-video/', 'https://www.hothindisex.com/video/3950/indian-latest-hd-sex-indian-stepbrother-stepsister-video-hindi/', 'https://kantotin.com/pinay-sex-video/', 'https://www.xxxdesichudai.com/video/sex-videos/', 'https://www.xnxx.xxx/video-14m0zte5/in_this_video_see_porn_videos_sex_video_home_sex_couple_sex_step_cousin_step_brother_and_step_sister_sex_teen_girl_sex_babe_girl_sex_college_girl_fuck_hot_sexy_girl_fucking_tight_pussy_fucks_blowjob_anal_sex_fucking_step_sister_and_step_brother_bi',
    'https://goout.net/en/xxx+rachotu/szqwanr/', 'https://xxxwow.net/hi/sex/xxx-18-bokeb/', 'https://gaana.com/song/soul-kiss-xxx', 'https://open.spotify.com/track/5jZ2ZnYdn080vKixW9foBh', 'https://soundcloud.com/erebunixxx/xxx1', 'https://www.gran-turismo.com/sg/gtsport/user/profile/5735924/gallery/all/livery/5735924/2/5990077846961291800', 'https://xxf.mobi/free/sexx-age-of-groups-xxx/', 'https://www.youtube.com/watch?v=LV2tR_zhWTk', 'https://opendevelopmentmekong.net/en/news/southeast-asian-countries-growth-to-accelerate-commodities-rebound/coalxxx/', 'http://kenfandell.com/pages/xxx/xxx.html', 'https://www.instagram.com/p/BoXUisGjkNq/', 'https://www.findchips.com/detail/EM6682SO8A-XXX%2B', 'https://github.com/alphapapa/magit-todos/issues/101', 'https://www.mouser.com/datasheet/2/40/9090-1074615.pdf', 'https://chartink.com/screener/30-min-xxx', 'https://es.aliexpress.com/store/feedback-score/5969002.html', 'https://www.facebook.com/people/Koavb18xxx/100079781169527/', 'https://twitter.com/mademehighhh?lang=en', 'https://www.jstor.org/stable/23965662', 'https://www.alldatasheet.com/datasheet-pdf/pdf/348392/MAXIM/MAX31C80T-xxx+.html', 'https://www.gettertools.com/ts6.travian.co.uk/Alliance/1813-%2BXXX%2B', 'https://www.flickr.com/photos/130479956@N04/33941708888', 'https://www.shazam.com/track/529670322/xxx', 'https://www.indianpornvideos.org/porn/hollwood-movies-xxx/', 'https://www.protenders.com/products/clean-agent-system-sf-240-xxx', 'https://www.pornjk.com/video/913287/kerry-xxx-film-series-louise-deepthroats-and-fucks-bbc-gloryhole', 'https://www.ebay.com/itm/284868385992?_ul=IN', 'https://xgx.mobi/free/arab-hd-xxx-com/', 'https://www.last.fm/event/4588958+Rachot:+XXX%252B++(10-11+September,+2021)/attendance/going', 'https://music.apple.com/us/song/1536309289', 'https://www.alibaba.com/product-detail/integrated-circuit-BOM-stock-original-Free_1600365476744.html', 'https://www.deezer.com/us/track/976207102', 'https://xvideos.online/videos/xxx-com-2/', 'https://ijavhd.com/mg/xxx/www-xnxx-com-search-romanxxxgirlsschoolvirgin/', 'https://mojim.com/the+xxx+.html?u4', 'https://www.gynocams.tv/nagnveediyo/xxx+_com/prshth4.html', 'http://te.cartondigitalprinter.com/wd200-xxx-industry-single-pass-middle-speed-digital-printing-machine-with-water-based-ink-fit-small-and-big-quality-orders-product/', 'https://hi.tuberon.space/tube-ronvideo/xxx+-bhojpurisong-video', 'https://www.tiktok.com/music/Xxx-6847596192763742209?lang=en', 'https://www.pioneermathematics.com/using-xa-xbxxxab-x-ab-find-51x52-386-question.html', 'https://music.apple.com/us/song/1536309289', 'https://www.alibaba.com/product-detail/integrated-circuit-BOM-stock-original-Free_1600365476744.html', 'https://www.deezer.com/us/track/976207102', 'https://xvideos.online/videos/xxx-com-2/', 'https://ijavhd.com/mg/xxx/www-xnxx-com-search-romanxxxgirlsschoolvirgin/', 'https://mojim.com/the+xxx+.html?u4', 'https://www.gynocams.tv/nagnveediyo/xxx+_com/prshth4.html', 'http://te.cartondigitalprinter.com/wd200-xxx-industry-single-pass-middle-speed-digital-printing-machine-with-water-based-ink-fit-small-and-big-quality-orders-product/', 'https://hi.tuberon.space/tube-ronvideo/xxx+-bhojpurisong-video', 'https://www.tiktok.com/music/Xxx-6847596192763742209?lang=en',
   
    "https://pharmaciesamaille.fr/video-yq8q74a/xxx_xxx_hindi",
     "https://xxxpornhd.pro/", "https://conxxx.pro/",
     
     "https://www.xnxx115.com/search/www+xxx+com/1",
       "https://ok.xxx/", 
      "https://www.imdb.com/title/tt1293847/", 
      "https://www.sexvid.pro/",
       "https://xxxvideo.best/en/",
       "https://lehublotdanslacuisine.fr/video-wv8e9a7/xxx_indian_step_brother_and_sister_fuck_in_hindi", 
      "https://lebzoo.ch/video-etfula4/bangla_movie_hot_zabardasti_scene_nude",
       "https://en.wikipedia.org/wiki/.xxx", 
      "https://ok-bud.com.pl/video-18ba0pf0/indian_everbest_step_mom_and_son_hard_xxx_fuck", "https://www.hdhindisex.com/porn/xxx-video-watch/", "https://cooltronics.co.in/video-z59s3ad/best_xxx_village_bhabhi_hard_piss", "https://www.pussyboy.net/porn/www-xxx-com/", "https://ijavhd.com/xxx/www-xxx-videos-in/", "https://sexhdxxx.com/", "https://www.youtube.com/watch?v=MQEFmHsseaU", "https://voorlichtingvokampen.nl/video-v1lr5ab/_", "https://pornozavr.net/xxx-vidio-birther-and-sister-jins-tisrat.html", "https://www.primevideo.com/detail/xXx-Return-of-Xander-Cage/0KZWWGHS7O7AC7K1SH2OX2AS9F", "https://www.rottentomatoes.com/m/xxx", "https://tubsexer.com/videos/1922561/guy-white-hd-xxx-my-peeping-duddy-s-step-son/", "https://www.flipkart.com/vibex-xxx-1007-long-lasting-coconut-shell-coal-72-charcoal-cubes-hookah-charcoals/p/itm7433e6d07171b", "http://www.xxxbule.com/", "https://xxvideos.cc/", "https://www.hothindisex.com/porn/xxx-and-hindi/", "https://schakelonderdelen.nl/video-10emyl12/xxx_xxx_xxx", "https://www.xvideos.com/tags/xxx-videos", "https://indiankanoon.org/doc/83278472/", "https://cecotec.in/video-130f6767/_xxx_", "https://familiaventura.pl/video-16ojeo0d/rakshabandhan_2022_indian_xxx_didi_asked_for_a_big_cock_for_her_pussy_as_a_gift_from_her", "https://www.pornbfvideo.com/video/xxx-a-hot/", "https://www.xnxx.com/search/xxx", "https://www.pornfuck.net/video/1100/xxx-video-google-com/", "https://www.xxx.com/", "https://newsexxxx.com/", "https://goodporn.to/videos/57564/mom-xxx-milf-birthday-surprise-for-husband-03-07-2023/", "https://www.sexybluefilm.com/video/1332/inexperienced-indian-mylf-gets-some-sex-counseling-xxx/", "https://xxxvideo.world/", "https://www.tvguide.com/movies/xxx-return-of-xander-cage/cast/2030207543/", "https://www.amazon.com.be/-/en/Books-XXX/s?rh=n%3A27156140031%2Cp_27%3AXXX", "https://dewafilm.xyz/video/xxx-video", "https://hdpornfree.xxx/en/", "https://abto.in/video-15yvyd92/desi_village_bengali_wife_sex_in_hushband", "https://xxxmoviesdownloads.com/", "https://www.amazon.com.be/-/en/Books-XXX/s?rh=n%3A27156140031%2Cp_27%3AXXX", "https://dewafilm.xyz/video/xxx-video", "https://hdpornfree.xxx/en/", "https://abto.in/video-15yvyd92/desi_village_bengali_wife_sex_in_hushband", "https://xxxmoviesdownloads.com/",
    'https://www.xnxx115.com/search/panu', 'https://www.xxxhdvideo.mobi/sex/panu-sex-videos/', 'https://www.xxxhdvideo.mobi/sex/sex-panu/', 'https://www.pornfuck.net/bindi/sex-panu/', 'https://www.pornfuck.net/bindi/panu-sex/', 'https://www.sexvid.pro/s/date/hot+panu/17/', 'https://www.apornvideo.com/porn/panu-sex/', 'https://www.fulldesisex.com/xxx/panu-sex/', 'https://www.pakistanipornx.com/porn/panu_sex.html', 'https://xxxwow.net/sex/panu-sex-videos/', 'https://xhamster2.com/search/tapasee+panu+sex', 'https://ijavhd.com/xxx/bengali-panu-video/', 'https://kompoz2.com/find/x-sex-panu/', 'https://www.xxxdesichudai.com/video/panu-video-sex-games-with-teen-blonde/', 'https://indiansexbar.mobi/view-OwHs-bangla-panu-sex-video-shared-on-the-net/', 'https://www.onlydesiporn.com/porn/desi-sex-panu/', 'https://hdsex.pro/s/hindi-panu-com-1.html', 'https://www.hindipornvid.com/label/panu-sex-video/', 'https://gekso.xyz/video/hindi-panu', 'https://www.negozioporno.com/db/xxx_panu_local_video.html', 'https://onlinelibrary.wiley.com/doi/full/10.1111/mec.15390', 'https://rolotube.com/trends/english-panu-video/1/', 'http://www.pussyboy.net/porn/best-sex-panu-video/', 'https://www.xnxx.tv/search/south+indian+panu+video/1/', 'https://rajwap.biz/porn/old-man-panu/?orderBy=rate', 'https://www.pornjk.com/tags/indian-giys-hpmo-sex-panu-download/', 'https://www.bestsexporno.com/top-india-local-panu-video.html', 'http://www.desixxxsex.com/bn/search/sex%20panu%20video/', 'https://www.pornhindisex.com/porn/sex-panu/', 'https://redwap-xxx.com/video/indian-panu/', 'https://youjizz.sex/muslim-panu-video.html', 'https://pornma.com/to/india-panu-xxx/1/', 'http://www.xvideos2.com/?k=free+vidio+sex+best+hindi+panu', 'https://dirtyindianporn.info/tube/xxx-panu-sex-video/', 'https://hotindianporn.mobi/xxx/my-desi-panu-sex/', 'http://www.hindipornvideo.net/hindi/sex-panu/', 'https://www.hdvideosporn.com/tag/fuck-sex-panu-2020/', 'https://www.sexybluefilm.com/porn/panu-2x/', 'https://www.xnxx.xxx/search/desi%20panu%20xxx%20indian', 'https://liebelib.net/rap-sex-panu.html', 'https://thestartrial.com/taapsee-pannu-nude/', 'https://www.rat.xxx/search/panu+xxx+sexy+hot+video/', 'https://www.banglachotikahinii.com/', 'https://xxxsexzoo.com/newest/2/', 'https://www.borwap.pro/sunny-leone-sex-video-panu.html', 'https://www.xnxx.com/search/bd%20panu', 'https://rajwap.tv/trends/panu-sex-video/?p=12', 'https://hindihdporn.com/movs/bangla-panu-sex/', 'https://hindihdporn.com/movs/bengali-new-hd-panu-video/', 'https://www.boy18tube.com/search/full', 'https://iporntv.net/pornos/desi-panu', 'https://www.sexpicturespass.com/xxx/xxx-panu-videos.html'
    
]

/*
Check Current Site With The Sites In The List

*/

if (site_list.includes(site)) {

    // window.location.replace("chrome://dino/")

    // Remove All Lines From HTML Tag
    document.querySelector("html").innerHTML = ""
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Aboreto");

        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

        * {
            user-select: none !important;
            pointer-events: none !important;
        }

        html {
            background-image: linear-gradient(to left, #ff0000 10%, #002661 100%) !important;
        }

        #access-denied {
            font-family: "Aboreto";
            display: block !important;
            color: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            font-weight: bold;
            z-index: 999999999999;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    Create_Custom_Element(
        "div",
        "id",
        "access-denied",
        `<i class="bi bi-exclamation-circle"></i> Access Denied`
    )
}
