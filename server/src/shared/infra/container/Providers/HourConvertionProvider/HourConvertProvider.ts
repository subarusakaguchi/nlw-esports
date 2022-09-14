import { IHourConvertProvider } from "./IHourConvertProvider";

class HourConvertProvider implements IHourConvertProvider {
  convertHourStringToMinutes(hourString: string): number {
    const [hours, minutes] = hourString.split(":").map(Number);

    const totalMinutes = hours * 60 + minutes;

    return totalMinutes;
  }

  convertMinutesToHourString(minutesAmount: number): string {
    const hours = Math.floor(minutesAmount / 60);

    const minutes = minutesAmount % 60;

    const timeString = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;

    return timeString;
  }
}

export { HourConvertProvider };
