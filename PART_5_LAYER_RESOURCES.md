# Part 5: Layer-by-Layer Resource Library (Complete Study Pack)

This resource library gives a focused set of learning materials for each OSI layer (plus cross-layer practice), including what to study, what to practice, and what evidence to produce.

---

## How to Use This Library

For each layer:
1. Learn the core concepts.
2. Use packet/tools evidence to validate understanding.
3. Complete at least one lab.
4. Write a short troubleshooting note with findings.

---

## Layer 1 — Physical

### Learn
- Signal basics: electrical, optical, radio.
- Bandwidth vs throughput vs latency vs jitter.
- Attenuation, interference, duplex/negotiation basics.

### Resources
- Ethernet standards overview (IEEE 802.3 family references).
- Fiber/copper media comparison guides from major vendors (Cisco/Juniper/Aruba docs).
- Intro RF and Wi-Fi fundamentals (channel overlap, noise floor, RSSI basics).

### Tools
- `ping` (latency/loss trends)
- `ethtool` (Linux link speed/duplex)
- Interface statistics (`ip -s link`, switch port counters)

### Lab Ideas
- Compare latency/loss to gateway vs public host over repeated tests.
- Force and restore duplex/speed settings in a lab simulator; observe effects.
- Measure Wi-Fi vs wired consistency (jitter/loss comparison).

### Evidence to Produce
- Table with test target, packet loss %, avg latency, jitter notes.
- Hypothesis: physical issue vs higher-layer issue, with justification.

---

## Layer 2 — Data Link

### Learn
- Ethernet frame fields, MAC behavior, ARP, VLANs, trunks.
- Broadcast domains and loop prevention basics (STP concepts).

### Resources
- Ethernet frame and ARP protocol references (IETF/standards summaries).
- Vendor VLAN/trunking fundamentals guides.
- STP conceptual walkthroughs from switching documentation.

### Tools
- Wireshark filters: `arp`, `eth.addr`, `vlan`
- `arp -a` / `ip neigh`
- Switch MAC table commands (platform equivalent)

### Lab Ideas
- Capture ARP request/reply and map IP-to-MAC resolution.
- Build two VLANs and verify isolation before routing.
- Introduce a trunk mismatch in simulation and diagnose symptom path.

### Evidence to Produce
- MAC table snapshot + VLAN mapping.
- One-page diagnosis showing whether failure is local-segment (L2) scoped.

---

## Layer 3 — Network

### Learn
- IPv4 subnetting/CIDR, gateway logic, route selection.
- IPv6 fundamentals, ICMP diagnostics, NAT behavior.

### Resources
- IPv4/IPv6 RFC introductions and subnetting practice banks.
- Routing fundamentals documentation (static routes + OSPF/BGP concepts).
- NAT/PAT behavior guides from firewall/router vendors.

### Tools
- `ip addr`, `ip route`, `route print`, `traceroute`/`tracert`
- `ping` with controlled packet size/TTL options
- Wireshark filters: `ip`, `ipv6`, `icmp`

### Lab Ideas
- Subnet a small office into multiple VLAN-backed subnets.
- Break default gateway and recover using route validation.
- Compare path changes with traceroute under different next-hop configs.

### Evidence to Produce
- Address plan table (subnet, mask, usable range, gateway).
- Routing proof: route table + hop path + conclusion.

---

## Layer 4 — Transport

### Learn
- TCP handshake/teardown, sequence/acknowledgment behavior.
- Retransmissions, flow/congestion basics, UDP tradeoffs.
- Port/service mapping and socket state interpretation.

### Resources
- TCP/UDP RFC summaries and transport behavior explainers.
- Practical deep dives on retransmissions, resets, and timeouts.
- Service-port references (IANA well-known ports + operational guides).

### Tools
- `ss` / `netstat`
- `nc` / `telnet` for port checks
- Wireshark filters: `tcp`, `udp`, `tcp.analysis.retransmission`

### Lab Ideas
- Compare TCP and UDP transfer behavior on stable vs unstable paths.
- Validate open vs filtered vs closed ports for test services.
- Trigger a timeout/reset scenario and classify where failure occurs.

### Evidence to Produce
- Connection-state table (SYN/SYN-ACK/ACK or failure stage).
- Port reachability matrix with interpretation.

---

## Layers 5–7 — Session, Presentation, Application

### Learn
- Session state continuity, token/session issues.
- Presentation concerns: encoding, encryption, compression.
- Application protocols: DNS, HTTP/HTTPS, SMTP, SSH, DHCP basics.

### Resources
- DNS fundamentals and troubleshooting docs.
- HTTP/TLS protocol references and certificate validation guides.
- API troubleshooting references (status codes, headers, auth flow).

### Tools
- `dig` / `nslookup`
- `curl -v` / `openssl s_client`
- Browser dev tools + Wireshark (`dns`, `http`, `tls`)

### Lab Ideas
- Trace DNS lookup to HTTP request and TLS negotiation in one flow.
- Break DNS resolver settings and document symptom differences.
- Use expired/wrong-name cert in lab and classify exact failure reason.

### Evidence to Produce
- Application request timeline with DNS/TCP/TLS/HTTP checkpoints.
- Error taxonomy: resolution vs transport vs certificate vs app response.

---

## Cross-Layer Security Resources

### Learn
- Threat classes at L2/L3-L4/L7 and defensive control mapping.
- Segmentation, least privilege, logging, and detection workflows.

### Resources
- MITRE ATT&CK techniques relevant to network abuse.
- NIST/CIS network hardening guidance.
- Vendor IDS/IPS and firewall best-practice design references.

### Tools
- Firewall rule review tools
- IDS signatures/alerts
- Packet + log correlation workflows

### Lab Ideas
- Map a simulated attack chain to impacted layers.
- Build a layered control checklist for a small office topology.
- Validate one preventive and one detective control per layer group.

### Evidence to Produce
- Threat-to-control matrix by layer.
- Residual-risk notes and prioritized remediation list.

---

## Capstone Resource Kit (Everything Integrated)

### Scenario Types
- No internet on one host.
- Can ping destination IP but web service fails.
- High latency/jitter hurting voice/video.
- Intermittent DNS/TLS issues across a subnet.

### Required Artifacts
- Symptoms and impact statement.
- Layer-by-layer test sequence.
- Evidence table (test, result, interpretation).
- Root cause mapped to layer/protocol.
- Corrective + preventive action list.

### Evaluation Checklist
- Followed strict layered order without skipping.
- Used evidence, not assumptions.
- Distinguished similar symptoms at different layers.
- Communicated root cause and fix clearly.

---

## Recommended Open Learning Platforms

- Cisco Networking Academy (network fundamentals tracks)
- Juniper Open Learning
- Wireshark official documentation and sample captures
- PracticalNetworking.net (subnetting/routing visual explanations)
- Cloudflare Learning Center (DNS, HTTP, TLS concepts)
- RFC Editor (protocol primary sources)

Use these alongside labs to avoid passive-only learning.

---

## Personal Study Workflow Template

For each week:
1. **Concept Pass**: read and summarize core layer concepts.
2. **Packet Pass**: capture or inspect traffic tied to that layer.
3. **Lab Pass**: execute one failure-and-fix scenario.
4. **Reflection Pass**: write a short incident-style note.

If you repeat this cycle per layer, you build both theory and troubleshooting fluency.
