(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{528:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("基本数据类型转换")])]),t._v(" "),a("p",[t._v("字符串+的话，就变为字符串")]),t._v(" "),a("p",[t._v("-，*，/的话就转换为数字")]),t._v(" "),a("p",[t._v("==号")]),t._v(" "),a("p",[t._v("undefined等于null")]),t._v(" "),a("p",[t._v("字符串和数字比较时，字符串转数字")]),t._v(" "),a("p",[t._v("数字为布尔比较时，布尔转数字")]),t._v(" "),a("p",[t._v("字符串和布尔比较时，两者转数字")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        　　  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true,字符串转数字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true,布尔转数字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    　　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true,两者转数字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     　 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 　"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("引用类型转换")])]),t._v(" "),a("p",[t._v("基本类型间的比较相对简单。引用类型和基本类型的比较就相对复杂一些，先要把引用类型转成基本类型，再按上述的方法比较。引用类型转布尔全是true。比如空数组，只要是对象就是引用类型，所以[]为true。引用类型转数字或者字符串就要用valueOf()或者toString();对象本身就继承了valuOf()和toString(),还可以自定义valueOf()和toString()。根据不同的对象用继承的valueOf()转成字符串,数字或本身，而对象用toString就一定转为字符串。一般对象默认调用valueOf()。")]),t._v(" "),a("ul",[a("li",[t._v("对象转数字时，调用valueOf();")]),t._v(" "),a("li",[t._v("对象转字符串时，调用toString();")])]),t._v(" "),a("p",[t._v("自定义的valueOf()和toString();")]),t._v(" "),a("ul",[a("li",[t._v("自定义的valueOf()和toString()都存在，会默认调用valueOf();")]),t._v(" "),a("li",[t._v("如果只有toString(),则调用toString();")])]),t._v(" "),a("p",[a("strong",[t._v("显示转换")])]),t._v(" "),a("p",[t._v("显式转换比较简单，可以直接用类当作方法直接转换。")]),t._v(" "),a("h3",{attrs:{id:"_6、-对象的tostring-和valueof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、-对象的tostring-和valueof"}},[t._v("#")]),t._v(" 6、 对象的toString()和valueOf()")]),t._v(" "),a("p",[t._v("valueOf():https://www.cnblogs.com/fengweb/p/5755052.html")]),t._v(" "),a("p",[t._v("toString(): https://www.cnblogs.com/bq-med/p/8796836.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);