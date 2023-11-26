'use strict';


const plus = document.getElementById('plus')
const input = document.getElementById('input')
const todoBody = document.getElementById('todo-body')

const doneList = document.querySelector('.done-list')
const newList = document.querySelector('.todo-list')


const inputBox = document.querySelector('.input-box')
const bgClick = document.querySelector('.bg-click')


input.onfocus = () => {
   inputBox.classList.add('active')
   if (plus.classList.contains('active')) {
      plus.classList.remove('active')
   }
}


plus.onfocus = (e) => {
   if (inputBox.classList.contains('active')) {
      // plus.classList.add('active')
      inputBox.classList.remove('active')
   }

}






bgClick.addEventListener('click', (e) => {

   e.preventDefault()
   if (inputBox.classList.contains('active')) {
      inputBox.classList.remove('active')
   }
   if (plus.classList.contains('active')) {
      plus.classList.remove('active')
   }

})







// const newList = document.createElement('ul')
// newList.classList.add('todo-list')
// todoBody.prepend(newList)


function again(mark, place, task) {
   place.prepend(task)
   task.classList.remove('task-done')
   mark.classList.remove('return')
   console.log('not done yet')
}



plus.addEventListener('click', () => {
   plus.blur()
   if (input.value) {

      inputBox.classList.remove('active')

      const newTaskBlock = document.createElement('div')
      const newTask = document.createElement('li')
      newTaskBlock.classList.add('todo-task')
      newTaskBlock.innerHTML = input.value
      input.value = '';

      const marks = document.createElement('div')
      const removeMark = document.createElement('div')
      const deleteMark = document.createElement('div')
      deleteMark.classList.add('todo-remove-del')
      removeMark.classList.add('todo-remove')
      marks.classList.add('marks')


      newList.prepend(newTask)
      newTask.prepend(newTaskBlock)
      newTaskBlock.append(marks)
      marks.append(deleteMark)
      marks.prepend(removeMark)

      removeMark.addEventListener('click', () => {
         if (!newTask.classList.contains('task-done')) {
            newTask.classList.add('task-done')
            doneList.prepend(newTask)
            removeMark.classList.add('return')
            console.log('done')
            inputBox.classList.remove('active')
         } else if (newTask.classList.contains('task-done')) {
            removeMark.addEventListener('click', again(removeMark, newList, newTask))
            inputBox.classList.remove('active')

         }

      })
      deleteMark.addEventListener('click', () => {
         newTask.remove()
         inputBox.classList.remove('active')

      })

   } else {
      return
   }

})


