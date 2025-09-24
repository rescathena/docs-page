---
title: How does it Works?
---


## Rescathena Network

Inspired by the [Sample Network](https://hyperledger-fabric.readthedocs.io/en/release-2.5/network/network.html#the-sample-network) explained in the official documentation of hyperledger fabric documentation, this is a simplified version of the initial state of the Rescathena Network, which will evolve over time as new features and functionalities are added.

![Rescathena Network](assets/images/initial_r_network.svg)


In this initial stage of the Rescathena Network, we have the following components:

- The Organizations **ROA** (_Rescathena Organization Donors_) and **ROA** (_Rescathena Organization Administrators_ ⭐️) stablish the network of channel **RC** (_Rescathena Channel_).

- The **RCC** (_Rescathena Configuration Channel_) is an initial configuration that all the **ROA's peers** have agrred to and which list the definition of the organizations as well as the policies which define the roles each organization will play on the channel.

- The [Ordering Service](https://hyperledger-fabric.readthedocs.io/en/release-2.5/orderer/ordering_service.html) **OSR** (_Ordering Service Rescathena_) which owner is the **ROA** organization, is in charge of ordering the transactions and creating the blocks.

- **ROAP1** and **ROAP2** are the [peers](https://hyperledger-fabric.readthedocs.io/en/release-2.5/peers/peers.html) of the **ROA** organization. They are the ones responsible for maintaining the infrastructure of the network, validating and committing transactions. In other words, they are the technical experts that ensure the network runs smoothly.

- **ROAD1** and **ROAD2** are the [peers](https://hyperledger-fabric.readthedocs.io/en/release-2.5/peers/peers.html) of the **ROD** organization. They are a repsresentation of the donors that will fund the initiatives published by the Rescaetha Organizations NGOs that will be part of the network in the future.

- **ROAA1**, **ROAA2**, **RODA1** and **RODA2** are the applications that interact with the network on behalf of the peers. They can be web applications, mobile applications, or any other type of application that can send transactions to the network.

- **RL** (_Rescathena Ledger_) is the distributed [ledger](https://hyperledger-fabric.readthedocs.io/en/release-2.5/ledger/ledger.html) that stores all the transactions and states of the network. It is maintained by all the peers in the network and is replicated across all of them to ensure consistency and reliability.


### Adding a new NGO Organization to the Rescathena Network

!!! note ""
    Note that rights and permissions are defined at a channel level. Just because an organization is an administrator of one channel does not mean its pairs are the only one that can endorse transactions on that channel.

When a new Animal Rescue Organization (NGO) wants to join the Rescathena Network, the following steps are taken:

- Decide on the new organization's permissions and role. The full scope of these rights must be agreed before the **RONGO1** organization is added to the channel **RC**. It comprises the same kind of questions as in the initial configuration of the channel but more tailored to a NGO organization that will publish initiatives and report back to the donors.
- Update the channel, including the relevant chaincodes, to reflect these decisions.
- The NGO organisation **RONGO1** establishes its peers **RONGOP1** and **RONGOP2**, as well as the applications **RONGOA1** and **RONGOA2**, which will interact with the network on behalf of the peers.It is illogical for an NGO organisation to have more than two peers, such that the peers are solely responsible for interacting with the Rescatehna Network on behalf of the NGO.

## Transaction Flow in Rescathena


Following the same guidelines as the Hyperledger's Transaction flow where the explain the process of a transaction in a blockchain network, we can outline how Rescathena operates in a similar manner. The Rescathena scenario involves Animal Rescue Organizations (AROs) that publish their initiatives, donors who fund these initiatives with donations through the Rescathena Network and the AROs that execute the initiatives and report back to the donors through the Rescathena Network.



