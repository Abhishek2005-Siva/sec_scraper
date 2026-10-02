# SEC Filing QA

**Live site:** [sec-scraper-theta.vercel.app](https://sec-scraper-theta.vercel.app) · **Source:** [`/web`](web)

> The live site is a Vite + React landing page that explains the project. The application itself needs your own Google service account and OpenAI key, so it runs locally. Follow the setup steps below.

A Streamlit pipeline that reads SEC filing URLs and questions from a Google Sheet, fetches each filing, asks the questions with OpenAI, and writes the answers back to the sheet.

## Streamlit app

Upload a Google service account JSON, pick OpenAI or NVIDIA (free) and paste (or upload) your key in the sidebar, then run the pipeline.

```bash
pip install -r requirements.txt
streamlit run app.py
```

**Deploy on Streamlit Community Cloud:** at [share.streamlit.io](https://share.streamlit.io) choose this repo, branch `main` and main file `app.py`.

## How it works

1. **Connect:** upload a Google service account JSON and enter your OpenAI API key.
2. **Read the sheet:** load filing URLs and questions from an input tab.
3. **Ask in parallel:** fetch each filing and answer every question concurrently, with retries.
4. **Write back:** results go to an output tab in the original order, failures included.

The UI shows a stepper, status cards, and a runtime and cost estimate before you start.

## Files

| File | Purpose |
|---|---|
| `app.py` | Streamlit app (the interactive pipeline) |
| `run_daily.py` | Script for unattended, scheduled runs |
| `requirements.txt` | Python dependencies |
| `web/` | Landing page (Vite + React), deployed on Vercel |

## Run it locally

Requires Python, an OpenAI API key, and a Google service account that has access to your sheet.

```bash
git clone https://github.com/Abhishek2005-Siva/sec_scraper
cd sec_scraper
pip install -r requirements.txt

streamlit run app.py
```

## Landing page

```bash
cd web
npm install
npm run dev
```
