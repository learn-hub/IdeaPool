name: Create Markdown File on Issue Creation

on:
  issues:
    types: [opened]

permissions:
  contents: write  # Ensure write permissions for the repository

jobs:
  create-markdown:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the repository
        uses: actions/checkout@v3

      - name: Debugging - Print Issue Info
        run: |
          echo "Issue Number: ${{ github.event.issue.number }}"
          echo "Checking if ISSUE_NUMBER is properly captured"
          if [ -z "${{ github.event.issue.number }}" ]; then
            echo "Error: ISSUE_NUMBER is not set. Exiting."
            exit 1
          fi

      - name: Create Markdown file for new issue
        run: |
          echo "1- Create Markdown file for new issue -- Issue Number: ${{ github.event.issue.number }}"
          ISSUE_NUMBER=${{ github.event.issue.number }}
          
          echo "2- Found the Issue Number: ${ISSUE_NUMBER}"

          # Ensure the 'issues' directory exists
          mkdir -p issues
          echo "3- Created 'issues' directory"

          # Create the markdown file content
          MD_CONTENT="hi issue created\n\nIssue Number: #${ISSUE_NUMBER}"
          echo "4- Markdown content: $MD_CONTENT"

          # Write the content to the markdown file
          echo "$MD_CONTENT" > "issues/issue-${ISSUE_NUMBER}.md"
          echo "Created markdown file: issues/issue-${ISSUE_NUMBER}.md"

      - name: Debugging - Check if Markdown file exists
        run: |
          ISSUE_NUMBER=${{ github.event.issue.number }}
          echo "Checking if the markdown file exists:"
          ls issues
          cat "issues/issue-${ISSUE_NUMBER}.md"

      - name: Commit the new markdown file
        run: |
          ISSUE_NUMBER=${{ github.event.issue.number }}
          git config --local user.name "github-actions"
          git config --local user.email "github-actions@github.com"
          git add issues/issue-${ISSUE_NUMBER}.md
          git commit -m "Add markdown file for issue #${ISSUE_NUMBER}"
          git push
