document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.language-switcher button');
    const translations = {
        'pt': {
            'nav.sobre': 'Sobre nós',
            'nav.servicos': 'Serviços',
            'nav.vantagens': 'Por que nos escolher?',
            'nav.contato': 'Contato',
            'hero.title': 'Seja bem-vindo à<br>New Works!<br>Excelência em<br>obras e<br>remodelações para<br>transformar seu<br>ambiente.',
            'about.title': 'Bem-vindo à New Works<br>Obras e Remodelações',
            'about.description': 'Com 4 anos de experiência e credibilidade, a New Works se destaca no setor da construção civil e remodelação, oferecendo serviços de alta qualidade e soluções personalizadas para cada cliente. Nosso compromisso é transformar espaços com profissionalismo, eficiência e excelência.',
            'button.especialista': 'Falar com um especialista',
            'services.title': 'Nossos Serviços',
            'services.pintura.title': '🎨 Pintura Residencial e Comercial',
            'services.pintura.item1': '✔ Pintura interna e externa',
            'services.pintura.item2': '✔ Acabamentos refinados e duradouros',
            'services.pintura.item3': '✔ Aplicação de tintas especiais e texturas',
            'services.pladur.title': '🏗️ Trabalhos em Pladur',
            'services.pladur.item1': '✔ Montagem de divisórias e forros',
            'services.pladur.item2': '✔ Tetos falsos e paredes em gesso cartonado',
            'services.pladur.item3': '✔ Soluções personalizadas para ambientes modernos',
            'services.pichelaria.title': '🚰 Pichelaria (Canalização e Hidráulica)',
            'services.pichelaria.item1': '✔ Instalação e manutenção de tubulações',
            'services.pichelaria.item2': '✔ Reparação de vazamentos e entupimentos',
            'services.pichelaria.item3': '✔ Sistemas de aquecimento de água',
            'services.verticais.title': '🛠️ Verticais & Manutenção Predial',
            'services.verticais.item1': '✔ Lavagem de fachadas, pastilhas e granitos',
            'services.verticais.item2': '✔ Manutenção e reparação de edifícios',
            'services.verticais.item3': '✔ Soluções para conservação e valorização do imóvel',
            'services.impermeabilizacao.title': '🛡️ Impermeabilização em Geral',
            'services.impermeabilizacao.item1': '✔ Proteção contra infiltrações e umidade',
            'services.impermeabilizacao.item2': '✔ Tratamento de lajes, telhados e fachadas',
            'services.impermeabilizacao.item3': '✔ Aplicação de membranas impermeáveis',
            'services.gerais.title': '🔧 Serviços Gerais',
            'services.gerais.item1': '✔ Pequenos reparos e acabamentos',
            'services.gerais.item2': '✔ Remodelações e melhorias em espaços diversos',
            'services.gerais.item3': '✔ Soluções personalizadas para cada necessidade',
            'advantages.title': 'Por que escolher a New Works?',
            'advantages.experiencia': 'Experiência e Credibilidade - 4 anos de atuação com excelência',
            'advantages.equipe': 'Equipe Qualificada - Profissionais especializados para cada serviço',
            'advantages.qualidade': 'Compromisso com a Qualidade - Materiais de alto padrão e técnicas inovadoras',
            'advantages.atendimento': 'Atendimento Personalizado - Soluções sob medida para cada cliente',
            'footer.copyright': '&copy; 2023 New Works. Todos os direitos reservados.',
            'contact.title': 'Entre em Contato',
            'contact.phone': 'Telefone: (351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Endereço: Rua Padre Porfiri Alves,148r/c, 4480- Vila do Conde',
            'contact.button': 'Enviar Mensagem'
        },
        'es': {
            'nav.sobre': 'Sobre nosotros',
            'nav.servicos': 'Servicios',
            'nav.vantagens': '¿Por qué elegirnos?',
            'nav.contato': 'Contacto',
            'hero.title': '¡Bienvenido a<br>New Works!<br>Excelencia en<br>obras y<br>remodelaciones para<br>transformar su<br>ambiente.',
            'about.title': 'Bienvenido a New Works<br>Obras y Remodelaciones',
            'about.description': 'Con 4 años de experiencia y credibilidad, New Works se destaca en el sector de la construcción civil y remodelación, ofreciendo servicios de alta calidad y soluciones personalizadas para cada cliente. Nuestro compromiso es transformar espacios con profesionalismo, eficiencia y excelencia.',
            'button.especialista': 'Hablar con un especialista',
            'services.title': 'Nuestros Servicios',
            'services.pintura.title': '🎨 Pintura Residencial y Comercial',
            'services.pintura.item1': '✔ Pintura interior y exterior',
            'services.pintura.item2': '✔ Acabados refinados y duraderos',
            'services.pintura.item3': '✔ Aplicación de pinturas especiales y texturas',
            'services.pladur.title': '🏗️ Trabajos en Pladur',
            'services.pladur.item1': '✔ Montaje de divisiones y techos',
            'services.pladur.item2': '✔ Falsos techos y paredes de cartón yeso',
            'services.pladur.item3': '✔ Soluciones personalizadas para ambientes modernos',
            'services.pichelaria.title': '🚰 Fontanería (Canalización e Hidráulica)',
            'services.pichelaria.item1': '✔ Instalación y mantenimiento de tuberías',
            'services.pichelaria.item2': '✔ Reparación de fugas y atascos',
            'services.pichelaria.item3': '✔ Sistemas de calentamiento de agua',
            'services.verticais.title': '🛠️ Verticales & Mantenimiento Edilicio',
            'services.verticais.item1': '✔ Lavado de fachadas, azulejos y granitos',
            'services.verticais.item2': '✔ Mantenimiento y reparación de edificios',
            'services.verticais.item3': '✔ Soluciones para la conservación y valorización del inmueble',
            'services.impermeabilizacao.title': '🛡️ Impermeabilización en General',
            'services.impermeabilizacao.item1': '✔ Protección contra filtraciones y humedad',
            'services.impermeabilizacao.item2': '✔ Tratamiento de losas, tejados y fachadas',
            'services.impermeabilizacao.item3': '✔ Aplicación de membranas impermeables',
            'services.gerais.title': '🔧 Servicios Generales',
            'services.gerais.item1': '✔ Pequeñas reparaciones y acabados',
            'services.gerais.item2': '✔ Remodelaciones y mejoras en espacios diversos',
            'services.gerais.item3': '✔ Soluciones personalizadas para cada necesidad',
            'advantages.title': '¿Por qué elegir New Works?',
            'advantages.experiencia': 'Experiencia y Credibilidad - 4 años de actuación con excelencia',
            'advantages.equipe': 'Equipo Calificado - Profesionales especializados para cada servicio',
            'advantages.qualidade': 'Compromiso con la Calidad - Materiales de alto estándar y técnicas innovadoras',
            'advantages.atendimento': 'Atención Personalizada - Soluciones a medida para cada cliente',
            'footer.copyright': '&copy; 2023 New Works. Todos los derechos reservados.',
            'contact.title': 'Contacto',
            'contact.phone': 'Teléfono: (XX) XXXXX-XXXX',
            'contact.email': 'Correo electrónico: contacto@newworks.com.br',
            'contact.address': 'Dirección: Calle Ejemplo, 123 - Barrio, Ciudad - Provincia',
            'contact.button': 'Enviar Mensaje'
        },
        'en': {
            'nav.sobre': 'About us',
            'nav.servicos': 'Services',
            'nav.vantagens': 'Why choose us?',
            'nav.contato': 'Contact',
            'hero.title': 'Welcome to<br>New Works!<br>Excellence in<br>construction and<br>remodeling to<br>transform your<br>environment.',
            'about.title': 'Welcome to New Works<br>Construction and Remodeling',
            'about.description': 'With 4 years of experience and credibility, New Works stands out in the civil construction and remodeling sector, offering high-quality services and personalized solutions for each client. Our commitment is to transform spaces with professionalism, efficiency, and excellence.',
            'button.especialista': 'Talk to a specialist',
            'services.title': 'Our Services',
            'services.pintura.title': '🎨 Residential and Commercial Painting',
            'services.pintura.item1': '✔ Interior and exterior painting',
            'services.pintura.item2': '✔ Refined and durable finishes',
            'services.pintura.item3': '✔ Application of special paints and textures',
            'services.pladur.title': '🏗️ Pladur Works',
            'services.pladur.item1': '✔ Assembly of partitions and ceilings',
            'services.pladur.item2': '✔ False ceilings and plasterboard walls',
            'services.pladur.item3': '✔ Customized solutions for modern environments',
            'services.pichelaria.title': '🚰 Plumbing (Piping and Hydraulics)',
            'services.pichelaria.item1': '✔ Installation and maintenance of pipes',
            'services.pichelaria.item2': '✔ Repair of leaks and blockages',
            'services.pichelaria.item3': '✔ Water heating systems',
            'services.verticais.title': '🛠️ Verticals & Building Maintenance',
            'services.verticais.item1': '✔ Washing of facades, tiles, and granites',
            'services.verticais.item2': '✔ Maintenance and repair of buildings',
            'services.verticais.item3': '✔ Solutions for the conservation and valorization of the property',
            'services.impermeabilizacao.title': '🛡️ General Waterproofing',
            'services.impermeabilizacao.item1': '✔ Protection against infiltrations and humidity',
            'services.impermeabilizacao.item2': '✔ Treatment of slabs, roofs, and facades',
            'services.impermeabilizacao.item3': '✔ Application of waterproof membranes',
            'services.gerais.title': '🔧 General Services',
            'services.gerais.item1': '✔ Small repairs and finishes',
            'services.gerais.item2': '✔ Remodeling and improvements in various spaces',
            'services.gerais.item3': '✔ Customized solutions for each need',
            'advantages.title': 'Why choose New Works?',
            'advantages.experiencia': 'Experience and Credibility - 4 years of excellent performance',
            'advantages.equipe': 'Qualified Team - Specialized professionals for each service',
            'advantages.qualidade': 'Commitment to Quality - High standard materials and innovative techniques',
            'advantages.atendimento': 'Personalized Service - Tailor-made solutions for each client',
            'footer.copyright': '&copy; 2023 New Works. All rights reserved.',
            'contact.title': 'Contact Us',
            'contact.phone': 'Phone: (XX) XXXXX-XXXX',
            'contact.email': 'Email: contact@newworks.com.br',
            'contact.address': 'Address: 123 Example Street - Neighborhood, City - State',
            'contact.button': 'Send Message'
        }
    };

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    const storedLanguage = localStorage.getItem('language');
    const initialLang = storedLanguage || 'pt';
    setLanguage(initialLang);

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        langButtons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`.language-switcher button[data-lang="${lang}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
    const navLinksA = document.querySelectorAll('.nav-links li a');

    console.log('toggleButton:', toggleButton);
    console.log('navLinks:', navLinks);

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', function() {
            console.log('Dentro do clique do botão hambúrguer - this:', this);
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            } else {
                navLinks.classList.add('active');
            }
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
            console.log('Botão hambúrguer clicado. navLinks.classList:', navLinks.classList);
            console.log('Botão hambúrguer clicado. toggleButton.classList:', this.classList);
        });
    }
});