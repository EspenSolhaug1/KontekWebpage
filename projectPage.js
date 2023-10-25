function renderProject(data) {
    const templateSource = document.getElementById('project-template').innerHTML;
    const template = Handlebars.compile(templateSource);
    const renderedHtml = template(data);
    document.getElementById('projects-container').innerHTML += renderedHtml;
  }

  const projectData = {
    projectName: 'Prosjektnavn',
    constructionClient: 'Example Construction Client',
    employer: 'Example Employer',
    architect: 'Example Architect',
    size: '1000 sqm',
    year: '2023',
    carouselImages: [
      'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
      'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
      'https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
    ]
  };
  
  renderProject(projectData);