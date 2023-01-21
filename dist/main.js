/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/PM.js":
/*!***************************!*\
  !*** ./src/modules/PM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PM": () => (/* binding */ PM)
/* harmony export */ });
/* harmony import */ var _ProjectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectFactory */ "./src/modules/ProjectFactory.js");


const PM = {

    name: 'Project Managerr',
    projects: [],

    addProject: function (project) {
        this.projects.push(project)
        console.log(this.projects)
    },

    deleteProject: function (index) {
        this.projects.splice(index, 1)
        console.log(this.projects)
    },

    updateProject: function (index, project) {
        return Object.assign(this.projects[index], project)
    }

}



/***/ }),

/***/ "./src/modules/ProjectFactory.js":
/*!***************************************!*\
  !*** ./src/modules/ProjectFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory)
/* harmony export */ });
/* harmony import */ var _TaskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskFactory */ "./src/modules/TaskFactory.js");


const ProjectFactory = (name) => {

    const getProjectName = () => name
  
    const tasks = [];
  
    const addTask = (todo) => {
      tasks.push(todo)
      console.log(tasks)
    }
  
    const deleteTask = (index) => {
      tasks.splice(index, 1)
      console.log(tasks)
    }
  
    const updateTask = (index, task) => {
      return Object.assign(tasks[index], task)
    }
   
    return {
      getProjectName,
      addTask,
      deleteTask,
      updateTask
    }
  
}



/***/ }),

/***/ "./src/modules/TaskFactory.js":
/*!************************************!*\
  !*** ./src/modules/TaskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskFactory": () => (/* binding */ TaskFactory)
/* harmony export */ });
const TaskFactory = (name, description, dueDate, priority) => {

    return {
      name,
      description,
      dueDate,
      priority
    }
  
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/PM */ "./src/modules/PM.js");
/* harmony import */ var _modules_ProjectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectFactory */ "./src/modules/ProjectFactory.js");
/* harmony import */ var _modules_TaskFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TaskFactory */ "./src/modules/TaskFactory.js");




console.log(_modules_PM__WEBPACK_IMPORTED_MODULE_0__.PM.projects)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ3dCO0FBQ047QUFDbkQ7QUFDQSxZQUFZLG9EQUFXLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1BNLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9UYXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vUHJvamVjdEZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IFBNID0ge1xyXG5cclxuICAgIG5hbWU6ICdQcm9qZWN0IE1hbmFnZXJyJyxcclxuICAgIHByb2plY3RzOiBbXSxcclxuXHJcbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpXHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByb2plY3Q6IGZ1bmN0aW9uIChpbmRleCwgcHJvamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMucHJvamVjdHNbaW5kZXhdLCBwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgUE0gfSIsImltcG9ydCB7IFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vVGFza0ZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IFByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IG5hbWVcclxuICBcclxuICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRvZG8pID0+IHtcclxuICAgICAgdGFza3MucHVzaCh0b2RvKVxyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaW5kZXgsIHRhc2spID0+IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFza3NbaW5kZXhdLCB0YXNrKVxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldFByb2plY3ROYW1lLFxyXG4gICAgICBhZGRUYXNrLFxyXG4gICAgICBkZWxldGVUYXNrLFxyXG4gICAgICB1cGRhdGVUYXNrXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3RGYWN0b3J5IH0iLCJjb25zdCBUYXNrRmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHlcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHsgVGFza0ZhY3RvcnkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUE0gfSBmcm9tIFwiLi9tb2R1bGVzL1BNXCJcclxuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RGYWN0b3J5XCJcclxuaW1wb3J0IHsgVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9tb2R1bGVzL1Rhc2tGYWN0b3J5XCJcclxuXHJcbmNvbnNvbGUubG9nKFBNLnByb2plY3RzKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==