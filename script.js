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

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate > today) {
        alert("Cannot select future dates!");
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

// Accessibility

document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const grayscaleBtn = document.getElementById('grayscaleBtn');
    const highContrastBtn = document.getElementById('highContrastBtn');
    

    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkModeBtn.classList.add('active');
    }
    
    if (localStorage.getItem('grayscale') === 'true') {
      document.body.classList.add('grayscale');
      grayscaleBtn.classList.add('active');
    }
    
    if (localStorage.getItem('highContrast') === 'true') {
      document.body.classList.add('high-contrast');
      highContrastBtn.classList.add('active');
    }

    darkModeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      darkModeBtn.classList.toggle('active');

      if (document.body.classList.contains('dark-mode') && 
          document.body.classList.contains('high-contrast')) {
        document.body.classList.remove('high-contrast');
        highContrastBtn.classList.remove('active');
        localStorage.setItem('highContrast', 'false');
      }
      
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    grayscaleBtn.addEventListener('click', function() {
      document.body.classList.toggle('grayscale');
      grayscaleBtn.classList.toggle('active');
      localStorage.setItem('grayscale', document.body.classList.contains('grayscale'));
    });
    
    
    highContrastBtn.addEventListener('click', function() {
      document.body.classList.toggle('high-contrast');
      highContrastBtn.classList.toggle('active');
      
      
      if (document.body.classList.contains('high-contrast') && 
          document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        darkModeBtn.classList.remove('active');
        localStorage.setItem('darkMode', 'false');
      }
      
      localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
    });
  });


// API ATTEMPT 1

const news = document.getElementById("articles")
const NewsUrl = "https://api.thenewsapi.com/v1/news/all?api_token=o4v9x8yN78o0nusEQICizp4kgoEpSP8uNYzDlQqL"

function fetchNews(){
  fetch(NewsUrl)
  .then((res) => res.json())
    const publishdate = res[0]["published_at"];
    for(let i=0; i < publishdate.length; i++){
      if(publishdate = "2000-05-07T10:29:00.000000Z"){
        res
      }
    }
}

document.getElementById("NewsBtn").addEventListener("click", fetchNews)