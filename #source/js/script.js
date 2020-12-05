var arrLang = {
  en: {
    about: "About Us",
    goods: "Our products",
    reviews: "Reviews",
    certificates: "Certificates",
    business: "Business",
    contacts: "Contact US",
    title1:
      "Feel positive changes in your body in 12 hours of using One More ™",
    subtitle1: `We took advantage of the healing properties of natural extracts and, using the latest scientific technologies, created
		high-quality products that can cure chronic diseases and completely heal your
		the body without stress on the liver. Our healing patches are based on innovative technology
		‘Transdermal Wave Technology’, which allows active substances
		penetrate through the skin directly into the blood, protecting the liver from harmful effects.`,
  },
  ru: {
    about: "О компании",
    goods: "Продукция",
    reviews: "Отзывы",
    certificates: "Сертификаты",
    business: "Бизнес",
    contacts: "Контакты",
    title1:
      "Инновационный подход к оздоровлению вашего организма с помощью лечебных пластырей One More™",
    subtitle1: `Мы воспользовались целебными свойствами природных экстрактов и с помощью новейших научных технологий создали
		высококачественную продукцию, которая способна вылечить хронические болезни и полностью оздоровить ваш
		организм без нагрузки на печень. Наши лечебные пластыри разработаны на основе инновационной технологии
		‘Transdermal Wave Technology’ (трансдермальная волновая технология), что позволяет активным веществам
		проникать через кожу напрямую в кровь, защищая печень от вредоносного воздействия.`,
  },
  kz: {
    about: "казахский",
    goods: "казахский",
    reviews: "казахский",
    certificates: "казахский",
    business: "казахский",
    contacts: "казахский",
    title1: "На казахском",
    subtitle1: `Мы воспользовались целебными свойствами природных экстрактов и с помощью новейших научных технологий создали
		высококачественную продукцию, которая способна вылечить хронические болезни и полностью оздоровить ваш
		организм без нагрузки на печень. Наши лечебные пластыри разработаны на основе инновационной технологии
		‘Transdermal Wave Technology’ (трансдермальная волновая технология), что позволяет активным веществам
		проникать через кожу напрямую в кровь, защищая печень от вредоносного воздействия.`,
  },
};

$(function () {
  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});

let userIcon = document.querySelector(".lang-header__icon"),
  userMenu = document.querySelector(".lang-header__menu");
userIcon.addEventListener("click", function (e) {
  userMenu.classList.toggle("_active"), userIcon.classList.toggle("_active");
}),
  document.documentElement.addEventListener("click", function (e) {
    e.target.closest(".lang-header") ||
      userMenu.classList.remove("_active") ||
      userIcon.classList.remove("_active");
  });

let offset = $(".header-body").offset().top;
$(window).on("scroll", function () {
  let headerHeight = $(".header-body").outerHeight();

  if ($(this).scrollTop() >= offset) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offsetAnim(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offsetAnim(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (isMobile.any()) {
}

if (location.hash) {
  var hsh = location.hash.replace("#", "");
  if ($(".popup-" + hsh).length > 0) {
    popupOpen(hsh);
  } else if ($("div." + hsh).length > 0) {
    $("body,html").animate(
      { scrollTop: $("div." + hsh).offset().top },
      500,
      function () {}
    );
  }
}
$(".wrapper").addClass("loaded");

var act = "click";
if (isMobile.iOS()) {
  var act = "touchstart";
}

let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let headerMenu = document.querySelector(".header-menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("active");
    body.classList.toggle("lock");
    headerMenu.classList.toggle("active");
  });
}

let headerLink = document.querySelectorAll(".header-body-menu__link");
headerLink.forEach((item) => {
  item.addEventListener("click", function () {
    $(".header-menu").removeClass("active");
    $(".icon-menu").removeClass("active");
    $("body").removeClass("lock");
  });
});
//ZOOM
if ($(".gallery").length > 0) {
  baguetteBox.run(".gallery", {
    // Custom options
  });
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/

//POPUP
$(".pl").click(function (event) {
  var pl = $(this).attr("href").replace("#", "");
  var v = $(this).data("vid");
  popupOpen(pl, v);
  return false;
});
function popupOpen(pl, v) {
  $(".popup").removeClass("active").hide();
  if (!$(".menu__body").hasClass("active")) {
    //$('body').data('scroll',$(window).scrollTop());
  }
  if (!isMobile.any()) {
    $("body")
      .css({
        paddingRight: $(window).outerWidth() - $(".wrapper").outerWidth(),
      })
      .addClass("lock");
    $(".pdb").css({
      paddingRight: $(window).outerWidth() - $(".wrapper").outerWidth(),
    });
  } else {
    setTimeout(function () {
      $("body").addClass("lock");
    }, 300);
  }
  history.pushState("", "", "#" + pl);
  if (v != "" && v != null) {
    $(".popup-" + pl + " .popup-video__value").html(
      '<iframe src="https://www.youtube.com/embed/' +
        v +
        '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  }
  $(".popup-" + pl)
    .fadeIn(300)
    .delay(300)
    .addClass("active");

  if ($(".popup-" + pl).find(".slick-slider").length > 0) {
    $(".popup-" + pl)
      .find(".slick-slider")
      .slick("setPosition");
  }
}
function openPopupById(popup_id) {
  $("#" + popup_id)
    .fadeIn(300)
    .delay(300)
    .addClass("active");
}
function popupClose() {
  $(".popup").removeClass("active").fadeOut(300);
  if (!$(".menu__body").hasClass("active")) {
    if (!isMobile.any()) {
      setTimeout(function () {
        $("body").css({ paddingRight: 0 });
        $(".pdb").css({ paddingRight: 0 });
      }, 200);
      setTimeout(function () {
        $("body").removeClass("lock");
        //$('body,html').scrollTop(parseInt($('body').data('scroll')));
      }, 200);
    } else {
      $("body").removeClass("lock");
      //$('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
  }
  $(".popup-video__value").html("");

  history.pushState("", "", window.location.href.split("#")[0]);
}
$(".popup-close,.popup__close").click(function (event) {
  popupClose();
  return false;
});
$(".popup").click(function (e) {
  if (
    !$(e.target).is(".popup>.popup-table>.cell *") ||
    $(e.target).is(".popup-close") ||
    $(e.target).is(".popup__close")
  ) {
    popupClose();
    return false;
  }
});
$(document).on("keydown", function (e) {
  if (e.which == 27) {
    popupClose();
  }
});

$(".goto").click(function () {
  var el = $(this).attr("href").replace("#", "");
  var offset = 0;
  $("body,html").animate(
    { scrollTop: $("." + el).offset().top + offset },
    500,
    function () {}
  );

  return false;
});

function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (
        ibg[i].querySelector("img") &&
        ibg[i].querySelector("img").getAttribute("src") != null
      ) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
}
ibg();

//Клик вне области
$(document).on("click touchstart", function (e) {
  if (!$(e.target).is(".select *")) {
    $(".select").removeClass("active");
  }
});

//UP
$(window).scroll(function () {
  var w = $(window).width();
  if ($(window).scrollTop() > 50) {
    $("#up").fadeIn(300);
  } else {
    $("#up").fadeOut(300);
  }
});
$("#up").click(function (event) {
  $("body,html").animate({ scrollTop: 0 }, 300);
});

$("body").on("click", ".tab__navitem", function (event) {
  var eq = $(this).index();
  if ($(this).hasClass("parent")) {
    var eq = $(this).parent().index();
  }
  if (!$(this).hasClass("active")) {
    $(this).closest(".tabs").find(".tab__navitem").removeClass("active");
    $(this).addClass("active");
    $(this)
      .closest(".tabs")
      .find(".tab__item")
      .removeClass("active")
      .eq(eq)
      .addClass("active");
    if ($(this).closest(".tabs").find(".slick-slider").length > 0) {
      $(this).closest(".tabs").find(".slick-slider").slick("setPosition");
    }
  }
});
$.each($(".spoller.active"), function (index, val) {
  $(this).next().show();
});
$("body").on("click", ".spoller", function (event) {
  if ($(this).hasClass("mob") && !isMobile.any()) {
    return false;
  }

  if ($(this).parents(".one").length > 0) {
    $(this)
      .parents(".one")
      .find(".spoller")
      .not($(this))
      .removeClass("active")
      .next()
      .slideUp(300);
    $(this)
      .parents(".one")
      .find(".spoller")
      .not($(this))
      .parent()
      .removeClass("active");
  }

  if ($(this).hasClass("closeall") && !$(this).hasClass("active")) {
    $.each(
      $(this).closest(".spollers").find(".spoller"),
      function (index, val) {
        $(this).removeClass("active");
        $(this).next().slideUp(300);
      }
    );
  }
  $(this)
    .toggleClass("active")
    .next()
    .slideToggle(300, function (index, val) {
      if ($(this).parent().find(".slick-slider").length > 0) {
        $(this).parent().find(".slick-slider").slick("setPosition");
      }
    });
  return false;
});

function scrolloptions() {
  var scs = 100;
  var mss = 50;
  var bns = false;
  if (isMobile.any()) {
    scs = 10;
    mss = 1;
    bns = true;
  }
  var opt = {
    cursorcolor: "#fff",
    cursorwidth: "4px",
    background: "",
    autohidemode: true,
    cursoropacitymax: 0.4,
    bouncescroll: bns,
    cursorborderradius: "0px",
    scrollspeed: scs,
    mousescrollstep: mss,
    directionlockdeadzone: 0,
    cursorborder: "0px solid #fff",
  };
  return opt;
}
function scroll() {
  $(".scroll-body").niceScroll(".scroll-list", scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
  if ($(".scroll-body").length > 0) {
    scroll();
  }
}

/*
function scrollwhouse(){
		var scs=100;
		var mss=50;
		var bns=false;
	if(isMobile.any()){
		scs=10;
		mss=1;
		bns=true;
	}
	var opt={
		cursorcolor:"#afafaf",
		cursorwidth: "5px",
		background: "",
		autohidemode:false,
		railalign: 'left',
		cursoropacitymax: 1,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
$('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
$('.whouse-content-body').scroll(function(event) {
		var s=$(this).scrollTop();
		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
		var p=s/r*100;
	$('.whouse-content__shadow').css({opacity:1-1/100*p});
});
*/

if ($(".t,.tip").length > 0) {
  tip();
}
function tip() {
  $(".t,.tip")
    .webuiPopover({
      placement: "top",
      trigger: "hover",
      backdrop: false,
      //selector:true,
      animation: "fade",
      dismissible: true,
      padding: false,
      //hideEmpty: true
      onShow: function ($element) {},
      onHide: function ($element) {},
    })
    .on("show.webui.popover hide.webui.popover", function (e) {
      $(this).toggleClass("active");
    });
}
