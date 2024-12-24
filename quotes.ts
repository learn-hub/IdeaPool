import { languages } from "../constants.ts";
import { Language } from "../interface/state.d.ts";

const quotes = {
  [languages.en]: [
    {
        "author": "Kevin Kruse",
        "text": "Life isn’t about getting and having, it’s about giving and being.",
        "source": "Kevin Kruse"
    },
    {
        "author": "Napoleon Hill",
        "text": "Whatever the mind of man can conceive and believe, it can achieve.",
        "source": "Napoleon Hill"
    },
    {
        "author": "Albert Einstein",
        "text": "Strive not to be a success, but rather to be of value.",
        "source": "Albert Einstein"
    },
    {
        "author": "Robert Frost",
        "text": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "source": "Robert Frost"
    },
    {
        "author": "Florence Nightingale",
        "text": "I attribute my success to this: I never gave or took any excuse.",
        "source": "Florence Nightingale"
    },
    {
        "author": "Wayne Gretzky",
        "text": "You miss 100% of the shots you don’t take.",
        "source": "Wayne Gretzky"
    },
    {
        "author": "Michael Jordan",
        "text": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "source": "Michael Jordan"
    },
    {
        "author": "Amelia Earhart",
        "text": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "source": "Amelia Earhart"
    },
    {
        "author": "Babe Ruth",
        "text": "Every strike brings me closer to the next home run.",
        "source": "Babe Ruth"
    },
    {
        "author": "W. Clement Stone",
        "text": "Definiteness of purpose is the starting point of all achievement.",
        "source": "W. Clement Stone"
    },
    {
        "author": "Kevin Kruse",
        "text": "We must balance conspicuous consumption with conscious capitalism.",
        "source": "Kevin Kruse"
    },
    {
        "author": "John Lennon",
        "text": "Life is what happens to you while you’re busy making other plans.",
        "source": "John Lennon"
    },
    {
        "author": "Earl Nightingale",
        "text": "We become what we think about.",
        "source": "Earl Nightingale"
    },
    {
        "author": "Mark Twain",
        "text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        "source": "Mark Twain"
    },
    {
        "author": "Charles Swindoll",
        "text": "Life is 10% what happens to me and 90% of how I react to it.",
        "source": "Charles Swindoll"
    },
    {
        "author": "Alice Walker",
        "text": "The most common way people give up their power is by thinking they don’t have any.",
        "source": "Alice Walker"
    },
    {
        "author": "Buddha",
        "text": "The mind is everything. What you think you become.",
        "source": "Buddha"
    },
    {
        "author": "Chinese Proverb",
        "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "source": "Chinese Proverb"
    },
    {
        "author": "Socrates",
        "text": "An unexamined life is not worth living.",
        "source": "Socrates"
    },
    {
        "author": "Woody Allen",
        "text": "Eighty percent of success is showing up.",
        "source": "Woody Allen"
    },
    {
        "author": "Steve Jobs",
        "text": "Your time is limited, so don’t waste it living someone else’s life.",
        "source": "Steve Jobs"
    },
    {
        "author": "Vince Lombardi",
        "text": "Winning isn’t everything, but wanting to win is.",
        "source": "Vince Lombardi"
    },
    {
        "author": "Stephen Covey",
        "text": "I am not a product of my circumstances. I am a product of my decisions.",
        "source": "Stephen Covey"
    },
    {
        "author": "Pablo Picasso",
        "text": "Every child is an artist. The problem is how to remain an artist once he grows up.",
        "source": "Pablo Picasso"
    },
    {
        "author": "Christopher Columbus",
        "text": "You can never cross the ocean until you have the courage to lose sight of the shore.",
        "source": "Christopher Columbus"
    },
    {
        "author": "Maya Angelou",
        "text": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "source": "Maya Angelou"
    },
    {
        "author": "Jim Rohn",
        "text": "Either you run the day, or the day runs you.",
        "source": "Jim Rohn"
    },
    {
        "author": "Henry Ford",
        "text": "Whether you think you can or you think you can’t, you’re right.",
        "source": "Henry Ford"
    },
    {
        "author": "Mark Twain",
        "text": "The two most important days in your life are the day you are born and the day you find out why.",
        "source": "Mark Twain"
    },
    {
        "author": "Johann Wolfgang von Goethe",
        "text": "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        "source": "Johann Wolfgang von Goethe"
    },
    {
        "author": "Frank Sinatra",
        "text": "The best revenge is massive success.",
        "source": "Frank Sinatra"
    },
    {
        "author": "Zig Ziglar",
        "text": "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
        "source": "Zig Ziglar"
    },
    {
        "author": "Anais Nin",
        "text": "Life shrinks or expands in proportion to one’s courage.",
        "source": "Anais Nin"
    },
    {
        "author": "Vincent Van Gogh",
        "text": "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
        "source": "Vincent Van Gogh"
    },
    {
        "author": "Aristotle",
        "text": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "source": "Aristotle"
    },
    {
        "author": "Jesus",
        "text": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        "source": "Jesus"
    },
    {
        "author": "Ralph Waldo Emerson",
        "text": "The only person you are destined to become is the person you decide to be.",
        "source": "Ralph Waldo Emerson"
    },
    {
        "author": "Henry David Thoreau",
        "text": "Go confidently in the direction of your dreams. Live the life you have imagined.",
        "source": "Henry David Thoreau"
    },
    {
        "author": "Erma Bombeck",
        "text": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        "source": "Erma Bombeck"
    },
    {
        "author": "Booker T. Washington",
        "text": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        "source": "Booker T. Washington"
    },
    {
        "author": "Ancient Indian Proverb",
        "text": "Certain things catch your eye, but pursue only those that capture the heart.",
        "source": "Ancient Indian Proverb"
    },
    {
        "author": "Theodore Roosevelt",
        "text": "Believe you can and you’re halfway there.",
        "source": "Theodore Roosevelt"
    },
    {
        "author": "George Addair",
        "text": "Everything you’ve ever wanted is on the other side of fear.",
        "source": "George Addair"
    },
    {
        "author": "Plato",
        "text": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "source": "Plato"
    },
    {
        "author": "Maimonides",
        "text": "Teach thy tongue to say, 'I do not know,' and thou shalt progress.",
        "source": "Maimonides"
    },
    {
        "author": "Arthur Ashe",
        "text": "Start where you are. Use what you have. Do what you can.",
        "source": "Arthur Ashe"
    },
    {
        "author": "John Lennon",
        "text": "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
        "source": "John Lennon"
    },
    {
        "author": "Japanese Proverb",
        "text": "Fall seven times and stand up eight.",
        "source": "Japanese Proverb"
    },
    {
        "author": "Helen Keller",
        "text": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        "source": "Helen Keller"
    },
    {
        "author": "Confucius",
        "text": "Everything has beauty, but not everyone can see.",
        "source": "Confucius"
    },
    {
        "author": "Anne Frank",
        "text": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "source": "Anne Frank"
    },
    {
        "author": "Lao Tzu",
        "text": "When I let go of what I am, I become what I might be.",
        "source": "Lao Tzu"
    },
    {
        "author": "Maya Angelou",
        "text": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        "source": "Maya Angelou"
    },
    {
        "author": "Dalai Lama",
        "text": "Happiness is not something readymade. It comes from your own actions.",
        "source": "Dalai Lama"
    },
    {
        "author": "Sheryl Sandberg",
        "text": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
        "source": "Sheryl Sandberg"
    },
    {
        "author": "Aristotle",
        "text": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        "source": "Aristotle"
    },
    {
        "author": "Latin Proverb",
        "text": "If the wind will not serve, take to the oars.",
        "source": "Latin Proverb"
    },
    {
        "author": "Unknown",
        "text": "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
        "source": "Unknown"
    },
    {
        "author": "Marie Curie",
        "text": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        "source": "Marie Curie"
    },
    {
        "author": "Les Brown",
        "text": "Too many of us are not living our dreams because we are living our fears.",
        "source": "Les Brown"
    },
    {
        "author": "Joshua J. Marine",
        "text": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "source": "Joshua J. Marine"
    },
    {
        "author": "Booker T. Washington",
        "text": "If you want to lift yourself up, lift up someone else.",
        "source": "Booker T. Washington"
    },
    {
        "author": "Leonardo da Vinci",
        "text": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        "source": "Leonardo da Vinci"
    },
    {
        "author": "Jamie Paolinetti",
        "text": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        "source": "Jamie Paolinetti"
    },
    {
        "author": "Erica Jong",
        "text": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        "source": "Erica Jong"
    },
    {
        "author": "Bob Dylan",
        "text": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        "source": "Bob Dylan"
    },
    {
        "author": "Benjamin Franklin",
        "text": "I didn’t fail the test. I just found 100 ways to do it wrong.",
        "source": "Benjamin Franklin"
    },
    {
        "author": "Bill Cosby",
        "text": "In order to succeed, your desire for success should be greater than your fear of failure.",
        "source": "Bill Cosby"
    },
    {
        "author": "Albert Einstein",
        "text": "A person who never made a mistake never tried anything new.",
        "source": "Albert Einstein"
    },
    {
        "author": "Chinese Proverb",
        "text": "The person who says it cannot be done should not interrupt the person who is doing it.",
        "source": "Chinese Proverb"
    },
    {
        "author": "Roger Staubach",
        "text": "There are no traffic jams along the extra mile.",
        "source": "Roger Staubach"
    },
    {
        "author": "George Eliot",
        "text": "It is never too late to be what you might have been.",
        "source": "George Eliot"
    },
    {
        "author": "Oprah Winfrey",
        "text": "You become what you believe.",
        "source": "Oprah Winfrey"
    },
    {
        "author": "Vincent van Gogh",
        "text": "I would rather die of passion than of boredom.",
        "source": "Vincent van Gogh"
    },
    {
        "author": "Unknown",
        "text": "A truly rich man is one whose children run into his arms when his hands are empty.",
        "source": "Unknown"
    },
    {
        "author": "Ann Landers",
        "text": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        "source": "Ann Landers"
    },
    {
        "author": "Abigail Van Buren",
        "text": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        "source": "Abigail Van Buren"
    },
    {
        "author": "Jesse Owens",
        "text": "The battles that count aren’t the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that’s where it’s at.",
        "source": "Jesse Owens"
    },
    {
        "author": "Sir Claus Moser",
        "text": "Education costs money. But then so does ignorance.",
        "source": "Sir Claus Moser"
    },
    {
        "author": "Rosa Parks",
        "text": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        "source": "Rosa Parks"
    },
    {
        "author": "Confucius",
        "text": "It does not matter how slowly you go as long as you do not stop.",
        "source": "Confucius"
    },
    {
        "author": "Oprah Winfrey",
        "text": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        "source": "Oprah Winfrey"
    },
    {
        "author": "Dalai Lama",
        "text": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        "source": "Dalai Lama"
    },
    {
        "author": "Maya Angelou",
        "text": "You can’t use up creativity. The more you use, the more you have.",
        "source": "Maya Angelou"
    },
    {
        "author": "Norman Vaughan",
        "text": "Dream big and dare to fail.",
        "source": "Norman Vaughan"
    },
    {
        "author": "Martin Luther King Jr.",
        "text": "Our lives begin to end the day we become silent about things that matter.",
        "source": "Martin Luther King Jr."
    },
    {
        "author": "Teddy Roosevelt",
        "text": "Do what you can, where you are, with what you have.",
        "source": "Teddy Roosevelt"
    },
    {
        "author": "Tony Robbins",
        "text": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        "source": "Tony Robbins"
    },
    {
        "author": "Gloria Steinem",
        "text": "Dreaming, after all, is a form of planning.",
        "source": "Gloria Steinem"
    },
    {
        "author": "Mae Jemison",
        "text": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
        "source": "Mae Jemison"
    },
    {
        "author": "Beverly Sills",
        "text": "You may be disappointed if you fail, but you are doomed if you don’t try.",
        "source": "Beverly Sills"
    },
    {
        "author": "Eleanor Roosevelt",
        "text": "Remember no one can make you feel inferior without your consent.",
        "source": "Eleanor Roosevelt"
    },
    {
        "author": "Grandma Moses",
        "text": "Life is what we make it, always has been, always will be.",
        "source": "Grandma Moses"
    },
    {
        "author": "Ayn Rand",
        "text": "The question isn’t who is going to let me; it’s who is going to stop me.",
        "source": "Ayn Rand"
    },
    {
        "author": "Henry Ford",
        "text": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "source": "Henry Ford"
    },
    {
        "author": "Abraham Lincoln",
        "text": "It’s not the years in your life that count. It’s the life in your years.",
        "source": "Abraham Lincoln"
    },
    {
        "author": "Norman Vincent Peale",
        "text": "Change your thoughts and you change your world.",
        "source": "Norman Vincent Peale"
    },
    {
        "author": "Benjamin Franklin",
        "text": "Either write something worth reading or do something worth writing.",
        "source": "Benjamin Franklin"
    },
    {
        "author": "Audrey Hepburn",
        "text": "Nothing is impossible, the word itself says, 'I’m possible!'",
        "source": "Audrey Hepburn"
    },
    {
        "author": "Steve Jobs",
        "text": "The only way to do great work is to love what you do.",
        "source": "Steve Jobs"
    },
    {
        "author": "Zig Ziglar",
        "text": "If you can dream it, you can achieve it.",
        "source": "Zig Ziglar"
    },
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
        "author": "کوین کروز",
        "text": "زندگی درباره به دست آوردن و داشتن نیست، بلکه درباره بخشیدن و بودن است.",
        "source": "کوین کروز"
    },
    {
        "author": "ناپلئون هیل",
        "text": "هر چیزی که ذهن انسان بتواند تصور و باور کند، می‌تواند به آن دست یابد.",
        "source": "ناپلئون هیل"
    },
    {
        "author": "آلبرت انیشتین",
        "text": "سعی نکن موفق باشی، بلکه سعی کن ارزشمند باشی.",
        "source": "آلبرت انیشتین"
    },
    {
        "author": "رابرت فراست",
        "text": "دو راه در جنگلی از هم جدا شدند، و من—راه کمتر پیموده شده را انتخاب کردم، و این تفاوت را ایجاد کرد.",
        "source": "رابرت فراست"
    },
    {
        "author": "فلورنس نایتینگل",
        "text": "موفقیتم را به این نسبت می‌دهم که هرگز بهانه‌ای نیاوردم یا نپذیرفتم.",
        "source": "فلورنس نایتینگل"
    },
    {
        "author": "وین گرتزکی",
        "text": "صد درصد شوت‌هایی را که نمی‌زنی از دست می‌دهی.",
        "source": "وین گرتزکی"
    },
    {
        "author": "مایکل جردن",
        "text": "من بیش از ۹۰۰۰ شوت را در حرفه‌ام از دست داده‌ام. تقریباً ۳۰۰ بازی را باخته‌ام. ۲۶ بار به من اعتماد کرده‌اند تا شوت برنده بازی را بزنم و ناکام مانده‌ام. بارها و بارها شکست خورده‌ام، و به همین دلیل موفق شده‌ام.",
        "source": "مایکل جردن"
    },
    {
        "author": "آملیا ارهارت",
        "text": "سخت‌ترین کار تصمیم به اقدام است؛ بقیه صرفاً مداومت است.",
        "source": "آملیا ارهارت"
    },
    {
        "author": "بیب روت",
        "text": "هر ضربه‌ای که می‌زنم، مرا به هوم ران بعدی نزدیک‌تر می‌کند.",
        "source": "بیب روت"
    },
    {
        "author": "دبلیو. کلمنت استون",
        "text": "نقطه شروع همه دستاوردها، هدف مشخص است.",
        "source": "دبلیو. کلمنت استون"
    },
    {
        "author": "کوین کروز",
        "text": "باید مصرف نمایشی را با سرمایه‌داری آگاهانه متعادل کنیم.",
        "source": "کوین کروز"
    },
    {
        "author": "جان لنون",
        "text": "زندگی همان چیزی است که وقتی مشغول برنامه‌ریزی چیزهای دیگر هستید، اتفاق می‌افتد.",
        "source": "جان لنون"
    },
    {
        "author": "ارل نایتینگل",
        "text": "ما به چیزی تبدیل می‌شویم که به آن فکر می‌کنیم.",
        "source": "ارل نایتینگل"
    },
    {
        "author": "مارک تواین",
        "text": "بیست سال بعد، بیشتر از کارهایی که انجام نداده‌اید، ناراحت خواهید شد تا کارهایی که انجام داده‌اید. پس از قید بندر امن بزنید، بادهای تجاری را در بادبان‌های خود بگیرید. کشف کنید، رؤیا ببینید، کاوش کنید.",
        "source": "مارک تواین"
    },
    {
        "author": "چارلز سوین‌دول",
        "text": "زندگی ۱۰ درصد آن چیزی است که برای من اتفاق می‌افتد و ۹۰ درصد واکنش من به آن است.",
        "source": "چارلز سوین‌دول"
    },
    {
        "author": "آلیس واکر",
        "text": "رایج‌ترین راهی که مردم قدرت خود را از دست می‌دهند، این است که فکر کنند هیچ قدرتی ندارند.",
        "source": "آلیس واکر"
    },
    {
        "author": "بودا",
        "text": "ذهن همه‌چیز است. آنچه فکر می‌کنید، به آن تبدیل می‌شوید.",
        "source": "بودا"
    },
    {
        "author": "ضرب‌المثل چینی",
        "text": "بهترین زمان برای کاشتن یک درخت، بیست سال پیش بود. دومین زمان بهترین، همین حالاست.",
        "source": "ضرب‌المثل چینی"
    },
    {
        "author": "سقراط",
        "text": "زندگی بدون بررسی ارزش زندگی کردن ندارد.",
        "source": "سقراط"
    },
    {
        "author": "وودی آلن",
        "text": "هشتاد درصد موفقیت در حاضر شدن است.",
        "source": "وودی آلن"
    },
    {
        "author": "استیو جابز",
        "text": "زمان شما محدود است، پس آن را صرف زندگی دیگری نکنید.",
        "source": "استیو جابز"
    },
    {
        "author": "وینس لومباردی",
        "text": "برنده شدن همه چیز نیست، اما خواستن برای برنده شدن مهم است.",
        "source": "وینس لومباردی"
    },
    {
        "author": "استفان کاوی",
        "text": "من محصول شرایط خود نیستم؛ من محصول تصمیماتم هستم.",
        "source": "استفان کاوی"
    },
    {
        "author": "پابلو پیکاسو",
        "text": "هر کودکی یک هنرمند است. مشکل این است که چگونه وقتی بزرگ شد، هنرمند باقی بماند.",
        "source": "پابلو پیکاسو"
    },
    {
        "author": "کریستف کلمب",
        "text": "هرگز نمی‌توانید از اقیانوس عبور کنید مگر اینکه جرات از دست دادن دید ساحل را داشته باشید.",
        "source": "کریستف کلمب"
    },
    {
        "author": "مایا آنجلو",
        "text": "من آموخته‌ام که مردم آنچه را که گفته‌اید فراموش می‌کنند، مردم آنچه را که انجام داده‌اید فراموش می‌کنند، اما مردم هرگز احساسی را که به آنها دادید فراموش نمی‌کنند.",
        "source": "مایا آنجلو"
    },
    {
        "author": "جیم ران",
        "text": "یا شما روز را کنترل می‌کنید، یا روز شما را.",
        "source": "جیم ران"
    },
    {
        "author": "هنری فورد",
        "text": "چه فکر کنید که می‌توانید و چه فکر کنید که نمی‌توانید، در هر صورت حق با شماست.",
        "source": "هنری فورد"
    },
    {
        "author": "مارک تواین",
        "text": "دو روز مهم در زندگی شما وجود دارد: روزی که به دنیا می‌آیید و روزی که می‌فهمید چرا.",
        "source": "مارک تواین"
    },
    {
        "author": "گوته",
        "text": "هر چیزی که می‌توانید انجام دهید یا رؤیای آن را دارید، آغاز کنید. جسارت در خود نابغه، قدرت و جادو دارد.",
        "source": "گوته"
    },
    {
        "author": "فرانک سیناترا",
        "text": "بهترین انتقام موفقیت عظیم است.",
        "source": "فرانک سیناترا"
    },
    {
        "author": "زیگ زیگلار",
        "text": "مردم اغلب می‌گویند انگیزه دائمی نیست. خوب، حمام کردن هم دائمی نیست. به همین دلیل ما توصیه می‌کنیم هر روز این کار را انجام دهید.",
        "source": "زیگ زیگلار"
    },
    {
        "author": "آنیس نین",
        "text": "زندگی به تناسب شجاعت شخص کوچک یا بزرگ می‌شود.",
        "source": "آنیس نین"
    },
    {
        "author": "ونسان ونگوگ",
        "text": "اگر صدایی درونتان گفت 'نمی‌توانی نقاشی کنی'، حتماً نقاشی کنید و آن صدا ساکت خواهد شد.",
        "source": "ونسان ونگوگ"
    },
    {
        "author": "ارسطو",
        "text": "فقط یک راه برای جلوگیری از انتقاد وجود دارد: هیچ کاری نکنید، هیچ چیزی نگویید، و هیچ چیزی نباشید.",
        "source": "ارسطو"
    },
    {
        "author": "عیسی مسیح",
        "text": "بخواهید و به شما داده خواهد شد؛ جستجو کنید و خواهید یافت؛ در بزنید و در به روی شما باز خواهد شد.",
        "source": "عیسی مسیح"
    },
    {
        "author": "رالف والدو امرسون",
        "text": "تنها کسی که شما برای تبدیل شدن به آن سرنوشت دارید، کسی است که تصمیم می‌گیرید باشید.",
        "source": "رالف والدو امرسون"
    },
    {
        "author": "هنری دیوید ثورو",
        "text": "با اطمینان به سمت رؤیاهای خود حرکت کنید. زندگی‌ای را که تصور کرده‌اید، زندگی کنید.",
        "source": "هنری دیوید ثورو"
    },
    {
        "author": "ارما بامبک",
        "text": "وقتی در پایان زندگی‌ام در برابر خدا بایستم، امیدوارم که هیچ استعدادی باقی نداشته باشم و بتوانم بگویم، همه چیزهایی که به من دادی استفاده کردم.",
        "source": "ارما بامبک"
    },
    {
        "author": "بوکر تی. واشنگتن",
        "text": "چند چیز بیشتر از سپردن مسئولیت به فرد و اعلام اینکه به او اعتماد دارید، می‌تواند به او کمک کند.",
        "source": "بوکر تی. واشنگتن"
    },
    {
        "author": "ضرب‌المثل هندی قدیمی",
        "text": "چیزهایی که چشم شما را جذب می‌کنند، دنبال نکنید؛ تنها چیزهایی را دنبال کنید که قلب شما را تسخیر می‌کنند.",
        "source": "ضرب‌المثل هندی قدیمی"
    },
    {
        "author": "تئودور روزولت",
        "text": "باور کنید که می‌توانید و نیمی از راه را پیموده‌اید.",
        "source": "تئودور روزولت"
    },
    {
        "author": "جورج ادایر",
        "text": "همه چیزهایی که تا به حال می‌خواستید، در طرف دیگر ترس هستند.",
        "source": "جورج ادایر"
    },
    {
        "author": "افلاطون",
        "text": "ما می‌توانیم کودکی که از تاریکی می‌ترسد را ببخشیم؛ اما تراژدی واقعی زندگی زمانی است که مردان از نور می‌ترسند.",
        "source": "افلاطون"
    },
    {
        "author": "مایموندس",
        "text": "زبان خود را تعلیم بدهید که بگوید: 'نمی‌دانم' و پیشرفت خواهید کرد.",
        "source": "مایموندس"
    },
    {
        "author": "آرتور اش",
        "text": "از جایی که هستید شروع کنید. از آنچه دارید استفاده کنید. آنچه می‌توانید انجام دهید.",
        "source": "آرتور اش"
    },
    {
        "author": "جان لنون",
        "text": "وقتی پنج ساله بودم، مادرم همیشه به من می‌گفت که خوشبختی کلید زندگی است. وقتی به مدرسه رفتم، از من پرسیدند که وقتی بزرگ شدم چه می‌خواهم بشوم. نوشتم 'خوشحال'. به من گفتند که تکلیف را درست نفهمیده‌ام و من گفتم آنها زندگی را نفهمیده‌اند.",
        "source": "جان لنون"
    },
    {
        "author": "ضرب‌المثل ژاپنی",
        "text": "هفت بار بیفتید و هشت بار بلند شوید.",
        "source": "ضرب‌المثل ژاپنی"
    },
    {
        "author": "هلن کلر",
        "text": "وقتی یک در خوشبختی بسته می‌شود، در دیگری باز می‌شود؛ اما اغلب ما آنقدر به در بسته خیره می‌مانیم که در باز شده را نمی‌بینیم.",
        "source": "هلن کلر"
    },
    {
        "author": "کنفوسیوس",
        "text": "همه چیز زیباست، اما همه نمی‌توانند زیبایی را ببینند.",
        "source": "کنفوسیوس"
    },
    {
        "author": "آن فرانک",
        "text": "چقدر شگفت‌انگیز است که هیچ‌کس نیاز ندارد حتی یک لحظه منتظر بماند تا شروع به بهتر کردن جهان کند.",
        "source": "آن فرانک"
    },
    {
        "author": "لائو تزو",
        "text": "وقتی آنچه هستم را رها می‌کنم، آنچه ممکن است بشوم، می‌شوم.",
        "source": "لائو تزو"
    },
    {
        "author": "مایا آنجلو",
        "text": "زندگی با تعداد نفس‌هایی که می‌کشیم سنجیده نمی‌شود، بلکه با لحظاتی که نفس را در سینه حبس می‌کنند سنجیده می‌شود.",
        "source": "مایا آنجلو"
    },
    {
        "author": "دالایی لاما",
        "text": "خوشبختی چیزی آماده نیست. از کارهای خودتان می‌آید.",
        "source": "دالایی لاما"
    },
    {
        "author": "شریل سندبرگ",
        "text": "اگر به شما صندلی در یک سفینه فضایی پیشنهاد شد، نپرسید چه صندلی‌ای! فقط سوار شوید.",
        "source": "شریل سندبرگ"
    },
    {
        "author": "ارسطو",
        "text": "ابتدا یک ایده عملی، روشن و واضح داشته باشید؛ هدفی، یک مقصد. دوم، ابزارهای لازم برای رسیدن به آن را داشته باشید؛ خرد، پول، مواد و روش‌ها. سوم، همه این ابزارها را به سمت آن هدف تنظیم کنید.",
        "source": "ارسطو"
    },
    {
        "author": "ضرب‌المثل لاتین",
        "text": "اگر باد یاری نکند، به پاروها متوسل شوید.",
        "source": "ضرب‌المثل لاتین"
    },
    {
        "author": "ناشناس",
        "text": "نمی‌توانید سقوط کنید اگر صعود نکنید. اما هیچ لذتی در زندگی روی زمین نیست.",
        "source": "ناشناس"
    },
    {
        "author": "ماری کوری",
        "text": "باید باور کنیم که برای چیزی استعداد داریم و این چیز، به هر قیمتی که باشد، باید به دست آید.",
        "source": "ماری کوری"
    },
    {
        "author": "لس براون",
        "text": "بسیاری از ما رؤیاهایمان را زندگی نمی‌کنیم زیرا زندگی ما در ترس‌هایمان است.",
        "source": "لس براون"
    },
    {
        "author": "جاشوا جی. مارین",
        "text": "چالش‌ها چیزی هستند که زندگی را جالب می‌کنند و غلبه بر آنها چیزی است که زندگی را معنادار می‌کند.",
        "source": "جاشوا جی. مارین"
    },
    {
        "author": "بوکر تی. واشنگتن",
        "text": "اگر می‌خواهید خود را بالا ببرید، شخص دیگری را بالا ببرید.",
        "source": "بوکر تی. واشنگتن"
    },
    {
        "author": "لئوناردو داوینچی",
        "text": "من از فوریت عمل تحت تأثیر قرار گرفته‌ام. دانستن کافی نیست؛ باید عمل کنیم. مایل بودن کافی نیست؛ باید انجام دهیم.",
        "source": "لئوناردو داوینچی"
    },
    {
        "author": "جیمی پاولینتی",
        "text": "محدودیت‌ها فقط در ذهن ما زندگی می‌کنند. اما اگر تخیل خود را استفاده کنیم، امکانات ما بی‌نهایت می‌شوند.",
        "source": "جیمی پاولینتی"
    },
    {
        "author": "اریکا جونگ",
        "text": "زندگی‌ات را در دستان خودت بگیر، و چه اتفاقی می‌افتد؟ یک چیز وحشتناک: هیچ‌کس دیگری برای سرزنش کردن وجود ندارد.",
        "source": "اریکا جونگ"
    },
    {
        "author": "باب دیلن",
        "text": "پول چیست؟ یک مرد موفق کسی است که صبح از خواب بیدار می‌شود، شب به رختخواب می‌رود، و بین این دو هر کاری که می‌خواهد انجام می‌دهد.",
        "source": "باب دیلن"
    },
    {
        "author": "بنجامین فرانکلین",
        "text": "من در آزمون شکست نخوردم. فقط ۱۰۰ راه برای انجام اشتباه آن پیدا کردم.",
        "source": "بنجامین فرانکلین"
    },
    {
        "author": "بیل کازبی",
        "text": "برای موفقیت، تمایل شما برای موفق شدن باید بیشتر از ترس از شکست باشد.",
        "source": "بیل کازبی"
    },
    {
        "author": "آلبرت انیشتین",
        "text": "کسی که هرگز اشتباهی نکرده، هرگز چیزی جدید را امتحان نکرده است.",
        "source": "آلبرت انیشتین"
    },
    {
        "author": "ضرب‌المثل چینی",
        "text": "کسی که می‌گوید نمی‌توان انجامش داد، نباید کسی را که دارد انجامش می‌دهد، مزاحم شود.",
        "source": "ضرب‌المثل چینی"
    },
    {
        "author": "راجر استاباک",
        "text": "هیچ ترافیکی در مسیرهای اضافی وجود ندارد.",
        "source": "راجر استاباک"
    },
    {
        "author": "جورج الیوت",
        "text": "هیچ‌وقت برای تبدیل شدن به کسی که ممکن است باشی، دیر نیست.",
        "source": "جورج الیوت"
    },
    {
        "author": "اوپرا وینفری",
        "text": "تو چیزی می‌شوی که باور داری.",
        "source": "اوپرا وینفری"
    },
    {
        "author": "ونسان ونگوگ",
        "text": "ترجیح می‌دهم از اشتیاق بمیرم تا از کسالت.",
        "source": "ونسان ونگوگ"
    },
    {
        "author": "ناشناس",
        "text": "یک مرد واقعاً ثروتمند کسی است که فرزندانش وقتی دستانش خالی است به سویش می‌دوند.",
        "source": "ناشناس"
    },
    {
        "author": "آن لندرز",
        "text": "این کاری که برای فرزندان خود انجام می‌دهید نیست که اهمیت دارد، بلکه آن چیزی است که به آنها آموزش می‌دهید تا برای خودشان انجام دهند.",
        "source": "آن لندرز"
    },
    {
        "author": "ابیگیل ون بیورن",
        "text": "اگر می‌خواهید فرزندانتان موفق شوند، دو برابر وقت بیشتری با آنها بگذرانید و نصف پول کمتری خرج کنید.",
        "source": "ابیگیل ون بیورن"
    },
    {
        "author": "جسی اوونز",
        "text": "نبردهایی که اهمیت دارند آنهایی نیستند که برای مدال‌های طلا هستند. مبارزات درونی خودتان—نبردهای نامرئی داخل همه ما—جایی است که اهمیت دارد.",
        "source": "جسی اوونز"
    },
    {
        "author": "سِر کلاوس موزر",
        "text": "آموزش هزینه دارد. اما نادانی هم همین‌طور.",
        "source": "سِر کلاوس موزر"
    },
    {
        "author": "روزا پارکس",
        "text": "من در طول سال‌ها آموخته‌ام که وقتی ذهن کسی آماده باشد، این ترس را کاهش می‌دهد.",
        "source": "روزا پارکس"
    },
    {
        "author": "کنفوسیوس",
        "text": "مهم نیست چقدر آهسته می‌روی، تا زمانی که متوقف نشوی.",
        "source": "کنفوسیوس"
    },
    {
        "author": "اوپرا وینفری",
        "text": "اگر به آنچه در زندگی دارید نگاه کنید، همیشه بیشتر خواهید داشت. اگر به آنچه ندارید نگاه کنید، هرگز کافی نخواهید داشت.",
        "source": "اوپرا وینفری"
    },
    {
        "author": "دالایی لاما",
        "text": "به یاد داشته باشید که گاهی نرسیدن به چیزی که می‌خواهید، یک ضربه شانس عالی است.",
        "source": "دالایی لاما"
    },
    {
        "author": "مایا آنجلو",
        "text": "خلاقیت قابل‌تمام شدن نیست. هرچه بیشتر استفاده کنید، بیشتر خواهید داشت.",
        "source": "مایا آنجلو"
    },
    {
        "author": "نورمن وان",
        "text": "بزرگ رؤیا ببینید و جرأت شکست خوردن داشته باشید.",
        "source": "نورمن وان"
    },
    {
        "author": "مارتین لوتر کینگ جونیور",
        "text": "زندگی ما از روزی شروع به پایان می‌رسد که درباره چیزهایی که اهمیت دارند، سکوت کنیم.",
        "source": "مارتین لوتر کینگ جونیور"
    },
    {
        "author": "تدی روزولت",
        "text": "هر چه می‌توانید، جایی که هستید، با آنچه دارید انجام دهید.",
        "source": "تدی روزولت"
    },
    {
        "author": "تونی رابینز",
        "text": "اگر همان کاری را انجام دهید که همیشه انجام داده‌اید، همان چیزی را به دست خواهید آورد که همیشه داشته‌اید.",
        "source": "تونی رابینز"
    },
    {
        "author": "گلوریا استاینم",
        "text": "رؤیا دیدن، در نهایت، شکلی از برنامه‌ریزی است.",
        "source": "گلوریا استاینم"
    },
    {
        "author": "می جمیسون",
        "text": "این جایگاه شما در جهان است؛ این زندگی شماست. پیش بروید و هر کاری می‌توانید با آن انجام دهید و آن را به زندگی‌ای تبدیل کنید که می‌خواهید.",
        "source": "می جمیسون"
    },
    {
        "author": "بورلی سیلز",
        "text": "اگر شکست بخورید ممکن است ناامید شوید، اما اگر تلاش نکنید، محکوم خواهید بود.",
        "source": "بورلی سیلز"
    },
    {
        "author": "النور روزولت",
        "text": "به یاد داشته باشید، هیچ‌کس نمی‌تواند شما را بدون رضایتتان تحقیر کند.",
        "source": "النور روزولت"
    },
    {
        "author": "مادر بزرگ موزز",
        "text": "زندگی همان چیزی است که ما آن را می‌سازیم، همیشه بوده و همیشه خواهد بود.",
        "source": "مادر بزرگ موزز"
    },
    {
        "author": "آین رند",
        "text": "سؤال این نیست که چه کسی به من اجازه خواهد داد؛ بلکه این است که چه کسی می‌تواند من را متوقف کند.",
        "source": "آین رند"
    },
    {
        "author": "هنری فورد",
        "text": "وقتی همه چیز به نظر علیه شما است، به یاد داشته باشید که هواپیما علیه باد بلند می‌شود، نه با آن.",
        "source": "هنری فورد"
    },
    {
        "author": "آبراهام لینکلن",
        "text": "این سال‌های زندگی شما نیست که مهم است. این زندگی در سال‌های شماست که اهمیت دارد.",
        "source": "آبراهام لینکلن"
    },
    {
        "author": "نورمن وینسنت پیل",
        "text": "افکار خود را تغییر دهید و جهان خود را تغییر خواهید داد.",
        "source": "نورمن وینسنت پیل"
    },
    {
        "author": "بنجامین فرانکلین",
        "text": "یا چیزی بنویسید که ارزش خواندن داشته باشد یا کاری انجام دهید که ارزش نوشتن داشته باشد.",
        "source": "بنجامین فرانکلین"
    },
    {
        "author": "آدری هپبورن",
        "text": "هیچ چیز غیرممکن نیست، کلمه خودش می‌گوید: 'من ممکنم!'",
        "source": "آدری هپبورن"
    },
    {
        "author": "استیو جابز",
        "text": "تنها راه برای انجام کارهای بزرگ، این است که عاشق کاری باشید که انجام می‌دهید.",
        "source": "استیو جابز"
    },
    {
        "author": "زیگ زیگلار",
        "text": "اگر می‌توانید رؤیایش را ببینید، می‌توانید به آن دست پیدا کنید.",
        "source": "زیگ زیگلار"
    },
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

export const getRandomQuote = (
  language: Language
): { author: string; text: string; source: string } => {
  const q = quotes[language];
  const randomIndex = Math.floor(Math.random() * q.length);
  return q[randomIndex];
};

export const updateTextMessageWithRandomQuote = (
  language: Language,
  messageText: string
) => {
  const randomQuote = getRandomQuote(language);
  return `${messageText}\n
>${randomQuote.text.escapeMarkdownV2()}
>
${
  randomQuote.author.toLocaleLowerCase() === "fact" ||
  randomQuote.author.toLocaleLowerCase() === "حقیقت"
    ? ">📚 " + randomQuote.source.escapeMarkdownV2()
    : ">" +
      randomQuote.author.escapeMarkdownV2() +
      (randomQuote.author !== randomQuote.source
        ? `\n>\n>📚 ${randomQuote.source.escapeMarkdownV2()}`
        : "")
}`;
};
