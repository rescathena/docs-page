---
title: Casos de Uso
---

## Flujos de Transacción en Rescathena

Siguiendo las mismas pautas que el [Flujo de Transacción de Hyperledger](https://hyperledger-fabric.readthedocs.io/en/release-2.5/txflow.html) donde explican el proceso de una transacción en una red blockchain, podemos describir cómo opera Rescathena de manera similar. El escenario de Rescathena involucra a Organizaciones de Rescate Animal (ONGs) que publican sus iniciativas, donantes que financian estas iniciativas con donaciones a través de la Red Rescathena y las ONGs que ejecutan las iniciativas e informan a los donantes a través de la Red Rescathena.

A continuación, explicamos cómo funciona el [flujo de transacción](https://hyperledger-fabric.readthedocs.io/en/release-2.5/txflow.html) en diferentes casos de uso de Rescathena.

## 1. Uniéndose a la Red Rescathena

### Caso A: Una nueva ONG de Rescate Animal solicita unirse

1. La ONG envía una solicitud para formar parte de la Red Rescathena.

2. Esta solicitud se registra como una propuesta de transacción en la blockchain.

3. Los pares de la red (_miembros de confianza existentes_) revisan la solicitud.

4. Si la mayoría verifica respaldando, la ONG se añade oficialmente a la blockchain como una organización reconocida ✅.


### Caso B: Un donante solicita unirse

1. Al igual que las ONGs, los donantes deben solicitar pertenecer a la red.

2. Su identidad es validada y almacenada en la blockchain.

3. Una vez aprobado por respaldo, al Donante se le otorgará permiso para interactuar con ONGs e iniciativas ✅.


## 2. Publicando Iniciativas

### Caso C: Una ONG publica una nueva iniciativa de rescate

1. La ONG envía los detalles de la iniciativa (propósito, necesidades de financiamiento, plazos).

2. Este envío se registra como una transacción blockchain.

3. Los pares validan la entrada, asegurando que proviene de una ONG verificada, que el propósito tiene sentido con las necesidades de financiamiento y plazos.

4. Si la mayoría de los pares aprueban la iniciativa, se vuelve visible en la Red Rescathena y lista para recibir donaciones ✅.

5. De lo contrario, si la iniciativa es rechazada, la ONG es notificada con las razones del rechazo ❌.


## 3. Realizando donaciones

### Caso D: Un donante realiza una donación a una iniciativa

1. El donante selecciona una iniciativa y propone una transacción de donación.

2. La donación se registra en la blockchain como una transacción pendiente.

3. Los pares validan que tanto el donante como la ONG sean miembros legítimos.

4. Una vez aprobada, la donación se realiza, finaliza y se registra de forma inmutable.

5. Finalmente, la donación se vincula de forma transparente a la iniciativa, asegurando que los fondos sean rastreables ✅.


## 4. Rendición de Cuentas y Evidencia de Impacto

### Caso E: Rendición de cuentas de la ONG después de recibir donaciones

Una vez que una ONG recibe donaciones, tienen una ventana de tiempo fija para **publicar evidencia** mostrando cómo se utilizaron los fondos. Esta evidencia también se registra como una transacción.

#### Si no se publica evidencia

- La calificación de la iniciativa disminuye ★★★★☆.

- La calificación de reputación general de la ONG disminuye también ★★★☆☆.

#### Si se publica evidencia a tiempo

1. Los pares revisan y validan la evidencia.

2. Si la evidencia cumple con los requisitos:

    - La calificación de la iniciativa aumenta ★★★★★.

    - La calificación de reputación de la ONG aumenta ★★★★★.

#### Si la evidencia falla la evaluación:

1. Tanto la calificación de la iniciativa como la de la ONG disminuyen ★★★☆☆.


!!! warning "Nota"
    Si la calificación general de una ONG cae por debajo del promedio de la red, la organización será invitada a abandonar la Red Rescathena.
    Esta salvaguarda protege a los donantes, asegura equidad, y garantiza que solo las ONGs más transparentes y confiables permanezcan como parte de la comunidad.

Como resultado, las ONGs son incentivadas a permanecer **transparentes y responsables**, mientras que los donantes siempre pueden ver si sus contribuciones tuvieron un impacto real.
