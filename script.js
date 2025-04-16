document.addEventListener('DOMContentLoaded', function() {
    const gameCompleted = localStorage.getItem('gameCompleted');
    if (gameCompleted !== 'true') {
      window.location.href = 'rabbitrunner.html';
    }
  });

async function fetchNews() {
    const date = document.getElementById("birthDate").value;
    const articlesDiv = document.getElementById("articles");
    articlesDiv.innerHTML = "";

    if (!date) {
        alert("Please select a date!");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/news?date=${date}`);
        const data = await response.json();

        if (data.articles.length === 0) {
            articlesDiv.innerHTML = "<p>No news found for this date!</p>";
            return;
        }

        data.articles.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.className = "article";
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            articlesDiv.appendChild(articleDiv);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        articlesDiv.innerHTML = "<p>Failed to fetch news. Please try again later.</p>";
    }
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();