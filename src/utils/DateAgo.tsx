import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

export const DateAgo = ({ date }: { date: Date }) => {
  const dateString = date.toString();
  const dateParsed = parseISO(dateString);
  const timeAgo = formatDistanceToNow(dateParsed, { addSuffix: true });
  return <p className="text-[#71717A] text-[12px]">{timeAgo}</p>;
};
