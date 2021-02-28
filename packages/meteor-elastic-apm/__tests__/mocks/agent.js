const agent = require('elastic-apm-node');

jest.mock('elastic-apm-node');

function newAgent() {
  agent.currentTransaction = undefined;
  agent.currentSpan = undefined;
  agent.currentTraceparent = undefined;

  agent.captureError = jest.fn();
  agent.startSpan = jest.fn(() => ({
    end: jest.fn(),
    addLabels: jest.fn()
  }));
  agent.startTransaction = jest.fn(() => ({
    addLabels: jest.fn(),
    end: jest.fn()
  }));

  return agent;
}

module.exports = newAgent;
