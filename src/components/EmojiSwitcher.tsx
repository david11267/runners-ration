export default function EmojiSwitcher({ number }: { number: number }) {
  let emoji = "";

  switch (true) {
    case number <= -10:
      emoji = "❄️";
      break;
    case number > -10 && number <= 0:
      emoji = "☃️";
      break;
    case number > 0 && number <= 10:
      emoji = "🌥️";
      break;
    case number > 10 && number <= 20:
      emoji = "⛅";
      break;
    case number > 20 && number <= 28:
      emoji = "🌞";
      break;
    case number > 28 && number <= 35:
      emoji = "🔥";
      break;
    case number > 35:
      emoji = "🌡️";
      break;
    default:
      emoji = "❓";
  }

  return <span>{emoji}</span>;
}
