document.addEventListener('DOMContentLoaded', () => {
    // Discord button functionality
    const botonaaOne = document.getElementById('botonaaOne');
    const botonaaTwo = document.getElementById('botonaaTwo');

    if (botonaaOne) {
        botonaaOne.addEventListener('click', function() {
            window.open("https://discord.gg/dna-clan-eu");
        });
    }

    if (botonaaTwo) {
        botonaaTwo.addEventListener('click', function() {
            window.open("https://discord.gg/dna-clan-eu");
        });
    }

    // Reveal animation functionality
    function setupRevealAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(element => {
            observer.observe(element);
        });

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('*').forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        document.querySelectorAll('.stagger-reveal').forEach(element => {
            staggerObserver.observe(element);
        });
    }

    // Create a main content wrapper if it doesn't exist
    let mainContentWrapper = document.querySelector('.main-content-wrapper');
    if (!mainContentWrapper) {
        mainContentWrapper = document.createElement('div');
        mainContentWrapper.className = 'main-content-wrapper';
        // Move all content between nav and footer into the wrapper
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        let currentNode = nav.nextSibling;
        while (currentNode && currentNode !== footer) {
            const nextNode = currentNode.nextSibling;
            mainContentWrapper.appendChild(currentNode);
            currentNode = nextNode;
        }
        nav.after(mainContentWrapper);
    }

    // Cache the home page content
    const homeContent = `
        <section class="hero">
            <div class="hero-content reveal-left">
                <h1>Welcome to DNA</h1>
                <p>Dominating Agario with unmatched strategy and teamwork. Join the most skilled clan.</p>
                <button class="boton-elegante">Explore</button>
            </div>
            <div class="hero-image reveal-right">
                <spline-viewer url="https://prod.spline.design/A5EeDIuezwvyFhjw/scene.splinecode"></spline-viewer>
            </div>
        </section>

        <section class="requirements-section">
            <h1 class="requirements-title reveal">Our Requirements</h1>
            <div class="requirements-grid stagger-reveal">
                <div class="requirement-card">
                    <p><span>Respectful Environment</span> – Treat every member with respect, regardless of their skill level.</p>
                </div>
                <div class="requirement-card">
                    <p><span>No Toxicity</span> – We maintain a zero-tolerance policy towards toxicity.</p>
                </div>
                <div class="requirement-card">
                    <p><span>Team Spirit</span> – Collaborate and support each other for the best experience.</p>
                </div>
                <div class="requirement-card">
                    <p><span>Open to All Levels</span> – Whether you're a pro or a beginner, everyone's welcome here.</p>
                </div>
                <div class="requirement-card">
                    <p><span>Active Participation</span> – Stay active in the community to make the most of it!</p>
                </div>
            </div>
        </section>

        <section id="join" class="join-section">
            <h2 class="join-title reveal">How to Join</h2>
            <div class="join-steps stagger-reveal">
                <div class="step-box">
                    <div style="flex: 0 0 80%; padding-right: 1rem;">
                        Join our YouTube channel for tips and strategies to improve your game. 
                        <a href="https://www.youtube.com/channel/UCnLsOCz4vW3UiC03Hl9JEiQ" class="join-link">Here</a>
                    </div>
                </div>
                <div class="step-box">
                    <div style="flex: 0 0 80%; padding-right: 1rem;">
                        Follow us on Instagram to stay updated with clan news and events. 
                        <a href="https://www.instagram.com/dna_clanuk/?hl=en" class="join-link">Here</a>
                    </div>
                </div>
            </div>
            <button id="botonaaTwo" class="join-discord-btn reveal">Join Our Discord</button>
        </section>`;

    // Cache the about page content
    const aboutContent = `
    <section class="founders-section reveal">
        <h1 class="founders-title">DNA Clan Founders</h1>
        
        <div class="founder-grid">
            <!-- Other Founders Row -->
            <div class="founders-row reveal">
                <div class="founder-box">
                    <div class="profile-image-wrapper">
                        <img src="images/dna_clanuk.png" alt="vlusch" class="profile-image">
                    </div>
                    <div class="founder-name">
                        <span>dna_clanuk</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="crown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                        </svg>
                    </div>
                </div>

                <div class="founder-box">
                    <div class="profile-image-wrapper">
                        <img src="images/vlusch-1.png" alt="vlusch" class="profile-image">
                    </div>
                    <div class="founder-name">vlusch</div>
                </div>
                
                <div class="founder-box">
                    <div class="profile-image-wrapper">
                        <img src="images/ak_47_00.png.webp" alt="ak-47" class="profile-image">
                    </div>
                    <div class="founder-name">ak-47</div>
                </div>
                
                <div class="founder-box">
                    <div class="profile-image-wrapper">
                        <img src="images/doctor_sin.png" alt="doc" class="profile-image">
                    </div>
                    <div class="founder-name">doc</div>
                </div>
                
                <div class="founder-box">
                    <div class="profile-image-wrapper">
                        <img src="images/brembo_.png" alt="brembo" class="profile-image">
                    </div>
                    <div class="founder-name">brembo</div>
                </div>
            </div>
        </div>
    </section>
    <section class="community-section">
    <h1 class="community-title">special message</h1>
    <div class="community-message">
        <p>
            Since 2015, I have been deeply engaged in this game, initially under the name Sub2D&AFamilyYT. As my passion for the game grew, I established several Instagram groups to connect fans and friends, creating a space for us to share our experiences. However, I faced challenges in keeping these groups organized when those I appointed did not manage them as expected. Consequently, I decided to create new groups under a fresh name, but managing them continued to be difficult. To bring everything together in a more structured manner, I founded a clan with a meaningful name "DNA" which combines the initials of my wife and me. This clan has since evolved into much more than just a group; it has blossomed into a true community.
        </p>
    </div>
</section>`;

    function switchPage(newContent) {
        mainContentWrapper.style.opacity = '0';
        
        setTimeout(() => {
            mainContentWrapper.innerHTML = newContent;
            
            if (newContent.includes('spline-viewer')) {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = 'https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js';
                document.body.appendChild(script);
            }

            mainContentWrapper.style.opacity = '1';

            // Reinitialize reveal animations for new content
            setupRevealAnimations();
            
            // Reinitialize Discord buttons
            const newBotonaaTwo = document.getElementById('botonaaTwo');
            if (newBotonaaTwo) {
                newBotonaaTwo.addEventListener('click', function() {
                    window.open("https://discord.gg/dna-clan-eu");
                });
            }
        }, 300);
    }

    // Add event listeners to navigation links
    document.getElementById('homepage').addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(homeContent);
    });
    document.getElementById('homepageLink').addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(homeContent);
        document.getElementById('burger').checked = false;
    });

    document.getElementById('aboutpageLink').addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(aboutContent);
        document.getElementById('burger').checked = false;
    });


    document.getElementById('aboutpage').addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(aboutContent);
    });

    // Add all styles at once
    const style = document.createElement('style');
    style.textContent = `
        .main-content-wrapper {
            transition: opacity 0.3s ease-in-out;
        }

        /* Founders Section Styles */
       /* Founders Section Styles */
        .founders-section {
            padding: 0rem 2rem;
            text-align: center;
        }

        .founders-title {
            font-family: 'Bebas Neue', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ffffff, var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        }

        .founder-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 1200;
            margin: 0 auto;
            min-height: auto;
            padding-bottom: 6rem;
        }

        .leader-container {
            display: flex;
            justify-content: center;
        }

        .founders-row {
            display: flex;
            justify-content: center;
            gap: 4rem;
            flex-wrap: wrap;
        }

        .founder-box {
            background: linear-gradient(45deg, #ffffff, var(--accent-color));
            border-radius: 1rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            transition: all 0.3s ease;
            width: auto;
            box-shadow: 0 0 8px white;
        }

        .founder-box:hover {
            transform: scale(1.05);
            box-shadow: 0 0px 12px white;
        }

        .profile-image-wrapper {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 10px black;
        }

        .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .founder-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .leader {
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            border: 2px solid #3498db;
            box-shadow: 0 8px 16px rgba(52, 152, 219, 0.1);
        }

        .leader:hover {
            transform: scale(1.08);
            box-shadow: 0 15px 30px rgba(52, 152, 219, 0.2),
                        0 10px 10px rgba(52, 152, 219, 0.1);
        }

        .community-title{
        font-size: 2.5rem;
    color: #222222;
    margin-bottom: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    
    }
        .crown-icon {
            margin-left: 0.5rem;
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
        }
    .community-section {
    background-color: white; /* Background color */
    padding: 2rem; /* Padding for spacing */
    display: flex; /* Flexbox layout for centering */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: auto; /* Full height of the viewport */
    display: flex;
    flex-direction: column;
}

.community-message {
    max-width: 100%; /* Maximum width for the message */
    text-align: center; /* Center text */
    background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white box */
    border-radius: 10px; /* Rounded corners */
    padding: 1rem;
    
}

.community-message p {
    font-size: 1.2rem; /* Font size for the message */
    line-height: 1.5; /* Line height for readability */
    color: #333; /* Dark text color for contrast */
}

        @media (max-width: 768px) {
            .founders-row {
                gap: 1.5rem;
            }
            
            .founder-box {
                width: 160px;
            }
            
            .profile-image-wrapper {
                width: 120px;
                height: 120px;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize reveal animations for initial page load
    setupRevealAnimations();
});