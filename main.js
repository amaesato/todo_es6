$(document).ready( () => {
  let todos = [];
  let listId = 0;
  let doneTodo = [];

  const loadList = () => {
    $('#list_it').empty();
    for (let todo of todos) {
      let li = `<li data-list-id="${todo.id}">
                <span class="item"> - ${todo.name}</span>
                <button id="${todo.id}">x</button></li>`;
      if (todo.complete === true) {
        console.log('true, true, true');
      }
      console.log(li);
      $('#list_it').append(li);
    }
  }


  $('#add_to_list').on('click', () => {
    let name = $('#add_item').val();
    let id = ++listId;
    let complete = false;
    let todo = { name, id, complete }
    todos = [todo,...todos];
    $('#add_item').val('');
    loadList();
  });



  $(document).on('click', '.item', (e) => {
    // $(e.target).hide();
    // let item = e.target;
    let thisId = $(e.target).parent().data('list-id');
    todos.forEach(todo => {
      // console.log(todo.id)
      // console.log(thisId)
      if (todo.id === thisId) {
        return
        let todos = {...todo, complete: !todo.complete}
        $(e.target).css({'text-decoration': 'line-through'});
        alert('complete');
        console.log('match')
        // return {...todo, complete: !todo.complete}
      }
      return todo;
      console.log(todos);
    });
    todos = todos
    console.log(todos)
    loadList();

  });

  // $(document).on('click', '.item', (e) => {
  //   let id = e.target.id
  //   console.log(id)
  //   let todos = todos.map( todo => {
  //     if (todo.id === parseInt(id)) {
  //       return {
  //         ...todo,
  //         complete: !todo.complete
  //       }
  //     }
  //
  //     return todo;
  //   });
  //   todos = todos;
  //   // list.render();
  // });


  loadList();
});
//ALL DONE IN es6
//have for for user to add todo item
//todo item shows up in list
//if user clicks item it gets marked complete or not complete
//have a visual indicator of complete

//BONUS
//ability to delete todos
//filter todos by complete / imcomplete / all
//edit todo name
