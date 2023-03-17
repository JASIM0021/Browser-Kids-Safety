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
      "https://ok-bud.com.pl/video-18ba0pf0/indian_everbest_step_mom_and_son_hard_xxx_fuck", "https://www.hdhindisex.com/porn/xxx-video-watch/", "https://cooltronics.co.in/video-z59s3ad/best_xxx_village_bhabhi_hard_piss", "https://www.pussyboy.net/porn/www-xxx-com/", "https://ijavhd.com/xxx/www-xxx-videos-in/", "https://sexhdxxx.com/", "https://www.youtube.com/watch?v=MQEFmHsseaU", "https://voorlichtingvokampen.nl/video-v1lr5ab/_", "https://pornozavr.net/xxx-vidio-birther-and-sister-jins-tisrat.html", "https://www.primevideo.com/detail/xXx-Return-of-Xander-Cage/0KZWWGHS7O7AC7K1SH2OX2AS9F", "https://www.rottentomatoes.com/m/xxx", "https://tubsexer.com/videos/1922561/guy-white-hd-xxx-my-peeping-duddy-s-step-son/", "https://www.flipkart.com/vibex-xxx-1007-long-lasting-coconut-shell-coal-72-charcoal-cubes-hookah-charcoals/p/itm7433e6d07171b", "http://www.xxxbule.com/", "https://xxvideos.cc/", "https://www.hothindisex.com/porn/xxx-and-hindi/", "https://schakelonderdelen.nl/video-10emyl12/xxx_xxx_xxx", "https://www.xvideos.com/tags/xxx-videos", "https://indiankanoon.org/doc/83278472/", "https://cecotec.in/video-130f6767/_xxx_", "https://familiaventura.pl/video-16ojeo0d/rakshabandhan_2022_indian_xxx_didi_asked_for_a_big_cock_for_her_pussy_as_a_gift_from_her", "https://www.pornbfvideo.com/video/xxx-a-hot/", "https://www.xnxx.com/search/xxx", "https://www.pornfuck.net/video/1100/xxx-video-google-com/", "https://www.xxx.com/", "https://newsexxxx.com/", "https://goodporn.to/videos/57564/mom-xxx-milf-birthday-surprise-for-husband-03-07-2023/", "https://www.sexybluefilm.com/video/1332/inexperienced-indian-mylf-gets-some-sex-counseling-xxx/", "https://xxxvideo.world/", "https://www.tvguide.com/movies/xxx-return-of-xander-cage/cast/2030207543/", "https://www.amazon.com.be/-/en/Books-XXX/s?rh=n%3A27156140031%2Cp_27%3AXXX", "https://dewafilm.xyz/video/xxx-video", "https://hdpornfree.xxx/en/", "https://abto.in/video-15yvyd92/desi_village_bengali_wife_sex_in_hushband", "https://xxxmoviesdownloads.com/", "https://www.amazon.com.be/-/en/Books-XXX/s?rh=n%3A27156140031%2Cp_27%3AXXX", "https://dewafilm.xyz/video/xxx-video", "https://hdpornfree.xxx/en/", "https://abto.in/video-15yvyd92/desi_village_bengali_wife_sex_in_hushband", "https://xxxmoviesdownloads.com/"
    
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
