# Part 2: Learning Map (OSI Model + TCP/IP Mapping)

This section explains how networking knowledge is organized into layers, why that structure matters, and how to translate between the OSI and TCP/IP models in practical analysis.

## 1) Why a Learning Map Matters

A learning map is not just a list of layers. It is a way to think in a consistent order when:
- reading packet captures,
- troubleshooting outages,
- designing network changes,
- or discussing issues across teams.

Without a map, networking feels like disconnected protocols. With a map, every protocol and device has a place, and every incident can be broken into manageable checks.

## 2) OSI Model Layers (Top-to-Bottom Responsibilities)

The OSI model has seven layers. A useful way to remember them is by the type of problem each layer owns.

1. **Layer 7 – Application**
   - Owns user-facing network services and application protocols.
   - Examples: HTTP, DNS, SMTP, SSH.
   - Typical question: “Is the application service itself responding correctly?”

2. **Layer 6 – Presentation**
   - Owns data representation: encoding, encryption, compression.
   - Examples: TLS encryption context, character formats, serialization formats.
   - Typical question: “Can both sides correctly understand and decode the data?”

3. **Layer 5 – Session**
   - Owns session setup/maintenance/termination logic.
   - Examples: session IDs/tokens, long-lived authenticated exchanges.
   - Typical question: “Is session state valid and consistent across requests?”

4. **Layer 4 – Transport**
   - Owns end-to-end transport behavior.
   - Examples: TCP and UDP, ports, retransmissions, reliability behavior.
   - Typical question: “Can the two endpoints reliably exchange data on the required port?”

5. **Layer 3 – Network**
   - Owns logical addressing and routing between networks.
   - Examples: IPv4, IPv6, ICMP, routing tables.
   - Typical question: “Is there a valid IP path from source to destination?”

6. **Layer 2 – Data Link**
   - Owns local network delivery within a link/broadcast domain.
   - Examples: Ethernet framing, MAC addressing, VLAN tagging, switching.
   - Typical question: “Can frames be delivered correctly on this local segment?”

7. **Layer 1 – Physical**
   - Owns bit transmission over physical/wireless media.
   - Examples: copper, fiber, radio, signal quality.
   - Typical question: “Is the medium carrying bits cleanly and consistently?”

## 3) TCP/IP Model Mapping (Practical Internet Stack)

The TCP/IP model is commonly represented with four layers and is widely used in real-world networking discussions.

- **TCP/IP Link Layer ≈ OSI Layers 1–2**
  - Combines physical transmission + local framing/link delivery.

- **TCP/IP Internet Layer ≈ OSI Layer 3**
  - IP addressing and routing across network boundaries.

- **TCP/IP Transport Layer ≈ OSI Layer 4**
  - Endpoint-to-endpoint communication behavior using ports and transport protocols.

- **TCP/IP Application Layer ≈ OSI Layers 5–7**
  - Session/presentation/application concerns are often treated together in operational practice.

## 4) Why Mapping Between Models Is Important

Many learning resources teach OSI in detail, while tools and operations teams often speak in TCP/IP terms. You need fluency in both to avoid translation gaps.

- If someone says “Internet layer issue,” you should immediately think “Layer 3 IP/routing scope.”
- If a capture shows TLS handshake problems, you should classify that within upper-layer behavior (OSI 5–7, TCP/IP application layer).
- If a switch port/VLAN fault exists, you should map it to the link side (OSI 1–2, TCP/IP link layer).

Good engineers move between both models quickly and precisely.

## 5) How to Use This Map During Troubleshooting

A layered learning map becomes operational when used as a strict troubleshooting sequence:

1. Confirm link/physical viability first.
2. Confirm addressing and IP path second.
3. Confirm transport reachability and port state third.
4. Confirm name resolution, encryption, and application behavior last.

This order reduces wasted effort. For example, debugging HTTP headers before proving layer-3 reachability usually wastes time.

## 6) Common Learner Mistakes the Map Prevents

- **Mistake 1: Jumping straight to app logs** when the host has wrong gateway/subnet settings.
- **Mistake 2: Treating all packet loss as transport failure** when the root cause is physical/link instability.
- **Mistake 3: Assuming DNS equals connectivity** (DNS can resolve while TCP to service port still fails).
- **Mistake 4: Memorizing protocol names without layer context**, which makes troubleshooting slow and inconsistent.

The learning map prevents these by enforcing scope boundaries for each diagnostic step.

## 7) Outcome of Mastering Part 2

If this part is mastered, you can:
- classify any protocol/event into its proper layer domain,
- translate accurately between OSI and TCP/IP language,
- and apply a consistent mental model before deep packet or service analysis.

That foundation is what makes all later units (Layer 1 through Layer 7 topics and capstone troubleshooting) easier and more reliable.
