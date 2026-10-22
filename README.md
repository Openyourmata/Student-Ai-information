# AI Launchpad: K-12 Student Learning & Research Portal

A modern, simplistic, and user-friendly web portal designed to guide students across all grade levels into Artificial Intelligence and Machine Learning:
- **Elementary School (Grades 1 to 5)**
- **Middle School (Grades 6 to 8)**
- **High School (Grades 9 to 12)**

---

## Key Features

### 1. Age-Appropriate Learning Pathways
- **Elementary (Grades 1-5)**: Pattern recognition, doodling models, and visual block classifiers (*Google Quick, Draw!*, *Code.org AI for Oceans*, *Machine Learning for Kids in Scratch*).
- **Middle School (Grades 6-8)**: Smartphone AI applications, webcam training, and logic models (*MIT App Inventor*, *Google Teachable Machine*, *Elements of AI*).
- **High School (Grades 9-12)**: Python programming, PyTorch neural networks, open-source model pipelines, and college capstone builds (*Harvard CS50 AI*, *Fast.ai*, *3Blue1Brown*, *Hugging Face*).

### 2. Featured Organization: Hack the Hood
- Highlights **[Hack the Hood](https://www.hackthehood.org/)**, an established nonprofit providing underrepresented youth and young adults (ages 14-25) with tech literacy, Python programming, and data science training.
- Features details on their cohort structure, **complimentary laptops and tech stipends**, 1-on-1 industry mentorship, and college/career pathways.

### 3. Recent AI Research Articles & Student Prefaces
- Searchable research lookup featuring key machine learning publications (e.g., *DeepSeek-R1*, *AlphaFold 3*, *Attention Is All You Need*, *Constitutional AI*, *Llama 3*, *Direct Preference Optimization*, *FlashAttention*).
- **Student Preface**: Each article contains an accessible preface summarizing the practical breakthrough in plain language without academic jargon.
- Direct links to open-access publications on arXiv and *Nature*.

### 4. Multilingual Support (4 Languages)
- Instant language switcher in the navigation bar supporting:
  - **English**
  - **Español** (Spanish)
  - **हिन्दी** (Hindi)
  - **粵語** (Cantonese)
- Automatically saves language preferences to `localStorage`.

### 5. AI Fact of the Day
- A daily rotating educational feature highlighting verified historical milestones, breakthroughs, and origins in AI (from the 1920 origin of the word 'Robot' to AlphaFold 3 and 1952 speech recognition).
- Users can browse through facts with "Previous Fact" and "Next Fact" controls.

### 6. Daily AI Wordle ("AI Termle") Knowledge Game
- An interactive daily game where students test their knowledge of 5-letter AI concepts (e.g., `MODEL`, `EPOCH`, `TOKEN`, `LAYER`, `TRAIN`, `AGENT`, `BATCH`).
- 6 attempts with color feedback (correct position, wrong position, not in word).
- Features an optional "Show Clue" hint button and full post-solve explanations of the term's role in machine learning.
- Supports physical keyboard typing as well as on-screen virtual keyboard touch taps on mobile.

### 7. Collaborative Technical Communities
- Constructive developer spaces focused on mentorship, problem-solving, and code review:
  - **Hack the Hood**: Community cohorts with mentors and hardware access.
  - **Hack Club Slack**: Developer network for teenage builders (ages 13-18).
  - **Kaggle Discussion Forums**: Data science and machine learning community with beginner channels and public notebooks.
  - **Fast.ai Forums**: Detailed technical discourse with patient pedagogical moderation.

### 8. Starter Milestones & Competitions
- **Microsoft Imagine Cup Junior (Ages 13-18)**: Accessible global AI concept challenge with guided curriculum.
- **Hour of Code: AI for Oceans (Grades 1-8)**: Self-contained interactive tutorial.
- **Kaggle Titanic Challenge**: Self-paced asynchronous machine learning sandbox.
- **Interactive 30-Day Milestone Tracker**: LocalStorage-backed progress checklist.

### 9. Design System: Warm, Simplistic & Minimalist
- **Warm & Approachable Color Palette**: Warm terracotta accents, soft linen backgrounds, warm sage secondary tones, and deep espresso text for comfortable reading.
- **Zero Emojis**: Clean, professional typography and minimalist SVG vector icons.
- **Mobile-First Layout**: Fluid responsive typography, touch targets meeting the 40px+ standard, and collapsible mobile drawer navigation.

---

## How to Run Locally

### Option 1: Instant Browser Launch
Double-click `index.html` in Finder to open it in Safari, Chrome, Edge, or Firefox.

### Option 2: Local Web Server
```bash
cd /Users/mateenrasul/Downloads/ai-highschool-hub
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## Free Deployment on GitHub Pages

1. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Refactor to warm, minimalist, modern design"
   ```
2. Create a repository on GitHub and push your files:
   ```bash
   git remote add origin https://github.com/<your-username>/ai-launchpad.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub Settings, enable **Pages > Source: Branch 'main' / 'root'**.
