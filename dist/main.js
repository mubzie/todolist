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
const TaskFactory = (title, description, dueDate, priority) => {

    return {
      title,
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




const addProjectToDom = document.getElementById('addProjectForm');
const addTaskToDom = document.getElementById('addTaskForm');

addProjectToDom.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)

    const name = document.getElementById('title-p').value

    const project = (0,_modules_ProjectFactory__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)(name)

    _modules_PM__WEBPACK_IMPORTED_MODULE_0__.PM.addProject(project)

    console.log(_modules_PM__WEBPACK_IMPORTED_MODULE_0__.PM.projects[0].getProjectName())
})


addTaskToDom.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)

    const title = document.getElementById('title-t').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const task = (0,_modules_TaskFactory__WEBPACK_IMPORTED_MODULE_2__.TaskFactory)(title, description, dueDate, priority)

    console.log(task)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ3dCO0FBQ047QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCO0FBQ0EsZ0JBQWdCLHNFQUE2QjtBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpRUFBVztBQUM1QjtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9QTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL1Byb2plY3RGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBQTSA9IHtcclxuXHJcbiAgICBuYW1lOiAnUHJvamVjdCBNYW5hZ2VycicsXHJcbiAgICBwcm9qZWN0czogW10sXHJcblxyXG4gICAgYWRkUHJvamVjdDogZnVuY3Rpb24gKHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKVxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVQcm9qZWN0OiBmdW5jdGlvbiAoaW5kZXgsIHByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLnByb2plY3RzW2luZGV4XSwgcHJvamVjdClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IFBNIH0iLCJpbXBvcnQgeyBUYXNrRmFjdG9yeSB9IGZyb20gXCIuL1Rhc2tGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBuYW1lXHJcbiAgXHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gIFxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0b2RvKSA9PiB7XHJcbiAgICAgIHRhc2tzLnB1c2godG9kbylcclxuICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCB0YXNrKSA9PiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhc2tzW2luZGV4XSwgdGFzaylcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXRQcm9qZWN0TmFtZSxcclxuICAgICAgYWRkVGFzayxcclxuICAgICAgZGVsZXRlVGFzayxcclxuICAgICAgdXBkYXRlVGFza1xyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0RmFjdG9yeSB9IiwiY29uc3QgVGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHlcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHsgVGFza0ZhY3RvcnkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUE0gfSBmcm9tIFwiLi9tb2R1bGVzL1BNXCJcclxuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RGYWN0b3J5XCJcclxuaW1wb3J0IHsgVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9tb2R1bGVzL1Rhc2tGYWN0b3J5XCJcclxuXHJcbmNvbnN0IGFkZFByb2plY3RUb0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xyXG5jb25zdCBhZGRUYXNrVG9Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcclxuXHJcbmFkZFByb2plY3RUb0RvbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXAnKS52YWx1ZVxyXG5cclxuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0RmFjdG9yeShuYW1lKVxyXG5cclxuICAgIFBNLmFkZFByb2plY3QocHJvamVjdClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhQTS5wcm9qZWN0c1swXS5nZXRQcm9qZWN0TmFtZSgpKVxyXG59KVxyXG5cclxuXHJcbmFkZFRhc2tUb0RvbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS10JykudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHRhc2sgPSBUYXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhc2spXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9