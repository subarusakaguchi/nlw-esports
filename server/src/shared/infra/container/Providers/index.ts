import { container } from "tsyringe";

import { HourConvertProvider } from "./HourConvertionProvider/HourConvertProvider";
import { IHourConvertProvider } from "./HourConvertionProvider/IHourConvertProvider";

container.registerSingleton<IHourConvertProvider>(
  "HourConvertProvider",
  HourConvertProvider
);
