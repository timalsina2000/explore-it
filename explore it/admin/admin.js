function editName() {
  var name = document.getElementById("name").innerText; // Use innerText to get the current name
  var email = document.getElementById("email").innerText; // Use innerText to get the current email

  // Make a POST request to the server to update the name
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/users/update-name", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    name: name,
    email: email
  }));

  // Handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The name was updated successfully
      alert("Name updated successfully!");
    } else {
      // There was an error updating the name
      alert("Error updating name: " + xhr.status);
    }
  };
}

// Edit the email
function editEmail() {
  var email = document.getElementById("email").innerText; // Use innerText to get the current email

  // Make a POST request to the server to update the email
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/users/update-email", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    email: email
  }));

  // Handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The email was updated successfully
      alert("Email updated successfully!");
    } else {
      // There was an error updating the email
      alert("Error updating email: " + xhr.status);
    }
  };
}

// Delete the user
function deleteUser() {
  // Get the ID of the user to be deleted
  var id = document.getElementById("id").innerText; // Assuming you add an id element for each user

  // Make a POST request to the server to delete the user
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/users/delete", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    id: id
  }));

  // Handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The user was deleted successfully
      alert("User deleted successfully!");
      // Remove the user row from the table
      var row = document.getElementById("row" + id);
      row.parentNode.removeChild(row);
    } else {
      // There was an error deleting the user
      alert("Error deleting user: " + xhr.status);
    }
  };
}

// Add event listeners to the edit and delete buttons
var editButtons = document.getElementsByClassName("editButton");
for (var i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener("click", editName);
}

var deleteButtons = document.getElementsByClassName("deleteButton");
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteUser);
}