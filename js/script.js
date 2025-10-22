
      // Mobile Menu Toggle
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        });
      });

      // Scroll animation for fade-in elements
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
      });

      // Gallery item click effect
      document.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => {
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.transform = "";
          }, 200);
        });
      });

      // Add active state to navigation based on scroll position
      window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
          }
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
          }
        });
      });