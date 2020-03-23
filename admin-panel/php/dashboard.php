<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="../style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body>
    <?php include 'adminSession.php' ?>
    <img src="http://mbcpeermade.com/userfiles/poster/59a7487994344d69931e69e79fd9abbc.jpg">
    <div class="container">
        <div class="header">
            <div class="mbc-logo"></div>
            <div class="user"></div>
        </div>
        <div class="body-container">
            <div class="dashboard">
                <div class="add-question" onclick="window.location='../../q-upload/q-index.html'">
                    Add Questions
                </div>
                <div class="edit-question" onclick="window.location='editQuestions.php'">
                    Edit Questions
                </div>
                <div class="student-result" onclick="window.location='student-result.php'">
                    Student Results
                </div>
            </div>
        </div>
    </div>
</body>
</html>