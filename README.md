# IdeaPool

Our mission is to collect, refine, and organize outstanding educational ideas so that they can be easily accessed and utilized by everyone—whether authors, teachers, or students. Currently, these ideas are scattered across various resources and are not centralized. For instance, a teacher might develop an excellent analogy or example to explain a concept, but it remains confined to that classroom, making it hard for others to discover. As a result, valuable ideas often get lost. Our aim is to build a community where educators and students can extract these great ideas and share them in one centralized location for all to benefit.

Inspired by the **Atomic Design Methodology** and **chemo-biology**, we categorize educational content into six levels. Initially, our focus will be on **Atomic Ideas**, which are the smallest educational units. Ideas from higher levels will be "parked" in their respective categories for future development, but for now, we’re concentrating on atomic-level content.

**Note:** Time estimates are meant to provide a general sense of scope for each level, but they may vary.

### 1. Atoms (Atomic Ideas):
Atoms are the smallest units of learning—building blocks of education. They include simple examples, analogies, or questions that help explain a concept.
- **Examples**: Core concepts, essential ideas, key principles.
- **Estimated Time**: 5-15 minutes.

### 2. Molecules (Linked Concepts):
Molecules are formed by combining atomic ideas to create more complex thoughts. The author has a specific goal, like linking two examples or concepts (e.g., gravity and water).
- **Examples**: Combined ideas, concept clusters, linked themes.
- **Estimated Time**: 15-45 minutes.

### 3. Macromolecules (Single Lesson):
Macromolecules represent a complete lesson or session. These provide a full structure for delivering a concept or lesson.
- **Examples**: Lesson plans, comprehensive units, complete lessons.
- **Estimated Time**: 1-2 hours.

### 4. Organs (Full Module):
Organs are equivalent to a full module of content, typically covering a week’s worth of material. This level organizes multiple macromolecules into a cohesive module.
- **Examples**: Educational modules, course sections.
- **Estimated Time**: 1 week.

### 5. Organisms (Full Course):
Organisms represent an entire course, spanning either a semester or an academic year. It’s a comprehensive structure of multiple modules that guide students through a subject.
- **Examples**: Full courses, semester-long programs, year-long courses.
- **Estimated Time**: 1 semester to 1 year.

### 6. Ecosystem or Universe (Field of Study):
At the highest level, the ecosystem encompasses an entire field of study or major. It represents a learning path that spans more than a year, guiding students through a comprehensive educational journey.
- **Examples**: Fields of study, major curriculum, learning pathways.
- **Estimated Time**: More than 1 year.

This structure allows us to break down educational content into manageable, shareable components, fostering a community where ideas can be freely exchanged and built upon.

### RFC-Inspired Process

Our process is modeled after the RFC approach, using clearly defined stages for each level of content:
/atomic-ideas
```
├── 0000-template.md      # Template for proposing new ideas
├── README.md             # Overview and guidelines for the idea submission process
├── accepted/             # Folder for accepted ideas
│   ├── 0001-example.md   # Example of an accepted idea
│   ├── 0002-another.md   # Another accepted idea
│   └── ...
├── rejected/             # Folder for rejected ideas
│   ├── 0001-rejected.md  # Example of a rejected idea
│   └── ...
├── withdrawn/            # Folder for withdrawn ideas
│   ├── 0001-withdrawn.md # Example of a withdrawn idea
│   └── ...
└── active/               # Folder for ideas currently under discussion
    ├── 0001-active.md    # Example of an idea under discussion
    └── ...
```

The process starts with submitting an issue using a predefined template. If it passes a minimum check, it will be marked as "accepted-candidate," and a new markdown file will automatically be created under the "active" folder for further discussion and work.

### Choosing the Template
<img width="853" alt="Screenshot 2024-09-07 at 5 24 35 AM" src="https://github.com/user-attachments/assets/792e8cf6-cab4-46a0-85d1-fffebde3ea2e">

### Filling Out the Form
<img width="852" alt="Screenshot 2024-09-07 at 5 25 05 AM" src="https://github.com/user-attachments/assets/c781f28f-07cb-4723-815c-5da279e205bf">

### Automatically Creating a New Idea in the Active Folder
<img width="1332" alt="Screenshot 2024-09-07 at 5 25 44 AM" src="https://github.com/user-attachments/assets/a7a0b839-b771-44d1-b64a-fffebad88256">


If the submission is exceptionally well-prepared, it can be moved directly to the "accepted" folder to streamline the process.

When a new idea connects to an existing one, contributors can submit a pull request to link or update content. For questions or clarifications, new issues can be opened.

We chose GitHub for its robust discussion capabilities, ease of displaying pages, automation through GitHub Actions, and its quick setup process.

### Categorization
We can categorize atomic ideas in multiple ways, such as by their type (application vs. explanation), by the primary source format (video, text, audio, image, etc.), or by context. For example, if it’s an application, we can categorize it by the main topic it addresses, or by the topics it could help teach. For instance, an idea might involve applying integrals to gardening in a 4-minute video.

Currently, we use static categorizations and tagging within article pages. However, our plan is to support dynamic categorization and filtering, allowing articles to be discovered through various methods and perspectives.

© 2024 Learnhub.com
