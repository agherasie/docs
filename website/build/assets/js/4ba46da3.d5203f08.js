"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3476],{75878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(85893),o=t(11151);const i={id:"faq",title:"Integrator FAQ",sidebar_label:"Integrator FAQ"},s=void 0,r={id:"integrations/faq",title:"Integrator FAQ",description:"Orientation",source:"@site/../docs/6.integrations/faq.md",sourceDirName:"6.integrations",slug:"/integrations/faq",permalink:"/integrations/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/faq.md",tags:[],version:"current",lastUpdatedBy:"Charles Garrett",lastUpdatedAt:1716486003e3,frontMatter:{id:"faq",title:"Integrator FAQ",sidebar_label:"Integrator FAQ"},sidebar:"exchanges",previous:{title:"Avoiding Token Loss",permalink:"/integrations/errors/token-loss"}},c={},l=[{value:"Orientation",id:"orientation",level:2},{value:"What is a good project summary for NEAR?",id:"what-is-a-good-project-summary-for-near",level:3},{value:"What&#39;s special about NEAR?",id:"whats-special-about-near",level:3},{value:"Is NEAR open source?",id:"is-near-open-source",level:3},{value:"How are cryptographic functions used?",id:"how-are-cryptographic-functions-used",level:3},{value:"Do you have any on-chain governance mechanisms?",id:"do-you-have-any-on-chain-governance-mechanisms",level:3},{value:"Do you have a bug-bounty program?",id:"do-you-have-a-bug-bounty-program",level:3},{value:"What contracts should we be aware of right now?",id:"what-contracts-should-we-be-aware-of-right-now",level:3},{value:"Do you have a cold wallet implementation (ie. Ledger)?",id:"do-you-have-a-cold-wallet-implementation-ie-ledger",level:3},{value:"Validators",id:"validators",level:2},{value:"What is the process for becoming a validator?",id:"what-is-the-process-for-becoming-a-validator",level:3},{value:"How long does a validator remain a validator?",id:"how-long-does-a-validator-remain-a-validator",level:3},{value:"What is the penalty for misbehaving validators?",id:"what-is-the-penalty-for-misbehaving-validators",level:3},{value:"What is the mechanism for delegating stake to validators?",id:"what-is-the-mechanism-for-delegating-stake-to-validators",level:3},{value:"Does a validator control funds that have been delegated to them?",id:"does-a-validator-control-funds-that-have-been-delegated-to-them",level:3},{value:"How do we get the balance of an account after it has delegated funds?",id:"how-do-we-get-the-balance-of-an-account-after-it-has-delegated-funds",level:3},{value:"Nodes",id:"nodes",level:2},{value:"Can a node be configured to archive all blockchain data since genesis?",id:"can-a-node-be-configured-to-archive-all-blockchain-data-since-genesis",level:3},{value:"Can a node be configured to expose an RPC (ex: HTTP) interface?",id:"can-a-node-be-configured-to-expose-an-rpc-ex-http-interface",level:3},{value:"Can a node be gracefully terminated and restarted (using archived data on disk to continue syncing)?",id:"can-a-node-be-gracefully-terminated-and-restarted-using-archived-data-on-disk-to-continue-syncing",level:3},{value:"Does a node expose an interface for retrieving health telemetry in a structured format (ex: JSON) over RPC?",id:"does-a-node-expose-an-interface-for-retrieving-health-telemetry-in-a-structured-format-ex-json-over-rpc",level:3},{value:"Can a node be started using a Dockerfile without human supervision?",id:"can-a-node-be-started-using-a-dockerfile-without-human-supervision",level:3},{value:"What is the source of truth for current block height exposed via API?",id:"what-is-the-source-of-truth-for-current-block-height-exposed-via-api",level:3},{value:"How old can the referenced block hash be before it&#39;s invalid?",id:"how-old-can-the-referenced-block-hash-be-before-its-invalid",level:3},{value:"Blockchain",id:"blockchain",level:2},{value:"How will the network will be bootstrapped?",id:"how-will-the-network-will-be-bootstrapped",level:3},{value:"What is the network upgrade process?",id:"what-is-the-network-upgrade-process",level:3},{value:"Which consensus algorithm does NEAR use?",id:"which-consensus-algorithm-does-near-use",level:3},{value:"How does on-chain transaction finality work?",id:"how-does-on-chain-transaction-finality-work",level:3},{value:"Accounts",id:"accounts",level:2},{value:"How are addresses generated?",id:"how-are-addresses-generated",level:3},{value:"What is the balance record-keeping model on the NEAR platform?",id:"what-is-the-balance-record-keeping-model-on-the-near-platform",level:3},{value:"How are user accounts represented on-chain?",id:"how-are-user-accounts-represented-on-chain",level:3},{value:"Is there a minimum account balance?",id:"is-there-a-minimum-account-balance",level:3},{value:"How many keys are used?",id:"how-many-keys-are-used",level:3},{value:"Which balance look-ups exists? What is required?",id:"which-balance-look-ups-exists-what-is-required",level:3},{value:"Fees",id:"fees",level:2},{value:"What is the fee structure for on-chain transactions?",id:"what-is-the-fee-structure-for-on-chain-transactions",level:3},{value:"How do we know how much gas to add to a transaction?",id:"how-do-we-know-how-much-gas-to-add-to-a-transaction",level:3},{value:"Transactions",id:"transactions",level:2},{value:"How do we follow Tx status?",id:"how-do-we-follow-tx-status",level:3},{value:"How are transactions constructed and signed?",id:"how-are-transactions-constructed-and-signed",level:3},{value:"How is the hash preimage generated? Which fields does the raw transaction consist of?",id:"how-is-the-hash-preimage-generated-which-fields-does-the-raw-transaction-consist-of",level:3},{value:"How do transactions work on the NEAR platform?",id:"how-do-transactions-work-on-the-near-platform",level:3},{value:"How does NEAR serialize transactions?",id:"how-does-near-serialize-transactions",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"orientation",children:"Orientation"}),"\n",(0,a.jsx)(n.h3,{id:"what-is-a-good-project-summary-for-near",children:"What is a good project summary for NEAR?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR is a sharded, public, proof-of-stake blockchain and smart contract platform. It is built in Rust and contracts compile to WASM. It is conceptually similar to Ethereum 2.0."}),"\n",(0,a.jsx)(n.h3,{id:"whats-special-about-near",children:"What's special about NEAR?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR is the blockchain for builders."}),"\n",(0,a.jsx)(n.p,{children:"If you understand the basics of web development, you can write, test and deploy scalable decentralized applications in minutes on the most developer-friendly blockchain without having to learn new tools or languages."}),"\n",(0,a.jsx)(n.h3,{id:"is-near-open-source",children:"Is NEAR open source?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes. Have a look at our ",(0,a.jsx)(n.a,{href:"https://github.com/near",children:"GitHub organization"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-are-cryptographic-functions-used",children:"How are cryptographic functions used?"}),"\n",(0,a.jsxs)(n.p,{children:["We support both ",(0,a.jsx)(n.code,{children:"secp256k1"})," and ",(0,a.jsx)(n.code,{children:"ed25519"})," for account keys and ",(0,a.jsx)(n.code,{children:"ed25519"})," for signing transactions. We currently use the ",(0,a.jsx)(n.code,{children:"ed25519_dalek"})," and ",(0,a.jsx)(n.code,{children:"sha2"})," libraries for crypto."]}),"\n",(0,a.jsx)(n.h3,{id:"do-you-have-any-on-chain-governance-mechanisms",children:"Do you have any on-chain governance mechanisms?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR does not have any on-chain governance at the moment. Any changes to state or state transition function must be done through a hard fork."}),"\n",(0,a.jsx)(n.h3,{id:"do-you-have-a-bug-bounty-program",children:"Do you have a bug-bounty program?"}),"\n",(0,a.jsx)(n.p,{children:"Our plan is to have a transparent Bug Bounty program with clear guidelines for paying out to those reporting issues. Payments will likely be based on publicly available rankings provided by protocol developers based on issue severity."}),"\n",(0,a.jsx)(n.h3,{id:"what-contracts-should-we-be-aware-of-right-now",children:"What contracts should we be aware of right now?"}),"\n",(0,a.jsxs)(n.p,{children:["We have developed a number of ",(0,a.jsx)(n.a,{href:"https://github.com/near/core-contracts",children:"initial contracts"})," with ",(0,a.jsx)(n.strong,{children:"ones in bold"})," being most mature at time of writing"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Staking Pool / Delegation contract"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Lockup / Vesting contract"})}),"\n",(0,a.jsx)(n.li,{children:"Whitelist Contract"}),"\n",(0,a.jsx)(n.li,{children:"Staking Pool Factory"}),"\n",(0,a.jsx)(n.li,{children:"Multisig contract"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"do-you-have-a-cold-wallet-implementation-ie-ledger",children:"Do you have a cold wallet implementation (ie. Ledger)?"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/near/near-ledger-app",children:"https://github.com/near/near-ledger-app"})}),"\n",(0,a.jsx)(n.h2,{id:"validators",children:"Validators"}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-process-for-becoming-a-validator",children:"What is the process for becoming a validator?"}),"\n",(0,a.jsx)(n.p,{children:"Validation is permissionless and determined via auction. Parties who want to become a validator submit a special transaction to the chain one day ahead which indicates how many tokens they want to stake. An auction is run which determines the minimum necessary stake to get a validation seat during the next epoch and, if the amount submitted is greater than the minimum threshold, the submitter will validate at least one shard during the next epoch."}),"\n",(0,a.jsx)(n.h3,{id:"how-long-does-a-validator-remain-a-validator",children:"How long does a validator remain a validator?"}),"\n",(0,a.jsx)(n.p,{children:"A validator will stop being a validator for the following reasons:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Not producing enough blocks or chunks."}),"\n",(0,a.jsx)(n.li,{children:"Not getting elected in the auction for next epoch because their stake is not large enough."}),"\n",(0,a.jsx)(n.li,{children:"Getting slashed.\nOtherwise a validator will remain a validator indefinitely."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Validator election happens in epochs. The ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(32516).Z+"",children:"Nightshade whitepaper"}),' introduces epochs this way: "the maintenance of the network is done in epochs" where an epoch is a period of time on the order of half a day.']}),"\n",(0,a.jsxs)(n.p,{children:["At the beginning of each epoch, some computation produces a list of validators for the ",(0,a.jsx)(n.em,{children:"very next epoch"}),'.\nThe input to this computation includes all accounts that have "raised their hand to be a validator"\nby submitting a special transaction (',(0,a.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html#stakeaction",children:(0,a.jsx)(n.code,{children:"StakeAction"})}),")\nexpressing the commitment of some amount of tokens over the system's staking threshold,\nas well as validators from the previous epoch.\nThe output of this computation is a list of the validators for the very next epoch."]}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-penalty-for-misbehaving-validators",children:"What is the penalty for misbehaving validators?"}),"\n",(0,a.jsx)(n.p,{children:"Validators are not slashed for being offline but they do miss out on the rewards of validating. Validators who miss too many blocks or chunks will be removed from the validation set in the next auction and not get any reward (but, again, without slashing)."}),"\n",(0,a.jsx)(n.p,{children:'Any foul play on the part of the validator that is detected by the system may result in a "slashing event" where the validator is marked as out of integrity and forfeit their stake (according to some formula of progressive severity). The slashed stake is burnt.'}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-mechanism-for-delegating-stake-to-validators",children:"What is the mechanism for delegating stake to validators?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR supports separate validation keys that can be used in smart contracts to delegate stake. Delegation is done via smart contract which allows for a validator to define a custom way to collect stake, manage it and split rewards. This also allows validators to provide leverage or derivatives on stake. Delegated stake will be slashed like any other stake if the node misbehaves."}),"\n",(0,a.jsx)(n.p,{children:"If a validator misbehaves the funds of the delegators are also slashed. There is no waiting period for delegators to withdraw their stake."}),"\n",(0,a.jsx)(n.h3,{id:"does-a-validator-control-funds-that-have-been-delegated-to-them",children:"Does a validator control funds that have been delegated to them?"}),"\n",(0,a.jsx)(n.p,{children:"Delegation is custodial (you are transferring funds to a different account, the smart contract that implements staking pool). We provide a reference implementation being security reviewed and tested by 100 validators at time of writing."}),"\n",(0,a.jsx)(n.p,{children:"We allow validators to write and deploy new contracts but it is up to users to decide if they want to delegate. Validators can compete for delegation by choosing different logic and conditions around tax optimization, etc."}),"\n",(0,a.jsx)(n.p,{children:"Currently no slashing but will be added as we add shards into the system. At some point validators will be able to add an option to shield delegators from slashing (similar to Tezos model)."}),"\n",(0,a.jsx)(n.h3,{id:"how-do-we-get-the-balance-of-an-account-after-it-has-delegated-funds",children:"How do we get the balance of an account after it has delegated funds?"}),"\n",(0,a.jsx)(n.p,{children:"One would need to query the staking pool contract to get balance."}),"\n",(0,a.jsx)(n.h2,{id:"nodes",children:"Nodes"}),"\n",(0,a.jsx)(n.h3,{id:"can-a-node-be-configured-to-archive-all-blockchain-data-since-genesis",children:"Can a node be configured to archive all blockchain data since genesis?"}),"\n",(0,a.jsx)(n.p,{children:"v\nYes. Start the node using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"./target/release/near run --archive\n"})}),"\n",(0,a.jsx)(n.h3,{id:"can-a-node-be-configured-to-expose-an-rpc-ex-http-interface",children:"Can a node be configured to expose an RPC (ex: HTTP) interface?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes. All nodes expose this interface by default which can be configured by setting the value of ",(0,a.jsx)(n.code,{children:"listen_addr:port"})," in the node's ",(0,a.jsx)(n.code,{children:"config.json"})," file."]}),"\n",(0,a.jsx)(n.h3,{id:"can-a-node-be-gracefully-terminated-and-restarted-using-archived-data-on-disk-to-continue-syncing",children:"Can a node be gracefully terminated and restarted (using archived data on disk to continue syncing)?"}),"\n",(0,a.jsx)(n.p,{children:"Yes."}),"\n",(0,a.jsx)(n.h3,{id:"does-a-node-expose-an-interface-for-retrieving-health-telemetry-in-a-structured-format-ex-json-over-rpc",children:"Does a node expose an interface for retrieving health telemetry in a structured format (ex: JSON) over RPC?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes. ",(0,a.jsx)(n.code,{children:"GET /status"})," and ",(0,a.jsx)(n.code,{children:"GET /health"})," provide this interface."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/status"}),": block height, syncing status, peer count, etc"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/health"}),": success/failure if node is up running & progressing"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"can-a-node-be-started-using-a-dockerfile-without-human-supervision",children:"Can a node be started using a Dockerfile without human supervision?"}),"\n",(0,a.jsx)(n.p,{children:"Yes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run <port mapping> <mount data folder> <ENV vars> nearprotocol/nearcore:latest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.code,{children:"nearcore/scripts/nodelib.py"})," for different examples of configuration."]}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-source-of-truth-for-current-block-height-exposed-via-api",children:"What is the source of truth for current block height exposed via API?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["MainNet","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nearblocks.io",children:"https://nearblocks.io"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://rpc.mainnet.near.org/status"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["TestNet","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://testnet.nearblocks.io",children:"https://testnet.nearblocks.io"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://rpc.testnet.near.org/status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"how-old-can-the-referenced-block-hash-be-before-its-invalid",children:"How old can the referenced block hash be before it's invalid?"}),"\n",(0,a.jsx)(n.p,{children:"There is a genesis parameter which can be discovered for any network using:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_genesis_config\n# in the line above, testnet may be replaced with mainnet or betanet\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It's ",(0,a.jsx)(n.code,{children:"43200"})," seconds or ",(0,a.jsx)(n.code,{children:"~12"})," hours. You can view the live configuration for ",(0,a.jsx)(n.code,{children:"epoch_length"})," using the ",(0,a.jsxs)(n.a,{href:"/api/rpc/setup#protocol-config",children:[(0,a.jsx)(n.code,{children:"protocol_config"})," RPC endpoint"]}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In the response we find ",(0,a.jsx)(n.code,{children:'transaction_validity_period": 86400'})," (and since it takes about 1 second to produce a block, this period is about 24 hrs)"]}),"\n",(0,a.jsx)(n.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,a.jsx)(n.h3,{id:"how-will-the-network-will-be-bootstrapped",children:"How will the network will be bootstrapped?"}),"\n",(0,a.jsx)(n.p,{children:"Distribution at genesis will be spread among the NEAR team, our contributors, project partners (ie. contributor, beta applications, infrastructure developers, etc.) and the NEAR foundation (with many portions of that segregated for post-MainNet distribution activity and unavailable to stake so the foundation isn\u2019t able to control the network)."}),"\n",(0,a.jsx)(n.p,{children:"There will be auctions occurring on the platform after launch which will allocate large amounts of tokens over the next 2 years. Additionally we are planning to run TestNet where any validator who participates will receive rewards in real tokens. We are planning to onboard at least 50 separate entities to be validators at launch."}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-network-upgrade-process",children:"What is the network upgrade process?"}),"\n",(0,a.jsx)(n.p,{children:"We are currently upgrading via restarting with a new genesis block."}),"\n",(0,a.jsx)(n.h3,{id:"which-consensus-algorithm-does-near-use",children:"Which consensus algorithm does NEAR use?"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR is a sharded ",(0,a.jsx)(n.strong,{children:"proof-of-stake"})," blockchain."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["You can read more in our ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(32516).Z+"",children:"Nightshade whitepaper"}),"."]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"A few relevant details have been extracted here for convenience:"})}),"\n",(0,a.jsxs)(n.p,{children:["[Since NEAR is a sharded blockchain, there are challenges that need to be overcome] including state validity and data\navailability problems. ",(0,a.jsx)(n.em,{children:"Nightshade"})," is the solution NEAR Protocol is built upon that addresses these issues."]}),"\n",(0,a.jsx)(n.p,{children:"Nightshade uses the heaviest chain consensus. Specifically when a block producer produces a block (see section 3.3), they can collect signatures from other block producers and validators attesting to the previous block. The weight of a block is then the cumulative stake of all the signers whose signatures are included in the block. The weight of a chain is the sum of the block weights."}),"\n",(0,a.jsx)(n.p,{children:"On top of the heaviest chain consensus we use a finality gadget that uses the attestations to finalize the blocks. To reduce the complexity of the system, we use a finality gadget that doesn\u2019t influence the fork choice rule in any way, and instead only introduces extra slashing conditions, such that once a block is finalized by the finality gadget, a fork is impossible unless a very large percentage of the total stake is slashed."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"how-does-on-chain-transaction-finality-work",children:"How does on-chain transaction finality work?"}),"\n",(0,a.jsx)(n.p,{children:"Finality is deterministic, and requires at least 3 blocks as well as (2/3 +1) signatures of the current validator set."}),"\n",(0,a.jsx)(n.p,{children:"In a normal operation, we expect this to happen right at 3 blocks but it is not guaranteed."}),"\n",(0,a.jsx)(n.p,{children:"Finality will be exposed via RPC when querying block or transaction."}),"\n",(0,a.jsx)(n.p,{children:"Our definition of finality is BOTH:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Block has quorum pre-commit from the finality gadget. See details of the finality gadget ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(54170).Z+"",children:"[here]"})]}),"\n",(0,a.jsx)(n.li,{children:"At least 120 blocks (2-3 minutes) built on top of the block of interest. This is relevant in case of invalid state transition in some shard and provides enough time for state change challenges. In case all shards are tracked and some mechanics to pause across nodes is employed, this is not needed. We recommend exchanges track all shards."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"accounts",children:"Accounts"}),"\n",(0,a.jsx)(n.h3,{id:"how-are-addresses-generated",children:"How are addresses generated?"}),"\n",(0,a.jsxs)(n.p,{children:["Please check out the spec here on accounts ",(0,a.jsx)(n.a,{href:"https://nomicon.io/DataStructures/Account.html",children:"https://nomicon.io/DataStructures/Account.html"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-balance-record-keeping-model-on-the-near-platform",children:"What is the balance record-keeping model on the NEAR platform?"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR uses an ",(0,a.jsx)(n.code,{children:"Account"}),"-based model. All users and contracts are associated with at least 1 account. Each account lives on a single shard. Each account can have multiple keys for signing transactions."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["You can read ",(0,a.jsx)(n.a,{href:"https://nomicon.io/DataStructures/Account.html",children:"more about NEAR accounts here"})]})}),"\n",(0,a.jsx)(n.h3,{id:"how-are-user-accounts-represented-on-chain",children:"How are user accounts represented on-chain?"}),"\n",(0,a.jsxs)(n.p,{children:["Users create accounts with human-readable names (eg ",(0,a.jsx)(n.code,{children:"alice"}),") which can contain multiple keypairs with individual permissions. Accounts can be atomically and securely transferred between parties as a native transaction on the network. Permissions are programmable with smart contracts as well. For example, a lock up contract is just an account with permission on the key that does not allow to transfer funds greater than those unlocked."]}),"\n",(0,a.jsx)(n.h3,{id:"is-there-a-minimum-account-balance",children:"Is there a minimum account balance?"}),"\n",(0,a.jsx)(n.p,{children:'To limit on-chain "dust", accounts (and contracts) are charged a refundable deposit for storing data on the chain. This means that if the balance of the account does not have enough balance to cover an increased deposit for additional storage of data, storing additional data will fail. Also, any user can remove their own account and transfer left over balance to another (beneficiary) account.'}),"\n",(0,a.jsx)(n.p,{children:"There will be a restoration mechanism for accounts removed (or slept) in this way implemented in the future."}),"\n",(0,a.jsx)(n.h3,{id:"how-many-keys-are-used",children:"How many keys are used?"}),"\n",(0,a.jsx)(n.p,{children:"An account can have arbitrarily many keys, as long as it has enough tokens for their storage."}),"\n",(0,a.jsx)(n.h3,{id:"which-balance-look-ups-exists-what-is-required",children:"Which balance look-ups exists? What is required?"}),"\n",(0,a.jsxs)(n.p,{children:["We have an ",(0,a.jsx)(n.a,{href:"/api/rpc/setup#view_account",children:"RPC method for viewing account"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d7f0cb87ec320b723734045a4ee9d17d94574a19/src/providers/json-rpc-provider.ts#L73",children:"JS implementation is here"}),". Note that in this RPC interface you can specify the finality requirement (whether to query the latest state or finalized state)."]}),"\n",(0,a.jsx)(n.p,{children:"For custody purposes, it is recommended not to rely on latest state but only what is finalized."}),"\n",(0,a.jsx)(n.h2,{id:"fees",children:"Fees"}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-fee-structure-for-on-chain-transactions",children:"What is the fee structure for on-chain transactions?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR uses a gas-based model where prices are generally deterministically adjusted based on congestion of the network."}),"\n",(0,a.jsx)(n.p,{children:"We avoid making changes that are too large through re-sharding by changing number of available shards (and thus throughput)."}),"\n",(0,a.jsx)(n.p,{children:"Accounts don\u2019t have associated resources. Gas amount is predetermined for all transactions except function calls. For function call transactions the user (or more likely the developer) attaches the required amount of gas. If some gas is left over after the function call, it is converted back to NEAR and refunded to the original funding account."}),"\n",(0,a.jsx)(n.h3,{id:"how-do-we-know-how-much-gas-to-add-to-a-transaction",children:"How do we know how much gas to add to a transaction?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["See reference documentation here: ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Economics/",children:"https://nomicon.io/Economics/"})]}),"\n",(0,a.jsxs)(n.li,{children:["See API documentation for ",(0,a.jsx)(n.a,{href:"/api/rpc/setup#gas-price",children:"discovering gas price via RPC here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The issuer of a transaction should attach some amount of gas by taking a guess at budget which will get the transaction processed. The contract knows how much to fund different cross contract calls. Gas price is calculated and fixed per block, but may change from block to block depending on how full / busy the block is. If blocks become more than half full then gas price increases."}),"\n",(0,a.jsx)(n.p,{children:"We're also considering adding a max gas price limit."}),"\n",(0,a.jsx)(n.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(n.h3,{id:"how-do-we-follow-tx-status",children:"How do we follow Tx status?"}),"\n",(0,a.jsxs)(n.p,{children:["See related ",(0,a.jsx)(n.a,{href:"/api/rpc/setup#transaction-status",children:"RPC interface for fetching transaction status here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-are-transactions-constructed-and-signed",children:"How are transactions constructed and signed?"}),"\n",(0,a.jsx)(n.p,{children:"Transactions are a collection of related data that is composed and cryptographically signed by the sender using their private key. The related public key is part of the transaction and used for signature verification. Only signed transactions may be sent to the network for processing."}),"\n",(0,a.jsx)(n.p,{children:"Transactions can be constructed and signed offline. Nodes are not required for signing. We are planning to add optional recent block hash to help prevent various replay attacks."}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/concepts/protocol/transactions",children:"transactions"})," in the concepts section of our documentation."]}),"\n",(0,a.jsx)(n.h3,{id:"how-is-the-hash-preimage-generated-which-fields-does-the-raw-transaction-consist-of",children:"How is the hash preimage generated? Which fields does the raw transaction consist of?"}),"\n",(0,a.jsxs)(n.p,{children:["For a transaction, we sign the hash of the transaction. More specifically, what is signed is the ",(0,a.jsx)(n.code,{children:"sha256"})," of the transaction object serialized in borsh (",(0,a.jsx)(n.a,{href:"https://github.com/near/borsh",children:"https://github.com/near/borsh"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"how-do-transactions-work-on-the-near-platform",children:"How do transactions work on the NEAR platform?"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"Transaction"})," is made up of one or more ",(0,a.jsx)(n.code,{children:"Action"}),"s. An action can (currently) be one of 8 types: ",(0,a.jsx)(n.code,{children:"CreateAccount"}),",\n",(0,a.jsx)(n.code,{children:"DeployContract"}),", ",(0,a.jsx)(n.code,{children:"FunctionCall"}),", ",(0,a.jsx)(n.code,{children:"Transfer"}),", ",(0,a.jsx)(n.code,{children:"Stake"}),", ",(0,a.jsx)(n.code,{children:"AddKey"}),", ",(0,a.jsx)(n.code,{children:"DeleteKey"})," and ",(0,a.jsx)(n.code,{children:"DeleteAccount"}),". Transactions are composed by a sender and then signed using the private keys of a valid NEAR account to create a ",(0,a.jsx)(n.code,{children:"SignedTransaction"}),". This signed transaction is considered ready to send to the network for processing."]}),"\n",(0,a.jsxs)(n.p,{children:["Transactions are received via our JSON-RPC endpoint and routed to the shared where the ",(0,a.jsx)(n.code,{children:"sender"}),' account lives. This "home shard" for the sender account is then responsible for processing the transaction and generating related receipts to be applied across the network.']}),"\n",(0,a.jsxs)(n.p,{children:["Once received by the network, signed transactions are verified (using the embedded public key of the signer) and transformed into a collection of ",(0,a.jsx)(n.code,{children:"Receipt"}),"s, one per action. Receipts are of two types: ",(0,a.jsx)(n.code,{children:"Action Receipt"})," is the most common and represents almost all actions on the network while ",(0,a.jsx)(n.code,{children:"Data Receipt"}),' handles the very special case of "a ',(0,a.jsx)(n.code,{children:"FunctionCallAction"}),' which includes a Promise". These receipts are then propagated and applied across the network according to the "home shard" rule for all affected receiver accounts.']}),"\n",(0,a.jsxs)(n.p,{children:['These receipts are then propagated around the network using the receiver account\'s "home shard" since each account lives on one and only one shard. Once located on the correct shard, receipts are pulled from a nonce-based ',(0,a.jsx)(n.a,{href:"https://nomicon.io/ChainSpec/Transactions#pool-iterator",children:"queue"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Receipts may generate other, new receipts which in turn are propagated around the network until all receipts have been applied. If any action within a transaction fails, the entire transaction is rolled back and any unburnt fees are refunded to the proper accounts."}),"\n",(0,a.jsxs)(n.p,{children:["For more detail, see specs on ",(0,a.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Transactions",children:(0,a.jsx)(n.code,{children:"Transactions"})}),", ",(0,a.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:(0,a.jsx)(n.code,{children:"Actions"})}),", ",(0,a.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Receipts",children:(0,a.jsx)(n.code,{children:"Receipts"})})]}),"\n",(0,a.jsx)(n.h3,{id:"how-does-near-serialize-transactions",children:"How does NEAR serialize transactions?"}),"\n",(0,a.jsxs)(n.p,{children:["We use a simple binary serialization format that's deterministic: ",(0,a.jsx)(n.a,{href:"https://borsh.io",children:"https://borsh.io"})]}),"\n",(0,a.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Whitepaper"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["General overview at ",(0,a.jsx)(n.a,{href:"https://near.org/blog/the-beginners-guide-to-the-near-blockchain",children:"The Beginner's Guide to the NEAR Blockchain"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://near.org/papers/the-official-near-white-paper/",children:"NEAR Whitepaper"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Github"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.github.com/near",children:"https://www.github.com/near"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,a.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},32516:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/Nightshade-201ea58f8dd6bc547f457d26ed5e8138.pdf"},54170:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/PoST-dadcf9287d98201817066853315db91f.pdf"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);