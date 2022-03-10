(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.d({},{L:()=>y});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.estatus=!1,this.creado=new Date}var n,r,o;return n=t,o=[{key:"deJsonAObj",value:function(e){var n=e.tarea,r=e.id,o=e.estatus,a=e.creado,i=new t(n);return this.id=r,this.estatus=o,this.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,o,i;return e=t,(o=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.nuevoLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.nuevoLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=r(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id==t){o.estatus=!o.estatus,this.nuevoLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.estatus})),this.nuevoLocalStorage()}},{key:"nuevoLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(t){return n.deJsonAObj(t)}))}}])&&a(e.prototype,o),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),h=function(t){var e='\n    <li class="'.concat(t.estatus?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.estatus?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>'),n=document.createElement("div");return n.innerHTML=e,s.append(n.firstElementChild),n.firstElementChild};u.addEventListener("keyup",(function(t){if(13===t.keyCode&&u.value.length>0){var e=new n(u.value);y.nuevoTodo(e),h(e),console.log(y),u.value=""}})),s.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,r=n.getAttribute("data-id");e.includes("input")?(y.marcarCompletado(r),n.classList.toggle("completed")):e.includes("button")&&(y.eliminarTodo(r),s.removeChild(n))})),d.addEventListener("click",(function(t){y.eliminarCompletados();for(var e=s.children.length-1;e>=0;e--){var n=s.children[e];n.classList.contains("completed")&&s.removeChild(n)}})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){v.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,r=l(s.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(t){r.e(t)}finally{r.f()}}}));var y=new i;y.todos.forEach((function(t){h(t)})),console.log("todos: ",y.todos)})();