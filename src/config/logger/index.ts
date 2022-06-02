import { $log, PlatformLoggerSettings } from '@tsed/common';
import { isProduction } from '../index';

if (isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["warn", "error"],
    layout: {
      type: "json"
    }
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json"
    }
  });
}

export const loggerConfig: Partial<PlatformLoggerSettings> = {
  disableRoutesSummary: isProduction
};
