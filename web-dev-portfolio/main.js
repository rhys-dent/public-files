console.log("Main Script")
//Add projects
const projectsArticle = document.getElementById('projects')
projects.forEach(({ url, thumbnailPath, description, createdWith }) => projectsArticle.appendChild(new Project(url, thumbnailPath, description, createdWith).getElement()))