---
title: Red Rescathena
---


Inspirado por la [Red de Ejemplo](https://hyperledger-fabric.readthedocs.io/en/release-2.5/network/network.html#the-sample-network) explicada en la documentación oficial de hyperledger fabric, esta es una versión simplificada del estado inicial de la Red Rescathena, la cual evolucionará con el tiempo a medida que se añadan nuevas características y funcionalidades.

![Red Rescathena](../assets/images/initial_r_network.svg)


En esta etapa inicial de la Red Rescathena, tenemos los siguientes componentes:

- Las Organizaciones **ROA** (_Organización de Donantes de Rescathena_) y **ROA** (_Organización de Administradores de Rescathena_ ⭐️) establecen la red del canal **RC** (_Canal Rescathena_).

- El **RCC** (_Canal de Configuración de Rescathena_) es una configuración inicial que todos los **pares de ROA** han acordado y que lista la definición de las organizaciones así como las políticas que definen los roles que cada organización jugará en el canal.

- El [Servicio de Ordenamiento](https://hyperledger-fabric.readthedocs.io/en/release-2.5/orderer/ordering_service.html) **OSR** (_Servicio de Ordenamiento Rescathena_) cuyo propietario es la organización **ROA**, está a cargo de ordenar las transacciones y crear los bloques.

- **ROAP1** y **ROAP2** son los [pares](https://hyperledger-fabric.readthedocs.io/en/release-2.5/peers/peers.html) de la organización **ROA**. Son los responsables de mantener la infraestructura de la red. En otras palabras, son los expertos técnicos que aseguran que la red funcione sin problemas. No significa que sean los únicos que pueden respaldar transacciones de cambios de configuración en el canal, ya que esto está definido por las políticas del canal y requiere el respaldo del resto de los pares de las organizaciones.

- **ROAD1** y **ROAD2** son los [pares](https://hyperledger-fabric.readthedocs.io/en/release-2.5/peers/peers.html) de la organización **ROD**. Son una representación de los donantes que financiarán las iniciativas publicadas por las ONG de la Organización Rescathena que formarán parte de la red en el futuro.

- **ROAA1**, **ROAA2**, **RODA1** y **RODA2** son las aplicaciones que interactúan con la red en nombre de los pares. Pueden ser aplicaciones web, aplicaciones móviles, o cualquier otro tipo de aplicación que pueda enviar transacciones a la red.

- **RL** (_Libro Mayor de Rescathena_) es el [libro mayor](https://hyperledger-fabric.readthedocs.io/en/release-2.5/ledger/ledger.html) distribuido que almacena todas las transacciones y estados de la red. Es mantenido por todos los pares en la red y se replica a través de todos ellos para asegurar consistencia y fiabilidad.


### Añadiendo una nueva Organización ONG a la Red Rescathena

!!! note ""
    Ten en cuenta que los derechos y permisos se definen a nivel de canal. Solo porque una organización sea administradora de un canal no significa que sus pares sean los únicos que puedan respaldar transacciones en ese canal.

![Añadiendo una nueva Organización ONG a la Red Rescathena](../assets/images/add_ngo_r_network.svg)

Cuando una nueva Organización de Rescate Animal (ONG) quiere unirse a la Red Rescathena, se toman los siguientes pasos:

- Decidir sobre los permisos y el rol de la nueva organización. El alcance completo de estos derechos debe ser acordado antes de que la organización **RONGO1** sea añadida al canal **RC**. Comprende el mismo tipo de preguntas que en la configuración inicial del canal pero más adaptadas a una organización ONG que publicará iniciativas e informará a los donantes.
- Actualizar el canal, incluyendo los 'chaincodes' relevantes, para reflejar estas decisiones.
- La organización ONG **RONGO1** establece sus pares **RONGOP1** y **RONGOP2**, así como las aplicaciones **RONGOA1** y **RONGOA2**, que interactuarán con la red en nombre de los pares. Es ilógico para una organización ONG tener más de dos pares, de tal manera que los pares son los únicos responsables de interactuar con la Red Rescathena en nombre de la ONG.
