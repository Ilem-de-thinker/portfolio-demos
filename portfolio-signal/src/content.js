/**
 * DR. KAELEN VANCE — SIGNAL PORTFOLIO CONTENT
 * Edit this single file to update all systems, protocols, benchmarks, and terminal contacts.
 */

export const content = {
  meta: {
    name: "Dr. Kaelen Vance",
    role: "Distributed Systems & Kernel Architect",
    locations: "San Francisco 37°46'N · Tokyo 35°41'N",
    uptime: "99.9999%",
    accentColor: "#00F0FF",
    heroImage: "/src/assets/images/swiss_architecture_facade_1791903963566.jpg"
  },

  hero: {
    terminalPrompt: "root@vance-engine:~# init_core_cluster --bypass-kernel --p99=80ns",
    headline: "KAELEN VANCE",
    subtitle: "DISTRIBUTED CONSENSUS & HARDWARE-ACCELERATED ENGINES",
    telemetry: "KERNEL: LINUX 6.12-RT · CYCLES/OP: 14 · JITTER: <2NS"
  },

  manifesto: {
    heading: "I engineer systems where every nanosecond is accounted for at the silicon layer.",
    paragraphs: [
      "I hold a doctorate in Distributed Systems from Tokyo University and have spent a decade engineering state-machine replication protocols, zero-copy memory drivers, and high-frequency order matchers.",
      "Most software today carries staggering layers of framework bloat. My philosophy is mechanical sympathy: understanding L1 cache hierarchies, SIMD register packing, and lock-free ring buffers. When an architecture is mechanically correct, it runs cool, deterministic, and blisteringly fast."
    ],
    benchmarks: [
      { metric: "12.8M", label: "Msg/Sec Single Core" },
      { metric: "84ns", label: "p99 Execution Latency" },
      { metric: "0-Copy", label: "Memory Kernel Bypass" },
      { metric: "100%", label: "Formal TLA+ Proofs" }
    ]
  },

  systems: [
    {
      id: "aether",
      code: "SYS-01 // AETHER",
      title: "Aether Consensus Engine",
      language: "Rust · ASM · TLA+",
      throughput: "14.2M txn/sec",
      latency: "112ns p99",
      image: "/src/assets/images/swiss_architecture_facade_1791903963566.jpg",
      summary: "Byzantine fault-tolerant consensus engine utilizing vectorized batching and RDMA zero-copy networking.",
      specs: ["Pipelined Leader Election", "Kernel Bypass via DPDK", "Hardware Timestamping NICs"],
      deepDive: "Formally verified using TLA+ model checking over 10^9 state permutations with zero safety violations."
    },
    {
      id: "hydra",
      code: "SYS-02 // HYDRA",
      title: "Hydra Zero-Copy Virtualizer",
      language: "Zig · eBPF · C",
      throughput: "40Gbps Line-Rate",
      latency: "46ns Jitter",
      image: "/src/assets/images/noir_fashion_editorial_1791903961538.jpg",
      summary: "Userspace virtual memory allocator eliminating memory fragmentation and TLB cache invalidation penalties.",
      specs: ["HugeTLB Page Pinning", "Cache-Aligned Struct Padding", "SIMD Bitmask Filtering"],
      deepDive: "Powers ultra-low-latency electronic exchange matching gateways across Frankfurt, Chicago, and Tokyo."
    },
    {
      id: "pulse",
      code: "SYS-03 // PULSE",
      title: "Pulse Sub-Millisecond L2 Sequencer",
      language: "Rust · CUDA",
      throughput: "250k zk-Proofs/sec",
      latency: "1.2ms Settlement",
      image: "/src/assets/images/cinema_film_still_1791903962935.jpg",
      summary: "GPU-accelerated cryptographic state sequencer with parallel polynomial commitment generation.",
      specs: ["CUDA Tensor Core Pipeline", "Zero Alloc Memory Buffer", "Asynchronous IO Ring (io_uring)"],
      deepDive: "Reduced zero-knowledge proof generation energy consumption by 72% via custom FPGA offload kernels."
    },
    {
      id: "nebula",
      code: "SYS-04 // NEBULA",
      title: "Nebula Distributed Telemetry Prober",
      language: "Go · Rust · ClickHouse",
      throughput: "100M events/sec",
      latency: "Realtime",
      image: "/src/assets/images/atelier_ceramic_vessel_1791903962861.jpg",
      summary: "High-cardinality distributed trace collector executing within Linux kernel space using custom eBPF filters.",
      specs: ["In-Kernel Ring Buffer", "Zero User-to-Kernel Context Switches", "Columnar Delta Compression"],
      deepDive: "Deployed across 40,000 edge server clusters worldwide with under 0.05% CPU overhead footprint."
    }
  ],

  protocols: [
    {
      name: "Lock-Free Concurrency",
      desc: "Atomic compare-and-swap ring buffers avoiding mutex contention and thread parking penalties."
    },
    {
      name: "Mechanical Sympathy",
      desc: "Architecting data structures that fit precisely into CPU 64-byte cache lines without false sharing."
    },
    {
      name: "TLA+ Formal Verification",
      desc: "Mathematically proving distributed invariants and safety guarantees before writing a single line of C or Rust."
    },
    {
      name: "Kernel Bypass Networking",
      desc: "Direct NIC ring access via DPDK and io_uring, achieving sub-microsecond Ethernet packet roundtrips."
    }
  ],

  timeline: [
    { year: "2024 — PRESENT", title: "Principal Systems Architect", org: "Independent Systems Advisory (SF / Tokyo)" },
    { year: "2021 — 2024", title: "Lead Protocol Engineer", org: "Helios High-Throughput Labs" },
    { year: "2018 — 2021", title: "Kernel Performance Engineer", org: "Nippon Infrastructure Research" },
    { year: "2018", title: "PhD in Distributed Computing", org: "University of Tokyo" }
  ],

  endorsements: [
    {
      quote: "Kaelen wrote the matching engine kernel that our entire platform relies on. It hasn't dropped a single packet in three years of 24/7 continuous operation.",
      author: "Siddharth Rao",
      role: "VP of Engineering, Citadel Quant Infrastructure"
    },
    {
      quote: "One of the few engineers in the world who can write a formal mathematical proof in TLA+ in the morning and implement the SIMD assembly by nightfall.",
      author: "Prof. Kenjiro Mori",
      role: "Chair of Distributed Systems, Tokyo Institute of Technology"
    }
  ],

  contact: {
    terminalHeader: "DISPATCH // SECURE COMMUNICATIONS",
    prompt: "Enter parameters to request systems advisory or kernel performance auditing.",
    email: "kaelen@kaelenvance.io",
    gpgKey: "4A9F 821E C082 11D4 BF32 9901 E772 092A",
    keyserver: "keys.openpgp.org",
    location: "Mission Bay, San Francisco & Roppongi, Tokyo"
  }
};
