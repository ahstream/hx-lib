const DEFAULT_LOG_LEVEL = 'none';

export function myConsole(logLevel = null) {
  let useLogLevel = getLogLevel() || logLevel || DEFAULT_LOG_LEVEL;

  let log = () => {};
  let trace = () => {};
  let all = () => {};

  if (useLogLevel === 'log') {
    log = console.log.bind(console);
  } else if (useLogLevel === 'trace') {
    log = console.log.bind(console);
    trace = console.log.bind(console);
  } else if (useLogLevel === 'all') {
    log = console.log.bind(console);
    trace = console.log.bind(console);
    all = console.log.bind(console);
  }

  return {
    log,
    trace,
    all,
    error: console.error.bind(console),
    warn: console.warn.bind(console),
    info: console.info.bind(console),
  };
}

export function createLogLevelArg(url = null) {
  const logLevel = getLogLevel(url);
  return logLevel ? `hxlog=${logLevel}` : '';
}

function getLogLevel(url = null) {
  const href = url || location?.href?.toLowerCase();
  if (href.includes('hxlog=log') || href.includes('hxloglovel=log')) {
    return 'log';
  }
  if (href.includes('hxlog=trace') || href.includes('hxloglovel=trace')) {
    return 'trace';
  }
  if (href.includes('hxlog=all') || href.includes('hxloglovel=all')) {
    return 'all';
  }
  return '';
}
