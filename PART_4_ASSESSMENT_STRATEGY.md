# Part 4: Assessment Strategy (Evidence-Based Competency Evaluation)

This part defines how learner progress is measured throughout the networking layers module so assessment remains fair, practical, and directly tied to real troubleshooting capability.

## 1) Assessment Principles

Assessment should verify what learners can **explain**, **observe**, and **do** under realistic conditions.

- **Layer alignment**: every graded task maps to one or more layers.
- **Evidence over guesswork**: learners must support conclusions with command output, packet evidence, or structured reasoning.
- **Progressive difficulty**: low-stakes checks first, integrated scenarios later.
- **Consistency**: use repeatable rubrics across labs, quizzes, and capstone work.

These principles prevent over-reliance on memorization and reward operational thinking.

---

## 2) Assessment Categories

Use a balanced mix so both conceptual understanding and execution skills are evaluated.

### A) Formative Assessment (Continuous, Low-Stakes)
- Weekly quizzes (concept clarity and layer mapping).
- Short protocol identification drills.
- Packet analysis worksheets with guided prompts.
- Lab checkpoints with instructor/self feedback.

### B) Summative Assessment (Milestone, Higher-Stakes)
- Mid-module theory + applied diagnostics exam.
- Final capstone incident investigation and report.

### C) Performance Artifacts (Portfolio Evidence)
- Troubleshooting journal entries.
- Subnet/routing planning exercises.
- Annotated packet captures and command transcripts.

---

## 3) Layer-to-Assessment Mapping

Each layer should be measured using tasks that reflect real behavior at that scope.

1. **Layers 1–2 (Physical/Data Link)**
   - Identify link instability symptoms.
   - Diagnose ARP/VLAN/switching issues from provided evidence.

2. **Layer 3 (Network)**
   - Validate addressing/subnet choices.
   - Prove routing path validity with diagnostic output.

3. **Layer 4 (Transport)**
   - Distinguish TCP/UDP behavior from captures.
   - Identify port reachability vs service availability failures.

4. **Layers 5–7 (Upper Layers)**
   - Isolate DNS, TLS, and application protocol issues.
   - Explain user-visible symptoms with protocol-level reasoning.

5. **Cross-Layer Security**
   - Classify attack or misconfiguration patterns by layer domain.
   - Recommend layered controls with clear justification.

---

## 4) Assessment Instruments by Phase

### Phase 1: Foundations (Unit 0–1)
- Short quiz on OSI/TCP-IP mapping and encapsulation sequence.
- Basic observation lab: identify protocol stack in a simple capture.

### Phase 2: Core Networking (Unit 2–4)
- Timed subnetting and route reasoning exercises.
- Data-link and transport troubleshooting mini-scenarios.
- Practical checks using `ping`, `traceroute/tracert`, `ip`/`ifconfig`/`ipconfig`, `netstat`/`ss`.

### Phase 3: Services and Security (Unit 5–6)
- DNS/HTTP/TLS analysis worksheet.
- Threat-to-control mapping task across layers.

### Phase 4: Integration (Unit 7 Capstone)
- End-to-end incident response simulation.
- Structured incident report with root-cause mapping and corrective plan.

---

## 5) Scoring Model (Suggested)

Use a weighted model that rewards sustained engagement and final competency.

- **Formative checks (quizzes + worksheets): 20%**
- **Hands-on labs and practical evidence: 35%**
- **Mid-module exam: 20%**
- **Final capstone: 25%**

If needed, adjust by cohort constraints while keeping practical work heavily weighted.

---

## 6) Rubric Design (Core Dimensions)

Apply the same dimensions across practical tasks to keep grading consistent.

1. **Technical Accuracy**
   - Are protocol/layer interpretations correct?
   - Are diagnostic conclusions valid?

2. **Method and Sequence**
   - Was troubleshooting performed in proper layered order?
   - Were unnecessary jumps and assumptions avoided?

3. **Evidence Quality**
   - Are claims supported by command/capture/log artifacts?
   - Is evidence relevant and sufficient?

4. **Communication Clarity**
   - Is the report structured and readable?
   - Are findings, root cause, and actions clearly separated?

5. **Corrective Reasoning**
   - Are proposed fixes appropriate to the failed layer?
   - Are preventive actions realistic and risk-aware?

---

## 7) Capstone Assessment Specification

The capstone should measure integrated decision-making, not isolated fact recall.

### Scenario Requirements
- Include at least one misleading symptom to test diagnostic discipline.
- Require verification across multiple layers before root cause is clear.
- Provide realistic artifacts (packet snippets, host output, service logs).

### Required Learner Deliverables
- Symptom summary and impact statement.
- Layered test sequence executed.
- Evidence table (test, result, interpretation).
- Root cause mapped to specific layer/protocol.
- Corrective action and preventive recommendation.

### Minimum Passing Standard
Learner demonstrates a repeatable workflow, reaches a defensible root cause, and justifies remediation using technical evidence.

---

## 8) Feedback and Remediation Loop

Assessment should guide improvement, not only assign scores.

- Provide feedback tied to rubric dimensions, not generic comments.
- Flag recurring mistakes (e.g., skipping layer checks, weak evidence linkage).
- Assign targeted remediation tasks by failure pattern:
  - Layer confusion -> mapping drills.
  - Evidence weakness -> packet/command annotation practice.
  - Sequence errors -> constrained troubleshooting walkthroughs.

Reassessment should confirm that the specific gap is closed before progression.

---

## 9) Academic Integrity and Authenticity

To keep results meaningful:
- Require brief oral/written defense of selected findings for major practical tasks.
- Use variant scenarios so answers cannot be reused mechanically.
- Grade evidence interpretation, not copied command lists.

This preserves authenticity while still supporting collaborative learning.

---

## 10) Expected Outcome of Part 4

After implementing this strategy, evaluation becomes:
- aligned to the layered curriculum,
- reliable across instructors or self-review cycles,
- and focused on real troubleshooting competence.

Learners are measured not just on what they remember, but on how they diagnose, justify, and communicate network decisions under realistic constraints.
