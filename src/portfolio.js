// Project Data
const projects = [
    {
      id: 1,
      title: "InstaShield",
      description: "Detects fake Instagram profiles using AI for authenticity analysis. 🚀",
      fullDescription: "Instashield is a web-based tool that helps users determine the authenticity of Instagram profiles. By analyzing profile data, it provides a percentage likelihood of the profile being fake. The system leverages AI to assess key factors, ensuring a quick and reliable analysis. Ideal for individuals and businesses to avoid scams and fake accounts. 🚀",
      image: "instashield.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gautamkrch/instashield",
      liveDemo: "https://instashield.gautamkrch.xyz"
    },

    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description: "A to-do list application with drag-and-drop functionality and task categorization.",
    //   fullDescription: "This task management application helps users organize their daily tasks with intuitive drag-and-drop functionality. Users can create task categories, set priorities, add due dates, and track progress. The app includes features like task filtering, sorting, and a calendar view for better planning. It also provides statistics and insights about task completion patterns.",
    //   image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //   technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    //   github: "https://github.com/username/task-management",
    //   liveDemo: "https://example.com/task-app"
    // },
    // {
    //   id: 3,
    //   title: "Weather Forecast App",
    //   description: "A weather application showing current conditions and 5-day forecast for any location.",
    //   fullDescription: "This weather forecast application provides real-time weather information for any location worldwide. It displays current conditions including temperature, humidity, wind speed, and atmospheric pressure. Users can view a 5-day forecast with hourly breakdowns. The app also includes features like location search, favorite locations, weather alerts, and a responsive design for all devices.",
    //   image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //   technologies: ["HTML", "CSS", "JavaScript", "API"],
    //   github: "https://github.com/username/weather-app",
    //   liveDemo: "https://example.com/weather"
    // }
  ];
  
  // DOM Elements
  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const currentYear = document.getElementById('current-year');
    const contactForm = document.getElementById('contact-form');
    
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-md', 'py-3');
        navbar.classList.remove('py-5', 'bg-transparent');
      } else {
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-md', 'py-3');
        navbar.classList.add('py-5', 'bg-transparent');
      }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden', 'translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });
    
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    });
    
    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      });
    });
    
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.appear-animation');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    // Project modal functionality
    projectCards.forEach(card => {
      const viewProjectBtn = card.querySelector('.view-project');
      viewProjectBtn.addEventListener('click', () => {
        const projectId = parseInt(card.dataset.project);
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
          modalTitle.textContent = project.title;
          
          // Generate modal content
          modalContent.innerHTML = `
            <div class="mb-6 overflow-hidden rounded-lg">
              <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover">
            </div>
            
            <div class="mb-6">
              <h4 class="text-lg font-bold mb-2">Description</h4>
              <p class="text-gray-600">${project.fullDescription}</p>
            </div>
            
            <div class="mb-6">
              <h4 class="text-lg font-bold mb-2">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                ${project.technologies.map(tech => `
                  <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">${tech}</span>
                `).join('')}
              </div>
            </div>
            
            <div class="flex space-x-4">
              <a href="${project.github}" target="_blank" class="btn-primary">
                <i class="fab fa-github mr-2"></i>
                View Code
              </a>
              <a href="${project.liveDemo}" target="_blank" class="btn-secondary">
                <i class="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </a>
            </div>
          `;
          
          // Show modal
          projectModal.classList.remove('hidden');
          document.body.classList.add('overflow-hidden');
        }
      });
    });
    
    // Close modal event
    closeModal.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
    
    // // Contact form submission
    // contactForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
      
    //   // In a real application, you'd send the form data to a server
    //   // For this example, we'll just show a success message
    //   alert('Thank you for your message! I will get back to you soon.');
    //   contactForm.reset();
    // });
    
//     // Download CV button functionality
//     document.getElementById('download-cv').addEventListener('click', (e) => {
//       e.preventDefault();
//       alert('CV download functionality would be implemented here.');
//     });
    
//     document.getElementById('mobile-download-cv').addEventListener('click', (e) => {
//       e.preventDefault();
//       alert('CV download functionality would be implemented here.');
//     });
    
//     document.getElementById('hero-download-cv').addEventListener('click', (e) => {
//       e.preventDefault();
//       alert('CV download functionality would be implemented here.');
//     });



  });
  