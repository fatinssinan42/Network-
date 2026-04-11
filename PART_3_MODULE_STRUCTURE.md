# Part 3: Module Structure (Unit-by-Unit Learning Path)

This part expands the unit structure into a guided progression so learners can move from fundamentals to end-to-end troubleshooting with clear outcomes at every stage.

## 1) How to Read This Structure

Each unit is designed with the same logic:
- **Objectives**: what learners must understand or do.
- **Core Topics**: the concepts and protocol scope.
- **Lab Focus**: practical exercises that produce observable evidence.
- **Troubleshooting Focus**: common faults and what to verify first.
- **Exit Criteria**: what must be true before advancing.

This consistency helps learners avoid random topic-jumping and builds layered reasoning step-by-step.

---

## 2) Unit 0 — Foundations and Mental Models

### Purpose
Unit 0 creates the conceptual frame for every later topic. It ensures learners understand layered architecture, encapsulation, and diagnostic thinking before protocol memorization.

### Objectives
- Explain why layered models exist.
- Compare OSI and TCP/IP models in practical terms.
- Describe encapsulation and decapsulation across a packet journey.
- Connect user actions (opening a browser) to multi-layer protocol behavior.

### Core Topics
- Why networks need abstraction layers.
- Header/trailer/payload relationships.
- Data units across layers (bits, frames, packets, segments, data).
- Client-server interactions and state transitions.

### Lab Focus
- Install and open Wireshark.
- Capture simple web browsing traffic.
- Identify at least one visible protocol at link, network, transport, and application layers.

### Troubleshooting Focus
- Misinterpreting packet views due to missing model context.
- Confusing protocol order in request/response flows.

### Exit Criteria
Learner can explain a basic packet journey from browser request to response using layered terminology.

---

## 3) Unit 1 — Layer 1 (Physical Layer)

### Purpose
Introduce transmission reality: networking starts with signals, media quality, and link integrity.

### Objectives
- Distinguish copper, fiber, and wireless media characteristics.
- Explain bandwidth, throughput, latency, jitter, and loss relationships.
- Identify typical physical-layer causes of unstable connectivity.

### Core Topics
- Signal types and degradation.
- Noise, attenuation, and interference.
- Duplex and negotiation basics.
- Physical devices and cabling constraints.

### Lab Focus
- Run repeated `ping` tests to local gateway and public target.
- Compare response variance and packet loss patterns.
- Correlate performance symptoms with potential physical causes.

### Troubleshooting Focus
- Loose/damaged cable paths.
- Duplex mismatches and poor signal environments.
- Intermittent wireless quality issues.

### Exit Criteria
Learner can separate physical instability from higher-layer protocol faults.

---

## 4) Unit 2 — Layer 2 (Data Link Layer)

### Purpose
Build understanding of local segment behavior: frames, MAC learning, VLAN boundaries, and switching logic.

### Objectives
- Explain Ethernet frame structure and delivery rules.
- Understand MAC table learning and forwarding decisions.
- Interpret ARP behavior and failure impact.
- Describe VLAN segmentation and trunk concepts.

### Core Topics
- Frame fields and FCS/CRC role.
- Broadcast, unicast, and local domain behavior.
- ARP request/reply flows.
- VLANs, trunking, and loop prevention basics.

### Lab Focus
- Capture ARP traffic and identify who asks/responds.
- Simulate isolated VLAN segments and verify expected communication limits.

### Troubleshooting Focus
- ARP cache confusion or stale entries.
- Wrong VLAN assignment/trunk mismatch.
- Loops and excessive broadcast symptoms.

### Exit Criteria
Learner can diagnose local communication failures before escalating to routing assumptions.

---

## 5) Unit 3 — Layer 3 (Network Layer)

### Purpose
Establish IP addressing and routing fluency so learners can reason about path validity and segmentation.

### Objectives
- Calculate and validate IPv4 subnet boundaries.
- Interpret default gateway behavior and route selection.
- Understand IPv6 fundamentals and coexistence context.
- Use ICMP tools to isolate path problems.

### Core Topics
- IPv4/CIDR and subnet planning.
- Route table logic and next-hop decisions.
- IPv6 address forms and scope overview.
- ICMP diagnostics, TTL behavior, and basic fragmentation impact.
- NAT/PAT conceptual behavior.

### Lab Focus
- Subnet allocation practice for small topologies.
- Use `ip`, `ifconfig/ipconfig`, `route`, `traceroute/tracert` for path validation.
- Inspect ICMP flows in packet captures.

### Troubleshooting Focus
- Incorrect masks/gateway values.
- Missing routes or asymmetric paths.
- NAT translation side effects.

### Exit Criteria
Learner can prove or disprove IP-path viability with evidence.

---

## 6) Unit 4 — Layer 4 (Transport Layer)

### Purpose
Teach endpoint-to-endpoint communication behavior and why ports, reliability, and timing determine service reachability.

### Objectives
- Differentiate TCP and UDP tradeoffs.
- Explain handshake, retransmission, and acknowledgment behavior.
- Identify port-level access issues.

### Core Topics
- TCP setup/teardown mechanics.
- Sequence/ack logic and retransmission triggers.
- Flow and congestion control fundamentals.
- UDP characteristics and real-time design choices.
- Port and socket mapping to services.

### Lab Focus
- Compare TCP and UDP captures for the same test scenario.
- Use `netstat`/`ss`/`nc` to validate listener and connection state.

### Troubleshooting Focus
- Closed/filtered ports.
- Timeouts, resets, and retransmission spikes.
- Over-attributing all failures to application code.

### Exit Criteria
Learner can isolate transport failure from network path and application logic issues.

---

## 7) Unit 5 — Layers 5–7 (Session, Presentation, Application)

### Purpose
Connect protocol behavior directly to user-visible services and business outcomes.

### Objectives
- Classify common protocols by service role.
- Understand DNS, HTTP(S), TLS, and remote access basics.
- Interpret session/state and data formatting/encryption concerns.

### Core Topics
- Session continuity and authentication context.
- Presentation concerns: encoding, compression, encryption.
- Application protocols: DNS, HTTP/HTTPS, DHCP, SMTP/IMAP/POP3, FTP/SFTP, SSH.
- TLS handshake and certificate validation basics.

### Lab Focus
- Use `dig`/`nslookup` to inspect name resolution.
- Capture HTTP(S) requests and identify key metadata.
- Observe TLS negotiation fields in packet traces.

### Troubleshooting Focus
- DNS resolution mismatches.
- TLS certificate trust/expiration/name errors.
- Service-level misconfiguration and protocol mismatch.

### Exit Criteria
Learner can trace a user-facing outage to a specific upper-layer protocol failure mode.

---

## 8) Unit 6 — Cross-Layer Security

### Purpose
Show that security control and attack surface span all layers, not just firewall rules or endpoint software.

### Objectives
- Recognize representative threats at each layer.
- Map controls to specific threat vectors.
- Build layered defense reasoning for small and medium environments.

### Core Topics
- Layer 2 threats (ARP abuse, local spoofing concepts).
- Layer 3/4 threats (scans, floods, source manipulation).
- Layer 7 threats (injection, abuse of app logic, credential attacks).
- Segmentation, least privilege, ACL/firewall concepts, IDS/IPS and VPN basics.

### Lab Focus
- Produce a layered security checklist for a sample office topology.
- Review capture/log samples and classify suspicious patterns by layer.

### Troubleshooting Focus
- Misplaced controls (e.g., app-only controls for network abuse).
- Over-reliance on a single perimeter layer.

### Exit Criteria
Learner can justify defense choices using explicit layer-based reasoning.

---

## 9) Unit 7 — Layered Troubleshooting Capstone

### Purpose
Convert all previous unit knowledge into repeatable, evidence-based incident diagnosis.

### Objectives
- Execute a strict layered troubleshooting workflow.
- Collect proof at each decision point.
- Produce a clear root-cause report linked to layers and protocols.

### Standard Workflow
1. Verify physical/link health.
2. Verify local addressing and gateway correctness.
3. Verify route/path validity.
4. Verify transport ports and connection behavior.
5. Verify DNS/application behavior.
6. Correlate packet evidence with host/service logs.

### Capstone Scenarios
- No-internet condition on a client host.
- “Can ping destination IP but cannot access website.”
- High latency/jitter affecting voice or video workloads.

### Deliverable
Structured incident report containing:
- symptoms,
- tests executed,
- evidence captured,
- failed layer/protocol,
- root cause,
- corrective and preventive actions.

### Exit Criteria
Learner can solve multi-layer incidents without skipping diagnostic sequence.

---

## 10) Progression Rules Across Units

To keep outcomes reliable:
- Advance only when exit criteria are met.
- Revisit prior unit if a troubleshooting gap appears.
- Keep a troubleshooting journal for pattern recognition.
- Tie every concept to observable traffic or command evidence.

This ensures learners build durable operational competence, not short-term memorization.

## 11) Expected Competency at End of Part 3

By completing this structure, learners should be able to:
- map any symptom to the most likely layer domain,
- choose the correct first diagnostic action,
- gather defensible technical evidence,
- and communicate findings in a professional incident format.
