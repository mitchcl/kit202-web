<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Minh Hoang Truong">
  <link rel="stylesheet" href="styles/style1.css"><!-- For later -->
  <title>Marathon 2025 Admin</title>
</head>
<body>
  <div id="container">
    <!-- For final activity you can add something here -->
    <?php include 'components/header.php';?>
    <?php include 'components/nav.php';?>
    <main>
      <h2>Registered Participants</h2>
      <p><a href="add.html" class="btn main-action">Add</a></p>
      <table class="participants-table">
          <tr>
            <th> First name</th>
            <th> Last name</th>
            <th> Experienced</th>
            <th> DOB </th>
            <th> gender </th>
            <th> Action </th>
          </tr>
      <?php
      // Include the database connection file
      require 'dbconn.php';
      // Query to fetch participant data
      $query = "SELECT Participantid, lname AS lastName, fname AS firstName, dob AS DOB, gender, pre_event AS hasExperience FROM Participants";
        $result = $conn->query($query);
        // Fetch and display each row of data
        while ($row = $result->fetch_assoc()){
          echo "<tr>";  
          echo "<td>" .htmlspecialchars($row['firstName']) . "</td>";
          echo "<td>" .htmlspecialchars($row['lastName']) . "</td>";
          echo "<td>" .($row['hasExperience'] ? "<b>Yes<b>": "No") . "</td>"; 
          echo "<td>" .($row['DOB']) . "</td>";
          echo "<td>" .($row['gender']) . "</td>";
          echo '<td> <a href="edit.php?id='.($row['Participantid']).'" class="btn main-action">Edit </a></td>';
          echo "</tr>";
        };
      ?>
      </table>
    </main>
    <!-- For final activity you can add something here -->
    <?php include 'components/footer.php';?>
  </div>
</body>
</html>
