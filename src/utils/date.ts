import { ICountdown } from "../@types/date";
import { formatNumber } from "./format";

const getFormatedDay = (date: Date) => {
  const day = date.getDate();

  return formatNumber(day);
};

const getFormatedTime = (date: Date) => {
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  return `${hours}:${minutes}`;
};

const getShortMonth = (date: Date) => {
  const month = date.getMonth();

  return [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ][month];
};

const getCountdown = (start: Date, end: Date): ICountdown => {
  const endDate = end.getTime();
  const startDate = start.getTime();
  const now = new Date().getTime();

  let delta = Math.abs(endDate - now) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const percentage = -(((startDate - now) / (endDate - startDate)) * 100);

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    percentage,
  };
};

export { getFormatedDay, getShortMonth, getFormatedTime, getCountdown };
