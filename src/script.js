"use strict"

// Get DOM elements
const taskList = document.querySelector(".list")
const add = document.querySelector(".form")
const taskInput = document.querySelector("#taskInput")
const count = document.querySelector(".count")

let counting = 0

// Add a new task

add.addEventListener("submit", (e) => {
  e.preventDefault()

  counting++

  const html = ` <div class="flex items-center justify-between ">
         <p class="flex gap-2 box-${counting}"> <span class="count">${counting}:</span> ${taskInput.value}</p>
         
         <div class="flex items-center gap-2">

   <div data-tab="${counting}" class="w-8 h-8 rounded-full bg-blue-400 tick flex   items-center justify-center text-white cursor-pointer">
    <i class="fa-solid fa-check icon-${counting}"></i>
   </div>
         </div>
     </div>`

  taskList.insertAdjacentHTML("beforeend", html)

  taskInput.value = ""

  const tick = document.querySelectorAll(".tick")

  tick.forEach((t) => {
    t.addEventListener("click", (e) => {
      const clicked = e.target.closest(".tick").dataset.tab

      document.querySelector(`.box-${clicked}`).classList.add("line-through")

      document.querySelector(`.box-${clicked}`).classList.add("text-red-500")

      e.target.closest(".tick").classList.add("hidden")
    })
  })
})

// deletall
const deletall = document.querySelector(".deletall")

deletall.addEventListener("click", () => {
  counting = 0
  taskList.innerHTML = ""
})
