$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var e=window.navigator.userAgent,t=(e.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}});function s(){return(e=navigator.userAgent).indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1}function i(e){var t=0,s=e.parents("form");if("email"==e.attr("name")||e.hasClass("email")){if(e.val()!=e.attr("data-value")){var i=e.val().replace(" ","");e.val(i)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.val())&&e.val()!=e.attr("data-value")?l(e):(t++,a(e))}else""==e.val()||e.val()==e.attr("data-value")?(t++,a(e)):l(e);return"checkbox"==e.attr("type")&&(1==e.prop("checked")?e.removeClass("err").parent().removeClass("err"):(t++,e.addClass("err").parent().addClass("err"))),e.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(e.val())||(t++,a(e))),e.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?a(e):l(e)),t}function a(e){if(e.addClass("err"),e.parent().addClass("err"),e.parent().find(".form__error").remove(),e.hasClass("email")){var t="";null!=(t=(""==e.val()||(e.val(),e.attr("data-value")),e.data("error")))&&e.parent().append('<div class="form__error">'+t+"</div>")}else null!=e.data("error")&&0==e.parent().find(".form__error").length&&e.parent().append('<div class="form__error">'+e.data("error")+"</div>");e.parents(".select-block").length>0&&(e.parents(".select-block").parent().addClass("err"),e.parents(".select-block").find(".select").addClass("err"))}function l(e){e.removeClass("err"),e.parent().removeClass("err"),e.parent().find(".form__error").remove(),e.parents(".select-block").length>0&&(e.parents(".select-block").parent().removeClass("err"),e.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function n(e){""==e.val()&&(e.inputmask("remove"),e.hasClass("l")||e.val(e.attr("data-value")),e.removeClass("focus"),e.parent().removeClass("focus"))}function o(){$.each($('.select[data-type="search"]'),(function(e,t){var s=$(this).parent(),i=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==i.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(i.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",i.find('option[selected="selected"]').html()))}))}s()&&$("body").addClass("ie"),t.any()&&$("body").addClass("touch"),function(){if($("select").length>0){function e(){$.each($("select"),(function(e,s){var i=e;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var a,l,n="",o="",r=$(this).parent(".select-block"),c="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(n="multiple",o="check"),$.each($(this).find("option"),(function(e,t){if(""!=$(this).attr("class")&&null!=$(this).attr("class")){$(this).attr("class")}""!=$(this).attr("value")?c=""!=$(this).attr("data-icon")&&null!=$(this).attr("data-icon")?c+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+i+" select-options__value value_"+$(this).val()+"  "+o+"'><div><img src="+$(this).attr("data-icon")+' alt=""></div><div>'+$(this).html()+"</div></div>":c+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+i+" select-options__value value_"+$(this).val()+"  "+o+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==r.find(".select__label").length&&r.prepend('<div class="select__label">'+$(this).html()+"</div>")})),c+="</div></div></div>","search"==$(this).attr("data-type")?(r.append("<div data-type='search' class='select_"+i+" select "+$(this).attr("class")+"__select "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+c+"</div>"),$(".select_"+i).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+i,parentLookupClass:"select-options__value_"+i,childBlockClass:"select-options__value_"+i})):"true"==$(this).attr("data-icon")?r.append("<div class='select_"+i+" select "+$(this).attr("class")+"__select icon "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr("data-icon")+' alt=""></div><div>'+$(this).find('option[selected="selected"]').html()+"</div></div></div>"+c+"</div>"):r.append("<div class='select_"+i+" select "+$(this).attr("class")+"__select "+n+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+c+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&r.find(".select").addClass("focus"),1==r.find(".select-options__value").length&&r.find(".select").addClass("one"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+i+" .select-options-scroll").niceScroll(".select-options-list",(a=100,l=50,t.any()&&(a=10,l=1),{cursorcolor:"#9B4E7C",cursorwidth:"12px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"10px",scrollspeed:a,mousescrollstep:l,directionlockdeadzone:0,cursorborder:"0px solid #fff"}))}))}e(),$("body").on("keyup","input.select-title__value",(function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),$(this).parents(".select-block").find("select").val("")})),$("body").on("click",".select",(function(){if(!$(this).hasClass("disabled")&&!$(this).hasClass("one")){$(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||o(),$(this).find(".select-options__value").show());var e=$.trim($(this).find(".select-title__value").attr("class").replace("select-title__value",""));$(this).find(".select-options__value").show().removeClass("hide").removeClass("last"),""!=e&&$(this).find(".select-options__value."+e).hide().addClass("hide"),$(this).find(".select-options__value").last().hasClass("hide")&&$(this).find(".select-options__value").last().prev().addClass("last")}})),$("body").on("click",".select-options__value",(function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?($(this).parents(".select").find(".select-title__value span").length>0?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&e()})),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(e.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),o())})),$(document).on("keydown",(function(e){27==e.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),o())}))}function s(e,t){e.find(".rating__activeline").css({width:t+"%"})}$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),l($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||($(this).hasClass("l")&&0==$(this).parent().find(".form__label").length?$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>"):this.value=$(this).attr("data-value")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&($(this).hasClass("l")||(this.value=$(this).attr("data-value")),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text")),$(this).hasClass("vn")&&i($(this))}))})),$(".form-input__viewpass").click((function(e){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$.each($("input.phone"),(function(e,t){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){n($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(e){n($(this))})),$.each($("input.num"),(function(e,t){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){n($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(e){n($(this))})),$.each($(".check"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$("body").off("click",".check",(function(e){})),$("body").on("click",".check",(function(e){$(this).hasClass("disable")||($(e.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1)))})),$.each($(".option.active"),(function(e,t){$(this).find("input").prop("checked",!0)})),$(".option").click((function(e){$(this).hasClass("disable")||($(e.target).is("a")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0)))})),$(".rating.edit .star").hover((function(){var e=$(this).parents(".rating");e.find(".rating__activeline").css({width:"0%"});var t=($(this).index()+1)/e.find(".star").length*100;s(e,t)}),(function(){var e=$(this).parents(".rating");e.find(".star").removeClass("active");var t=e.find("input").val()/e.find(".star").length*100;s(e,t)})),$(".rating.edit .star").click((function(e){var t=$(this).parents(".rating"),i=$(this).index()+1;t.find("input").val(i);var a=i/t.find(".star").length*100;s(t,a)})),$.each($(".rating"),(function(e,t){var i=$(this).find("input").val()/$(this).parent().find(".star").length*100;s($(this),i)})),$(".quantity__btn").click((function(e){var t=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(t-=1)<1&&(t=1):t+=1,$(this).parent().find(".quantity__input").val(t),!1})),$("#range").length>0&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){$("#rangefrom").val(t.values[0]),$("#rangeto").val(t.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+t.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+t.values[1]+"</span>")},change:function(e,t){t.values[0]!=$("#range").slider("option","min")||t.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())})),$("#rangeto").bind("change",(function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())})),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change((function(e){if(""!=$(this).val()){var t=$(this);t.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(e.target.files,(function(s,i){0==t.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+e.target.files[s].name+'")').length&&t.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+e.target.files[s].name+"</li>")}))}}))}(),$("form button[type=submit]").click((function(){var e=0,t=$(this).parents("form"),s=t.data("ms");return $.each(t.find(".req"),(function(t,s){e+=i($(this))})),0==e&&(function(e){e.find(".form__generalerror").hide().html("")}(t),null!=s&&""!=s?(function(e){$(".popup").hide(),b("message."+e,"")}(s),!1):void 0)}));var r={en:{about:"About Us",goods:"Our products",reviews:"Reviews",certificates:"Certificates",business:"Business",contacts:"Contact US",title1:"Feel positive changes in your body in 12 hours of using One More ™",subtitle1:"We took advantage of the healing properties of natural extracts and, using the latest scientific technologies, created\n\t\thigh-quality products that can cure chronic diseases and completely heal your\n\t\tthe body without stress on the liver. Our healing patches are based on innovative technology\n\t\t‘Transdermal Wave Technology’, which allows active substances\n\t\tpenetrate through the skin directly into the blood, protecting the liver from harmful effects."},ru:{about:"О компании",goods:"Продукция",reviews:"Отзывы",certificates:"Сертификаты",business:"Бизнес",contacts:"Контакты",title1:"Инновационный подход к оздоровлению вашего организма с помощью лечебных пластырей One More™",subtitle1:"Мы воспользовались целебными свойствами природных экстрактов и с помощью новейших научных технологий создали\n\t\tвысококачественную продукцию, которая способна вылечить хронические болезни и полностью оздоровить ваш\n\t\tорганизм без нагрузки на печень. Наши лечебные пластыри разработаны на основе инновационной технологии\n\t\t‘Transdermal Wave Technology’ (трансдермальная волновая технология), что позволяет активным веществам\n\t\tпроникать через кожу напрямую в кровь, защищая печень от вредоносного воздействия."},kz:{about:"казахский",goods:"казахский",reviews:"казахский",certificates:"казахский",business:"казахский",contacts:"казахский",title1:"На казахском",subtitle1:"Мы воспользовались целебными свойствами природных экстрактов и с помощью новейших научных технологий создали\n\t\tвысококачественную продукцию, которая способна вылечить хронические болезни и полностью оздоровить ваш\n\t\tорганизм без нагрузки на печень. Наши лечебные пластыри разработаны на основе инновационной технологии\n\t\t‘Transdermal Wave Technology’ (трансдермальная волновая технология), что позволяет активным веществам\n\t\tпроникать через кожу напрямую в кровь, защищая печень от вредоносного воздействия."}};$((function(){$(".translate").click((function(){var e=$(this).attr("id");$(".lang").each((function(t,s){$(this).text(r[e][$(this).attr("key")])}))}))}));let c=document.querySelector(".lang-header__icon"),d=document.querySelector(".lang-header__menu");c.addEventListener("click",(function(e){d.classList.toggle("_active"),c.classList.toggle("_active")})),document.documentElement.addEventListener("click",(function(e){e.target.closest(".lang-header")||d.classList.remove("_active")||c.classList.remove("_active")}));let h=$(".header-body").offset().top;$(window).on("scroll",(function(){$(".header-body").outerHeight();$(this).scrollTop()>=h?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}));const u=document.querySelectorAll("._anim-items");if(u.length>0){function p(){for(let e=0;e<u.length;e++){const t=u[e],s=t.offsetHeight,i=v(t).top,a=4;let l=window.innerHeight-s/a;s>window.innerHeight&&(l=window.innerHeight-window.innerHeight/a),pageYOffset>i-l&&pageYOffset<i+s?t.classList.add("_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}}function v(e){const t=e.getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+s}}window.addEventListener("scroll",p),setTimeout(()=>{p()},300)}if((t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}}).any(),location.hash){var f=location.hash.replace("#","");$(".popup-"+f).length>0?b(f):$("div."+f).length>0&&$("body,html").animate({scrollTop:$("div."+f).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");if(t.iOS());let m=document.querySelector(".icon-menu"),g=document.querySelector("body"),_=document.querySelector(".header-menu");function b(e,s){$(".popup").removeClass("active").hide(),$(".menu__body").hasClass("active"),t.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+e),""!=s&&null!=s&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+s+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),$(".popup-"+e).find(".slick-slider").length>0&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}function C(){$(".popup").removeClass("active").fadeOut(300),$(".menu__body").hasClass("active")||(t.any()?$("body").removeClass("lock"):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock")}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}var y,k,w;function x(){var e=$(window).outerWidth();$(window).outerHeight();!function(e,t){var s=$(".header-menu"),i=$(".header-top-lang");e<767?i.hasClass("done")||i.addClass("done").appendTo(s):i.hasClass("done")&&i.removeClass("done").prependTo($(".header-top")),e<992?$(".header-body-menu").hasClass("done")||$(".header-body-menu").addClass("done").appendTo(s):$.each($(".header-body-menu"),(function(e,t){$(this).hasClass("header-body-menu--right")?$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-body__column").eq(3)):$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-body__column").eq(1))}))}(e)}m&&m.addEventListener("click",(function(){m.classList.toggle("active"),g.classList.toggle("lock"),_.classList.toggle("active")})),$(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".pl").click((function(e){return b($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(e){return C(),!1})),$(".popup").click((function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return C(),!1})),$(document).on("keydown",(function(e){27==e.which&&C()})),$(".goto").click((function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,(function(){})),$(".menu__body").hasClass("active")&&($(".menu__body,.icon-menu").removeClass("active"),$("body").removeClass("lock")),!1})),function(){if(s()){let t=document.querySelectorAll(".ibg");for(var e=0;e<t.length;e++)t[e].querySelector("img")&&null!=t[e].querySelector("img").getAttribute("src")&&(t[e].style.backgroundImage="url("+t[e].querySelector("img").getAttribute("src")+")")}}(),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(".select").removeClass("active")})),$(window).scroll((function(){$(window).width();$(window).scrollTop()>50?$("#up").fadeIn(300):$("#up").fadeOut(300)})),$("#up").click((function(e){$("body,html").animate({scrollTop:0},300)})),$("body").on("click",".tab__navitem",(function(e){var t=$(this).index();if($(this).hasClass("parent"))t=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(t).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))})),$.each($(".spoller.active"),(function(e,t){$(this).next().show()})),$("body").on("click",".spoller",(function(e){return $(this).hasClass("mob")&&!t.any()||($(this).parents(".one").length>0&&($(this).parents(".one").find(".spoller").not($(this)).removeClass("active").next().slideUp(300),$(this).parents(".one").find(".spoller").not($(this)).parent().removeClass("active")),$(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),(function(e,t){$(this).removeClass("active"),$(this).next().slideUp(300)})),$(this).toggleClass("active").next().slideToggle(300,(function(e,t){$(this).parent().find(".slick-slider").length>0&&$(this).parent().find(".slick-slider").slick("setPosition")}))),!1})),-1!=navigator.appVersion.indexOf("Mac")||$(".scroll-body").length>0&&$(".scroll-body").niceScroll(".scroll-list",(y=100,k=50,w=!1,t.any()&&(y=10,k=1,w=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:w,cursorborderradius:"0px",scrollspeed:y,mousescrollstep:k,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),$(".t,.tip").length>0&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(e){},onHide:function(e){}}).on("show.webui.popover hide.webui.popover",(function(e){$(this).toggleClass("active")})),$(".main__slider").length>0&&$(".main__slider").slick({fade:!0,speed:1300,infinite:!0,dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,autoplay:!1,autoplaySpeed:6e3,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:768,settings:{}}]}),$(".slider-certificates").length>0&&$(".slider-certificates").slick({speed:1300,slidesToShow:4,slidesToScroll:4,dots:!1,arrows:!0,accessibility:!1,autoplay:!1,autoplaySpeed:3e3,touchMove:!1,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".content-reviews__slider").length>0&&$(".content-reviews__slider").slick({speed:1500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!1,dots:!0,arrows:!1,vertical:!1,accessibility:!1,autoplay:!1,autoplaySpeed:3e3,touchMove:!1,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:768,settings:{}}]}),$(window).resize((function(e){x()})),x()}));