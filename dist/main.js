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
      tasks,
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

    const name = document.getElementById('title-p').value

    const project = (0,_modules_ProjectFactory__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)(name)

    _modules_PM__WEBPACK_IMPORTED_MODULE_0__.PM.addProject(project)

    _modules_PM__WEBPACK_IMPORTED_MODULE_0__.PM.projects.forEach((item, i) => {
        item.id = i + 0
    });

})


// addTaskToDom.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const title = document.getElementById('title-t').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('date').value;
//     const priority = document.getElementById('priority').value;

//     const task = TaskFactory(title, description, dueDate, priority)



//     console.log(task)
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDd0I7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWM7QUFDbEM7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCO0FBQ0EsSUFBSSw0REFBbUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9QTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL1Byb2plY3RGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBQTSA9IHtcclxuXHJcbiAgICBuYW1lOiAnUHJvamVjdCBNYW5hZ2VycicsXHJcbiAgICBwcm9qZWN0czogW10sXHJcblxyXG4gICAgYWRkUHJvamVjdDogZnVuY3Rpb24gKHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKVxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVQcm9qZWN0OiBmdW5jdGlvbiAoaW5kZXgsIHByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLnByb2plY3RzW2luZGV4XSwgcHJvamVjdClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IFBNIH0iLCJpbXBvcnQgeyBUYXNrRmFjdG9yeSB9IGZyb20gXCIuL1Rhc2tGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBuYW1lXHJcbiAgXHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gIFxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0b2RvKSA9PiB7XHJcbiAgICAgIHRhc2tzLnB1c2godG9kbylcclxuICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCB0YXNrKSA9PiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhc2tzW2luZGV4XSwgdGFzaylcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXNrcyxcclxuICAgICAgZ2V0UHJvamVjdE5hbWUsXHJcbiAgICAgIGFkZFRhc2ssXHJcbiAgICAgIGRlbGV0ZVRhc2ssXHJcbiAgICAgIHVwZGF0ZVRhc2tcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdEZhY3RvcnkgfSIsImNvbnN0IFRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IFRhc2tGYWN0b3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBNIH0gZnJvbSBcIi4vbW9kdWxlcy9QTVwiXHJcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0RmFjdG9yeVwiXHJcbmltcG9ydCB7IFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vbW9kdWxlcy9UYXNrRmFjdG9yeVwiXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0VG9Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcclxuY29uc3QgYWRkVGFza1RvRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XHJcblxyXG5hZGRQcm9qZWN0VG9Eb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtcCcpLnZhbHVlXHJcblxyXG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RGYWN0b3J5KG5hbWUpXHJcblxyXG4gICAgUE0uYWRkUHJvamVjdChwcm9qZWN0KVxyXG5cclxuICAgIFBNLnByb2plY3RzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpdGVtLmlkID0gaSArIDBcclxuICAgIH0pO1xyXG5cclxufSlcclxuXHJcblxyXG4vLyBhZGRUYXNrVG9Eb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuLy8gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXQnKS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbi8vICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcblxyXG4vLyAgICAgY29uc3QgdGFzayA9IFRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXHJcblxyXG5cclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4vLyB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==