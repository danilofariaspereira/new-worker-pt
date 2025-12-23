document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        'pt': {
            'nav.home': 'Home',
            'nav.servicos': 'Serviços',
            'nav.videos': 'Vídeos & Blog',
            'nav.contato': 'Contato',
            'nav.language': 'Linguagem',
            'lang.pt': 'Português',
            'lang.es': 'Español',
            'lang.en': 'English',
            'hero.title': 'Obras e Remodelações<br>de Excelência<br>New Works<br>Transformando Espaços<br>com Qualidade e<br>Profissionalismo',
            'about.title': 'Bem-vindo à New Works<br>Obras e Remodelações',
            'about.description': 'Com 4 anos de experiência e credibilidade, a New Works se destaca no setor da construção civil e remodelação, oferecendo serviços de alta qualidade e soluções personalizadas para cada cliente. <br> <br>Nosso compromisso é transformar espaços com profissionalismo, eficiência e excelência.',
            'button.especialista': 'Falar com um especialista',
            'button.verServicos': 'Ver Todos os Serviços',
            'services.title': 'Nossos Serviços',
            'services.intro': 'Oferecemos uma gama completa de serviços especializados em construção civil e remodelação, sempre com excelência e compromisso com a qualidade.',
            'services.pintura.title': 'Pintura Residencial e Comercial',
            'services.pintura.desc': 'Pintura interna e externa com acabamentos refinados e duradouros',
            'services.pintura.item1': 'Pintura interna e externa',
            'services.pintura.item2': 'Acabamentos refinados e duradouros',
            'services.pintura.item3': 'Aplicação de tintas especiais e texturas',
            'services.pladur.title': 'Trabalhos em Pladur',
            'services.pladur.desc': 'Montagem de divisórias, forros e soluções personalizadas',
            'services.pladur.item1': 'Montagem de divisórias e forros',
            'services.pladur.item2': 'Tetos falsos e paredes em gesso cartonado',
            'services.pladur.item3': 'Soluções personalizadas para ambientes modernos',
            'services.pichelaria.title': 'Pichelaria (Canalização e Hidráulica)',
            'services.pichelaria.desc': 'Instalação e manutenção de tubulações e sistemas hidráulicos',
            'services.pichelaria.item1': 'Instalação e manutenção de tubulações',
            'services.pichelaria.item2': 'Reparação de vazamentos e entupimentos',
            'services.pichelaria.item3': 'Sistemas de aquecimento de água',
            'services.verticais.title': 'Verticais & Manutenção Predial',
            'services.verticais.desc': 'Lavagem de fachadas e manutenção predial especializada',
            'services.verticais.item1': 'Lavagem de fachadas, pastilhas e granitos',
            'services.verticais.item2': 'Manutenção e reparação de edifícios',
            'services.verticais.item3': 'Soluções para conservação e valorização do imóvel',
            'services.impermeabilizacao.title': 'Impermeabilização em Geral',
            'services.impermeabilizacao.desc': 'Proteção contra infiltrações e umidade',
            'services.impermeabilizacao.item1': 'Proteção contra infiltrações e umidade',
            'services.impermeabilizacao.item2': 'Tratamento de lajes, telhados e fachadas',
            'services.impermeabilizacao.item3': 'Aplicação de membranas impermeáveis',
            'services.gerais.title': 'Serviços Gerais',
            'services.gerais.desc': 'Reparos, acabamentos e remodelações completas',
            'services.gerais.item1': 'Pequenos reparos e acabamentos',
            'services.gerais.item2': 'Remodelações e melhorias em espaços diversos',
            'services.gerais.item3': 'Soluções personalizadas para cada necessidade',
            'advantages.title': 'Por que escolher a New Works?',
            'advantages.experiencia': 'Experiência e Credibilidade - 4 anos de atuação com excelência',
            'advantages.equipe': 'Equipe Qualificada - Profissionais especializados para cada serviço',
            'advantages.qualidade': 'Compromisso e Qualidade - Materiais de alto padrão e técnicas inovadoras',
            'advantages.atendimento': 'Atendimento Personalizado - Soluções sob medida para cada cliente',
            'footer.social': 'Redes Sociais',
            'contact.title': 'Entre em Contato',
            'services.pageTitle': 'Nossos Serviços',
            'services.pageDesc': 'Conheça em detalhes todos os serviços que oferecemos com excelência e profissionalismo',
            'works.title': 'Nossas Obras',
            'videosBlog.title': 'Vídeos & Blog',
            'videosBlog.desc': 'Acompanhe nossos projetos, dicas e novidades sobre construção e remodelação',
            'videosBlog.videos': 'Vídeos',
            'videosBlog.blog': 'Blog',
            'videosBlog.video1.title': 'Nossos Serviços em Ação',
            'videosBlog.video1.desc': 'Conheça nossos serviços e veja como transformamos espaços',
            'videosBlog.video2.title': 'Projetos Realizados',
            'videosBlog.video2.desc': 'Veja alguns dos nossos projetos mais recentes',
            'videosBlog.video3.title': 'Dicas de Construção',
            'videosBlog.video3.desc': 'Dicas valiosas para sua obra ou remodelação',
            'videosBlog.recent': 'Recente',
            'blog.post1.title': 'Como Escolher a Tinta Ideal',
            'blog.post1.desc': 'Guia completo para escolher a tinta perfeita para seu projeto',
            'blog.post2.title': 'Tendências em Remodelação',
            'blog.post2.desc': 'As principais tendências para renovar seu espaço',
            'blog.post3.title': 'Manutenção Preventiva',
            'blog.post3.desc': 'Importância da manutenção preventiva em edifícios',
            'blog.recent': 'Recente',
            'contact.phone': '(351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Rua Padre Porfiri Alves,148r/c, 4480- Vila do Conde',
            'contact.button': 'Enviar Mensagem'
        },
        'es': {
            'nav.home': 'Inicio',
            'nav.servicos': 'Servicios',
            'nav.videos': 'Vídeos & Blog',
            'nav.contato': 'Contacto',
            'nav.language': 'Idioma',
            'lang.pt': 'Português',
            'lang.es': 'Español',
            'lang.en': 'English',
            'hero.title': 'Obras y Remodelaciones<br>de Excelencia<br>New Works<br>Transformando Espacios<br>con Calidad y<br>Profesionalismo',
            'about.title': 'Bienvenido a New Works<br>Obras y Remodelaciones',
            'about.description': 'Con 4 años de experiencia y credibilidad, New Works se destaca en el sector de la construcción civil y remodelación, ofreciendo servicios de alta calidad y soluciones personalizadas para cada cliente. <br> <br>Nuestro compromiso es transformar espacios con profesionalismo, eficiencia y excelencia.',
            'button.especialista': 'Hablar con un especialista',
            'button.verServicos': 'Ver Todos los Servicios',
            'services.title': 'Nuestros Servicios',
            'services.intro': 'Ofrecemos una gama completa de servicios especializados en construcción civil y remodelación, siempre con excelencia y compromiso con la calidad.',
            'services.pintura.title': 'Pintura Residencial y Comercial',
            'services.pintura.desc': 'Pintura interior y exterior con acabados refinados y duraderos',
            'services.pintura.item1': 'Pintura interior y exterior',
            'services.pintura.item2': 'Acabados refinados y duraderos',
            'services.pintura.item3': 'Aplicación de pinturas especiales y texturas',
            'services.pladur.title': 'Trabajos en Pladur',
            'services.pladur.desc': 'Montaje de divisiones, techos y soluciones personalizadas',
            'services.pladur.item1': 'Montaje de divisiones y techos',
            'services.pladur.item2': 'Falsos techos y paredes de cartón yeso',
            'services.pladur.item3': 'Soluciones personalizadas para ambientes modernos',
            'services.pichelaria.title': 'Fontanería (Canalización e Hidráulica)',
            'services.pichelaria.desc': 'Instalación y mantenimiento de tuberías y sistemas hidráulicos',
            'services.pichelaria.item1': 'Instalación y mantenimiento de tuberías',
            'services.pichelaria.item2': 'Reparación de fugas y atascos',
            'services.pichelaria.item3': 'Sistemas de calentamiento de agua',
            'services.verticais.title': 'Verticales & Mantenimiento Edilicio',
            'services.verticais.desc': 'Lavado de fachadas y mantenimiento edilicio especializado',
            'services.verticais.item1': 'Lavado de fachadas, azulejos y granitos',
            'services.verticais.item2': 'Mantenimiento y reparación de edificios',
            'services.verticais.item3': 'Soluciones para la conservación y valorización del inmueble',
            'services.impermeabilizacao.title': 'Impermeabilización en General',
            'services.impermeabilizacao.desc': 'Protección contra filtraciones y humedad',
            'services.impermeabilizacao.item1': 'Protección contra filtraciones y humedad',
            'services.impermeabilizacao.item2': 'Tratamiento de losas, tejados y fachadas',
            'services.impermeabilizacao.item3': 'Aplicación de membranas impermeables',
            'services.gerais.title': 'Servicios Generales',
            'services.gerais.desc': 'Reparaciones, acabados y remodelaciones completas',
            'services.gerais.item1': 'Pequeñas reparaciones y acabados',
            'services.gerais.item2': 'Remodelaciones y mejoras en espacios diversos',
            'services.gerais.item3': 'Soluciones personalizadas para cada necesidad',
            'advantages.title': '¿Por qué elegir New Works?',
            'advantages.experiencia': 'Experiencia y Credibilidad - 4 años de actuación con excelencia',
            'advantages.equipe': 'Equipo Calificado - Profesionales especializados para cada servicio',
            'advantages.qualidade': 'Compromiso y Calidad - Materiales de alto estándar y técnicas innovadoras',
            'advantages.atendimento': 'Atención Personalizada - Soluciones a medida para cada cliente',
            'footer.social': 'Redes Sociales',
            'contact.title': 'Contacto',
            'services.pageTitle': 'Nuestros Servicios',
            'services.pageDesc': 'Conozca en detalle todos los servicios que ofrecemos con excelencia y profesionalismo',
            'works.title': 'Nuestras Obras',
            'videosBlog.title': 'Vídeos & Blog',
            'videosBlog.desc': 'Siga nuestros proyectos, consejos y novedades sobre construcción y remodelación',
            'videosBlog.videos': 'Vídeos',
            'videosBlog.blog': 'Blog',
            'videosBlog.video1.title': 'Nuestros Servicios en Acción',
            'videosBlog.video1.desc': 'Conozca nuestros servicios y vea cómo transformamos espacios',
            'videosBlog.video2.title': 'Proyectos Realizados',
            'videosBlog.video2.desc': 'Vea algunos de nuestros proyectos más recientes',
            'videosBlog.video3.title': 'Consejos de Construcción',
            'videosBlog.video3.desc': 'Consejos valiosos para su obra o remodelación',
            'videosBlog.recent': 'Reciente',
            'blog.post1.title': 'Cómo Elegir la Pintura Ideal',
            'blog.post1.desc': 'Guía completa para elegir la pintura perfecta para su proyecto',
            'blog.post2.title': 'Tendencias en Remodelación',
            'blog.post2.desc': 'Las principales tendencias para renovar su espacio',
            'blog.post3.title': 'Mantenimiento Preventivo',
            'blog.post3.desc': 'Importancia del mantenimiento preventivo en edificios',
            'blog.recent': 'Reciente',
            'contact.phone': '(351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Rua Padre Porfiri Alves,148r/c, 4480- Vila do Conde',
            'contact.button': 'Enviar Mensaje'
        },
        'en': {
            'nav.home': 'Home',
            'nav.servicos': 'Services',
            'nav.videos': 'Videos & Blog',
            'nav.contato': 'Contact',
            'nav.language': 'Language',
            'lang.pt': 'Português',
            'lang.es': 'Español',
            'lang.en': 'English',
            'hero.title': 'Construction and<br>Remodeling Excellence<br>New Works<br>Transforming Spaces<br>with Quality and<br>Professionalism',
            'about.title': 'Welcome to New Works<br>Construction and Remodeling',
            'about.description': 'With 4 years of experience and credibility, New Works stands out in the civil construction and remodeling sector, offering high-quality services and personalized solutions for each client. <br> <br>Our commitment is to transform spaces with professionalism, efficiency, and excellence.',
            'button.especialista': 'Talk to a specialist',
            'button.verServicos': 'View All Services',
            'services.title': 'Our Services',
            'services.intro': 'We offer a complete range of specialized services in civil construction and remodeling, always with excellence and commitment to quality.',
            'services.pintura.title': 'Residential and Commercial Painting',
            'services.pintura.desc': 'Interior and exterior painting with refined and durable finishes',
            'services.pintura.item1': 'Interior and exterior painting',
            'services.pintura.item2': 'Refined and durable finishes',
            'services.pintura.item3': 'Application of special paints and textures',
            'services.pladur.title': 'Pladur Works',
            'services.pladur.desc': 'Assembly of partitions, ceilings and customized solutions',
            'services.pladur.item1': 'Assembly of partitions and ceilings',
            'services.pladur.item2': 'False ceilings and plasterboard walls',
            'services.pladur.item3': 'Customized solutions for modern environments',
            'services.pichelaria.title': 'Plumbing (Piping and Hydraulics)',
            'services.pichelaria.desc': 'Installation and maintenance of pipes and hydraulic systems',
            'services.pichelaria.item1': 'Installation and maintenance of pipes',
            'services.pichelaria.item2': 'Repair of leaks and blockages',
            'services.pichelaria.item3': 'Water heating systems',
            'services.verticais.title': 'Verticals & Building Maintenance',
            'services.verticais.desc': 'Facade washing and specialized building maintenance',
            'services.verticais.item1': 'Washing of facades, tiles, and granites',
            'services.verticais.item2': 'Maintenance and repair of buildings',
            'services.verticais.item3': 'Solutions for the conservation and valorization of the property',
            'services.impermeabilizacao.title': 'General Waterproofing',
            'services.impermeabilizacao.desc': 'Protection against infiltrations and humidity',
            'services.impermeabilizacao.item1': 'Protection against infiltrations and humidity',
            'services.impermeabilizacao.item2': 'Treatment of slabs, roofs, and facades',
            'services.impermeabilizacao.item3': 'Application of waterproof membranes',
            'services.gerais.title': 'General Services',
            'services.gerais.desc': 'Repairs, finishes and complete remodeling',
            'services.gerais.item1': 'Small repairs and finishes',
            'services.gerais.item2': 'Remodeling and improvements in various spaces',
            'services.gerais.item3': 'Customized solutions for each need',
            'advantages.title': 'Why choose New Works?',
            'advantages.experiencia': 'Experience and Credibility - 4 years of excellent performance',
            'advantages.equipe': 'Qualified Team - Specialized professionals for each service',
            'advantages.qualidade': 'Commitment and Quality - High standard materials and innovative techniques',
            'advantages.atendimento': 'Personalized Service - Tailor-made solutions for each client',
            'footer.social': 'Social Media',
            'contact.title': 'Contact Us',
            'services.pageTitle': 'Our Services',
            'services.pageDesc': 'Learn in detail all the services we offer with excellence and professionalism',
            'works.title': 'Our Works',
            'videosBlog.title': 'Videos & Blog',
            'videosBlog.desc': 'Follow our projects, tips and news about construction and remodeling',
            'videosBlog.videos': 'Videos',
            'videosBlog.blog': 'Blog',
            'videosBlog.video1.title': 'Our Services in Action',
            'videosBlog.video1.desc': 'Learn about our services and see how we transform spaces',
            'videosBlog.video2.title': 'Completed Projects',
            'videosBlog.video2.desc': 'See some of our most recent projects',
            'videosBlog.video3.title': 'Construction Tips',
            'videosBlog.video3.desc': 'Valuable tips for your construction or remodeling',
            'videosBlog.recent': 'Recent',
            'blog.post1.title': 'How to Choose the Ideal Paint',
            'blog.post1.desc': 'Complete guide to choosing the perfect paint for your project',
            'blog.post2.title': 'Remodeling Trends',
            'blog.post2.desc': 'The main trends to renovate your space',
            'blog.post3.title': 'Preventive Maintenance',
            'blog.post3.desc': 'Importance of preventive maintenance in buildings',
            'blog.recent': 'Recent',
            'contact.phone': '(351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Rua Padre Porfiri Alves,148r/c, 4480- Vila do Conde',
            'contact.button': 'Send Message'
        }
    };

    // Dropdown de idiomas
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangFlag = document.getElementById('currentLangFlag');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
                localStorage.setItem('language', lang);
                langDropdown.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
    }

    // Função para atualizar a bandeira atual
    function updateCurrentFlag(lang) {
        if (currentLangFlag) {
            const flagMap = {
                'pt': './img/pt.png',
                'es': './img/es.png',
                'en': './img/en.png'
            };
            currentLangFlag.src = flagMap[lang] || flagMap['pt'];
        }
    }

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        updateCurrentFlag(lang);
        
        // Atualizar idioma ativo no mobile
        const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
        mobileLangOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Tornar função global para uso em outros scripts
    window.setLanguage = setLanguage;

    // Carregar idioma salvo
    const storedLanguage = localStorage.getItem('language');
    const initialLang = storedLanguage || 'pt';
    setLanguage(initialLang);

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros itens
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle do item atual
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
});
