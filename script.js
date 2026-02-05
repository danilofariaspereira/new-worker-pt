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
            'about.description': 'Com 15 anos de experiência e credibilidade, a New Works se destaca no setor da construção civil e remodelação, oferecendo serviços de alta qualidade e soluções personalizadas para cada cliente. <br> <br>Nosso compromisso é transformar espaços com profissionalismo, eficiência e excelência.',
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
            'advantages.item1.title': 'Experiência e Credibilidade',
            'advantages.item1.text': '4 anos de atuação com excelência no mercado de obras e remodelações. Trabalhamos com dedicação e profissionalismo, construindo uma reputação sólida baseada em resultados de qualidade e satisfação dos clientes.',
            'advantages.item2.title': 'Equipe Qualificada',
            'advantages.item2.text': 'Profissionais especializados para cada serviço, com formação técnica e experiência comprovada. Nossa equipe é treinada continuamente para oferecer as melhores soluções e garantir a excelência em cada projeto.',
            'advantages.item3.title': 'Compromisso e Qualidade',
            'advantages.item3.text': 'Materiais de alto padrão e técnicas inovadoras em todos os nossos projetos. Utilizamos apenas produtos certificados e métodos modernos, garantindo durabilidade, segurança e acabamento impecável.',
            'advantages.item4.title': 'Atendimento Personalizado',
            'advantages.item4.text': 'Soluções sob medida para cada cliente, entendendo suas necessidades específicas e oferecendo projetos personalizados. Do planejamento à execução, acompanhamos cada etapa com atenção e cuidado.',
            'footer.social': 'Redes Sociais',
            'footer.copyright': '@ Todos os direitos a New Works, obras e remodelações',
            'footer.createdBy': 'Criado por',
            'contact.title': 'Entre em Contato',
            'contact.addressTitle': 'Endereço',
            'contact.routeButton': 'Ver Rota',
            'services.pageTitle': 'Nossos Serviços',
            'services.pageDesc': 'Conheça em detalhes todos os serviços que oferecemos com excelência e profissionalismo',
            'works.title': 'Nossas Obras',
            'videosBlog.title': 'Vídeos & Blog',
            'videosBlog.desc': 'Acompanhe nossos projetos, dicas e novidades sobre construção e remodelação',
            'services.bannerTitle': 'Serviços de Obras e Remodelações Profissionais',
            'services.bannerDesc': 'Transformamos seu espaço com excelência, qualidade e compromisso. Especialistas em pintura, pladur, pichelaria, manutenção predial e impermeabilização em Vila do Conde, Porto e região.',
            'videosBlog.bannerTitle': 'Vídeos e Blog',
            'videosBlog.bannerDesc': 'Conheça nosso trabalho através de vídeos e artigos sobre obras, remodelações e o dia-a-dia da New Works em Vila do Conde, Porto e região.',
            'videosBlog.videos': 'Nossos Vídeos',
            'videosBlog.blog': 'Artigos do Blog',
            'videosBlog.video1.title': 'Serviços Especializados - New Works',
            'videosBlog.video1.desc': 'Conheça nossos serviços especializados em pintura, pladur, pichelaria e muito mais em Vila do Conde e região.',
            'videosBlog.video2.title': 'Qualidade e Profissionalismo - New Works',
            'videosBlog.video2.desc': 'Veja como a New Works trabalha com qualidade, profissionalismo e compromisso em cada projeto de obras e remodelações.',
            'videosBlog.video3.title': 'Transformação de Espaços - New Works',
            'videosBlog.video3.desc': 'Descubra como transformamos espaços com excelência, utilizando materiais de alta qualidade e técnicas inovadoras.',
            'videosBlog.video4.title': 'Dia-a-dia New Works - Obras em Andamento',
            'videosBlog.video4.desc': 'Conheça um pouco do nosso trabalho diário e veja como transformamos espaços com qualidade e profissionalismo.',
            'videosBlog.video5.title': 'Projetos de Remodelação - Antes e Depois',
            'videosBlog.video5.desc': 'Veja a transformação completa de espaços através dos nossos projetos de remodelação em Vila do Conde e região.',
            'videosBlog.video6.title': 'Técnicas e Processos - New Works em Ação',
            'videosBlog.video6.desc': 'Conheça as técnicas e processos que utilizamos para garantir excelência em cada projeto de obras e remodelações.',
            'videosBlog.recent': 'Recente',
            'blog.post1.title': 'Dia-a-dia New Works: Transformando Ambientes com Pintura de Qualidade',
            'blog.post1.desc': 'No dia-a-dia da New Works, cada projeto de pintura é tratado com atenção especial. Nossa equipe trabalha com materiais de alta qualidade e técnicas modernas para garantir acabamentos perfeitos e duradouros. Veja como transformamos espaços residenciais e comerciais em Vila do Conde e região.',
            'blog.post2.title': 'Obras em Pladur: Modernidade e Funcionalidade em Cada Projeto',
            'blog.post2.desc': 'A New Works especializa-se em trabalhos com pladur, criando divisórias, forros e soluções personalizadas que combinam estética moderna com funcionalidade. Nossos profissionais trabalham com precisão para entregar resultados que superam expectativas, sempre respeitando prazos e orçamentos.',
            'blog.post3.title': 'Manutenção Predial: Cuidado Contínuo para Valorização do Imóvel',
            'blog.post3.desc': 'A manutenção predial é essencial para preservar e valorizar seu imóvel. Na New Works, oferecemos serviços completos de manutenção, incluindo lavagem de fachadas, reparos e impermeabilização. Nossa experiência de 4 anos garante soluções eficientes e duradouras para edifícios em toda a região do Porto.',
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
            'advantages.item1.title': 'Experiencia y Credibilidad',
            'advantages.item1.text': '4 años de actuación con excelencia en el mercado de obras y remodelaciones. Trabajamos con dedicación y profesionalismo, construyendo una reputación sólida basada en resultados de calidad y satisfacción de los clientes.',
            'advantages.item2.title': 'Equipo Calificado',
            'advantages.item2.text': 'Profesionales especializados para cada servicio, con formación técnica y experiencia comprobada. Nuestro equipo es entrenado continuamente para ofrecer las mejores soluciones y garantizar la excelencia en cada proyecto.',
            'advantages.item3.title': 'Compromiso y Calidad',
            'advantages.item3.text': 'Materiales de alto estándar y técnicas innovadoras en todos nuestros proyectos. Utilizamos solo productos certificados y métodos modernos, garantizando durabilidad, seguridad y un acabado impecable.',
            'advantages.item4.title': 'Atención Personalizada',
            'advantages.item4.text': 'Soluciones a medida para cada cliente, entendiendo sus necesidades específicas y ofreciendo proyectos personalizados. Desde la planificación hasta la ejecución, acompañamos cada etapa con atención y cuidado.',
            'footer.social': 'Redes Sociales',
            'footer.copyright': '@ Todos los derechos a New Works, obras y remodelaciones',
            'footer.createdBy': 'Creado por',
            'contact.title': 'Contacto',
            'contact.addressTitle': 'Dirección',
            'contact.routeButton': 'Ver Ruta',
            'services.pageTitle': 'Nuestros Servicios',
            'services.pageDesc': 'Conozca en detalle todos los servicios que ofrecemos con excelencia y profesionalismo',
            'works.title': 'Nuestras Obras',
            'videosBlog.title': 'Vídeos & Blog',
            'videosBlog.desc': 'Siga nuestros proyectos, consejos y novedades sobre construcción y remodelación',
            'services.bannerTitle': 'Servicios Profesionales de Obras y Remodelaciones',
            'services.bannerDesc': 'Transformamos su espacio con excelencia, calidad y compromiso. Especialistas en pintura, pladur, fontanería, mantenimiento edilicio e impermeabilización en Vila do Conde, Oporto y región.',
            'videosBlog.bannerTitle': 'Vídeos y Blog',
            'videosBlog.bannerDesc': 'Conozca nuestro trabajo a través de vídeos y artículos sobre obras, remodelaciones y el día a día de New Works en Vila do Conde, Oporto y región.',
            'videosBlog.videos': 'Nuestros Vídeos',
            'videosBlog.blog': 'Artículos del Blog',
            'videosBlog.video1.title': 'Servicios Especializados - New Works',
            'videosBlog.video1.desc': 'Conozca nuestros servicios especializados en pintura, pladur, fontanería y mucho más en Vila do Conde y región.',
            'videosBlog.video2.title': 'Calidad y Profesionalismo - New Works',
            'videosBlog.video2.desc': 'Vea cómo New Works trabaja con calidad, profesionalismo y compromiso en cada proyecto de obras y remodelaciones.',
            'videosBlog.video3.title': 'Transformación de Espacios - New Works',
            'videosBlog.video3.desc': 'Descubra cómo transformamos espacios con excelencia, utilizando materiales de alta calidad y técnicas innovadoras.',
            'videosBlog.video4.title': 'Día a Día New Works - Obras en Curso',
            'videosBlog.video4.desc': 'Conozca un poco de nuestro trabajo diario y vea cómo transformamos espacios con calidad y profesionalismo.',
            'videosBlog.video5.title': 'Proyectos de Remodelación - Antes y Después',
            'videosBlog.video5.desc': 'Vea la transformación completa de espacios a través de nuestros proyectos de remodelación en Vila do Conde y región.',
            'videosBlog.video6.title': 'Técnicas y Procesos - New Works en Acción',
            'videosBlog.video6.desc': 'Conozca las técnicas y procesos que utilizamos para garantizar excelencia en cada proyecto de obras y remodelaciones.',
            'videosBlog.recent': 'Reciente',
            'blog.post1.title': 'Día a Día New Works: Transformando Ambientes con Pintura de Calidad',
            'blog.post1.desc': 'En el día a día de New Works, cada proyecto de pintura se trata con especial atención. Nuestro equipo trabaja con materiales de alta calidad y técnicas modernas para garantizar acabados perfectos y duraderos. Vea cómo transformamos espacios residenciales y comerciales en Vila do Conde y región.',
            'blog.post2.title': 'Obras en Pladur: Modernidad y Funcionalidad en Cada Proyecto',
            'blog.post2.desc': 'New Works se especializa en trabajos con pladur, creando divisiones, techos y soluciones personalizadas que combinan estética moderna con funcionalidad. Nuestros profesionales trabajan con precisión para entregar resultados que superan expectativas, siempre respetando plazos y presupuestos.',
            'blog.post3.title': 'Mantenimiento de Edificios: Cuidado Continuo para la Valoración del Inmueble',
            'blog.post3.desc': 'El mantenimiento de edificios es esencial para preservar y valorizar su inmueble. En New Works, ofrecemos servicios completos de mantenimiento, incluyendo lavado de fachadas, reparaciones e impermeabilización. Nuestra experiencia de 4 años garantiza soluciones eficientes y duraderas para edificios en toda la región de Oporto.',
            'blog.recent': 'Reciente',
            'contact.phone': '(351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Calle Padre Porfiri Alves, 148 r/c, 4480- Vila do Conde',
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
            'advantages.item1.title': 'Experience and Credibility',
            'advantages.item1.text': '4 years of excellence in the construction and remodeling market. We work with dedication and professionalism, building a solid reputation based on quality results and customer satisfaction.',
            'advantages.item2.title': 'Qualified Team',
            'advantages.item2.text': 'Specialized professionals for each service, with technical training and proven experience. Our team is continuously trained to offer the best solutions and ensure excellence in every project.',
            'advantages.item3.title': 'Commitment and Quality',
            'advantages.item3.text': 'High standard materials and innovative techniques in all our projects. We use only certified products and modern methods, ensuring durability, safety and a flawless finish.',
            'advantages.item4.title': 'Personalized Service',
            'advantages.item4.text': 'Tailor-made solutions for each client, understanding their specific needs and offering customized projects. From planning to execution, we closely follow each stage with attention and care.',
            'footer.social': 'Social Media',
            'footer.copyright': '@ All rights to New Works, construction and remodeling',
            'footer.createdBy': 'Created by',
            'contact.title': 'Contact Us',
            'contact.addressTitle': 'Address',
            'contact.routeButton': 'View Route',
            'services.pageTitle': 'Our Services',
            'services.pageDesc': 'Learn in detail all the services we offer with excellence and professionalism',
            'works.title': 'Our Works',
            'videosBlog.title': 'Videos & Blog',
            'videosBlog.desc': 'Follow our projects, tips and news about construction and remodeling',
            'services.bannerTitle': 'Professional Construction and Remodeling Services',
            'services.bannerDesc': 'We transform your space with excellence, quality and commitment. Specialists in painting, plasterboard, plumbing, building maintenance and waterproofing in Vila do Conde, Porto and surrounding areas.',
            'videosBlog.bannerTitle': 'Videos and Blog',
            'videosBlog.bannerDesc': 'Discover our work through videos and articles about construction, remodeling and the daily life of New Works in Vila do Conde, Porto and surrounding areas.',
            'videosBlog.videos': 'Our Videos',
            'videosBlog.blog': 'Blog Articles',
            'videosBlog.video1.title': 'Specialized Services - New Works',
            'videosBlog.video1.desc': 'Get to know our specialized services in painting, plasterboard, plumbing and much more in Vila do Conde and surrounding areas.',
            'videosBlog.video2.title': 'Quality and Professionalism - New Works',
            'videosBlog.video2.desc': 'See how New Works works with quality, professionalism and commitment in every construction and remodeling project.',
            'videosBlog.video3.title': 'Space Transformation - New Works',
            'videosBlog.video3.desc': 'Discover how we transform spaces with excellence, using high-quality materials and innovative techniques.',
            'videosBlog.video4.title': 'New Works Daily Routine - Ongoing Projects',
            'videosBlog.video4.desc': 'Get to know a bit of our daily work and see how we transform spaces with quality and professionalism.',
            'videosBlog.video5.title': 'Remodeling Projects - Before and After',
            'videosBlog.video5.desc': 'See the complete transformation of spaces through our remodeling projects in Vila do Conde and surrounding areas.',
            'videosBlog.video6.title': 'Techniques and Processes - New Works in Action',
            'videosBlog.video6.desc': 'Discover the techniques and processes we use to ensure excellence in every construction and remodeling project.',
            'videosBlog.recent': 'Recent',
            'blog.post1.title': 'New Works Daily Routine: Transforming Spaces with Quality Painting',
            'blog.post1.desc': 'In New Works’ daily routine, each painting project is handled with special attention. Our team works with high-quality materials and modern techniques to ensure perfect and long-lasting finishes. See how we transform residential and commercial spaces in Vila do Conde and surrounding areas.',
            'blog.post2.title': 'Plasterboard Works: Modernity and Functionality in Every Project',
            'blog.post2.desc': 'New Works specializes in plasterboard works, creating partitions, ceilings and customized solutions that combine modern aesthetics and functionality. Our professionals work with precision to deliver results that exceed expectations, always respecting deadlines and budgets.',
            'blog.post3.title': 'Building Maintenance: Ongoing Care to Enhance Your Property',
            'blog.post3.desc': 'Building maintenance is essential to preserve and enhance your property. At New Works, we offer complete maintenance services, including facade washing, repairs and waterproofing. Our 4 years of experience ensure efficient and long-lasting solutions for buildings throughout the Porto region.',
            'blog.recent': 'Recent',
            'contact.phone': '(351) 934-106-582',
            'contact.email': 'newworks.obras@gmail.com',
            'contact.address': 'Padre Porfiri Alves Street, 148 r/c, 4480- Vila do Conde',
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
