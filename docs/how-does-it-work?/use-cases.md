---
title: Use Cases
---

## Transaction Flows in Rescathena

Following the same guidelines as the [Hyperledger's Transaction flow](https://hyperledger-fabric.readthedocs.io/en/release-2.5/txflow.html) where the explain the process of a transaction in a blockchain network, we can outline how Rescathena operates in a similar manner. The Rescathena scenario involves Animal Rescue Organizations (AROs) that publish their initiatives, donors who fund these initiatives with donations through the Rescathena Network and the AROs that execute the initiatives and report back to the donors through the Rescathena Network.

Below, we explain how the [transaction flow](https://hyperledger-fabric.readthedocs.io/en/release-2.5/txflow.html) works in different use cases of Rescathena.

## 1. Joining the Rescathena Network

### Case A: A new Animal Rescue NGO applies to join

1. The NGO sends a request to become part of the Rescathena Network.

2. This request is registered as a transaction proposal in the blockchain.

3. The network peers (_existing trusted members_) review the request.

4. If the majority verify by endorsing, the NGO is officially added to the blockchain as a recognized organisation ✅.


### Case B: A donor applies to join

1. Just like NGOs, donors must request to belong to the network.

2. Their identity is validated and stored on the blockchain.

3. Once approved by endorsing, the Donor will be granted with permission to interact with NGOs and initiatives ✅.


## 2. Publishing Initiatives

### Case C: An NGO publishes a new rescue initiative

1. The NGO submits details of the initiative (purpose, funding needs, deadlines).

2. This submission is registered as a blockchain transaction.

3. The peers validate the entry, ensuring that it comes from a verified NGO, the purpose make sense with funding needs and deadlines.

4. If the majority of the peers approve the initiative, it becomes visible on the Rescathena Network and ready to receive donations ✅.

5. Otherwise, if the initiative is rejected, the NGO is notified with the reasons for rejection ❌.


## 3. Making donations

### Case D: A donor makes a donation to an initiative

1. The donor selects an initiative and proposes a donation transaction.

2. The donation is logged in the blockchain as a pending transaction.

3. The peers validate that both the donor and the NGO are legitimate members.

4. Once approved, the donation is performed, finalized and recorded immutably.

5. Finally, the donation is transparently linked to the initiative, ensuring that the funds are traceable ✅.


## 4. Accountability and Evidence of Impact

### Case E: NGO accountability after receiving donations

Once an NGO receives donations, they have a fixed time window to **publish evidence** showing how the funds were used. This evidence is also recorded as a transaction.

#### If no evidence is published

- The initiative’s rating decreases ★★★★☆.

- The NGO’s overall reputation rating decreases as well ★★★☆☆.

#### If evidence is published on time

1. The peers review and validate the evidence.

2. If the evidence meets the requirements:

    - The initiative’s rating increases ★★★★★.

    - The NGO’s reputation rating increases ★★★★★.

#### If the evidence fails the assessment:

1. Both the initiative’s and the NGO’s ratings decrease ★★★☆☆.


!!! warning "Note"
    If an NGO’s overall rating falls below the network average, the organisation will be invited to leave the Rescathena Network.
    This safeguard protects donors, ensures fairness, and guarantees that only the most transparent and trustworthy NGOs remain part of the community.

As a result, NGOs are incentivized to remain **transparent and accountable**, while donors can always see whether their contributions had a real impact.
