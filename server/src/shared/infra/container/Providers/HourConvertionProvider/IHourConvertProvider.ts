interface IHourConvertProvider {
  convertHourStringToMinutes(hour: string): number;
  convertMinutesToHourString(minutes: number): string;
}

export { IHourConvertProvider };
