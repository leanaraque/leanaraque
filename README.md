# Leandro Araque

**AI Engineer — governed agents, RAG and multimodal LLMs in production.**

[![Website](https://img.shields.io/badge/leanaraque.com-39E09B?style=for-the-badge&logo=Linktree&logoColor=white&labelColor=101010)](https://leanaraque.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/leanaraque)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=101010)](https://youtube.com/@leanaraque)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white&labelColor=101010)](http://dawoork.com/discord)
[![Email](https://img.shields.io/badge/hey@leanaraque.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&labelColor=101010)](mailto:hey@leanaraque.com)

Putting an agent into production inside a real company doesn't fail because of the
model. It fails because of everything around the model: who authorized the action,
what evidence backs the answer, whether sensitive data left the perimeter, and who
signed off.

I build that layer. Seven years in data underneath it, and products that are live
in the App Store rather than in a notebook.

---

## What I'm building

| Project | What it is | Status |
| :--- | :--- | :--- |
| **[SynapseFlow](https://github.com/leanaraque/SynapseFlow)** | Governed agent platform for regulated industries. A declarative domain ontology compiles to LangChain tools, approval gates, RBAC and PII boundaries. LangGraph + LangChain 1.x on Firebase. | 🚧 Ontology and persistence shipped and tested; agent graph in progress |
| **[MediMate](https://github.com/leanaraque/MediMate)** | Multi-agent medication concierge on Google ADK, with a custom MCP server over openFDA and RxNorm. Prescribing is blocked in code, not in the prompt. | ✅ Google × Kaggle capstone |
| **[Verifood](https://verifood.io)** | AI nutrition app — photo or voice in, full nutritional breakdown out. Flutter, Angular, Node.js on Firebase, multimodal inference with Gemini and Groq. | ✅ Live on iOS, Android and Web |
| **[DataVoz Daily](https://leanaraque.com/articles)** | Autonomous pipeline that ingests 8 RSS sources, summarizes them bilingually with Gemini and publishes every morning — with output validation and retries. | ✅ Running daily, unattended |
| **[Noventa](https://noventa.leanaraque.com)** | Every 2026 World Cup knockout match rebuilt as a generative image from real momentum and xG data. | ✅ Complete |

---

## How I build

The same four rules show up in everything above.

**Guardrails are architecture, not prompt instructions.** If an action is
irreversible, the approval gate is generated from the domain definition. A
developer cannot forget to add one.

**Model output is validated, not trusted.** Schema enforcement, verification
passes, retries — and discarding a result rather than shipping a bad one.

**The model doesn't compute numbers.** Deterministic code calculates; the model
explains and cites. No estimating magnitudes a human will later sign.

**Say what runs and what doesn't.** Every repo here carries an honest status
table. Nothing is announced before it works.

---

## Stack

**Agents & LLMs**
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-000000?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white)

**Backend & Cloud**
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

**Frontend**
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

**Data**
![SQL](https://img.shields.io/badge/SQL-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)
![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![BigQuery](https://img.shields.io/badge/BigQuery-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)

---

## Teaching

I've trained 1,500+ professionals in SQL, Power BI and Python as a Data Science
professor at **Coderhouse**, and I architect the curriculum at
**[Dawoork Academy](https://academy.dawoork.com)** for data and AI practitioners
across LATAM.

**[DataVoz](https://open.spotify.com/show/03bwYaeEvsdZnQQyXTJPHq)** — my podcast and
newsletter on data, AI and how they change the way decisions get made.
Weekly, in Spanish.

Executive training at Harvard Business School Online (CORe).

---

<sub>Founder of <a href="https://dawoork.com">Dawoork</a> and co-founder of
<a href="https://fractane.web.app">Fractane</a>. Building from Tandil, Argentina,
for the world.</sub>
