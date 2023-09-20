
$(document).ready(function(){
  // Handle form submission
  $('#createUserForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    $.post('crud.php', {action: 'create', name: name, email: email}, function(data) {
      // Update the table
    });
  });

  // Handle table actions
  $('#usersTable').on('click', '.update', function() {
    var id = $(this).data('id');
    var name = prompt('Enter the new name');
    var email = prompt('Enter the new email');
    $.post('crud.php', {action: 'update', id: id, name: name, email: email}, function(data) {
      // Update the table
    });
  });
  $('#usersTable').on('click', '.delete', function() {
    var id = $(this).data('id');
    $.post('crud.php', {action: 'delete', id: id}, function(data) {
      // Update the table
    });
  });
});
