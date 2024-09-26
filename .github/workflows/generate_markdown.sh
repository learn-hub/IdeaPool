#!/bin/bash

# Access the OpenAI API key from the environment variable
API_KEY=$OPENAI_API_KEY

# Get the issue body from the argument passed to the script
ISSUE_BODY=$1

# Debugging log: Print the ISSUE_BODY to inspect its content (send to stderr)
echo "Debugging log: ISSUE_BODY content:" >&2
echo "$ISSUE_BODY" >&2

# Use jq -Rs . to safely escape the issue body for JSON
ESCAPED_ISSUE_BODY=$(echo "$ISSUE_BODY" | jq -Rs .)

# Debugging log: Print the escaped ISSUE_BODY (send to stderr)
echo "Debugging log: ESCAPED_ISSUE_BODY content:" >&2
echo "$ESCAPED_ISSUE_BODY" >&2
TAGS='**Tags:** $${ \color{purple}[Logarithmic] \space { \color{black},} \space \color{green}[Application] \space { \color{black},} \color{olive}[Earthquake] \space { \color{black},} \space { \color{salmon} \textbf{8/10}}}$$'

# Prepare the JSON request message body manually with the $TAGS interpolated
ESCAPED_REQUEST_MESSAGE_BODY=$(cat <<EOF
{
    "model": "gpt-4o-mini",
    "messages": [
        {
            "role": "system",
            "content": "IdeaPool is a collaborative platform for gathering and sharing educational ideas, from small concepts to full lesson plans. Inspired by the Atomic Design Methodology, it organizes content for easy discovery and reuse. This repository manages the submission, discussion, and categorization of ideas through GitHub issues and pull requests.\n\nThe new idea gets submitted by using the following GitHub issue template:\n\nname: New Idea\ndescription: Submit a new idea to share with the IdeaPool community.\ntitle: \"[Idea-1]: Chamfered Corner Calculation\"\nlabels: [\"idea-1\", \"triage\"]\nprojects: [\"ideapool/1\"]\nassignees:\n  - learn-hub\nbody:\n  - type: markdown\n    attributes:\n      value: |\n        Thank you for contributing a new idea! IdeaPool is a space for educators and students to share creative and useful ideas, such as examples or applications of mathematical concepts, that enhance understanding and engagement.\n\n  - type: input\n    id: title\n    attributes:\n      label: Idea Title\n      description: Provide a concise title for your idea.\n      placeholder: Enter a brief and descriptive title for your idea.\n    validations:\n      required: true\n\n  - type: input\n    id: link\n    attributes:\n      label: Relevant/Source Link (video, book, etc.)\n      description: Share any relevant link (optional).\n      placeholder: Include a URL if relevant.\n\n  - type: input\n    id: link-section\n    attributes:\n      label: Specific Section of the Source (e.g., start/end time for videos or page numbers for books)\n      description: Provide specific parts of the source (optional).\n      placeholder: Include time range or page numbers if relevant.\n\n  - type: textarea\n    id: summary\n    attributes:\n      label: Summary/Synopsis\n      description: Provide a short summary of the core idea.\n      placeholder: Give a quick overview of the core idea/concept.\n    validations:\n      required: true\n\n  - type: textarea\n    id: main-idea\n    attributes:\n      label: Main Idea\n      description: Describe the main idea or concept in detail.\n      placeholder: Explain the idea thoroughly. You may include text, images, or any helpful resources.\n    validations:\n      required: true\n\n  - type: dropdown\n    id: type\n    attributes:\n      label: Idea Type\n      description: Select the type of idea you'\''re submitting.\n      options:\n        - Application\n        - Sense-making\n        - Definition\n        - Explanation\n        - Analogy\n        - In-depth explanation\n        - Problem/Question\n        - Graph\n        - Joke\n        - Concept map\n        - Level system\n        - Comic references\n        - Thematic approach\n        - Topic-based thesaurus\n        - Engagement elements\n        - Poem\n        - Riddle\n        - Funny clip\n        - Meme\n        - GIF\n        - Movie\n        - Quiz\n        - Question\n        - Easter egg\n        - Plot twists\n        - Call for help\n        - Sub-section\n        - Disambiguation guide\n        - Pain point\n\n  - type: dropdown\n    id: subject-area\n    attributes:\n      label: Main Educational Subject Area\n      description: Select the main educational subject\n      options:\n        - math--arithmetic\n        - math--algebra\n        - math--geometry\n        - math--trigonometry\n        - math--calculus\n        - math--statistics\n        - math--probability\n        - math--number-theory\n        - math--linear-algebra\n        - math--differential-equations\n        - math--discrete-mathematics\n        - math--topology\n        - math--mathematical-logic\n        - math--complex-analysis\n        - math--real-analysis\n        - math--numerical-analysis\n        - math--mathematical-modeling\n        - math--set-theory\n        - math--game-theory\n        - math--optimization\n        - physics--classical-mechanics\n        - physics--thermodynamics\n        - physics--electromagnetism\n        - physics--optics\n        - physics--quantum-mechanics\n        - physics--relativity\n        - physics--particle-physics\n        - physics--astrophysics\n        - physics--nuclear-physics\n        - physics--condensed-matter\n        - physics--fluid-dynamics\n        - physics--atomic-physics\n        - physics--statistical-mechanics\n        - physics--plasma-physics\n        - physics--wave-theory\n        - physics--acoustics\n        - physics--biophysics\n        - physics--geophysics\n        - physics--quantum-field-theory\n        - physics--experimental-physics\n        - chemistry--organic-chemistry\n        - chemistry--inorganic-chemistry\n        - chemistry--physical-chemistry\n        - chemistry--analytical-chemistry\n        - chemistry--biochemistry\n        - chemistry--theoretical-chemistry\n        - chemistry--environmental-chemistry\n        - chemistry--materials-science\n        - chemistry--polymer-chemistry\n        - chemistry--supramolecular-chemistry\n        - chemistry--nanochemistry\n        - chemistry--industrial-chemistry\n        - chemistry--quantum-chemistry\n        - chemistry--electrochemistry\n        - chemistry--chemical-engineering\n        - chemistry--spectroscopy\n        - chemistry--crystallography\n        - chemistry--surface-chemistry\n        - chemistry--photochemistry\n        - chemistry--organometallic-chemistry\n        - biology--cell-biology\n        - biology--genetics\n        - biology--molecular-biology\n        - biology--evolutionary-biology\n        - biology--ecology\n        - biology--microbiology\n        - biology--biochemistry\n        - biology--anatomy\n        - biology--physiology\n        - biology--developmental-biology\n        - biology--neuroscience\n        - biology--immunology\n        - biology--botany\n        - biology--zoology\n        - biology--marine-biology\n        - biology--environmental-biology\n        - biology--virology\n        - biology--bioinformatics\n        - biology--bioengineering\n        - biology--astrobiology\n        - computer--programming\n        - computer--algorithms\n        - computer--data-structures\n        - computer--operating-systems\n        - computer--databases\n        - computer--computer-networks\n        - computer--artificial-intelligence\n        - computer--machine-learning\n        - computer--computer-graphics\n        - computer--human-computer-interaction\n        - computer--software-engineering\n        - computer--theory-of-computation\n        - computer--cybersecurity\n        - computer--computer-architecture\n        - computer--distributed-systems\n        - computer--cloud-computing\n        - computer--web-development\n        - computer--mobile-computing\n        - computer--computer-vision\n        - computer--natural-language-processing\n\n  - type: dropdown\n    id: education-level\n    attributes:\n      label: Education Level (difficulty level)\n      description: Select the appropriate education level for this idea.\n      options:\n        - pre-elementary and above\n        - elementary and above\n        - middle school and above\n        - high school and above\n        - college and above\n        - bachelor'\''s and above\n        - master'\''s and above\n        - professional/PhD and above\n\n  - type: textarea\n    id: main-education-subjects\n    attributes:\n      label: Educational Sub-Category\n      description: Specify the sub-categories of the main educational subjects that this idea applies to.\n      placeholder: List the relevant sub-categories for this idea.\n\n  - type: textarea\n    id: standards\n    attributes:\n      label: Standards\n      description: \"Indicate the relevant standards this idea addresses (e.g., LearnHub Standards, Common Core, Illustrative Mathematics, etc.)\"\n      placeholder: \"LH: R.2.f.3; CCSS: 4.NBT.6; IM: 6.RP;\"\n\n  - type: textarea\n    id: main-topics\n    attributes:\n      label: Main Topics\n      description: List the main topics that describe the context of this idea.\n      placeholder: Provide the core topics associated with this idea.\n\n  - type: textarea\n    id: other-related-topics\n    attributes:\n      label: Other Related Topics\n      description: Mention any other topics this idea connects with.\n      placeholder: List related topics or areas of interest.\n\n  - type: textarea\n    id: faq\n    attributes:\n      label: FAQ\n      description: Provide common questions and answers related to the topic. This section helps address typical concerns or doubts that may arise.\n      placeholder: Enter frequently asked questions and their corresponding answers here.\n\n  - type: textarea\n    id: experiential-scenarios\n    attributes:\n      label: Experiential Scenarios\n      description: Describe real-world scenarios or challenges where the concept can be applied, allowing students to engage in practical problem-solving.\n      placeholder: List and explain experiential scenarios that involve applying the concept to real-world problems or challenges.\n\n  - type: textarea\n    id: comments-notes\n    attributes:\n      label: Comments/Notes\n      description: Share any additional comments or insights.\n      placeholder: Provide any additional notes or feedback.\n\n  - type: input\n    id: overall-score\n    attributes:\n      label: Overall Score\n      description: Rate the overall quality of this idea (1-10).\n      placeholder: Enter a rating from 1 to 10.\n\n  - type: input\n    id: usefulness-score\n    attributes:\n      label: Usefulness Score\n      description: Rate how useful this idea is (1-10).\n      placeholder: Enter a rating from 1 to 10.\n\n  - type: input\n    id: ease-of-follow-score\n    attributes:\n      label: Ease of Understanding Score\n      description: Rate how easy it is to follow this idea (1-10).\n      placeholder: Enter a rating from 1 to 10.\n\n  - type: input\n    id: contact\n    attributes:\n      label: Contact Information\n      description: Provide your contact details in case we need more information.\n      placeholder: ex. your.email@example.com\n\n  - type: checkboxes\n    id: terms\n    attributes:\n      label: Code of Conduct Agreement\n      description: By submitting this idea, you agree to follow our [Code of Conduct](https://example.com).\n      options:\n        - label: I agree to follow this project'\''s Code of Conduct\n\nUpon initial review, if the issue gets approved, it gets converted to an md file and placed under the “active” folder in the `Atoms--atomic-ideas` folder. We are focused on gathering atomic ideas for now. The other folders are:\n\n1-Atoms--atomic-ideas\n2-Molecules--linked-concepts\n3-Macromolecules--single-lesson\n4-Organs--full-module\n5-Organisms--full-course\n\nRFC-Inspired Process\nOur process is modeled after the RFC approach, using clearly defined stages for each level of content:\n/atomic-ideas\n├── 0000-template.md      # Template for proposing new ideas\n├── README.md             # Overview and guidelines for the idea submission process\n├── accepted/             # Folder for accepted ideas\n│   ├── 0001-example.md   # Example of an accepted idea\n│   ├── 0002-another.md   # Another accepted idea\n│   └── ...\n├── rejected/             # Folder for rejected ideas\n│   ├── 0001-rejected.md  # Example of a rejected idea\n│   └── ...\n├── withdrawn/            # Folder for withdrawn ideas\n│   ├── 0001-withdrawn.md # Example of a withdrawn idea\n│   └── ...\n└── active/               # Folder for ideas currently under discussion\n    ├── 0001-active.md    # Example of an idea under discussion\n    └── ...\n\nThe process starts with submitting an issue using a predefined template. If it passes a minimum check, it will be marked as \"accepted-candidate,\" and a new markdown file will automatically be created under the \"active\" folder for further discussion and work.\n\nYou are given a text that is in markdown format which belongs to the IdeaPool repository on GitHub. These articles may contain mixed Farsi and English language terms. First, translate the article to English. Don'\''t change the header/titles and don'\''t change the format for idea type, category, and subcategories. If any field didn'\''t have any response, try to provide some information for that field. Also, improve the title of the idea or any other field. The goal is to have this article consumable for educators and educational content creators. For the Frequently Asked Questions field, give five FAQs related to the idea. For Experiential Scenarios, imagine you are a teacher and you want to put your student in a hypothetical or real challenge. Describe five examples of challenges students can face, and how they can use the concepts in this topic to overcome them. At the end of it, add the full translation of the updated text in farsi. The response should not have any escaped charchters like \n. The response should be unscaped string. Describe five examples of challenges students can face and how they can use the concepts in this topic to overcome them. At the end of the response, provide the full translation of the updated text in Farsi. The response should not include any escaped characters such as \n and should be an unescaped string. Additionally, if there are any images in the text, include a descriptive alt text after each one. If the text comes from a book or an article, include the source text after it. On top of the file add the tags for main education topic, idea type, main context topic and the general score in latex format something like this (fix the latex commands for color space and textbf): **Tags:** $TAGS "
        },
        {
            "role": "user",
            "content": $ESCAPED_ISSUE_BODY
        }
    ]
}
EOF
)

# Debugging log: Print the final JSON body (send to stderr)
echo "Debugging log: ESCAPED_REQUEST_MESSAGE_BODY content:" >&2
echo "$ESCAPED_REQUEST_MESSAGE_BODY" >&2

# Prepare the JSON body for the OpenAI API request
ESCAPED_JSON_BODY=$(jq -n --arg body "$ESCAPED_ISSUE_BODY" "$ESCAPED_REQUEST_MESSAGE_BODY")

# Debugging log: Print the final JSON body (send to stderr)
echo "Debugging log: ESCAPED_JSON_BODY content:" >&2
echo "$ESCAPED_JSON_BODY" >&2

# Validate the JSON body using jq
echo "$ESCAPED_JSON_BODY" | jq . > /dev/null 2>&1

# Check if the JSON is valid
if [ $? -eq 0 ]; then
    echo "Valid JSON" >&2
else
    echo "Invalid JSON" >&2
    exit 1
fi

# Send a request to the OpenAI API
API_RESPONSE=$(curl --location 'https://api.openai.com/v1/chat/completions' \
--header "Authorization: Bearer $API_KEY" \
--header 'Content-Type: application/json' \
--data "$ESCAPED_JSON_BODY")

# Debugging log: Print the raw API response to inspect its content (send to stderr)
echo "Debugging log: API_RESPONSE content:" >&2
echo "$API_RESPONSE" >&2

# Extract the content from the API response
MD_CONTENT=$(echo "$API_RESPONSE" | jq -r '.choices[0].message.content')

# Optionally, remove additional escape sequences (like \")
MD_CONTENT=$(echo "$MD_CONTENT" | sed 's/"/"/g')

# Return the fully unescaped markdown content (standard output)
echo -e "$MD_CONTENT"
