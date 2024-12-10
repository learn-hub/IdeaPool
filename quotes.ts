const quotes = {
  [languages.en]: [
    {
      author: "Albert Einstein",
      text: "Pure mathematics is, in its way, the poetry of logical ideas.",
      source: "Albert Einstein",
    },
    {
      author: "Fact",
      text: "Students learn math more effectively when they see its relevance to real-life problems.",
      source: "Boaler, J. (2016). Mathematical Mindsets. Jossey-Bass.",
    },
    {
      author: "Galileo Galilei",
      text: "Mathematics is the language in which God has written the universe.",
      source: "Galileo Galilei",
    },
    {
      author: "Fact",
      text: "Active learning techniques in math classrooms can improve test scores by an average of 6%.",
      source:
        "Freeman, S. et al. (2014). Active learning increases student performance in science, engineering, and mathematics. PNAS.",
    },
    {
      author: "Paul Lockhart",
      text: "The art of mathematics is the art of asking meaningful questions.",
      source:
        "Lockhart, P. (2009). A Mathematician's Lament. Bellevue Literary Press.",
    },
    {
      author: "Fact",
      text: "Collaborative group work in math enhances problem-solving skills and retention.",
      source: "Hattie, J. (2009). Visible Learning. Routledge.",
    },
    {
      author: "Aristotle",
      text: "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful.",
      source: "Aristotle",
    },
    {
      author: "Fact",
      text: "Students exposed to growth mindset interventions in math are 40% more likely to achieve higher grades.",
      source:
        "Dweck, C. (2006). Mindset: The New Psychology of Success. Ballantine Books.",
    },
    {
      author: "Henri Poincaré",
      text: "Mathematics is the art of giving the same name to different things.",
      source: "Henri Poincaré",
    },
    {
      author: "Fact",
      text: "Using manipulatives in elementary math lessons improves conceptual understanding.",
      source:
        "Clements, D. H. (1999). Concrete manipulatives, concrete ideas. Contemporary Issues in Early Childhood.",
    },
    {
      author: "Blaise Pascal",
      text: "Mathematics has a kind of infinite charm for the mind.",
      source: "Blaise Pascal",
    },
    {
      author: "Fact",
      text: "Integrating math with other disciplines, like art or science, boosts engagement and understanding.",
      source:
        "Bequette, J. W., & Bequette, M. B. (2012). A place for STEAM. Art Education.",
    },
    {
      author: "Carl Friedrich Gauss",
      text: "Mathematics is the queen of the sciences.",
      source: "Carl Friedrich Gauss",
    },
    {
      author: "Fact",
      text: "Visual aids in math instruction can increase student performance by up to 29%.",
      source:
        "Mayer, R. E. (2001). Multimedia Learning. Cambridge University Press.",
    },
    {
      author: "Sofia Kovalevskaya",
      text: "It is impossible to be a mathematician without being a poet in soul.",
      source: "Sofia Kovalevskaya",
    },
    {
      author: "Fact",
      text: "Real-world applications of math make students twice as likely to retain information.",
      source:
        "Willingham, D. T. (2009). Why Don't Students Like School? Jossey-Bass.",
    },
    {
      author: "Andrew Wiles",
      text: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
      source: "Andrew Wiles",
    },
    {
      author: "Fact",
      text: "Integrating storytelling into math lessons improves comprehension and engagement.",
      source:
        "Zazkis, R., & Liljedahl, P. (2009). Teaching Mathematics as Storytelling. Sense Publishers.",
    },
    {
      author: "Bertrand Russell",
      text: "Mathematics, rightly viewed, possesses not only truth but supreme beauty.",
      source: "Bertrand Russell",
    },
    {
      author: "Fact",
      text: "Gamification in math education can improve engagement by 75%.",
      source:
        "Hamari, J., Koivisto, J., & Sarsa, H. (2014). Does gamification work? HICSS.",
    },
    {
      author: "G. H. Hardy",
      text: "A mathematician, like a painter or poet, is a maker of patterns.",
      source: "G. H. Hardy",
    },
    {
      author: "Leonardo da Vinci",
      text: "No human investigation can be called real science if it cannot be demonstrated mathematically.",
      source: "Leonardo da Vinci",
    },
    {
      author: "Niels Bohr",
      text: "Your theory is crazy, but it's not crazy enough to be true.",
      source: "Niels Bohr",
    },
    {
      author: "Srinivasa Ramanujan",
      text: "An equation means nothing to me unless it expresses a thought of God.",
      source: "Srinivasa Ramanujan",
    },
    {
      author: "Paul Erdős",
      text: "A mathematician is a device for turning coffee into theorems.",
      source: "Attributed to Paul Erdős",
    },
    {
      author: "Benjamin Franklin",
      text: "An investment in knowledge pays the best interest.",
      source: "Benjamin Franklin",
    },
    {
      author: "Danica McKellar",
      text: "Math is like going to the gym for your brain. It sharpens your mind.",
      source: "Danica McKellar",
    },
    {
      author: "Bertrand Russell",
      text: "The study of mathematics is, if an unworthy, at least a harmless and innocent occupation.",
      source: "Bertrand Russell",
    },
    {
      author: "Eugene Wigner",
      text: "The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift.",
      source: "Eugene Wigner",
    },
    {
      author: "John Locke",
      text: "Mathematics is a way to settle in the mind a habit of reasoning.",
      source: "John Locke",
    },
    {
      author: "Simone Weil",
      text: "The beauty of mathematics only shows itself to more patient followers.",
      source: "Simone Weil",
    },
    {
      author: "Marcus du Sautoy",
      text: "Mathematics is the tool we use to unveil the hidden patterns of the world.",
      source: "Marcus du Sautoy",
    },
    {
      author: "Martin Gardner",
      text: "Mathematics is not only real, but it is the only reality.",
      source: "Martin Gardner",
    },
    {
      author: "David Hilbert",
      text: "We must know. We will know.",
      source: "David Hilbert",
    },
    {
      author: "Friedrich Nietzsche",
      text: "The essence of all beautiful art, all great art, is gratitude. Mathematics is the most grateful of all.",
      source: "Friedrich Nietzsche",
    },
    {
      author: "Jacques Hadamard",
      text: "The shortest path between two truths in the real domain passes through the complex domain.",
      source: "Jacques Hadamard",
    },
    {
      author: "Carl Sagan",
      text: "If you wish to make an apple pie from scratch, you must first invent the universe.",
      source: "Carl Sagan",
    },
    {
      author: "Elbert Hubbard",
      text: "Genius is the ability to reduce the complicated to the simple.",
      source: "Elbert Hubbard",
    },
    {
      author: "Stephen Hawking",
      text: "One cannot really argue with a mathematical theorem.",
      source: "Stephen Hawking",
    },
    {
      author: "Richard Courant",
      text: "Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection.",
      source: "Richard Courant",
    },
    {
      author: "Fact",
      text: "Students who receive positive reinforcement for effort in math outperform peers who are only praised for correct answers.",
      source:
        "Mueller, C. M., & Dweck, C. S. (1998). Praise for intelligence can undermine motivation. Journal of Personality and Social Psychology.",
    },
    {
      author: "Hypatia",
      text: "Reserve your right to think, for even to think wrongly is better than not to think at all.",
      source: "Hypatia of Alexandria",
    },
    {
      author: "Fact",
      text: "Math anxiety can be reduced by short expressive writing exercises before exams.",
      source:
        "Beilock, S. L., & Ramirez, G. (2011). Writing about testing worries boosts exam performance. Science.",
    },
    {
      author: "George Polya",
      text: "Mathematics consists of proving the most obvious thing in the least obvious way.",
      source: "George Polya",
    },
    {
      author: "Fact",
      text: "Project-based learning in math increases problem-solving skills by 35%.",
      source:
        "Thomas, J. W. (2000). A review of research on project-based learning. Autodesk Foundation.",
    },
    {
      author: "William Paul Thurston",
      text: "Mathematics is not about numbers, equations, computations, or algorithms; it is about understanding.",
      source: "William Paul Thurston",
    },
    {
      author: "Fact",
      text: "Interactive whiteboards in math classes enhance engagement and retention by up to 20%.",
      source:
        "Smith, H. J., et al. (2005). Interactive whiteboards and student engagement. Learning, Media, and Technology.",
    },
    {
      author: "Rene Descartes",
      text: "Each problem that I solved became a rule which served afterwards to solve other problems.",
      source: "Rene Descartes",
    },
    {
      author: "Fact",
      text: "Scaffolded instruction helps students achieve mastery of complex mathematical concepts.",
      source:
        "Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes.",
    },
    {
      author: "David Hilbert",
      text: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.",
      source: "David Hilbert",
    },
    {
      author: "Fact",
      text: "Students who verbalize their thought processes during problem-solving are 50% more likely to find correct solutions.",
      source:
        "Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P., & Glaser, R. (1989). Self-explanations: How students study and use examples in learning. Cognitive Science.",
    },
    {
      author: "Fact",
      text: "Incorporating math puzzles into lessons improves logical reasoning and perseverance.",
      source:
        "Schoenfeld, A. H. (1985). Mathematical Problem Solving. Academic Press.",
    },
    {
      author: "Fact",
      text: "Math intervention programs reduce dropout rates by up to 10%.",
      source:
        "Slavin, R. E., & Lake, C. (2008). Effective programs in elementary mathematics. Best Evidence Encyclopedia.",
    },
    {
      author: "Archimedes",
      text: "Give me a place to stand, and I will move the earth.",
      source: "Archimedes",
    },
    {
      author: "Fact",
      text: "Students exposed to visual proofs develop better comprehension of geometric concepts.",
      source:
        "Stylianou, D. A. (2002). On the interaction of visualization and analysis. International Journal of Mathematical Education in Science and Technology.",
    },
    {
      author: "Maria Montessori",
      text: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'",
      source: "Maria Montessori",
    },
    {
      author: "Fact",
      text: "Using real-world simulations in math improves engagement and application skills.",
      source:
        "Shute, V. J., & Ventura, M. (2013). Stealth Assessment in Digital Games. MIT Press.",
    },
    {
      author: "Fact",
      text: "Girls perform equally as well as boys in math when cultural biases are removed.",
      source:
        "Hyde, J. S., & Mertz, J. E. (2009). Gender, culture, and mathematics performance. PNAS.",
    },
    {
      author: "Fact",
      text: "Math teachers who model curiosity and enthusiasm see increased student interest in STEM fields.",
      source:
        "Maltese, A. V., & Tai, R. H. (2010). Eyeballs in the Fridge: Sources of Early Interest in Science. International Journal of Science Education.",
    },
    {
      author: "Fact",
      text: "Integrating peer teaching into math classes can improve achievement by 20%.",
      source:
        "Topping, K. J. (2005). Trends in Peer Learning. Educational Psychology.",
    },
    {
      author: "Ada Lovelace",
      text: "The science of operations, as derived from mathematics, is a science of itself, and has its own abstract truth and value.",
      source: "Ada Lovelace",
    },
    {
      author: "Fact",
      text: "Students who discuss math problems with peers achieve deeper conceptual understanding.",
      source:
        "Mercer, N., & Sams, C. (2006). Teaching children how to use language to solve maths problems. Language and Education.",
    },
    {
      author: "John von Neumann",
      text: "In mathematics, you don’t understand things. You just get used to them.",
      source: "John von Neumann",
    },
    {
      author: "Fact",
      text: "Integrating humor into math lessons enhances memory retention and reduces math anxiety.",
      source:
        "Banas, J. A., Dunbar, N., Rodriguez, D., & Liu, S. J. (2011). A review of humor in educational settings. Communication Education.",
    },
    {
      author: "Isaac Newton",
      text: "If I have seen further it is by standing on the shoulders of Giants.",
      source: "Isaac Newton",
    },
    {
      author: "Fact",
      text: "Math teachers who encourage mistakes as learning opportunities see improved student persistence.",
      source:
        "Boaler, J. (2015). The Role of Mistakes in Learning Math. Educational Studies in Mathematics.",
    },
    {
      author: "Edsger W. Dijkstra",
      text: "The question of whether machines can think is about as relevant as the question of whether submarines can swim.",
      source: "Edsger W. Dijkstra",
    },
    {
      author: "Fact",
      text: "Using spaced repetition in math practice improves long-term retention by 200%.",
      source:
        "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin.",
    },
    {
      author: "Plato",
      text: "The knowledge of which geometry aims is the knowledge of the eternal.",
      source: "Plato",
    },
    {
      author: "Fact",
      text: "Visualization techniques in math teaching improve spatial reasoning skills in students.",
      source:
        "Presmeg, N. C. (2006). Research on visualization in learning and teaching mathematics. Handbook of Research on the Psychology of Mathematics Education.",
    },
    {
      author: "Richard Feynman",
      text: "What I cannot create, I do not understand.",
      source: "Richard Feynman",
    },
    {
      author: "Fact",
      text: "Students who draw their own diagrams to solve problems outperform those who do not.",
      source:
        "Van Meter, P., & Garner, J. (2005). The Promise and Practice of Learner-Generated Drawing. Educational Psychology Review.",
    },
    {
      author: "Leonhard Euler",
      text: "Mathematics serves as a bridge between reality and imagination.",
      source: "Leonhard Euler",
    },
    {
      author: "Fact",
      text: "Math games boost student motivation and help develop critical thinking skills.",
      source:
        "Kiili, K. (2005). Digital Game-Based Learning. Journal of Educational Technology & Society.",
    },
    {
      author: "Katherine Johnson",
      text: "We’re always thinking ahead, calculating, and analyzing space trajectories.",
      source: "Katherine Johnson",
    },
    {
      author: "Fact",
      text: "Math journaling enhances reflection and understanding of mathematical concepts.",
      source:
        "Clarke, D. (2000). Learning from practice: Mathematics Education Research Journal.",
    },
    {
      author: "Alan Turing",
      text: "Mathematics is only a way of expressing what is in the universe.",
      source: "Alan Turing",
    },
    {
      author: "Fact",
      text: "Incorporating technology, like graphing calculators, improves problem-solving abilities in high school math.",
      source:
        "Pierce, R., & Ball, L. (2009). Perceptions of the influence of graphing calculators. Australian Senior Mathematics Journal.",
    },
    {
      author: "Mary Jackson",
      text: "Math, my dear, is universal. It connects the stars, the planets, and even the air we breathe.",
      source: "Mary Jackson",
    },
    {
      author: "Fact",
      text: "Flipped classroom models in math instruction lead to higher engagement and better exam results.",
      source:
        "Bergmann, J., & Sams, A. (2012). Flip Your Classroom. ISTE/ASCD.",
    },
    {
      author: "Fact",
      text: "Math students with access to open-ended problems develop more robust reasoning skills.",
      source:
        "Schoenfeld, A. H. (1992). Learning to think mathematically. Handbook for Research on Mathematics Teaching and Learning.",
    },
    {
      author: "Fact",
      text: "Using real-world data in math lessons improves numeracy and critical thinking skills.",
      source:
        "Franklin, C., et al. (2005). Guidelines for Assessment and Instruction in Statistics Education.",
    },
    {
      author: "Fact",
      text: "Culturally responsive teaching in math fosters better student outcomes.",
      source:
        "Ladson-Billings, G. (1995). Toward a Theory of Culturally Relevant Pedagogy. American Educational Research Journal.",
    },
    {
      author: "Fact",
      text: "Mindset interventions in math improve performance, particularly for underrepresented groups.",
      source:
        "Yeager, D. S., & Walton, G. M. (2011). Social-psychological interventions in education. Review of Educational Research.",
    },
  ],
  [languages.fa]: [
    {
      author: "آلبرت اینشتین",
      text: "ریاضیات ناب، به شیوه‌ای خاص، شعر ایده‌های منطقی است.",
      source: "آلبرت اینشتین",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزان زمانی که کاربرد ریاضیات را در مسائل واقعی می‌بینند، به‌طور مؤثرتری یاد می‌گیرند.",
      source: "بوالر، ج. (2016). ذهنیت‌های ریاضی. جوزی-باس.",
    },
    {
      author: "گالیله گالیله",
      text: "ریاضیات زبان خداوند برای نوشتن جهان است.",
      source: "گالیله گالیله",
    },
    {
      author: "حقیقت",
      text: "تکنیک‌های یادگیری فعال در کلاس‌های ریاضی به‌طور میانگین 6 درصد نمرات آزمون‌ها را بهبود می‌بخشد.",
      source:
        "فریمن، اس. و دیگران (2014). یادگیری فعال عملکرد دانش‌آموزان را در علوم، مهندسی و ریاضیات افزایش می‌دهد. PNAS.",
    },
    {
      author: "پال لاکهارت",
      text: "هنر ریاضیات، هنر پرسیدن سوال‌های معنادار است.",
      source: "لاکهارت، پ. (2009). مرثیه‌ای برای یک ریاضی‌دان. انتشارات بلویو.",
    },
    {
      author: "حقیقت",
      text: "کار گروهی مشارکتی در ریاضی، مهارت‌های حل مسئله و ماندگاری دانش را بهبود می‌بخشد.",
      source: "هتی، ج. (2009). یادگیری قابل مشاهده. روتلج.",
    },
    {
      author: "ارسطو",
      text: "علوم ریاضی به‌ویژه نظم، تقارن و محدودیت را به نمایش می‌گذارند؛ و این‌ها بزرگ‌ترین اشکال زیبایی هستند.",
      source: "ارسطو",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که تحت مداخلات ذهنیت رشد در ریاضی قرار می‌گیرند، 40 درصد بیشتر احتمال دارد نمرات بالاتری کسب کنند.",
      source: "دوک، سی. (2006). ذهنیت: روان‌شناسی جدید موفقیت. بالنتاین بوکز.",
    },
    {
      author: "هنری پوانکاره",
      text: "ریاضیات هنر دادن یک نام مشترک به چیزهای متفاوت است.",
      source: "هنری پوانکاره",
    },
    {
      author: "حقیقت",
      text: "استفاده از ابزارهای ملموس در دروس ریاضی ابتدایی، درک مفهومی را بهبود می‌بخشد.",
      source:
        "کلمتز، دی. اچ. (1999). ابزارهای ملموس، ایده‌های ملموس. مسائل معاصر در آموزش کودکی.",
    },
    {
      author: "بلیز پاسکال",
      text: "ریاضیات نوعی جذابیت بی‌پایان برای ذهن دارد.",
      source: "بلیز پاسکال",
    },
    {
      author: "حقیقت",
      text: "ادغام ریاضیات با سایر رشته‌ها، مانند هنر یا علوم، باعث افزایش مشارکت و درک می‌شود.",
      source: "بکت، ج. و بکت، ام. (2012). جایی برای STEAM. آموزش هنر.",
    },
    {
      author: "کارل فردریش گاوس",
      text: "ریاضیات ملکه علوم است.",
      source: "کارل فردریش گاوس",
    },
    {
      author: "حقیقت",
      text: "ابزارهای بصری در آموزش ریاضی می‌توانند عملکرد دانش‌آموزان را تا 29 درصد افزایش دهند.",
      source:
        "مایر، آر. ای. (2001). یادگیری چندرسانه‌ای. انتشارات دانشگاه کمبریج.",
    },
    {
      author: "سوفیا کووالفسکایا",
      text: "امکان ندارد ریاضی‌دان باشید و در روح‌تان شاعر نباشید.",
      source: "سوفیا کووالفسکایا",
    },
    {
      author: "حقیقت",
      text: "کاربردهای واقعی ریاضی باعث می‌شود دانش‌آموزان دو برابر بیشتر اطلاعات را درک کنند.",
      source:
        "ویلیگام، دی. تی. (2009). چرا دانش‌آموزان مدرسه را دوست ندارند؟ جوزی-باس.",
    },
    {
      author: "اندرو وایلز",
      text: "ریاضیات درباره اعداد، معادلات، محاسبات یا الگوریتم‌ها نیست: درباره درک است.",
      source: "اندرو وایلز",
    },
    {
      author: "حقیقت",
      text: "ادغام داستان‌گویی در دروس ریاضی درک و مشارکت را بهبود می‌بخشد.",
      source:
        "زازکیس، ر. و لیلجدال، پ. (2009). آموزش ریاضی به عنوان داستان‌گویی. ناشران Sense.",
    },
    {
      author: "برتراند راسل",
      text: "ریاضیات، در نگاه صحیح، نه تنها حقیقت، بلکه زیبایی بی‌نظیری را در خود دارد.",
      source: "برتراند راسل",
    },
    {
      author: "حقیقت",
      text: "بازی‌سازی در آموزش ریاضی می‌تواند مشارکت را تا 75 درصد بهبود بخشد.",
      source:
        "هاماری، ج.، کویویستو، ج.، و سارسا، ه. (2014). آیا بازی‌سازی کار می‌کند؟ HICSS.",
    },
    {
      author: "جی. اچ. هاردی",
      text: "یک ریاضی‌دان، مانند یک نقاش یا شاعر، سازنده الگوها است.",
      source: "جی. اچ. هاردی",
    },
    {
      author: "لئوناردو داوینچی",
      text: "هیچ تحقیق انسانی نمی‌تواند علم واقعی نامیده شود اگر نتواند به‌صورت ریاضی اثبات شود.",
      source: "لئوناردو داوینچی",
    },
    {
      author: "نیلز بور",
      text: "نظریه شما جنون آمیز می‌نماید، اما به اندازه کافی دیوانه‌وار نیست که حقیقت داشته باشد.",
      source: "نیلز بور",
    },
    {
      author: "سرینیواسا رامانوجان",
      text: "یک معادله برای من هیچ معنایی ندارد مگر این که بیانگر فکری از خدا باشد.",
      source: "سرینیواسا رامانوجان",
    },
    {
      author: "پل اردوش",
      text: "یک ریاضی‌دان ابزاری برای تبدیل قهوه و کافئین به قضایای ریاضی است.",
      source: "منتسب به پل اردوش",
    },
    {
      author: "بنجامین فرانکلین",
      text: "سرمایه‌گذاری در دانش، بهترین سود را به همراه دارد.",
      source: "بنجامین فرانکلین",
    },
    {
      author: "دانیکا مک کلر",
      text: "ریاضی مانند رفتن به باشگاه برای مغز شماست. ذهن شما را تیز می‌کند.",
      source: "دانیکا مک کلر",
    },
    {
      author: "یوگن ویگنر",
      text: "معجزه تناسب زبان ریاضیات برای فرمول‌بندی قوانین فیزیک، هدیه‌ای شگفت‌انگیز است.",
      source: "یوگن ویگنر",
    },
    {
      author: "جان لاک",
      text: "ریاضیات راهی برای ایجاد عادت به استدلال در ذهن است.",
      source: "جان لاک",
    },
    {
      author: "سیمون ویل",
      text: "زیبایی ریاضیات تنها برای دنبال‌کنندگان صبور خود آشکار می‌شود.",
      source: "سیمون ویل",
    },
    {
      author: "مارکوس دو ساتوی",
      text: "ریاضیات ابزاری است که برای کشف الگوهای پنهان جهان از آن استفاده می‌کنیم.",
      source: "مارکوس دو ساتوی",
    },
    {
      author: "مارتین گاردنر",
      text: "ریاضیات نه تنها واقعی است، بلکه تنها واقعیت است.",
      source: "مارتین گاردنر",
    },
    {
      author: "دیوید هیلبرت",
      text: "ما باید بدانیم و ما خواهیم دانست.",
      source: "دیوید هیلبرت",
    },
    {
      author: "فریدریش نیچه",
      text: "جوهر تمام هنرهای زیبا، تمام هنرهای بزرگ، سپاسگزاری است. ریاضیات سپاسگزارترین از همه است.",
      source: "فریدریش نیچه",
    },
    {
      author: "ژاک هادامار",
      text: "کوتاه‌ترین مسیر بین دو حقیقت در حوزه واقعی، از طریق حوزه مختلط عبور می‌کند.",
      source: "ژاک هادامار",
    },
    {
      author: "کارل ساگان",
      text: "اگر می‌خواهید یک کیک سیب را از ابتدا درست کنید، باید جهان را از نو اختراع کنید.",
      source: "کارل ساگان",
    },
    {
      author: "البرت هابارد",
      text: "نبوغ توانایی ساده‌سازی پیچیده‌ها است.",
      source: "البرت هابارد",
    },
    {
      author: "استیون هاوکینگ",
      text: "هیچ‌کس واقعاً نمی‌تواند با یک قضیه ریاضی بحث کند.",
      source: "استیون هاوکینگ",
    },
    {
      author: "ریچارد کورانت",
      text: "ریاضیات به عنوان بیان ذهن انسان، اراده فعال، عقل تأملی و تمایل به کمال زیبایی‌شناختی را منعکس می‌کند.",
      source: "ریچارد کورانت",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که برای تلاش در ریاضیات تقویت مثبت دریافت می‌کنند، عملکرد بهتری نسبت به همتایانی که فقط برای پاسخ‌های درست تحسین می‌شوند، دارند.",
      source:
        "مولر، سی. ام. و دوک، سی. اس. (1998). تحسین برای هوش می‌تواند انگیزه را تضعیف کند. مجله روان‌شناسی شخصیت و اجتماعی.",
    },
    {
      author: "هیپاتیا",
      text: "حق تفکر را برای خود محفوظ بدارید، زیرا حتی اشتباه فکر کردن بهتر از فکر نکردن است.",
      source: "هیپاتیا اهل اسکندریه",
    },
    {
      author: "حقیقت",
      text: "یادگیری مبتنی بر پروژه در ریاضیات، مهارت‌های حل مسئله را تا 35 درصد افزایش می‌دهد.",
      source:
        "توماس، ج. دبلیو. (2000). مروری بر تحقیق در یادگیری مبتنی بر پروژه. بنیاد Autodesk.",
    },
    {
      author: "ویلیام پاول تورستون",
      text: "ریاضیات درباره اعداد، معادلات، محاسبات یا الگوریتم‌ها نیست؛ درباره درک است.",
      source: "ویلیام پاول تورستون",
    },
    {
      author: "حقیقت",
      text: "تخته‌های سفید تعاملی در کلاس‌های ریاضی، مشارکت و ماندگاری را تا 20 درصد افزایش می‌دهند.",
      source:
        "اسمیت، اچ. جی. و دیگران (2005). تخته‌های سفید تعاملی و مشارکت دانش‌آموزان. یادگیری، رسانه و فناوری.",
    },
    {
      author: "رنه دکارت",
      text: "هر مسئله‌ای که حل کردم به قاعده‌ای تبدیل شد که بعدها برای حل مسائل دیگر به کار رفت.",
      source: "رنه دکارت",
    },
    {
      author: "حقیقت",
      text: "آموزش پله‌پله به دانش‌آموزان کمک می‌کند تا بر مفاهیم پیچیده ریاضی مسلط شوند.",
      source:
        "ویگوتسکی، ال. اس. (1978). ذهن در جامعه: توسعه فرآیندهای روان‌شناختی بالاتر.",
    },
    {
      author: "دیوید هیلبرت",
      text: "ریاضیات هیچ نژاد یا مرز جغرافیایی نمی‌شناسد؛ برای ریاضیات، تمام دنیا، یک کشور است.",
      source: "دیوید هیلبرت",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که فرآیندهای فکری خود را در هنگام حل مسئله بیان می‌کنند، 50 درصد بیشتر احتمال دارد که به راه‌حل‌های درست برسند.",
      source:
        "چی، ام. تی. اچ. و دیگران (1989). خود-توضیحات: چگونه دانش‌آموزان مطالعه و از مثال‌ها در یادگیری استفاده می‌کنند. علوم شناختی.",
    },
    {
      author: "حقیقت",
      text: "ادغام معماهای ریاضی در دروس، مهارت‌های استدلال منطقی و پشتکار را بهبود می‌بخشد.",
      source: "شوئنفلد، ای. اچ. (1985). حل مسئله ریاضی. آکادمیک پرس.",
    },
    {
      author: "حقیقت",
      text: "برنامه‌های مداخله‌ای ریاضی نرخ ترک تحصیل را تا 10 درصد کاهش می‌دهند.",
      source:
        "اسلاوین، آر. ئی. و لیک، سی. (2008). برنامه‌های مؤثر در ریاضیات ابتدایی. دانشنامه شواهد.",
    },
    {
      author: "ارشمیدس",
      text: "اگر من در جایی درست با اهرمی متناسب باشم به تنهایی می‌توانم زمین را جابه‌جا کنم.",
      source: "ارشمیدس",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که در معرض اثبات‌های بصری قرار می‌گیرند، درک بهتری از مفاهیم هندسی پیدا می‌کنند.",
      source:
        "استیلیانو، دی. ای. (2002). در تعامل تجسم و تحلیل. مجله بین‌المللی آموزش ریاضی در علوم و فناوری.",
    },
    {
      author: "ماریا مونتسوری",
      text: "بزرگ‌ترین نشانه موفقیت برای یک معلم این است که بتواند بگوید: 'دانش‌آموزان اکنون کار می‌کنند، گویی من وجود ندارم.'",
      source: "ماریا مونتسوری",
    },
    {
      author: "حقیقت",
      text: "استفاده از شبیه‌سازی‌های واقعی در ریاضیات باعث افزایش مشارکت و مهارت‌های کاربردی می‌شود.",
      source:
        "شات، وی. جی. و ونتورا، ام. (2013). ارزیابی پنهان در بازی‌های دیجیتال. انتشارات MIT.",
    },
    {
      author: "حقیقت",
      text: "معلمان ریاضی که کنجکاوی و اشتیاق را مدل می‌کنند، افزایش علاقه دانش‌آموزان به رشته‌های STEM را مشاهده می‌کنند.",
      source:
        "مالتس، ای. وی. و تای، آر. اچ. (2010). چشم‌ها در یخچال: منابع علاقه اولیه به علم. مجله بین‌المللی آموزش علم.",
    },
    {
      author: "حقیقت",
      text: "ادغام آموزش هم‌سالان در کلاس‌های ریاضی می‌تواند دستاوردها را تا 20 درصد بهبود بخشد.",
      source:
        "تاپینگ، کی. جی. (2005). روندهای یادگیری هم‌سالان. روان‌شناسی آموزشی.",
    },
    {
      author: "ادا لاولیس",
      text: "علم عملیات که از ریاضیات مشتق شده، علمی به خودی خود است و حقیقت و ارزش انتزاعی خود را دارد.",
      source: "ادا لاولیس",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که مسائل ریاضی را با هم‌سالان خود بحث می‌کنند، به درک مفهومی عمیق‌تری دست می‌یابند.",
      source:
        "مرسر، ن. و سامز، سی. (2006). آموزش کودکان برای استفاده از زبان برای حل مسائل ریاضی. زبان و آموزش.",
    },
    {
      author: "جان فون نویمان",
      text: "در ریاضیات، چیزها را کاملا درک نمی‌کنید؛ فقط به آن‌ها عادت می‌کنید.",
      source: "جان فون نویمان",
    },
    {
      author: "حقیقت",
      text: "ادغام طنز در دروس ریاضی حافظه را بهبود می‌بخشد و اضطراب ریاضی را کاهش می‌دهد.",
      source:
        "باناس، ج. آ. و دیگران (2011). مروری بر طنز در محیط‌های آموزشی. آموزش ارتباطی.",
    },
    {
      author: "ایزاک نیوتن",
      text: "اگر توانسته‌ام دورتر را ببینم، به دلیل ایستادن بر شانه‌های غول‌ها بوده است.",
      source: "ایزاک نیوتن",
    },
    {
      author: "حقیقت",
      text: "معلمان ریاضی که اشتباهات را به‌عنوان فرصت‌های یادگیری تشویق می‌کنند، پشتکار دانش‌آموزان را افزایش می‌دهند.",
      source:
        "بوالر، ج. (2015). نقش اشتباهات در یادگیری ریاضیات. مطالعات آموزشی در ریاضیات.",
    },
    {
      author: "ادسگر دیکسترا",
      text: "سؤال اینکه آیا ماشین‌ها می‌توانند فکر کنند، به اندازه سؤال اینکه آیا زیردریایی‌ها می‌توانند شنا کنند، بی‌ربط است.",
      source: "ادسگر دیکسترا",
    },
    {
      author: "حقیقت",
      text: "استفاده از تکرار فاصله‌دار در تمرین‌های ریاضی، حفظ بلندمدت را تا 200 درصد بهبود می‌بخشد.",
      source:
        "سپدا، ان. جی. و دیگران (2006). تمرین توزیع شده در وظایف یادآوری شفاهی. روان‌شناسی بولتن.",
    },
    {
      author: "افلاطون",
      text: "دانشی که هندسه به آن می‌پردازد، دانشی از ابدیت است.",
      source: "افلاطون",
    },
    {
      author: "حقیقت",
      text: "تکنیک‌های تجسم در تدریس ریاضی، مهارت‌های استدلال فضایی دانش‌آموزان را بهبود می‌بخشد.",
      source:
        "پرس‌مگ، ان. سی. (2006). تحقیق درباره تجسم در یادگیری و تدریس ریاضیات. کتابچه تحقیق در روان‌شناسی آموزش ریاضی.",
    },
    {
      author: "ریچارد فاینمن",
      text: "چیزی که نتوانم خلق کنم، نمی‌توانم درک کنم.",
      source: "ریچارد فاینمن",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزانی که خودشان نمودار برای حل مسائل ترسیم می‌کنند، عملکرد بهتری نسبت به دیگران دارند.",
      source:
        "ون میتر، پ. و گارنر، ج. (2005). وعده و عمل ترسیم تولید شده توسط یادگیرنده. بررسی روان‌شناسی آموزشی.",
    },
    {
      author: "لئونارد اویلر",
      text: "ریاضیات به‌عنوان پلی میان واقعیت و تخیل عمل می‌کند.",
      source: "لئونارد اویلر",
    },
    {
      author: "حقیقت",
      text: "بازی‌های ریاضی انگیزه دانش‌آموزان را افزایش می‌دهند و به توسعه مهارت‌های تفکر انتقادی کمک می‌کنند.",
      source:
        "کیلی، ک. (2005). یادگیری مبتنی بر بازی دیجیتال. مجله فناوری آموزشی و جامعه.",
    },
    {
      author: "کاترین جانسون",
      text: "ما همیشه در حال پیش‌بینی، محاسبه و تحلیل مسیرهای فضایی هستیم.",
      source: "کاترین جانسون",
    },
    {
      author: "حقیقت",
      text: "ژورنال‌نویسی ریاضی، تأمل و درک مفاهیم ریاضی را بهبود می‌بخشد.",
      source: "کلارک، دی. (2000). یادگیری از عمل: مجله تحقیق در آموزش ریاضیات.",
    },
    {
      author: "آلن تورینگ",
      text: "ریاضیات تنها راهی برای بیان آنچه در جهان است، می‌باشد.",
      source: "آلن تورینگ",
    },
    {
      author: "حقیقت",
      text: "ادغام فناوری، مانند ماشین‌حساب‌های گرافیکی، مهارت‌های حل مسئله در ریاضیات دبیرستانی را بهبود می‌بخشد.",
      source:
        "پیرس، ر. و بال، ال. (2009). برداشت‌ها از تأثیر ماشین‌حساب‌های گرافیکی. مجله ریاضیات دبیرستانی استرالیا.",
    },
    {
      author: "مری جکسون",
      text: "ریاضیات، عزیز من، جهانی است. ستارگان، سیارات و حتی هوایی که تنفس می‌کنیم را به هم متصل می‌کند.",
      source: "مری جکسون",
    },
    {
      author: "حقیقت",
      text: "مدل‌های کلاس درس معکوس در تدریس ریاضی، منجر به مشارکت بیشتر و نتایج بهتر امتحانات می‌شوند.",
      source: "برگمن، ج. و سامز، ا. (2012). کلاس خود را معکوس کنید. ISTE/ASCD.",
    },
    {
      author: "حقیقت",
      text: "دانش‌آموزان ریاضی که به مسائل باز دسترسی دارند، مهارت‌های استدلالی قوی‌تری ایجاد می‌کنند.",
      source:
        "شوئنفلد، ای. اچ. (1992). یادگیری تفکر ریاضی. کتابچه تحقیق درباره تدریس و یادگیری ریاضیات.",
    },
    {
      author: "حقیقت",
      text: "استفاده از داده‌های واقعی در دروس ریاضی، مهارت‌های سواد عددی و تفکر انتقادی را بهبود می‌بخشد.",
      source:
        "فرانکلین، سی. و دیگران (2005). دستورالعمل و ارزیابی در آموزش آمار.",
    },
    {
      author: "حقیقت",
      text: "آموزش پاسخ‌گو به فرهنگ در ریاضیات، نتایج بهتری برای دانش‌آموزان به ارمغان می‌آورد.",
      source:
        "لدسون-بیلینگز، جی. (1995). به سوی نظریه‌ای از آموزش مرتبط با فرهنگ. مجله تحقیق آموزشی آمریکا.",
    },
    {
      author: "حقیقت",
      text: "مداخلات ذهنیت در ریاضیات، به‌ویژه برای گروه‌های کم‌نماینده، عملکرد را بهبود می‌بخشد.",
      source:
        "ییگر، دی. اس. و والتون، جی. ام. (2011). مداخلات اجتماعی-روان‌شناختی در آموزش. بررسی تحقیقات آموزشی.",
    },
  ],
};
