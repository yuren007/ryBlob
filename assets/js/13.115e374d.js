(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{530:function(n,e,t){"use strict";t.r(e);var s=t(28),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("ol",[t("li",[n._v("当使用 rem 单位，他们转化为像素大小取决于页根元素的字体大小，即 html 元素的字体大小。 根元素字体大小乘以你 rem 值。")]),n._v(" "),t("li",[n._v("rem适配代码")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function (designWith = 750) {\n    var docEl = document.documentElement,\n        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',\n        recalc = function() {\n            var clientWidth = docEl.clientWidth;\n            if (!clientWidth) return;\n            docEl.style.fontSize = 100 * (clientWidth / designWith) + 'px';\n        };\n    if (!document.addEventListener) return;\n    window.addEventListener(resizeEvt, recalc, false);\n    document.addEventListener('DOMContentLoaded', recalc, false);\n}\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[n._v("当下比较流行的屏幕分辨率有1024×768,1366×768,1280×800,1280×1024，1440×900,1600×900，1920×1080等")]),n._v(" "),t("li")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("网页可见区域宽： document.body.clientWidth\n网页可见区域高： document.body.clientHeight\n网页可见区域宽： document.body.offsetWidth (包括边线的宽)\n网页可见区域高： document.body.offsetHeight (包括边线的高)\n网页正文全文宽： document.body.scrollWidth\n网页正文全文高： document.body.scrollHeight\n网页被卷去的高： document.body.scrollTop\n网页被卷去的左： document.body.scrollLeft\n网页正文部分上： window.screenTop\n网页正文部分左： window.screenLeft\n屏幕分辨率的高： window.screen.height\n屏幕分辨率的宽： window.screen.width\n屏幕可用工作区高度： window.screen.availHeight\n屏幕可用工作区宽度： window.screen.availWidth\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[n._v("getBoundingClientRect方法，getBoundingClientRect 方法返回的是调用该方法的元素的TextRectangle对象，该对象具有top、left、right、bottom四个属性，分别代表该元素上、左、右、下四条边界相对于"),t("strong",[n._v("浏览器窗口")]),n._v("左上角（注意，不是文档区域的左上角）的偏移像素值。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);