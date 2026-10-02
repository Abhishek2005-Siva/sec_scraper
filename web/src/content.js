export default {
  name: 'SEC Filing QA',
  repo: 'https://github.com/Abhishek2005-Siva/sec_scraper',
  eyebrow: 'Filing Q&A to Google Sheets',
  tagline: 'Turn a sheet of SEC filing links and questions into a sheet of answers.',
  description:
    'A Streamlit pipeline that reads filing URLs and questions from a Google Sheet, fetches each filing, asks the questions with OpenAI in parallel, and writes the answers back to the sheet.',
  stack: ['Python', 'Streamlit', 'OpenAI', 'Google Sheets', 'pandas'],
  notice:
    'This is a showcase page. The Streamlit app needs your own Google service account and OpenAI key, so it runs locally from the repository.',
  steps: [
    { title: 'Connect', text: 'Upload a Google service account JSON and your OpenAI key.' },
    { title: 'Read the sheet', text: 'Loads filing URLs and the questions from an input tab.' },
    { title: 'Ask in parallel', text: 'Fetches each filing and answers every question concurrently, with retries.' },
    { title: 'Write back', text: 'Results land in an output tab in the original order, failures included.' },
  ],
  features: [
    { title: 'Guided steps', text: 'A stepper, status cards and a runtime and cost estimate before you start.' },
    { title: 'Concurrent processing', text: 'Configurable concurrency across filings and questions.' },
    { title: 'Sheet-native', text: 'Inputs and outputs live in Google Sheets, so results are easy to share.' },
    { title: 'Scheduled runs', text: 'run_daily.py supports unattended daily runs.' },
  ],
  startNote: 'Needs Python, an OpenAI API key and a Google service account with access to your sheet.',
  quickstart: `git clone https://github.com/Abhishek2005-Siva/sec_scraper
cd sec_scraper
pip install -r requirements.txt

streamlit run app.py`,
}
