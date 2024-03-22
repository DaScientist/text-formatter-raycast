import { showHUD, Clipboard } from "@raycast/api";
import {} from "react";

export default async function main() {
  const text = await Clipboard.readText();
  const formattedText = text?.replaceAll("<br>", "\n    ");
  await Clipboard.copy(formattedText ?? "");
  await showHUD("Copied formatted text to clipboard to clipboard");
}
