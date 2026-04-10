# Full Learning Module: Networking Layers (OSI + TCP/IP)

## 1) Module Overview

This module is a complete, end-to-end learning path for mastering networking layers, from physical transmission to application protocols. It combines theory, packet-level understanding, hands-on labs, troubleshooting practice, and assessment checkpoints.

### Target Learners
- Beginners in IT, CS, Cybersecurity, and Network Engineering
- Self-learners preparing for networking certifications
- Developers who need strong network fundamentals

### Prerequisites
- Basic computer literacy
- Familiarity with command line (Windows/Linux/macOS)
- Optional: basic Python or scripting knowledge for automation tasks

### Total Duration (Suggested)
- 8 to 12 weeks (4–6 hours/week)

### Core Outcomes
By the end of this module, learners should be able to:
1. Explain the purpose of each OSI and TCP/IP layer.
2. Identify protocols, devices, and data units at each layer.
3. Analyze packet flows using Wireshark and CLI tools.
4. Configure and troubleshoot addressing, routing, transport, and application services.
5. Diagnose network issues using a layered troubleshooting methodology.
6. Apply security best practices at every layer.

---

## 2) Learning Map

### OSI Model Layers
1. Physical  
2. Data Link  
3. Network  
4. Transport  
5. Session  
6. Presentation  
7. Application  

### TCP/IP Model Mapping
- Link Layer ≈ OSI Layers 1–2
- Internet Layer ≈ OSI Layer 3
- Transport Layer ≈ OSI Layer 4
- Application Layer ≈ OSI Layers 5–7

---

## 3) Module Structure (Unit-by-Unit)

## Unit 0: Foundations and Mental Models

### Objectives
- Understand why layered architectures exist.
- Compare OSI and TCP/IP models.
- Understand encapsulation/decapsulation.

### Topics
- History of networking models
- Encapsulation, headers, trailers, payloads
- Data units: bits, frames, packets, segments, messages
- Client-server and peer-to-peer communication

### Lab
- Install Wireshark
- Capture traffic while browsing a website
- Identify traffic at multiple layers

### Deliverable
- Short reflection: “How layered design simplifies troubleshooting.”

---

## Unit 1: Layer 1 — Physical Layer

### Objectives
- Explain how bits move across physical media.
- Distinguish wired and wireless transmission basics.

### Topics
- Signals: electrical, optical, radio
- Copper vs fiber vs wireless
- Bandwidth, throughput, latency, jitter, attenuation, noise
- Duplex modes: half/full duplex
- Devices: hubs, repeaters, media converters

### Lab
- Use `ping` to measure latency and packet loss
- Compare local vs external destination performance

### Troubleshooting Focus
- Cable faults, interference, signal quality, speed/duplex mismatch

---

## Unit 2: Layer 2 — Data Link Layer

### Objectives
- Understand framing, MAC addressing, and switching.
- Explain VLAN segmentation and loop prevention.

### Topics
- Ethernet frame structure
- MAC addresses and ARP basics
- Switch operation and MAC table learning
- VLANs, trunks, 802.1Q tagging
- STP basics and broadcast domains
- Error detection with FCS/CRC

### Lab
- Observe ARP traffic in Wireshark
- Simulate two VLANs and verify isolation

### Troubleshooting Focus
- MAC flapping, VLAN misconfiguration, ARP failures, loops

---

## Unit 3: Layer 3 — Network Layer

### Objectives
- Master IP addressing and packet forwarding.
- Understand routing concepts and ICMP diagnostics.

### Topics
- IPv4 structure, subnetting, CIDR
- IPv6 basics and address types
- Routing table and default gateway
- Static vs dynamic routing concepts (OSPF/BGP intro)
- ICMP, TTL, fragmentation basics
- NAT/PAT concepts

### Lab
- Subnet planning exercise
- Use `ipconfig/ifconfig/ip`, `route`, `traceroute/tracert`
- Analyze ICMP packets in Wireshark

### Troubleshooting Focus
- Wrong subnet masks, missing routes, gateway errors, NAT issues

---

## Unit 4: Layer 4 — Transport Layer

### Objectives
- Differentiate TCP and UDP behavior.
- Understand reliability, flow control, and port usage.

### Topics
- TCP handshake and teardown
- Sequence numbers, acknowledgments, retransmissions
- Windowing and flow/congestion control (intro)
- UDP characteristics and real-time use cases
- Ports and sockets

### Lab
- Compare TCP vs UDP traffic patterns in Wireshark
- Test service ports with `netstat`, `ss`, or `nc`

### Troubleshooting Focus
- Port blocks, connection resets, timeout causes, packet loss impact

---

## Unit 5: Layers 5–7 — Session, Presentation, Application

### Objectives
- Understand how user-facing services operate over lower layers.
- Identify key protocols and data formats.

### Topics
- Session concepts (stateful communication, session tokens)
- Presentation concepts (encryption, compression, encoding)
- Application protocols:
  - HTTP/HTTPS
  - DNS
  - DHCP
  - SMTP/IMAP/POP3
  - FTP/SFTP
  - SSH
- TLS handshake basics
- API communication basics (REST over HTTP)

### Lab
- Query DNS with `nslookup` or `dig`
- Inspect HTTPS handshake metadata in Wireshark
- Capture HTTP request/response headers

### Troubleshooting Focus
- DNS resolution failures, TLS certificate issues, app-layer errors

---

## Unit 6: Cross-Layer Security

### Objectives
- Apply security controls and understand layered threats.

### Topics
- Layer 2 attacks: ARP spoofing, MAC flooding (conceptual)
- Layer 3/4 attacks: spoofing, scans, SYN flood basics
- Layer 7 attacks: injection, credential abuse, DDoS patterns
- Network segmentation and zero trust principles
- Firewalls, ACLs, IDS/IPS, VPN basics
- Secure protocol choices (HTTPS, SSH, SFTP)

### Lab
- Build a simple layered defense checklist for a small office network
- Analyze suspicious packet patterns from sample capture files

---

## Unit 7: Layered Troubleshooting Capstone

### Objectives
- Solve end-to-end incidents systematically.

### Troubleshooting Workflow
1. Confirm physical/link status  
2. Verify local IP configuration  
3. Test local gateway and routing path  
4. Validate transport ports/services  
5. Validate DNS/application behavior  
6. Correlate findings using packet captures and logs  

### Capstone Activities
- Diagnose “no internet” scenario
- Diagnose “can ping IP but cannot open website”
- Diagnose “high latency for voice/video traffic”

### Final Deliverable
- Incident report using OSI-layer root cause mapping

---

## 4) Assessment Strategy

### Formative Assessments
- Weekly quizzes (10–15 questions)
- Packet analysis worksheets
- Subnetting and protocol identification exercises

### Summative Assessments
- Mid-module theory + practical exam
- Final capstone troubleshooting assessment

### Suggested Grading Breakdown
- Quizzes: 20%
- Labs: 35%
- Mid-module exam: 20%
- Capstone: 25%

---

## 5) Recommended Tooling

- Wireshark
- Cisco Packet Tracer or GNS3 (optional)
- Command line tools:
  - `ping`
  - `traceroute` / `tracert`
  - `ip`, `ifconfig`, `ipconfig`
  - `netstat` / `ss`
  - `nslookup` / `dig`
  - `curl`

---

## 6) Weekly Study Plan (Example: 10 Weeks)

1. Week 1: Foundations + model mapping  
2. Week 2: Physical layer  
3. Week 3: Data link layer  
4. Week 4: Network layer (IPv4 + subnetting)  
5. Week 5: Network layer (routing + IPv6)  
6. Week 6: Transport layer  
7. Week 7: Application protocols + DNS/HTTP/TLS  
8. Week 8: Security across layers  
9. Week 9: Integrated troubleshooting labs  
10. Week 10: Capstone and final evaluation  

---

## 7) Completion Criteria

Learners complete the module when they can:
- Correctly identify protocol/layer relationships in packet captures
- Configure and validate addressing and routing in a small topology
- Explain and troubleshoot transport/app failures with evidence
- Produce a clear, layer-by-layer incident diagnosis report

---

## 8) Instructor / Self-Learner Notes

- Keep every topic tied to observable packet behavior.
- Prioritize “why” and “when” over memorization.
- Repeat the layered troubleshooting workflow until it becomes automatic.
- Maintain a personal troubleshooting journal with symptoms, tests, findings, and root causes.

---

## 9) Full Layer-by-Layer Resource Pack

For an extensive resource library covering each OSI layer, cross-layer security, capstone resources, tools, labs, and evidence templates, use:

- `PART_5_LAYER_RESOURCES.md`
