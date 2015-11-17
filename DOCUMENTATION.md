# node-isaac API docs

## API Reference

### ( [logger] ) ⇒ IsaacConnector

Factory function, returns an IsaacConnector instance

| Param    | Type     | Description                                  |
| -----    | ----     | -----------                                  |
| [logger] | `Object` | Object to use as logger, defaults to console |

Example

```js
var isaacConnector = require('node-isaac')(logger);
```

### IsaacConnector.connect(port, host)

Starts a net.Socket connection

| Param    | Type     | Description           |
| -----    | ----     | -----------           |
| port     | `number` | Isaac connection port |
| host     | `string` | Isaac connection host |

Example

```js
isaacConnector.connect(6238, 10.10.1.2);
```

### IsaacConnector.disconnect()

Ends net.Socket connection

Example

```js
isaacConnector.disconnect();
```

### isaacConnector.login(extension, pasword)

Makes a login attempt

| Param         | Type     | Description     |
| -----         | ----     | -----------     |
| extension     | `string` | Agent extension |
| password      | `string` | Agent password  |

Example

```js
isaacConnector.login('223', '1234');
```

### IsaacConnector.logout()

Logout agent from Isaac (shutdowns the connection)

Example

```js
isaacConnector.logout();
```

### IsaacConnector.pause()

Pauses the agent device

Example

```js
isaacConnector.pause();
```

### IsaacConnector.unpause()

Unpauses the agent device

Example

```js
isaacConnector.unpause();
```

### IsaacConnector.suscribe(isaacEvent [opts... ])

Suscribes to an Isaac Event  
Examples: status, devicestatus

| Param         | Type     | Description                       |
| -----         | ----     | -----------                       |
| isaacEvent    | `string` | Isaac Event to suscribe           |
| [opts]        | `any`    | Optional arguments based on event |

Example

```js
isaacConnector.suscribe('devicestatus');
isaacConnector.suscribe('status', true, true); //WUID, WQUEUE
```

### isaacConnector.getQueues()

Prints queues list

Example

```js
isaacConnector.getQueues();
```

### isaacConnector.joinQueue(queueName)

Joins the agent to specified queue

| Param         | Type     | Description                       |
| -----         | ----     | -----------                       |
| queueName     | `string` | Queue identifier                  |

Example

```js
isaacConnector.joinQueue('colaPrueba');
```

### isaacConnector.leaveQueue(queueName)

Leaves the agent from specified queue

| Param         | Type     | Description                       |
| -----         | ----     | -----------                       |
| queueName     | `string` | Queue identifier                  |

Example

```js
isaacConnector.leaveQueue('colaPrueba');
```

### isaacConnector.createCall(number, [refId])

Calls to specified number

| Param         | Type     | Description             |
| -----         | ----     | -----------             |
| number        | `string` | Number to call          |
| refId         | `string` | Optional custom call id |

Example

```js
isaacConnector.createCall('220', 'idPrueba');
```

### isaacConnector.holdCall(refId, [fromQueue])

Holds specified call

| Param       | Type      | Description                                          |
| -----       | ----      | -----------                                          |
| refId       | `string`  | Asterisk call id                                     |
| [fromQueue] | `boolean` | Optional. Call is received from queue, defaults true |

Example

```js
isaacConnector.holdCall('idPrueba');
```

### isaacConnector.unholdCall(refId, [fromQueue])

Unholds specified call

| Param       | Type      | Description                                          |
| -----       | ----      | -----------                                          |
| refId       | `string`  | Asterisk call id                                     |
| [fromQueue] | `boolean` | Optional. Call is received from queue, defaults true |

Example

```js
isaacConnector.unholdCall('idPrueba');
```

### isaacConnector.hangupCall(refId, [fromQueue])

Answers specified call

| Param       | Type      | Description                                          |
| -----       | ----      | -----------                                          |
| refId       | `string`  | Asterisk call id                                     |
| [fromQueue] | `boolean` | Optional. Call is received from queue, defaults true |

Example

```js
isaacConnector.hangupCall('idPrueba');
```

### isaacConnector.answerCall(refId)

Answers specified call

| Param         | Type     | Description      |
| -----         | ----     | -----------      |
| refId         | `string` | Asterisk call id |

Example

```js
isaacConnector.answerCall('idPrueba');
```

### isaacConnector.transferCall(refId, number) **NOT IMPLEMENTED YET**

Transfers the call to specified number

| Param         | Type     | Description        |
| -----         | ----     | -----------        |
| refId         | `string` | Asterisk call id   |
| number        | `string` | Number to transfer |

### isaacConnector.on(event, callback)

Listens to specified event

| Param         | Type       | Description                            |
| -----         | ----       | -----------                            |
| event         | `string`   | Event name                             |
| callback      | `function` | Function to execute when event happens |

Example

```js
isaacConnector.on('agent.login', handleLoginResult);
```

### isaacConnector.removeAllListeners(event)

Removes all listeners attached to specified event

| Param         | Type       | Description                            |
| -----         | ----       | -----------                            |
| event         | `string`   | Event name                             |

Example

```js
isaacConnector.removeAllListeners('agent.login');
```

***

## Events

### 'isaac.connect'

Event fired as response to a connection attempt

**Kind**: This event will always return the same output (event: isaac.connect & status: success), **if
it doesn't you're doing something really wrong!!!**

| Param  | Type     | Description                   |
| -----  | ----     | -----------                   |
| event  | `string` | Event name ('isaac.connect')  |
| status | `string` | Status ('success')            |

### isaac.disconnect'

Event fired when ISAAC connection is closed

**Kind**: This event will always return the same output (event: isaac.disconnect), **if
it doesn't you're doing something really wrong!!!**

| Param  | Type     | Description                      |
| -----  | ----     | -----------                      |
| event  | `string` | Event name ('isaac.disconnect')  |

### 'isaac.error'

Event fired when an error happened

| Param   | Type     | Description                 |
| -----   | ----     | -----------                 |
| event   | `string` | Event name ('isaac.error')  |
| error   | `string` | Error code                  |
| message | `string` | Error message               |

### 'agent.login'

Event fired as response to a login attempt

| Param   | Type     | Description                           |
| -----   | ----     | -----------                           |
| event   | `string` | Event name ('agent.login')            |
| status  | `string` | Response status (success or error)    |
| message | `string` | Response message                      |
| [error] | `string` | Error code (only if status==='error') |

### 'agent.logout'

Event fired when agent is logged out

**Kind**: This event will always return the same output (event: agent.logout), **if
it doesn't you're doing something really wrong!!!**

| Param   | Type     | Description                 |
| -----   | ----     | -----------                 |
| event   | `string` | Event name ('agent.logout') |

### 'device.status'

Event fired when device status changes (paused, unpaused)

| Param   | Type     | Description                                 |
| -----   | ----     | -----------                                 |
| event   | `string` | Event name ('device.status')                |
| status  | `string` | Device status (IDLE or PAUSED or UNPAUSED)  |
| message | `string` | 'Device Status updated'                     |

### 'queues.list'

Event fired with agent suscribed queues list

| Param   | Type     | Description                                 |
| -----   | ----     | -----------                                 |
| event   | `string` | Event name ('queues.list')                  |
| queues  | `array`  | Array with queues names                     |

### 'queues.join'

Event fired when as response to a joinQueue request

| Param   | Type     | Description                                 |
| -----   | ----     | -----------                                 |
| event   | `string` | Event name ('queues.join')                  |
| status  | `string` | Response status (success or error)          |
| message | `string` | Response message                            |

### 'queues.leave'

Event fired when as response to a leaveQueue request

| Param   | Type     | Description                                 |
| -----   | ----     | -----------                                 |
| event   | `string` | Event name ('queues.leave-')                |
| status  | `string` | Response status (success or error)          |
| message | `string` | Response message                            |

### 'call.status'

Event fired when a call for the logged agent is created or changed it's status

| Param      | Type      | Description                                  |
| -----      | ----      | -----------                                  |
| event      | `string`  | Event name ('call.status')                   |
| refId      | `string`  | Asterisk call identifier                     |
| status     | `string`  | Call status (STARTING, RINGING, ANSWERED...) |
| fromQueue  | `boolean` | Call comes from queue                        |
| [source]   | `string`  | AGENT or REMOTE (only if fromQueue===false)  |
| [queue]    | `string`  | Queue name (only if fromQueue===true)        |
| [number]   | `string`  | Call number (only if fromQueue===true)       |

#### Status values

| Value         |
| -----         |
| RINGING       |
| ANSWERED      |
| HOLD          |
| UNHOLD        |
| HANGUP        |
| UNKNOWNHANGUP |

### 'call.hold'

Event fired as response to a hold attempt in a call

| Param      | Type      | Description                                  |
| -----      | ----      | -----------                                  |
| event      | `string`  | Event name ('call.hold')                   |
| status     | `string`  | Response status (success or error)           |
| fromQueue  | `boolean` | Hangup request was for queue call            |
| message    | `string`  | Isaac message                                |

### 'call.unhold'

Event fired as response to an unhold attempt in a call

| Param      | Type      | Description                                  |
| -----      | ----      | -----------                                  |
| event      | `string`  | Event name ('call.unhold')                   |
| status     | `string`  | Response status (success or error)           |
| fromQueue  | `boolean` | Hangup request was for queue call            |
| message    | `string`  | Isaac message                                |

### 'call.hangup'

Event fired as response to a hangup attempt in a call

| Param      | Type      | Description                                  |
| -----      | ----      | -----------                                  |
| event      | `string`  | Event name ('call.hangup')                   |
| status     | `string`  | Response status (success or error)           |
| fromQueue  | `boolean` | Hangup request was for queue call            |
| message    | `string`  | Isaac message                                |
